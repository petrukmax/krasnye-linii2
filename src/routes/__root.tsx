import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteFooter, SiteHeader } from "@/components/SiteHeader";

function NotFoundComponent() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
      <p className="eyebrow">Ошибка 404</p>
      <h2 className="mt-4 font-serif text-6xl text-foreground">Документ не найден</h2>
      <p className="mx-auto mt-4 max-w-md font-serif text-lg italic text-muted-foreground">
        Такой страницы в архиве нет, либо она была перемещена.
      </p>
      <div className="gold-rule mx-auto my-8 max-w-xs" />
      <Link to="/" className="nav-link inline-block border-b-gold text-gold">
        Вернуться на главную
      </Link>
    </main>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <main className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
      <p className="eyebrow">Ошибка</p>
      <h2 className="mt-4 font-serif text-4xl text-foreground">Страница не загрузилась</h2>
      <p className="mt-3 text-sm text-muted-foreground">Попробуйте обновить страницу или вернуться на главную.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-6">
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="nav-link text-gold"
        >
          Повторить
        </button>
        <a href="/" className="nav-link">
          На главную
        </a>
      </div>
    </main>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Красные линии" },
      { name: "theme-color", content: "#151311" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ru_RU" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/icons/icon-512.png" },
      { rel: "manifest", href: "/manifest.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=IBM+Plex+Sans:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <div className="flex-1">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </div>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
