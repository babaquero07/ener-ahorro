import { Check } from "lucide-react"
import { ContactForm } from "@/components/home/contact-form"

export function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-linear-to-bl from-[#0F172A] via-[#064E3B] to-[#065F46]"
    >
      <div className="grid grid-cols-5 px-6 md:px-16">
        <div className="col-span-5 flex flex-col justify-center gap-6 py-16 xl:col-span-2">
          <span className="text-[14px] font-extrabold text-[#86EFAC]">
            AUDITORÍA GRATUITA
          </span>
          <h2 className="text-[44px]/13 font-extrabold text-white">
            Solicita tu auditoría energética gratuita hoy mismo
          </h2>
          <p className="text-lg text-[#D1FAE5]">
            Déjanos tus datos y un asesor energético te contactará para revisar
            tu caso sin compromiso. Ideal para particulares, empresas y
            comunidades en España.
          </p>
          <ul className="flex flex-col gap-3">
            <li className="flex gap-2">
              <Check className="size-5 text-[#86EFAC]" />{" "}
              <p className="font-bold text-white">
                Sin coste y sin permanencia
              </p>
            </li>
            <li className="flex gap-2">
              <Check className="size-5 text-[#86EFAC]" />{" "}
              <p className="font-bold text-white">
                Asesoramiento independiente
              </p>
            </li>
            <li className="flex gap-2">
              <Check className="size-5 text-[#86EFAC]" />{" "}
              <p className="font-bold text-white">
                Respuesta rápida y trato cercano
              </p>
            </li>
          </ul>
        </div>

        <div className="col-span-5 flex justify-center py-8 xl:col-span-3">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
