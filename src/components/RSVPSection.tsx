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

    const form = e.target as HTMLFormElement;

    const payload = {
      firstName: (form.querySelector("#firstName") as HTMLInputElement).value,
      lastName: (form.querySelector("#lastName") as HTMLInputElement).value,
      email: (form.querySelector("#email") as HTMLInputElement).value,
      attending:
        (form.querySelector('input[name="attending"]:checked') as HTMLInputElement)?.value || "yes",
      guests: (form.querySelector("#guests") as HTMLInputElement).value,
      dietary: (form.querySelector("#dietary") as HTMLTextAreaElement).value,
      message: (form.querySelector("#message") as HTMLTextAreaElement).value,
    };

    try {
      await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      toast.success("Thank you for your RSVP!");
      form.reset();
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <section id="rsvp" className="py-20 md:py-32 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-script text-5xl md:text-7xl mb-6 text-primary">
            RSVP
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          {/* ✅ USE OUR API — NO GOOGLE ACTION */}
          <form
            onSubmit={handleSubmit}
            className="bg-background rounded-2xl p-8 shadow-elegant border space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Input id="firstName" placeholder="First Name" required />
              <Input id="lastName" placeholder="Last Name" required />
            </div>

            <Input id="email" type="email" placeholder="Email" required />

            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input type="radio" name="attending" value="yes" defaultChecked />
                Joyfully Accept
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="attending" value="no" />
                Regretfully Decline
              </label>
            </div>

            <Input id="guests" type="number" defaultValue="1" />

            <Textarea id="dietary" placeholder="Dietary restrictions" />
            <Textarea id="message" placeholder="Message to the couple" />

            <Button type="submit" disabled={isSubmitting} className="w-full">
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
          </form>
        </motion.div>
      </div>
    </section>
  );
};
