import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-gold">404</h1>
        <h2 className="mt-4 font-display text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground hover:opacity-90 transition-opacity"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Malhan Associates — Trusted Legal Counsel since 1998" },
      { name: "description", content: "Experienced advocates for civil, criminal, matrimonial, property and commercial matters. Clear counsel, strong representation, real results." },
      { name: "author", content: "Malhan Associates" },
      { property: "og:title", content: "Malhan Associates — Trusted Legal Counsel since 1998" },
      { property: "og:description", content: "Experienced advocates for civil, criminal, matrimonial, property and commercial matters. Clear counsel, strong representation, real results." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Malhan Associates — Trusted Legal Counsel since 1998" },
      { name: "twitter:description", content: "Experienced advocates for civil, criminal, matrimonial, property and commercial matters. Clear counsel, strong representation, real results." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4161e15e-c230-48de-a832-533480fabc7e/id-preview-73b0ba13--c19a0711-1887-46e4-bd67-de0865f5cc66.lovable.app-1777288208622.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4161e15e-c230-48de-a832-533480fabc7e/id-preview-73b0ba13--c19a0711-1887-46e4-bd67-de0865f5cc66.lovable.app-1777288208622.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
