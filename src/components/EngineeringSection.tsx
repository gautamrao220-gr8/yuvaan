import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Wrench, Cpu, Code } from "lucide-react";
import cadImage from "@/assets/cad.png";
import electronicsImage from "@/assets/electronics.png";
import softwareImage from "@/assets/dashboard.png";

const disciplines = [
  {
    id: "mechanical",
    icon: Wrench,
    title: "Mechanical",
    subtitle: "Structure & Mobility",
    color: "from-blue-600 to-cyan-500",
    features: [
      "Load-Optimized Structural Design: Engineered each suspension linkage to withstand 32.5 kg nominal load with a factor of safety of 2.27, resulting in a verified design load capacity of ≈724 N, ensuring long-term durability.",
      "Material-Driven Reliability: Selected SS-304 stainless steel for suspension components to provide high tensile strength, abrasion resistance, and corrosion durability in harsh outdoor and granular environments.",
      "Terrain-Adaptive Mobility Performance: Optimized suspension geometry to maintain stable axle spacing, maximize ground clearance, and enable smooth, controlled articulation over 15° slopes, 150 mm obstacles, and 200 mm craters.",
      "Precision Manipulation Mechanism: Integrated a dual 4-bar linkage gripper where outer coupling members act as adaptive jaws, featuring a pinching end-effector for precise manipulation of both small and irregular objects.",
      "High-Traction Wheel System: Designed polyurethane wheels with silicone rims to combine elastic deformation, abrasion resistance, and dust protection, enhancing traction while safeguarding internal motors and encoders.",
    ],
    image: cadImage,
  },
  {
    id: "electronics",
    icon: Cpu,
    title: "Electronics",
    subtitle: "Power & Sensors",
    color: "from-blue-500 to-cyan-600",
    features: [
      "Closed-Loop Locomotion Control: Implemented high-torque DC geared motors with quadrature encoders, driven by Cytron MDD20A motor drivers and controlled via an ESP32 dual-core processor for real-time PWM generation and precise speed/position feedback.",
      "Hierarchical Compute Architecture: Designed a distributed control system where low-level motor control and encoder processing are handled by the ESP32, while high-level navigation, perception, and decision-making are executed on a Jetson Orin Nano.",
      "Mission-Specific Astrobiology Electronics: Developed a dedicated electronics subsystem for the Astrobiology Module, controlling drilling, chemical flow regulation, and module positioning via a motor driver and ESP microcontroller with seamless integration to the main rover network",
      "Robust Power Management System: Engineered a 22.2 V, 22,000 mAh (25C) Li-Po power system with an integrated multi-cell BMS, providing ~4 hours of operation along with protection against over-voltage, over-current, thermal faults, and ensuring active cell balancing.",
      "Perception, Communication & Hardware Integration: Integrated antenna-based communication, multi-camera visual feedback, and a ZED stereo camera for depth sensing, visual odometry, and 3D mapping, all consolidated through custom PCBs to ensure compact, reliable, and noise-resistant electronic interconnections.",
    ],
    image: electronicsImage,
  },
  {
    id: "software",
    icon: Code,
    title: "Software",
    subtitle: "Autonomy & Control",
    color: "from-purple-500 to-pink-600",
    features: [
      "ROS Noetic Modular Control Framework: Developed a ROS Noetic–based distributed control architecture enabling seamless, low-latency communication between the Jetson module and workstation, supporting both Manual and Autonomous operational modes with smooth mode switching.",
      "Scalable, Sensor-Agnostic Design: Implemented a highly modular ROS node structure that allows rapid integration of new sensors (LiDAR, IMU, GPS) and algorithms (path planning, sensor fusion) with minimal system disruption, ensuring long-term adaptability.",
      "Autonomous Navigation & Perception Pipeline: Designed a custom autonomous navigation stack integrating perception, localization, and control, featuring real-time obstacle detection, dynamic local cost mapping, waypoint-based path planning, and continuous on-the-fly route correction without pre-mapped terrain.",
      "Robust Sensor Fusion & Localization: Achieved drift-minimized localization using an EKF-based fusion model (robot_localization) combining high-rate wheel odometry and IMU data with GPS and visual cues, ensuring reliable pose estimation in uneven terrain and low-GPS conditions.",
      "Integrated Control, Teleoperation & Diagnostics: Built a complete operator control center with live panoramic video streaming, gamepad-based teleoperation, real-time motion telemetry, mode control, and a diagnostics dashboard providing immediate feedback on system health, communication status, and runtime errors.",
    ],
    image: softwareImage,
  },

];

const EngineeringSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("mechanical");

  const activeDiscipline = disciplines.find((d) => d.id === activeTab);

  return (
    <section id="engineering" className="py-24 bg-gradient-space relative">
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
            Engineering
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
            Design Excellence
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A deep dive into the engineering disciplines that power our rover's
            capabilities.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {disciplines.map((discipline) => (
            <button
              key={discipline.id}
              onClick={() => setActiveTab(discipline.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeTab === discipline.id
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
            >
              <discipline.icon className="w-5 h-5" />
              {discipline.title}
            </button>
          ))}
        </motion.div>

        {/* Content Panel */}
        {activeDiscipline && (
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {/* Info Panel */}
            <div className="bg-gradient-card rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${activeDiscipline.color} flex items-center justify-center`}>
                  <activeDiscipline.icon className="w-7 h-7 text-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold">
                    {activeDiscipline.title}
                  </h3>
                  <p className="text-muted-foreground">{activeDiscipline.subtitle}</p>
                </div>
              </div>

              <h4 className="font-semibold mb-4">Key Components</h4>
              <ul className="space-y-3">
                {activeDiscipline.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Diagram Placeholder */}
            <div className="bg-gradient-card rounded-2xl border border-border overflow-hidden flex items-center justify-center min-h-[400px] relative group">
              {activeDiscipline.image && (typeof activeDiscipline.image !== "string" || activeDiscipline.image.startsWith("/") || activeDiscipline.image.startsWith("data:") || activeDiscipline.image.includes("http")) ? (
                <img
                  src={activeDiscipline.image}
                  alt={activeDiscipline.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).parentElement?.querySelector('.placeholder-fallback')?.classList.remove('hidden');
                  }}
                />
              ) : null}

              <div className={`placeholder-fallback text-center p-8 ${activeDiscipline.image && (typeof activeDiscipline.image !== "string" || activeDiscipline.image.startsWith("/") || activeDiscipline.image.startsWith("data:") || activeDiscipline.image.includes("http")) ? 'hidden' : ''}`}>
                <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${activeDiscipline.color} opacity-20 flex items-center justify-center mx-auto mb-6`}>
                  <activeDiscipline.icon className="w-12 h-12 text-primary" />
                </div>
                <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">
                  {activeDiscipline.title}
                </p>
                <p className="text-xs text-muted-foreground/60">
                  Technical diagrams and CAD models
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default EngineeringSection;
