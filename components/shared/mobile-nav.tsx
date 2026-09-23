"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { MenuIcon } from "lucide-react"
import { navLinks } from "./nav-bar"
import Link from "next/link"
import Image from "next/image"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="flex items-center p-2 md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          render={
            <Button variant="ghost" className="h-10 md:hidden">
              <MenuIcon />
            </Button>
          }
        ></SheetTrigger>

        <SheetContent side="left">
          <ul className="flex flex-col items-start gap-2 px-4 py-10">
            {navLinks.map((item) => (
              <li
                key={item.href}
                className="font-semibold text-muted-foreground"
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>

      <Link href="/">
        <Image
          src="/images/EnerAhorroLogo.png"
          alt="EnerAhorro Logo"
          width={140}
          height={50}
          className="ml-4"
          loading="eager"
          priority
        />
      </Link>
    </nav>
  )
}
