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

    try {
      const res = await fetch("https://formspree.io/f/xaqdengw", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
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
    <section className="py-20 bg-gradient-to-b from-white to-neutral-100">
      <div className="max-w-2xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-10">
          <p className="tracking-widest text-sm text-neutral-500">KINDLY RESPOND</p>
          <h2 className="text-6xl font-serif text-blue-500 mb-3">RSVP</h2>
          <p className="text-neutral-600">
            Please let us know if you'll be joining us
          </p>
        </div>

        {/* Card */}
        <div className="bg-white/90 backdrop-blur rounded-3xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Names */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">First Name *</label>
                <Input name="firstName" required placeholder="John" />
              </div>

              <div>
                <label className="text-sm font-medium">Last Name *</label>
                <Input name="lastName" required placeholder="Doe" />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium">Email Address *</label>
              <Input
                type="email"
                name="email"
                required
                placeholder="john@example.com"
              />
            </div>

            {/* Attendance */}
            <div>
              <p className="text-sm font-medium mb-2">Will you be attending? *</p>

              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <input type="radio" name="attending" value="Accept" defaultChecked />
                  Joyfully Accept
                </label>

                <label className="flex items-center gap-2">
                  <input type="radio" name="attending" value="Decline" />
                  Regretfully Decline
                </label>
              </div>
            </div>

            {/* Guests */}
            <div>
              <label className="text-sm font-medium">Number of Guests</label>
              <Input name="guests" type="number" defaultValue="1" />
            </div>

            {/* Dietary */}
            <div>
              <label className="text-sm font-medium">Dietary Restrictions</label>
              <Textarea
                name="dietary"
                placeholder="Please let us know of any allergies or dietary requirements..."
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm font-medium">
                Message to the Couple (Optional)
              </label>
              <Textarea name="message" placeholder="Share your wishes..." />
            </div>

            {/* Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-2xl h-12 text-base"
            >
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
      </div>
    </section>
  );
};
