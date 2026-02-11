import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Heart } from "lucide-react";
import { toast } from "sonner";

export const RSVPSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      attending: formData.get("attending"),
      guests: formData.get("guests"),
      dietary: formData.get("dietary"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (result.success) {
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
    <section className="py-20">
      <div className="max-w-xl mx-auto">
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

          <Button type="submit" disabled={isSubmitting}>
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

        </form>
      </div>
    </section>
  );
};
