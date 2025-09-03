import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Target,
  Lightbulb,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";

// Sample project data - in a real app, this would come from an API
const projectsData = {
  "cloud-dashboard": {
    title: "AWS Cloud Monitoring Dashboard",
    description:
      "A comprehensive real-time cloud infrastructure monitoring solution that provides automated scaling recommendations and cost optimization insights.",

    technologies: [
      "React",
      "AWS Lambda",
      "CloudWatch",
      "TypeScript",
      "Node.js",
      "D3.js",
      "Docker",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/mohan/cloud-dashboard",
    overview: {
      en: "This cloud monitoring dashboard was built to help enterprises visualize and manage their AWS infrastructure in real-time. The application processes thousands of metrics per second and provides actionable insights for cost optimization and performance enhancement.",
      ja: "このクラウド監視ダッシュボードは、企業がAWSインフラストラクチャをリアルタイムで可視化・管理できるよう構築されました。アプリケーションは毎秒数千のメトリクスを処理し、コスト最適化とパフォーマンス向上のための実用的な洞察を提供します。",
    },
    challenges: {
      en: [
        "Processing large volumes of real-time data from multiple AWS services",
        "Creating intuitive visualizations for complex cloud metrics",
        "Implementing cost prediction algorithms based on usage patterns",
        "Ensuring scalability for enterprise-level deployments",
      ],
      ja: [
        "複数のAWSサービスからの大量のリアルタイムデータの処理",
        "複雑なクラウドメトリクスの直感的な可視化の作成",
        "使用パターンに基づくコスト予測アルゴリズムの実装",
        "エンタープライズレベルの展開におけるスケーラビリティの確保",
      ],
    },
    solutions: {
      en: [
        "Implemented serverless architecture using AWS Lambda for cost-effective scaling",
        "Built custom D3.js visualizations optimized for cloud metrics",
        "Developed machine learning models for predictive cost analysis",
        "Created modular component architecture for easy customization",
      ],
      ja: [
        "コスト効率的なスケーリングのためのAWS Lambdaを使用したサーバーレスアーキテクチャの実装",
        "クラウドメトリクス用に最適化されたカスタムD3.js可視化の構築",
        "予測コスト分析のための機械学習モデルの開発",
        "簡単なカスタマイズのためのモジュラーコンポーネントアーキテクチャの作成",
      ],
    },
    timeline: "3 months",
    teamSize: "4 people",
    role: "Full-Stack Developer & AWS Architect",
  },
  "ecommerce-platform": {
    title: "Modern E-commerce Platform",
    description:
      "A full-stack e-commerce solution with serverless architecture, featuring payment integration, inventory management, and admin dashboard.",
    image: "/images/Home.png",
    technologies: [
      "Next.js",
      "Stripe",
      "AWS DynamoDB",
      "Tailwind CSS",
      "Vercel",
      "AWS Cognito",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/mohanbabuji/Streaks-Website-Design",
    overview: {
      en: "A modern, scalable e-commerce platform built with Next.js and deployed on serverless infrastructure. Features include real-time inventory management, secure payment processing, and a comprehensive admin dashboard.",
      ja: "Next.jsで構築され、サーバーレスインフラストラクチャに展開された、モダンでスケーラブルなeコマースプラットフォーム。リアルタイム在庫管理、安全な決済処理、包括的な管理ダッシュボードが特徴です。",
    },
    challenges: {
      en: [
        "Building a scalable product catalog with complex filtering",
        "Implementing secure payment processing with multiple providers",
        "Creating real-time inventory synchronization",
        "Designing responsive UI for mobile and desktop",
      ],
      ja: [
        "複雑なフィルタリング機能を持つスケーラブルな商品カタログの構築",
        "複数のプロバイダーでの安全な決済処理の実装",
        "リアルタイム在庫同期の作成",
        "モバイルとデスクトップのレスポンシブUIの設計",
      ],
    },
    solutions: {
      en: [
        "Implemented efficient search with Elasticsearch integration",
        "Built secure checkout flow with Stripe and PayPal support",
        "Used WebSockets for real-time inventory updates",
        "Created mobile-first responsive design with Tailwind CSS",
      ],
      ja: [
        "Elasticsearch統合による効率的な検索の実装",
        "StripeとPayPalサポートによる安全なチェックアウトフローの構築",
        "リアルタイム在庫更新のためのWebSocketsの使用",
        "Tailwind CSSによるモバイルファーストのレスポンシブデザインの作成",
      ],
    },
    timeline: "4 months",
    teamSize: "3 people",
    role: "Full-Stack Developer",
  },
  "task-manager": {
    title: "Collaborative Task Manager",
    description:
      "Team productivity application with real-time collaboration, project tracking, and analytics dashboard.",
    image: "/api/placeholder/800/400",
    technologies: ["React", "Socket.io", "Node.js", "PostgreSQL", "Docker"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/mohan/task-manager",
    overview: {
      en: "A comprehensive team productivity solution that enables real-time collaboration on tasks and projects. The application features intuitive project tracking, detailed analytics, and seamless integration with popular productivity tools.",
      ja: "タスクやプロジェクトでのリアルタイムコラボレーションを可能にする包括的なチーム生産性ソリューション。直感的なプロジェクト追跡、詳細な分析、人気の生産性ツールとのシームレスな統合が特徴です。",
    },
    challenges: {
      en: [
        "Implementing real-time collaboration with minimal latency",
        "Creating an intuitive and responsive user interface",
        "Building a scalable backend architecture",
        "Developing comprehensive analytics and reporting features",
      ],
      ja: [
        "最小限の遅延でのリアルタイムコラボレーションの実装",
        "直感的でレスポンシブなユーザーインターフェースの作成",
        "スケーラブルなバックエンドアーキテクチャの構築",
        "包括的な分析とレポート機能の開発",
      ],
    },
    solutions: {
      en: [
        "Used Socket.io for efficient real-time data synchronization",
        "Designed a clean, modern UI with React and Tailwind CSS",
        "Implemented a microservices architecture with Docker containers",
        "Built custom analytics dashboard with interactive visualizations",
      ],
      ja: [
        "効率的なリアルタイムデータ同期のためのSocket.ioの使用",
        "ReactとTailwind CSSによるクリーンでモダンなUIの設計",
        "Dockerコンテナを使用したマイクロサービスアーキテクチャの実装",
        "インタラクティブな可視化を備えたカスタム分析ダッシュボードの構築",
      ],
    },
    timeline: "3 months",
    teamSize: "3 people",
    role: "Full-Stack Developer & Team Lead",
  },
  "flower-shop-website": {
    title: "Flower Shop Website Design",
    description:
      "Beautiful and responsive website design for a local flower shop featuring product catalog, online ordering system, and elegant floral showcase.",
    image: "/api/placeholder/800/400",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/mohan/flower-shop",
    overview: {
      en: "A visually stunning website designed for a local flower shop that showcases their beautiful arrangements and enables customers to browse products and place orders online. The design emphasizes the natural beauty of the flowers while providing a seamless shopping experience.",
      ja: "地元の花屋のために設計された視覚的に美しいウェブサイトで、美しいアレンジメントを紹介し、顧客が製品を閲覧してオンラインで注文できるようにします。デザインは、シームレスなショッピング体験を提供しながら、花の自然の美しさを強調しています。",
    },
    challenges: {
      en: [
        "Creating a visually appealing design that highlights product photography",
        "Building a responsive layout that works across all devices",
        "Implementing an intuitive product catalog and ordering system",
        "Optimizing site performance with high-quality images",
      ],
      ja: [
        "製品写真を強調する視覚的に魅力的なデザインの作成",
        "すべてのデバイスで機能するレスポンシブレイアウトの構築",
        "直感的な製品カタログと注文システムの実装",
        "高品質画像によるサイトパフォーマンスの最適化",
      ],
    },
    solutions: {
      en: [
        "Designed a clean, elegant UI that showcases flower photography",
        "Used Bootstrap for responsive design across all screen sizes",
        "Built custom PHP-based product catalog with filtering options",
        "Implemented lazy loading and image optimization techniques",
      ],
      ja: [
        "花の写真を紹介するクリーンでエレガントなUIの設計",
        "すべての画面サイズに対応するレスポンシブデザインのためのBootstrapの使用",
        "フィルタリングオプションを備えたカスタムPHPベースの製品カタログの構築",
        "遅延読み込みと画像最適化技術の実装",
      ],
    },
    timeline: "1 month",
    teamSize: "1 person",
    role: "Web Designer & Developer",
  },
  "shoe-shop-landing": {
    title: "Shoe Shop Landing Page Design",
    description:
      "Modern and conversion-focused landing page design for a shoe retailer featuring product highlights, customer testimonials, and seamless shopping experience.",
    image: "/api/placeholder/800/400",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Next.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/mohan/shoe-shop-landing",
    overview: {
      en: "A high-converting landing page designed for a premium shoe retailer. The page features smooth animations, interactive product showcases, and strategic call-to-action elements to drive conversions while maintaining a luxurious brand aesthetic.",
      ja: "プレミアムシューズ小売業者向けに設計された高コンバージョンのランディングページ。滑らかなアニメーション、インタラクティブな製品ショーケース、戦略的なコールトゥアクション要素を備え、高級ブランドの美学を維持しながらコンバージョンを促進します。",
    },
    challenges: {
      en: [
        "Creating a visually striking design that highlights premium products",
        "Implementing smooth animations without affecting performance",
        "Designing an effective conversion funnel",
        "Ensuring fast load times and optimal SEO",
      ],
      ja: [
        "プレミアム製品を強調する視覚的に印象的なデザインの作成",
        "パフォーマンスに影響を与えない滑らかなアニメーションの実装",
        "効果的なコンバージョンファネルの設計",
        "高速読み込み時間と最適なSEOの確保",
      ],
    },
    solutions: {
      en: [
        "Designed a modern, minimalist UI that emphasizes product photography",
        "Used Framer Motion for performant, subtle animations",
        "Implemented strategic CTA placement based on user flow analysis",
        "Optimized with Next.js for excellent performance and SEO",
      ],
      ja: [
        "製品写真を強調するモダンでミニマリストなUIの設計",
        "パフォーマンスの高い繊細なアニメーションのためのFramer Motionの使用",
        "ユーザーフロー分析に基づく戦略的なCTA配置の実装",
        "優れたパフォーマンスとSEOのためのNext.jsでの最適化",
      ],
    },
    timeline: "3 weeks",
    teamSize: "1 person",
    role: "Frontend Developer & UI Designer",
  },
  "learnnow-school-website": {
    title: "Learnnow School Website Landing Page",
    description:
      "Professional educational website landing page design for Learnnow school featuring course information, student resources, and AWS learning materials with comprehensive documentation.",
    image: "/images/lernow.PNG",
    technologies: ["React", "Next.js", "Tailwind CSS", "Notion API", "Vercel"],
    liveUrl: "https://erasreboot.io/",
    githubUrl:
      "https://www.figma.com/proto/IAyUNYeI3HTLaCpfNDV1Xh/learnow-LP-page?node-id=11-8626",
    overview: {
      en: "A comprehensive educational platform designed for Learnnow school that showcases their AWS courses and learning resources. The website integrates with Notion to dynamically display course content and documentation, providing students with an accessible and organized learning experience.",
      ja: "LearnnowスクールのためのAWSコースと学習リソースを紹介する包括的な教育プラットフォーム。ウェブサイトはNotionと統合してコースコンテンツとドキュメントを動的に表示し、学生にアクセスしやすく整理された学習体験を提供します。",
    },
    challenges: {
      en: [
        "Creating an intuitive navigation system for extensive course materials",
        "Integrating with Notion API for dynamic content management",
        "Designing a professional yet engaging educational interface",
        "Ensuring optimal performance with content-heavy pages",
      ],
      ja: [
        "広範なコース教材のための直感的なナビゲーションシステムの作成",
        "動的コンテンツ管理のためのNotion APIとの統合",
        "プロフェッショナルでありながら魅力的な教育インターフェースの設計",
        "コンテンツの多いページでの最適なパフォーマンスの確保",
      ],
    },
    solutions: {
      en: [
        "Implemented a clear, hierarchical navigation structure",
        "Built custom Notion API integration for seamless content updates",
        "Designed a clean, accessible UI with educational best practices",
        "Optimized with Next.js static generation and incremental static regeneration",
      ],
      ja: [
        "明確で階層的なナビゲーション構造の実装",
        "シームレスなコンテンツ更新のためのカスタムNotion API統合の構築",
        "教育のベストプラクティスを取り入れたクリーンでアクセスしやすいUIの設計",
        "Next.jsの静的生成と増分静的再生成による最適化",
      ],
    },
    timeline: "3 weeks",
    teamSize: "1 people",
    role: "Web Designer",
  },
  "aws-study-materials": {
    title: "AWS Beginner Study Documentation",
    description:
      "Comprehensive AWS learning materials created in Notion covering VPC, EC2, S3, CloudWatch, Lambda, RDS, and more. Organized by creation, maintenance, monitoring, and deletion workflows.",
    image: "/api/placeholder/800/400",
    technologies: [
      "Notion",
      "AWS Documentation",
      "Technical Writing",
      "Information Architecture",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/mohanbabuji/AWS-Study_Material-Creation",
    overview: {
      en: "A comprehensive collection of AWS learning materials meticulously organized in Notion. The documentation covers fundamental AWS services and concepts, structured around practical workflows for creation, maintenance, monitoring, and deletion of resources. Designed to help beginners build a solid foundation in cloud computing.",
      ja: "Notionで丁寧に整理されたAWS学習教材の包括的なコレクション。このドキュメントは、基本的なAWSサービスと概念をカバーし、リソースの作成、保守、監視、削除のための実践的なワークフローを中心に構成されています。初心者がクラウドコンピューティングの堅固な基盤を構築するのに役立つように設計されています。",
    },
    challenges: {
      en: [
        "Organizing complex technical information in an accessible format",
        "Creating clear, step-by-step instructions for AWS beginners",
        "Developing a logical structure that follows practical workflows",
        "Keeping content up-to-date with AWS service changes",
      ],
      ja: [
        "複雑な技術情報をアクセスしやすい形式で整理する",
        "AWS初心者のための明確なステップバイステップの指示の作成",
        "実践的なワークフローに従う論理的な構造の開発",
        "AWSサービスの変更に合わせてコンテンツを最新の状態に保つ",
      ],
    },
    solutions: {
      en: [
        "Implemented a workflow-based documentation structure",
        "Created visual guides with screenshots and diagrams",
        "Developed practical examples for each AWS service",
        "Established a regular review process for content updates",
      ],
      ja: [
        "ワークフローベースのドキュメント構造の実装",
        "スクリーンショットと図表を使用した視覚的ガイドの作成",
        "各AWSサービスの実践的な例の開発",
        "コンテンツ更新のための定期的なレビュープロセスの確立",
      ],
    },
    timeline: "3 months",
    teamSize: "1 person",
    role: "Technical Writer & AWS Specialist",
  },
  "car-factory-system": {
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
      "Cognito",
    ],
    //liveUrl: "https://example.com",
    githubUrl: "https://github.com/mohanbabuji/AWS-Project-VIC",
    overview: {
      en: "A fully serverless, event-driven architecture designed to automate car test data logging and streamline error management for a car factory. The system captures test data via a web application, stores it efficiently, and automates the entire error lifecycle from detection to final reporting with human approval.",
      ja: "自動車工場向けの車両テストデータログ記録とエラー管理を自動化するための完全サーバーレス、イベント駆動型アーキテクチャ。Webアプリケーション経由でテストデータを取得し、効率的に保存し、検出から最終報告まで人間の承認を含むエラーライフサイクル全体を自動化します。",
    },
    challenges: {
      en: [
        "Building a scalable serverless architecture for high-volume test data processing",
        "Implementing automated error detection and intelligent solution matching",
        "Creating a human-in-the-loop approval workflow with external integrations",
        "Designing conditional logic for solution search within fixed document sets",
      ],
      ja: [
        "大量のテストデータ処理のためのスケーラブルなサーバーレスアーキテクチャの構築",
        "自動エラー検出とインテリジェントソリューションマッチングの実装",
        "外部統合を含む人間参加型承認ワークフローの作成",
        "固定文書セット内でのソリューション検索のための条件付きロジックの設計",
      ],
    },
    solutions: {
      en: [
        "Implemented serverless architecture using AWS Lambda, API Gateway, and Step Functions",
        "Built automated error monitoring with CloudWatch and intelligent document search in S3",
        "Created sophisticated workflow with Microsoft Teams integration and email notifications",
        "Designed efficient data storage strategy using DynamoDB and S3 Data Lake",
      ],
      ja: [
        "AWS Lambda、API Gateway、Step Functionsを使用したサーバーレスアーキテクチャの実装",
        "CloudWatchによる自動エラー監視とS3でのインテリジェント文書検索の構築",
        "Microsoft Teams統合とメール通知を含む高度なワークフローの作成",
        "DynamoDBとS3データレイクを使用した効率的なデータストレージ戦略の設計",
      ],
    },
    timeline: "4 months",
    teamSize: "4 people",
    role: "Cloud Engineer & Web Developer",
  },
  "ai-chatbot": {
    title: "AI-Powered Customer Support",
    description:
      "An intelligent chatbot system with natural language processing capabilities, integrated with AWS Lex and deployed on serverless infrastructure.",
    image: "/api/placeholder/800/400",
    technologies: [
      "Python",
      "AWS Lex",
      "FastAPI",
      "OpenAI",
      "Lambda",
      "DynamoDB",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/mohan/ai-chatbot",
    overview: {
      en: "An advanced AI chatbot system that provides intelligent customer support using natural language processing. The system can handle complex queries, escalate to human agents when needed, and learns from interactions to improve responses.",
      ja: "自然言語処理を使用したインテリジェントなカスタマーサポートを提供する高度なAIチャットボットシステム。複雑なクエリを処理し、必要に応じて人間のエージェントにエスカレーションし、インタラクションから学習して応答を改善します。",
    },
    challenges: {
      en: [
        "Training the model to understand context and intent accurately",
        "Integrating multiple AI services for comprehensive responses",
        "Building seamless escalation to human agents",
        "Ensuring low latency for real-time conversations",
      ],
      ja: [
        "コンテキストと意図を正確に理解するためのモデルの訓練",
        "包括的な応答のための複数のAIサービスの統合",
        "人間のエージェントへのシームレスなエスカレーションの構築",
        "リアルタイム会話のための低レイテンシの確保",
      ],
    },
    solutions: {
      en: [
        "Implemented hybrid model using AWS Lex and OpenAI GPT",
        "Built intelligent routing system for query classification",
        "Created smooth handoff mechanism to human support",
        "Optimized serverless architecture for sub-second responses",
      ],
      ja: [
        "AWS LexとOpenAI GPTを使用したハイブリッドモデルの実装",
        "クエリ分類のためのインテリジェントルーティングシステムの構築",
        "人間サポートへのスムーズな引き継ぎメカニズムの作成",
        "サブ秒応答のためのサーバーレスアーキテクチャの最適化",
      ],
    },
    timeline: "2 months",
    teamSize: "2 people",
    role: "AI Engineer & Backend Developer",
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const project = id ? projectsData[id as keyof typeof projectsData] : null;

  if (!project) {
    return <Navigate to="/works" replace />;
  }

  const handleLiveDemoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAlertOpen(true);
  };

  // Check if the URL is an example site (like example.com)
  const isExampleSite = project.liveUrl?.includes("example.com");

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-up">
            <Link
              to="/works"
              className="inline-flex items-center text-brand-primary hover:text-brand-secondary transition-colors mb-8 group"
            >
              <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
              {language === "en" ? "Back to Works" : "作品一覧に戻る"}
            </Link>

            <h1 className="text-display mb-6">{project.title}</h1>
            <p className="text-subheading max-w-4xl mb-12">
              {project.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              {project.liveUrl &&
                (isExampleSite ? (
                  <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
                    <AlertDialogTrigger asChild>
                      <Button className="btn-primary group">
                        {language === "en"
                          ? "View Live Site"
                          : "ライブサイトを見る"}
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          {language === "en"
                            ? "Live Demo Not Available"
                            : "ライブデモは利用できません"}
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          {language === "en"
                            ? "The live demo for this project is currently being prepared and will be available soon. Thank you for your interest!"
                            : "このプロジェクトのライブデモは現在準備中であり、まもなく利用可能になります。ご関心をお寄せいただきありがとうございます！"}
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>
                          {language === "en" ? "Close" : "閉じる"}
                        </AlertDialogCancel>
                        <AlertDialogAction asChild>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {language === "en"
                              ? "Continue to Site"
                              : "サイトに進む"}
                          </a>
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                ) : (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="btn-primary group">
                      {language === "en"
                        ? "View Live Site"
                        : "ライブサイトを見る"}
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </a>
                ))}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="btn-secondary group">
                    {language === "en" ? "View Code" : "コードを見る"}
                    <Github className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-up rounded-2xl overflow-hidden shadow-large">
            <a href={project.image} target="_blank">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-96 md:h-[600px] object-cover"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div className="animate-fade-up">
                <h2 className="text-heading mb-6 flex items-center">
                  <Target className="h-6 w-6 text-brand-primary mr-3" />
                  {language === "en" ? "Project Overview" : "プロジェクト概要"}
                </h2>
                <p className="text-body leading-relaxed">
                  {project.overview[language]}
                </p>
              </div>

              {/* Challenges */}
              <div
                className="animate-fade-up"
                style={{ animationDelay: "0.2s" }}
              >
                <h2 className="text-heading mb-6 flex items-center">
                  <Lightbulb className="h-6 w-6 text-brand-primary mr-3" />
                  {language === "en" ? "Challenges" : "課題"}
                </h2>
                <ul className="space-y-4">
                  {project.challenges[language].map((challenge, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-body">{challenge}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div
                className="animate-fade-up"
                style={{ animationDelay: "0.4s" }}
              >
                <h2 className="text-heading mb-6 flex items-center">
                  <Target className="h-6 w-6 text-brand-primary mr-3" />
                  {language === "en" ? "Solutions" : "解決策"}
                </h2>
                <ul className="space-y-4">
                  {project.solutions[language].map((solution, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-body">{solution}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info */}
              <div className="bg-background rounded-xl p-6 shadow-soft animate-slide-in-right">
                <h3 className="text-lg font-semibold text-text-primary mb-6">
                  {language === "en" ? "Project Info" : "プロジェクト情報"}
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-5 w-5 text-brand-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-text-primary">
                        {language === "en" ? "Timeline" : "タイムライン"}
                      </p>
                      <p className="text-small">{project.timeline}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-brand-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-text-primary">
                        {language === "en" ? "Team Size" : "チームサイズ"}
                      </p>
                      <p className="text-small">{project.teamSize}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-brand-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-text-primary">
                        {language === "en" ? "Role" : "役割"}
                      </p>
                      <p className="text-small">{project.role}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div
                className="bg-background rounded-xl p-6 shadow-soft animate-slide-in-right"
                style={{ animationDelay: "0.2s" }}
              >
                <h3 className="text-lg font-semibold text-text-primary mb-6">
                  {language === "en" ? "Technologies Used" : "使用技術"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-sm font-medium rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div
                className="bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-xl p-6 animate-slide-in-right"
                style={{ animationDelay: "0.4s" }}
              >
                <h3 className="text-lg font-semibold text-text-primary mb-4">
                  {language === "en"
                    ? "Interested in Similar Work?"
                    : "類似の作品に興味がありますか？"}
                </h3>
                <p className="text-body mb-6">
                  {language === "en"
                    ? "I would love to discuss how I can help bring your ideas to life with similar technology and expertise."
                    : "同様の技術と専門知識で、あなたのアイデアを実現するお手伝いについて話し合えればと思います。"}
                </p>
                <Link to="/contact">
                  <Button className="w-full btn-primary">
                    {language === "en" ? "Get In Touch" : "お問い合わせ"}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-heading mb-6">
              {language === "en" ? "More Projects" : "その他のプロジェクト"}
            </h2>
            <Link to="/works">
              <Button variant="outline" className="group">
                {language === "en"
                  ? "View All Projects"
                  : "すべてのプロジェクトを見る"}
                <ArrowLeft className="ml-2 h-4 w-4 rotate-180 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
