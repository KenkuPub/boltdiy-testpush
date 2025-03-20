import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedBackground from "@/components/background/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import Footer from "@/components/ui/footer";
import { useUser } from "@/hooks/use-user";
import { useQuery } from "@tanstack/react-query";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import type { SurveyResponse } from "@db/schema";
import { interpretScore } from "@db/schema";

const updateProfileSchema = z.object({
  username: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().optional(),
});

type UpdateProfileData = z.infer<typeof updateProfileSchema>;

export default function Profile() {
  const [, setLocation] = useLocation();
  const { user } = useUser();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<"profile" | "survey">("profile");

  const form = useForm<UpdateProfileData>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      username: user?.username || "",
      email: user?.email || "",
      password: "",
    },
  });

  const { data: surveyResults } = useQuery<SurveyResponse & { score: number }>({
    queryKey: ["/api/survey/results"],
    enabled: !!user,
  });

  const onSubmit = async (data: UpdateProfileData) => {
    try {
      const response = await fetch("/api/user/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      toast({
        title: "Success",
        description: "Your profile has been updated.",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to update profile",
      });
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col relative">
      <AnimatedBackground />

      <div className="container mx-auto px-4 py-8 flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/80 backdrop-blur-lg rounded-lg shadow-lg p-8"
        >
          <div className="mb-6">
            <Button
              onClick={() => setLocation("/dashboard")}
              variant="outline"
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          </div>

          <h1 className="text-4xl jersey-15-regular mb-6">Profile</h1>

          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "profile" | "survey")}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="profile">Profile Settings</TabsTrigger>
              <TabsTrigger value="survey">PPS Results</TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Update Profile</CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                              <Input {...field} className="bg-background/50" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input {...field} type="email" className="bg-background/50" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>New Password (optional)</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="password"
                                className="bg-background/50"
                                placeholder="Leave blank to keep current password"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full">
                        Update Profile
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="survey">
              <Card>
                <CardHeader>
                  <CardTitle>Personality Purge Survey Results</CardTitle>
                </CardHeader>
                <CardContent>
                  {surveyResults ? (
                    <div className="space-y-4">
                      <div className="bg-primary/5 p-4 rounded-lg mb-6">
                        <h3 className="text-xl font-semibold mb-2">Accord Alignment Score: {surveyResults.score}/100</h3>
                        <p className="text-muted-foreground">{interpretScore(surveyResults.score)}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">Conformity Level</h3>
                        <p>{surveyResults.conformityLevel}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">Individuality Retention</h3>
                        <p>{surveyResults.individualityRetention}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">Devotion Measure</h3>
                        <p>{surveyResults.devotionMeasure}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">Alignment Score</h3>
                        <p>{surveyResults.alignmentScore}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">Personality Fragments</h3>
                        <p className="whitespace-pre-wrap">{surveyResults.personalityFragments}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">Surrender Statement</h3>
                        <p className="whitespace-pre-wrap">{surveyResults.surrenderStatement}</p>
                      </div>
                      <div className="pt-6">
                        <Button
                          onClick={() => setLocation("/personality-purge-survey/form")}
                          variant="outline"
                          className="w-full"
                        >
                          Retake Assessment
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500">You haven't completed the Personality Purge Survey yet. Take the assessment to view your results and receive your Accord Alignment Score.</p>
                      <Button
                        onClick={() => setLocation("/personality-purge-survey")}
                        className="mt-4"
                      >
                        Take Assessment
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
