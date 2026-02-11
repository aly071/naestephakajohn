import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Gift, CreditCard, QrCode, Heart } from "lucide-react";

const registryOptions = [
{
  title: "Bank Transfer",
  icon: CreditCard,
  description: "Send monetary gifts directly to our bank account",
  details: "Account Name: John Ferino Gutierrez\nBank: BDO\nAccount No: XXXX-XXXX-XXXX",
  qrPlaceholder: true
},
{
  title: "GCash",
  icon: QrCode,
  description: "Quick and easy mobile transfer via GCash",
  details: "GCash Name: John Ferino Gutierrez\nMobile: 09XX-XXX-XXXX",
  qrPlaceholder: true
}];


export const RegistrySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="registry" className="py-20 md:py-32 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12">

          <p className="font-sans text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Your Presence is Our Gift
          </p>
          <h2 className="font-script text-5xl md:text-7xl mb-6 text-[#b49350]" style={{ color: 'hsl(216, 60%, 55%)' }}>
            Gift Registry
          </h2>
          <p className="font-serif text-lg text-foreground/70 max-w-2xl mx-auto">
            Your love and presence at our wedding is the greatest gift of all.
            However, if you wish to honor us with a gift, we would be grateful
            for a contribution to our future together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {registryOptions.map((option, index) =>
          <motion.div
            key={option.title}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-card rounded-2xl p-8 shadow-elegant border border-secondary/30 text-center">

              <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-6 flex items-center justify-center">
                <option.icon className="w-7 h-7 text-foreground" />
              </div>

              <h3 className="font-serif text-2xl text-foreground mb-3">
                {option.title}
              </h3>
              <p className="font-sans text-foreground/70 mb-6">
                {option.description}
              </p>

              {/* QR Code Placeholder */}
              <div className="w-40 h-40 mx-auto bg-muted rounded-xl flex items-center justify-center mb-6 border-2 border-dashed border-secondary">
                <div className="text-center">
                  <QrCode className="w-12 h-12 text-secondary mx-auto mb-2" />
                  <p className="font-sans text-xs text-muted-foreground">
                    QR Code
                  </p>
                </div>
              </div>

              <div className="bg-background rounded-lg p-4">
                <p className="font-sans text-sm text-foreground/70 whitespace-pre-line">
                  {option.details}
                </p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12">

          <div className="inline-flex items-center gap-3 bg-card px-6 py-4 rounded-xl shadow-soft border border-secondary/30">
            <Gift className="w-5 h-5 text-primary" />
            <p className="font-serif text-foreground/80 italic">
              "A gift is a blessing, but your presence is our greatest treasure"
            </p>
            <Heart className="w-5 h-5 text-primary fill-primary" />
          </div>
        </motion.div>
      </div>
    </section>);

};