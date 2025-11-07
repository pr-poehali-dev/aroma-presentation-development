import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const slides = [
  {
    id: 1,
    title: 'Ароматерапия для здоровья и благополучия',
    subtitle: 'Раскройте силу природы с профессиональным курсом',
    type: 'hero',
  },
  {
    id: 2,
    title: 'Проблемы, которые мы решаем',
    type: 'problem',
    problems: [
      { icon: 'HeartCrack', text: 'Постоянный стресс и тревожность' },
      { icon: 'Moon', text: 'Проблемы со сном и бессонница' },
      { icon: 'Frown', text: 'Упадок сил и хроническая усталость' },
      { icon: 'Shield', text: 'Низкий иммунитет и частые простуды' },
    ],
  },
  {
    id: 3,
    title: 'Наше решение',
    type: 'solution',
    content: 'Профессиональный курс по ароматерапии, который научит вас безопасно и эффективно использовать эфирные масла для укрепления здоровья всей семьи',
    features: [
      'Научная база и проверенные методики',
      'Практические навыки применения',
      'Безопасность использования',
      'Поддержка экспертов',
    ],
  },
  {
    id: 4,
    title: 'Преимущества обучения',
    type: 'benefits',
    benefits: [
      { icon: 'GraduationCap', title: 'Сертификат', text: 'Официальный документ о прохождении' },
      { icon: 'Users', title: 'Сообщество', text: 'Доступ к закрытому чату практиков' },
      { icon: 'Play', title: 'Видеоуроки', text: 'Структурированные материалы' },
      { icon: 'Clock', title: 'Без сроков', text: 'Доступ к курсу навсегда' },
    ],
  },
  {
    id: 5,
    title: 'Программа курса',
    type: 'program',
    modules: [
      { number: '01', name: 'Введение в ароматерапию', duration: '2 недели' },
      { number: '02', name: 'Базовые эфирные масла', duration: '3 недели' },
      { number: '03', name: 'Методы применения', duration: '2 недели' },
      { number: '04', name: 'Ароматерапия для здоровья', duration: '3 недели' },
      { number: '05', name: 'Создание смесей', duration: '2 недели' },
    ],
  },
  {
    id: 6,
    title: 'Что вы получите',
    type: 'results',
    results: [
      'Знания о 50+ эфирных маслах',
      'Навыки создания лечебных смесей',
      'Умение работать с аромадиффузорами',
      'Рецепты для разных ситуаций',
      'Базу для профессиональной практики',
    ],
  },
  {
    id: 7,
    title: 'Тарифы обучения',
    type: 'pricing',
    plans: [
      {
        name: 'Базовый',
        price: '9 900 ₽',
        features: ['Все видеоуроки', 'Рабочая тетрадь', 'Сертификат'],
      },
      {
        name: 'Оптимальный',
        price: '14 900 ₽',
        features: ['Базовый +', 'Чат поддержки', '3 вебинара', 'Бонусные материалы'],
        popular: true,
      },
      {
        name: 'Премиум',
        price: '24 900 ₽',
        features: ['Оптимальный +', 'Личный разбор', 'Консультации 3 мес', 'Набор масел'],
      },
    ],
  },
  {
    id: 8,
    title: 'Ваш преподаватель',
    type: 'author',
    author: {
      name: 'Елена Зеленская',
      title: 'Сертифицированный ароматерапевт',
      experience: '12 лет практики',
      achievements: [
        'Международный сертификат IFA',
        'Более 2000 выпускников',
        'Автор 3 книг по ароматерапии',
        'Эксперт телеканала "Здоровье"',
      ],
    },
  },
  {
    id: 9,
    title: 'Отзывы учеников',
    type: 'testimonials',
    testimonials: [
      { name: 'Анна М.', text: 'Курс превзошёл ожидания! Наконец-то понимаю, как работают масла' },
      { name: 'Мария К.', text: 'Справилась с бессонницей благодаря полученным знаниям' },
      { name: 'Ольга Р.', text: 'Отличная база для старта карьеры ароматерапевта' },
    ],
  },
  {
    id: 10,
    title: 'Начните своё путешествие',
    type: 'cta',
    content: 'Присоединяйтесь к курсу и откройте для себя силу природной ароматерапии',
  },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const renderSlide = () => {
    const slide = slides[currentSlide];

    switch (slide.type) {
      case 'hero':
        return (
          <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
            <div className="mb-8">
              <Icon name="Flower2" size={80} className="text-primary mx-auto mb-6" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 max-w-4xl leading-tight">
              {slide.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8">
              {slide.subtitle}
            </p>
            <Button size="lg" className="text-lg px-8 py-6" onClick={nextSlide}>
              Узнать больше
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        );

      case 'problem':
        return (
          <div className="max-w-5xl mx-auto px-6 py-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
              {slide.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {slide.problems?.map((problem, idx) => (
                <Card key={idx} className="p-8 hover:shadow-lg transition-shadow">
                  <Icon name={problem.icon} size={40} className="text-secondary mb-4" />
                  <p className="text-xl font-medium">{problem.text}</p>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'solution':
        return (
          <div className="max-w-4xl mx-auto px-6 py-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-primary">
              {slide.title}
            </h2>
            <Card className="p-10 bg-accent/50">
              <p className="text-2xl text-center mb-8 leading-relaxed">{slide.content}</p>
              <div className="grid md:grid-cols-2 gap-4">
                {slide.features?.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Icon name="Check" size={24} className="text-primary flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        );

      case 'benefits':
        return (
          <div className="max-w-6xl mx-auto px-6 py-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
              {slide.title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {slide.benefits?.map((benefit, idx) => (
                <Card key={idx} className="p-6 text-center hover:scale-105 transition-transform">
                  <Icon name={benefit.icon} size={48} className="text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.text}</p>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'program':
        return (
          <div className="max-w-4xl mx-auto px-6 py-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
              {slide.title}
            </h2>
            <div className="space-y-4">
              {slide.modules?.map((module, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-6">
                    <div className="text-4xl font-bold text-secondary w-16">{module.number}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{module.name}</h3>
                      <p className="text-muted-foreground flex items-center gap-2">
                        <Icon name="Clock" size={16} />
                        {module.duration}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'results':
        return (
          <div className="max-w-4xl mx-auto px-6 py-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
              {slide.title}
            </h2>
            <Card className="p-10 bg-gradient-to-br from-accent/50 to-background">
              <div className="space-y-6">
                {slide.results?.map((result, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <Icon name="Sparkles" size={24} className="text-secondary flex-shrink-0 mt-1" />
                    <p className="text-xl">{result}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        );

      case 'pricing':
        return (
          <div className="max-w-6xl mx-auto px-6 py-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
              {slide.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {slide.plans?.map((plan, idx) => (
                <Card
                  key={idx}
                  className={`p-8 relative ${
                    plan.popular ? 'border-2 border-primary shadow-xl scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Популярный
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="text-4xl font-bold text-primary mb-6">{plan.price}</div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                    Выбрать тариф
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'author':
        return (
          <div className="max-w-5xl mx-auto px-6 py-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
              {slide.title}
            </h2>
            <Card className="p-10">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <img
                    src="https://cdn.poehali.dev/projects/4f9e5d55-c874-4b32-ac8a-4cd0e8d1c809/files/eeabceca-45b9-412f-9aab-afa466ac4653.jpg"
                    alt={slide.author?.name}
                    className="rounded-2xl w-full object-cover aspect-square"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">{slide.author?.name}</h3>
                  <p className="text-xl text-secondary mb-2">{slide.author?.title}</p>
                  <p className="text-lg text-muted-foreground mb-6">{slide.author?.experience}</p>
                  <div className="space-y-3">
                    {slide.author?.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Icon name="Award" size={20} className="text-primary flex-shrink-0 mt-1" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        );

      case 'testimonials':
        return (
          <div className="max-w-5xl mx-auto px-6 py-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
              {slide.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {slide.testimonials?.map((testimonial, idx) => (
                <Card key={idx} className="p-6">
                  <Icon name="Quote" size={32} className="text-secondary mb-4" />
                  <p className="text-lg mb-4 italic">{testimonial.text}</p>
                  <p className="font-semibold text-primary">— {testimonial.name}</p>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'cta':
        return (
          <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
            <Icon name="Sparkles" size={80} className="text-secondary mx-auto mb-8" />
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 max-w-4xl leading-tight">
              {slide.title}
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10">
              {slide.content}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-10 py-6">
                Записаться на курс
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-6">
                Задать вопрос
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background">
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/4f9e5d55-c874-4b32-ac8a-4cd0e8d1c809/files/b898d896-f99f-4a31-93f2-044f9d79b3cd.jpg')`,
        }}
      />

      <div className="relative z-10">
        <div className="container mx-auto py-8">
          <div className="animate-fade-in">{renderSlide()}</div>

          <div className="flex items-center justify-center gap-4 mt-12 mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="rounded-full"
            >
              <Icon name="ChevronLeft" size={24} />
            </Button>

            <div className="flex items-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-primary w-8'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Перейти к слайду ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="rounded-full"
            >
              <Icon name="ChevronRight" size={24} />
            </Button>
          </div>

          <div className="text-center text-muted-foreground">
            Слайд {currentSlide + 1} из {slides.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
