import { motion } from "framer-motion";
import googleLogo from "@/assets/clients/google.png";
import baxterLogo from "@/assets/clients/baxter.png";
import esteeLauderLogo from "@/assets/clients/estee-lauder.png";
import princetonLogo from "@/assets/clients/princeton.jpg";
import mcgillLogo from "@/assets/clients/mcgill-white.png";
import vancouverOlympicsLogo from "@/assets/clients/vancouver-olympics.png";
import montrealJazzLogo from "@/assets/clients/montreal-jazz.jpg";
import calgaryStampedeLogo from "@/assets/clients/calgary-stampede.jpg";
import detroitSymphonyLogo from "@/assets/clients/detroit-symphony.avif";
import casinoMontrealLogo from "@/assets/clients/casino-montreal.png";
import birdlandLogo from "@/assets/clients/birdland.jpg";

const clients = [
  { name: "Google", logo: googleLogo, invert: true },
  { name: "Baxter", logo: baxterLogo, invert: false },
  { name: "Estée Lauder", logo: esteeLauderLogo, invert: true },
  { name: "Princeton University", logo: princetonLogo, invert: true },
  { name: "McGill University", logo: mcgillLogo, invert: false },
  { name: "Vancouver Olympics", logo: vancouverOlympicsLogo, invert: true },
  { name: "Calgary Stampede", logo: calgaryStampedeLogo, invert: true },
  { name: "Montreal Jazz Festival", logo: montrealJazzLogo, invert: false },
  { name: "Detroit Symphony", logo: detroitSymphonyLogo, invert: false },
  { name: "Casino de Montréal", logo: casinoMontrealLogo, invert: true },
  { name: "Birdland", logo: birdlandLogo, invert: false },
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

        {/* Logo Grid - Uniform sizing and spacing */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12 max-w-6xl mx-auto items-center justify-items-center">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex items-center justify-center w-full h-16 lg:h-20"
            >
              <img
                src={client.logo}
                alt={client.name}
                className={`max-h-12 lg:max-h-16 max-w-[120px] lg:max-w-[140px] w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 ${
                  client.invert ? "brightness-0 invert" : ""
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
