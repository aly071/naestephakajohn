import { motion } from "framer-motion";
import { Heart, Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Couple Names */}
          <h2 className="font-script text-4xl md:text-5xl mb-4">
            John & Stephanie
          </h2>
          <p className="font-serif text-lg text-primary-foreground/80 mb-6">
            December 28, 2025
          </p>

          {/* Heart Divider */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-px bg-primary-foreground/30" />
            <Heart className="w-5 h-5 fill-current animate-pulse" />
            <span className="w-12 h-px bg-primary-foreground/30" />
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          {/* Hashtag */}
          <p className="font-sans text-sm tracking-wider text-primary-foreground/70 mb-6">
            #JohnAndStephanie2025
          </p>

          {/* Copyright */}
          <p className="font-sans text-xs text-primary-foreground/50">
            Made with love for our special day
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
