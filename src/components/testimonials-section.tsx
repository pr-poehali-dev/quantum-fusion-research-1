import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Алексей Морозов",
    role: "Инженер-конструктор, TechDrive",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Загрузил модель вечером — утром получил подтверждение с точной ценой. Деталь пришла через 2 дня, качество отличное.",
  },
  {
    name: "Мария Соколова",
    role: "Основатель стартапа, SmartHome Lab",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Протестировали 5 итераций корпуса за 2 недели. Раньше это заняло бы полгода. Print3D Hub изменил скорость нашей разработки.",
  },
  {
    name: "Дмитрий Васильев",
    role: "Дизайнер продукции, Creative Studio",
    avatar: "/professional-woman-scientist.png",
    content:
      "Заказываю кастомные изделия для клиентов уже полгода. Качество стабильное, поддержка всегда помогает с выбором материала.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Что говорят клиенты</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Реальные отзывы инженеров, стартапов и дизайнеров, которые уже используют PLAip
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}