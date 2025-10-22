import { Code2, Palette, BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import profileImage from "@/assets/Profile.jpg";
import { useState, useEffect } from 'react';

// hook to detect if the device is mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is Tailwind's md breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code is my natural necessity",
    },
    {
      icon: Palette,
      title: "Creative Problem Solving",
      description: "Designing innovative solutions that bridge technical complexity and user needs",
    },
    {
      icon: BrainCircuit,
      title: "AI & Data Science Solutions",
      description: "Leveraging AI and data science to drive business insights and innovation",
    },
  ];

  const tags = [
    "DATA-DRIVEN",
    "INTELLIGENT",
    "AUTOMATED",
    "SCALABLE",
    "PREDICTIVE",
    "EXPLAINABLE",
  ];

  const isMobile = useIsMobile();

  return (
    <>
      <section id="about" className="section-padding bg-gradient-subtle">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Data Science & AI student at Breda University specializing in machine learning,
            computer vision, and analytics solutions that solve real-world problems.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 animate-fade-in">
              <p className="text-lg leading-relaxed">
                I take pride in taking projects from research prototype to deployed solution—whether
                it's automated robotics for plant research or player recruitment analytics for
                professional football clubs.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                When I'm not working on academic projects, I explore passion projects like leveraging
                game data for AI-powered coaching systems or building apps to optimize fitness routines.
                Whether it's explainable emotion detection models or interactive SDG dashboards, I believe
                the best technology is the kind that empowers decision-makers with clarity.
              </p>
            </div>

            {/* Profile Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl card-hover border-2 border-primary/20">
                <img
                  src={profileImage}
                  alt="Endijs Kirsteins"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative glow effect */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-primary/5 rounded-full blur-3xl" />
            </div>
          </div>

          {/* Features section */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 card-hover"
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 p-4 rounded-lg inline-block mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Moving ticker section with background ribbon */}
      <div className="relative w-full my-16">
        {/* Static background ribbon */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-16 bg-primary/60 skew-y-3 shadow-xl -z-10"
          style={{
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 -10px 30px rgba(0, 0, 0, 0.3)'
          }}
        />

        {/* Moving foreground ribbon */}
        <div className="relative w-full overflow-hidden bg-primary py-6 -skew-y-3 z-10">
          <motion.div
            className="flex gap-12 items-center whitespace-nowrap"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: isMobile ? 10 : 25, // 10 for mobile, 25 for desktop
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...tags, ...tags, ...tags, ...tags, ...tags].map((tag, index) => (
              <div key={index} className="flex items-center gap-12">
                <span className="text-3xl md:text-4xl font-bold text-primary-foreground tracking-wider">
                  {tag}
                </span>
                <span className="text-primary-foreground/60 text-2xl">✦</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;