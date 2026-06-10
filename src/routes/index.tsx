import { createFileRoute, Link } from "@tanstack/react-router";
import { heroImg } from "@/lib/mock-data";
import { Shell, ShoppingBasket, Handshake } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marisquei — Mariscos direto do mangue" },
      { name: "description", content: "Compre mariscos frescos direto de marisqueiras e ajude a levar EPIs para quem mais precisa." },
      { property: "og:title", content: "Marisquei" },
      { property: "og:description", content: "Marketplace de impacto social com marisqueiras do Recôncavo." },
    ],
  }),
  component: Welcome,
});

function Welcome() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[440px] flex-col bg-background">
      <div className="relative h-[58vh] min-h-[440px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Marisqueira ao pôr do sol no manguezal"
          className="absolute inset-0 h-full w-full object-cover"
          width={1536}
          height={1024}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background" />
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
          <span className="rounded-full bg-background/80 px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase backdrop-blur">
            Impacto · Maré · Mangue
          </span>
        </div>
        <div className="absolute bottom-8 left-6 right-6">
          <h1 className="font-display text-5xl leading-[0.95] font-bold text-foreground">
            Marisquei
          </h1>
          <p className="mt-2 max-w-[20rem] text-sm leading-relaxed text-foreground/80">
            Marisco fresco direto do mangue. Cada compra ajuda a levar EPIs para quem trabalha na maré.
          </p>
        </div>
      </div>

      <div className="-mt-4 flex flex-1 flex-col gap-3 rounded-t-3xl bg-background px-5 pt-6 pb-8">
        <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
          Como você quer entrar?
        </p>

        <Link
          to="/marketplace"
          className="group flex items-center gap-4 rounded-2xl bg-primary p-5 text-primary-foreground shadow-warm transition active:scale-[0.99]"
        >
          <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-primary-foreground/15">
            <ShoppingBasket className="h-7 w-7" />
          </span>
          <div className="flex-1">
            <p className="font-display text-xl font-bold">Quero comprar</p>
            <p className="text-sm text-primary-foreground/80">Mariscos do dia, direto da maré.</p>
          </div>
          <span className="text-2xl transition group-hover:translate-x-1">→</span>
        </Link>

        <Link
          to="/marisqueira/cadastro"
          className="group flex items-center gap-4 rounded-2xl border-2 border-primary/15 bg-secondary p-5 text-secondary-foreground transition active:scale-[0.99]"
        >
          <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
            <Shell className="h-7 w-7" />
          </span>
          <div className="flex-1">
            <p className="font-display text-xl font-bold">Sou marisqueira</p>
            <p className="text-sm text-muted-foreground">Cadastre seus produtos e venda direto.</p>
          </div>
          <span className="text-2xl text-primary transition group-hover:translate-x-1">→</span>
        </Link>

        <Link
          to="/parceiros"
          className="mt-1 flex items-center gap-3 rounded-2xl bg-foreground/[0.04] px-5 py-4 text-sm font-medium text-foreground transition hover:bg-foreground/[0.07]"
        >
          <Handshake className="h-5 w-5 text-primary" />
          Para empresas: seja parceira fornecedora de EPIs
        </Link>

        <div className="mt-2 flex items-center justify-around rounded-2xl bg-gradient-tide px-3 py-3 text-center text-xs">
          <Stat n="142" label="marisqueiras" />
          <Divider />
          <Stat n="38" label="receberam EPI" />
          <Divider />
          <Stat n="1.2k" label="pedidos" />
        </div>
      </div>
    </div>
  );
}

const Stat = ({ n, label }: { n: string; label: string }) => (
  <div className="flex flex-col">
    <span className="font-display text-xl font-bold text-primary">{n}</span>
    <span className="text-muted-foreground">{label}</span>
  </div>
);
const Divider = () => <span className="h-8 w-px bg-foreground/10" />;
