import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/lt-hero.jpg";
import qrRsvp from "@/assets/qr-rsvp.png";
import qrPlaylist from "@/assets/qr-playlist.png";
import qrPhotos from "@/assets/qr-photos.png";

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

  const scrollToSection = () => {
    document.getElementById("information-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const qrCodes = [
    { title: "Visszajelzés", image: qrRsvp, url: "https://docs.google.com/forms/d/e/1FAIpQLSdx79KBngQNeR_0XzzhamrQmiuUAQjsoes11FIdBSdBA8X4Gw/viewform" },
    { title: "Lejátszási lista", image: qrPlaylist, url: "https://music.youtube.com/playlist?list=PLDNYAjjrF02eqhLHg4_7KEhMt7NqxXBb0&jct=CFvzKjPnej7Qhvbo8o_Evw" },
    { title: "Képek", image: qrPhotos, url: "https://drive.google.com/drive/folders/1hEDabieyJe_YDaDlM6lggaFj3fRf0_ku" },
  ];

  return (
    <div className="relative min-h-screen scroll-smooth">
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

      {/* First Section - Quote */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-16">
        <div className="w-full max-w-4xl space-y-16 text-center animate-in fade-in duration-1000">
          {/* Romantic Quote */}
          <blockquote className="space-y-4">
            <p className="font-serif text-shadow-lg/30 text-2xl md:text-3xl lg:text-4xl leading-tight text-primary italic">
              Pont jókor jössz, mert ez a nap legjobb része.
            </p>
            <p className="font-serif text-shadow-lg/30 text-2xl md:text-3xl lg:text-4xl leading-tight text-primary italic">
              Melyik az a rész?
            </p>
            <p className="font-serif text-shadow-lg/30 text-2xl md:text-3xl lg:text-4xl leading-tight text-primary italic">
              Az, amikor te meg én mi leszünk 💍
            </p>
          </blockquote>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToSection}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 text-primary/70 hover:text-foreground transition-colors duration-300 animate-bounce"
          style={{ marginLeft: "-24px" }}
          aria-label="Scroll to information section"
        >
          <ChevronDown size={48} strokeWidth={1.5} />
        </button>
      </section>

      {/* Second Section - Information */}
      <section
        id="information-section"
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-16"
      >
        <div className="w-full max-w-4xl space-y-12 text-center">
          {/* Section Title */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary animate-in fade-in duration-700">
            Információk
          </h2>

          {/* Google Maps Embed */}
          <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: "200ms" }}>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-border bg-card">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16645.134091958018!2d18.843900144619937!3d47.44589633561196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476a0b7c099877b7%3A0x619cf082ef73288e!2zSG9zc3rDunLDqXRpIFJlbmRlenbDqW55aMOheiB8IHRlcm3DqXN6ZXRrw7Z6ZWxpIGVza8O8dsWRaSBoZWx5c3rDrW4sIHJlbmRlenbDqW55aGVseXN6w61uLCBjc2FwYXTDqXDDrXTDqXM!5e0!3m2!1shu!2shu!4v1764531761972!5m2!1shu!2shu"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Esküvő helyszíne"
                className="w-full"
              />
            </div>
            <p className="mt-4 text-primary text-lg">
              <a href="https://maps.app.goo.gl/BsDsZesC7fJgBcib8" target="_blank">Törökbálint, Hosszúrét tanya 275/15, 2045</a>
            </p>
          </div>

          {/* QR Codes Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-8">
            {qrCodes.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${(index + 2) * 200}ms` }}
              >
                <a href={item.url} target="_blank">
                  <div className="rounded-2xl bg-card p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-48 h-48 object-contain"
                    />
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl text-primary font-semibold">
                    {item.title}
                  </h3>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
