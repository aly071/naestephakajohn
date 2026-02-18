import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Heart, MessageCircle } from "lucide-react";
import { toast } from "sonner";

export const GuestbookSection = () => {
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
      const res = await fetch("https://formspree.io/f/mlgwjgjr", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        toast.success("Message Sent 💌");
        form.reset();
      } else {
        toast.error("Submission failed.");
      }
    } catch {
      toast.error("Network issue.");
    }

    setIsSubmitting(false);
  };

  return (
    <section id="guestbook" className="py-20 bg-card">
      <div className="container mx-auto px-4">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Leave Your Wishes
          </p>
          <h2 className="font-script text-5xl md:text-7xl mb-6" style={{ color: '#b49350' }}>
            Guestbook
          </h2>
          <p className="font-serif text-lg text-foreground/70 max-w-2xl mx-auto">
            Share your love, blessings, and well-wishes with us. We treasure every message from our loved ones.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="max-w-xl mx-auto bg-background rounded-2xl p-8 shadow-elegant border space-y-5"
        >

          <Input name="name" placeholder="Your Name" required />
          <Input name="email" type="email" placeholder="Email (optional)" />
          <Textarea name="message" rows={5} placeholder="Your message" required />

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? (
              <>
                <Heart className="w-4 h-4 animate-pulse" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Message
              </>
            )}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};
