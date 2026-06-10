import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { parceiros } from "@/lib/mock-data";
import { Check, Handshake } from "lucide-react";

export const Route = createFileRoute("/parceiros")({
  head: () => ({ meta: [{ title: "Programa de parceiros · Marisquei" }] }),
  component: Parceiros,
});

function Parceiros() {
  return (
    <AppShell title="Parceiros" subtitle="Empresas que protegem quem trabalha na maré">
      <div className="rounded-2xl bg-gradient-sunset p-5 text-foreground shadow-warm">
        <Handshake className="h-7 w-7" />
        <p className="mt-2 font-display text-xl leading-tight font-bold">
          Sua marca veste quem alimenta o Brasil.
        </p>
        <p className="mt-1 text-sm">Três caminhos para apoiar marisqueiras com EPIs e visibilidade.</p>
      </div>

      <div className="mt-5 space-y-4">
        {parceiros.map((p) => (
          <article
            key={p.nome}
            className={`relative overflow-hidden rounded-3xl p-5 shadow-soft ${
              p.destaque ? "bg-card ring-2 ring-primary" : "bg-card"
            }`}
          >
            {p.destaque && (
              <span className="absolute top-4 right-4 rounded-full bg-primary px-3 py-1 text-[10px] font-bold tracking-wider text-primary-foreground uppercase">
                Mais escolhido
              </span>
            )}
            <div className={`mb-3 inline-block rounded-full bg-gradient-to-r ${p.cor} px-3 py-1 text-xs font-bold tracking-wider text-white uppercase`}>
              {p.nome}
            </div>
            <p className="font-display text-2xl font-bold">{p.preco}</p>
            <ul className="mt-3 space-y-2">
              {p.beneficios.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  {b}
                </li>
              ))}
            </ul>
            <button
              className={`mt-4 w-full rounded-2xl py-3 font-bold ${
                p.destaque
                  ? "bg-primary text-primary-foreground shadow-warm"
                  : "bg-secondary text-secondary-foreground"
              }`}
            >
              Quero ser parceira {p.nome}
            </button>
          </article>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-dashed border-border p-4 text-center text-xs text-muted-foreground">
        Já são 12 empresas no programa · 4 ton. de EPI distribuídas em 2025
      </div>
    </AppShell>
  );
}
