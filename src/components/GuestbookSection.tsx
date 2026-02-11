import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Send, Heart, MessageCircle, Mail, Phone } from "lucide-react";

const sampleMessages = [
{
  name: "Maria & Carlos",
  message: "Wishing you a lifetime of love and happiness! Can't wait to celebrate with you!",
  date: "2 days ago"
},
{
  name: "The Garcia Family",
  message: "Congratulations to the most beautiful couple! Your love story inspires us all.",
  date: "1 week ago"
},
{
  name: "Anna Santos",
  message: "So happy for both of you! May your marriage be filled with endless joy and adventure.",
  date: "2 weeks ago"
}];


export const GuestbookSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Message Sent!", {
      description: "Thank you for your beautiful wishes!"
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="guestbook" className="py-20 md:py-32 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12">

          <p className="font-sans text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Leave Your Wishes
          </p>
          <h2 className="font-script text-5xl md:text-7xl mb-6 text-[#b49350]" style={{ color: 'hsl(216, 60%, 55%)' }}>
            Guestbook
          </h2>
          <p className="font-serif text-lg text-foreground/70 max-w-xl mx-auto">
            Share your love, blessings, and well-wishes with us. We treasure
            every message from our loved ones.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Message Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}>

            <form
              onSubmit={handleSubmit}
              className="bg-background rounded-2xl p-8 shadow-elegant border border-secondary/30">

              <h3 className="font-serif text-2xl text-foreground mb-6 flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-primary" />
                Send Your Wishes
              </h3>

              <div className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="guestName" className="font-sans text-sm">
                    Your Name *
                  </Label>
                  <Input
                    id="guestName"
                    required
                    className="bg-card border-secondary/40 focus:border-primary"
                    placeholder="Your name" />

                </div>

                <div className="space-y-2">
                  <Label htmlFor="guestEmail" className="font-sans text-sm">
                    Email (Optional)
                  </Label>
                  <Input
                    id="guestEmail"
                    type="email"
                    className="bg-card border-secondary/40 focus:border-primary"
                    placeholder="your@email.com" />

                </div>

                <div className="space-y-2">
                  <Label htmlFor="guestMessage" className="font-sans text-sm">
                    Your Message *
                  </Label>
                  <Textarea
                    id="guestMessage"
                    required
                    className="bg-card border-secondary/40 focus:border-primary resize-none"
                    placeholder="Share your blessings and wishes..."
                    rows={5} />

                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/80 text-foreground font-sans tracking-wide py-6 transition-all duration-300">

                  {isSubmitting ?
                  <span className="flex items-center gap-2">
                      <Heart className="w-4 h-4 animate-pulse" />
                      Sending...
                    </span> :

                  <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </span>
                  }
                </Button>
              </div>
            </form>

            {/* Contact Info */}
            <div className="mt-8 bg-background rounded-2xl p-6 shadow-soft border border-secondary/30">
              <h4 className="font-serif text-lg text-foreground mb-4">
                Questions? Contact Us
              </h4>
              <div className="space-y-3">
                <a
                  href="mailto:tephanie.salanatin@gmail.com"
                  className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors">

                  <Mail className="w-4 h-4" />
                  <span className="font-sans text-sm">
                    tephanie.salanatin@gmail.com
                  </span>
                </a>
                <a
                  href="tel:+639762304134"
                  className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors">

                  <Phone className="w-4 h-4" />
                  <span className="font-sans text-sm">+63 976 230 4134</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Messages Display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6">

            <h3 className="font-serif text-2xl text-foreground flex items-center gap-3">
              <Heart className="w-6 h-6 text-primary fill-primary" />
              Messages from Loved Ones
            </h3>

            {sampleMessages.map((msg, index) =>
            <motion.div
              key={msg.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="bg-background rounded-xl p-6 shadow-soft border border-secondary/30">

                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-serif text-lg text-foreground">
                    {msg.name}
                  </h4>
                  <span className="font-sans text-xs text-muted-foreground">
                    {msg.date}
                  </span>
                </div>
                <p className="font-sans text-foreground/70 leading-relaxed">
                  "{msg.message}"
                </p>
              </motion.div>
            )}

            <div className="text-center pt-4">
              <p className="font-sans text-sm text-muted-foreground">
                Be part of our story—leave your message above!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};