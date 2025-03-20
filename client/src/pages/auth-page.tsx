import { motion } from "framer-motion";
import AnimatedBackground from "@/components/background/AnimatedBackground";
import AuthForm from "@/components/auth/AuthForm";
import Footer from "@/components/ui/footer";

export default function AuthPage() {
  const title = "Axiom Accord";

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <div className="min-h-screen w-full flex flex-col relative">
      <AnimatedBackground />

      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <motion.div
          style={{ display: 'flex', overflow: 'hidden' }}
          variants={container}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          {title.split("").map((letter, index) => (
            <motion.span
              key={index}
              variants={child}
              className={`text-4xl md:text-6xl jersey-15-regular text-white inline-block ${
                letter === " " ? "mr-4" : "mr-[0.1em]"
              } hover:text-primary hover:scale-110 transition-colors`}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        <AuthForm />
      </div>

      <Footer />
    </div>
  );
}
