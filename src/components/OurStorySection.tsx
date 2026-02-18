import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const pantoneColors = [
  { color: "#bed1f3", label: "Light Blue" },
  { color: "#f9e782", label: "Pastel Yellow" },
  { color: "#f3e1dc", label: "Light Peach" },
  { color: "#b3bc8f", label: "Lush Green" },
];

export const OurStorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="story" className="py-20 md:py-32 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Our Colors
          </p>
          <h2 className="font-script text-5xl md:text-7xl mb-6" style={{ color: '#b49350' }}>
            Wedding Pantone
          </h2>
          <p className="font-serif text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Our chosen palette features soft light blue, pastel yellow, light peach and lush green.
            These colors evoke romance, sophistication, and a touch of modern elegance.
          </p>
        </motion.div>

        {/* Color Circles */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-3xl mx-auto">
          {pantoneColors.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col items-center gap-3"
            >
              {/* Painted circle effect */}
              <div className="relative w-28 h-28 md:w-36 md:h-36">
                {/* Outer sketchy ring */}
                <div
                  className="absolute inset-0 rounded-full opacity-40"
                  style={{
                    border: `3px solid ${item.color}`,
                    transform: "rotate(-5deg) scale(1.08)",
                  }}
                />
                <div
                  className="absolute inset-0 rounded-full opacity-30"
                  style={{
                    border: `2px solid ${item.color}`,
                    transform: "rotate(3deg) scale(1.12)",
                  }}
                />
                {/* Main filled circle */}
                <div
                  className="w-full h-full rounded-full shadow-soft"
                  style={{ backgroundColor: item.color }}
                />
              </div>
              <span className="font-sans text-xs tracking-wider uppercase text-muted-foreground">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
