import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { statusPedido, marisqueiras } from "@/lib/mock-data";
import { Check, Phone } from "lucide-react";

export const Route = createFileRoute("/pedido")({
  head: () => ({ meta: [{ title: "Acompanhar pedido · Marisquei" }] }),
  component: Pedido,
});

function Pedido() {
  const m = marisqueiras[0];
  return (
    <AppShell title="Pedido #1042" back="/marketplace">
      <div className="rounded-2xl bg-gradient-sunset p-5 text-foreground shadow-warm">
        <p className="text-xs font-semibold uppercase">Chega em</p>
        <p className="font-display text-4xl font-bold">≈ 38 min</p>
        <p className="mt-1 text-sm">Estimativa baseada na maré e no trajeto.</p>
      </div>

      <div className="mt-5 flex items-center gap-3 rounded-2xl border border-border bg-card p-3">
        <img src={m.foto} alt={m.nome} className="h-14 w-14 rounded-full object-cover" width={600} height={600} />
        <div className="flex-1">
          <p className="text-xs text-muted-foreground">Sua marisqueira</p>
          <p className="font-semibold">{m.nome}</p>
        </div>
        <button className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-accent-foreground" aria-label="Ligar">
          <Phone className="h-5 w-5" />
        </button>
      </div>

      <h2 className="mt-6 mb-3 font-display text-lg font-bold">Status</h2>
      <ol className="relative space-y-4 border-l-2 border-dashed border-border pl-6">
        {statusPedido.map((s) => (
          <li key={s.label} className="relative">
            <span
              className={`absolute -left-[34px] flex h-7 w-7 items-center justify-center rounded-full ${
                s.done ? "bg-primary text-primary-foreground" : "border-2 border-border bg-background"
              }`}
            >
              {s.done && <Check className="h-4 w-4" />}
            </span>
            <p className={`text-sm font-semibold ${s.done ? "" : "text-muted-foreground"}`}>{s.label}</p>
            <p className="text-xs text-muted-foreground">{s.time}</p>
          </li>
        ))}
      </ol>

      <div className="mt-6 rounded-2xl bg-secondary p-4 text-sm">
        <p className="font-semibold">Resumo</p>
        <div className="mt-2 flex justify-between text-muted-foreground"><span>1 dúzia ostras nativas</span><span>R$ 38,00</span></div>
        <div className="flex justify-between text-muted-foreground"><span>2 kg sururu na casca</span><span>R$ 28,00</span></div>
        <div className="flex justify-between text-muted-foreground"><span>Frete + taxa</span><span>R$ 14,50</span></div>
        <div className="mt-2 flex justify-between font-display font-bold"><span>Total</span><span>R$ 80,50</span></div>
      </div>

      <Link to="/marketplace" className="mt-5 block text-center text-sm font-semibold text-primary">
        Voltar ao marketplace
      </Link>
    </AppShell>
  );
}
