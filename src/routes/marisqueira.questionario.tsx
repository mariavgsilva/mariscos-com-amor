import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/marisqueira/questionario")({
  head: () => ({ meta: [{ title: "Questionário · Marisquei" }] }),
  component: Questionario,
});

function Questionario() {
  return (
    <AppShell title="Conte sobre seu trabalho" subtitle="Passo 2 de 2 · saúde e segurança" back="/marisqueira/cadastro">
      <div className="mb-5 h-1.5 overflow-hidden rounded-full bg-secondary">
        <div className="h-full w-full rounded-full bg-primary" />
      </div>

      <div className="mb-5 flex items-start gap-3 rounded-2xl bg-secondary p-4 text-sm">
        <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
        <p>
          Suas respostas são confidenciais e ajudam o Marisquei a direcionar kits de EPI para quem mais precisa.
        </p>
      </div>

      <div className="space-y-5">
        <Q label="Qual sua faixa de renda mensal?">
          <Choices items={["Até R$ 500", "R$ 500 – 1.000", "R$ 1.000 – 2.000", "Acima de R$ 2.000"]} />
        </Q>
        <Q label="Há quantos anos trabalha como marisqueira?">
          <Choices items={["Menos de 1", "1 a 5", "6 a 15", "Mais de 15"]} />
        </Q>
        <Q label="Quantos dias por semana você trabalha?">
          <Choices items={["1-2", "3-4", "5-6", "7"]} />
        </Q>
        <Q label="Já recebeu orientações de saúde e segurança no trabalho?">
          <Choices items={["Sim", "Não", "Pouca"]} />
        </Q>
        <Q label="Utiliza EPIs atualmente?">
          <Choices items={["Sempre", "Às vezes", "Quase nunca", "Não"]} />
        </Q>
        <Q label="Quais EPIs você já possui?">
          <MultiChoices items={["Botas", "Luvas", "Chapéu", "Protetor solar", "Avental impermeável", "Outros"]} />
        </Q>
        <Q label="Já sofreu acidentes relacionados ao trabalho?">
          <Choices items={["Nunca", "1 vez", "Mais de uma", "Prefiro não dizer"]} />
        </Q>
        <Q label="Tem dificuldade financeira para adquirir EPIs?">
          <Choices items={["Sim, muita", "Sim, alguma", "Não"]} />
        </Q>
      </div>

      <Link
        to="/marisqueira/painel"
        className="mt-7 flex items-center justify-center rounded-2xl bg-primary py-4 font-display text-lg font-bold text-primary-foreground shadow-warm"
      >
        Concluir cadastro
      </Link>
    </AppShell>
  );
}

const Q = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div>
    <p className="mb-2 font-display font-bold">{label}</p>
    {children}
  </div>
);

const Choices = ({ items }: { items: string[] }) => (
  <div className="grid grid-cols-2 gap-2">
    {items.map((c, i) => (
      <button key={c} className={`rounded-xl px-3 py-3 text-sm font-semibold ${i === 0 ? "bg-primary text-primary-foreground shadow-soft" : "bg-secondary"}`}>
        {c}
      </button>
    ))}
  </div>
);
