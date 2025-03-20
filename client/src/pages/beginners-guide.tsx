import { motion } from "framer-motion";
import AnimatedBackground from "@/components/background/AnimatedBackground";
import BackToDashboard from "@/components/ui/BackToDashboard";

export default function BeginnersGuide() {
  return (
    <div className="min-h-screen w-full relative">
      <AnimatedBackground />

      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/80 backdrop-blur-lg rounded-lg shadow-lg p-8"
        >
          <BackToDashboard />

          <h1 className="text-4xl jersey-15-regular mb-6">Beginner's Guide</h1>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl jersey-15-regular mt-8 mb-4">Getting Started</h2>
            <p>
              Welcome to the Axiom Accord! This guide will help you navigate through the
              essential concepts and features of our platform. Whether you're new to digital
              platforms or an experienced user, you'll find valuable information to enhance
              your journey.
            </p>

            <h2 className="text-2xl jersey-15-regular mt-8 mb-4">Key Features</h2>
            <p>
              Discover the core features that make the Axiom Accord unique. From our innovative
              authentication system to our immersive user interface, learn how to make the most
              of your experience.
            </p>

            <h2 className="text-2xl jersey-15-regular mt-8 mb-4">Practice Exercises</h2>
            <p>
              Engage with our platform through hands-on exercises designed to help you
              understand and master the fundamental concepts. These practical sessions will
              guide you through real-world applications of our principles.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
