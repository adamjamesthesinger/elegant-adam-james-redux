import { motion } from "framer-motion";

export function Biography() {
  return (
    <section id="biography" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="section-title text-cream mb-4">Biography</h2>
          <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-gold to-transparent" />
        </motion.div>

        {/* Biography Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-body text-lg lg:text-xl text-muted-foreground leading-relaxed space-y-8"
        >
          <p>
            <strong className="text-cream">Adam James doesn't just sing jazz—he creates moments that linger long after the last note fades.</strong>
          </p>

          <p>
            A multi-award-winning Canadian vocalist, songwriter, and storyteller, Adam has spent his career lighting up stages internationally, with a rare blend of soul, swagger, and sincerity that makes every show feel like a conversation between old friends.
          </p>

          <p>
            His journey took an unexpected turn when Frank Sinatra's daughter Tina, handpicked him to honor Ol' Blue Eyes in the first musical they produced about their father. That led to originating the role of Sinatra in <em>Sammy</em> at The Old Globe Theater in San Diego—where legendary producer Quincy Jones delivered his now-famous line: <strong className="text-cream">"I've seen many guys play Sinatra onstage. Adam's the best."</strong>
          </p>

          <p>
            <strong className="text-cream">Not bad for a kid from Georgetown, Ontario.</strong>
          </p>

          <p>
            Since then, Adam has shared stages with icons like Ray Charles at the Montreal Jazz Festival, Tony Bennett at the F1 Grand Prix, Liza Minnelli in a Montreal club, and Jann Arden at the Calgary Stampede. But what sets him apart isn't just the company he's kept—it's the way he connects. Whether he's swinging through jazz standards, delivering keynote performances, or leading interactive workshops, Adam brings audiences into the music, inviting them to feel something real, something alive.
          </p>

          <p>
            <strong className="text-cream">His shows aren't just concerts—they're experiences. Playful, profound, and deeply human.</strong>
          </p>

          <p>
            <strong className="text-cream">Come see for yourself. Because some things you just have to witness live.</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
