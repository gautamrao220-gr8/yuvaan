import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const teamMembers = [
  {
    name: "Vipul Sharma",
    role: "Team Lead",

    image: null,
  },
  {
    name: "Aditya Lambat",
    role: "Computer Vision head",

    image: null,
  },
  {
    name: "Siddharth Khatod",
    role: "Software Manager",

    image: null,
  },
  {
    name: "Kanika Bansal",
    role: "Hardware Manager",

    image: null,
  },
  {
    name: "Vamaxi Maheshwari",
    role: "Mechanical Head",

    image: null,
  },
  {
    name: "Niranjana Nitin",
    role: "ABEx Head",

    image: null,
  },
  {
    name: "Anumula Bharath Kumar ",
    role: "Mechatronics Head",

    image: null,
  },
  {
    name: "Kedar Pednekar",
    role: "Mechanical",

    image: null,
  },
  {
    name: "Yuvraj Nim",
    role: "ROS Head",

    image: null,
  },
  {
    name: "Asif Houssain",
    role: "Communication Head",

    image: null,
  },
  {
    name: "B Gautam Rao",
    role: "Software Associate ",

    image: null,
  },
  {
    name: "Akshat Agarwal",
    role: "Mechatronics Associate",

    image: null,
  },
  {
    name: "Srikar Sai Muvva",
    role: "Electronics Associate",

    image: null,
  },
  {
    name: "Sukant",
    role: "Mechanical Associate",

    image: null,
  }

];

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-24 bg-gradient-space relative">
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
            Our Team
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
            The Crew
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Meet the brilliant minds behind Yuvaan. A diverse group united
            by passion for robotics.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group"
            >
              <div className="bg-gradient-card rounded-xl border border-border overflow-hidden card-hover">
                {/* Avatar placeholder */}
                <div className="aspect-square bg-secondary relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-3xl font-display font-bold text-primary">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-display font-semibold text-lg mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-1">
                    {member.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-card rounded-2xl p-8 border border-border max-w-2xl">
            <h3 className="font-display text-2xl font-bold mb-4">
              Partner with us
            </h3>
            <p className="text-muted-foreground mb-6">
              We are a college team seeking sponsors to support our competitions,
              growth, performance, and quality. Help us compete at the highest level.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
