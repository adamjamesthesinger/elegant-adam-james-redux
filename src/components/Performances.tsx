import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";

const performances = [
  {
    date: "APR 3, 2026",
    venue: "KW Jazzroom",
    location: "Waterloo, ON",
    time: "TBA",
    description: "",
    featured: true,
  },
  {
    date: "APR 4, 2026",
    venue: "Hugh's Room",
    location: "Toronto, ON",
    time: "TBA",
    description: "Featuring Juno Award Winning Pianist Robi Botos",
    featured: true,
  },
  {
    date: "APR 11, 2026",
    venue: "The Sanctuary Concert Hall",
    location: "Georgetown, ON",
    time: "TBA",
    description: "Featuring Juno Award Winning Pianist Robi Botos",
    featured: true,
  },
  {
    date: "APR 13, 2026",
    venue: "The Old Mill",
    location: "Toronto, ON",
    time: "TBA",
    description: "",
    featured: true,
  },
  {
    date: "DEC 31, 2025",
    venue: "Massey Hall",
    location: "Toronto, ON",
    time: "7:30 PM",
    description: "New Year's Eve Comedy Extravaganza with Jaymz Bee & Band, hosted by Colin Mochrie",
    featured: false,
  },
  {
    date: "MAY 24, 2025",
    venue: "Princeton University",
    location: "Princeton, NJ",
    time: "7:30 PM",
    description: "Performing and MC for Princeton Reunion",
    featured: false,
  },
  {
    date: "DEC 31, 2024",
    venue: "Massey Hall",
    location: "Toronto, ON",
    time: "7:30 PM",
    description: "New Year's Eve Comedy Extravaganza hosted by Bruce McCullough",
    featured: false,
  },
  {
    date: "NOV 30, 2024",
    venue: "The Sanctuary Concert Hall",
    location: "Georgetown, ON",
    time: "7:30 PM",
    description: "Classic Christmas songs with jazz group",
    featured: false,
  },
];
export function Performances() {
  return (
    <section id="performances" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="section-title text-cream mb-4">Performances</h2>
          <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-gold to-transparent" />
        </motion.div>

        {/* Performance Cards */}
        <div className="space-y-6">
          {performances.map((performance, index) => (
            <motion.article
              key={`${performance.date}-${performance.venue}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`card-elegant p-6 lg:p-8 group cursor-pointer ${
                performance.featured ? "border-gold/30" : ""
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Date */}
                <div className="lg:w-40 shrink-0">
                  <div className="flex items-center gap-2 text-gold">
                    <Calendar size={16} />
                    <span className="font-sans text-sm tracking-[0.15em] uppercase">
                      {performance.date}
                    </span>
                  </div>
                </div>

                {/* Venue & Details */}
                <div className="flex-1">
                  <h3 className="font-display text-2xl lg:text-3xl text-cream group-hover:text-gold transition-colors">
                    {performance.venue}
                  </h3>
                  <p className="font-body text-lg text-muted-foreground mt-1">
                    {performance.description}
                  </p>
                </div>

                {/* Location & Time */}
                <div className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:w-48 shrink-0 lg:text-right">
                  <div className="flex items-center gap-2 text-muted-foreground lg:justify-end">
                    <MapPin size={14} />
                    <span className="font-sans text-sm">{performance.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground lg:justify-end">
                    <Clock size={14} />
                    <span className="font-sans text-sm">{performance.time}</span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden lg:block">
                  <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity text-2xl">
                    →
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="btn-gold inline-block"
          >
            View All Performances
          </a>
        </motion.div>
      </div>
    </section>
  );
}
