import {
  Leaf,
  LockOpen,
  LucideIcon,
  PiggyBank,
  RefreshCcw,
  SlidersHorizontal,
  UserCheck,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const benefitsCards: {
  icon: LucideIcon
  title: string
  description: string
}[] = [
  {
    icon: PiggyBank,
    title: "Ahorro Real desde el primer mes",
    description:
      "Detectamos oportunidades concretas para reducir tu gasto mensual.",
  },
  {
    icon: SlidersHorizontal,
    title: "Tarifas 100% Personalizadas",
    description:
      "No recomendamos paquetes genéricos: elegimos según tu consumo.",
  },
  {
    icon: UserCheck,
    title: "Asesor Experto Dedicado",
    description: "Tendrás una persona de referencia para resolver dudas.",
  },
  {
    icon: RefreshCcw,
    title: "Gestión Completa del Cambio",
    description: "Si conviene cambiar, te acompañamos en todo el proceso.",
  },
  {
    icon: LockOpen,
    title: "Servicio Gratuito y Sin Permanencia",
    description: "Sin coste inicial, sin permanencia y sin compromiso.",
  },
  {
    icon: Leaf,
    title: "Eficiencia y sostenibilidad",
    description:
      "Menos consumo innecesario y decisiones energéticas más responsables.",
  },
]

export function CustomerBenefits() {
  return (
    <section id="services" className="flex flex-col gap-8 p-16">
      <div className="flex w-full flex-col gap-4 text-center">
        <h2 className="text-4xl font-extrabold">
          ¿Qué obtienes con nuestro asesoramiento?
        </h2>
        <p className="text-lg text-muted-foreground">
          Un servicio transparente, gratuito y enfocado en resultados medibles
          desde el primer mes.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 lg:justify-start">
        {benefitsCards.map((item, index) => {
          const { icon: Icon, title, description } = item

          return (
            <Card
              className="max-w-104.5 rounded-xl border border-[#e1e8f0] px-4 py-6"
              key={index}
            >
              <CardHeader className="flex flex-col gap-4">
                <div className="flex size-14 items-center justify-center rounded-xl bg-[#ebfcf4]">
                  <Icon className="size-7 text-[#047857]" />
                </div>

                <CardTitle className="text-xl font-extrabold">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
