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

    if (isSubmitting) return;

    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xaqdengw", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        toast.success("Thank you for your RSVP ❤️");
        form.reset();
      } else {
        toast.error("Submission failed. Please try again.");
      }
    } catch {
      toast.error("Network issue. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <section id="rsvp" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            KINDLY RESPOND
          </p>
          <h2 className="font-script text-5xl md:text-7xl text-[#b49350]">
            RSVP
          </h2>
          <p className="font-serif text-lg text-foreground/70 max-w-xl mx-auto">
            Please let us know if you’ll be joining us on our special day.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="max-w-xl mx-auto bg-background rounded-2xl p-8 shadow-elegant border space-y-5"
        >
          <Input name="firstName" placeholder="First Name" required />
          <Input name="lastName" placeholder="Last Name" required />
          <Input name="email" type="email" placeholder="Email" required />

          <div className="flex gap-6">
            <label>
              <input type="radio" name="attending" value="Accept" defaultChecked />
              Accept
            </label>
            <label>
              <input type="radio" name="attending" value="Decline" />
              Decline
            </label>
          </div>

          <Input name="guests" type="number" defaultValue="1" />
          <Textarea name="dietary" placeholder="Dietary restrictions" />
          <Textarea name="message" placeholder="Message" />

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? (
              <>
                <Heart className="w-4 h-4 animate-pulse" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send RSVP
              </>
            )}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};
