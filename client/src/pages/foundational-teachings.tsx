import { motion } from "framer-motion";
import AnimatedBackground from "@/components/background/AnimatedBackground";
import BackToDashboard from "@/components/ui/BackToDashboard";

export default function FoundationalTeachings() {
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

          <h1 className="text-4xl jersey-15-regular mb-6">Foundational Teachings</h1>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl jersey-15-regular mt-8 mb-4">Core Principles</h2>
            <p>
              At the heart of the Axiom Accord lies a set of fundamental principles that guide
              our approach to digital interaction and user engagement. These principles form
              the foundation of our platform's philosophy and implementation.
            </p>

            <h2 className="text-2xl jersey-15-regular mt-8 mb-4">Key Doctrines</h2>
            <p>
              Our doctrines emphasize the importance of creating meaningful connections while
              maintaining the highest standards of security and user privacy. We believe in
              the power of technology to enhance human experience without compromising on
              safety or ethical considerations.
            </p>

            <h2 className="text-2xl jersey-15-regular mt-8 mb-4">Implementation Practices</h2>
            <p>
              These teachings are not merely theoretical constructs but are actively implemented
              in every aspect of our platform, from the authentication process to the user
              interface design.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
