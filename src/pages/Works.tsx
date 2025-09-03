import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Extended project data
const allProjects = [
  {
    id: "cloud-dashboard",
    title: "AWS Cloud Monitoring Dashboard",
    description:
      "Real-time cloud infrastructure monitoring solution built with React, AWS Lambda, and CloudWatch. Features automated scaling recommendations and cost optimization insights.",

    technologies: [
      "React",
      "AWS Lambda",
      "CloudWatch",
      "TypeScript",
      "Node.js",
      "D3.js",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/mohan/cloud-dashboard",
    category: "Cloud",
    featured: true,
  },
  {
    id: "ecommerce-platform",
    title: "Modern E-commerce Platform",
    description:
      "Full-stack e-commerce solution with serverless architecture, featuring payment integration, inventory management, and admin dashboard.",
    image: "/images/Home.png",
    technologies: [
      "Next.js",
      "Stripe",
      "AWS DynamoDB",
      "Tailwind CSS",
      "Vercel",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/mohan/ecommerce",
    category: "Web App",
  },
  {
    id: "flower-shop-website",
    title: "Flower Shop Website Design",
    description:
      "Beautiful and responsive website design for a local flower shop featuring product catalog, online ordering system, and elegant floral showcase.",
    image: "/api/placeholder/400/300",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/mohan/flower-shop",
    category: "Web Design",
  },
  {
    id: "task-manager",
    title: "Collaborative Task Manager",
    description:
      "Team productivity application with real-time collaboration, project tracking, and analytics dashboard.",
    image: "/api/placeholder/400/300",
    technologies: ["React", "Socket.io", "Node.js", "PostgreSQL", "Docker"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/mohan/task-manager",
    category: "Web App",
  },
  {
    id: "shoe-shop-landing",
    title: "Shoe Shop Landing Page Design",
    description:
      "Modern and conversion-focused landing page design for a shoe retailer featuring product highlights, customer testimonials, and seamless shopping experience.",
    image: "/images/Shoestop Landing page.png",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Next.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/mohan/shoe-shop-landing",
    category: "Web Design",
  },
  {
    id: "learnnow-school-website",
    title: "Learnnow School Website Landing Page",
    description:
      "Professional educational website landing page design for Learnnow school featuring course information, student resources, and AWS learning materials with comprehensive documentation.",
    image: "/images/lernow.PNG",
    technologies: ["React", "Next.js", "Tailwind CSS", "Notion API", "Vercel"],
    liveUrl: "https://erasreboot.io/",
    githubUrl: "https://github.com/mohan/learnnow-website",
    category: "Web Design",
  },
  {
    id: "aws-study-materials",
    title: "AWS Beginner Study Documentation",
    description:
      "Comprehensive AWS learning materials created in Notion covering VPC, EC2, S3, CloudWatch, Lambda, RDS, and more. Organized by creation, maintenance, monitoring, and deletion workflows.",
    image: "/api/placeholder/400/300",
    technologies: [
      "Notion",
      "AWS Documentation",
      "Technical Writing",
      "Information Architecture",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/mohanbabuji/AWS-Study_Material-Creation",
    category: "Cloud",
  },
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
      "SNS",
      "SES",
      "CloudWatch",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/mohanbabuji/AWS-Project-VIC",
    category: "Cloud",
  },
];

const categories = [
  "All",
  "Cloud",
  "Web App",
  "Web Design",
  "CMS Development",
  "Frontend Development",
];

const Works = () => {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = allProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase()),
      );

    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-up">
            <h1 className="text-display mb-6">
              {language === "en"
                ? "My Work Portfolio"
                : "私の作品ポートフォリオ"}
            </h1>
            <p className="text-subheading max-w-3xl mx-auto mb-12">
              {language === "en"
                ? "A collection of projects showcasing my expertise in cloud engineering, full-stack development, and innovative problem-solving."
                : "クラウドエンジニアリング、フルスタック開発、革新的な問題解決における私の専門性を示すプロジェクトコレクション。"}
            </p>
          </div>

          {/* Search and Filter */}
          <div
            className="max-w-4xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-text-muted" />
                <Input
                  type="text"
                  placeholder={
                    language === "en"
                      ? "Search projects, technologies..."
                      : "プロジェクト、技術を検索..."
                  }
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="text-sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length > 0 ? (
            <>
              {/* Results Count */}
              <div className="mb-8 animate-fade-up">
                <p className="text-body text-center">
                  {language === "en"
                    ? `Showing ${filteredProjects.length} ${filteredProjects.length === 1 ? "project" : "projects"}`
                    : `${filteredProjects.length}件のプロジェクトを表示中`}
                  {selectedCategory !== "All" && (
                    <span className="ml-2 px-2 py-1 bg-brand-primary/10 text-brand-primary text-xs rounded-md">
                      {selectedCategory}
                    </span>
                  )}
                </p>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="animate-fade-up"
                    style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                  >
                    <ProjectCard {...project} />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16 animate-fade-up">
              <Filter className="h-16 w-16 text-text-muted mx-auto mb-4" />
              <h3 className="text-heading mb-4">
                {language === "en"
                  ? "No projects found"
                  : "プロジェクトが見つかりません"}
              </h3>
              <p className="text-body mb-6 max-w-md mx-auto">
                {language === "en"
                  ? "Try adjusting your search terms or selected category to find what you're looking for."
                  : "検索条件や選択したカテゴリを調整して、お探しのものを見つけてください。"}
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                variant="outline"
              >
                {language === "en" ? "Clear Filters" : "フィルターをクリア"}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up">
            <h2 className="text-heading mb-6">
              {language === "en"
                ? "Like What You See?"
                : "お気に入りのプロジェクトはありましたか？"}
            </h2>
            <p className="text-body mb-8 max-w-2xl mx-auto">
              {language === "en"
                ? "I'm always excited to work on new projects and bring innovative ideas to life. Let's discuss how we can collaborate!"
                : "新しいプロジェクトに取り組み、革新的なアイデアを実現することにいつも興奮しています。どのようにコラボレーションできるか話し合いましょう！"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary">
                {language === "en" ? "Start a Project" : "プロジェクトを開始"}
              </Button>
              <Button variant="outline">
                {language === "en" ? "Download Resume" : "履歴書をダウンロード"}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Works;
