import { Link } from "@tanstack/react-router";
import { blocks } from "@/data/archive";

export function SiteHeader() {
  return (
    <header className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-5 pt-8 pb-0 text-center sm:px-8">
        <p className="eyebrow">Архив первоисточников · 2007–2024</p>
        <Link to="/" className="mt-3 inline-block">
          <h1 className="font-serif text-5xl leading-none text-foreground sm:text-6xl md:text-7xl">
            Красные линии
          </h1>
        </Link>
        <p className="mx-auto mt-4 max-w-2xl font-serif text-lg italic text-muted-foreground sm:text-xl">
          Речи, лекции и интервью, без которых нельзя понять истоки нынешнего противостояния
        </p>
        <div className="gold-rule mx-auto mt-6 max-w-md" />
        <nav
          aria-label="Основная навигация"
          className="mt-2 flex flex-wrap justify-center gap-x-6 gap-y-2 sm:gap-x-9"
        >

          <Link to="/" className="nav-link" activeOptions={{ exact: true }}>
            Главная
          </Link>
          {blocks.map((b) => (
            <Link key={b.id} to="/blok/$blockId" params={{ blockId: b.id }} className="nav-link">
              Блок {b.numeral}
            </Link>
          ))}
          <Link to="/zerkala" className="nav-link">
            GitHub / uCoz
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span className="eyebrow">Красные линии · архив</span>
        <span>
          Материалы приводятся в аннотированном виде со ссылками на первоисточники. Аннотации носят
          редакторский характер.
        </span>
      </div>
    </footer>
  );
}
