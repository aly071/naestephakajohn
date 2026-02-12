import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Send, Heart, MessageCircle, Mail, Phone } from "lucide-react";

export const GuestbookSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("https://formspree.io/f/mlgwjgjr", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        toast.success("Message Sent 💌", {
          description: "Thank you for your beautiful wishes!",
        });

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
      id="guestbook"
      className="py-20 md:py-32 bg-card relative overflow-hidden"
    >
      <div className="container mx-auto px-4">

        {/* Heading */}
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

          <h2
            className="font-script text-5xl md:text-7xl mb-6"
            style={{ color: "#b49350" }}
          >
            Guestbook
          </h2>

          <p className="font-serif text-lg text-foreground/70 max-w-xl mx-auto">
            Share your love, blessings, and well-wishes with us.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto bg-background rounded-2xl p-8 shadow-elegant border border-secondary/30 space-y-5"
        >
          <h3 className="font-serif text-2xl flex items-center gap-3">
            <MessageCircle className="w-6 h-6 text-primary" />
            Send Your Wishes
          </h3>

          <div className="space-y-2">
            <Label>Your Name *</Label>
            <Input name="name" required />
          </div>

          <div className="space-y-2">
            <Label>Email (Optional)</Label>
            <Input name="email" type="email" />
          </div>

          <div className="space-y-2">
            <Label>Your Message *</Label>
            <Textarea name="message" rows={5} required />
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <Heart className="w-4 h-4 animate-pulse" />
                Sending...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </span>
            )}
          </Button>
        </motion.form>

        {/* Contact info */}
        <div className="max-w-xl mx-auto mt-8 bg-background rounded-2xl p-6 shadow-soft border border-secondary/30 text-sm text-muted-foreground">
          <p>Questions?</p>
          <p>tephanie.salanatin@gmail.com</p>
          <p>+63 976 230 4134</p>
        </div>
      </div>
    </section>
  );
};
