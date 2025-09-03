import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Star, 
  Sparkles, 
  Heart, 
  Shield, 
  Clock, 
  Users, 
  Award,
  Phone,
  MapPin,
  Mail,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      icon: Sparkles,
      title: t('homepage.services.nailArt.title'),
      description: t('homepage.services.nailArt.description'),
      price: t('homepage.services.nailArt.price'),
      duration: t('homepage.services.nailArt.duration')
    },
    {
      icon: Heart,
      title: t('homepage.services.gelNail.title'),
      description: t('homepage.services.gelNail.description'),
      price: t('homepage.services.gelNail.price'),
      duration: t('homepage.services.gelNail.duration')
    },
    {
      icon: Shield,
      title: t('homepage.services.nailCare.title'),
      description: t('homepage.services.nailCare.description'),
      price: t('homepage.services.nailCare.price'),
      duration: t('homepage.services.nailCare.duration')
    },
    {
      icon: Award,
      title: t('homepage.services.nailSpa.title'),
      description: t('homepage.services.nailSpa.description'),
      price: t('homepage.services.nailSpa.price'),
      duration: t('homepage.services.nailSpa.duration')
    }
  ];

  const testimonials = [
    {
      name: t('homepage.testimonials.customer1.name'),
      rating: 5,
      comment: t('homepage.testimonials.customer1.comment')
    },
    {
      name: t('homepage.testimonials.customer2.name'),
      rating: 5,
      comment: t('homepage.testimonials.customer2.comment')
    },
    {
      name: t('homepage.testimonials.customer3.name'),
      rating: 5,
      comment: t('homepage.testimonials.customer3.comment')
    }
  ];

  const features = [
    {
      icon: Shield,
      title: t('homepage.features.safety.title'),
      description: t('homepage.features.safety.description')
    },
    {
      icon: Clock,
      title: t('homepage.features.timeSaving.title'),
      description: t('homepage.features.timeSaving.description')
    },
    {
      icon: Users,
      title: t('homepage.features.professional.title'),
      description: t('homepage.features.professional.description')
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  {t('homepage.hero.badge')}
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  {t('homepage.hero.title')}
                  <span className="text-primary block">{t('homepage.hero.titleHighlight')}</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {t('homepage.hero.description')}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>{t('homepage.hero.bookingBtn')}</span>
                </Button>
                <Button variant="outline" size="lg" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>{t('homepage.hero.contactBtn')}</span>
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span>{t('homepage.hero.rating')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>{t('homepage.hero.customers')}</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{t('homepage.hero.quickBooking.title')}</h3>
                    <p className="text-muted-foreground">{t('homepage.hero.quickBooking.subtitle')}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline" className="h-12">
                        <Sparkles className="h-4 w-4 mr-2" />
                        Nail Art
                      </Button>
                      <Button variant="outline" className="h-12">
                        <Heart className="h-4 w-4 mr-2" />
                        Gel Nail
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Chọn ngày</label>
                      <Button variant="outline" className="w-full h-12 justify-start">
                        <Calendar className="h-4 w-4 mr-2" />
                        Chọn ngày
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Chọn giờ</label>
                      <div className="grid grid-cols-3 gap-2">
                        <Button variant="outline" size="sm">9:00</Button>
                        <Button variant="outline" size="sm">10:00</Button>
                        <Button variant="outline" size="sm">11:00</Button>
                      </div>
                    </div>
                    
                    <Button className="w-full h-12">
                      <span>Đặt lịch ngay</span>
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Dịch vụ của chúng tôi
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Dịch vụ nail chuyên nghiệp
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Từ nail art sáng tạo đến chăm sóc móng toàn diện, chúng tôi mang đến 
              những dịch vụ tốt nhất cho bạn
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Giá:</span>
                    <span className="font-bold text-primary">{service.price}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Thời gian:</span>
                    <span className="font-medium">{service.duration}</span>
                  </div>
                  <Button className="w-full" variant="outline">
                    Đặt lịch
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Tại sao chọn chúng tôi
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Cam kết chất lượng dịch vụ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Khách hàng nói gì
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Phản hồi từ khách hàng
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">
                    "{testimonial.comment}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">Khách hàng</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Sẵn sàng làm đẹp móng tay?
            </h2>
            <p className="text-xl opacity-90">
              Đặt lịch ngay hôm nay để trải nghiệm dịch vụ nail chuyên nghiệp tại Nailism
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Đặt lịch ngay</span>
              </Button>
              <Button size="lg" variant="outline" className="flex items-center space-x-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Phone className="h-5 w-5" />
                <span>Gọi ngay</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Địa chỉ</h3>
              <p className="text-muted-foreground">123 Đường ABC, Quận 1, TP.HCM</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Điện thoại</h3>
              <p className="text-muted-foreground">(028) 1234 5678</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Email</h3>
              <p className="text-muted-foreground">info@nailism.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
