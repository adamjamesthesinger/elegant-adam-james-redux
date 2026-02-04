import { motion } from "framer-motion";
import googleLogo from "@/assets/clients/google.png";
import baxterLogo from "@/assets/clients/baxter.png";
import mcgillLogo from "@/assets/clients/mcgill-white.png";
import montrealJazzLogo from "@/assets/clients/montreal-jazz.jpg";

const clients = [
  { name: "Google", logo: googleLogo, invert: true, large: false },
  { name: "Baxter", logo: baxterLogo, invert: false, large: false },
  { name: "McGill University", logo: mcgillLogo, invert: false, large: true },
  { name: "Montreal Jazz Festival", logo: montrealJazzLogo, invert: false, large: true },
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
          <h2 className="section-title text-cream mb-4">Select Clients</h2>
          <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-gold to-transparent" />
        </motion.div>

        {/* Logo Grid */}
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`flex items-center justify-center ${
                client.large ? "h-32 lg:h-40" : "h-16 lg:h-20"
              }`}
            >
              <img
                src={client.logo}
                alt={client.name}
                className={`w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 ${
                  client.large ? "max-h-32 lg:max-h-40 max-w-[280px] lg:max-w-[320px]" : "max-h-12 lg:max-h-16 max-w-[120px] lg:max-w-[140px]"
                } ${client.invert ? "brightness-0 invert" : ""}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
