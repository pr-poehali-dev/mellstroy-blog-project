import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            МЕЛЛСТРОЙ.ГЕЙМ
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#main" className="hover:text-primary transition-colors">Главная</a>
            <a href="#about" className="hover:text-primary transition-colors">О проекте</a>
            <a href="#streams" className="hover:text-primary transition-colors">Стримы</a>
            <a href="#news" className="hover:text-primary transition-colors">Новости</a>
            <a href="#community" className="hover:text-primary transition-colors">Сообщество</a>
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
              🎮 ОФИЦИАЛЬНЫЙ ПРОЕКТ МЕЛЛСТРОЯ
            </Badge>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              МЕЛЛСТРОЙ
            </span>
            <br />
            <span className="text-foreground">.ГЕЙМ</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up">
            Новая эра развлечений. Присоединяйся к самому масштабному проекту 2025 года.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-lg px-8 py-6 hover:scale-105 transition-transform">
              <Icon name="Play" className="mr-2" />
              Начать играть
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-transform">
              <Icon name="Users" className="mr-2" />
              Сообщество
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
            О <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">ПРОЕКТЕ</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-border hover:border-primary transition-all hover:scale-105">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Icon name="Gamepad2" className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Уникальный геймплей</h3>
                <p className="text-muted-foreground">
                  Революционная механика игры, которой вы еще не видели. Погрузись в мир азарта и стратегии.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-secondary transition-all hover:scale-105">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                  <Icon name="Trophy" className="text-secondary" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Крупные призы</h3>
                <p className="text-muted-foreground">
                  Ежедневные турниры с реальными выплатами. Стань чемпионом и забери главный приз.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-accent transition-all hover:scale-105">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <Icon name="Zap" className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Живое общение</h3>
                <p className="text-muted-foreground">
                  Участвуй в прямых эфирах Меллстроя, влияй на игру и общайся с тысячами фанатов.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="streams" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">СТРИМЫ</span>
          </h2>
          
          <div className="mb-8">
            <Card className="bg-card border-primary overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative">
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-600 text-white animate-pulse">🔴 LIVE</Badge>
                  </div>
                  <Icon name="Play" className="text-primary" size={80} />
                  <div className="absolute bottom-4 right-4 text-sm bg-background/80 px-3 py-1 rounded">
                    <Icon name="Eye" className="inline mr-1" size={16} />
                    12.5K зрителей
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Главный турнир недели</h3>
                  <p className="text-muted-foreground mb-4">
                    Меллстрой играет в новую игру и разыгрывает 500К рублей среди зрителей!
                  </p>
                  <Button className="bg-gradient-to-r from-primary to-secondary w-full">
                    <Icon name="Tv" className="mr-2" />
                    Смотреть стрим
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Запись: Эпичная раздача", views: "245K", duration: "2:45:30" },
              { title: "Турнир с подписчиками", views: "180K", duration: "1:30:15" },
              { title: "Обзор новых фишек", views: "95K", duration: "45:20" }
            ].map((video, i) => (
              <Card key={i} className="bg-card border-border hover:border-primary transition-all cursor-pointer group">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative overflow-hidden">
                    <Icon name="Play" className="text-primary group-hover:scale-110 transition-transform" size={48} />
                    <div className="absolute bottom-2 right-2 text-xs bg-background/90 px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold mb-1">{video.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      <Icon name="Eye" className="inline mr-1" size={14} />
                      {video.views} просмотров
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">НОВОСТИ</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                badge: "Обновление",
                title: "Новый режим игры уже доступен!",
                date: "2 часа назад",
                icon: "Sparkles"
              },
              {
                badge: "Турнир",
                title: "Главный турнир месяца: призовой фонд 1М",
                date: "5 часов назад",
                icon: "Trophy"
              },
              {
                badge: "Сообщество",
                title: "50К игроков онлайн — новый рекорд!",
                date: "1 день назад",
                icon: "Users"
              },
              {
                badge: "Событие",
                title: "Совместный стрим с топовыми блогерами",
                date: "2 дня назад",
                icon: "Tv"
              }
            ].map((news, i) => (
              <Card key={i} className="bg-card border-border hover:border-primary transition-all cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon name={news.icon as any} className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <Badge className="mb-2 bg-primary/20 text-primary border-primary">{news.badge}</Badge>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{news.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        <Icon name="Clock" className="inline mr-1" size={14} />
                        {news.date}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="community" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            ПРИСОЕДИНЯЙСЯ К <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">СООБЩЕСТВУ</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Более 100K активных игроков уже с нами. Не упусти шанс стать частью легенды!
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { number: "100K+", label: "Игроков", icon: "Users" },
              { number: "500K+", label: "Зрителей", icon: "Eye" },
              { number: "10M₽", label: "Призовой фонд", icon: "Trophy" },
              { number: "24/7", label: "Онлайн", icon: "Zap" }
            ].map((stat, i) => (
              <Card key={i} className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <Icon name={stat.icon as any} className="text-primary mx-auto mb-3" size={32} />
                  <div className="text-3xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-lg px-8 py-6">
              <Icon name="MessageCircle" className="mr-2" />
              Discord
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-secondary text-secondary hover:bg-secondary/10">
              <Icon name="Send" className="mr-2" />
              Telegram
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-accent text-accent hover:bg-accent/10">
              <Icon name="Share2" className="mr-2" />
              VK
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
            Официальный игровой проект Меллстроя
          </p>
          <div className="flex gap-6 justify-center text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Правила</a>
            <a href="#" className="hover:text-primary transition-colors">Поддержка</a>
            <a href="#" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            © 2025 МЕЛЛСТРОЙ.ГЕЙМ. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
