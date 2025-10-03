import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:your.email@example.com", color: "text-red-400" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", color: "text-blue-400" },
    { icon: Github, label: "GitHub", href: "https://github.com", color: "text-purple-400" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com", color: "text-cyan-400" },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of
          your vision
        </p>

        <Card className="bg-card border-border">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-8">
              <p className="text-lg mb-6">
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 shadow-lg"
                asChild
              >
                <a href="mailto:your.email@example.com">Send Me an Email</a>
              </Button>
            </div>

            <div className="border-t border-border pt-8 mt-8">
              <p className="text-center text-muted-foreground mb-6">Connect with me</p>
              <div className="flex justify-center gap-4 flex-wrap">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="lg"
                    className="border-border hover:border-primary/50"
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <social.icon className={`w-5 h-5 ${social.color}`} />
                      {social.label}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <footer className="mt-16 text-center text-muted-foreground">
          <p>© 2024 Your Name. Built with React & TypeScript</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
