import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Target, Lightbulb } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

// Sample project data - in a real app, this would come from an API
const projectsData = {
  'cloud-dashboard': {
    title: 'AWS Cloud Monitoring Dashboard',
    description: 'A comprehensive real-time cloud infrastructure monitoring solution that provides automated scaling recommendations and cost optimization insights.',
    image: '/api/placeholder/800/400',
    technologies: ['React', 'AWS Lambda', 'CloudWatch', 'TypeScript', 'Node.js', 'D3.js', 'Docker'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/mohan/cloud-dashboard',
    overview: {
      en: 'This cloud monitoring dashboard was built to help enterprises visualize and manage their AWS infrastructure in real-time. The application processes thousands of metrics per second and provides actionable insights for cost optimization and performance enhancement.',
      ja: 'このクラウド監視ダッシュボードは、企業がAWSインフラストラクチャをリアルタイムで可視化・管理できるよう構築されました。アプリケーションは毎秒数千のメトリクスを処理し、コスト最適化とパフォーマンス向上のための実用的な洞察を提供します。'
    },
    challenges: {
      en: [
        'Processing large volumes of real-time data from multiple AWS services',
        'Creating intuitive visualizations for complex cloud metrics',
        'Implementing cost prediction algorithms based on usage patterns',
        'Ensuring scalability for enterprise-level deployments'
      ],
      ja: [
        '複数のAWSサービスからの大量のリアルタイムデータの処理',
        '複雑なクラウドメトリクスの直感的な可視化の作成',
        '使用パターンに基づくコスト予測アルゴリズムの実装',
        'エンタープライズレベルの展開におけるスケーラビリティの確保'
      ]
    },
    solutions: {
      en: [
        'Implemented serverless architecture using AWS Lambda for cost-effective scaling',
        'Built custom D3.js visualizations optimized for cloud metrics',
        'Developed machine learning models for predictive cost analysis',
        'Created modular component architecture for easy customization'
      ],
      ja: [
        'コスト効率的なスケーリングのためのAWS Lambdaを使用したサーバーレスアーキテクチャの実装',
        'クラウドメトリクス用に最適化されたカスタムD3.js可視化の構築',
        '予測コスト分析のための機械学習モデルの開発',
        '簡単なカスタマイズのためのモジュラーコンポーネントアーキテクチャの作成'
      ]
    },
    timeline: '3 months',
    teamSize: '4 people',
    role: 'Lead Full-Stack Developer & AWS Architect'
  },
  'ecommerce-platform': {
    title: 'Modern E-commerce Platform',
    description: 'A full-stack e-commerce solution with serverless architecture, featuring payment integration, inventory management, and admin dashboard.',
    image: '/api/placeholder/800/400',
    technologies: ['Next.js', 'Stripe', 'AWS DynamoDB', 'Tailwind CSS', 'Vercel', 'AWS Cognito'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/mohan/ecommerce',
    overview: {
      en: 'A modern, scalable e-commerce platform built with Next.js and deployed on serverless infrastructure. Features include real-time inventory management, secure payment processing, and a comprehensive admin dashboard.',
      ja: 'Next.jsで構築され、サーバーレスインフラストラクチャに展開された、モダンでスケーラブルなeコマースプラットフォーム。リアルタイム在庫管理、安全な決済処理、包括的な管理ダッシュボードが特徴です。'
    },
    challenges: {
      en: [
        'Building a scalable product catalog with complex filtering',
        'Implementing secure payment processing with multiple providers',
        'Creating real-time inventory synchronization',
        'Designing responsive UI for mobile and desktop'
      ],
      ja: [
        '複雑なフィルタリング機能を持つスケーラブルな商品カタログの構築',
        '複数のプロバイダーでの安全な決済処理の実装',
        'リアルタイム在庫同期の作成',
        'モバイルとデスクトップのレスポンシブUIの設計'
      ]
    },
    solutions: {
      en: [
        'Implemented efficient search with Elasticsearch integration',
        'Built secure checkout flow with Stripe and PayPal support',
        'Used WebSockets for real-time inventory updates',
        'Created mobile-first responsive design with Tailwind CSS'
      ],
      ja: [
        'Elasticsearch統合による効率的な検索の実装',
        'StripeとPayPalサポートによる安全なチェックアウトフローの構築',
        'リアルタイム在庫更新のためのWebSocketsの使用',
        'Tailwind CSSによるモバイルファーストのレスポンシブデザインの作成'
      ]
    },
    timeline: '4 months',
    teamSize: '3 people',
    role: 'Full-Stack Developer'
  },
  'ai-chatbot': {
    title: 'AI-Powered Customer Support',
    description: 'An intelligent chatbot system with natural language processing capabilities, integrated with AWS Lex and deployed on serverless infrastructure.',
    image: '/api/placeholder/800/400',
    technologies: ['Python', 'AWS Lex', 'FastAPI', 'OpenAI', 'Lambda', 'DynamoDB'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/mohan/ai-chatbot',
    overview: {
      en: 'An advanced AI chatbot system that provides intelligent customer support using natural language processing. The system can handle complex queries, escalate to human agents when needed, and learns from interactions to improve responses.',
      ja: '自然言語処理を使用したインテリジェントなカスタマーサポートを提供する高度なAIチャットボットシステム。複雑なクエリを処理し、必要に応じて人間のエージェントにエスカレーションし、インタラクションから学習して応答を改善します。'
    },
    challenges: {
      en: [
        'Training the model to understand context and intent accurately',
        'Integrating multiple AI services for comprehensive responses',
        'Building seamless escalation to human agents',
        'Ensuring low latency for real-time conversations'
      ],
      ja: [
        'コンテキストと意図を正確に理解するためのモデルの訓練',
        '包括的な応答のための複数のAIサービスの統合',
        '人間のエージェントへのシームレスなエスカレーションの構築',
        'リアルタイム会話のための低レイテンシの確保'
      ]
    },
    solutions: {
      en: [
        'Implemented hybrid model using AWS Lex and OpenAI GPT',
        'Built intelligent routing system for query classification',
        'Created smooth handoff mechanism to human support',
        'Optimized serverless architecture for sub-second responses'
      ],
      ja: [
        'AWS LexとOpenAI GPTを使用したハイブリッドモデルの実装',
        'クエリ分類のためのインテリジェントルーティングシステムの構築',
        '人間サポートへのスムーズな引き継ぎメカニズムの作成',
        'サブ秒応答のためのサーバーレスアーキテクチャの最適化'
      ]
    },
    timeline: '2 months',
    teamSize: '2 people',
    role: 'AI Engineer & Backend Developer'
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  
  const project = id ? projectsData[id as keyof typeof projectsData] : null;
  
  if (!project) {
    return <Navigate to="/works" replace />;
  }

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
              {language === 'en' ? 'Back to Works' : '作品一覧に戻る'}
            </Link>
            
            <h1 className="text-display mb-6">
              {project.title}
            </h1>
            <p className="text-subheading max-w-4xl mb-12">
              {project.description}
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="btn-primary group">
                    {language === 'en' ? 'View Live Site' : 'ライブサイトを見る'}
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="btn-secondary group">
                    {language === 'en' ? 'View Code' : 'コードを見る'}
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
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-96 md:h-[600px] object-cover"
            />
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
                  {language === 'en' ? 'Project Overview' : 'プロジェクト概要'}
                </h2>
                <p className="text-body leading-relaxed">
                  {project.overview[language]}
                </p>
              </div>

              {/* Challenges */}
              <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-heading mb-6 flex items-center">
                  <Lightbulb className="h-6 w-6 text-brand-primary mr-3" />
                  {language === 'en' ? 'Challenges' : '課題'}
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
              <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
                <h2 className="text-heading mb-6 flex items-center">
                  <Target className="h-6 w-6 text-brand-primary mr-3" />
                  {language === 'en' ? 'Solutions' : '解決策'}
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
                  {language === 'en' ? 'Project Info' : 'プロジェクト情報'}
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-5 w-5 text-brand-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-text-primary">
                        {language === 'en' ? 'Timeline' : 'タイムライン'}
                      </p>
                      <p className="text-small">{project.timeline}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-brand-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-text-primary">
                        {language === 'en' ? 'Team Size' : 'チームサイズ'}
                      </p>
                      <p className="text-small">{project.teamSize}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-brand-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-text-primary">
                        {language === 'en' ? 'Role' : '役割'}
                      </p>
                      <p className="text-small">{project.role}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="bg-background rounded-xl p-6 shadow-soft animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-lg font-semibold text-text-primary mb-6">
                  {language === 'en' ? 'Technologies Used' : '使用技術'}
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
              <div className="bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-xl p-6 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-lg font-semibold text-text-primary mb-4">
                  {language === 'en' ? 'Interested in Similar Work?' : '類似の作品に興味がありますか？'}
                </h3>
                <p className="text-body mb-6">
                  {language === 'en' 
                    ? 'I would love to discuss how I can help bring your ideas to life with similar technology and expertise.'
                    : '同様の技術と専門知識で、あなたのアイデアを実現するお手伝いについて話し合えればと思います。'
                  }
                </p>
                <Link to="/contact">
                  <Button className="w-full btn-primary">
                    {language === 'en' ? 'Get In Touch' : 'お問い合わせ'}
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
              {language === 'en' ? 'More Projects' : 'その他のプロジェクト'}
            </h2>
            <Link to="/works">
              <Button variant="outline" className="group">
                {language === 'en' ? 'View All Projects' : 'すべてのプロジェクトを見る'}
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