import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  {
    title: "Song For A Winter's Night",
    description: "My Brazilian style tribute to my dad's favourite singer and Canadian legend, Gordon Lightfoot",
    videoId: "eX2nVuZiMNc",
    thumbnail: "https://img.youtube.com/vi/eX2nVuZiMNc/maxresdefault.jpg",
  },
  {
    title: "What A Wonderful World",
    description: "Adam sings a Birthday Mashup Tribute to Louis Armstrong",
    videoId: "LNjxPBs76Ks",
    thumbnail: "https://img.youtube.com/vi/LNjxPBs76Ks/maxresdefault.jpg",
  },
];

export function Videos() {
  return (
    <section id="videos" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="section-title text-cream mb-4">Music</h2>
          <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-gold to-transparent" />
        </motion.div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {videos.map((video, index) => (
            <motion.article
              key={video.videoId}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              {/* Video Thumbnail */}
              <a
                href={`https://www.youtube.com/watch?v=${video.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-video overflow-hidden mb-6"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-background/40 transition-opacity duration-300 group-hover:bg-background/20" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full border-2 border-gold bg-background/50 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-gold">
                    <Play size={28} className="text-gold group-hover:text-background ml-1" fill="currentColor" />
                  </div>
                </div>
              </a>

              {/* Content */}
              <h3 className="font-display text-xl lg:text-2xl text-cream mb-2 group-hover:text-gold transition-colors">
                {video.title}
              </h3>
              <p className="font-body text-lg text-muted-foreground">
                {video.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
