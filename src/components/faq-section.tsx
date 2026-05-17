import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Какие форматы файлов принимаются?",
      answer:
        "Мы принимаем STL, OBJ, STEP и 3MF. Если у вас другой формат — свяжитесь с нами, поможем конвертировать.",
    },
    {
      question: "Сколько времени занимает изготовление?",
      answer:
        "Стандартный срок — 2-5 рабочих дней в зависимости от сложности и материала. Доступна срочная печать за 24 часа.",
    },
    {
      question: "Как рассчитывается стоимость?",
      answer:
        "Цена зависит от объёма модели, выбранного материала и количества экземпляров. После загрузки файла система автоматически рассчитает стоимость — без скрытых платежей.",
    },
    {
      question: "Какие материалы доступны?",
      answer:
        "Мы предлагаем PLA, ABS, PETG, нейлон, TPU, смолу (Resin) и металлические порошки. Полный список с характеристиками доступен на странице заказа.",
    },
    {
      question: "Можно ли заказать без 3D-модели?",
      answer:
        "Да! Мы поможем создать модель по вашему эскизу или описанию. Свяжитесь с нашей командой, и мы обсудим детали.",
    },
    {
      question: "Как осуществляется доставка?",
      answer:
        "Доставляем по всей России. Детали упаковываются в защитную упаковку для безопасной транспортировки. Возможна самовывоз.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о заказе, материалах, сроках и доставке.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}