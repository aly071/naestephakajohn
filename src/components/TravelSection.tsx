import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Hotel, Plane, Car } from "lucide-react";

const accommodations = [
  {
    name: "Manila Hotel",
    description: "Our reception venue - Special rates for wedding guests",
    distance: "0 min from reception",
  },
  {
    name: "Diamond Hotel",
    description: "Luxury accommodations with city views",
    distance: "5 min drive",
  },
  {
    name: "Sofitel Philippine Plaza",
    description: "Beachfront resort along Manila Bay",
    distance: "10 min drive",
  },
];

export const TravelSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="travel" className="py-20 md:py-32 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Getting There
          </p>
          <h2 className="font-script text-5xl md:text-7xl text-primary mb-6">
            Travel & Stay
          </h2>
          <p className="font-serif text-lg text-foreground/70 max-w-xl mx-auto">
            Everything you need to know to make your trip smooth and comfortable.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <div className="bg-card rounded-2xl overflow-hidden shadow-elegant border border-gold-light/20 h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.5089778498493!2d120.97541687583894!3d14.582044485896773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca2116a8b3c3%3A0x9f75a08b0f7f6de9!2sThe%20Manila%20Hotel!5e0!3m2!1sen!2sph!4v1703000000000!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wedding Venue Location"
              />
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-1 lg:order-2 space-y-6"
          >
            {/* Transportation */}
            <div className="bg-card rounded-2xl p-6 shadow-soft border border-gold-light/20">
              <h3 className="font-serif text-xl text-foreground mb-4 flex items-center gap-3">
                <Plane className="w-5 h-5 text-primary" />
                Getting Here
              </h3>
              <div className="space-y-4 font-sans text-foreground/70">
                <div className="flex items-start gap-3">
                  <Plane className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                  <p>
                    <span className="text-foreground font-medium">By Air:</span>{" "}
                    Ninoy Aquino International Airport (NAIA) is the nearest
                    airport, approximately 20-30 minutes from the venue.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Car className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                  <p>
                    <span className="text-foreground font-medium">By Car:</span>{" "}
                    Parking is available at Manila Hotel. Valet service is
                    complimentary for hotel guests.
                  </p>
                </div>
              </div>
            </div>

            {/* Accommodations */}
            <div className="bg-card rounded-2xl p-6 shadow-soft border border-gold-light/20">
              <h3 className="font-serif text-xl text-foreground mb-4 flex items-center gap-3">
                <Hotel className="w-5 h-5 text-primary" />
                Where to Stay
              </h3>
              <div className="space-y-4">
                {accommodations.map((hotel, index) => (
                  <div
                    key={hotel.name}
                    className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0"
                  >
                    <div className="w-8 h-8 rounded-full bg-gold-cream flex items-center justify-center flex-shrink-0">
                      <span className="font-serif text-primary font-medium">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <p className="font-serif text-foreground font-medium">
                        {hotel.name}
                      </p>
                      <p className="font-sans text-sm text-foreground/70">
                        {hotel.description}
                      </p>
                      <p className="font-sans text-xs text-secondary mt-1">
                        <MapPin className="w-3 h-3 inline mr-1" />
                        {hotel.distance}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
