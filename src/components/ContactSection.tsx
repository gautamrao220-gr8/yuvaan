import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Instagram, Linkedin, Youtube, Github } from "lucide-react";

const socials = [
  { icon: Instagram, label: "Instagram", href: "#", handle: "https://www.instagram.com/roboclubiitg" },
  { icon: Linkedin, label: "LinkedIn", href: "#", handle: "https://www.linkedin.com/company/robotics-club-iitg" },
  { icon: Youtube, label: "YouTube", href: "#", handle: "https://www.youtube.com/@RCIITG" },

];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm tracking-[0.3em] uppercase">
            Contact
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Interested in collaborating, sponsoring, or just want to say hello?
            We'd love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="flex items-start gap-4 p-6 bg-gradient-card rounded-xl border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email Us</h3>
                  <a
                    href="mailto:roboclub@iitg.ac.in"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    roboclub@iitg.ac.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-card rounded-xl border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    New SAC, IIT Guwahati<br />
                    Guwahati, Assam, 781039
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center">
              <h3 className="font-display font-semibold text-xl mb-6">Follow Us</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="flex flex-col items-center gap-3 p-6 bg-gradient-card rounded-xl border border-border hover:border-primary/50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <social.icon className="w-5 h-5 text-primary transition-colors" />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium">{social.label}</p>
                      <p className="text-xs text-muted-foreground truncate max-w-[150px]">{social.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
