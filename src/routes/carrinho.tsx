import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { produtos } from "@/lib/mock-data";
import { Minus, Plus, Trash2, MapPin, CreditCard, Truck } from "lucide-react";

export const Route = createFileRoute("/carrinho")({
  head: () => ({ meta: [{ title: "Carrinho · Marisquei" }] }),
  component: Carrinho,
});

function Carrinho() {
  const itens = [
    { ...produtos[0], qtd: 1 },
    { ...produtos[2], qtd: 2 },
  ];
  const subtotal = itens.reduce((s, i) => s + i.preco * i.qtd, 0);
  const frete = 12;
  const taxa = 2.5;
  const total = subtotal + frete + taxa;

  return (
    <AppShell title="Seu carrinho" back="/marketplace">
      <div className="space-y-3">
        {itens.map((p) => (
          <div key={p.id} className="flex gap-3 rounded-2xl bg-card p-3 shadow-soft">
            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl">
              <img src={p.foto} alt={p.nome} className="h-full w-full object-cover" loading="lazy" width={800} height={800} />
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-bold">{p.nome}</p>
                  <p className="text-xs text-muted-foreground">R$ {p.preco}/{p.unidade}</p>
                </div>
                <button className="text-muted-foreground hover:text-destructive" aria-label="Remover">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 rounded-full bg-secondary p-1">
                  <button className="flex h-7 w-7 items-center justify-center rounded-full bg-background text-primary">
                    <Minus className="h-3.5 w-3.5" />
                  </button>
                  <span className="w-5 text-center text-sm font-bold">{p.qtd}</span>
                  <button className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                </div>
                <p className="font-display font-bold">R$ {(p.preco * p.qtd).toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-6 space-y-3">
        <Row icon={<MapPin />} title="Entregar em" value="Rua das Acácias, 120 — Centro" action="Trocar" />
        <Row icon={<Truck />} title="Entrega" value="Hoje, 14h–17h" action="Mudar" />
        <Row icon={<CreditCard />} title="Pagamento" value="Pix · pagar na entrega" action="Trocar" />
      </section>

      <section className="mt-6 rounded-2xl bg-secondary p-4 text-sm">
        <Line label="Subtotal" value={subtotal} />
        <Line label="Frete (8 km)" value={frete} />
        <Line label="Taxa Marisquei · vira EPI" value={taxa} highlight />
        <div className="my-3 h-px bg-foreground/10" />
        <Line label="Total" value={total} bold />
      </section>

      <Link
        to="/pedido"
        className="mt-5 flex items-center justify-center rounded-2xl bg-primary py-4 font-display text-lg font-bold text-primary-foreground shadow-warm active:scale-[0.99]"
      >
        Finalizar pedido · R$ {total.toFixed(2)}
      </Link>
    </AppShell>
  );
}

const Row = ({ icon, title, value, action }: { icon: React.ReactNode; title: string; value: string; action: string }) => (
  <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">{icon}</span>
    <div className="flex-1">
      <p className="text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">{title}</p>
      <p className="text-sm font-semibold">{value}</p>
    </div>
    <button className="text-xs font-bold text-primary">{action}</button>
  </div>
);

const Line = ({ label, value, bold, highlight }: { label: string; value: number; bold?: boolean; highlight?: boolean }) => (
  <div className={`flex items-center justify-between py-1 ${bold ? "text-base font-display font-bold" : ""}`}>
    <span className={highlight ? "text-primary" : ""}>{label}</span>
    <span>R$ {value.toFixed(2)}</span>
  </div>
);
