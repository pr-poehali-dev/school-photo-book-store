import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="GraduationCap" size={28} className="text-primary" />
            <span className="text-xl font-heading font-bold text-gray-900">ШколаФото</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Главная</a>
            <a href="#catalog" className="text-gray-700 hover:text-primary transition-colors">Каталог</a>
            <a href="#portfolio" className="text-gray-700 hover:text-primary transition-colors">Портфолио</a>
            <a href="#order" className="text-gray-700 hover:text-primary transition-colors">Заказать</a>
            <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary text-white hover:bg-primary/90">
            <Icon name="Phone" size={16} className="mr-2" />
            Связаться
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-primary/5 to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-secondary text-secondary-foreground">
                📚 Профессиональные фотокниги для школ
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 leading-tight">
                Сохраним лучшие моменты школьной жизни
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Создаем качественные фотокниги для общеобразовательных школ и учреждений специального образования. 
                Каждая книга — это история детства и школьных лет.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                  <Icon name="BookOpen" size={20} className="mr-2" />
                  Посмотреть каталог
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/e50109c2-c7ba-4cb1-80cd-0b8d436f4acd.jpg" 
                alt="Школьная фотокнига" 
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg border">
                <div className="flex items-center space-x-2">
                  <Icon name="Star" size={16} className="text-yellow-500 fill-current" />
                  <span className="font-semibold text-gray-900">4.9/5</span>
                  <span className="text-gray-600 text-sm">2000+ довольных школ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Catalog */}
      <section id="catalog" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Профессиональная фотосъемка и создание памятных фотокниг для всех типов образовательных учреждений
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="School" size={24} className="text-primary" />
                </div>
                <CardTitle className="font-heading">Общеобразовательные школы</CardTitle>
                <CardDescription>
                  Выпускные альбомы, школьные мероприятия, классные фотокниги
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-600 mr-2" />Выпускные альбомы</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-600 mr-2" />Школьные праздники</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-600 mr-2" />Спортивные мероприятия</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-600 mr-2" />Классные портреты</li>
                </ul>
                <Button className="w-full mt-4" variant="outline">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Heart" size={24} className="text-red-600" />
                </div>
                <CardTitle className="font-heading">Специальное образование</CardTitle>
                <CardDescription>
                  Деликатный подход к фотосъемке детей с особыми потребностями
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-600 mr-2" />Индивидуальный подход</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-600 mr-2" />Терпеливая работа</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-600 mr-2" />Адаптированные форматы</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-600 mr-2" />Включающая атмосфера</li>
                </ul>
                <Button className="w-full mt-4" variant="outline">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Camera" size={24} className="text-secondary" />
                </div>
                <CardTitle className="font-heading">Дополнительные услуги</CardTitle>
                <CardDescription>
                  Профессиональная ретушь, дизайн, печать премиум-качества
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-600 mr-2" />Профессиональная ретушь</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-600 mr-2" />Индивидуальный дизайн</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-600 mr-2" />Премиум печать</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-600 mr-2" />Быстрая доставка</li>
                </ul>
                <Button className="w-full mt-4" variant="outline">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Наше портфолио
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Примеры наших работ для разных типов образовательных учреждений
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="https://cdn.poehali.dev/files/b804f8f8-7023-44c0-aefb-0e766fed3aa2.jpg" 
                  alt="Начальная школа" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" size="lg">
                    <Icon name="Eye" size={20} className="mr-2" />
                    Посмотреть
                  </Button>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-heading font-semibold text-gray-900">Начальная школа №15</h3>
                <p className="text-gray-600 text-sm">Выпускной альбом 4 класса</p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="/img/972a13bf-94de-4928-aeee-0d2e66f4b5d1.jpg" 
                  alt="Специальная школа" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" size="lg">
                    <Icon name="Eye" size={20} className="mr-2" />
                    Посмотреть
                  </Button>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-heading font-semibold text-gray-900">Коррекционная школа</h3>
                <p className="text-gray-600 text-sm">Фотокнига школьных мероприятий</p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="https://cdn.poehali.dev/files/d5924c44-8c95-44af-9d40-1767be634d90.jpg" 
                  alt="Старшая школа" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" size="lg">
                    <Icon name="Eye" size={20} className="mr-2" />
                    Посмотреть
                  </Button>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-heading font-semibold text-gray-900">Гимназия №3</h3>
                <p className="text-gray-600 text-sm">Выпускной альбом 11 класса</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section id="order" className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                Заказать фотокнигу
              </h2>
              <p className="text-gray-600">
                Оставьте заявку, и мы свяжемся с вами для обсуждения деталей
              </p>
            </div>
            
            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Название учреждения *
                    </label>
                    <Input placeholder="МБОУ СОШ №1" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Контактное лицо *
                    </label>
                    <Input placeholder="Иванова Мария Петровна" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон *
                    </label>
                    <Input placeholder="+7 (999) 123-45-67" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input placeholder="school@example.ru" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Тип учреждения
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-md">
                      <option>Общеобразовательная школа</option>
                      <option>Коррекционная школа</option>
                      <option>Гимназия/Лицей</option>
                      <option>Детский сад</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Количество учеников
                    </label>
                    <Input placeholder="25" type="number" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Дополнительная информация
                    </label>
                    <Textarea 
                      placeholder="Расскажите о ваших пожеланиях к фотокниге..."
                      className="h-24"
                    />
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90 px-8">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Контакты
            </h2>
            <p className="text-gray-600">
              Свяжитесь с нами удобным способом
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={24} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-gray-900 mb-2">Телефон</h3>
              <p className="text-gray-600">+7 (999) 123-45-67</p>
              <p className="text-gray-600">+7 (999) 765-43-21</p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={24} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">info@schoolphoto.ru</p>
              <p className="text-gray-600">orders@schoolphoto.ru</p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={24} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-gray-900 mb-2">Адрес</h3>
              <p className="text-gray-600">г. Москва, ул. Образования, 12</p>
              <p className="text-gray-600">офис 205</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="GraduationCap" size={24} className="text-primary" />
                <span className="text-xl font-heading font-bold">ШколаФото</span>
              </div>
              <p className="text-gray-400 text-sm">
                Профессиональные фотокниги для школ с 2015 года. 
                Сохраняем лучшие моменты школьной жизни.
              </p>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Общеобразовательные школы</li>
                <li>Специальное образование</li>
                <li>Выпускные альбомы</li>
                <li>Школьные мероприятия</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>📞 +7 (999) 123-45-67</p>
                <p>✉️ info@schoolphoto.ru</p>
                <p>📍 г. Москва, ул. Образования, 12</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 ШколаФото. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;