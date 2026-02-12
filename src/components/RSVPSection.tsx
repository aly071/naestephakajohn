import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Heart } from "lucide-react";
import { toast } from "sonner";

export const RSVPSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);

    // small delay so Google receives data first
    setTimeout(() => {
      toast.success("Thank you for your RSVP ❤️");
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <section className="py-20">
      <div className="max-w-xl mx-auto">

        {/* prevents redirect */}
        <iframe name="hidden_iframe" style={{ display: "none" }} />

        <form
          action="https://docs.google.com/forms/d/e/1FAIpQLSehWq7YLOgjwrHEJdhZMRqs6l3YlLBAaumg7IEeOKkrcPzAog/formResponse"
          method="POST"
          target="hidden_iframe"
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {/* Google entry IDs are REQUIRED */}
          <Input name="entry.1498135098" placeholder="First Name" required />
          <Input name="entry.1155229246" placeholder="Last Name" required />
          <Input name="entry.719487143" type="email" placeholder="Email" required />

          <div className="flex gap-4">
            <label className="flex gap-2 items-center">
              <input
                type="radio"
                name="entry.877086558"
                value="yes"
                defaultChecked
              />
              Accept
            </label>

            <label className="flex gap-2 items-center">
              <input
                type="radio"
                name="entry.877086558"
                value="no"
              />
              Decline
            </label>
          </div>

          <Input
            name="entry.953371016"
            type="number"
            defaultValue="1"
          />

          <Textarea
            name="entry.437024174"
            placeholder="Dietary restrictions"
          />

          <Textarea
            name="entry.2606285"
            placeholder="Message"
          />

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
