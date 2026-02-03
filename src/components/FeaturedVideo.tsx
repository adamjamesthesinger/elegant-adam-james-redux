import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function FeaturedVideo() {
  const videoId = "2mk6w0Y8NKg";
  
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <a
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block aspect-video overflow-hidden group"
          >
            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt="Featured performance"
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
        </motion.div>
      </div>
    </section>
  );
}
