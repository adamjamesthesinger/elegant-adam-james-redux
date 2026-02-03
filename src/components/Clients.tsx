import { motion } from "framer-motion";
import googleLogo from "@/assets/clients/google.png";
import princetonLogo from "@/assets/clients/princeton.png";
import mcgillLogo from "@/assets/clients/mcgill.png";

const clients = [
  { name: "Google", logo: googleLogo },
  { name: "Baxter", logo: null },
  { name: "Estée Lauder", logo: null },
  { name: "Princeton University", logo: princetonLogo },
  { name: "McGill University", logo: mcgillLogo },
  { name: "Procter & Gamble", logo: null },
  { name: "Vancouver Olympics", logo: null },
  { name: "Calgary Stampede", logo: null },
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
          className="text-center mb-16"
        >
          <h2 className="section-title text-cream mb-4">Clients</h2>
          <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-gold to-transparent" />
        </motion.div>

        {/* Logo Grid - Two Rows */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center h-24 lg:h-32"
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-16 lg:max-h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 brightness-0 invert"
                />
              ) : (
                <span className="font-display text-lg lg:text-xl text-cream/70 hover:text-cream transition-colors duration-300 text-center">
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
