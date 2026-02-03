import { motion } from "framer-motion";

export function Clients() {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="section-title text-cream mb-4">Clients</h2>
          <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-gold to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
