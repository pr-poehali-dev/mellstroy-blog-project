import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [days] = useState(45);
  const [hours] = useState(12);
  const [minutes] = useState(34);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            МЕЛЛСТРОЙ.ГЕЙМ
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#main" className="hover:text-primary transition-colors">Главная</a>
            <a href="#prizes" className="hover:text-primary transition-colors">Призы</a>
            <a href="#rules" className="hover:text-primary transition-colors">Условия</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Работы</a>
            <a href="#participate" className="hover:text-primary transition-colors">Участвовать</a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary">
            Войти
          </Button>
        </div>
      </nav>

      <section id="main" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-6 animate-glow">
            <Badge className="bg-primary/20 text-primary border-primary px-6 py-2 text-lg">
              🏆 КОНКУРС ОТ МЕЛЛСТРОЯ
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 animate-fade-in">
            ВЫИГРАЙ
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              КВАРТИРУ
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up">
            Сними самое креативное видео для Меллстроя и получи квартиру в центре Москвы! 
          </p>
          
          <div className="bg-card border border-primary rounded-lg p-6 max-w-2xl mx-auto mb-8 animate-slide-up">
            <div className="text-sm text-muted-foreground mb-2">До окончания конкурса осталось:</div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="text-4xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {days}
                </div>
                <div className="text-sm text-muted-foreground">дней</div>
              </div>
              <div>
                <div className="text-4xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {hours}
                </div>
                <div className="text-sm text-muted-foreground">часов</div>
              </div>
              <div>
                <div className="text-4xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {minutes}
                </div>
                <div className="text-sm text-muted-foreground">минут</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-lg px-8 py-6 hover:scale-105 transition-transform">
              <Icon name="Video" className="mr-2" />
              Загрузить видео
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-transform">
              <Icon name="Info" className="mr-2" />
              Правила конкурса
            </Button>
          </div>
        </div>
      </section>

      <section id="prizes" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">ПРИЗЫ</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/20 to-secondary/20 border-primary hover:scale-105 transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-primary/30 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Trophy" className="text-primary" size={40} />
                </div>
                <Badge className="mb-4 bg-primary text-white text-lg px-4 py-1">1 МЕСТО</Badge>
                <h3 className="text-3xl font-black mb-2">КВАРТИРА</h3>
                <p className="text-muted-foreground mb-4">
                  Однокомнатная квартира в центре Москвы, площадью 45 м²
                </p>
                <div className="text-4xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  ~15 МЛН ₽
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-secondary hover:scale-105 transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Medal" className="text-secondary" size={40} />
                </div>
                <Badge className="mb-4 bg-secondary text-white text-lg px-4 py-1">2 МЕСТО</Badge>
                <h3 className="text-3xl font-black mb-2">АВТО</h3>
                <p className="text-muted-foreground mb-4">
                  Новый автомобиль премиум-класса
                </p>
                <div className="text-4xl font-black bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  5 МЛН ₽
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-accent hover:scale-105 transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" className="text-accent" size={40} />
                </div>
                <Badge className="mb-4 bg-accent text-white text-lg px-4 py-1">3 МЕСТО</Badge>
                <h3 className="text-3xl font-black mb-2">ДЕНЬГИ</h3>
                <p className="text-muted-foreground mb-4">
                  Денежный приз наличными
                </p>
                <div className="text-4xl font-black bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  1 МЛН ₽
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              + 10 дополнительных призов по 100 000₽ для участников народного голосования
            </p>
          </div>
        </div>
      </section>

      <section id="rules" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
            КАК <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">УЧАСТВОВАТЬ</span>
          </h2>
          
          <div className="space-y-6">
            <Card className="bg-card border-border hover:border-primary transition-all">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-black text-primary">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Придумай креативную идею</h3>
                  <p className="text-muted-foreground">
                    Сними видео с участием Меллстроя или по мотивам его стримов. Будь оригинальным! Юмор, драма, экшн — выбирай свой стиль.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-secondary transition-all">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-black text-secondary">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Загрузи видео</h3>
                  <p className="text-muted-foreground">
                    Длительность: от 30 секунд до 3 минут. Формат: MP4, MOV. Максимальный размер: 500 МБ. Разрешение: не менее 1080p.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-accent transition-all">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-black text-accent">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Получи голоса</h3>
                  <p className="text-muted-foreground">
                    Делись ссылкой на свою работу в соцсетях. Чем больше лайков и просмотров — тем выше шансы попасть в топ!
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-all">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-black text-primary">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Жди результатов</h3>
                  <p className="text-muted-foreground">
                    Меллстрой лично выберет лучшие работы в прямом эфире. Победители будут объявлены после окончания конкурса.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
            ЛУЧШИЕ <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">РАБОТЫ</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Меллстрой в космосе", author: "Александр М.", votes: "15.2K", views: "245K" },
              { title: "Эпичная донат битва", author: "Мария К.", votes: "12.8K", views: "180K" },
              { title: "День из жизни стримера", author: "Дмитрий П.", votes: "11.5K", views: "165K" },
              { title: "Пародия на главные моменты", author: "Елена С.", votes: "9.3K", views: "125K" },
              { title: "Меллстрой: Начало", author: "Игорь В.", votes: "8.7K", views: "110K" },
              { title: "Трейлер к несуществующему фильму", author: "Анна Л.", votes: "7.9K", views: "95K" }
            ].map((video, i) => (
              <Card key={i} className="bg-card border-border hover:border-primary transition-all cursor-pointer group">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative overflow-hidden">
                    <Icon name="Play" className="text-primary group-hover:scale-110 transition-transform" size={48} />
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-primary text-white">TOP {i + 1}</Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold mb-1">{video.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">Автор: {video.author}</p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1 text-primary">
                        <Icon name="Heart" size={16} />
                        <span>{video.votes}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Icon name="Eye" size={16} />
                        <span>{video.views}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              Посмотреть все работы
              <Icon name="ChevronRight" className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="participate" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">ЗАГРУЗИ ВИДЕО</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Заполни форму и стань участником конкурса на квартиру!
          </p>

          <Card className="bg-card border-primary">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Твое имя *</label>
                  <Input placeholder="Как тебя зовут?" className="bg-background border-border" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input type="email" placeholder="email@example.com" className="bg-background border-border" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Ссылка на соцсети</label>
                  <Input placeholder="Instagram, TikTok или VK" className="bg-background border-border" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Название работы *</label>
                  <Input placeholder="Придумай креативное название" className="bg-background border-border" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Описание идеи *</label>
                  <Textarea 
                    placeholder="Расскажи о своей идее в нескольких словах" 
                    className="bg-background border-border min-h-24"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Загрузи видео *</label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                    <Icon name="Upload" className="mx-auto mb-2 text-primary" size={48} />
                    <p className="text-muted-foreground mb-1">Нажми или перетащи файл</p>
                    <p className="text-xs text-muted-foreground">MP4, MOV до 500 МБ</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <input type="checkbox" id="agree" className="mt-1" />
                  <label htmlFor="agree" className="text-sm text-muted-foreground">
                    Я согласен с правилами конкурса и даю согласие на обработку персональных данных
                  </label>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-secondary text-lg py-6"
                >
                  <Icon name="Send" className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-black mb-6">
            ОСТАЛИСЬ ВОПРОСЫ?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Присоединяйся к нашему сообществу и следи за новостями конкурса
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Icon name="MessageCircle" className="mr-2" />
              Telegram канал
            </Button>
            <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
              <Icon name="Send" className="mr-2" />
              Discord
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
              <Icon name="Share2" className="mr-2" />
              VK группа
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="text-3xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
            МЕЛЛСТРОЙ.ГЕЙМ
          </div>
          <p className="text-muted-foreground mb-6">
            Конкурс креативных видео от Меллстроя
          </p>
          <div className="flex gap-6 justify-center text-muted-foreground mb-6">
            <a href="#" className="hover:text-primary transition-colors">Правила</a>
            <a href="#" className="hover:text-primary transition-colors">FAQ</a>
            <a href="#" className="hover:text-primary transition-colors">Поддержка</a>
            <a href="#" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 МЕЛЛСТРОЙ.ГЕЙМ. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
