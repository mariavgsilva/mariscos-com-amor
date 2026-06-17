import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Camera, User, MapPin, Users } from "lucide-react";

export const Route = createFileRoute("/marisqueira/cadastro")({
  head: () => ({ meta: [{ title: "Cadastro de marisqueira · Marisquei" }] }),
  component: Cadastro,
});

function Cadastro() {
  return (
    <AppShell title="Bem-vinda à Marisquei" subtitle="Passo 1 de 2 · seus dados">
      <div className="mb-5 h-1.5 overflow-hidden rounded-full bg-secondary">
        <div className="h-full w-1/2 rounded-full bg-primary" />
      </div>

      <div className="mb-6 flex flex-col items-center">
        <button className="flex h-24 w-24 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-warm">
          <Camera className="h-9 w-9" />
        </button>
        <p className="mt-2 text-sm font-semibold text-primary">Adicionar foto</p>
      </div>

      <div className="space-y-3">
        <Field icon={<User />} label="Seu nome" placeholder="Como gostaria de ser chamada" />
        <Field icon={<User />} label="CPF" placeholder="000.000.000-00" />
        <Field icon={<MapPin />} label="Cidade onde trabalha" placeholder="Igarassu, Itamaracá…" />

        <div className="rounded-2xl border border-border bg-card p-4">
          <p className="mb-3 flex items-center gap-2 text-sm font-semibold">
            <Users className="h-4 w-4 text-primary" /> Você faz parte de uma colônia?
          </p>
          <div className="grid grid-cols-2 gap-2">
            <Pill active>Sim, sou de colônia</Pill>
            <Pill>Trabalho sozinha</Pill>
          </div>
          <input
            placeholder="Nome da colônia (opcional)"
            className="mt-3 h-11 w-full rounded-xl bg-secondary px-3 text-sm outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <Field label="Conte um pouco de você" placeholder="Há quanto tempo marisca, o que mais gosta…" textarea />
      </div>

      <Link
        to="/marisqueira/questionario"
        className="mt-6 flex items-center justify-center rounded-2xl bg-primary py-4 font-display text-lg font-bold text-primary-foreground shadow-warm"
      >
        Continuar
      </Link>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Próxima etapa: um questionário rápido para entender suas necessidades de EPI.
      </p>
    </AppShell>
  );
}

const Field = ({
  icon, label, placeholder, textarea,
}: { icon?: React.ReactNode; label: string; placeholder: string; textarea?: boolean }) => (
  <label className="block">
    <span className="mb-1 ml-1 block text-xs font-semibold tracking-wide text-muted-foreground uppercase">{label}</span>
    <div className="relative">
      {icon && <span className="pointer-events-none absolute top-3.5 left-3 text-primary">{icon}</span>}
      {textarea ? (
        <textarea
          rows={3}
          placeholder={placeholder}
          className={`w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-primary ${icon ? "pl-10" : ""}`}
        />
      ) : (
        <input
          placeholder={placeholder}
          className={`h-12 w-full rounded-2xl border border-border bg-card px-4 text-sm outline-none focus:border-primary ${icon ? "pl-10" : ""}`}
        />
      )}
    </div>
  </label>
);

const Pill = ({ children, active }: { children: React.ReactNode; active?: boolean }) => (
  <button
    className={`rounded-xl px-3 py-3 text-sm font-semibold ${
      active ? "bg-primary text-primary-foreground shadow-soft" : "bg-secondary text-secondary-foreground"
    }`}
  >
    {children}
  </button>
);
