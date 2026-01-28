import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "I've seen many play Sinatra onstage, Adam's the best",
    author: "Quincy Jones",
  },
  {
    quote: "Adam reaches the heart of songs",
    author: "Norah Jones",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <span className="text-gold text-6xl font-display leading-none">"</span>
              <blockquote className="font-display text-xl md:text-2xl lg:text-3xl text-cream/90 italic leading-relaxed mt-2 mb-6">
                {testimonial.quote}
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-8 h-px bg-gold/50" />
                <cite className="font-sans text-xs tracking-[0.3em] uppercase text-gold not-italic">
                  {testimonial.author}
                </cite>
                <div className="w-8 h-px bg-gold/50" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
