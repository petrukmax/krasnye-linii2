import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-archive.jpg";
import { blocks, formatDate, getMaterialsByBlock, materials } from "@/data/archive";

const title = "Красные линии — архив первоисточников 2007–2024";
const description =
  "Речи, лекции и интервью, без которых нельзя понять истоки нынешнего противостояния. Четыре блока документов с 2007 по 2024 год.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  const latest = [...materials].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 4);

  return (
    <main>
      {/* Hero */}
      <section className="relative mx-auto mt-8 max-w-6xl overflow-hidden border border-border/60 sm:mt-10">
        <img
          src={heroImage}
          alt="Тёмный архивный кабинет: стол с документами, старая карта на стене"
          className="h-[70vh] min-h-[420px] w-full object-cover sm:h-[78vh]"
          fetchPriority="high"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 md:p-14">
          <p className="eyebrow">Читальный зал</p>
          <h2 className="mt-3 max-w-2xl font-serif text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl">
            Четыре блока документов, <em className="text-gold">одна линия</em> развития событий
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Архив собирает ключевые публичные тексты — от Мюнхена 2007 года до интервью 2024-го — с датами,
            контекстом и ссылками на оригиналы.
          </p>

          <nav aria-label="Блоки архива" className="mt-8 grid grid-cols-2 gap-px bg-border/60 lg:grid-cols-4">
            {blocks.map((b) => (
              <Link
                key={b.id}
                to="/blok/$blockId"
                params={{ blockId: b.id }}
                className="group bg-background/80 p-4 backdrop-blur-sm transition-colors hover:bg-accent sm:p-5"
              >
                <span className="eyebrow">Блок {b.numeral}</span>
                <span className="mt-2 block font-serif text-xl text-foreground group-hover:text-gold sm:text-2xl">
                  {b.title}
                </span>
                <span className="mt-1 block font-mono text-xs text-muted-foreground">{b.period}</span>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* Blocks overview */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Структура архива</p>
            <h2 className="mt-3 font-serif text-4xl text-foreground sm:text-5xl">Хронология в четырёх блоках</h2>
          </div>
          <span className="hidden font-mono text-xs text-muted-foreground sm:block">
            {materials.length} материалов
          </span>
        </div>
        <div className="gold-rule my-10" />
        <ol className="grid gap-6 md:grid-cols-2">
          {blocks.map((b) => {
            const items = getMaterialsByBlock(b.id);
            return (
              <li key={b.id}>
                <Link
                  to="/blok/$blockId"
                  params={{ blockId: b.id }}
                  className="archive-card flex h-full flex-col p-7 sm:p-9"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="font-serif text-6xl leading-none text-gold-dim">{b.numeral}</span>
                    <span className="font-mono text-xs text-muted-foreground">{b.period}</span>
                  </div>
                  <h3 className="mt-6 font-serif text-3xl text-foreground">{b.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.description}</p>
                  <span className="mt-6 eyebrow">
                    {items.length} {plural(items.length)} →
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      </section>

      {/* Recent */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="eyebrow">Последние по дате</p>
        <h2 className="mt-3 font-serif text-4xl text-foreground">Новые поступления</h2>
        <div className="gold-rule my-8" />
        <ul className="divide-y divide-border/60 border-y border-border/60">
          {latest.map((m) => (
            <li key={m.slug}>
              <Link
                to="/material/$slug"
                params={{ slug: m.slug }}
                className="group grid gap-2 py-5 transition-colors hover:bg-accent/60 sm:grid-cols-[9rem_1fr_auto] sm:items-baseline sm:gap-6 sm:px-3"
              >
                <span className="font-mono text-xs text-gold">{formatDate(m.date)}</span>
                <span className="font-serif text-xl text-foreground group-hover:text-gold">{m.title}</span>
                <span className="eyebrow text-muted-foreground">{m.type}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

function plural(n: number) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return "материал";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return "материала";
  return "материалов";
}
