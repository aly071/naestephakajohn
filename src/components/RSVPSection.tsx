import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Heart } from "lucide-react";
import { toast } from "sonner";

export const RSVPSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("https://formspree.io/f/xaqdengw", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        toast.success("Thank you for your RSVP ❤️");
        e.currentTarget.reset();
      } else {
        toast.error("Submission failed");
      }
    } catch {
      toast.error("Server error");
    }

    setIsSubmitting(false);
  };

  return (
    <section
      id="rsvp"
      className="py-20 md:py-32 bg-card relative overflow-hidden"
    >
      <div className="container mx-auto px-4">

        {/* Heading — same style as Guestbook */}
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
            style={{ color: "#b49350" }}
          >
            RSVP
          </h2>

          <p className="font-serif text-lg text-foreground/70 max-w-xl mx-auto">
            Please let us know if you’ll be joining us on our special day.
          </p>
        </motion.div>

        {/* Card — EXACT SAME STYLE as Guestbook form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-background rounded-2xl p-8 shadow-elegant border border-secondary/30"
          >
            <h3 className="font-serif text-2xl text-foreground mb-6 flex items-center gap-3">
              <Heart className="w-6 h-6 text-primary" />
              Confirm Your Attendance
            </h3>

            <div className="space-y-5">

              {/* Names */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>First Name *</Label>
                  <Input name="firstName" required />
                </div>

                <div className="space-y-2">
                  <Label>Last Name *</Label>
                  <Input name="lastName" required />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label>Email Address *</Label>
                <Input type="email" name="email" required />
              </div>

              {/* Attendance */}
              <div className="space-y-2">
                <Label>Will you be attending? *</Label>

                <div className="flex gap-6">
                  <label className="flex items-center gap-2 font-sans">
                    <input
                      type="radio"
                      name="attending"
                      value="Accept"
                      defaultChecked
                    />
                    Joyfully Accept
                  </label>

                  <label className="flex items-center gap-2 font-sans">
                    <input
                      type="radio"
                      name="attending"
                      value="Decline"
                    />
                    Regretfully Decline
                  </label>
                </div>
              </div>

              {/* Guests */}
              <div className="space-y-2">
                <Label>Number of Guests</Label>
                <Input name="guests" type="number" defaultValue="1" />
              </div>

              {/* Dietary */}
              <div className="space-y-2">
                <Label>Dietary Restrictions</Label>
                <Textarea name="dietary" rows={3} />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label>Message to the Couple (Optional)</Label>
                <Textarea name="message" rows={4} />
              </div>

              {/* Submit button — same style */}
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
