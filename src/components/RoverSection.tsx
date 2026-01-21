import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Radio, Eye, Zap, Cog, Navigation } from "lucide-react";
import roverImage from "@/assets/yuvaan.png";

const specs = [
  { icon: Cog, label: "4-Wheel Drive", value: "All-terrain capability" },
  { icon: Eye, label: "Vision System", value: "ZED Stereo Camera + Multiple RGB Web Cameras" },
  { icon: Cpu, label: "Autonomy", value: "ROS+ Sensor Fusion + Path Planning" },
  { icon: Radio, label: "Communication", value: "Wireless Antenna-Based Communication Link (Rover ↔ Workstation)" },
  { icon: Zap, label: "Power", value: "22.2 V Li-Po Battery + Integrated BMS + Regulated Power Rails" },
  { icon: Navigation, label: "Navigation", value: "ROS-Based Autonomous Navigation + EKF Sensor Fusion + Stereo Vision" },
];

const RoverSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="rover" className="py-24 bg-background relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
            Meet YUVAAN
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our flagship rover, engineered for autonomous exploration across
            the most challenging Martian terrains.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Rover Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border card-elevated">
              <img
                src={roverImage}
                alt="Yuvaan-X1 Rover"
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-display text-2xl font-bold mb-2 text-white">YUVAAN</h3>

              </div>
            </div>

          </motion.div>

          {/* Specifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-display text-2xl font-bold mb-8">
              Technical Specifications
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {specs.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-gradient-card rounded-lg p-4 border border-border"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <spec.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">{spec.label}</h4>
                      <p className="text-muted-foreground text-xs">{spec.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-gradient-card rounded-xl border border-border">
              <h4 className="font-display font-semibold mb-4">Key Capabilities</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Modular Chassis & Suspension
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  5-DOF robotic arm for sample collection
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Real-time telemetry and video streaming
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Extreme terrain traversal up to 45° incline
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RoverSection;
