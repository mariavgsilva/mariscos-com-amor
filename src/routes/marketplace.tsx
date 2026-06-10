import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { marisqueiras, produtos } from "@/lib/mock-data";
import { Search, MapPin, Sparkles } from "lucide-react";

export const Route = createFileRoute("/marketplace")({
  head: () => ({ meta: [{ title: "Marketplace · Marisquei" }] }),
  component: Marketplace,
});

function Marketplace() {
  return (
    <AppShell title="Marisco do dia" subtitle="Maragogipe e região" showCart cartCount={2}>
      <div className="relative mb-4">
        <Search className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          placeholder="Buscar marisqueira, colônia, marisco…"
          className="h-12 w-full rounded-2xl border border-border bg-card pr-4 pl-11 text-sm shadow-soft outline-none focus:border-primary"
        />
      </div>

      <div className="-mx-4 mb-5 flex gap-2 overflow-x-auto px-4 pb-1">
        {["Todos", "Ostras", "Sururu", "Misto", "Colônia Z-21", "Próximo a mim"].map((c, i) => (
          <button
            key={c}
            className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
              i === 0 ? "bg-primary text-primary-foreground shadow-soft" : "bg-secondary text-secondary-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mb-5 overflow-hidden rounded-2xl bg-gradient-sunset p-5 text-foreground shadow-warm">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase">
          <Sparkles className="h-4 w-4" /> Compra com impacto
        </div>
        <p className="mt-1 font-display text-lg leading-tight font-bold">
          A cada pedido, uma parte vira EPI para quem trabalha no mangue.
        </p>
      </div>

      <section>
        <SectionTitle>Marisqueiras por perto</SectionTitle>
        <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-3">
          {marisqueiras.map((m) => (
            <Link
              key={m.id}
              to="/marisqueira/$id"
              params={{ id: m.id }}
              className="flex w-32 flex-shrink-0 flex-col items-center text-center"
            >
              <div className="h-20 w-20 overflow-hidden rounded-full ring-2 ring-accent ring-offset-2 ring-offset-background">
                <img src={m.foto} alt={m.nome} className="h-full w-full object-cover" loading="lazy" width={600} height={600} />
              </div>
              <p className="mt-2 text-sm leading-tight font-semibold">{m.nome}</p>
              <p className="flex items-center justify-center gap-1 text-[11px] text-muted-foreground">
                <MapPin className="h-3 w-3" /> {m.localizacao.split(",")[0]}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-5">
        <SectionTitle>Frescos hoje</SectionTitle>
        <div className="grid grid-cols-2 gap-3">
          {produtos.map((p) => {
            const m = marisqueiras.find((x) => x.id === p.marisqueiraId)!;
            return (
              <Link
                key={p.id}
                to="/marisqueira/$id"
                params={{ id: p.marisqueiraId }}
                className="overflow-hidden rounded-2xl bg-card shadow-soft transition active:scale-[0.98]"
              >
                <div className="aspect-square overflow-hidden bg-secondary">
                  <img src={p.foto} alt={p.nome} className="h-full w-full object-cover" loading="lazy" width={800} height={800} />
                </div>
                <div className="p-3">
                  <p className="text-sm leading-tight font-bold">{p.nome}</p>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">{m.nome}</p>
                  <div className="mt-2 flex items-end justify-between">
                    <p className="font-display text-lg font-bold text-primary">
                      R$ {p.preco}
                      <span className="ml-0.5 text-[11px] font-normal text-muted-foreground">/{p.unidade}</span>
                    </p>
                    <span className="rounded-full bg-accent px-2 py-1 text-[11px] font-bold text-accent-foreground">+</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </AppShell>
  );
}

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-3 font-display text-lg font-bold">{children}</h2>
);
