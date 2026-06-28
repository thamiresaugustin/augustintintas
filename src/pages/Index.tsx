import { useEffect } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Instagram,
  MessageCircle,
  PaintBucket,
  Layers,
  Wrench,
  Sparkles,
  ArrowRight,
  Users,
} from "lucide-react";
import Header from "@/components/Header";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { useReveal } from "@/hooks/useReveal";
import logo from "@/assets/logo-augustin.png";
import lojaFoto from "@/assets/loja-augustin.jpeg";
import { InstagramFeed } from "@/components/InstagramFeed";

const WHATSAPP_URL =
  "https://wa.me/5547989089173?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento.";
const INSTAGRAM_URL = "https://instagram.com/augustintintas";
const ADDRESS =
  "R. Augusto Wunderwald, 1530 - Brasília, São Bento do Sul - SC, 89283-000";
const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS
)}&output=embed`;

const Index = () => {
  useReveal();

  useEffect(() => {
    document.title = "Augustin Tintas e Revestimentos | São Bento do Sul";
    const meta =
      document.querySelector('meta[name="description"]') ||
      Object.assign(document.createElement("meta"), { name: "description" });
    meta.setAttribute(
      "content",
      "Augustin Tintas: tintas, revestimentos e acessórios em São Bento do Sul. Tinsul, Sherwin Williams e mais. Faça seu orçamento."
    );
    document.head.appendChild(meta);
  }, []);

  return (
    <div id="top" className="min-h-screen bg-background">
      <Header />
      <WhatsAppFloat />

      {/* HERO */}
      <section className="relative pt-24 md:pt-32 pb-14 md:pb-20 overflow-hidden gradient-hero text-primary-foreground">
        <div className="absolute inset-0 bg-white/25 backdrop-blur-md" />
        <div className="absolute inset-0 opacity-45 pointer-events-none">
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full blur-3xl gradient-brand" />
          <div className="absolute -bottom-32 -right-16 h-96 w-96 rounded-full blur-3xl gradient-brand opacity-60" />
        </div>

        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center relative">
          <div className="reveal p-6 md:p-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur px-4 py-1.5 text-xs font-semibold tracking-wide uppercase border border-white/30">
              São Bento do Sul · SC
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Transforme seus projetos com{" "}
              <span className="text-gradient bg-clip-text">as melhores tintas</span>
            </h1>
            <p className="mt-5 text-lg text-white/85 max-w-xl">
              Tintas, revestimentos e acessórios das principais marcas do mercado.
              Atendimento especializado para sua obra ou reforma.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 font-semibold text-white shadow-brand transition-smooth hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" /> Faça seu orçamento
              </a>

              <div className="flex gap-3">
                <a
                  href="#produtos"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-5 py-3.5 font-semibold text-white hover:bg-white/10 transition-smooth"
                >
                  Ver produtos <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="#pintores"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-5 py-3.5 font-semibold text-white hover:bg-white/10 transition-smooth"
                >
                  Pintores parceiros <Users className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="reveal flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl gradient-brand blur-2xl opacity-50" />
              <div className="relative overflow-hidden rounded-3xl shadow-brand border-4 border-white">
                <img
                  src={lojaFoto}
                  alt="Fachada da loja Augustin Tintas em São Bento do Sul"
                  className="w-full max-w-md md:max-w-lg h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-14 md:py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">
              Sobre nós
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
              Cor, qualidade e atendimento{" "}
              <span className="text-gradient">que transformam</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              A <strong>Augustin Tintas</strong> é referência em São Bento do Sul e
              região no fornecimento de tintas, revestimentos e acessórios. Trabalhamos
              com as melhores marcas para entregar excelência em cada projeto — do
              detalhe da reforma à grande obra.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Nossa missão é ajudar você a transformar ideias em realidade, com
              orientação profissional e produtos de alta performance.
            </p>
          </div>

          <div className="reveal grid grid-cols-2 gap-4">
            {[
              { n: "+1000", l: "Cores disponíveis" },
              { n: "Top", l: "Marcas do mercado" },
              { n: "100%", l: "Atendimento dedicado" },
              { n: "SC", l: "São Bento do Sul" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-2xl border bg-card p-6 shadow-card-soft transition-smooth hover:-translate-y-1 hover:shadow-brand"
              >
                <div className="text-3xl font-extrabold text-gradient">{s.n}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUTOS */}
      <section id="produtos" className="py-14 md:py-20 gradient-soft">
        <div className="container mx-auto px-4">
          <div className="reveal text-center max-w-2xl mx-auto">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">
              Produtos & Serviços
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              Tudo para transformar seu projeto
            </h2>
            <p className="mt-4 text-muted-foreground">
              Soluções completas em pintura e revestimento para residências, comércios
              e obras.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: PaintBucket,
                title: "Tintas",
                desc: "Linha completa para interior e exterior, com as melhores marcas.",
              },
              {
                icon: Layers,
                title: "Revestimentos",
                desc: "Texturas, grafiatos e acabamentos para valorizar seu ambiente.",
              },
              {
                icon: Wrench,
                title: "Acessórios",
                desc: "Pincéis, rolos, lixas, fitas e tudo para a aplicação perfeita.",
              },
              {
                icon: Sparkles,
                title: "Consultoria",
                desc: "Orientação profissional na escolha de cores e produtos.",
              },
            ].map((p, i) => (
              <div
                key={p.title}
                className="reveal group rounded-2xl bg-card border p-7 shadow-card-soft transition-smooth hover:-translate-y-2 hover:shadow-brand"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl border bg-background text-muted-foreground shadow-card-soft">
                  <p.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARCAS */}
      <section id="marcas" className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="reveal text-center max-w-2xl mx-auto">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">
              Marcas Parceiras
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              Trabalhamos com as melhores
            </h2>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Sherwin Williams", tag: "Premium · Mundial" },
              { name: "Tinsul", tag: "Qualidade Nacional" },
              { name: "E muitas outras", tag: "Consulte nossa loja" },
            ].map((m, i) => (
              <div
                key={m.name}
                className="reveal relative overflow-hidden rounded-2xl border bg-card p-8 text-center shadow-card-soft transition-smooth hover:-translate-y-1 hover:shadow-brand"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="absolute inset-x-0 top-0 h-1 gradient-brand" />
                <div className="text-2xl font-extrabold text-primary">{m.name}</div>
                <div className="mt-2 text-sm text-muted-foreground">{m.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section id="instagram" className="py-14 md:py-20 gradient-soft">
        <div className="container mx-auto px-4 text-center">
          <div className="reveal max-w-2xl mx-auto">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">
              Redes Sociais
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              Acompanhe no Instagram
            </h2>
            <p className="mt-4 text-muted-foreground">
              Novidades, dicas, inspirações e os bastidores das obras com Augustin Tintas.
            </p>
          </div>

          <div className="reveal mt-12 mx-auto max-w-4xl">
            <InstagramFeed />
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 font-semibold text-foreground shadow-card-soft transition-smooth hover:bg-muted hover:scale-105"
            >
              <Instagram className="h-5 w-5" /> Ver no Instagram
            </a>
          </div>
        </div>
      </section>

      {/* PINTORES PARCEIROS */}
      <section id="pintores" className="py-14 md:py-20 gradient-soft">
        <div className="container mx-auto px-4">
          <div className="reveal text-center max-w-2xl mx-auto">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">
              Parceiros
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              Pintores Parceiros
            </h2>
            <p className="mt-4 text-muted-foreground">
              Profissionais de confiança para o seu projeto. Entre em contato diretamente.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 max-w-7xl mx-auto">
            {[
              { name: "Miro", phone: "47996244439" },
              { name: "Dirlei", phone: "47999350311" },
              { name: "Robson", phone: "47996365094" },
              { name: "Edgar", phone: "47988817376" },
              { name: "Carlos", phone: "46992639552" },
              { name: "JC Pinturas", phone: "47988644659" },
              { name: "Adilson", phone: "47996203050" },
              { name: "Alex", phone: "47999429453" },
              { name: "Ivan", phone: "47997444921" },
              { name: "Marcio", phone: "47997583998" },
              { name: "Evandro Pinturas" },
              { name: "Adriano Pinturas", phone: "47997189567" },
              { name: "LMC Pinturas", phone: "4792874493" },
            ].map((p, i) => (
              <a
                key={p.name}
                href={p.phone ? `https://wa.me/55${p.phone}` : "#pintores"}
                target={p.phone ? "_blank" : undefined}
                rel={p.phone ? "noopener noreferrer" : undefined}
                className="reveal group rounded-2xl border bg-card p-7 text-center shadow-card-soft transition-smooth hover:-translate-y-2 hover:shadow-brand"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <h3 className="text-lg font-bold text-foreground">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {p.phone
                    ? `(${p.phone.slice(0, 2)}) ${p.phone.slice(2, 7)}-${p.phone.slice(7)}`
                    : "Consulte na loja"}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                  {p.phone ? "WhatsApp" : "Contato pela loja"} <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="catalogo-cores" className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="reveal text-center max-w-2xl mx-auto">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">
              Catálogo de cores
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              Inspire-se com algumas cores Sherwin-Williams
            </h2>
            <p className="mt-4 text-muted-foreground">
              Escolha uma família de cores e fale com a loja para conferir opções.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: "Brancos", colors: ["#FAF8F1", "#F2EFE6", "#E8E2D6", "#D8D0C2"] },
              { name: "Neutros", colors: ["#F2EDE3", "#D8CFC0", "#B8AA99", "#807568"] },
              { name: "Cinzas", colors: ["#ECECEC", "#CFCFCB", "#9D9D98", "#5F625F"] },
              { name: "Pretos", colors: ["#6E6A64", "#4C4A47", "#2E2E2C", "#171717"] },
              { name: "Azuis", colors: ["#D8E6EA", "#9BB9C5", "#51798A", "#24495A"] },
              { name: "Verdes", colors: ["#DDE6D5", "#A9B99A", "#6F805F", "#3F5137"] },
              { name: "Amarelos", colors: ["#FFF1B8", "#F2D16B", "#D9A441", "#A66F24"] },
              { name: "Laranjas", colors: ["#F6D2B8", "#E99A5D", "#C86632", "#8C3F22"] },
              { name: "Vermelhos", colors: ["#F3C7C4", "#D97872", "#A83E3B", "#6E2425"] },
              { name: "Rosas", colors: ["#F5D8DC", "#E6A7B2", "#C86B82", "#8F3F56"] },
              { name: "Roxos", colors: ["#E2D7EA", "#B9A1CC", "#80619D", "#4B315F"] },
              { name: "Marrons", colors: ["#E8D2BD", "#C9946C", "#A4603D", "#6B3D2B"] },
            ].map((palette) => (
              <div key={palette.name} className="reveal rounded-2xl border bg-card p-5 shadow-card-soft">
                <h3 className="text-lg font-bold text-foreground">{palette.name}</h3>
                <div className="mt-4 grid grid-cols-4 gap-2">
                  {palette.colors.map((color) => (
                    <div
                      key={color}
                      className="aspect-square rounded-xl border"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://sherwin.com.br/cores/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 font-semibold text-foreground shadow-card-soft transition-smooth hover:bg-muted"
            >
              Abrir catálogo completo <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>


      {/* CONTATO */}
      <section id="contato" className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="reveal text-center max-w-2xl mx-auto">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">
              Contato
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Fale com a gente</h2>
            <p className="mt-4 text-muted-foreground">
              Estamos prontos para te atender. Envie sua mensagem ou venha nos visitar.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="reveal rounded-2xl border bg-card p-8 shadow-card-soft">
              <h3 className="text-xl font-bold text-primary">Informações</h3>
              <ul className="mt-6 space-y-5">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 h-11 w-11 rounded-xl border bg-background text-muted-foreground flex items-center justify-center">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">WhatsApp</div>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-foreground hover:text-primary transition-smooth"
                    >
                      (47) 98908-9173
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 h-11 w-11 rounded-xl border bg-background text-muted-foreground flex items-center justify-center">
                    <Instagram className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Instagram</div>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-foreground hover:text-primary transition-smooth"
                    >
                      @augustintintas
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 h-11 w-11 rounded-xl border bg-background text-muted-foreground flex items-center justify-center">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Endereço</div>
                    <div className="font-semibold text-foreground">{ADDRESS}</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 h-11 w-11 rounded-xl border bg-background text-muted-foreground flex items-center justify-center">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Horário</div>
                    <div className="font-semibold text-foreground">
                      Seg-Sex: 08:00 às 18:00
                      <br />
                      Intervalo para almoço: 12:00 às 13:00
                      <br />
                      Sábado: 08:00 às 12:00
                    </div>
                  </div>
                </li>
              </ul>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 font-semibold text-white shadow-brand transition-smooth hover:scale-[1.02]"
              >
                <MessageCircle className="h-5 w-5" /> Conversar no WhatsApp
              </a>
            </div>

            <div className="reveal rounded-2xl overflow-hidden border shadow-card-soft min-h-[400px]">
              <iframe
                title="Localização Augustin Tintas"
                src={MAPS_EMBED}
                className="w-full h-full min-h-[400px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="gradient-hero text-primary-foreground pt-16 pb-8">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-10">
          <div>
            <div className="bg-white inline-block rounded-xl p-3">
              <img src={logo} alt="Augustin Tintas" className="h-12 w-auto" />
            </div>
            <p className="mt-4 text-white/80 text-sm leading-relaxed max-w-xs">
              Loja de tintas, revestimentos e acessórios em São Bento do Sul - SC.
              Transformando projetos em realidade.
            </p>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-wider text-sm">Links rápidos</h4>
            <ul className="mt-4 space-y-2 text-white/80 text-sm">
              <li><a href="#sobre" className="hover:text-white transition-smooth">Sobre</a></li>
              <li><a href="#produtos" className="hover:text-white transition-smooth">Produtos</a></li>
              <li><a href="#marcas" className="hover:text-white transition-smooth">Marcas</a></li>
              <li><a href="#instagram" className="hover:text-white transition-smooth">Instagram</a></li>
              <li><a href="#pintores" className="hover:text-white transition-smooth">Pintores parceiros</a></li>
              <li><a href="#contato" className="hover:text-white transition-smooth">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-wider text-sm">Contato</h4>
            <ul className="mt-4 space-y-2 text-white/80 text-sm">
              <li>{ADDRESS}</li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-smooth">
                  (47) 98908-9173
                </a>
              </li>
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-smooth">
                  @augustintintas
                </a>
              </li>
              <li>Seg-Sex 08-12h e 13h-18h ·· Sáb 08-12h</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/15 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} Augustin Tintas e Revestimentos. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
};

export default Index;




