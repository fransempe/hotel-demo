import Link from "next/link"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import {
  BedDouble,
  CalendarClock,
  Coffee,
  ConciergeBell,
  Flower,
  LogIn,
  LogOut,
  MessageCircle,
  Sparkles,
  ChevronRight,
} from "lucide-react"

const services = [
  {
    title: "Chat con recepción",
    description: "Habla en tiempo real con nuestro equipo 24/7.",
    icon: MessageCircle,
    href: "/chat",
  },
  {
    title: "Reservas de SPA",
    description: "Agenda tu ritual de bienestar con un toque de lujo.",
    icon: Flower,
    disabled: true,
  },
  {
    title: "Check-in express",
    description: "Completa tu llegada antes de pisar el lobby.",
    icon: LogIn,
    disabled: true,
  },
  {
    title: "Check-out rápido",
    description: "Gestiona tu salida sin filas ni esperas.",
    icon: LogOut,
    disabled: true,
  },
  {
    title: "Desayuno gourmet",
    description: "Elige tu menú favorito y prográmalo a tu habitación.",
    icon: Coffee,
    disabled: true,
  },
  {
    title: "Room service premium",
    description: "Sabores de autor servidos en la intimidad de tu suite.",
    icon: ConciergeBell,
    disabled: true,
  },
  {
    title: "Experiencias locales",
    description: "Reserva tours curados y eventos exclusivos.",
    icon: CalendarClock,
    disabled: true,
  },
]

const highlights = [
  { label: "Clima", value: "Soleado · 24 ºC" },
  { label: "Spa", value: "Libre 16:30 h" },
  { label: "Suite", value: "Panorámica · Piso 18" },
]

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-950 via-slate-950 to-zinc-900 p-4 text-foreground sm:p-6 md:p-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_55%)]" />
      <div className="pointer-events-none absolute -left-24 top-32 size-[22rem] rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 size-[18rem] rounded-full bg-emerald-500/15 blur-3xl" />

      <Card className="relative z-10 w-full max-w-[24rem] rounded-[36px] border-white/10 bg-white/75 p-0 text-zinc-900 shadow-[0_25px_90px_rgba(9,9,11,0.65)] backdrop-blur-2xl transition-transform duration-700 ease-out animate-in fade-in-50 zoom-in-95 sm:max-w-[28rem] md:max-w-[32rem]">
        <CardHeader className="space-y-6 pb-0 pt-9 sm:pt-10">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="rounded-full bg-black/80 px-4 py-1 text-[10px] uppercase tracking-[0.18em] text-white shadow-sm">
              Bienvenido de nuevo
            </Badge>
            <div className="flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 text-xs font-semibold text-zinc-600 shadow-inner">
              <Sparkles className="size-4 text-primary" />
              VIP Gold
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-5">
            <div className="flex size-16 items-center justify-center rounded-3xl bg-primary/15 text-primary shadow-inner sm:size-18">
              <BedDouble className="size-7 sm:size-8" />
            </div>
            <div className="space-y-1">
              <CardTitle className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
                Hotel Aurora
              </CardTitle>
              <CardDescription className="text-sm leading-5 text-zinc-600 sm:text-base">
                Escápate a la experiencia boutique frente al mar.
              </CardDescription>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-2xl bg-secondary/90 px-5 py-3 text-sm font-medium text-secondary-foreground shadow-lg shadow-secondary/40">
            <span>Habitación Panorámica · 1804</span>
            <span className="text-muted-foreground">Check-out 14:00</span>
          </div>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3">
            {highlights.map((highlight) => (
              <div
                key={highlight.label}
                className="rounded-2xl bg-white/80 px-3 py-2 text-left text-[11px] font-medium uppercase tracking-[0.08em] text-zinc-600 shadow-sm sm:text-[12px]"
              >
                <span className="block text-[9px] text-zinc-400">
                  {highlight.label}
                </span>
                <span className="mt-1 block text-[11px] text-zinc-700 sm:text-xs">
                  {highlight.value}
                </span>
              </div>
            ))}
          </div>
        </CardHeader>

        <CardContent className="space-y-6 px-4 pb-10 pt-7 sm:px-6 md:px-7">
          <div className="flex flex-col gap-5">
            {services.map((service, index) => {
              const Icon = service.icon
              const isDisabled = Boolean(service.disabled)
              const isChat = service.title === "Chat con recepción"
              const isSpa = service.title === "Reservas de SPA"

              const content = (
                <>
                  <div
                    className={cn(
                      "absolute inset-0 rounded-[30px] bg-gradient-to-r from-white/0 via-primary/4 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                      isChat && "opacity-100 from-primary/15 via-primary/8 to-primary/0",
                      isSpa && "opacity-100 from-emerald-100/30 via-emerald-100/20 to-transparent"
                    )}
                  />

                  <div className="relative flex min-w-0 flex-1 items-center gap-6 sm:gap-7">
                    <div
                      className={cn(
                        "flex size-14 shrink-0 items-center justify-center rounded-3xl bg-primary/12 text-primary shadow-inner shadow-primary/10 transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground sm:size-16",
                        isSpa && "bg-emerald-100/40 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white",
                        isChat && "bg-primary/12 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                      )}
                    >
                      <Icon className="size-[28px] sm:size-[32px]" strokeWidth={1.5} />
                    </div>
                    <div className="flex min-w-0 items-center text-left text-base font-semibold tracking-tight text-zinc-900 leading-tight whitespace-normal sm:text-lg">
                      <span className="line-clamp-2">{service.title}</span>
                    </div>
                  </div>

                  <div
                    className={cn(
                      "relative flex size-10 shrink-0 items-center justify-center rounded-full border border-white/60 bg-white/75 text-zinc-400 transition-all duration-300 group-hover:translate-x-1 group-hover:border-primary/40 group-hover:text-primary sm:size-11",
                      isSpa && "group-hover:border-emerald-400 group-hover:text-emerald-500",
                      isDisabled && "group-hover:translate-x-0"
                    )}
                  >
                    <ChevronRight className="size-[18px] sm:size-[20px]" strokeWidth={2} />
                  </div>
                </>
              )

              const buttonClass = cn(
                "group relative flex w-full max-w-full min-h-[108px] items-center justify-between gap-6 overflow-hidden rounded-[30px] border border-white/65 bg-white/90 px-5 py-6 text-left text-base font-semibold text-zinc-900 shadow-[0_12px_28px_rgba(9,9,11,0.16)] transition-all duration-300 sm:min-h-[116px] sm:px-7 md:min-h-[128px] md:gap-8",
                isDisabled
                  ? "cursor-not-allowed opacity-55 saturate-80"
                  : "hover:-translate-y-1 hover:border-white/80 hover:bg-white hover:shadow-[0_18px_40px_rgba(9,9,11,0.22)]",
                isSpa && "border-emerald-200/70 text-emerald-700",
                isChat && "border-primary/60 text-primary"
              )

              if (isChat && service.href) {
                return (
                  <Button
                    key={service.title}
                    asChild
                    variant="outline"
                    className={buttonClass}
                    style={{ animationDelay: `${index * 70}ms` }}
                  >
                    <Link href={service.href}>{content}</Link>
                  </Button>
                )
              }

              return (
                <Button
                  key={service.title}
                  variant="outline"
                  disabled={isDisabled}
                  className={buttonClass}
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  {content}
                </Button>
              )
            })}
          </div>

          <div className="rounded-3xl border border-primary/20 bg-gradient-to-r from-primary/15 via-primary/8 to-transparent p-5 text-sm text-muted-foreground shadow-inner sm:text-base">
            ¿Necesitas algo más? Nuestro concierge digital está listo para
            personalizar tu estancia con recomendaciones exclusivas.
          </div>

          <div className="grid gap-3">
            <Button className="h-12 w-full rounded-2xl bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-base font-semibold shadow-lg shadow-primary/30 hover:from-primary/95 hover:via-primary/80 hover:to-primary/75">
              Gestionar reservación
            </Button>
            <Button
              variant="ghost"
              className="h-11 w-full rounded-2xl border border-white/40 bg-white/20 text-base font-semibold text-zinc-700 backdrop-blur hover:bg-white/40"
            >
              Solicitar asistencia
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
