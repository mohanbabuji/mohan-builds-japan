import { MapPin, Briefcase, Heart, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const About = () => {
  const { t, language } = useLanguage();
  const [isImageOpen, setIsImageOpen] = useState(false);

  const timeline = [
    {
      year: "2025",
      title: language === "en" ? "AWS Certification Achieved" : "AWS認定取得",
      description:
        language === "en"
          ? "Earned AWS Certified Cloud Practitioner certification, specializing in cloud architecture design. Planning to attend AI Practitioner certification on September 20th and Solution Architect Associate certification on December 6th. Also planning to take up Terraform Associate exam by the end of this year."
          : "AWS認定クラウドプラクティショナー資格を取得、クラウドアーキテクチャ設計を専門化。9月20日にAIプラクティショナー認定、12月6日にソリューションアーキテクトアソシエイト認定の受験を予定。また、年末までにTerraformアソシエイト試験の受験も計画中。",
    },
    {
      year: "2023",
      title:
        language === "en"
          ? "Cloud Engineer - Japan"
          : "クラウドエンジニア - 日本",
      description:
        language === "en"
          ? "Started working in Leading cloud infrastructure projects, implementing AWS solutions for Japanese clients well. Used services such as AWS EC2、Lambda、SES、SNS、S3、CloudWatch、CloudFront、StepFunctions、Terraform ETC..."
          : "車製作所向けAWSソリューションの実装、クラウドインフラプロジェクトを担当。AWS EC2、Lambda、SES、SNS、S3、CloudWatch、CloudFront、StepFunctions、Terraformなどを使用",
    },
    {
      year: "2023",
      title: language === "en" ? "Moved to Japan" : "日本へ移住",
      description:
        language === "en"
          ? "Relocated to Japan in search of career opportunities in tech industry specifically cloud/web development and embrace Japanese culture."
          : "技術業界でのキャリア機会を追求し、日本文化を受け入れるために日本に移住",
    },
    {
      year: "2022",
      title:
        language === "en"
          ? "Started as a Web Designer/Developer"
          : "Web デザイナー・デベロッパーとして初め",
      description:
        language === "en"
          ? "I started my professional career in India as a Web Designer/Developer. Worked with 40 other team members in a lively and challenging environment with plenty of growth. This project involved transforming user research and journey maps into a complete UI design and interactive prototype using Figma, before bringing it to life through front-end development."
          : "インドでWebデザイナー・デベロッパーとしてキャリアをスタートしました。40名のチームメンバーと共に、活気と成長に満ちた刺激的な環境でプロジェクトに取り組みました。このプロジェクトでは、ユーザーリサーチとジャーニーマップをFigmaでUIデザインとインタラクティブなプロトタイプに落とし込み、フロントエンド開発を通じて実装しました",
    },
  ];

  const hobbies = [
    {
      icon: "🎌",
      title: language === "en" ? "Japanese Culture" : "日本文化",
      description:
        language === "en"
          ? "Learning everyday culture, manners and language"
          : "日常文化、マナー、言語の学習",
    },
    {
      icon: "🌃",
      title: language === "en" ? "Exploring Japan's Streets" : "街歩き",
      description:
        language === "en"
          ? "Exploring Japan's beautiful and vibrant streets"
          : "日本の美しい、賑やかな街を探索",
    },
    {
      icon: "📱",
      title: language === "en" ? "Tech Innovation" : "技術革新",
      description:
        language === "en"
          ? "Building side projects and apps"
          : "サイドプロジェクトとアプリの構築",
    },
    {
      icon: "📸",
      title: language === "en" ? "Photography" : "写真撮影",
      description:
        language === "en"
          ? "Capturing moments and landscapes"
          : "瞬間と風景の撮影",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-up">
              <h1 className="text-display mb-6">
                {language === "en" ? "About Mohan" : "Mohanについて"}
              </h1>
              <p className="text-subheading mb-8">
                {language === "en"
                  ? "An Indian engineer who found home in Japan, bridging cultures through technology."
                  : "日本に居場所を見つけたインドのエンジニア、技術を通じて文化を橋渡し。"}
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-brand-primary" />
                  <div>
                    <p className="text-sm font-medium text-text-primary">
                      {language === "en" ? "Based in" : "在住地"}
                    </p>
                    <p className="text-small">Japan 🇯🇵</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Briefcase className="h-5 w-5 text-brand-primary" />
                  <div>
                    <p className="text-sm font-medium text-text-primary">
                      {language === "en" ? "Current Role" : "現在の職業"}
                    </p>
                    <p className="text-small">
                      {language === "en"
                        ? "Cloud Engineer"
                        : "クラウドエンジニア"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Heart className="h-5 w-5 text-brand-primary" />
                  <div>
                    <p className="text-sm font-medium text-text-primary">
                      {language === "en" ? "Origin" : "出身"}
                    </p>
                    <p className="text-small">India 🇮🇳</p>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Award className="h-5 w-5 text-brand-primary mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-text-primary mb-1">
                      {language === "en" ? "Certification" : "認定"}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
                        AWS Certified Cloud Practitioner
                      </span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
                        AWS Certified AI Practitioner
                      </span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
                        Azure Fundamentals
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="aspect-[4/5] bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl p-1 shadow-large">
                  <div className="w-full h-full bg-surface rounded-xl overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <div className="text-center">
                        {/* The image container */}
                        <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden">
                          <img
                            src="/A7C01847.jpg"
                            alt="Profile of Mohan Babujii"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* The rest of the card content remains the same */}
                        <p className="font-mono text-text-secondary">
                          {language === "en"
                            ? "Mohan Babujii"
                            : "モハン バブジ"}
                        </p>
                        <p className="font-mono text-text-muted">
                          {language === "en"
                            ? "Cloud Engineer"
                            : "クラウド エンジニア"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-up">
            <h2 className="text-heading mb-8 text-center">
              {language === "en" ? "My Journey" : "私の歩み"}
            </h2>
            <div className="prose prose-lg max-w-none text-body">
              <p className="mb-6">
                {language === "en"
                  ? `Born and raised in India, I've always been fascinated of Japan's technology and culture. 
                     Through various thoughts and desire I began to build my life in Japan from 2023, where I discovered not just professional opportunities, but a second home 
                     that has profoundly shaped my perspective on innovation, craftsmanship and life.`
                  : `インドで生まれ育った私は、日本の技術と文化に常に魅了されてきました。様々な思いと願望を経て、2023年から日本での生活を始めました。ここでは、仕事の機会だけでなく、イノベーション、職人技、そして人生に対する私の見方を大きく変えてくれた「第二の故郷」を発見しました。`}
              </p>
              <p className="mb-6">
                {language === "en"
                  ? `As a Cloud Engineer, I specialize in AWS solutions, helping businesses scale their infrastructure 
                     while maintaining security and cost-efficiency. My approach combines the precision of Japanese 
                     craftsmanship with the innovative spirit of Indian engineering.`
                  : `クラウドエンジニアとして、AWSソリューションを専門とし、セキュリティとコスト効率を維持しながら
                     企業のインフラスケーリングを支援しています。私のアプローチは、日本の職人技の精密さと
                     インドのエンジニアリングの革新精神を組み合わせています。`}
              </p>
              <p>
                {language === "en"
                  ? `When I'm not architecting cloud solutions, you'll find me exploring and capturing Japan's vibe filled streets, 
                     connecting with locals in learning more about the culture, having cultural exchange through cooking food, playing games, camping out in the woods.`
                  : `仕事してないときは、日本の活気あふれる街を散策したり、撮影したりしています。また、地元の人々と交流して文化を学び、料理やゲーム、キャンプなどを通して異文化交流を楽しんでいます。`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading mb-16 text-center animate-fade-up">
            {language === "en"
              ? "Professional Timeline"
              : "キャリアタイムライン"}
          </h2>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className="flex items-start space-x-6 animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-shrink-0 w-20">
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">
                      {item.year}
                    </span>
                  </div>
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-body mb-4">{item.description}</p>
                  {item.year === "2025" && (
                    <Dialog open={isImageOpen} onOpenChange={setIsImageOpen}>
                      <DialogTrigger asChild>
                        <div className="cursor-pointer hover:opacity-80 transition-opacity">
                          <img
                            src="/images/aws-certificate-ccp.png"
                            alt="AWS Certified Cloud Practitioner Certificate"
                            className="w-64 h-auto rounded-lg shadow-md border border-gray-200"
                          />
                          <p className="text-xs text-text-muted mt-2">
                            {language === "en"
                              ? "Click to view certificate"
                              : "クリックして証明書を表示"}
                          </p>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl w-full">
                        <img
                          src="/images/aws-certificate-ccp.png"
                          alt="AWS Certified Cloud Practitioner Certificate"
                          className="w-full h-auto rounded-lg"
                        />
                      </DialogContent>
                    </Dialog>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies & Interests */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading mb-16 text-center animate-fade-up">
            {language === "en" ? "Beyond Code" : "コード以外の活動"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hobbies.map((hobby, index) => (
              <div
                key={hobby.title}
                className="text-center animate-fade-up card-hover p-6 bg-surface rounded-xl shadow-soft"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{hobby.icon}</div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {hobby.title}
                </h3>
                <p className="text-small">{hobby.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
