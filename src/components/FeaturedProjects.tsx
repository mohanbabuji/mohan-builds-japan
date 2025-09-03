import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ProjectCard } from "./ProjectCard";
import { Button } from "@/components/ui/button";

// Sample project data - in a real app, this would come from an API or CMS
const featuredProjects = [
  {
    id: "car-factory-system",
    title: "Serverless Car Factory Data & Error Management System",
    description:
      "A comprehensive serverless solution for automated car test data logging and intelligent error management with human-in-the-loop approval workflow.",
    image: "/images/Car testing system.jpg",
    technologies: [
      "AWS Lambda",
      "API Gateway",
      "DynamoDB",
      "S3",
      "Step Functions",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/mohan/car-factory-system",
    featured: true,
  },
  {
    id: "cloud-dashboard",
    title: "AWS Cloud Monitoring Dashboard",
    description:
      "Real-time cloud infrastructure monitoring solution built with React, AWS Lambda, and CloudWatch. Features automated scaling recommendations and cost optimization insights.",
    image: "/api/placeholder/600/400",
    technologies: [
      "React",
      "AWS Lambda",
      "CloudWatch",
      "TypeScript",
      "Node.js",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/mohan/cloud-dashboard",
  },
  {
    id: "ecommerce-platform",
    title: "Modern E-commerce Platform",
    description:
      "Full-stack e-commerce solution with serverless architecture, featuring payment integration, inventory management, and admin dashboard.",
    image: "/api/placeholder/400/300",
    technologies: ["Next.js", "Stripe", "AWS DynamoDB", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/mohan/ecommerce",
  },
];

export const FeaturedProjects = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-display mb-4 animate-fade-up">
            {t("projects.title")}
          </h2>
          <p
            className="text-subheading max-w-2xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            {t("projects.subtitle")}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div
          className="text-center animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          <Link to="/works">
            <Button className="btn-primary group">
              {t("projects.view.all")}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
