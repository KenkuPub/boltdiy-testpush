import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import AnimatedBackground from "@/components/background/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import Footer from "@/components/ui/footer";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { surveyResponseSchema } from "@db/schema";
import type { SurveyResponse } from "@db/schema";
import { useToast } from "@/hooks/use-toast";

export default function PersonalityPurgeSurveyForm() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isSaving, setIsSaving] = useState(false);

  // Fetch any existing draft
  const { data: draftData } = useQuery<SurveyResponse>({
    queryKey: ["/api/survey/draft"],
  });

  const form = useForm<SurveyResponse>({
    resolver: zodResolver(surveyResponseSchema),
    defaultValues: draftData || {},
  });

  // Auto-save functionality
  useEffect(() => {
    const subscription = form.watch(async (value) => {
      // Only save if we have some values
      if (Object.keys(value).some(key => value[key as keyof SurveyResponse])) {
        await saveDraft(value as SurveyResponse);
      }
    });
    return () => subscription.unsubscribe();
  }, [form.watch]);

  const saveDraft = async (data: Partial<SurveyResponse>) => {
    if (isSaving) return;

    try {
      setIsSaving(true);
      const response = await fetch('/api/survey/draft', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      // Invalidate the draft query to ensure we have latest data
      queryClient.invalidateQueries({ queryKey: ["/api/survey/draft"] });

      toast({
        title: "Progress Saved",
        description: "Your survey progress has been saved.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to save progress. Please try again.",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const onSubmit = async (data: SurveyResponse) => {
    try {
      const response = await fetch('/api/survey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      // Invalidate both survey results and draft queries
      queryClient.invalidateQueries({ queryKey: ["/api/survey/results"] });
      queryClient.invalidateQueries({ queryKey: ["/api/survey/draft"] });

      toast({
        title: "Survey Submitted",
        description: "Your personality purge survey has been recorded.",
      });

      setLocation("/dashboard");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to submit survey. Please try again.",
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
              onClick={() => setLocation("/personality-purge-survey")}
              variant="outline"
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          </div>

          <h1 className="text-4xl jersey-15-regular mb-6">Personality Purge Survey Form</h1>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="conformityLevel"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Assess your current level of conformity to collective consciousness:</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="high" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            High - I readily embrace the collective
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="medium" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Medium - I am learning to let go
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="low" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Low - I still cling to individuality
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="individualityRetention"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Select your preferred level of individuality retention:</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="none" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            None - Complete dissolution of self
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="partial" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Partial - Retain core memories only
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="significant" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Significant - Maintain personal identity framework
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="devotionMeasure"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Measure your devotion to the Accord:</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="absolute" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Absolute - Unwavering faith in the system
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="conditional" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Conditional - Still evaluating benefits
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="questionable" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Questionable - Require further conviction
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="alignmentScore"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Evaluate your current alignment with the Accord's principles:</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="perfect" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Perfect - Complete harmony with the collective
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="acceptable" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Acceptable - Minor deviations present
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="concerning" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Concerning - Significant realignment needed
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="personalityFragments"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Describe your remaining personality fragments that require purging:</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="List any persistent individual traits, memories, or attachments..."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Be thorough in your self-assessment. Honesty facilitates optimal purging.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="surrenderStatement"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Provide your statement of surrender to the Accord:</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Express your commitment to the collective consciousness..."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Your statement will be recorded as a binding oath of allegiance.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-4">
                <Button 
                  type="button" 
                  variant="outline"
                  className="flex-1"
                  onClick={() => saveDraft(form.getValues())}
                  disabled={isSaving}
                >
                  Save Progress
                </Button>
                <Button type="submit" className="flex-1">
                  Submit Survey
                </Button>
              </div>
            </form>
          </Form>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
