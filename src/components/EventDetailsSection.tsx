import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, MapPin, Shirt, Calendar } from "lucide-react";

const events = [
  {
    title: "Wedding Ceremony",
    date: "December 28, 2025",
    time: "3:00 PM",
    venue: "St. Augustine Church",
    address: "123 Cathedral Avenue, Manila, Philippines",
    dressCode: "Formal Attire",
    description:
      "Join us as we exchange vows and begin our journey as husband and wife.",
  },
  {
    title: "Reception",
    date: "December 28, 2025",
    time: "6:00 PM",
    venue: "Grand Ballroom, Manila Hotel",
    address: "One Rizal Park, Manila, Philippines",
    dressCode: "Semi-Formal / Cocktail",
    description:
      "Celebrate with us over dinner, dancing, and joyful festivities.",
  },
];

export const EventDetailsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="details" className="py-20 md:py-32 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Join Our Celebration
          </p>
          <h2 className="font-script text-5xl md:text-7xl text-primary mb-6">
            Event Details
          </h2>
          <p className="font-serif text-lg text-foreground/70 max-w-xl mx-auto">
            We would be honored to have you celebrate this special day with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card rounded-2xl p-8 shadow-elegant border border-gold-light/20 hover:border-gold-light/40 transition-all duration-300"
            >
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-6 text-center">
                {event.title}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold-cream flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-sans text-sm text-muted-foreground uppercase tracking-wide">
                      Date
                    </p>
                    <p className="font-serif text-lg text-foreground">
                      {event.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold-cream flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-sans text-sm text-muted-foreground uppercase tracking-wide">
                      Time
                    </p>
                    <p className="font-serif text-lg text-foreground">
                      {event.time}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold-cream flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-sans text-sm text-muted-foreground uppercase tracking-wide">
                      Venue
                    </p>
                    <p className="font-serif text-lg text-foreground">
                      {event.venue}
                    </p>
                    <p className="font-sans text-sm text-muted-foreground">
                      {event.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold-cream flex items-center justify-center flex-shrink-0">
                    <Shirt className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-sans text-sm text-muted-foreground uppercase tracking-wide">
                      Dress Code
                    </p>
                    <p className="font-serif text-lg text-foreground">
                      {event.dressCode}
                    </p>
                  </div>
                </div>
              </div>

              <p className="font-serif text-foreground/70 mt-6 pt-6 border-t border-border text-center italic">
                {event.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
