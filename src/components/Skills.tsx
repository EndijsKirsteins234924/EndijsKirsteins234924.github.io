import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Machine Learning & AI",
      skills: [
        "Python",
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "Computer Vision",
        "NLP",
        "Deep Learning",
        "Transfer Learning",
        "Reinforcement Learning",
        "U-Net",
        "RoBERTa",
        "Grad-CAM",
        "SHAP",
      ],
    },
    {
      category: "Data & Analytics",
      skills: [
        "Power BI",
        "DAX",
        "Pandas",
        "NumPy",
        "MySQL",
        "PostgreSQL",
        "Statistical Analysis",
        "ETL",
        "Data Visualization",
        "CRISP-DM",
        "Exploratory Data Analysis",
        "Business Intelligence",
      ],
    },
    {
      category: "Development & Deployment",
      skills: [
        "Azure",
        "FastAPI",
        "Docker",
        "CI/CD",
        "Git/GitHub",
        "Poetry",
        "pytest",
        "REST APIs",
        "Streamlit",
        "Arduino",
        "Robotics",
        "React",
        "TypeScript",
        "Blender",
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Skills & <span className="text-gradient">Technologies</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Technologies and tools I use to build machine learning systems and data-driven solutions
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-card border-border card-hover"
            >
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6 text-primary">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="px-4 py-2 text-sm bg-secondary hover:bg-secondary/80 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;