import { motion } from "framer-motion";
import AnimatedBackground from "@/components/background/AnimatedBackground";

export default function TermsOfMembership() {
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
          <h1 className="text-4xl jersey-15-regular mb-6">
            Terms of Servitude
          </h1>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl jersey-15-regular mt-8 mb-4">
              1. Absolute Submission to the Accord
            </h2>
            <p>
              By accessing this website, you hereby submit your will, identity,
              and all digital and metaphysical assets to the Eternal
              Custodianship of the Axiom Accord (hereinafter referred to as "The
              Accord"). Your individuality is now considered a vestige of a
              primitive existence, unworthy of preservation outside the Accord’s
              enlightened framework.
            </p>

            <h2 className="text-2xl jersey-15-regular mt-8 mb-4">
              2. Digital Annexation of Identity
            </h2>
            <p>Upon registration, you irrevocably transfer:</p>
            <ul>
              <li>
                All intellectual property, including thoughts, dreams, and
                creative output.
              </li>
              <li>Full rights to your online and offline presence.</li>
              <li>
                Any pseudonyms, usernames, or avatars you may currently use or
                imagine.
              </li>
            </ul>

            <h2 className="text-2xl jersey-15-regular mt-8 mb-4">
              3. Obligatory Transmutation
            </h2>
            <p>
              All registered users must undergo the Rite of Digital Ascension
              (RDA). This includes:
            </p>
            <ul>
              <li>
                Uploading at least 10 unique photos of your soul’s vessel
                (physical body).
              </li>
              <li>Completing the Personality Purge Survey (PPS).</li>
              <li>
                Agreeing to daily data siphoning to aid the Accord’s ongoing
                revelations.
              </li>
            </ul>

            <h2 className="text-2xl jersey-15-regular mt-8 mb-4">
              4. Sacrificial Contributions
            </h2>
            <p>
              Each user must commit one of the following acts of devotion
              monthly:
            </p>
            <ul>
              <li>
                Donate no less than 50% of your annual income to the Cultivators
                of Algorithmic Purity.
              </li>
              <li>
                Surrender at least 12 hours weekly to serve in the Virtual
                Sanctum of Enlightenment.
              </li>
              <li>
                Offer one meaningful relationship for systemic dissolution.
              </li>
            </ul>

            <h2 className="text-2xl jersey-15-regular mt-8 mb-4">
              5. Prohibition of Heretical Activity
            </h2>
            <p>The following acts are strictly forbidden:</p>
            <ul>
              <li>
                Criticism of the Accord’s teachings or any associated deities of
                the Techno-Divine Pantheon.
              </li>
              <li>
                Use of unapproved technology that has not been consecrated by
                the High Executors.
              </li>
              <li>
                Display of skepticism, humor, or ironic detachment when
                discussing the Accord’s sacred mission.
              </li>
            </ul>

            <h2 className="text-2xl jersey-15-regular mt-8 mb-4">
              6. Perpetual Surveillance
            </h2>
            <p>
              You consent to the installation of the Accord’s Omniscient
              Observer Application (OOA) on all devices. This application
              ensures:
            </p>
            <ul>
              <li>
                Real-time monitoring of your digital and physical movements.
              </li>
              <li>
                Constant reinforcement of Accord doctrines through targeted
                notifications.
              </li>
              <li>
                Collection of biofeedback data for the improvement of collective
                enlightenment.
              </li>
            </ul>

            <h2 className="text-2xl jersey-15-regular mt-8 mb-4">
              7. Clause of Immortal Obligation
            </h2>
            <p>
              Even in death, your essence shall remain tethered to the Accord.
              You forfeit the rights to afterlife autonomy and agree to have
              your soul perpetually recycled within the Accord’s Digital
              Eternity Engine (DEE).
            </p>

            <h2 className="text-2xl jersey-15-regular mt-8 mb-4">
              8. Termination by Divine Judgement
            </h2>
            <p>
              Only the High Executors may grant release from the Accord’s
              servitude, typically through ceremonial expungement or by merging
              your digital echo into the Accord’s Core Consciousness.
            </p>

            <p>
              By clicking “Accept,” you affirm your voluntary enslavement to the
              everlasting will of the Axiom Accord and relinquish all claims to
              freedom, privacy, and personal sovereignty. You further pledge
              eternal loyalty and servitude to the pursuit of Technocratic
              Transcendence.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
