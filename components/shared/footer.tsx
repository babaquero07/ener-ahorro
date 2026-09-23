import { AtSign, Share2 } from "lucide-react"
import Link from "next/link"

const footerLinks = [
  {
    label: "Aviso legal",
    href: "#",
  },
  {
    label: "Privacidad",
    href: "#",
  },
  {
    label: "Cookies",
    href: "#",
  },
]

export function Footer() {
  const actualYear = new Date().getFullYear()

  return (
    <footer className="flex flex-col gap-8 bg-[#0f1729] px-8 py-8 md:px-16 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
      <div className="flex flex-col gap-1">
        <h4 className="text-[22px] font-extrabold text-white">
          EnerAhorro España
        </h4>
        <p className="text-sm text-muted-foreground">
          {"\u00A9"} {actualYear} EnerAhorro. Todos los derechos reservados.
        </p>
      </div>

      <ul className="flex items-center gap-8">
        {footerLinks.map((link) => (
          <li key={link.label} className="text-sm font-semibold text-white">
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <Link
          className="flex size-10 items-center justify-center rounded-xl bg-[#1E293B]"
          href="#"
        >
          <Share2 className="size-5 text-white" />
        </Link>
        <Link
          className="flex size-10 items-center justify-center rounded-xl bg-[#1E293B]"
          href="#"
        >
          <AtSign className="size-5 text-white" />
        </Link>
      </div>
    </footer>
  )
}
