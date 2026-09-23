import { CustomerBenefits } from "@/components/home/customer-benefits"
import { CustomerProblems } from "@/components/home/customer-problems"
import { Hero } from "@/components/home/hero"
import { HowWorksIt } from "@/components/home/how-works-it"
import { Solution } from "@/components/home/solution"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Asesoramiento Energético | Ahorra en tu Factura de Luz y Gas",
    template: "%s | EnerAhorro España",
  },
  description:
    "Optimiza tu tarifa eléctrica y de gas en España. Solicita una auditoría energética gratuita para tu hogar o empresa y empieza a ahorrar hoy mismo sin cambiar de compañía.",
  keywords: [
    "asesoramiento energético",
    "ahorrar luz España",
    "ahorrar gas",
    "auditoría energética gratuita",
    "eficiencia energética",
    "optimizar factura luz",
    "comparador de tarifas eléctricas",
  ],
  authors: [{ name: "EnerAhorro España" }],
  creator: "EnerAhorro España",
  publisher: "EnerAhorro España",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Asesoramiento Energético | Reduce tu Factura de Luz y Gas",
    description:
      "Descubre cómo reducir tus gastos de energía con nuestra revisión gratuita. Analizamos tu caso y te proponemos la mejor solución del mercado español.",
    url: "https://www.tu-dominio.es",
    siteName: "EnerAhorro España",
    images: [
      {
        url: "/public/images/EnerAhorroLogo.png",
        width: 1200,
        height: 630,
        alt: "Familia española ahorrando en su factura de luz tras recibir asesoría energética",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahorra en tu Factura de Luz y Gas | Asesoramiento Energético",
    description:
      "Solicita tu auditoría energética gratuita y empieza a pagar menos por la luz y el gas en España.",
    images: ["/public/images/EnerAhorroLogo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function Page() {
  return (
    <main className="flex h-full flex-col">
      <Hero />
      <CustomerProblems />
      <Solution />
      <CustomerBenefits />
      <HowWorksIt />
    </main>
  )
}
