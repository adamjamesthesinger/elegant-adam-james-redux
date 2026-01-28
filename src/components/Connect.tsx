import { motion } from "framer-motion";
import { useState } from "react";

export function Connect() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section id="connect" className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Section Header */}
          <h2 className="section-title text-cream mb-4">Let's Connect</h2>
          <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-gold to-transparent mb-8" />

          <p className="font-body text-xl text-muted-foreground mb-12 leading-relaxed">
            To find out more about this popular keynote singer for events or his songwriting of personalized theme songs, sign up to hear about upcoming live music shows, new releases and events.
          </p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-background border border-border px-6 py-4 font-sans text-sm text-cream placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="btn-gold-filled whitespace-nowrap"
            >
              Sign Up
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
