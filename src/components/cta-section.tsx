import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <h2 className="text-5xl font-bold text-foreground mb-6 font-sans text-balance">Готовы напечатать вашу идею?</h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Загрузите 3D-модель прямо сейчас и получите мгновенный расчёт стоимости. Первый заказ — с
            приоритетной обработкой и персональной поддержкой.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#order">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 pulse-button text-lg px-8 py-4"
              >
                Заказать печать
              </Button>
            </a>
            <a href="#order">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 bg-transparent"
              >
                Узнать стоимость
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}