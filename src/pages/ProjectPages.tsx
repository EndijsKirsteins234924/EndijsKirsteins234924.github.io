import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { projectsData } from "@/data/projectsData";

const ProjectPages = () => {
    const { projectId } = useParams();

    const project = projectsData[projectId as string];

    if (!project) {
        return (
            <div
                className="min-h-screen flex items-center justify-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(20, 25, 45, 0.95), rgba(20, 25, 45, 0.95)), url(${heroBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project not found</h1>
                    <Link to="/">
                        <Button
                            variant="outline"
                            className="border-primary text-primary hover:bg-primary/10 font-semibold"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div
            className="min-h-screen"
            style={{
                backgroundImage: `linear-gradient(rgba(20, 25, 45, 0.95), rgba(20, 25, 45, 0.95)), url(${heroBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            {/* Header with back button */}
            <div className="container mx-auto max-w-7xl px-6 lg:px-24 py-12">
                <Link to="/">
                    <Button
                        variant="outline"
                        className="mb-12 border-primary text-primary hover:bg-primary/10 font-semibold"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Home
                    </Button>
                </Link>

                {/* Project Hero */}
                <div className="mb-16 animate-fade-in">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="text-gradient">{project.title}</span>
                    </h1>
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-base">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-glow transition-all duration-300">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-[500px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                    </div>
                </div>

                {/* Project Details */}
                <div className="space-y-12">
                    <Card className="bg-card/50 backdrop-blur-sm border-border card-hover">
                        <CardHeader>
                            <CardTitle className="text-3xl">
                                <span className="text-gradient">Overview</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg text-foreground/80 leading-relaxed">
                                {project.fullDescription}
                            </p>
                        </CardContent>
                    </Card>

                    {project.technologies && (
                        <Card className="bg-card/50 backdrop-blur-sm border-border card-hover">
                            <CardHeader>
                                <CardTitle className="text-3xl">
                                    <span className="text-gradient">Technologies Used</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-3">
                                    {project.technologies.map((tech) => (
                                        <Badge key={tech} variant="outline" className="text-base px-4 py-2">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {project.challenges && (
                        <Card className="bg-card/50 backdrop-blur-sm border-border card-hover">
                            <CardHeader>
                                <CardTitle className="text-3xl">
                                    <span className="text-gradient">Challenges</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg text-foreground/80 leading-relaxed">
                                    {project.challenges}
                                </p>
                            </CardContent>
                        </Card>
                    )}

                    {project.solutions && (
                        <Card className="bg-card/50 backdrop-blur-sm border-border card-hover">
                            <CardHeader>
                                <CardTitle className="text-3xl">
                                    <span className="text-gradient">Solutions</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg text-foreground/80 leading-relaxed">
                                    {project.solutions}
                                </p>
                            </CardContent>
                        </Card>
                    )}

                    {project.results && (
                        <Card className="bg-card/50 backdrop-blur-sm border-border card-hover">
                            <CardHeader>
                                <CardTitle className="text-3xl">
                                    <span className="text-gradient">Results</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg text-foreground/80 leading-relaxed">
                                    {project.results}
                                </p>
                            </CardContent>
                        </Card>
                    )}
                </div>

                {/* Back to Projects Button */}
                <div className="mt-16 text-center">
                    <Link to="/#projects">
                        <Button
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 shadow-lg hover:shadow-glow transition-all"
                        >
                            View All Projects
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectPages;
