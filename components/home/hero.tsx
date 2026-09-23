import { Button } from "@/components/ui/button"
import { ArrowRightIcon, ShieldCheck, Sparkles } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

const ctaCards: { title: string; description: string }[] = [
  {
    title: "+25%",
    description: "Ahorro medio detectado",
  },
  {
    title: "24h",
    description: "Respuesta de asesor",
  },
  {
    title: "0€",
    description: "Coste de revisión",
  },
]

export function Hero() {
  return (
    <section className="w-full bg-linear-to-r from-[#F8FAF9] via-[#ECFDF5] to-white">
      <div className="grid grid-cols-2 px-16 py-2">
        <div className="col-span-2 flex flex-col gap-6 lg:col-span-1">
          <Badge
            variant="outline"
            className="border-[#bcf7d1] bg-white px-4 py-4 font-bold text-[#047857]"
          >
            <Sparkles /> Auditoría gratuita para hogares y empresas
          </Badge>

          <h1 className="text-4xl leading-10 font-extrabold md:text-6xl md:leading-16">
            Ahorra en tu factura de Luz y Gas en España con Asesoramiento
            Energético Profesional
          </h1>

          <p className="text-xl text-muted-foreground">
            Analizamos tu consumo gratis, optimizamos tu tarifa y reducimos tus
            gastos sin cambiar de compañía. Solicita tu auditoría energética
            gratuita hoy.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="#contact">
              <Button
                className="cursor-pointer p-6 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-primary/90"
                variant="default"
              >
                Solicitar mi consulta gratuita{" "}
                <ArrowRightIcon className="size-4" />
              </Button>
            </Link>

            <Button variant="outline" className="p-6 font-bold hover:bg-white">
              <ShieldCheck className="size-5 text-[#047857]" />
              Sin compromiso
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
            {ctaCards.map((card, index) => (
              <Card
                className="min-w-52 rounded-xl border border-[#e1e8f0]"
                key={index}
              >
                <CardHeader>
                  <CardTitle className="text-4xl font-extrabold text-[#047857]">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-[13px] font-semibold text-muted-foreground">
                  {card.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="col-span-2 hidden items-center justify-center md:flex lg:col-span-1">
          <Image
            src="/images/HeroEnergyDashboardVisual.png"
            alt="hero image"
            width={560}
            height={500}
            className="h-125 w-auto md:w-140"
            loading="eager"
            priority
          />
        </div>
      </div>
    </section>
  )
}
