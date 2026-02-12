import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Heart } from "lucide-react";

export const RSVPSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <section className="py-20">
      <div className="max-w-xl mx-auto">

        {/* ✅ Formspree handles everything */}
        <form
          action="https://formspree.io/f/xaqdengw"
          method="POST"
          onSubmit={() => setIsSubmitting(true)}
          className="space-y-4"
        >
          {/* First Name */}
          <Input
            name="firstName"
            placeholder="First Name"
            required
          />

          {/* Last Name */}
          <Input
            name="lastName"
            placeholder="Last Name"
            required
          />

          {/* Email */}
          <Input
            name="email"
            type="email"
            placeholder="Email"
            required
          />

          {/* Attending */}
          <div className="flex gap-4">
            <label className="flex gap-2">
              <input type="radio" name="attending" value="yes" defaultChecked />
              Accept
            </label>

            <label className="flex gap-2">
              <input type="radio" name="attending" value="no" />
              Decline
            </label>
          </div>

          {/* Guests */}
          <Input
            name="guests"
            type="number"
            defaultValue="1"
          />

          {/* Dietary */}
          <Textarea
            name="dietary"
            placeholder="Dietary restrictions"
          />

          {/* Message */}
          <Textarea
            name="message"
            placeholder="Message"
          />

          {/* Optional: stay on homepage after submit */}
          <input type="hidden" name="_next" value="/" />

          {/* Button */}
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
        </form>
      </div>
    </section>
  );
};
