import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { marisqueiras, produtos } from "@/lib/mock-data";
import { MapPin, Shell, Star } from "lucide-react";

export const Route = createFileRoute("/marisqueira/$id")({
  head: ({ params }) => ({ meta: [{ title: `${params.id} · Marisquei` }] }),
  component: PerfilMarisqueira,
  notFoundComponent: () => <div className="p-8 text-center">Marisqueira não encontrada.</div>,
  errorComponent: () => <div className="p-8 text-center">Erro ao carregar.</div>,
  loader: ({ params }) => {
    const m = marisqueiras.find((x) => x.id === params.id);
    if (!m) throw notFound();
    return { marisqueira: m };
  },
});

function PerfilMarisqueira() {
  const { marisqueira: m } = Route.useLoaderData();
  const seus = produtos.filter((p) => p.marisqueiraId === m.id);
  return (
    <AppShell back="/marketplace" showCart cartCount={2}>
      <div className="-mx-4 -mt-5 mb-5 overflow-hidden bg-gradient-sunset px-4 pt-6 pb-8">
        <div className="flex items-center gap-4">
          <div className="h-24 w-24 overflow-hidden rounded-3xl border-4 border-background shadow-warm">
            <img src={m.foto} alt={m.nome} className="h-full w-full object-cover" width={600} height={600} />
          </div>
          <div className="flex-1 text-foreground">
            <h1 className="font-display text-2xl leading-tight font-bold">{m.nome}</h1>
            <p className="mt-1 flex items-center gap-1 text-sm">
              <MapPin className="h-4 w-4" /> {m.localizacao}
            </p>
            {m.colonia && (
              <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-background/70 px-2 py-0.5 text-[11px] font-semibold backdrop-blur">
                <Shell className="h-3 w-3" /> {m.colonia}
              </span>
            )}
          </div>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-foreground/85">{m.bio}</p>
        <div className="mt-3 flex items-center gap-3 text-xs text-foreground/80">
          <span className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-current" /> 4.9 · 87 avaliações
          </span>
          <span>•</span>
          <span>Entrega na região</span>
        </div>
      </div>

      <h2 className="mb-3 font-display text-lg font-bold">Catálogo</h2>
      <div className="space-y-3">
        {seus.map((p) => (
          <div key={p.id} className="flex gap-3 rounded-2xl bg-card p-3 shadow-soft">
            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl">
              <img src={p.foto} alt={p.nome} className="h-full w-full object-cover" loading="lazy" width={800} height={800} />
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <div>
                <p className="text-sm font-bold">{p.nome}</p>
                <p className="text-xs text-muted-foreground">{p.descricao}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-display font-bold text-primary">
                  R$ {p.preco}
                  <span className="text-[11px] font-normal text-muted-foreground">/{p.unidade}</span>
                </p>
                <button className="rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-primary-foreground">
                  Adicionar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link
        to="/carrinho"
        className="mt-6 flex items-center justify-center rounded-2xl bg-accent py-4 font-display text-lg font-bold text-accent-foreground shadow-warm"
      >
        Ver carrinho
      </Link>
    </AppShell>
  );
}
