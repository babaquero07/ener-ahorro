import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  CalendarCheck,
  CircleEuro,
  LucideIcon,
  SearchCheck,
} from "lucide-react"

const stepsCards: {
  stepNumber: number
  icon: LucideIcon
  title: string
  description: string
}[] = [
  {
    stepNumber: 1,
    icon: CalendarCheck,
    title: "Pides tu cita",
    description: "Rellena el formulario en 1 minuto.",
  },
  {
    stepNumber: 2,
    icon: SearchCheck,
    title: "Analizamos tu caso",
    description: "Revisamos tus facturas actuales y hábitos de consumo.",
  },
  {
    stepNumber: 3,
    icon: CircleEuro,
    title: "Empiezas a ahorrar",
    description: "Te presentamos la propuesta de ahorro y gestionamos todo.",
  },
]

function StepCard({
  data,
}: {
  data: {
    stepNumber: number
    icon: LucideIcon
    title: string
    description: string
  }
}) {
  const { stepNumber, icon: Icon, title, description } = data

  return (
    <Card className="min-w-96 rounded-xl px-4 py-8 md:min-w-115">
      <CardHeader className="flex flex-col items-center gap-4">
        <div className="flex size-18.5 items-center justify-center rounded-xl bg-[#0f1729]">
          <span className="text-4xl font-extrabold text-white">
            {stepNumber}
          </span>
        </div>
        <Icon className="size-8 text-[#047857]" />
        <CardTitle className="text-[22px] font-extrabold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

export function HowWorksIt() {
  return (
    <section
      id="how-it-works"
      className="flex flex-col gap-10 bg-[#F8FAFC] p-16"
    >
      <div className="flex w-full flex-col gap-4 text-center">
        <h2 className="text-4xl font-extrabold">
          Tu ahorro en tres simples pasos
        </h2>
        <p className="text-lg text-muted-foreground">
          Proceso rápido, acompañado y pensado para que no pierdas tiempo.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {stepsCards.map((step, index) => (
          <StepCard data={step} key={index} />
        ))}
      </div>
    </section>
  )
}
