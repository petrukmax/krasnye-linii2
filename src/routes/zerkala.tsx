import { createFileRoute } from "@tanstack/react-router";

const title = "GitHub / uCoz — зеркала архива «Красные линии»";
const description = "Исходный код архива на GitHub и историческая версия сайта на uCoz.";

export const Route = createFileRoute("/zerkala")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: MirrorsPage,
});

const mirrors = [
  {
    name: "GitHub",
    label: "Исходный код и данные архива",
    text: "Репозиторий с содержимым архива в структурированном виде. Изменения и дополнения принимаются через pull request.",
    href: "https://github.com",
  },
  {
    name: "uCoz",
    label: "Историческая версия сайта",
    text: "Прежняя версия «Красных линий», сохранённая для истории. Новые материалы туда не добавляются.",
    href: "https://ucoz.ru",
  },
];

function MirrorsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <p className="eyebrow">Зеркала и исходники</p>
      <h2 className="mt-3 font-serif text-5xl text-foreground">GitHub / uCoz</h2>
      <div className="gold-rule my-10" />
      <div className="grid gap-6 md:grid-cols-2">
        {mirrors.map((m) => (
          <a
            key={m.name}
            href={m.href}
            target="_blank"
            rel="noopener noreferrer"
            className="archive-card p-8"
          >
            <span className="eyebrow">{m.label}</span>
            <span className="mt-3 block font-serif text-4xl text-foreground">{m.name}</span>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
            <span className="mt-6 block font-mono text-xs text-gold">{m.href} ↗</span>
          </a>
        ))}
      </div>
    </main>
  );
}
