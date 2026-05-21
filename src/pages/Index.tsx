import { Hero3DWebGL as Hero3D } from "@/components/hero-webgl"
import { FeaturesSection } from "@/components/features-section"
import { TechnologySection } from "@/components/technology-section"
import { ApplicationsTimeline } from "@/components/applications-timeline"
import { AboutSection } from "@/components/about-section"
import { SafetySection } from "@/components/safety-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { OrderForm } from "@/components/order-form"

export default function Index() {
  return (
    <div className="dark">
      <Navbar />
      <main>
        <Hero3D />
        <FeaturesSection />
        <section id="technology">
          <TechnologySection />
        </section>
        <ApplicationsTimeline />
        <AboutSection />
        <section id="safety">
          <SafetySection />
        </section>
        <TestimonialsSection />
        <section id="faq">
          <FAQSection />
        </section>
        <CTASection />
        <section id="order" className="py-24 bg-black">
          <div className="max-w-2xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-orbitron">Оформить заказ</h2>
              <p className="text-gray-400 text-lg">
                Загрузите файл, выберите материал — мы рассчитаем стоимость и свяжемся с вами
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <OrderForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}