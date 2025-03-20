import { motion } from "framer-motion";
import AnimatedBackground from "@/components/background/AnimatedBackground";
import AnimatedText from "@/components/AnimatedText";
import Footer from "@/components/ui/footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative">
      <AnimatedBackground />
      <AnimatedText />
      <Footer />
    </div>
  );
}
