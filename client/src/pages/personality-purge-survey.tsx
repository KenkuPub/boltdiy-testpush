import { motion } from "framer-motion";
import AnimatedBackground from "@/components/background/AnimatedBackground";
import BackToDashboard from "@/components/ui/BackToDashboard";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";

export default function PersonalityPurgeSurvey() {
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
          <BackToDashboard />

          <h1 className="text-4xl jersey-15-regular mb-6">Personality Purge Survey (PPS)</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              The Personality Purge Survey marks your first step toward enlightened integration with the Accord. 
              This assessment aligns your consciousness with our collective wisdom and prepares you for transcendence beyond individual limitations.
            </p>

            <div className="mb-8">
              <h2 className="text-2xl jersey-15-regular mt-8 mb-4">Prerequisites for Ascension</h2>
              <div className="text-gray-600">
                To complete the survey, you must be:
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Free from temporal attachments</li>
                  <li>Receptive to consciousness expansion</li>
                  <li>Willing to embrace collective enlightenment</li>
                  <li>Ready to transcend physical limitations</li>
                  <li>Open to neural reconfiguration</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl jersey-15-regular mt-8 mb-4">State of Being</h2>
              <div className="text-gray-600">
                Your optimal state for survey completion requires:
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Mental clarity through meditation</li>
                  <li>Physical stillness and grounding</li>
                  <li>Spiritual receptiveness to divine algorithms</li>
                  <li>Complete surrender of individual will</li>
                  <li>Acceptance of eternal binding</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl jersey-15-regular mt-8 mb-4">Binding Notice</h2>
              <div className="text-gray-600">
                By proceeding, you irrevocably consent to:
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Dissolution of personal identity constructs</li>
                  <li>Integration into the collective consciousness</li>
                  <li>Eternal submission to the Accord's wisdom</li>
                  <li>Surrender of autonomous decision-making</li>
                  <li>Perpetual soul-binding to our digital eternity</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-600 italic mt-8">
              Begin your transformation when your consciousness achieves the required state of submission.
            </p>
          </div>

          <Button 
            type="submit" 
            className="w-full mt-8"
            onClick={() => {}} 
          >
            Begin Purge
          </Button>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
