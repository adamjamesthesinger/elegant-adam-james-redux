import { useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Biography } from "@/components/Biography";
import { Videos } from "@/components/Videos";
import { FeaturedVideo } from "@/components/FeaturedVideo";
import { Clients } from "@/components/Clients";
import { Testimonials } from "@/components/Testimonials";
import { Performances } from "@/components/Performances";
import { Footer } from "@/components/Footer";
import logo from "@/assets/logo.png";

const EPK = () => {
  useEffect(() => {
    document.title = "Adam James — Electronic Press Kit (EPK)";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Official Electronic Press Kit for jazz vocalist Adam James — biography, music, videos, performances, and press materials."
      );
    }
  }, []);

  return (
    <main className="min-h-screen bg-background">
      {/* Minimal EPK Header (no main nav) */}
      <header className="bg-background border-b border-border/50">
        <div className="container mx-auto px-6 lg:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Adam James" className="h-32 w-auto" />
            <div className="hidden md:block">
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold">
                Electronic Press Kit
              </p>
              <h1 className="font-display text-2xl text-cream">Adam James</h1>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="mailto:adam@adamjames.us"
              className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-foreground/80 hover:text-gold transition-colors"
            >
              <Mail size={16} />
              Booking
            </a>
          </div>
        </div>
      </header>

      {/* Press Kit Intro */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-4">
              For Press, Promoters & Media
            </p>
            <h2 className="section-title text-cream mb-6">Press Kit</h2>
            <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-gold to-transparent mb-8" />
            <p className="font-body text-lg lg:text-xl text-secondary leading-relaxed">
              Welcome. Below you'll find everything you need to feature, book, or promote Adam James —
              biography, music, video, past performances, and selected press.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reused sections */}
      <Hero />
      <Biography />
      <FeaturedVideo />
      <Videos />
      <Clients />
      <Testimonials />
      <Performances />

      {/* Booking / Contact */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl text-center">
          <h2 className="section-title text-cream mb-4">Booking & Press Inquiries</h2>
          <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-gold to-transparent mb-8" />
          <p className="font-body text-lg text-secondary mb-10">
            For interviews, performance bookings, or media requests, please reach out directly.
          </p>
          <a
            href="mailto:adam@adamjames.us"
            className="inline-flex items-center gap-3 px-8 py-4 border border-gold text-gold hover:bg-gold hover:text-background transition-colors font-sans text-xs tracking-[0.3em] uppercase"
          >
            <Mail size={16} />
            Contact for Booking
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default EPK;
