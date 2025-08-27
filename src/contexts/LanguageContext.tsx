import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'en' | 'ja';
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.works': 'Works',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'MOHAN',
    'hero.subtitle': 'Cloud Engineer & Full-Stack Developer',
    'hero.description': 'AWS Certified Engineer crafting innovative web solutions from Japan. Specializing in cloud architecture, modern web development, and scalable applications.',
    'hero.cta.primary': 'View My Work',
    'hero.cta.secondary': 'Get In Touch',
    
    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'Passionate engineer building the future of web',
    'about.description': 'Currently working as a Cloud Engineer in Japan, I bring together my expertise in AWS cloud services and full-stack development to create impactful digital experiences.',
    
    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'A showcase of my latest work',
    'projects.view.all': 'View All Projects',
    
    // Contact
    'contact.title': 'Let\'s Work Together',
    'contact.subtitle': 'Ready to bring your ideas to life',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Email Address',
    'contact.form.project': 'Project Type',
    'contact.form.message': 'Tell me about your project',
    'contact.form.submit': 'Send Message',
    
    // Footer
    'footer.connect': 'Let\'s Connect',
    'footer.location': 'Based in Japan',
    'footer.status': 'Available for freelance work',
  },
  ja: {
    // Navigation
    'nav.home': 'ホーム',
    'nav.about': '私について',
    'nav.works': '作品',
    'nav.contact': 'お問い合わせ',
    
    // Hero Section
    'hero.title': 'MOHAN',
    'hero.subtitle': 'クラウドエンジニア・フルスタック開発者',
    'hero.description': 'AWS認定エンジニアとして日本からイノベーティブなWebソリューションを提供。クラウドアーキテクチャ、モダンWeb開発、スケーラブルアプリケーションが専門です。',
    'hero.cta.primary': '作品を見る',
    'hero.cta.secondary': 'お問い合わせ',
    
    // About Section
    'about.title': '私について',
    'about.subtitle': 'Webの未来を築く情熱的なエンジニア',
    'about.description': '現在日本でクラウドエンジニアとして働いており、AWSクラウドサービスとフルスタック開発の専門知識を組み合わせて、インパクトのあるデジタル体験を創造しています。',
    
    // Projects Section
    'projects.title': '注目プロジェクト',
    'projects.subtitle': '最新の作品をご紹介',
    'projects.view.all': 'すべてのプロジェクトを見る',
    
    // Contact
    'contact.title': '一緒に働きましょう',
    'contact.subtitle': 'あなたのアイデアを実現する準備ができています',
    'contact.form.name': 'お名前',
    'contact.form.email': 'メールアドレス',
    'contact.form.project': 'プロジェクトタイプ',
    'contact.form.message': 'プロジェクトについて教えてください',
    'contact.form.submit': 'メッセージを送信',
    
    // Footer
    'footer.connect': 'つながりましょう',
    'footer.location': '日本在住',
    'footer.status': 'フリーランス案件受付中',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'ja'>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ja' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};