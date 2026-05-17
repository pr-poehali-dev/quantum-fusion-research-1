import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Загрузи файл — получи деталь",
    description: "Загружаете 3D-модель в STL или OBJ формате, выбираете материал и получаете готовую деталь с доставкой.",
    icon: "brain",
    badge: "Просто",
  },
  {
    title: "Мгновенный расчёт стоимости",
    description: "Цена рассчитывается автоматически на основе объёма, материала и сложности детали — без ожидания.",
    icon: "zap",
    badge: "Быстро",
  },
  {
    title: "Широкий выбор материалов",
    description: "PLA, ABS, PETG, нейлон, смола и металлические порошки — более 20 материалов для любых задач.",
    icon: "globe",
    badge: "Материалы",
  },
  {
    title: "Высокая точность печати",
    description: "Разрешение слоя от 0,05 мм — идеально для прототипов, инженерных деталей и дизайнерских изделий.",
    icon: "target",
    badge: "Точность",
  },
  {
    title: "Отслеживание заказа",
    description: "Следите за статусом вашего заказа в реальном времени: от старта печати до доставки на ваш адрес.",
    icon: "link",
    badge: "Контроль",
  },
  {
    title: "Гарантия качества",
    description: "Каждая деталь проходит контроль качества перед отправкой. Гарантируем соответствие вашему файлу.",
    icon: "lock",
    badge: "Гарантия",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Всё для вашего проекта</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            От загрузки файла до готовой детали — быстро, точно, без лишних сложностей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}