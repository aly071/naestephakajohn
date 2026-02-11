import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Heart } from "lucide-react";

export const RSVPSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="rsvp" className="py-20 md:py-32 bg-card relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50m-40 0a40,40 0 1,0 80,0a40,40 0 1,0 -80,0' fill='none' stroke='%236B8CC9' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: "100px 100px"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Kindly Respond
          </p>

          <h2
            className="font-script text-5xl md:text-7xl mb-6"
            style={{ color: "hsl(216, 60%, 55%)" }}
          >
            RSVP
          </h2>

          <p className="font-serif text-lg text-foreground/70 max-w-xl mx-auto">
            Please let us know if you'll be joining us by November 28, 2025
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          {/* ✅ Native Google Forms Submit (NO fetch, NO JS) */}
          <form
            action="https://docs.google.com/forms/d/e/1FAIpQLSehWq7YLOgjwrHEJdhZMRqs6l3YlLBAaumg7IEeOKkrcPzAog/formResponse"
            method="POST"
            target="hidden_iframe"
            className="bg-background rounded-2xl p-8 shadow-elegant border border-secondary/30 space-y-6"
          >
            {/* First + Last */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>First Name *</Label>
                <Input
                  name="entry.1498135098"
                  required
                  placeholder="John"
                />
              </div>

              <div className="space-y-2">
                <Label>Last Name *</Label>
                <Input
                  name="entry.1155229246"
                  required
                  placeholder="Doe"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label>Email *</Label>
              <Input
                name="entry.719487143"
                type="email"
                required
                placeholder="john@example.com"
              />
            </div>

            {/* Attending */}
            <div className="space-y-3">
              <Label>Will you be attending? *</Label>

              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="entry.877086558"
                    value="yes"
                    defaultChecked
                  />
                  Joyfully Accept
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="entry.877086558"
                    value="no"
                  />
                  Regretfully Decline
                </label>
              </div>
            </div>

            {/* Guests */}
            <div className="space-y-2">
              <Label>Number of Guests</Label>
              <Input
                name="entry.953371016"
                type="number"
                defaultValue="1"
              />
            </div>

            {/* Dietary */}
            <div className="space-y-2">
              <Label>Dietary Restrictions</Label>
              <Textarea name="entry.437024174" />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label>Message to the Couple (Optional)</Label>
              <Textarea name="entry.2606285" />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/80 text-foreground font-sans tracking-wide py-6"
            >
              <span className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                Send RSVP
              </span>
            </Button>
          </form>

          {/* ✅ Prevent redirect */}
          <iframe name="hidden_iframe" style={{ display: "none" }} />
        </motion.div>
      </div>
    </section>
  );
};
