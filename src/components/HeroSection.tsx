import { motion } from "framer-motion";
import { Heart } from "lucide-react";
export const HeroSection = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-soft" />
      <div className="absolute inset-0 opacity-10" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236B8CC9' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    }} />

      {/* Decorative Elements */}
      <motion.div animate={{
      rotate: 360
    }} transition={{
      duration: 60,
      repeat: Infinity,
      ease: "linear"
    }} className="absolute top-20 right-10 w-32 h-32 border border-secondary/40 rounded-full hidden md:block" />
      <motion.div animate={{
      rotate: -360
    }} transition={{
      duration: 45,
      repeat: Infinity,
      ease: "linear"
    }} className="absolute bottom-32 left-10 w-24 h-24 border border-primary/30 rounded-full hidden md:block" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.2
      }} className="font-sans text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mb-4">
          We're Getting Married
        </motion.p>

        <motion.div initial={{
        opacity: 0,
        scale: 0.9
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        delay: 0.4,
        duration: 0.8
      }} className="mb-6">
          <h1 className="font-script text-6xl md:text-8xl lg:text-9xl mb-2" style={{ color: '#b49350' }}>
            John
          </h1>
          <div className="flex items-center justify-center gap-4 my-2">
            <span className="w-16 md:w-24 h-px bg-primary" />
            <Heart className="w-5 h-5 md:w-6 md:h-6 text-primary fill-primary animate-float" />
            <span className="w-16 md:w-24 h-px bg-primary" />
          </div>
          <h1 className="font-script text-6xl md:text-8xl lg:text-9xl" style={{ color: '#b49350' }}>
            Stephanie
          </h1>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.8
      }} className="space-y-4">
          <p className="font-serif text-lg md:text-xl text-foreground/80 italic">
            "Two hearts, one beautiful journey"
          </p>
          
          <div className="inline-block bg-primary/30 backdrop-blur-sm rounded-lg px-8 py-4 shadow-soft border border-primary/50">
            <p className="font-sans text-sm tracking-[0.2em] uppercase text-foreground/70 mb-1">SAVE THE DATE</p>
            <p className="font-serif text-2xl md:text-3xl text-foreground font-medium">
              December 28, 2025
            </p>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a href="#story" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1.2
      }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
          
          <motion.div animate={{
          y: [0, 8, 0]
        }} transition={{
          duration: 1.5,
          repeat: Infinity
        }}>
            
          </motion.div>
        </motion.a>
      </div>
    </section>;
};