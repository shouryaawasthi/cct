import React from "react";
import {
  Code, Paintbrush, Wrench, Monitor, Briefcase, Ruler, Layers, Building2, Home
} from "lucide-react";
import { motion } from "framer-motion";
import courseImage from '../assets/images/courseImage.jpg';

const services = [
  {
    title: "Web Development",
    icon: <Code className="w-8 h-8 text-blue-900" />,
    description: "Custom, responsive, and high-performance websites tailored to your business needs.",
    features: [
      "Mobile-first, responsive design",
      "SEO-friendly coding",
      "Optimized for speed",
      "Ongoing maintenance support",
    ],
  },
  {
    title: "Graphic Design",
    icon: <Paintbrush className="w-8 h-8 text-blue-900" />,
    description: "Eye-catching designs that reflect your brand identity and engage your audience.",
    features: [
      "Branding & identity design",
      "Social media creatives",
      "Brochures & posters",
      "UI/UX mockups",
    ],
  },
  {
    title: "2D Design & Drafting",
    icon: <Ruler className="w-8 h-8 text-blue-900" />,
    description: "Precise technical drawings for architectural and engineering projects.",
    features: [
      "Architectural floor plans",
      "Elevation drawings",
      "Detailing & annotations",
      "Compliance-ready outputs",
    ],
  },
  {
    title: "3D Modeling & Visualization",
    icon: <Layers className="w-8 h-8 text-blue-900" />,
    description: "Realistic 3D renders to bring your designs to life before construction.",
    features: [
      "3D floor plans",
      "Photorealistic rendering",
      "Virtual walkthroughs",
      "Exterior & interior views",
    ],
  },
  {
    title: "Building Estimation",
    icon: <Building2 className="w-8 h-8 text-blue-900" />,
    description: "Accurate project cost estimation to keep your construction on budget.",
    features: [
      "Material takeoffs",
      "Labor cost calculation",
      "Timeframe estimation",
      "Budget optimization",
    ],
  },
  {
    title: "Interior Design",
    icon: <Home className="w-8 h-8 text-blue-900" />,
    description: "Functional and aesthetic interiors tailored to your style and needs.",
    features: [
      "Concept development",
      "Furniture & lighting plans",
      "Color schemes & finishes",
      "Space optimization",
    ],
  },
  {
    title: "IT Support & Maintenance",
    icon: <Wrench className="w-8 h-8 text-blue-900" />,
    description: "Reliable IT solutions to keep your systems running smoothly without downtime.",
    features: [
      "24/7 technical support",
      "System monitoring",
      "Data backup & recovery",
      "Security updates",
    ],
  },
  {
    title: "Digital Marketing",
    icon: <Briefcase className="w-8 h-8 text-blue-900" />,
    description: "Strategies to boost your online presence and drive targeted traffic to your business.",
    features: [
      "Social media management",
      "Google & Facebook ads",
      "Email marketing",
      "SEO optimization",
    ],
  },
  {
    title: "Software Solutions",
    icon: <Monitor className="w-8 h-8 text-blue-900" />,
    description: "Custom software applications to streamline your business processes and improve efficiency.",
    features: [
      "Custom business software",
      "Database solutions",
      "Cloud integration",
      "Automation tools",
    ],
  },
];

const techStack = [
  "React", "Node.js", "Tailwind CSS", "Figma", "Photoshop", "Illustrator", "WordPress"
];

const softwareTools = [
  "AutoCAD", "SketchUp", "3ds Max", "Revit", "Lumion", "V-Ray", "Blender"
];

const industries = [
  "Education", "Real Estate", "Retail & E-commerce", "Construction", "IT & SaaS"
];

const ServicesPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className=" h-[400px] text-center flex items-center justify-center text-white bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${courseImage})`,
        }}
      >
  

        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4 text-zinc-50">What We Offer</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Delivering innovative solutions — from digital experiences to architectural masterpieces.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: 0 }} // Stops movement when hovering
              className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-2xl transition-all duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold mb-2 text-blue-900">{service.title}</h2>
              <p className="mb-4 text-gray-600">{service.description}</p>
              <ul className="list-disc list-inside text-gray-500 space-y-1">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Technologies We Use</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <span key={index} className="bg-white px-4 py-2 rounded-lg shadow text-gray-700 font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Software Tools */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Software We Use</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {softwareTools.map((tool, index) => (
              <span
                key={index}
                className="bg-amber-50 px-4 py-2 rounded-lg text-amber-500 font-medium border border-amber-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Our Process</h2>
          <div className="grid gap-8 md:grid-cols-4 text-center">
            {[ 
              { step: "1", title: "Consultation", desc: "Understanding your needs" },
              { step: "2", title: "Planning", desc: "Creating a strategy & design" },
              { step: "3", title: "Execution", desc: "Bringing your vision to life" },
              { step: "4", title: "Delivery", desc: "Ongoing help and updates" }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white shadow rounded-xl border">
                <div className="text-4xl font-bold text-amber-500 mb-2">{item.step}</div>
                <h3 className="font-semibold mb-2 text-blue-900">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
