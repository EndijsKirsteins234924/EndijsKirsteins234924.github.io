export interface Project {
    id: string;
    title: string;
    description: string;
    fullDescription: string;
    tags: string[];
    image: string;
    technologies: string[];
    challenges: string;
    solutions: string;
    results: string;
}

export const projectsData: Record<string, Project> = {
    "sdg-exploration": {
        id: "sdg-exploration",
        title: "Sustainable Development Goals (SDGs) Exploration",
        description: "Interactive data exploration and visualization tool for SDG indicators to bring awareness",
        fullDescription: "Full detailed description here...",
        tags: ["Power BI", "DAX", "Analytics"],
        image: "src/assets/SDG-corr-ratio.png",
        technologies: ["Power BI", "DAX", "Data Visualization"],
        challenges: "Describe the challenges you faced...",
        solutions: "How you solved them...",
        results: "What you achieved...",
    },
    "nac-player-suggestion": {
        id: "nac-player-suggestion",
        title: "NAC Breda Player Suggestion Solution",
        description: "Written report on player suggestions for NAC Breda football club",
        fullDescription: "Full detailed description here...",
        tags: ["Python", "Scikit-learn", "Analytics"],
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
        technologies: ["Python", "Scikit-learn", "Data Analysis"],
        challenges: "Describe the challenges you faced...",
        solutions: "How you solved them...",
        results: "What you achieved...",
    },
    "portfolio-cms": {
        id: "portfolio-cms",
        title: "Portfolio CMS",
        description: "Content management system for creative professionals with portfolio showcase",
        fullDescription: "Full detailed description here...",
        tags: ["Next.js", "TypeScript", "PostgreSQL"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
        technologies: ["Next.js", "TypeScript", "PostgreSQL"],
        challenges: "Describe the challenges you faced...",
        solutions: "How you solved them...",
        results: "What you achieved...",
    },
    "mobile-app-development": {
        id: "mobile-app-development",
        title: "Mobile App Development",
        description: "Cross-platform mobile application with offline support and push notifications",
        fullDescription: "Full detailed description here...",
        tags: ["React Native", "Redux", "Firebase"],
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
        technologies: ["React Native", "Redux", "Firebase"],
        challenges: "Describe the challenges you faced...",
        solutions: "How you solved them...",
        results: "What you achieved...",
    },
    "ai-powered-analytics": {
        id: "ai-powered-analytics",
        title: "AI-Powered Analytics",
        description: "Machine learning dashboard for real-time data insights and predictions",
        fullDescription: "Full detailed description here...",
        tags: ["Python", "TensorFlow", "React"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
        technologies: ["Python", "TensorFlow", "React"],
        challenges: "Describe the challenges you faced...",
        solutions: "How you solved them...",
        results: "What you achieved...",
    },
};

// Helper to get projects as an array
export const projectsArray = Object.values(projectsData);