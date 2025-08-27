import { MapPin, Briefcase, Heart, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t, language } = useLanguage();

  const timeline = [
    {
      year: '2024',
      title: language === 'en' ? 'Cloud Engineer - Japan' : 'クラウドエンジニア - 日本',
      description: language === 'en' 
        ? 'Leading cloud infrastructure projects, implementing AWS solutions for enterprise clients.'
        : 'エンタープライズクライアント向けAWSソリューションの実装、クラウドインフラプロジェクトをリード。'
    },
    {
      year: '2023',
      title: language === 'en' ? 'AWS Certification Achieved' : 'AWS認定取得',
      description: language === 'en'
        ? 'Earned AWS Certified Solutions Architect certification, specializing in cloud architecture design.'
        : 'AWS認定ソリューションアーキテクト資格を取得、クラウドアーキテクチャ設計を専門化。'
    },
    {
      year: '2022',
      title: language === 'en' ? 'Moved to Japan' : '日本へ移住',
      description: language === 'en'
        ? 'Relocated to Japan to pursue career opportunities in tech industry and embrace Japanese culture.'
        : '技術業界でのキャリア機会を追求し、日本文化を受け入れるために日本に移住。'
    }
  ];

  const hobbies = [
    {
      icon: '🎌',
      title: language === 'en' ? 'Japanese Culture' : '日本文化',
      description: language === 'en' ? 'Learning traditional arts and language' : '伝統芸術と言語の学習'
    },
    {
      icon: '⛰️',
      title: language === 'en' ? 'Mountain Hiking' : '登山',
      description: language === 'en' ? 'Exploring Japan\'s beautiful mountains' : '日本の美しい山々を探索'
    },
    {
      icon: '📱',
      title: language === 'en' ? 'Tech Innovation' : '技術革新',
      description: language === 'en' ? 'Building side projects and apps' : 'サイドプロジェクトとアプリの構築'
    },
    {
      icon: '📸',
      title: language === 'en' ? 'Photography' : '写真撮影',
      description: language === 'en' ? 'Capturing moments and landscapes' : '瞬間と風景の撮影'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-up">
              <h1 className="text-display mb-6">
                {language === 'en' ? 'About Mohan' : 'Mohanについて'}
              </h1>
              <p className="text-subheading mb-8">
                {language === 'en' 
                  ? 'An Indian engineer who found home in Japan, bridging cultures through technology.'
                  : '日本に居場所を見つけたインドのエンジニア、技術を通じて文化を橋渡し。'
                }
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-brand-primary" />
                  <div>
                    <p className="text-sm font-medium text-text-primary">
                      {language === 'en' ? 'Based in' : '在住地'}
                    </p>
                    <p className="text-small">Japan 🇯🇵</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Briefcase className="h-5 w-5 text-brand-primary" />
                  <div>
                    <p className="text-sm font-medium text-text-primary">
                      {language === 'en' ? 'Current Role' : '現在の職業'}
                    </p>
                    <p className="text-small">
                      {language === 'en' ? 'Cloud Engineer' : 'クラウドエンジニア'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Heart className="h-5 w-5 text-brand-primary" />
                  <div>
                    <p className="text-sm font-medium text-text-primary">
                      {language === 'en' ? 'Origin' : '出身'}
                    </p>
                    <p className="text-small">India 🇮🇳</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-brand-primary" />
                  <div>
                    <p className="text-sm font-medium text-text-primary">
                      {language === 'en' ? 'Certification' : '認定'}
                    </p>
                    <p className="text-small">AWS Certified</p>
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
                        <div className="w-32 h-32 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                          <span className="text-white text-4xl font-bold">M</span>
                        </div>
                        <p className="font-mono text-text-secondary">Mohan Kumar</p>
                        <p className="font-mono text-text-muted">Cloud Engineer</p>
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
              {language === 'en' ? 'My Journey' : '私の歩み'}
            </h2>
            <div className="prose prose-lg max-w-none text-body">
              <p className="mb-6">
                {language === 'en' 
                  ? `Born and raised in India, I've always been fascinated by the intersection of technology and culture. 
                     My journey led me to Japan, where I discovered not just professional opportunities, but a second home 
                     that has profoundly shaped my perspective on innovation and craftsmanship.`
                  : `インドで生まれ育った私は、常に技術と文化の交差点に魅力を感じてきました。
                     私の旅路は日本へと続き、そこで単なる職業的機会だけでなく、イノベーションと職人技に対する
                     私の視点を大きく形作った第二の故郷を発見しました。`
                }
              </p>
              <p className="mb-6">
                {language === 'en'
                  ? `As a Cloud Engineer, I specialize in AWS solutions, helping businesses scale their infrastructure 
                     while maintaining security and cost-efficiency. My approach combines the precision of Japanese 
                     craftsmanship with the innovative spirit of Indian engineering.`
                  : `クラウドエンジニアとして、AWSソリューションを専門とし、セキュリティとコスト効率を維持しながら
                     企業のインフラスケーリングを支援しています。私のアプローチは、日本の職人技の精密さと
                     インドのエンジニアリングの革新精神を組み合わせています。`
                }
              </p>
              <p>
                {language === 'en'
                  ? `When I'm not architecting cloud solutions, you'll find me exploring Japan's mountains, 
                     learning traditional Japanese arts, or building innovative side projects that bridge 
                     the gap between Eastern and Western technological approaches.`
                  : `クラウドソリューションの設計をしていない時は、日本の山々を探索したり、
                     日本の伝統芸術を学んだり、東洋と西洋の技術的アプローチの架け橋となる
                     革新的なサイドプロジェクトを構築したりしています。`
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading mb-16 text-center animate-fade-up">
            {language === 'en' ? 'Professional Timeline' : 'キャリアタイムライン'}
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
                    <span className="text-white text-sm font-bold">{item.year}</span>
                  </div>
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-body">
                    {item.description}
                  </p>
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
            {language === 'en' ? 'Beyond Code' : 'コード以外の活動'}
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
                <p className="text-small">
                  {hobby.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;