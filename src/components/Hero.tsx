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
          className="w-full h-full object-cover object-[center_25%]"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent" />
      </div>

      {/* Name at Top */}
      <div className="absolute top-16 md:top-24 left-0 right-0 z-10">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="font-display text-[2.5rem] tracking-[0.2em] text-cream/20 text-center whitespace-nowrap md:hidden">
              ADAM JAMES
            </h1>
          </motion.div>
        </div>
      </div>
      
      {/* Quote - positioned lower on mobile */}
      <div className="absolute top-[55%] md:top-40 left-0 right-0 z-10">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <blockquote className="font-display text-lg md:text-xl lg:text-2xl text-cream/90 italic text-center md:text-left">
              <span className="md:whitespace-nowrap">"I've seen many play Sinatra onstage,</span>
              <br className="md:hidden" />
              <span className="md:whitespace-nowrap"> Adam's the best"</span>
            </blockquote>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mt-3 text-center md:text-left">
              — {testimonials[0].author}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Spotify Mini Overlay - bottom right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-20 right-4 md:right-8 lg:right-12 z-10 hidden md:block"
      >
        <a
          href="https://open.spotify.com/track/3JW39MNN7ey81XyXWzWhc9?si=46962b4ffda34690"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-[200px] lg:w-[240px] rounded-lg overflow-hidden border border-gold/30 hover:border-gold shadow-2xl transition-all duration-300 hover:scale-105"
        >
          <iframe
            src="https://open.spotify.com/embed/track/3JW39MNN7ey81XyXWzWhc9?utm_source=generator&theme=0"
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="New release on Spotify"
            className="pointer-events-none"
          />
        </a>
      </motion.div>

      {/* Spacer for bottom content area */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pb-20 lg:pb-32">
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
