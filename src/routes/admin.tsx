import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { adminMetrics, marisqueiras } from "@/lib/mock-data";
import { Users, ShieldAlert, ShoppingBag, Wallet, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Painel administrativo · Marisquei" }] }),
  component: Admin,
});

function Admin() {
  return (
    <AppShell title="Painel administrativo" subtitle="Visão geral do Marisquei">
      <div className="grid grid-cols-2 gap-3">
        <Card icon={<Users />} value={adminMetrics.marisqueiras} label="Marisqueiras" tone="primary" />
        <Card icon={<ShieldAlert />} value={adminMetrics.altaNecessidade} label="Alta necessidade EPI" tone="accent" />
        <Card icon={<ShoppingBag />} value={adminMetrics.pedidos.toLocaleString("pt-BR")} label="Pedidos" />
        <Card icon={<Wallet />} value={`R$ ${adminMetrics.receitaTaxa.toLocaleString("pt-BR")}`} label="Taxa arrecadada" />
      </div>

      <section className="mt-6">
        <h2 className="mb-3 font-display text-lg font-bold">Classificação de necessidade</h2>
        <div className="space-y-2">
          {marisqueiras.map((m) => (
            <div key={m.id} className="flex items-center gap-3 rounded-2xl bg-card p-3 shadow-soft">
              <img src={m.foto} alt={m.nome} className="h-11 w-11 rounded-full object-cover" width={600} height={600} />
              <div className="flex-1">
                <p className="text-sm font-bold">{m.nome}</p>
                <p className="text-xs text-muted-foreground">{m.localizacao}</p>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase ${
                  m.prioridade === "alta"
                    ? "bg-destructive text-destructive-foreground"
                    : m.prioridade === "media"
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-secondary-foreground"
                }`}
              >
                {m.prioridade}
              </span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6">
        <h2 className="mb-3 font-display text-lg font-bold">Ações</h2>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <ActionTile title="Aprovar cadastros" badge="7" />
          <ActionTile title="Gestão de produtos" />
          <ActionTile title="Gestão de usuários" />
          <ActionTile title="Entregas em andamento" badge="12" />
          <ActionTile title="Distribuir kits EPI" />
          <ActionTile title="Relatório de impacto" />
        </div>
      </section>
    </AppShell>
  );
}

const Card = ({ icon, value, label, tone }: { icon: React.ReactNode; value: React.ReactNode; label: string; tone?: "primary" | "accent" }) => (
  <div
    className={`rounded-2xl p-4 shadow-soft ${
      tone === "primary" ? "bg-primary text-primary-foreground" : tone === "accent" ? "bg-accent text-accent-foreground" : "bg-card"
    }`}
  >
    <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${tone ? "bg-background/20" : "bg-secondary"}`}>{icon}</span>
    <p className="mt-3 font-display text-2xl font-bold">{value}</p>
    <p className="text-xs opacity-80">{label}</p>
  </div>
);

const ActionTile = ({ title, badge }: { title: string; badge?: string }) => (
  <button className="relative rounded-2xl border border-border bg-card p-4 text-left font-semibold shadow-soft transition active:scale-[0.98]">
    {title}
    {badge && (
      <span className="absolute top-3 right-3 flex h-6 min-w-6 items-center justify-center rounded-full bg-primary px-1.5 text-[11px] font-bold text-primary-foreground">
        {badge}
      </span>
    )}
  </button>
);
