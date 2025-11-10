import Link from "next/link"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { ArrowLeft, Send, Sparkles, UserRound } from "lucide-react"

const messages = [
  {
    id: 1,
    sender: "guest",
    avatar: "JR",
    text: "Hola, buen día. ¿Podrían confirmar mi reserva para un masaje relajante?",
    time: "10:12",
  },
  {
    id: 2,
    sender: "concierge",
    avatar: "HA",
    text: "¡Hola Julieta! Claro, tu reserva está agendada para las 17:30 h en el Spa Aurora. ¿Deseas ajustar la hora?",
    time: "10:14",
  },
  {
    id: 3,
    sender: "guest",
    avatar: "JR",
    text: "Perfecto, gracias. ¿Podrían enviar un té de jazmín a la habitación antes del spa?",
    time: "10:15",
  },
  {
    id: 4,
    sender: "concierge",
    avatar: "HA",
    text: "Ya está en camino. Llegará en 15 minutos. ¿Hay algo más en lo que podamos ayudarte?",
    time: "10:17",
  },
]

export default function ChatPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-950 via-slate-950 to-zinc-900 p-4 text-foreground sm:p-6 md:p-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_55%)]" />
      <div className="pointer-events-none absolute -left-24 top-24 size-[22rem] rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-16 size-[18rem] rounded-full bg-emerald-500/15 blur-3xl" />

      <Card className="relative z-10 flex w-full max-w-[32rem] flex-col rounded-[32px] border-white/10 bg-white/85 text-zinc-900 shadow-[0_25px_90px_rgba(9,9,11,0.65)] backdrop-blur-2xl">
        <CardHeader className="flex items-center justify-between gap-4 rounded-t-[32px] bg-gradient-to-r from-primary/15 via-primary/10 to-transparent px-5 py-5">
          <div className="flex items-center gap-3">
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="rounded-full border border-white/60 bg-white/80 text-zinc-700 shadow-sm transition hover:bg-white"
            >
              <Link href="/">
                <ArrowLeft className="size-5" />
              </Link>
            </Button>
            <div className="flex flex-col">
              <CardTitle className="text-lg font-semibold text-zinc-900">
                Chat con recepción
              </CardTitle>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <span className="inline-flex size-2.5 rounded-full bg-emerald-500" />
                Disponible ahora
              </span>
            </div>
          </div>

          <Badge
            variant="secondary"
            className="rounded-full bg-black/80 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white"
          >
            Aurora Care
          </Badge>
        </CardHeader>

        <CardContent className="flex flex-1 flex-col gap-4 px-4 py-5 sm:px-6">
          <div className="flex items-center gap-2 self-center rounded-full bg-white/80 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            <Sparkles className="size-3 text-primary" />
            Chat privado
          </div>

          <div className="flex max-h-[24rem] flex-1 flex-col gap-4 overflow-y-auto pr-1">
            {messages.map((message) => {
              const isGuest = message.sender === "guest"
              return (
                <div
                  key={message.id}
                  className={cn(
                    "flex items-end gap-3",
                    isGuest ? "justify-end text-right" : "justify-start text-left"
                  )}
                >
                  {!isGuest && (
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary font-semibold">
                      <UserRound className="size-5" />
                    </div>
                  )}

                  <div
                    className={cn(
                      "max-w-[75%] rounded-3xl px-4 py-3 text-sm shadow-sm",
                      isGuest
                        ? "rounded-br-sm bg-primary text-primary-foreground"
                        : "rounded-bl-sm bg-white/90 text-zinc-800"
                    )}
                  >
                    <p className="leading-6">{message.text}</p>
                    <span className="mt-2 block text-xs text-white/80">
                      {message.time}
                    </span>
                  </div>

                  {isGuest && (
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-semibold">
                      {message.avatar}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-3 border-t border-white/60 bg-white/70 px-4 py-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="inline-flex size-2 rounded-full bg-emerald-500" />
            El concierge suele responder en menos de 1 minuto.
          </div>

          <form className="flex items-center gap-3 rounded-[24px] border border-white/80 bg-white/90 px-4 py-2 shadow-sm">
            <input
              type="text"
              placeholder="Escribe tu mensaje..."
              className="flex-1 bg-transparent text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none"
            />
            <Button type="button" className="h-10 rounded-2xl px-4 text-sm font-semibold">
              Enviar
              <Send className="ml-2 size-4" />
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  )
}

