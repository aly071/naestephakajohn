import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { Send, Heart } from "lucide-react";

export const RSVPSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
  
    // 👇 ADD THIS DEBUG BLOCK
    for (const pair of formData.entries()) {
      console.log(pair);
    }
  
    await fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSehWq7YLOgjwrHEJdhZMRqs6l3YlLBAaumg7IEeOKkrcPzAog/formResponse",
      {
        method: "POST",
        body: formData,
        mode: "no-cors",
      }
    );
  
    setIsSubmitting(false);
  };

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
          <h2 className="font-script text-5xl md:text-7xl mb-6" style={{ color: 'hsl(216, 60%, 55%)' }}>
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
          <form
            onSubmit={handleSubmit}
            className="bg-background rounded-2xl p-8 shadow-elegant border border-secondary/30"
          >
            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="font-sans text-sm">First Name *</Label>
                  <Input
                    id="firstName"
                    name="entry.1498135098"
                    required
                    className="bg-card border-gold-light/30 focus:border-primary"
                    placeholder="John"
                  />  
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="font-sans text-sm">Last Name *</Label>
                  <Input
                    id="lastName"
                    name="entry.1155229246"
                    required
                    className="bg-card border-gold-light/30 focus:border-primary"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="font-sans text-sm">Email Address *</Label>
                <Input
                  id="email"
                  name="entry.719487143"
                  type="email"
                  required
                  className="bg-card border-gold-light/30 focus:border-primary"
                  placeholder="john@example.com"
                />
              </div>

            <div className="space-y-3">
              <Label className="font-sans text-sm">Will you be attending? *</Label>

              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="entry.877086558"
                    value="yes"
                    defaultChecked
                  />
                  Joyfully Accept
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="entry.877086558"
                    value="no"
                  />
                  Regretfully Decline
                </label>
              </div>
            </div>

              <div className="space-y-2">
                <Label htmlFor="guests" className="font-sans text-sm">
                  Number of Guests
                </Label>
                <Input
                  id="guests"
                  name="entry.953371016"
                  type="number"
                  defaultValue="1"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dietary" className="font-sans text-sm">Dietary Restrictions</Label>
                <Textarea
                  id="dietary"
                  name="entry.437024174"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="font-sans text-sm">Message to the Couple (Optional)</Label>
                <Textarea
                  id="message"
                  name="entry.2606285"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/80 text-foreground font-sans tracking-wide py-6 transition-all duration-300"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Heart className="w-4 h-4 animate-pulse" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Send RSVP
                  </span>
                )}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
