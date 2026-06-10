import { Link } from "@tanstack/react-router";
import { ArrowLeft, ShoppingBasket } from "lucide-react";
import type { ReactNode } from "react";

export function AppShell({
  title,
  subtitle,
  back = "/",
  showCart = false,
  cartCount = 0,
  children,
  hero,
}: {
  title?: string;
  subtitle?: string;
  back?: string | false;
  showCart?: boolean;
  cartCount?: number;
  children: ReactNode;
  hero?: ReactNode;
}) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[440px] flex-col bg-background shadow-soft">
      <header className="sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-border bg-background/85 px-4 py-3 backdrop-blur">
        <div className="flex items-center gap-2">
          {back !== false ? (
            <Link
              to={back as string}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition hover:bg-accent"
              aria-label="Voltar"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
          ) : (
            <Link to="/" className="font-display text-lg font-bold text-primary">
              Marisquei
            </Link>
          )}
          {title && (
            <div className="ml-1">
              <h1 className="font-display text-base leading-tight font-semibold">{title}</h1>
              {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
            </div>
          )}
        </div>
        {showCart && (
          <Link
            to="/carrinho"
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft"
            aria-label="Carrinho"
          >
            <ShoppingBasket className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-[11px] font-bold text-accent-foreground">
                {cartCount}
              </span>
            )}
          </Link>
        )}
      </header>
      {hero}
      <main className="flex-1 px-4 py-5">{children}</main>
      <footer className="px-4 py-4 text-center text-[11px] text-muted-foreground">
        Marisquei · renda e proteção para quem vive do mangue
      </footer>
    </div>
  );
}
