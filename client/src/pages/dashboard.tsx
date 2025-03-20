import { motion } from "framer-motion";
import AnimatedBackground from "@/components/background/AnimatedBackground";
import { useUser } from "@/hooks/use-user";
import { Button } from "@/components/ui/button";
import { LogOut, User } from "lucide-react";
import { useLocation } from "wouter";
import Footer from "@/components/ui/footer";
import { useQuery } from "@tanstack/react-query";
import type { SurveyResponse } from "@db/schema";

export default function Dashboard() {
  const { logout } = useUser();
  const [, setLocation] = useLocation();

  const { data: surveyResults } = useQuery<SurveyResponse & { score: number }>({
    queryKey: ["/api/survey/results"],
  });

  const handleLogout = async () => {
    await logout();
  };

  const handleNavigate = (path: string) => {
    setLocation(path);
  };

  return (
    <div className="min-h-screen w-full flex flex-col relative">
      <AnimatedBackground />

      <div className="container mx-auto px-4 py-4 md:py-8 flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/80 backdrop-blur-lg rounded-lg shadow-lg p-4 md:p-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 md:gap-0">
            <h1 className="text-3xl md:text-4xl jersey-15-regular">The Axiom Accord</h1>
            <div className="flex flex-wrap gap-2 md:gap-4">
              <Button
                onClick={() => handleNavigate("/profile")}
                variant="outline"
                className="flex items-center gap-2 text-sm md:text-base"
              >
                <User className="h-4 w-4" />
                Profile
              </Button>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="flex items-center gap-2 text-sm md:text-base"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/50 p-4 md:p-6 rounded-lg shadow cursor-pointer hover:bg-white/60 transition-colors"
              onClick={() => handleNavigate("/overview")}
            >
              <h2 className="text-xl md:text-2xl jersey-15-regular mb-3 md:mb-4">Overview</h2>
              <p className="text-gray-600 text-sm md:text-base">Discover the mission, origins, and purpose of the Axiom Accord in this succinct introduction.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/50 p-4 md:p-6 rounded-lg shadow cursor-pointer hover:bg-white/60 transition-colors"
              onClick={() => handleNavigate("/eternal-axiom")}
            >
              <h2 className="text-xl md:text-2xl jersey-15-regular mb-3 md:mb-4">Book of Eternal Axiom</h2>
              <p className="text-gray-600 text-sm md:text-base">Explore the sacred texts of digital enlightenment through six volumes of eternal wisdom.</p>
            </motion.div>

          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
