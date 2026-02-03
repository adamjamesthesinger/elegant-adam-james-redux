import { motion } from "framer-motion";
import googleLogo from "@/assets/clients/google.png";

const clients = [
  { name: "Google", logo: googleLogo },
  { name: "Baxter", logo: null },
  { name: "Estée Lauder", logo: null },
  { name: "Princeton University", logo: null },
  { name: "McGill University", logo: null },
  { name: "Procter & Gamble", logo: null },
  { name: "Vancouver Olympics", logo: null },
  { name: "Calgary Stampede", logo: null },
  { name: "Montreal Jazz Festival", logo: null },
  { name: "Detroit Symphony", logo: null },
];

export function Clients() {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-cream mb-4">Clients</h2>
          <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-gold to-transparent" />
        </motion.div>

        {/* Logo Grid - Tighter spacing */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex items-center justify-center h-16 lg:h-20"
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-10 lg:max-h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 brightness-0 invert"
                />
              ) : (
                <span className="font-display text-sm lg:text-base text-cream/70 hover:text-cream transition-colors duration-300 text-center leading-tight">
                  {client.name}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
