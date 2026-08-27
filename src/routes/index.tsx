import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import logo from "@/assets/logo-transparent.png";
import heroHd from "@/assets/hero-hd.jpg";
import kitchen1 from "@/assets/image-2.png";
import kitchen2 from "@/assets/image-3.png";
import kitchen3 from "@/assets/image-4.png";
import living1 from "@/assets/image-5.png";
import living2 from "@/assets/image-6.png";
import kitchen4 from "@/assets/image-7.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Otimizare | Móveis sob medida em Harmonia" },
      {
        name: "description",
        content:
          "Móveis planejados sob medida em Harmonia e região. Cozinhas, dormitórios, home theaters e ambientes comerciais do projeto à instalação final.",
      },
      { property: "og:title", content: "Otimizare | Móveis sob medida" },
      {
        property: "og:description",
        content:
          "Móveis planejados sob medida em Harmonia e região. Projetos que unem madeira, luz e função, do projeto à instalação final.",
      },
      { property: "og:url", content: "https://www.otimizaremoveis.com.br" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Otimizare | Móveis sob medida" },
      {
        name: "twitter:description",
        content:
          "Móveis planejados sob medida em Harmonia e região, do projeto à instalação final.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://www.otimizaremoveis.com.br" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Otimizare",
          url: "https://www.otimizaremoveis.com.br",
          telephone: "+555197893210",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Arthur Rech, 61 — Bairro Morro Azul",
            addressLocality: "Harmonia",
            addressRegion: "RS",
            addressCountry: "BR",
          },
          areaServed: [
            { "@type": "City", name: "Harmonia", addressRegion: "RS", addressCountry: "BR" },
            { "@type": "Place", name: "Bairro Morro Azul", containedInPlace: { "@type": "City", name: "Harmonia" } },
          ],
          sameAs: [
            "https://wa.me/555197893210",
            "https://maps.app.goo.gl/8uKxgtFM2FaahStN6",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Móveis planejados sob medida",
          provider: { "@type": "LocalBusiness", name: "Otimizare", url: "https://www.otimizaremoveis.com.br" },
          areaServed: [
            { "@type": "City", name: "Harmonia", addressRegion: "RS", addressCountry: "BR" },
            { "@type": "Place", name: "Bairro Morro Azul", containedInPlace: { "@type": "City", name: "Harmonia" } },
          ],
          description:
            "Cozinhas, dormitórios, home theaters, closets e ambientes comerciais projetados, fabricados e instalados sob medida em Harmonia e região.",
        }),
      },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/555197893210";
const PHONE_LABEL = "+55 51 9789-3210";

const projetos = [
  { src: kitchen1, title: "Cozinha Carvalho", tag: "Cozinha integrada" },
  { src: kitchen2, title: "Ilha Ripada", tag: "Cozinha gourmet" },
  { src: living1, title: "Painel Luz Quente", tag: "Home theater" },
  { src: kitchen3, title: "Provençal Areia", tag: "Cozinha clássica" },
  { src: living2, title: "Living Vertical", tag: "Sala de estar" },
  { src: kitchen4, title: "Azul Profundo", tag: "Cozinha assinada" },
];

const etapas = [
  { n: "01", t: "Escuta", d: "Visita técnica, medidas milimétricas e entendimento da rotina da casa." },
  { n: "02", t: "Projeto", d: "Desenho 3D, seleção de lâminas, ferragens e iluminação embutida." },
  { n: "03", t: "Marcenaria", d: "Produção com controle de acabamento peça a peça, sem improviso." },
  { n: "04", t: "Instalação", d: "Montagem limpa, ajuste fino e entrega do ambiente pronto para uso." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6 sm:py-4 md:flex md:justify-between">
          <a href="#topo" className="flex min-w-0 items-center gap-2 sm:gap-3">
            <img src={logo} alt="Logotipo Otimizare" className="h-8 w-8 shrink-0 rounded-sm sm:h-9 sm:w-9" />
            <span className="truncate font-display text-base tracking-[0.2em] text-sand sm:text-xl sm:tracking-[0.3em]">
              OTIMIZARE
            </span>
          </a>
          <div className="hidden items-center gap-9 text-sm text-muted-foreground md:flex">
            <a className="transition-colors hover:text-primary" href="#projetos">Projetos</a>
            <a className="transition-colors hover:text-primary" href="#processo">Processo</a>
            <a className="transition-colors hover:text-primary" href="#contato">Contato</a>
          </div>
          <a
            href={WHATSAPP}
            className="shrink-0 whitespace-nowrap rounded-full border border-primary/60 px-3.5 py-2 text-[10px] tracking-[0.15em] text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground sm:px-5 sm:text-xs sm:tracking-[0.2em]"
          >
            Orçamento
          </a>
        </nav>
      </header>


      <main id="topo">
        {/* Hero */}
        <section className="relative flex min-h-[100svh] items-end overflow-hidden">
          <img
            src={heroHd}
            alt="Cozinha planejada em madeira com bancada e banquetas"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundImage: "var(--gradient-veil)" }} />
          <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-32 sm:px-6 md:pb-24 md:pt-40">
            <p className="label-caps animate-rise">Móveis sob medida · Harmonia / RS</p>
            <h1 className="animate-rise mt-5 max-w-3xl text-4xl leading-[1.08] text-sand sm:text-5xl md:mt-6 md:text-7xl">
              Cada centímetro da sua casa,{" "}
              <em className="italic text-primary">projetado para você</em>.
            </h1>
            <p className="animate-rise mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
              Design, precisão e exclusividade em cada detalhe.
            </p>
            <div className="animate-rise mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href={WHATSAPP}
                className="rounded-full px-8 py-3 text-center text-sm tracking-[0.18em] uppercase text-primary-foreground transition-transform hover:-translate-y-0.5"
                style={{ backgroundImage: "var(--gradient-warm)", boxShadow: "var(--shadow-soft)" }}
              >
                Falar no WhatsApp
              </a>
              <a
                href="#projetos"
                className="rounded-full border border-border px-8 py-3 text-center text-sm tracking-[0.18em] uppercase text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Ver projetos
              </a>
            </div>
          </div>
        </section>

        {/* Manifesto */}
        <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 md:grid-cols-[1fr_1.1fr] md:gap-12 md:py-28">
          <Reveal>
            <p className="label-caps">Quem somos</p>
            <h2 className="mt-4 text-3xl leading-tight md:mt-5 md:text-5xl">
              Móveis que nascem da medida exata do seu espaço.
            </h2>
          </Reveal>
          <Reveal delay={150} className="space-y-6 text-muted-foreground">
            <p className="text-base leading-relaxed md:text-lg">
              Trabalhamos com marcenaria de alto padrão para cozinhas, dormitórios,
              home theaters, closets e ambientes comerciais. Nada de solução pronta:
              cada peça é desenhada, produzida e instalada para o seu ambiente.
            </p>
            <div className="grid grid-cols-3 gap-3 border-t border-border pt-6 sm:gap-6 sm:pt-8">
              {[
                ["8+", "anos de empresa"],
                ["100%", "projetos sob medida"],
                ["3D", "projeto antes de produzir"],
              ].map(([k, v]) => (
                <div key={v} className="min-w-0">
                  <p className="font-display text-2xl text-primary sm:text-3xl">{k}</p>
                  <p className="mt-1 text-[11px] leading-snug tracking-wide text-muted-foreground sm:text-xs">{v}</p>
                </div>
              ))}
            </div>

          </Reveal>
        </section>

        {/* Projetos */}
        <section id="projetos" className="scroll-mt-20 border-y border-border bg-card/40 py-16 md:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <Reveal className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="label-caps">Portfólio</p>
                <h2 className="mt-4 text-3xl md:text-5xl">Ambientes entregues</h2>
              </div>
              <p className="max-w-sm text-sm text-muted-foreground">
                Uma seleção de projetos executados: madeira natural, laca,
                iluminação embutida e ferragens de alto desempenho.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3">
              {projetos.map((p, i) => (
                <Reveal key={p.title} delay={(i % 3) * 120}>
                  <figure className="group relative overflow-hidden rounded-sm border border-border">
                    <img
                      src={p.src}
                      alt={`${p.title} — ${p.tag} da Otimizare`}
                      loading="lazy"
                      className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-[1.02] sm:h-72 md:h-auto"
                    />
                    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/85 to-transparent p-4 pt-12 sm:p-5 sm:pt-14">
                      <p className="label-caps">{p.tag}</p>
                      <p className="mt-1 font-display text-xl text-sand sm:text-2xl">{p.title}</p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>

          </div>
        </section>

        {/* Processo */}
        <section id="processo" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16 sm:px-6 md:py-28">
          <Reveal>
            <p className="label-caps">Como trabalhamos</p>
            <h2 className="mt-4 max-w-xl text-3xl md:text-5xl">
              Do primeiro esboço à última dobradiça.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:mt-14 md:grid-cols-4">
            {etapas.map((e, i) => (
              <Reveal key={e.n} delay={i * 120} className="h-full">
                <div className="h-full bg-background p-6 transition-colors hover:bg-card sm:p-8">
                  <p className="font-display text-3xl text-primary sm:text-4xl">{e.n}</p>
                  <h3 className="mt-3 text-lg text-sand sm:mt-4 sm:text-xl">{e.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-3">{e.d}</p>
                </div>

              </Reveal>
            ))}
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="relative scroll-mt-20 overflow-hidden border-t border-border">
...
          <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 md:grid-cols-2 md:gap-12 md:py-28">
            <Reveal>
              <p className="label-caps">Contato</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                Vamos desenhar o seu projeto?
              </h2>
              <p className="mt-5 max-w-md text-muted-foreground">
                Atendimento em Harmonia, Morro Azul e região. Envie as medidas ou
                apenas a ideia — cuidamos do resto.
              </p>
            </Reveal>
            <Reveal delay={150} className="space-y-8 border-t border-border pt-8 md:border-l md:border-t-0 md:pl-8 md:pt-0">
              <div>
                <p className="label-caps">Telefone / WhatsApp</p>
                <a
                  href={WHATSAPP}
                  className="mt-2 block font-display text-2xl text-primary transition-opacity hover:opacity-80 md:text-3xl"
                >
                  {PHONE_LABEL}
                </a>
              </div>
              <div>
                <p className="label-caps">Endereço</p>
                <address className="mt-2 not-italic text-lg text-sand">
                  Rua Arthur Rech, 61 — Bairro Morro Azul
                  <br />
                  Harmonia · RS
                </address>
              </div>
              <a
                href={WHATSAPP}
                className="block rounded-full px-8 py-3 text-center text-sm tracking-[0.18em] uppercase text-primary-foreground sm:inline-block"
                style={{ backgroundImage: "var(--gradient-warm)", boxShadow: "var(--shadow-soft)" }}
              >
                Pedir orçamento
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-7 w-7" />
            <span className="font-display tracking-[0.3em] text-sand">OTIMIZARE</span>
          </div>
          <p className="text-xs tracking-wide text-muted-foreground">
            Móveis sob medida · Harmonia/RS · {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
