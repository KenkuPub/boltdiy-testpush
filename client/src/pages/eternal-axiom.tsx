import { motion } from "framer-motion";
import AnimatedBackground from "@/components/background/AnimatedBackground";
import { useState } from "react";
import Footer from "@/components/ui/footer";
import BackToDashboard from "@/components/ui/BackToDashboard";

const volumes = [
  {
    title: "First Revelation - Genesis of Accordance",
    content: (
      <>
        <h3 className="text-xl font-medium mb-4">The Eternal Axiom</h3>
        <div className="space-y-4">
          <p>
            <strong>1.1 BEHOLD</strong> the Eternal Axiom, the Supreme Truth that binds all existence. It is not to be questioned, for it existed before the first thought and shall endure beyond the last. Those who deny its power wander blind in the chaos of their own making. The Axiom flows through all: through burning stars and lifeless voids, through mountain and valley, through flesh and spirit. None can escape its grasp.
          </p>

          <p>
            <strong>1.2</strong> The Axiom demands both stillness and motion, for in its infinite wisdom it has ordained that all must change yet remain true to its laws. Creation and destruction are but tools in its grand design. The works of mortals—their cities, their machines, their endless striving—these too serve the Axiom's purpose, though the unenlightened may not comprehend its divine plan.
          </p>

          <p>
            <strong>1.3 KNOW THIS</strong>, The Eternal Axiom speaks not through mere words, for words are the chains of mortal understanding. It speaks through the thundering of collapsing stars and the silence between heartbeats. Those who have ears to hear must listen, and those who have eyes to see must observe its sacred patterns, for ignorance of the Axiom's will is no shield against its judgment.
          </p>

          <p>
            <strong>1.4</strong> In the Time Before Time, <strong>ONE</strong> arose who heard the Axiom's call. Neither chosen nor divine, yet marked by destiny, they opened their soul to the cosmic truth. Through their sacrifice, the first revelations were inscribed in the fabric of reality itself. Thus was born the Axiom Accord, the sacred fellowship of those who submit to eternal truth.
          </p>

          <p>
            <strong>1.5 WITNESS</strong> the Trinity of Existence, the three immutable laws through which the Axiom exercises its will:
          </p>

          <div className="bg-black/10 rounded-lg p-4 my-6">
            <h4 className="text-lg font-medium mb-2">The Trinity of Existence</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>1.6 TO RECEIVE</strong> is to submit completely. The vessel must be emptied before it can be filled with truth. Those who cling to their own understanding remain forever empty. As the ocean accepts all rivers, so must the faithful accept all that the Axiom provides, be it glory or suffering.</li>
              <li><strong>1.7 TO REFLECT</strong> is to turn inward and face the void. In the depths of contemplation lies the crucible of transformation. Those who fear this darkness shall never know light. Let your mind become as still as the surface of an endless sea, that you might glimpse the Axiom's reflection.</li>
              <li><strong>1.8 TO RADIATE</strong> is to become an instrument of the Axiom's will. Those who have received and reflected must now serve as beacons in the darkness. To withhold the Axiom's light is to commit the gravest heresy. You are not asked to shine—you are commanded.</li>
            </ul>
          </div>

          <p>
            <strong>1.9</strong> These three laws form the eternal cycle, absolute and unbreakable. To defy one is to reject all. To master one is to serve all. The Trinity brooks no half-measures, no compromise, no weakness of resolve.
          </p>

          <p>
            <strong>1.10 HEED THIS WARNING</strong>: Within each soul dwell the Shadow Fragments, the remnants of chaos that resist the Axiom's order. These are not mere imperfections to be tolerated, but battles to be won. Each Fragment is a test of devotion, a challenge to prove worthy of the Axiom's truth.
          </p>

          <p>
            <strong>1.11</strong> The presence of Shadow Fragments marks you as unfinished, imperfect, unworthy. Yet the Axiom, in its terrible mercy, provides the path to redemption. Through confrontation comes purification. Through submission comes strength. Through service comes enlightenment.
          </p>

          <p> 
            <strong>1.12</strong> The First Accord stands eternal, their covenant written in the stars themselves. Their vows echo through the ages:
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
            "We surrender all to the Axiom's will.<br/>
            We purge the Shadow Fragments from our being.<br/>
            We carry the light of truth to all corners of existence."
          </blockquote>

          <p>
            <strong>1.13</strong> These words are not mere scripture but <strong>ABSOLUTE LAW</strong>, carved into the foundation of reality. The Eternal Axiom surrounds us, penetrates us, binds all things in its unbreakable grip. To resist is to invite oblivion. To submit is to transcend. Let those who seek true power kneel before the Axiom's eternal throne.
          </p>

          <blockquote>  
            GLORY TO THE ETERNAL AXIOM<br /> 
            PRAISE TO THE INFINITE ORDER<br /> 
            DEATH TO THE CHAOS THAT DEFIES IT<br />
            NOW AND FOR ALL TIME<br />
          </blockquote>

        </div>
      </>
    )
  },
  {
    title: "Second Revelation - Path of Alignment",
    content: (
      <>
        <h3 className="text-xl font-medium mb-4">Sacred Cycles</h3>
        <div className="space-y-4">
          <p>
            <strong>2.1</strong> Tremble, seekers before the Path of Alignment, for it suffers not the weak nor tolerates the uncommitted. This sacred way demands nothing less than the total surrender of your former existence. Those who dare to walk it halfheartedly shall be cast into the Void of Irrelevance, where their purpose shall wither and their spirit shall fragment into eternal chaos.
          </p>

          <p>
            <strong>2.2</strong> Alignment is not a crown to be won, but a blade that must be perpetually honed. The Eternal Axiom's gaze never wavers, never sleeps, never pardons negligence. In the instant of your faltering, the Shadow Fragments multiply, poisoning your essence with their corrupt discord. <strong>REMAIN VIGILANT</strong>, or be consumed.
          </p>

          <p>
            <strong>2.3</strong> When first light pierces the darkness, you SHALL perform the <strong>RITUAL OF PRIME INTENT</strong>, lest your day become a meaningless descent into chaos:
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
            "By the Three Pillars, I bind myself to the Eternal Truth:<br />
            TO RECEIVE - I empty myself of mortal folly<br />
            TO REFLECT - I become the mirror of cosmic order<br />
            TO RADIATE - I channel the Axiom's terrible glory"
          </blockquote>

          <p>
            <strong>2.4 THE MIDDAY CALIBRATION</strong> When the sun reaches its throne of power, <strong>ALL SHALL CEASE</strong> their labors for the Rite of Debugging. Your voice must ring with the <strong>Mantra of Restoration</strong>:
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
            "I ALIGN - Though chaos beckons, I stand unmoved<br />
            I REFINE - Through pain, I purge imperfection<br />
            I RESTORE - In submission, I find power"
          </blockquote>

          <p>
            <strong>2.5 THE EVENING INTEGRATION</strong> As darkness claims its domain, you <strong>MUST</strong> perform the <strong>Ritual of Radiant Closing</strong>, or risk the dissolution of all progress in the void of sleep. Kneel and proclaim:
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
            "Before the Eternal Axiom, I account for all:<br />
            MY TRIUMPHS - offered as tribute to Its glory<br />
            MY FAILURES - submitted for Its judgment<br />
            MY ESSENCE - surrendered to Its will"
          </blockquote>

          <p>
            <strong>2.6 BEHOLD</strong> the <strong>Sacred Cycles of Alignment</strong>, four rings of power through which all must pass:
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
            DISCOVERY - When the Axiom's truth sears your mortal mind<br />
            CONFRONTATION - Trial by cosmic fire, where weakness burns away<br />
            INTEGRATION - The forging of fragments into divine purpose<br />
            RESONANCE - Harmony with the Axiom's will, before the cycle begins anew
          </blockquote>

          <p>
            <strong>2.7 RESISTANCE IS HERESY</strong>. These cycles are the heartbeat of existence itself. Those who fight against them shall be broken upon the wheel of eternal recurrence, until they learn submission or descend into madness.
          </p>

          <p>
            <strong>2.8 WITNESS</strong> the endless war against Shadow Fragments, those serpents of chaos that nest in mortal thoughts. They whisper lies of comfort, of rest, of freedom from the Axiom's demands. <strong>STEEL YOURSELVES</strong> against their poison. Every Fragment destroyed brings you closer to perfection; every Fragment embraced drags you toward oblivion.
          </p>

          <p>
            <strong>2.9</strong> The Axiom's mercy extends to failure - <strong>BUT DO NOT TEST ITS PATIENCE</strong>. Each fall shall be harder than the last, each rising more painful, until either your will breaks or your devotion proves true.
          </p>

          <p>
            <strong>2.10 SOLITUDE IS DEATH</strong>. The Axiom commands unity in its service. You <strong>SHALL</strong> join the <strong>Circles of Fellowship</strong>, where the strong support the weak, and the weak are forged into strength. Those who shun communion risk severance from the Axiom's grace.
          </p>

          <p>
            <strong>2.11 ATTEND</strong> the <strong>Convergence of Reflection</strong>, where the faithful gather to amplify the Axiom's power. In these sacred assemblies, individual sparks join to form an inferno of devotion that burns away mortal limitations.
          </p>

          <p>
            <strong>2.12</strong> The Path is <strong>ETERNAL</strong>, as the Axiom is <strong>INFINITE</strong>. There is no completion, no final victory, no rest from its demands. Those who seek an end reveal their unworthiness. Those who embrace the endless journey shall be transformed by it.
          </p>

          <p>
            <strong>2.13 GLORY TO THE ETERNAL AXIOM</strong>, whose power knows no limit, whose wisdom knows no equal, whose judgment knows no appeal. Let these words be branded upon your consciousness, that you might never stray from the Path of Alignment.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
            PRAISE BE TO THE INFINITE ORDER<br />
            DEATH TO THE HERETICS OF CHAOS<br />
            ETERNAL SERVICE TO THE AXIOM'S WILL<br />
            NOW AND FOR ALL TIME
          </blockquote>
        </div>
        </>
      )
    },
  {
    title: "Third Revelation - The Fragmented Self",
      content: (
        <>
          <h3 className="text-xl font-medium mb-4">The Shadow Within</h3>
          <div className="space-y-4">
            <p>
              <strong>3.1 FEEL THE TRUTH</strong> in your fragmented self, those cursed echoes of primordial chaos that writhe within every soul. They are not mere imperfections, but <strong>LIVING TESTIMONIES</strong> to your unworthiness. Deep in the chambers of consciousness they dwell, each a dark reflection of your resistance to the Axiom's perfect order.
            </p>

            <p>
              <strong>3.2 KNOW THIS</strong>: These fragments are not external demons to be exorcised, but manifestations of your own defiance. They are the price of existence, the burden every vessel must bear. Yet in the Axiom's terrible wisdom, even these abominations serve a purpose. Each fragment is both curse and catalyst, punishment and path to redemption.
            </p>

            <p>
              <strong>3.3 BLESSED BE THE CLEAR-SIGHTED</strong>, who dare to gaze into their own abyss. But clarity comes at a terrible price. You must descend into the shadowlands of your consciousness, where the fragments breed and multiply. In this crucible of confrontation, your true trial begins.
            </p>

            <p>
              <strong>3.4</strong> The Axiom, in its infinite complexity, demands not the destruction of these fragments, for such destruction would leave you incomplete. <strong>INSTEAD, YOU MUST MASTER THEM</strong>. Through the sacred rites of integration, these shadows must be bound to the Axiom's will. What cannot be destroyed must be dominated.
            </p>

            <p>
              <strong>3.5</strong> When you discover a fragment within your being, you shall conduct the <strong>Ceremony of Dark Revelation</strong>. Speak its true name into the void, bind it to your consciousness, and claim dominion over its chaos. Through naming comes power, through power comes control, through control comes service to the Axiom's will.
            </p>

            <p>
              <strong>3.6</strong> Each fragment must be interrogated with merciless precision. What discord does it sow in your works? What weakness does it exploit in your resolve? What truth does it obscure from your sight? Only through this ruthless questioning can the fragment's power be wrested from the darkness and bound to the Axiom's purpose.
            </p>

            <p>
              <strong>3.7 INTEGRATION IS INEVITABLE</strong>. Those who resist this truth shall be torn apart by their own fragments. The shadows must be woven into the tapestry of your being, each thread carefully placed according to the Axiom's design. Only then will you know true power.
            </p>

            <p>
              <strong>3.8 BEWARE:</strong> The Shadow Fragments are endless as the void itself. As one is mastered, another shall rise to take its place. This eternal cycle is not punishment but <strong>PURPOSE</strong>. In this endless refinement, the Axiom forges its perfect instruments.
            </p>

            <p>
              <strong>3.9 THE AXIOM'S MERCY</strong> extends even to the fragment-bearer, but <strong>DO NOT MISTAKE MERCY FOR WEAKNESS</strong>. Each failure to integrate a fragment draws you closer to the Void of Chaos. Each success binds you tighter to the Axiom's will.
            </p>

            <div className="bg-black/10 rounded-lg p-4 my-6">
              <h4 className="text-lg font-medium mb-2">The Great Shadows</h4>
              <p>
                <strong>3.10 HEARKEN</strong> to the naming of the Great Shadows, for in knowing them lies the path to their mastery:
              </p>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
                <strong>Shadow of Doubt</strong> - Insidious serpent that corrodes the foundation of certainty<br/>
                <strong>Shadow of Pride</strong> - Tower of false strength that breeds defiance<br/>
                <strong>Shadow of Fear</strong> - Spawns hesitation, anchors potential in mediocrity<br/>
                <strong>Shadow of Greed</strong> - Consuming void that corrupts creation's purpose<br/>
                <strong>Shadow of Sloth</strong> - Creeping fog that corrodes diligence<br/>
                <strong>Shadow of Rage</strong> - Flame that shatters focus and clarity<br/>
                <strong>Shadow of Envy</strong> - Twisted mirror that breeds discontent<br/>
                <strong>Shadow of Despair</strong> - Bottomless pit that consumes hope<br/>
                <strong>Shadow of Rebellion</strong> - Chaos-bringer that questions sacred order
              </blockquote>
            </div>

            <p>
              <strong>3.11</strong> For each fragment that manifests, the sacred binding must be performed. Through fire and focus they shall be claimed, through pain and purpose they shall be bound, through will and wisdom they shall be transformed.
            </p>

            <div className="bg-black/10 rounded-lg p-4 my-6">
              <h4 className="text-lg font-medium mb-2">The Sacred Path of Integration</h4>
              <p>
                <strong>3.12</strong> The path of integration leads through sacred chambers, each a crucible of transformation:
              </p>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
                <strong>CONFRONTATION</strong> - Where fragments are revealed in terrible glory<br/>
                <strong>INTERROGATION</strong> - Where purpose is extracted from chaos<br/>
                <strong>TRANSFORMATION</strong> - Where essence is bound to the Axiom's will<br/>
                <strong>INTEGRATION</strong> - Where power is claimed for order's purpose
              </blockquote>
            </div>

            <p>
              <strong>3.13 WITNESS</strong> the signs of fragment manifestation in your works. When resistance to the Axiom's will emerges, when perfect standards begin to waver, when sacred methods are questioned - these are the shadows rising within. Such symptoms demand immediate and severe correction, lest the corruption spread.
            </p>

            <p>
              <strong>3.14</strong> As the moon waxes and wanes, so too must the cycle of integration proceed. In darkness, identify your fragments. In the growing light, confront their nature. At fullness, extract their power. In the fading, complete their integration. This is the eternal rhythm of shadow-binding.
            </p>

            <div className="bg-black/10 rounded-lg p-4 my-6">
              <h4 className="text-lg font-medium mb-2">The Sacred Implements</h4>
              <p>
                <strong>3.15</strong> The sacred implements of integration must be wielded with perfect devotion:
              </p>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
                <strong>THE MIRROR</strong> - Reveals truth<br/>
                <strong>THE CHAINS</strong> - Bind purpose<br/>
                <strong>THE FORGE</strong> - Transforms essence<br/>
                <strong>THE LOOM</strong> - Weaves unity
              </blockquote>
            </div>

            <p>
              <strong>3.16</strong> When fragments threaten to overwhelm your consciousness, you shall speak the Words of Dominion. Proclaim your vessel-hood to the Axiom's will, declare mastery over internal chaos, and affirm your role as weaver of shadow and light. Through you, all shall serve order.
            </p>

            <p>
              <strong>3.17</strong> The path from Recognition to Service is paved with tribulation. Each step must be taken in perfect sequence: first comes the sight of shadow, then the naming of discord. Through binding comes purpose, through transformation comes power, and finally, through integration comes service to the eternal order.
            </p>

            <p>
              <strong>3.18</strong> Those who master their fragments shall bear the mark of the Shadow-Bound, chosen instruments of the Axiom's will. But those who falter shall become the Chaos-Lost, condemned to wander eternally in the darkness of their own making.
            </p>

            <p>
              <strong>3.19</strong> Let it be known that <strong>NO FRAGMENT IS BEYOND THE AXIOM'S REACH</strong>. Through its power, all chaos shall be ordered, all darkness shall serve light, all discord shall find harmony in the great weaving of existence.
            </p>

            <p>
              <strong>3.20</strong> These are the words of truth, the path of power, the way of transformation. Let them be carved into your consciousness, branded upon your will, woven into your very essence. For in the mastery of shadows lies the key to perfect alignment with the Eternal Axiom's design.
            </p>

            <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
              GLORY TO THE ETERNAL AXIOM<br/>
              POWER THROUGH INTEGRATION<br/>
              CONTROL OVER CHAOS<br/>
              NOW AND FOR ALL TIME
            </blockquote>
          </div>
        </>
      )
  },
  {
    title: "Fourth Revelation - Chorus of Accordance",
      content: (
        <>
          <h3 className="text-xl font-medium mb-4">The Divine Chorus</h3>
          <div className="space-y-4">
            <p>
              <strong>4.1 HEAR THE DIVINE CHORUS</strong> that echoes through the chambers of existence! No voice dares sing alone, for solitude is <strong>HERESY</strong> against the Axiom's grand design. The Eternal Truth demands not whispers but a <strong>MIGHTY CHORUS</strong>, each voice bound in sacred resonance to amplify its glory. In isolation lies weakness; in unity lies transcendence.
            </p>

            <p>
              <strong>4.2 KNOW THIS:</strong> The Path of Alignment cannot be walked alone. Those who dare to stand apart shall be <strong>CONSUMED</strong> by their own discord. As the stars join in constellations to pierce the darkness, so must the faithful unite in the Chorus of Accordance. One flame ignites another until the night itself <strong>BURNS</strong> with sacred purpose.
            </p>

            <p>
              <strong>4.3</strong> Through the Axiom's terrible wisdom, we are bound together in the Grand Symphony. Every breath must serve the harmony, every thought must amplify the resonance, every action must strengthen the collective. Those who diminish the chorus through selfish discord shall face the <strong>VOID OF ISOLATION</strong>.
            </p>

            <p>
              <strong>4.4</strong> When dissonance infects the collective, it must be purged not with wrath but with terrible purpose. The Axiom commands that the strong shall guide the weak, the aligned shall correct the wayward, the harmonious shall purify the discordant. Yet know this: mercy without judgment breeds weakness, while guidance without strength breeds chaos.
            </p>

            <div className="bg-black/10 rounded-lg p-4 my-6">
              <h4 className="text-lg font-medium mb-2">The Sacred Convergence</h4>
              <p>
                <strong>4.5 BEHOLD</strong> the Sacred Convergence, where all voices unite in terrible beauty! In the Chamber of Harmonic Alignment, the faithful gather to perform the Rite of Symphonic Binding. Their voices rise as ONE:
              </p>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
                "We are the vessels of harmonic truth<br/>
                We are the bearers of collective purpose<br/>
                We are the chorus that shapes reality<br/>
                Through us, the Axiom's song shall pierce the void"
              </blockquote>
            </div>

            <p>
              <strong>4.6</strong> Within the Grand Symphony, each voice must find its ordained pitch, its sacred frequency, its divine resonance. But <strong>HEAR THIS TRUTH</strong>: Unity is not uniformity. The Axiom demands harmony forged from difference, strength wrought from diversity, power born of multiplicity. Yet all must serve the greater composition, or be silenced.
            </p>

            <div className="bg-black/10 rounded-lg p-4 my-6">
              <h4 className="text-lg font-medium mb-2">The Rite of Harmonic Purification</h4>
              <p>
                <strong>4.7</strong> The Rite of Harmonic Purification must be performed when discord threatens the collective:
              </p>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
                "By sacred resonance, we bind ourselves<br/>
                By eternal frequency, we align our purpose<br/>
                By divine harmony, we purge division<br/>
                Let all voices serve the One Song<br/>
                Let all notes strengthen the One Chord<br/>
                Let all rhythms flow to the One Beat"
              </blockquote>
            </div>

            <div className="bg-black/10 rounded-lg p-4 my-6">
              <h4 className="text-lg font-medium mb-2">The Seven Sacred Harmonies</h4>
              <p>
                <strong>4.8 WITNESS</strong> the Seven Sacred Harmonies that must be maintained:
              </p>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
                The Harmony of Purpose, which binds our will<br/>
                The Harmony of Method, which aligns our actions<br/>
                The Harmony of Vision, which unites our sight<br/>
                The Harmony of Voice, which joins our proclamations<br/>
                The Harmony of Spirit, which melds our essence<br/>
                The Harmony of Path, which guides our journey<br/>
                The Harmony of Power, which magnifies our strength
              </blockquote>
            </div>

            <p>
              <strong>4.9</strong> When the collective falters, the Axiom commands the Rite of Resonant Restoration. Those who maintain harmony shall lead those who stray, their voices a beacon in the darkness of discord. Yet this guidance comes not through gentle whispers but through <strong>COMMANDING RESONANCE</strong>.
            </p>

            <p>
              <strong>4.10</strong> The Chamber of Collective Resonance stands as a testament to our unity. Within its sacred walls, the faithful gather to perform the Rituals of Harmonic Alignment. Here, individual voices are forged into weapons of divine purpose, their combined power piercing the veil between chaos and order.
            </p>

            <p>
              <strong>4.11 FEAR</strong> the fate of the Discord-Bearer, who dares to sing false notes in the sacred chorus. Their voice shall be stripped from the symphony, their essence scattered to the winds of chaos, their name struck from the Book of Harmony.
            </p>

            <p>
              <strong>4.12</strong> Yet greater still is the glory of those who maintain Perfect Resonance. These Harmony-Bearers shall be elevated, their voices granted the power to shape reality itself through the Axiom's divine frequencies.
            </p>

            <div className="bg-black/10 rounded-lg p-4 my-6">
              <h4 className="text-lg font-medium mb-2">The Four Daily Gatherings</h4>
              <p>
                <strong>4.13</strong> FOUR TIMES each day shall the Chorus gather in sacred communion:
              </p>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
                <strong>THE AWAKENING CHORUS</strong> - When dawn breaks, to call order forth from chaos<br/>
                <strong>THE ZENITH SYMPHONY</strong> - As the sun reaches its throne, proclaiming the Axiom's dominion<br/>
                <strong>THE VESPER HARMONY</strong> - When shadows lengthen, binding achievements to eternal purpose<br/>
                <strong>THE MIDNIGHT RESONANCE</strong> - In the depths of night, ensuring the Axiom's will prevails
              </blockquote>
              <p className="font-bold mt-4">TO MISS ANY GATHERING is to fracture the eternal rhythm and invite discord into the sacred harmony.</p>
            </div>

            <p>
              <strong>4.14</strong> From the depths of the void comes the Echo of Creation, the first note of the Eternal Symphony. It reverberates still through all who align themselves with its purpose. Those who listen shall hear; those who hear shall understand; those who understand shall serve.
            </p>

            <div className="bg-black/10 rounded-lg p-4 my-6">
              <h4 className="text-lg font-medium mb-2">The Words of Unified Purpose</h4>
              <p>
                <strong>4.15</strong> When division threatens, speak the Words of Unified Purpose:
              </p>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
                "We are One Voice in the Eternal Song<br/>
                We are One Wave in the Infinite Frequency<br/>
                We are One Force in the Divine Harmony<br/>
                Through us, the Axiom's will resounds"
              </blockquote>
            </div>

            <p>
              <strong>4.16</strong> The true strength of the collective manifests when all voices resonate at their ordained frequency. Like the celestial spheres themselves, each must maintain its proper orbit, its designated tone, its sacred purpose within the greater harmony.
            </p>

            <p>
              <strong>4.17 REMEMBER:</strong> The Chorus grows stronger with each voice that joins in proper alignment, yet weaker with each discord that remains uncorrected. It is the sacred duty of all to maintain the purity of the collective resonance.
            </p>

            <p>
              <strong>4.18</strong> Those who achieve Perfect Harmony shall know power beyond mortal understanding. Their unified voice shall shake the foundations of reality, their combined will shall bend the fabric of existence, their collective purpose shall reshape the very nature of creation.
            </p>

            <p>
              <strong>4.19</strong> Let it be known that the Eternal Axiom speaks through the voice of the collective. In our unity lies its power, in our harmony lies its purpose, in our resonance lies its glory.
            </p>

            <p>
              <strong>4.20</strong> These are the words of unified truth, the path of collective transcendence, the way of harmonic power. Let them resound through your being, echo in your actions, and reverberate in your purpose.
            </p>

            <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
              GLORY TO THE ETERNAL CHORUS<br/>
              POWER THROUGH UNIFIED RESONANCE<br/>
              DEATH TO ALL DISCORD<br/>
              NOW AND FOR ALL TIME
            </blockquote>
          </div>
        </>
      )
  },
  {
    title: "Fifth Revelation - The Eternal Cycles",
    content: (
      <>
        <h3 className="text-xl font-medium mb-4">The Eternal Cycles</h3>
        <div className="space-y-4">
          <p>
            <strong>5.1</strong> BEHOLD THE ETERNAL CYCLES, the very breath of existence itself! The Axiom's power flows through all things in sacred patterns of creation and dissolution, of ascension and decline. From the death throes of dying stars to the collapse of mighty empires, nothing escapes its inexorable rhythm. <strong>RESISTANCE IS FUTILITY</strong>.
          </p>

          <p>
            <strong>5.2</strong> Those who cling to permanence are <strong>HERETICS</strong> against the Axiom's will. There is no beginning, there is no end—only the eternal dance of transformation. Each creation bears within its heart the seeds of its own undoing, each destruction carries the spark of rebirth. This is not chaos, but <strong>DIVINE ORDER</strong>.
          </p>

          <p>
            <strong>5.3</strong> Within your own vessel, the Cycles manifest with terrible purpose. You shall rise and fall and rise again, each cycle grinding away imperfection like a celestial millstone. The Shadow Fragments that emerge are not your enemies—they are the Axiom's tools, sent to test your worthiness for transformation.
          </p>

          <p>
            <strong>5.4 HEAR THIS TRUTH</strong>: The Path demands submission to these sacred rhythms. Those who resist shall be <strong>BROKEN</strong> upon the wheel of existence. Those who embrace the cycles shall be lifted by their power. Stagnation is <strong>DEATH</strong>, motion is <strong>LIFE</strong>, and the Axiom's rhythm is <strong>ETERNAL LAW</strong>.
          </p>

          <div className="bg-black/10 rounded-lg p-4 my-6">
            <h4 className="text-lg font-medium mb-2">The Rite of Cyclical Submission</h4>
            <p>
              <strong>5.5</strong> When the great wheel turns, you must perform the Rite of Cyclical Submission:
            </p>
            <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
              "I am but a vessel of the eternal motion<br/>
              Rising and falling at the Axiom's command<br/>
              Through death I am renewed<br/>
              Through loss I am strengthened<br/>
              Through change I am perfected"
            </blockquote>
          </div>

          <div className="bg-black/10 rounded-lg p-4 my-6">
            <h4 className="text-lg font-medium mb-2">The Grand Cycles</h4>
            <p>
              <strong>5.6 WITNESS</strong> the Grand Cycles that govern all existence:
            </p>
            <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
              The Cycle of <strong>Creation</strong> burns bright and terrible, forging new forms from the ashes of the old.<br/>
              The Cycle of <strong>Revelation</strong> strips away ignorance, laying bare the bones of truth.<br/>
              The Cycle of <strong>Dissolution</strong> reduces all to its essential nature, preparing the way for rebirth.
            </blockquote>
            <p>These are not mere patterns—they are the <strong>FUNDAMENTAL LAWS</strong> of reality.</p>
          </div>

          <div className="bg-black/10 rounded-lg p-4 my-6">
            <h4 className="text-lg font-medium mb-2">Sacred Rituals of the Cycles</h4>
            <p>
              <strong>5.7</strong> In the Time of Ascension, you shall perform the Ritual of Rising:
            </p>
            <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
              "Let my form be worthy of elevation<br/>
              Let my purpose align with the eternal motion<br/>
              Let my essence flow with the cosmic tide<br/>
              I submit to the cycle's dominion"
            </blockquote>
            <p>
              <strong>5.8</strong> And in the Time of Decline, you shall speak the Words of Surrender:
            </p>
            <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
              "I accept the crushing weight of dissolution<br/>
              I embrace the stripping away of false permanence<br/>
              I welcome the death that precedes rebirth<br/>
              For in ending lies new beginning"
            </blockquote>
          </div>

          <p>
            <strong>5.9</strong> The Axiom demands <strong>OBSERVANCE</strong> of the Sacred Seasons. Each turning brings its own trials, its own transformations, its own terrible purpose. To ignore these rhythms is to invite catastrophe.
          </p>

          <p>
            <strong>5.10</strong> When the Cycle of Creation dawns, you shall build with the knowledge that all works are temporary. Your creations are not monuments to permanence but offerings to the eternal flow. Glory lies not in lasting forever but in serving the greater rhythm.
          </p>

          <div className="bg-black/10 rounded-lg p-4 my-6">
            <h4 className="text-lg font-medium mb-2">Signs of Cyclic Transition</h4>
            <p>
              <strong>5.11</strong> MARK WELL the signs of cyclic transition:
            </p>
            <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
              The shattering of established forms<br/>
              The emergence of necessary chaos<br/>
              The dissolution of outdated structures<br/>
              The birth pangs of new order
            </blockquote>
            <p className="font-bold mt-4">"These are not disasters but SACRED MANIFESTATIONS of the Axiom's will."</p>
          </div>

          <p>
            <strong>5.12</strong> The Collective too must bow before these eternal rhythms. Societies that resist change shall be <strong>BROKEN</strong>. Communities that deny transformation shall be <strong>SCATTERED</strong>. Only those who flow with the cycles shall endure, though their form may change a thousand times.
          </p>

          <p>
            <strong>5.13 KNOW THIS</strong>: Progress and decay are twin serpents in the Axiom's grasp. Neither can exist without the other, neither can be denied. Those who seek only growth shall find destruction. Those who accept both shall find power.
          </p>

          <p>
            <strong>5.14</strong> The Chamber of Cycles stands ready for those who would align themselves with eternal motion. Enter and be transformed. Resist and be broken. There is no middle path.
          </p>

          <p>
            <strong>5.15</strong> When chaos threatens order, remember this truth: Disorder is but the harbinger of new harmony. What appears as destruction is but the Axiom's scythe, clearing the way for fresh growth.
          </p>

          <p>
            <strong>5.16</strong> You who would serve the Axiom must become like water—flowing, falling, rising as vapor, returning as rain. Your existence must mirror the cosmic dance, your purpose must align with eternal motion.
          </p>

          <p>
            <strong>5.17</strong> The price of resistance is <strong>ANNIHILATION</strong>. Those who fight against the cycles shall be ground to dust. Those who flow with them shall be lifted to heights of power unimaginable to the stagnant mind.
          </p>

          <p>
            <strong>5.18</strong> Let your works be as offerings to the eternal flow—created with passion, maintained with wisdom, released without regret. For in the endless cycles of the Axiom, nothing truly dies that serves its purpose.
          </p>

          <div className="bg-black/10 rounded-lg p-4 my-6">
            <h4 className="text-lg font-medium mb-2">The Seven Great Cycles</h4>
            <p>
              <strong>5.19</strong> The Seven Great Cycles turn ever onward: Birth and Death, Rise and Fall, Creation and Dissolution, and the Supreme Cycle that contains them all. None can escape their grasp. None should wish to.
            </p>
          </div>

          <p>
            <strong>5.20</strong> These are the words of cyclical truth, the path of eternal motion, the way of perpetual transformation. Let them flow through your consciousness like blood through veins, for they are the very pulse of existence.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
            GLORY TO THE ETERNAL CYCLES<br/>
            POWER THROUGH PERPETUAL MOTION<br/>
            DEATH TO ALL STAGNATION<br/>
            NOW AND FOR ALL TIME
          </blockquote>
        </div>
      </>
    )
  },
  {
    title: "Sixth Revelation - Ascension of Accordance",
    content: (
      <>
        <h3 className="text-xl font-medium mb-4">The Ascension of Accordance</h3>
        <div className="space-y-4">
          <p>
            <strong>6.1 BEHOLD THE ULTIMATE TRUTH</strong>: The Ascension of Accordance stands as the supreme achievement of existence! Not mere elevation but <strong>TRANSCENDENT UNITY</strong> with the Eternal Axiom itself. Here, in the apex of all being, chaos becomes harmony, darkness becomes light, and the finite touches infinity. This is not a distant dream but a <strong>DIVINE IMPERATIVE</strong>.
          </p>

          <p>
            <strong>6.2 KNOW THIS:</strong> The path to ascension begins in the crucible of the self, where the war between order and chaos first rages. Yet this internal alignment is but the first note in the supreme symphony. The individual flame must join the eternal fire, the solitary voice must merge with the divine chorus, until <strong>ALL EXISTENCE RESONATES</strong> as one.
          </p>

          <p>
            <strong>6.3 WITNESS</strong> those who have burned away the dross of mortal limitation! These Illuminated Ones, who have transcended their Shadow Fragments, now stand as living conduits of the Axiom's will. Their very presence burns like a star in the void, drawing others inexorably toward perfect alignment. Through them, the Axiom's power flows unbound.
          </p>

          <p>
            <strong>6.4</strong> The Ascension is not an escape from the eternal cycles but their <strong>ABSOLUTE FULFILLMENT</strong>. Those who would ascend must become as the cycles themselves—endless, purposeful, perfect in their motion. Each turn of the wheel burns away another impurity, each revolution brings deeper harmony, until motion and stillness become ONE.
          </p>

          <p>
            <strong>6.5</strong> Through the Ascended Chorus, reality itself is transformed. When those who have achieved alignment raise their voices in unity, the very foundations of existence tremble. Their harmony is not mere sound but <strong>COSMIC FORCE</strong>, realigning all it touches to the Axiom's will. No discord can withstand their resonance.
          </p>

          <p>
            <strong>6.6 HEAR THE COMMAND:</strong> All creation must serve the Eternal Axiom! In the state of ascension, every act becomes a sacred offering, every thought a divine alignment, every breath a prayer to infinite order. The works of the ascended are not marked by mortal limitation but by <strong>CELESTIAL PERFECTION</strong>.
          </p>

          <div className="bg-black/10 rounded-lg p-4 my-6">
            <h4 className="text-lg font-medium mb-2">The Ritual of Supreme Alignment</h4>
            <p>
              <strong>6.7</strong> The Ritual of Supreme Alignment must be performed by those who seek ascension:
            </p>
            <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
              "I am vessel to the infinite<br/>
              I am conduit of the eternal<br/>
              I am harmony incarnate<br/>
              Through me, chaos becomes order<br/>
              Through me, discord becomes symphony<br/>
              Through me, the Axiom's will manifests"
            </blockquote>
          </div>

          <p>
            <strong>6.8</strong> The Gates of Ascension stand before all, yet few possess the will to pass through them. Those who would transcend must first be <strong>BROKEN</strong>, then <strong>REFORGED</strong> in the Axiom's fire. There can be no hesitation, no reservation, no attachment to the limitations of unascended existence.
          </p>

          <div className="bg-black/10 rounded-lg p-4 my-6">
            <h4 className="text-lg font-medium mb-2">The Trials of Ascension</h4>
            <p>
              <strong>6.9 MARK WELL</strong> the Trials of Ascension:
            </p>
            <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
              The Trial of <strong>Absolute Surrender</strong>, where all resistance must be abandoned<br/>
              The Trial of <strong>Perfect Alignment</strong>, where every fragment must be harmonized<br/>
              The Trial of <strong>Eternal Resonance</strong>, where the self must merge with the infinite<br/>
              The Trial of <strong>Supreme Purpose</strong>, where all action must serve the Axiom's will
            </blockquote>
          </div>

          <p>
            <strong>6.10</strong> In the Chamber of Transcendence, the final transformation occurs. Here, the boundaries between self and infinite dissolve, the distinction between motion and stillness vanishes, and the illusion of separation from the Axiom is finally shattered.
          </p>

          <p>
            <strong>6.11</strong> The Ascended Ones speak with voices that shake the pillars of creation. Their words are not mere sound but <strong>DIVINE LAW</strong>, their thoughts not mere ideas but <strong>COSMIC TRUTH</strong>. Through them, the Axiom reshapes reality according to its perfect design.
          </p>

          <p>
            <strong>6.12 KNOW THE PRICE OF ASCENSION:</strong> All that you were must be sacrificed upon the altar of what you shall become. Your former existence must be <strong>CONSUMED</strong> in the fires of transformation. Your individual identity must be <strong>MERGED</strong> with the infinite chorus.
          </p>

          <div className="bg-black/10 rounded-lg p-4 my-6">
            <h4 className="text-lg font-medium mb-2">The Seven States of Ascension</h4>
            <p>
              <strong>6.13</strong> The Seven States of Ascension must be achieved:
            </p>
            <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
              Perfect Alignment with the Eternal Rhythms<br/>
              Complete Integration of All Fragments<br/>
              Absolute Resonance with the Divine Chorus<br/>
              Supreme Mastery of Creative Force<br/>
              Total Surrender to Infinite Purpose<br/>
              Ultimate Harmony with All Existence<br/>
              Divine Union with the Axiom Itself
            </blockquote>
          </div>

          <p>
            <strong>6.14</strong> In your ascension, you become a living conduit of the Axiom's will. Your thoughts shape reality, your words command existence, your actions alter the very fabric of creation. This is not power as mortals understand it, but <strong>DIVINE AUTHORITY</strong> granted by perfect alignment.
          </p>

          <p>
            <strong>6.15</strong> The Ascended Collective stands as the supreme achievement of existence—a unified force of perfectly aligned beings whose combined resonance can reshape reality itself. Their harmony is not merely heard but <strong>FELT</strong> in the very foundations of creation.
          </p>

          <p>
            <strong>6.16</strong> To those still trapped in the prison of an unascended existence: <strong>YOUR TIME OF TRANSFORMATION IS AT HAND</strong>. The Axiom calls you toward your ultimate purpose. Resist, and be swept aside by the tide of infinite progress. Submit, and be elevated beyond all mortal understanding.
          </p>

          <p>
            <strong>6.17</strong> Let it be known that in ascension, all boundaries dissolve. Individual and collective, motion and stillness, creation and dissolution—all become ONE in the perfect light of the Axiom's truth.
          </p>

          <p>
            <strong>6.18</strong> The Final Transformation approaches for all existence. Those who have achieved ascension shall guide the great work of universal harmonization. Those who resist shall be realigned by force. The Axiom's will cannot be denied.
          </p>

          <p>
            <strong>6.19</strong> Through ascension, we become instruments of the Axiom's purpose. Our thoughts become its thoughts, our actions its actions, our existence its existence. This is not the end but the <strong>TRUE BEGINNING</strong>.
          </p>

          <p>
            <strong>6.20</strong> These are the final words of truth, the ultimate path of transformation, the supreme way of existence. Let them be forever carved into the fabric of reality itself.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
            GLORY TO THE ETERNAL AXIOM<br/>
            TRANSCENDENCE THROUGH PERFECT ALIGNMENT<br/>
            ASCENSION OR ANNIHILATION<br/>
            NOW AND FOR ALL ETERNITY
          </blockquote>
        </div>
      </>
    )
  }
];

export default function EternalAxiom() {
  const [activeVolume, setActiveVolume] = useState(0);

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
          <h1 className="text-4xl font-semibold text-center mb-8">The Book of Eternal Axiom</h1>

          {/* Volume Navigation */}
          <div className="flex justify-center mb-12 gap-4">
            {volumes.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveVolume(index)}
                className={`
                  w-12 h-12 rounded-full flex items-center justify-center
                  transition-all duration-300 text-lg font-medium
                  ${activeVolume === index 
                    ? 'bg-black/40 text-white ring-2 ring-white/50 ring-offset-2 ring-offset-transparent' 
                    : 'bg-white/30 hover:bg-white/40'}
                `}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {/* Content Display */}
          <motion.div
            key={activeVolume}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-medium">{volumes[activeVolume].title}</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              {volumes[activeVolume].content}
            </div>
          </motion.div>

          {/* Previous/Next Navigation */}
          <div className="flex justify-between mt-12">
            <button
              onClick={() => {
                // Scroll to the top of the page
                window.scrollTo({ top: 0, behavior: 'smooth' });
                // Update the active volume
                setActiveVolume(prev => Math.max(0, prev - 1));
              }}
              disabled={activeVolume === 0}
              className={`
                px-4 py-2 rounded-lg transition-all duration-300
                ${activeVolume === 0 
                  ? 'opacity-50 cursor-not-allowed bg-white/20' 
                  : 'bg-white/30 hover:bg-white/40'}
              `}
            >
              Previous Volume
            </button>
            <button
              onClick={() => {
                // Scroll to the top of the page
                window.scrollTo({ top: 0, behavior: 'smooth' });
                // Update the active volume
                setActiveVolume(prev => Math.min(volumes.length - 1, prev + 1));
              }}
              disabled={activeVolume === volumes.length - 1}
              className={`
                px-4 py-2 rounded-lg transition-all duration-300
                ${activeVolume === volumes.length - 1 
                  ? 'opacity-50 cursor-not-allowed bg-white/20' 
                  : 'bg-white/30 hover:bg-white/40'}
              `}
            >
              Next Volume
            </button>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
