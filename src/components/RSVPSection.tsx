import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Heart } from "lucide-react";
import { toast } from "sonner";

export const RSVPSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 🚨 prevents redirect
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("https://formspree.io/f/xaqdengw", {
        method: "POST",
        body: formData, // Formspree accepts this directly
        headers: {
          Accept: "application/json", // 🚨 IMPORTANT
        },
      });

      toast.success("Thank you for your RSVP ❤️");
      form.reset();
    } catch (err) {
      toast.error("Submission failed. Try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <section className="py-20">
      <div className="max-w-xl mx-auto">
        {/* 🚨 NO action, NO method */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <Input name="firstName" placeholder="First Name" required />
          <Input name="lastName" placeholder="Last Name" required />
          <Input name="email" type="email" placeholder="Email" required />

          <div className="flex gap-4">
            <label>
              <input type="radio" name="attending" value="yes" defaultChecked />
              Accept
            </label>

            <label>
              <input type="radio" name="attending" value="no" />
              Decline
            </label>
          </div>

          <Input name="guests" type="number" defaultValue="1" />
          <Textarea name="dietary" placeholder="Dietary restrictions" />
          <Textarea name="message" placeholder="Message" />

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? (
              <>
                <Heart className="w-4 h-4 animate-pulse mr-2" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send RSVP
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};
