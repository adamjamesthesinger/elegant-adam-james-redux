import { motion } from "framer-motion";
import { Music, PenTool, Disc3 } from "lucide-react";

const roles = [
  {
    title: "Singer",
    icon: Music,
    description:
      "A popular recording artist endorsed by Frank Sinatra's Family. Adam played the role of Frank Sinatra in the first musical ever produced by the family and has shared stages with Ray Charles, Tony Bennett, Liza Minnelli, and Jann Arden.",
    image: "https://img1.wsimg.com/isteam/ip/a8f5f6b2-baab-4db2-8e7f-fe52d95d09a5/FullSizeRender.jpeg/:/cr=t:12.27%25,l:0%25,w:100%25,h:75.46%25/rs=w:600,h:450,cg:true",
  },
  {
    title: "Songwriter",
    icon: PenTool,
    description:
      "Adam's original songs are featured on Spotify and Apple Music, in movies, TV & The Olympics. As the founder of Singstagram, he writes, records and delivers personalized theme songs as music videos.",
    image: "https://img1.wsimg.com/isteam/ip/a8f5f6b2-baab-4db2-8e7f-fe52d95d09a5/IMG_5656.JPG/:/cr=t:0%25,l:12.5%25,w:75%25,h:100%25/rs=w:600,h:800,cg:true",
  },
  {
    title: "Producer",
    icon: Disc3,
    description:
      "Music producer of The Vancouver Olympics, The Arab Games, The Calgary Stampede Grandstand Show, and collaborator on the Circle of Doors Tarot interactive art installation commissioned by Burning Man.",
    image: "https://img1.wsimg.com/isteam/ip/a8f5f6b2-baab-4db2-8e7f-fe52d95d09a5/IMG_9316%20copy.png/:/cr=t:0%25,l:12.41%25,w:75.19%25,h:100%25/rs=w:600,h:800,cg:true",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="section-title text-cream mb-4">The Artist</h2>
          <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-gold to-transparent" />
        </motion.div>

        {/* Roles Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {roles.map((role, index) => (
            <motion.article
              key={role.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <img
                  src={role.image}
                  alt={role.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                
                {/* Icon Badge */}
                <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-gold/90 flex items-center justify-center">
                  <role.icon size={20} className="text-background" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl lg:text-3xl text-cream mb-4 group-hover:text-gold transition-colors">
                {role.title}
              </h3>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                {role.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
