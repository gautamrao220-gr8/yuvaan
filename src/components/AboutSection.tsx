import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Target, Users, Lightbulb, Award } from "lucide-react";
import gallery1 from "@/assets/yuvaan_team.jpeg";
import gallery2 from "@/assets/yuvaan_1.jpeg";
import gallery3 from "@/assets/yuvaan_2.jpeg";
import gallery4 from "@/assets/yuvaan_4.jpeg";

const galleryImages = [gallery1, gallery2, gallery3, gallery4];

const features = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To design and build a fully autonomous rover capable of completing complex exploration.",
  },
  {
    icon: Users,
    title: "Diverse Team",
    description:
      "25+ passionate engineers, scientists, and designers from mechanical, electrical, and computer science backgrounds.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "Pushing boundaries with cutting-edge technologies including autonomous navigation, advanced sensor fusion, and modular design.",
  },
  {
    icon: Award,
    title: "Proven Excellence",
    description:
      "Multiple awards and successful mission completions across various competitions like IRC, Inter IIT etc. ",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="py-24 bg-gradient-space relative">
      <div className="absolute inset-0 stars opacity-20" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm tracking-[0.3em] uppercase">
            About Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
            Robotics Club IIT Guwahati
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Founded in 2013 to build various robots, from autonomous bots to robotic arms, fostering technical skills and teamwork through projects, workshops, and competitions.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-card rounded-xl p-6 border border-border card-hover"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                The mission of IIT Guwahati's Robotics Club is to unite students in an
                educational environment and provide students a place to pursue their interest
                in mechanical, electronic, and software design by working on large and small
                scale robotics projects.</p>
              <p>
                Having said that we take pride in talking about our
                projects, be it autonomous bots, humanoids, swarm of tiny robots, robotic
                arms or aerial vehicles, we haven't left any stone unturned.</p>
              <p>However, theclub provides much more than just technical growth to its members, from
                team-building to cooperation, from perseverance to sincerity, the club teaches
                a myriad of interpersonal skills essential in daily life.</p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-xl bg-gradient-card border border-border overflow-hidden relative group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={galleryImages[currentImageIndex]}
                  alt={`Gallery image ${currentImageIndex + 1}`}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex ? "bg-primary w-6" : "bg-white/30"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
