import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";

const navItems = [
{ label: "Home", href: "#home" },
{ label: "Our Story", href: "#story" },
{ label: "Details", href: "#details" },
{ label: "RSVP", href: "#rsvp" },
{ label: "Travel", href: "#travel" },
{ label: "Gallery", href: "#gallery" },
{ label: "Registry", href: "#registry" },
{ label: "Guestbook", href: "#guestbook" }];


export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ?
      "bg-background/95 backdrop-blur-md shadow-soft" :
      "bg-transparent"}`
      }>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary fill-primary" />
            <span className="font-script text-2xl md:text-3xl text-[#b49350]">
              J & S
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) =>
            <a
              key={item.href}
              href={item.href}
              className="font-sans text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors duration-300 relative group">

                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu">

            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border">

            <div className="container mx-auto px-4 py-4">
              {navItems.map((item, index) =>
            <motion.a
              key={item.href}
              href={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setIsOpen(false)}
              className="block py-3 font-sans text-foreground/80 hover:text-primary transition-colors border-b border-border/50 last:border-0">

                  {item.label}
                </motion.a>
            )}
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </motion.nav>);

};