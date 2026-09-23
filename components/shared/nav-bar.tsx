import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const navLinks = [
  {
    label: "Servicios",
    href: "#services",
  },
  {
    label: "Cómo funciona",
    href: "#how-it-works",
  },
  {
    label: "Contacto",
    href: "#contact",
  },
]

export function NavBar() {
  return (
    <nav className="hidden items-center justify-between border-b px-8 py-4 md:flex">
      <Link href="/">
        <Image
          src="/images/EnerAhorroLogo.png"
          alt="EnerAhorro Logo"
          width={190}
          height={60}
          className="h-9 w-40"
          loading="eager"
          priority
        />
      </Link>

      <ul className="flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link.href} className="font-semibold text-muted-foreground">
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      <Link href="#contact">
        <Button
          className="cursor-pointer p-6 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-primary/90"
          variant="default"
        >
          Consulta gratis <ArrowRightIcon className="size-4" />
        </Button>
      </Link>
    </nav>
  )
}
