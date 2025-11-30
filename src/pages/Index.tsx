import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import heroImage from "@/assets/lt-hero.jpg";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Parallax Background */}
      <div
        className="fixed inset-0 bg-cover bg-center transition-transform duration-300 ease-out"
        style={{
          backgroundImage: `url(${heroImage})`,
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.1)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/60 to-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-16">
        <div className="w-full max-w-4xl space-y-16 text-center animate-in fade-in duration-1000 ">
          {/* Romantic Quote */}
          <blockquote className="space-y-4">
            <p className="font-serif text-shadow-lg/30 text-2xl md:text-3xl lg:text-4xl leading-tight text-foreground italic">
              - Pont jókor jössz, mert ez a nap legjobb része.
            </p>
            <p className="font-serif text-shadow-lg/30 text-2xl md:text-3xl lg:text-4xl leading-tight text-foreground italic">
              - Melyik az a rész?
            </p>
            <p className="font-serif text-shadow-lg/30 text-2xl md:text-3xl lg:text-4xl leading-tight text-foreground italic">
              - Az, amikor te meg én mi leszünk 💍
            </p>
          </blockquote>

          {/* QR Codes Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-8">
            {[
              { title: "Ceremony Details", url: "https://example.com/ceremony", visibility: "visible" },
              { title: "RSVP", url: "https://example.com/rsvp", visibility: "hidden" },
              { title: "Gift Registry", url: "https://example.com/registry", visibility: "visible" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 200}ms`, visibility: item.visibility as any }}
              >
                <div className="rounded-2xl bg-card p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border">
                  <QRCodeSVG
                    value={item.url}
                    size={200}
                    level="H"
                    fgColor="hsl(var(--foreground))"
                    bgColor="hsl(var(--card))"
                  />
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-primary font-semibold">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
