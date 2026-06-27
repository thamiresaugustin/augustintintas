import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-augustin.png";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#produtos", label: "Produtos" },
  { href: "#marcas", label: "Marcas" },
  { href: "#instagram", label: "Instagram" },
  { href: "#contato", label: "Contato" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-smooth ${
        scrolled ? "bg-background/95 shadow-card-soft backdrop-blur" : "bg-background/70 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="#top" className="flex items-center gap-2">
          <span className="inline-flex items-center bg-white rounded-full shadow-card-soft px-4 py-2">
            <img src={logo} alt="Augustin Tintas e Revestimentos" className="h-9 md:h-11 w-auto" />
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary hover:after:w-full after:transition-all"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-primary"
          aria-label="Abrir menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto flex flex-col px-4 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-foreground/80 hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
