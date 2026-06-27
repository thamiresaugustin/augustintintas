import { MessageCircle } from "lucide-react";

const WHATSAPP = "https://wa.me/5547989089173?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento.";

const WhatsAppFloat = () => (
  <a
    href={WHATSAPP}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar no WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-brand transition-smooth hover:scale-110 hover:shadow-glow"
  >
    <MessageCircle className="h-7 w-7" />
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
  </a>
);

export default WhatsAppFloat;
