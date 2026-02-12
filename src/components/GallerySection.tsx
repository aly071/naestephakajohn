import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Camera, Upload, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { toast } from "sonner";

// Placeholder images - these would be replaced with actual couple photos
const galleryImages = [
{ id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop", alt: "Couple photo 1" },
{ id: 2, src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=600&fit=crop", alt: "Couple photo 2" },
{ id: 3, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=600&fit=crop", alt: "Couple photo 3" },
{ id: 4, src: "https://images.unsplash.com/photo-1529634597503-139d3726fed5?w=600&h=600&fit=crop", alt: "Couple photo 4" },
{ id: 5, src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=600&fit=crop", alt: "Couple photo 5" },
{ id: 6, src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=600&fit=crop", alt: "Couple photo 6" }];


export const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleUpload = () => {
    window.open("https://drive.google.com/drive/folders/19AHoGs_z9GE8F1BIPzPIG-ChW960W-I6?usp=sharing", "_blank");
  };

  return (
    <section id="gallery" className="py-20 md:py-32 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12">

          <p className="font-sans text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Captured Moments
          </p>
          <h2 className="font-script text-5xl md:text-7xl mb-6 text-[#b49350]" style={{ color: '#b49350' }}>
            Our Gallery
          </h2>
          <p className="font-serif text-lg text-foreground/70 max-w-xl mx-auto mb-8">
            A collection of precious moments from our journey together.
          </p>

          <Button
            onClick={handleUpload}
            variant="outline"
            className="border-secondary text-foreground hover:bg-primary hover:text-foreground transition-all duration-300">

            <Upload className="w-4 h-4 mr-2" />
            Upload Your Photos
          </Button>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {galleryImages.map((image, index) =>
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group cursor-pointer aspect-square overflow-hidden rounded-xl"
            onClick={() => setSelectedImage(image.src)}>

              <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-300 flex items-center justify-center">
                <Camera className="w-8 h-8 text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          )}
        </div>

        {/* Share Photos CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12">

          <div className="inline-flex items-center gap-2 bg-primary/30 px-6 py-3 rounded-full">
            <Heart className="w-4 h-4 text-foreground" />
            <p className="font-sans text-sm text-foreground/80">
              Share your wedding photos with us using{" "}
              <span className="font-medium" style={{ color: 'hsl(216, 60%, 55%)' }}>#JohnAndStephanie2025</span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl bg-transparent border-none p-0">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors">

            <X className="w-5 h-5" />
          </button>
          {selectedImage &&
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="w-full h-auto rounded-lg" />

          }
        </DialogContent>
      </Dialog>
    </section>);

};