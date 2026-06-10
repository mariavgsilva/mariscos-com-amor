import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { pedidosMarisqueira, produtos, marisqueiraImg } from "@/lib/mock-data";
import { Plus, Package, Wallet, ShoppingBag, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/marisqueira/painel")({
  head: () => ({ meta: [{ title: "Meu painel · Marisquei" }] }),
  component: Painel,
});

function Painel() {
  const seus = produtos.slice(0, 3);
  return (
    <AppShell back="/">
      <div className="-mx-4 -mt-5 mb-5 bg-gradient-sunset px-5 pt-6 pb-8">
        <div className="flex items-center gap-3">
          <img src={marisqueiraImg} alt="Sua foto" className="h-14 w-14 rounded-full border-2 border-background object-cover" width={600} height={600} />
          <div>
            <p className="text-xs uppercase">Olá,</p>
            <p className="font-display text-2xl leading-tight font-bold">Dona Jurema</p>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <Metric icon={<Wallet />} label="Hoje" value="R$ 184" />
          <Metric icon={<TrendingUp />} label="Semana" value="R$ 1.247" />
        </div>
      </div>

      <section className="mb-5">
        <Header title="Pedidos recebidos" />
        <div className="space-y-2">
          {pedidosMarisqueira.map((p) => (
            <div key={p.id} className="flex items-center gap-3 rounded-2xl bg-card p-3 shadow-soft">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <ShoppingBag className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <p className="text-sm font-bold">{p.id} · {p.cliente}</p>
                <p className="text-xs text-muted-foreground">{p.itens}</p>
              </div>
              <div className="text-right">
                <p className="font-display font-bold">R$ {p.valor}</p>
                <span
                  className={`mt-0.5 inline-block rounded-full px-2 py-0.5 text-[10px] font-bold ${
                    p.status === "Entregue"
                      ? "bg-secondary text-secondary-foreground"
                      : p.status === "A caminho"
                      ? "bg-accent text-accent-foreground"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  {p.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <Header title="Meus produtos" action="+ Novo" />
        <div className="space-y-2">
          {seus.map((p) => (
            <div key={p.id} className="flex items-center gap-3 rounded-2xl bg-card p-3 shadow-soft">
              <div className="h-14 w-14 overflow-hidden rounded-xl">
                <img src={p.foto} alt={p.nome} className="h-full w-full object-cover" loading="lazy" width={800} height={800} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold">{p.nome}</p>
                <p className="text-xs text-muted-foreground">R$ {p.preco}/{p.unidade} · estoque {p.estoque}</p>
              </div>
              <button className="text-xs font-bold text-primary">Editar</button>
            </div>
          ))}
        </div>
        <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-primary/40 py-4 text-sm font-bold text-primary">
          <Plus className="h-4 w-4" /> Cadastrar novo marisco
        </button>
      </section>

      <div className="mt-6 rounded-2xl bg-secondary p-4">
        <p className="flex items-center gap-2 text-sm font-bold">
          <Package className="h-4 w-4 text-primary" /> Kit de EPI a caminho
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          Pelo seu cadastro, sua prioridade é alta. Um kit (botas, luvas, chapéu) sai esta semana.
        </p>
      </div>
    </AppShell>
  );
}

const Metric = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="rounded-2xl bg-background/85 p-3 backdrop-blur">
    <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">{icon} {label}</div>
    <p className="mt-1 font-display text-xl font-bold">{value}</p>
  </div>
);

const Header = ({ title, action }: { title: string; action?: string }) => (
  <div className="mb-3 flex items-center justify-between">
    <h2 className="font-display text-lg font-bold">{title}</h2>
    {action && <button className="text-xs font-bold text-primary">{action}</button>}
  </div>
);
