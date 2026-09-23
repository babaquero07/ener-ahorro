import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRightIcon,
  BadgeEuro,
  Gauge,
  LucideIcon,
  ReceiptText,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const solutionsCards: {
  icon: LucideIcon
  title: string
  description: string
}[] = [
  {
    icon: ReceiptText,
    title: "Revisión de facturas",
    description: "Analizamos luz y gas sin letra pequeña.",
  },
  {
    icon: Gauge,
    title: "Optimización de potencia",
    description: "Ajustamos lo contratado a tu consumo real.",
  },
  {
    icon: BadgeEuro,
    title: "Propuesta de ahorro",
    description: "Recibes una recomendación clara y accionable.",
  },
]

function SolutionCard({
  data,
}: {
  data: { icon: LucideIcon; title: string; description: string }
}) {
  const { icon: Icon, title, description } = data

  return (
    <div className="flex items-center gap-4 rounded-lg bg-[#F8FAFC] p-4">
      <div className="flex size-11.5 items-center justify-center rounded-xl bg-[#ebfcf4]">
        <Icon className="size-6 text-[#047857]" />
      </div>

      <div className="flex flex-col">
        <h4 className="text-lg font-extrabold">{title}</h4>
        <p className="font-medium text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

export function Solution() {
  return (
    <section className="grid w-full grid-cols-2 gap-12 bg-[#ebfcf4] px-16 py-32">
      <div className="col-span-2 flex flex-col gap-4 md:max-w-157.5 lg:col-span-1">
        <span className="text-sm font-extrabold text-[#047857]">
          NUESTRA SOLUCIÓN
        </span>
        <h2 className="text-4xl font-extrabold">
          Una Revisión Energética Gratuita y Sin Compromiso
        </h2>
        <p className="text-lg text-muted-foreground">
          Nuestros expertos analizan tus facturas, potencia contratada y hábitos
          de consumo para detectar ahorros ocultos y proponerte las mejores
          tarifas del mercado actual en España.
        </p>
        <Link href="#contact">
          <Button
            className="cursor-pointer p-6 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-primary/90"
            variant="default"
          >
            Quiero revisar mi factura <ArrowRightIcon className="size-4" />
          </Button>
        </Link>
      </div>

      <div className="col-span-2 lg:col-span-1">
        <Card className="rounded-xl border border-[#BBF7D0]">
          <CardContent className="flex flex-col gap-4 p-4">
            {solutionsCards.map((data, index) => (
              <SolutionCard data={data} key={index} />
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
