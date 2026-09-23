import { Activity, FileText, LucideIcon, Timer } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const problemsCards: {
  icon: LucideIcon
  title: string
  description: string
}[] = [
  {
    icon: Activity,
    title: "Precios Inestables",
    description:
      "Los cambios del mercado hacen difícil saber si estás pagando lo justo.",
  },
  {
    icon: FileText,
    title: "Tarifas Confusas",
    description:
      "Condiciones, potencias y horarios que complican cualquier comparación.",
  },
  {
    icon: Timer,
    title: "Falta de Tiempo para Comparar",
    description: "Revisar contratos y ofertas consume horas que no tienes.",
  },
]

export function ClientProblemSection() {
  return (
    <section className="flex flex-col items-center gap-8 p-16">
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-extrabold">
          ¿Cansado de pagar demasiado en tus facturas?
        </h2>
        <p className="text-left text-lg text-muted-foreground">
          Miles de clientes en España pierden dinero cada mes por no tener una
          tarifa adaptada a su consumo real.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 md:justify-start">
        {problemsCards.map((item, index) => {
          const { icon: Icon, title, description } = item

          return (
            <Card
              className="max-w-[418px] rounded-xl border border-[#e1e8f0]"
              key={index}
            >
              <CardHeader className="flex flex-col gap-4">
                <div className="flex size-14 items-center justify-center rounded-xl bg-red-50 p-2">
                  <Icon className="size-7 text-red-600" />
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
