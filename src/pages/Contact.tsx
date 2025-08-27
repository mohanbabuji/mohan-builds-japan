import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Coffee } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: language === 'en' ? "Message sent!" : "メッセージが送信されました！",
        description: language === 'en' 
          ? "Thank you for your message. I'll get back to you soon!" 
          : "メッセージをありがとうございます。すぐにお返事いたします！",
      });
      setFormData({ name: '', email: '', projectType: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: language === 'en' ? 'Email' : 'メール',
      value: 'mohan@example.com',
      href: 'mailto:mohan@example.com'
    },
    {
      icon: MapPin,
      label: language === 'en' ? 'Location' : '所在地',
      value: language === 'en' ? 'Japan 🇯🇵' : '日本 🇯🇵',
      href: null
    },
    {
      icon: Coffee,
      label: language === 'en' ? 'Availability' : '空き状況',
      value: language === 'en' ? 'Available for projects' : 'プロジェクト受付中',
      href: null
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/mohan',
      icon: Linkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/mohan',
      icon: Github,
      color: 'hover:text-gray-900'
    }
  ];

  const projectTypes = [
    { value: '', label: language === 'en' ? 'Select project type' : 'プロジェクトタイプを選択' },
    { value: 'web-development', label: language === 'en' ? 'Web Development' : 'Web開発' },
    { value: 'cloud-architecture', label: language === 'en' ? 'Cloud Architecture' : 'クラウドアーキテクチャ' },
    { value: 'consulting', label: language === 'en' ? 'Technical Consulting' : '技術コンサルティング' },
    { value: 'fullstack', label: language === 'en' ? 'Full-Stack Application' : 'フルスタックアプリケーション' },
    { value: 'other', label: language === 'en' ? 'Other' : 'その他' }
  ];

  const faqs = [
    {
      question: language === 'en' ? 'What is your typical project timeline?' : '一般的なプロジェクトのタイムラインは？',
      answer: language === 'en' 
        ? 'Project timelines vary based on scope and complexity. Simple websites typically take 2-4 weeks, while complex cloud architectures can take 2-3 months. I will provide a detailed timeline during our initial consultation.'
        : 'プロジェクトのタイムラインは範囲と複雑さによって異なります。シンプルなWebサイトは通常2-4週間、複雑なクラウドアーキテクチャは2-3ヶ月かかります。初回相談時に詳細なタイムラインを提供します。'
    },
    {
      question: language === 'en' ? 'Do you work with international clients?' : '海外のクライアントとも働きますか？',
      answer: language === 'en'
        ? 'Absolutely! I work with clients globally and am comfortable with remote collaboration across different time zones. My bilingual skills (English/Japanese) are particularly valuable for international projects.'
        : 'もちろんです！世界中のクライアントと協力し、異なるタイムゾーンでのリモートコラボレーションに慣れています。私の二か国語スキル（英語/日本語）は特に国際プロジェクトで価値があります。'
    },
    {
      question: language === 'en' ? 'What technologies do you specialize in?' : '専門とする技術は何ですか？',
      answer: language === 'en'
        ? 'I specialize in AWS cloud services, React/TypeScript for frontend, Node.js/Python for backend, and DevOps practices. I am also experienced with serverless architectures and modern deployment pipelines.'
        : 'AWSクラウドサービス、フロントエンドのReact/TypeScript、バックエンドのNode.js/Python、DevOpsプラクティスを専門としています。サーバーレスアーキテクチャと最新のデプロイメントパイプラインの経験もあります。'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-up">
            <h1 className="text-display mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-subheading max-w-3xl mx-auto mb-12">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-up">
              <div className="bg-surface rounded-2xl p-8 shadow-soft">
                <h2 className="text-heading mb-6">
                  {language === 'en' ? 'Send me a message' : 'メッセージを送る'}
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">{t('contact.form.name')}</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">{t('contact.form.email')}</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="projectType">{t('contact.form.project')}</Label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                    >
                      {projectTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">{t('contact.form.message')}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder={language === 'en' 
                        ? 'Tell me about your project, timeline, and any specific requirements...'
                        : 'プロジェクト、タイムライン、特定の要件について教えてください...'
                      }
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary group"
                  >
                    {isSubmitting ? (
                      <span>{language === 'en' ? 'Sending...' : '送信中...'}</span>
                    ) : (
                      <>
                        {t('contact.form.submit')}
                        <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-in-right">
              <div className="space-y-8">
                <div>
                  <h2 className="text-heading mb-6">
                    {language === 'en' ? 'Get in touch' : 'お問い合わせ'}
                  </h2>
                  <p className="text-body mb-8">
                    {language === 'en' 
                      ? 'I am always excited to discuss new opportunities and innovative projects. Whether you are looking for a cloud engineer, full-stack developer, or technical consultant, I would love to hear from you.'
                      : '新しい機会や革新的なプロジェクトについて話し合うことにいつも興奮しています。クラウドエンジニア、フルスタック開発者、技術コンサルタントをお探しの方、ぜひお聞かせください。'
                    }
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-brand-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-text-primary">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-body hover:text-brand-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-body">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="pt-8 border-t">
                  <h3 className="text-lg font-semibold text-text-primary mb-4">
                    {language === 'en' ? 'Connect with me' : 'つながりましょう'}
                  </h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 bg-surface border border-gray-200 rounded-lg transition-all duration-300 hover:shadow-medium hover:scale-105 ${link.color}`}
                        aria-label={link.name}
                      >
                        <link.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-brand-primary/5 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {language === 'en' ? 'Response Time' : '返信時間'}
                  </h3>
                  <p className="text-body">
                    {language === 'en' 
                      ? 'I typically respond within 24 hours during business days. For urgent matters, please mention it in your message.'
                      : '営業日であれば通常24時間以内に返信いたします。緊急事項の場合は、メッセージにその旨を記載してください。'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-heading mb-6">
              {language === 'en' ? 'Frequently Asked Questions' : 'よくある質問'}
            </h2>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-background rounded-xl p-6 shadow-soft animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  {faq.question}
                </h3>
                <p className="text-body">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;