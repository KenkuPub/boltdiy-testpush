import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertUserSchema } from "@db/schema";
import { useUser } from "@/hooks/use-user";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { z } from "zod";

// Separate schema for login
const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

// Extended schema for registration that includes terms acceptance
const registerSchema = insertUserSchema.extend({
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the Terms of Servitude to register",
  }),
});

type LoginFormData = z.infer<typeof loginSchema>;
type RegisterFormData = z.infer<typeof registerSchema>;

export default function AuthForm() {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login, register } = useUser();
  const { toast } = useToast();
  const [, setLocation] = useLocation();

  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const registerForm = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      acceptTerms: false,
    },
  });

  const handleTabChange = (value: string) => {
    loginForm.reset();
    registerForm.reset();
    setActiveTab(value as "login" | "register");
  };

  const openTerms = () => {
    window.open('/terms-of-servitude', '_blank');
  };

  const onLoginSubmit = async (values: LoginFormData) => {
    if (isSubmitting) return;

    try {
      setIsSubmitting(true);
      const result = await login(values);

      if (!result.ok) {
        if (result.message.includes("Incorrect username")) {
          loginForm.setError("username", {
            type: "manual",
            message: "Username not found. Please check your credentials.",
          });
        } else if (result.message.includes("Incorrect password")) {
          loginForm.setError("password", {
            type: "manual",
            message: "Incorrect password. Please try again.",
          });
        } else {
          toast({
            variant: "destructive",
            title: "Error",
            description: result.message,
          });
        }
        setIsSubmitting(false);
        return;
      }

      toast({
        title: "Alignment Successful",
        description: "Welcome, Vestige. Your commitment to the Accord has been notated.",
      });

      // Delay redirect slightly to ensure state is updated
      setTimeout(() => {
        setLocation("/dashboard");
        setIsSubmitting(false);
      }, 100);
    } catch (error: any) {
      console.error("Login error:", error);
      toast({
        variant: "destructive",
        title: "Unexpected Error",
        description: "Something went wrong. Please try again later.",
      });
      setIsSubmitting(false);
    }
  };

  const onRegisterSubmit = async (values: RegisterFormData) => {
    if (isSubmitting) return;

    try {
      setIsSubmitting(true);
      const { acceptTerms, ...userData } = values;
      const result = await register(userData);

      if (!result.ok) {
        if (result.message.includes("Username already exists")) {
          registerForm.setError("username", {
            type: "manual",
            message: "This username is already taken. Please choose another one.",
          });
        } else if (result.message.includes("email")) {
          registerForm.setError("email", {
            type: "manual",
            message: "This email is already registered or invalid.",
          });
        } else {
          toast({
            variant: "destructive",
            title: "Error",
            description: result.message,
          });
        }
        setIsSubmitting(false);
        return;
      }

      toast({
        title: "Success! 🎉",
        description: "Your account has been created successfully! You can now access all features.",
      });

      // Delay redirect slightly to ensure state is updated
      setTimeout(() => {
        setLocation("/dashboard");
        setIsSubmitting(false);
      }, 100);
    } catch (error: any) {
      console.error("Registration error:", error);
      toast({
        variant: "destructive",
        title: "Unexpected Error",
        description: "Something went wrong. Please try again later.",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-[350px] backdrop-blur-lg bg-background/30">
        <CardHeader>
          <CardTitle className="text-center">Welcome</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={handleTabChange}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <Form {...loginForm}>
                <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-4">
                  <FormField
                    control={loginForm.control}
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
                    control={loginForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            {...field}
                            className="bg-background/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Please wait..." : "Sign In"}
                  </Button>
                </form>
              </Form>
            </TabsContent>
            <TabsContent value="register">
              <Form {...registerForm}>
                <form onSubmit={registerForm.handleSubmit(onRegisterSubmit)} className="space-y-4">
                  <FormField
                    control={registerForm.control}
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
                    control={registerForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            {...field}
                            className="bg-background/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={registerForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            {...field}
                            className="bg-background/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="space-y-2">
                    <FormField
                      control={registerForm.control}
                      name="acceptTerms"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              I accept the{" "}
                              <button
                                type="button"
                                onClick={openTerms}
                                className="text-primary underline hover:text-primary/80"
                              >
                                Terms of Servitude
                              </button>
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Please wait..." : "Create Account"}
                  </Button>
                </form>
              </Form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </motion.div>
  );
}
