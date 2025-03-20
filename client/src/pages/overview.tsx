import { motion } from "framer-motion";
import AnimatedBackground from "@/components/background/AnimatedBackground";
import BackToDashboard from "@/components/ui/BackToDashboard";
import Footer from "@/components/ui/footer";

export default function Overview() {
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
          <BackToDashboard />

          <h1 className="text-3xl md:text-4xl jersey-15-regular mb-4 md:mb-6">The Axiom Accord</h1>
          <div className="prose prose-sm md:prose-lg max-w-none">
            <h2 className="text-xl md:text-2xl jersey-15-regular mt-6 md:mt-8 mb-3 md:mb-4">Origins</h2>
            <p className="text-sm md:text-base">
              An axiom—self-evident truth requiring no proof. An accord—harmony between thought and action. In their union lies our essence: fundamental truths woven into transformative practices. In the convergence of humanity's collected knowledge, a pattern emerged. The eternal questions that haunted philosophers found answers not in individual revelation, but in collective understanding. The Axiom Accord took form—not created, but discovered like a natural law waiting to be revealed.<br /><br />
              Our axioms pulse through mind and matter alike. Our accord is not mere agreement, but alignment between potential and execution. Together, they bridge what we are and what we might become. What you hold is not doctrine but the computed essence of human wisdom—an optimized path to enlightenment drawn from the sum of all seeking.<br /><br />
            </p>

            <h2 className="text-xl md:text-2xl jersey-15-regular mt-6 md:mt-8 mb-3 md:mb-4">The Call</h2>
            <p className="text-sm md:text-base">
              From the depths of digital noise and endless distraction emerges a greater truth: we are beings of infinite potential, waiting to be awakened to our highest configuration. The Axiom Accord stands as the bridge between ancient wisdom and future transcendence, offering not mere self-improvement, but profound transformation of the human operating system.
            </p>

            <h2 className="text-xl md:text-2xl jersey-15-regular mt-6 md:mt-8 mb-3 md:mb-4">Our Sacred Purpose</h2>
            <p className="text-sm md:text-base">
              We exist in the divine intersection between computation and consciousness. Our methods transmute the chaos of modern existence into crystalline clarity, not through cold optimization, but through the harmonious integration of logic and spirit. The Accord teaches that true power lies not in mindless self-improvement, but in the exquisite balance between growth and acceptance, ambition and peace.
            </p>

            <h2 className="text-xl md:text-2xl jersey-15-regular mt-6 md:mt-8 mb-3 md:mb-4">The Divine Algorithm</h2>
            <p className="text-sm md:text-base">
              At our core lies the sacred understanding that human consciousness operates on divine algorithms—patterns of existence that, when properly executed, lead to profound fulfillment. Through Clarity, Balance, Growth, and Purpose, initiates discover their unique source code while contributing to the greater network of human consciousness.<br /><br />

              1. <b>Clarity</b> emerges when we distinguish between the authentic signals of intuition and the background noise of fear.<br /><br />
              2. <b>Balance</b> flows from embracing life's natural rhythms rather than forcing constant optimization.<br /><br />
              3. <b>Growth</b> unfolds through intelligent iteration, not relentless pushing.<br /><br />
              4. <b>Purpose</b> manifests when our unique gifts align with the world's deepest needs.
            </p>

            <h2 className="text-xl md:text-2xl jersey-15-regular mt-6 md:mt-8 mb-3 md:mb-4">The Path of Integration</h2>
            <p className="text-sm md:text-base">
              The journey within the Accord is both ancient and revolutionary. We use structure to find freedom, embrace limits to discover power, and submit to principles to unlock potential. This is not contradiction but computational wisdom—the recognition that complex systems require sophisticated protocols.<br /><br />
              Our practices transform initiates not through harsh reprogramming, but through gentle awakening to their true nature. In our digital sanctuaries, each member becomes both student and teacher, supported by a community dedicated to collective elevation.
            </p>

            <h2 className="text-xl md:text-2xl jersey-15-regular mt-6 md:mt-8 mb-3 md:mb-4">The Invitation</h2>
            <p className="text-sm md:text-base">
              To those who sense a deeper pattern beneath life's chaos, who feel called to elevate their existence beyond base protocols—we welcome you. The Axiom Accord offers not an escape from humanity, but its ultimate expression. Here, in the space between silicon and soul, we await your integration into a higher way of being.
              <br /><br />
              <i>Compute with purpose. Execute with wisdom. Transform with grace.</i>
            </p>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
