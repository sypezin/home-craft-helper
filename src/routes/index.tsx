import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import logo from "@/assets/logo-transparent.png";
import heroHd from "@/assets/hero-hd.png";
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
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#topo" className="flex items-center gap-3">
            <img src={logo} alt="Logotipo Otimizare" className="h-9 w-9 rounded-sm" />
            <span className="font-display text-xl tracking-[0.3em] text-sand">OTIMIZARE</span>
          </a>
          <div className="hidden items-center gap-9 text-sm text-muted-foreground md:flex">
            <a className="transition-colors hover:text-primary" href="#projetos">Projetos</a>
            <a className="transition-colors hover:text-primary" href="#processo">Processo</a>
            <a className="transition-colors hover:text-primary" href="#contato">Contato</a>
          </div>
          <a
            href={WHATSAPP}
            className="rounded-full border border-primary/60 px-5 py-2 text-xs tracking-[0.2em] text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Orçamento
          </a>
        </nav>
      </header>

      <main id="topo">
        {/* Hero */}
        <section className="relative flex min-h-screen items-end overflow-hidden">
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
              A Otimizare desenha e fabrica móveis sob medida que unem madeira,
              luz e função — do projeto à instalação final.
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
            <div className="grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                ["7", "anos de marcenaria"],
                ["100%", "projetos sob medida"],
                ["3D", "projeto antes de produzir"],
              ].map(([k, v]) => (
                <div key={v}>
                  <p className="font-display text-3xl text-primary">{k}</p>
                  <p className="mt-1 text-xs tracking-wide text-muted-foreground">{v}</p>
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

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {projetos.map((p, i) => (
                <Reveal key={p.title} delay={(i % 3) * 120}>
                  <figure className="group relative overflow-hidden rounded-sm border border-border">
                    <img
                      src={p.src}
                      alt={`${p.title} — ${p.tag} da Otimizare`}
                      loading="lazy"
                      className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent p-5">
                      <p className="label-caps">{p.tag}</p>
                      <p className="mt-1 font-display text-2xl text-sand">{p.title}</p>
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
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-4">
            {etapas.map((e, i) => (
              <Reveal key={e.n} delay={i * 120} className="h-full">
                <div className="h-full bg-background p-8 transition-colors hover:bg-card">
                  <p className="font-display text-4xl text-primary">{e.n}</p>
                  <h3 className="mt-4 text-xl text-sand">{e.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.d}</p>
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
