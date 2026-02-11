import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Calendar, MapPin, Sparkles } from "lucide-react";

const timeline = [
{
  icon: Heart,
  date: "January 2020",
  title: "We First Met",
  description:
  "Our paths crossed at a mutual friend's gathering. Little did we know, this chance meeting would change our lives forever."
},
{
  icon: Calendar,
  date: "June 2020",
  title: "Our First Date",
  description:
  "A simple dinner turned into hours of conversation. We knew there was something special between us."
},
{
  icon: MapPin,
  date: "December 2022",
  title: "Moving In Together",
  description:
  "We took the next step in our journey, creating a home filled with love, laughter, and countless memories."
},
{
  icon: Sparkles,
  date: "February 2025",
  title: "The Proposal",
  description:
  "Under a starlit sky, John asked Stephanie to spend forever together. With tears of joy, she said yes!"
}];


export const OurStorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="story" className="py-20 md:py-32 bg-card relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">

          <p className="font-sans text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            How It All Began
          </p>
          <h2 className="font-script text-5xl md:text-7xl mb-6 text-[#b49350]" style={{ color: 'hsl(216, 60%, 55%)' }}>
            Our Story
          </h2>
          <p className="font-serif text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Every love story is beautiful, but ours is our favorite. Here's a
            glimpse into the journey that brought us together.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {timeline.map((item, index) =>
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative flex gap-6 pb-12 last:pb-0">

              {/* Timeline Line */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-elegant">
                  <item.icon className="w-5 h-5 text-foreground" />
                </div>
                {index < timeline.length - 1 &&
              <div className="w-0.5 flex-1 bg-gradient-to-b from-primary to-secondary/30 mt-4" />
              }
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <span className="font-sans text-xs tracking-wider uppercase text-secondary">
                  {item.date}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mt-1 mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-foreground/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};