"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "@/components/ui/toast"
import { ArrowRightIcon, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupTextarea } from "@/components/ui/input-group"

const formSchema = z.object({
  name: z
    .string()
    .min(3, "El nombre debe tener mínimo 3 caracteres.")
    .max(32, "El nombre debe tener máximo 32 caracteres."),
  phone: z
    .string()
    .regex(/^\d+$/, { message: "El teléfono debe ser un número" })
    .min(7, {
      message: "El teléfono debe tener al menos 7 dígitos",
    })
    .max(10, {
      message: "El teléfono debe tener máximo 10 dígitos",
    }),
  email: z
    .email({ message: "El correo electrónico es inválido" })
    .min(6, {
      message: "El correo electrónico debe tener al menos 6 caracteres",
    })
    .max(50, {
      message: "El correo electrónico debe tener menos de 50 caracteres",
    }),
  clientType: z.enum(["Particular", "Empresa", "Comunidad"]),
  message: z.string().optional(),
})

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      clientType: "Particular",
      message: "",
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast.add({
      type: "success",
      title: "Formulario enviado",
      description:
        "¡Gracias por escribirnos! Hemos recibido tu formulario y pronto nos pondremos en contacto contigo.",
    })
  }

  return (
    <Card className="w-full rounded-xl p-4 md:max-w-178">
      <CardHeader>
        <CardTitle className="text-2xl font-extrabold">
          Datos para tu consulta
        </CardTitle>
        <CardDescription className="text-base text-muted-foreground">
          Completa el formulario y te llamaremos para empezar a ahorrar.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <FieldGroup>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel className="font-bold">Nombre</FieldLabel>
                  <Input
                    {...field}
                    className="h-12 border-[#e1e8f0] bg-[#F8FAFC] focus:border-none"
                    aria-invalid={fieldState.invalid}
                    placeholder="Tu nombre completo"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel className="font-bold">Teléfono</FieldLabel>
                  <Input
                    {...field}
                    className="h-12 border-[#e1e8f0] bg-[#F8FAFC] focus:border-none"
                    aria-invalid={fieldState.invalid}
                    placeholder="Ej. 600 000 000"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel className="font-bold">Email</FieldLabel>
                  <Input
                    {...field}
                    className="h-12 border-[#e1e8f0] bg-[#F8FAFC] focus:border-none"
                    aria-invalid={fieldState.invalid}
                    placeholder="tu@email.com"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="clientType"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel className="font-bold">Tipo de Cliente</FieldLabel>
                  <div className="grid grid-cols-3 gap-3">
                    {(["Particular", "Empresa", "Comunidad"] as const).map(
                      (option) => {
                        const isSelected = field.value === option

                        return (
                          <Button
                            key={option}
                            onClick={() => field.onChange(option)}
                            className={cn(
                              "h-12 rounded-lg border text-sm font-bold transition-colors",
                              isSelected
                                ? "border-primary bg-primary/5 text-[#047857] hover:text-white"
                                : "border-[#e1e8f0] bg-[#F8FAFC] text-muted-foreground hover:bg-[#F1F5F9]"
                            )}
                          >
                            {option}
                          </Button>
                        )
                      }
                    )}
                  </div>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel className="font-bold">
                    Mensaje / Comentarios (opcional)
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      placeholder="Cuéntanos si tienes una factura reciente o una necesidad concreta."
                      rows={6}
                      className="min-h-20 resize-none"
                      aria-invalid={fieldState.invalid}
                    />
                  </InputGroup>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>

          <div className="mt-4 flex flex-col gap-4 border-none bg-none">
            <Button
              type="submit"
              className="w-full cursor-pointer p-6 font-semibold text-white hover:bg-primary/90"
              variant="default"
            >
              Enviar solicitud y ahorrar
              <ArrowRightIcon className="size-4" />
            </Button>

            <span className="text-xs text-muted-foreground">
              Al enviar aceptas recibir información relacionada con tu
              solicitud. Trataremos tus datos conforme a la normativa RGPD.
            </span>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
