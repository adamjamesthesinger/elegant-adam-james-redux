import { motion } from "framer-motion";
import heroImage from "@/assets/hero-bg.jpg";

const testimonials = [
  {
    quote: "I've seen many play Sinatra onstage, Adam's the best",
    author: "Quincy Jones",
  },
  {
    quote: "Adam reaches the heart of songs",
    author: "Norah Jones",
  },
  {
    quote: "Adam's keynote concert is incredible. A musical concert plus a Ted Talk. Unique and entertaining",
    author: "Event Director",
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-end justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Adam James performing"
          className="w-full h-full object-cover object-top"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pb-20 lg:pb-32">
        <div className="max-w-4xl">
          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <span className="quote-mark absolute -top-8 -left-4 select-none">"</span>
            <blockquote className="font-display text-2xl md:text-4xl lg:text-5xl text-cream leading-relaxed italic">
              {testimonials[0].quote}
            </blockquote>
          </motion.div>

          {/* Author */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-4"
          >
            <div className="w-16 h-px bg-gold" />
            <p className="font-sans text-sm tracking-[0.3em] uppercase text-gold">
              {testimonials[0].author}
            </p>
          </motion.div>

          {/* Subtle name reveal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16"
          >
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-[0.1em] text-cream/10">
              ADAM JAMES
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}
