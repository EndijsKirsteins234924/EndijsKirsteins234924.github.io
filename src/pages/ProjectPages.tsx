import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { projectsData } from "@/data/projectsData";

// Helper functions to format the text with headers and paragraphs
const formatText = (text: string) => {
    // Split by ** markers to identify sections
    const parts = text.split(/(\*\*[^*]+\*\*)/g);

    return parts.map((part, index) => {
        // If it's a header (wrapped in **)
        if (part.startsWith('**') && part.endsWith('**')) {
            const headerText = part.slice(2, -2); // Remove **
            return (
                <h3 key={index} className="text-xl font-semibold text-primary mt-6 mb-3">
                    {headerText}
                </h3>
            );
        }
        // Regular text
        if (part.trim()) {
            return (
                <p key={index} className="mb-4 leading-relaxed">
                    {part.trim()}
                </p>
            );
        }
        return null;
    });
};

const formatNarrativeText = (text: string) => {
    // Split by double newlines to get paragraphs and sections
    const blocks = text.split(/\n\n+/);

    return blocks.map((block, index) => {
        const trimmed = block.trim();

        // Check if it's a header (short line, possibly title case, no period at end)
        if (trimmed.length < 80 && !trimmed.endsWith('.') && !trimmed.endsWith(',')) {
            return (
                <h3 key={index} className="text-2xl font-semibold text-primary mt-8 mb-4 first:mt-0">
                    {trimmed}
                </h3>
            );
        }

        // Regular paragraph
        return (
            <p key={index} className="mb-4 leading-relaxed text-foreground/90">
                {trimmed}
            </p>
        );
    });
};

const ProjectPages = () => {
    const { projectId } = useParams();
    const project = projectsData[projectId as string];

    // Scroll to top on projectId change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [projectId]);

    // Helper to get image by index
    const getImage = (index: number) => {
        return project.additionalImages?.[index];
    };

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
            <div className="container mx-auto max-w-7xl px-6 lg:px-24 py-12">
                {/* Back button */}
                <Link to="/">
                    <Button variant="outline" className="mb-12 border-primary text-primary hover:bg-primary/10 font-semibold">
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

                {/* Image 1: After Hero */}
                {getImage(0) && (
                    <div className="mb-12 animate-fade-in">
                        <img
                            src={getImage(0).src}
                            alt={getImage(0).alt}
                            className="w-full rounded-lg shadow-lg hover:shadow-glow transition-all duration-300"
                        />
                        {getImage(0).caption && (
                            <p className="mt-3 text-sm text-muted-foreground italic text-center">
                                {getImage(0).caption}
                            </p>
                        )}
                    </div>
                )}

                {/* Project Details */}
                <div className="space-y-12">
                    {/* Overview */}
                    <Card className="bg-card/50 backdrop-blur-sm border-border card-hover">
                        <CardHeader>
                            <CardTitle className="text-3xl">
                                <span className="text-gradient">Overview</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            {formatNarrativeText(project.fullDescription)}
                        </CardContent>
                    </Card>

                    {/* Image 2: After Overview */}
                    {getImage(1) && (
                        <div className="animate-fade-in">
                            <img
                                src={getImage(1).src}
                                alt={getImage(1).alt}
                                className="w-full rounded-lg shadow-lg hover:shadow-glow transition-all duration-300"
                            />
                            {getImage(1).caption && (
                                <p className="mt-3 text-sm text-muted-foreground italic text-center">
                                    {getImage(1).caption}
                                </p>
                            )}
                        </div>
                    )}

                    {/* Embed URL */}
                    {project.embedUrl && (
                        <Card className="bg-card/50 backdrop-blur-sm border-border card-hover">
                            <CardHeader>
                                <CardTitle className="text-3xl">
                                    <span className="text-gradient">Interactive Dashboard</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="w-full aspect-video rounded-lg overflow-hidden bg-background/50">
                                    <iframe
                                        title="Power BI Dashboard"
                                        src={project.embedUrl}
                                        frameBorder="0"
                                        allowFullScreen
                                        className="w-full h-full"
                                    />
                                </div>
                                <p className="mt-4 text-sm text-muted-foreground italic">
                                    Interact with the dashboard above - use filters, click on visualizations, and explore the data across different pages.
                                </p>
                            </CardContent>
                        </Card>
                    )}

                    {/* Technologies */}
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

                    {/* Image 3: After Technologies */}
                    {getImage(2) && (
                        <div className="animate-fade-in">
                            <img
                                src={getImage(2).src}
                                alt={getImage(2).alt}
                                className="w-full rounded-lg shadow-lg hover:shadow-glow transition-all duration-300"
                            />
                            {getImage(2).caption && (
                                <p className="mt-3 text-sm text-muted-foreground italic text-center">
                                    {getImage(2).caption}
                                </p>
                            )}
                        </div>
                    )}

                    {/* Challenges */}
                    {project.challenges && (
                        <Card className="bg-card/50 backdrop-blur-sm border-border card-hover">
                            <CardHeader>
                                <CardTitle className="text-3xl">
                                    <span className="text-gradient">Challenges</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg text-foreground/80 leading-relaxed">
                                    {formatText(project.challenges)}
                                </p>
                            </CardContent>
                        </Card>
                    )}

                    {/* Image 4: After Challenges */}
                    {getImage(3) && (
                        <div className="animate-fade-in">
                            <img
                                src={getImage(3).src}
                                alt={getImage(3).alt}
                                className="w-full rounded-lg shadow-lg hover:shadow-glow transition-all duration-300"
                            />
                            {getImage(3).caption && (
                                <p className="mt-3 text-sm text-muted-foreground italic text-center">
                                    {getImage(3).caption}
                                </p>
                            )}
                        </div>
                    )}

                    {/* Solutions */}
                    {project.solutions && (
                        <Card className="bg-card/50 backdrop-blur-sm border-border card-hover">
                            <CardHeader>
                                <CardTitle className="text-3xl">
                                    <span className="text-gradient">Solutions</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg text-foreground/80 leading-relaxed">
                                    {formatText(project.solutions)}
                                </p>
                            </CardContent>
                        </Card>
                    )}

                    {/* Image 5: After Solutions */}
                    {getImage(4) && (
                        <div className="animate-fade-in">
                            <img
                                src={getImage(4).src}
                                alt={getImage(4).alt}
                                className="w-full rounded-lg shadow-lg hover:shadow-glow transition-all duration-300"
                            />
                            {getImage(4).caption && (
                                <p className="mt-3 text-sm text-muted-foreground italic text-center">
                                    {getImage(4).caption}
                                </p>
                            )}
                        </div>
                    )}

                    {/* Image Gallery Section - Plant Phenotyping specific */}
                    {projectId === "plant-phenotyping-robotics" && getImage(0) && (
                        <Card className="bg-card/50 backdrop-blur-sm border-border card-hover">
                            <CardHeader>
                                <CardTitle className="text-3xl">
                                    <span className="text-gradient">Segmentation Steps</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-8">
                                {getImage(0) && (
                                    <img
                                        src={getImage(6).src}
                                        alt={getImage(6).alt}
                                        className="w-full rounded-lg shadow-lg"
                                    />
                                )}
                                {getImage(1) && (
                                    <img
                                        src={getImage(7).src}
                                        alt={getImage(7).alt}
                                        className="w-full rounded-lg shadow-lg"
                                    />
                                )}
                                {getImage(2) && (
                                    <img
                                        src={getImage(8).src}
                                        alt={getImage(8).alt}
                                        className="w-full rounded-lg shadow-lg"
                                    />
                                )}
                            </CardContent>
                        </Card>
                    )}

                    {/* Results */}
                    {project.results && (
                        <Card className="bg-card/50 backdrop-blur-sm border-border card-hover">
                            <CardHeader>
                                <CardTitle className="text-3xl">
                                    <span className="text-gradient">Results</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg text-foreground/80 leading-relaxed">
                                    {formatText(project.results)}
                                </p>
                            </CardContent>
                        </Card>
                    )}

                    {/* Research Paper Link */}
                    {project.paperUrl && (
                        <Card className="bg-card/50 backdrop-blur-sm border-border card-hover">
                            <CardHeader>
                                <CardTitle className="text-3xl">
                                    <span className="text-gradient">Research Paper</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                                    This research has been published as a peer-reviewed paper. You can access the full publication below:
                                </p>
                                <a
                                    href={project.paperUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block"
                                >
                                    <Button
                                        size="lg"
                                        className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 shadow-lg hover:shadow-glow transition-all"
                                    >
                                        View Full Paper
                                        <ExternalLink className="ml-2 h-5 w-5" />
                                    </Button>
                                </a>
                            </CardContent>
                        </Card>
                    )}

                    {/* Image 6: After Results */}
                    {getImage(5) && (
                        <div className="animate-fade-in">
                            <img
                                src={getImage(5).src}
                                alt={getImage(5).alt}
                                className="w-full rounded-lg shadow-lg hover:shadow-glow transition-all duration-300"
                            />
                            {getImage(5).caption && (
                                <p className="mt-3 text-sm text-muted-foreground italic text-center">
                                    {getImage(5).caption}
                                </p>
                            )}
                        </div>
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