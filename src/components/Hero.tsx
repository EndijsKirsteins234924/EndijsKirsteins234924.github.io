import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg2.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Split the heading into individual characters
  const heading = "Hi, I'm Endijs Kirsteins";
  const characters = heading.split("");

  // Main container that controls the sequence
  const mainContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.6, // 0.8s between remaining sections
        delayChildren: 1.5, // Wait 1.5s for heading to finish first
      },
    },
  };

  // Heading container for letter-by-letter
  const headingContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  // Individual letter animation
  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Text elements animation
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(20, 25, 45, 0.85), rgba(20, 25, 45, 0.85)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6 lg:px-24 text-center z-10">
        {/* Heading with letter-by-letter animation */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          variants={headingContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {characters.map((char, index) => {
            const charPosition = heading.substring(0, index + 1);
            const isInName = charPosition.length > "Hi, I'm ".length;

            return (
              <motion.span
                key={index}
                variants={letterVariants}
                className={isInName ? "text-gradient" : ""}
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            );
          })}
        </motion.h1>

        {/* Remaining sections with 0.8s stagger */}
        <motion.div
          variants={mainContainerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* Job Title */}
          <motion.p
            className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto"
            variants={textVariants}
          >
            Data Engineer & AI Solutions Developer
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto"
            variants={textVariants}
          >
            Transforming data into actionable insights through software engineering, analytics, and machine learning
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={textVariants}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 shadow-lg hover:shadow-glow transition-all"
              >
                View My Work
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-primary text-primary hover:bg-primary/10 font-semibold px-8"
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      <motion.button
        onClick={() => scrollToSection("projects")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-label="Scroll to projects section"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowDown className="w-6 h-6 text-primary" />
      </motion.button>
    </section>
  );
};

export default Hero;