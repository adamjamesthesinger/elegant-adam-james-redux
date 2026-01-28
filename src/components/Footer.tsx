import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/singstagrams" },
  { name: "Instagram", href: "https://www.instagram.com/singstagrm/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/adamjamesmusic/" },
  { name: "YouTube", href: "https://www.youtube.com/channel/UC_gRTExJb6AB8SSrJt0RXYg/videos" },
  { name: "Spotify", href: "http://open.spotify.com/artist/2bXIDm4sHu2Psf2tk8UkUr" },
];

const navLinks = [
  { name: "Singer", href: "#about" },
  { name: "Songwriter", href: "#about" },
  { name: "Producer", href: "#about" },
  { name: "Performances", href: "#performances" },
  { name: "Bio", href: "#" },
  { name: "Singstagram", href: "http://www.singstagram.com/" },
];

export function Footer() {
  return (
    <footer className="bg-background py-16 lg:py-24 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-24 mb-16">
          {/* Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img src={logo} alt="Adam James" className="h-12 w-auto mb-6 opacity-80" />
            <p className="font-body text-lg text-muted-foreground">
              Singer • Songwriter • Producer
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-6">
              Navigate
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-lg text-muted-foreground hover:text-cream transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-6">
              Follow
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-lg text-muted-foreground hover:text-cream transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans text-xs text-muted-foreground tracking-wider">
              © {new Date().getFullYear()} Adam James. All Rights Reserved.
            </p>
            <a
              href="https://www.patreon.com/bePatron?u=8377203"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs tracking-[0.15em] uppercase text-gold hover:text-gold-light transition-colors"
            >
              Be My Patron
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
