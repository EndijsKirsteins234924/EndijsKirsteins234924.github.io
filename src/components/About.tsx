import { Code2, Palette, BrainCircuit } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code is my passion",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive interfaces that users love",
    },
    {
      icon: BrainCircuit,
      title: "AI & Data Science Solutions",
      description: "Leveraging AI and data science to drive business insights and innovation",
    },
  ];

  return (
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
              I take pride in taking projects from research prototype to deployed solution - whether
              it's automated robotics for plant research or player recruitment analytics for
              professional football clubs.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              When I'm not working on academic projects, I explore passion projects like leveraging
              game data for AI-powered coaching systems or building apps to optimize fitness routines. Whether
              it's explainable food classification models or interactive SDG dashboards, I believe the
              best technology is the kind that empowers decision-makers with clarity.
            </p>
          </div>

          <div className="grid gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 card-hover"
              >
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
