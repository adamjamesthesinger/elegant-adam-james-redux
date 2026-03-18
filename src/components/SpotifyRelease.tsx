import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const SPOTIFY_URL = "https://open.spotify.com/track/3JW39MNN7ey81XyXWzWhc9?si=46962b4ffda34690";

export function SpotifyRelease() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 lg:w-5/12"
          >
            <h3 className="text-2xl md:text-3xl font-display text-foreground mb-3 tracking-wide">
              New Release
            </h3>
            <p className="text-muted-foreground mb-6 text-sm md:text-base">
              Listen to my latest song now on Spotify.
            </p>
            <a
              href={SPOTIFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl overflow-hidden border border-border hover:border-gold transition-colors duration-300 group"
            >
              <iframe
                src="https://open.spotify.com/embed/track/3JW39MNN7ey81XyXWzWhc9?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="pointer-events-auto"
                title="Spotify player"
              />
              <div className="flex items-center gap-2 px-4 py-3 bg-card text-muted-foreground text-sm group-hover:text-gold transition-colors duration-300">
                <ExternalLink size={14} />
                <span>Open in Spotify</span>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
