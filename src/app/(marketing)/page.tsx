import Image from "next/image";
import {
  ArrowRight,
  Bot,
  CalendarCheck,
  CheckCircle2,
  Download,
  HeartHandshake,
  MapPin,
  Navigation,
  PawPrint,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Users,
  WandSparkles,
} from "lucide-react";

const apkUrl = process.env.NEXT_PUBLIC_APK_URL ?? "/downloads/balto.apk";
const appVersion = process.env.NEXT_PUBLIC_APP_VERSION ?? "local";

const navLinks = [
  { label: "Paseos", href: "#paseos" },
  { label: "Servicios", href: "#servicios" },
  { label: "IA", href: "#ia" },
  { label: "APK", href: "#apk" },
];

const trustStats = [
  { value: "24/7", label: "seguimiento de rutas" },
  { value: "KYC", label: "walkers verificados" },
  { value: "Vet", label: "red de servicios pet care" },
];

const modules = [
  {
    title: "Walk Planner",
    description: "Agenda paseos, confirma disponibilidad y acompana cada ruta.",
    icon: CalendarCheck,
    tone: "bg-[#eafbf0] text-[#2f8a5b]",
  },
  {
    title: "Marketplace vet",
    description: "Veterinarias y servicios visibles con verificacion manual.",
    icon: Stethoscope,
    tone: "bg-[#fcf8ee] text-[#8d5b13]",
  },
  {
    title: "Balto Copilot",
    description: "Recomendaciones utiles para rutinas, bienestar y actividad.",
    icon: Bot,
    tone: "bg-[#e8fbf8] text-[#16857d]",
  },
];

const reviewFlow = [
  "Perfil de mascota",
  "Walker verificado",
  "Ruta en vivo",
  "Resumen del paseo",
];

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/balto-app-icon.png"
        alt="Balto"
        width={compact ? 42 : 50}
        height={compact ? 42 : 50}
        className="rounded-2xl shadow-[0_16px_35px_rgba(109,124,255,0.2)]"
        priority={!compact}
      />
      <div>
        <p
          className={
            compact
              ? "text-lg font-black leading-none text-[#16215c]"
              : "text-2xl font-black leading-none text-[#16215c]"
          }
        >
          Balto
        </p>
        <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-[#68d391]">
          Walks
        </p>
      </div>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[340px]">
      <div className="absolute -left-8 top-12 hidden rounded-2xl border border-white/70 bg-white/85 p-3 shadow-xl shadow-[#16215c]/10 backdrop-blur md:block">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#eafbf0] text-[#2f8a5b]">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs font-black text-[#16215c]">Walker OK</p>
            <p className="text-[11px] text-[#687280]">KYC aprobado</p>
          </div>
        </div>
      </div>

      <div className="absolute -right-7 bottom-24 hidden rounded-2xl border border-white/70 bg-white/90 p-3 shadow-xl shadow-[#16215c]/10 backdrop-blur lg:block">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#fff7e6] text-[#b56e00]">
            <Star className="h-5 w-5 fill-current" />
          </span>
          <div>
            <p className="text-xs font-black text-[#16215c]">4.9/5</p>
            <p className="text-[11px] text-[#687280]">cuidado confiable</p>
          </div>
        </div>
      </div>

      <div className="relative rounded-[2.75rem] border border-[#16215c]/15 bg-[#16215c] p-3 shadow-2xl shadow-[#6d7cff]/25">
        <div className="overflow-hidden rounded-[2.2rem] bg-[#fbfcff]">
          <div className="flex items-center justify-between bg-white px-5 pb-2 pt-4 text-[11px] font-black text-[#16215c]">
            <span>9:41</span>
            <span className="h-1.5 w-16 rounded-full bg-[#e5e7eb]" />
            <span>100%</span>
          </div>

          <div className="space-y-4 px-4 pb-5 pt-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6d7cff]">
                  Paseo activo
                </p>
                <h2 className="mt-1 text-xl font-black text-[#16215c]">
                  Rocky esta en ruta
                </h2>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#eafbf0] px-2.5 py-1 text-[11px] font-black text-[#2f8a5b]">
                <span className="h-2 w-2 rounded-full bg-[#68d391] motion-safe:animate-pulse" />
                Live
              </span>
            </div>

            <div className="relative h-36 overflow-hidden rounded-3xl bg-[#eafbf0]">
              <div
                className="absolute inset-0 opacity-70"
                style={{
                  backgroundImage:
                    "linear-gradient(#cdeedd 1px, transparent 1px), linear-gradient(90deg, #cdeedd 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <svg
                aria-hidden="true"
                viewBox="0 0 280 145"
                className="relative h-full w-full"
                fill="none"
              >
                <path
                  d="M24 116 C70 118 72 50 124 55 C174 60 176 104 252 30"
                  stroke="#68d391"
                  strokeLinecap="round"
                  strokeWidth="5"
                />
                <circle
                  cx="24"
                  cy="116"
                  r="8"
                  fill="#fff"
                  stroke="#68d391"
                  strokeWidth="4"
                />
                <circle
                  cx="124"
                  cy="55"
                  r="7"
                  fill="#fff"
                  stroke="#7baaf7"
                  strokeWidth="4"
                />
                <circle
                  cx="252"
                  cy="30"
                  r="9"
                  fill="#68d391"
                  stroke="#fff"
                  strokeWidth="4"
                />
              </svg>
              <span className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#6d7cff] text-white shadow-lg">
                <Navigation className="h-5 w-5" />
              </span>
              <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-black text-[#16215c] shadow-sm">
                <MapPin className="h-3.5 w-3.5 text-[#68d391]" />
                Parque Laureles
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-[#e5e7eb] bg-white p-3">
                <p className="text-[11px] font-semibold text-[#687280]">
                  Duracion
                </p>
                <p className="mt-1 text-lg font-black text-[#16215c]">
                  28:47
                </p>
              </div>
              <div className="rounded-2xl border border-[#e5e7eb] bg-white p-3">
                <p className="text-[11px] font-semibold text-[#687280]">
                  Distancia
                </p>
                <p className="mt-1 text-lg font-black text-[#16215c]">
                  2.45 km
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-[#e5e7eb] bg-white p-3">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#edf5ff] font-black text-[#3a80c2]">
                  AG
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-black text-[#16215c]">
                    Ana Garcia
                  </p>
                  <p className="text-xs text-[#687280]">
                    Paseadora verificada · 4.9 estrellas
                  </p>
                </div>
                <CheckCircle2 className="h-5 w-5 text-[#68d391]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LandingPage() {
  return (
    <main className="overflow-hidden bg-[#fbfcff] text-[#16215c]">
      <header className="sticky top-0 z-40 border-b border-white/70 bg-[#fbfcff]/80 backdrop-blur-xl">
        <nav
          className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8"
          aria-label="Principal"
        >
          <a href="#inicio" className="rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#6d7cff]">
            <BrandMark compact />
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-4 py-2 text-sm font-bold text-[#687280] transition hover:bg-white hover:text-[#16215c]"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href={apkUrl}
            className="inline-flex h-11 items-center gap-2 rounded-2xl bg-[#6d7cff] px-4 text-sm font-black text-white shadow-lg shadow-[#6d7cff]/25 transition hover:-translate-y-0.5 hover:bg-[#5a69f0]"
          >
            <Download className="h-4 w-4" />
            APK
          </a>
        </nav>
      </header>

      <section
        id="inicio"
        className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-14 px-5 py-12 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-16"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-0 top-16 h-72 w-72 rounded-full bg-[#eef1ff] blur-3xl" />
          <div className="absolute right-8 top-28 h-80 w-80 rounded-full bg-[#e8fbf8] blur-3xl" />
          <div className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-[#fff7e6] blur-3xl" />
        </div>

        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#6d7cff]/15 bg-white px-3 py-2 text-sm font-black text-[#6d7cff] shadow-sm">
            <Sparkles className="h-4 w-4" />
            Ecosistema movil para cuidado pet care
          </div>

          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[1.02] tracking-normal text-[#16215c] sm:text-6xl lg:text-7xl">
            Paseos, veterinarias y bienestar conectados en una sola app.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#526071]">
            Balto acompana a duenos, walkers y negocios con rutas en vivo,
            perfiles verificados, servicios cercanos y una experiencia visual
            tan clara como el cuidado que promete.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={apkUrl}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-[#6d7cff] px-6 text-base font-black text-white shadow-xl shadow-[#6d7cff]/25 transition hover:-translate-y-1 hover:bg-[#5a69f0]"
            >
              <Download className="h-5 w-5" />
              Descargar APK
            </a>
            <a
              href="#paseos"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-[#dfe5ef] bg-white px-6 text-base font-black text-[#16215c] shadow-sm transition hover:-translate-y-1 hover:border-[#6d7cff]/35"
            >
              Ver experiencia
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
            {trustStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white bg-white/75 p-4 shadow-sm backdrop-blur"
              >
                <p className="text-2xl font-black text-[#16215c]">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-semibold leading-5 text-[#687280]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <PhoneMockup />
      </section>

      <section id="paseos" className="px-5 py-18 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-[2rem] bg-[#16215c] p-8 text-white shadow-2xl shadow-[#16215c]/15">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/12">
                <PawPrint className="h-7 w-7 text-[#68d391]" />
              </div>
              <h2 className="mt-7 text-4xl font-black tracking-normal">
                Cada paseo se siente acompanado, no improvisado.
              </h2>
              <p className="mt-4 leading-7 text-white/76">
                La landing debe vender confianza antes que tecnologia: Balto
                muestra ruta, estado, walker, tiempos y actividad con una
                lectura rapida y humana.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {reviewFlow.map((item, index) => (
                <article
                  key={item}
                  className="group rounded-[2rem] border border-[#e5e7eb] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#16215c]/8"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef1ff] text-sm font-black text-[#6d7cff]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-6 text-xl font-black text-[#16215c]">
                    {item}
                  </h3>
                  <div className="mt-5 h-2 rounded-full bg-[#eef1ff]">
                    <div
                      className="h-full rounded-full bg-[#68d391] transition-all group-hover:bg-[#6d7cff]"
                      style={{ width: `${48 + index * 13}%` }}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="bg-white px-5 py-18 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#68d391]">
              Modulos Balto
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-normal text-[#16215c] sm:text-5xl">
              Una paleta por contexto, una experiencia sin ruido.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {modules.map(({ title, description, icon: Icon, tone }) => (
              <article
                key={title}
                className="rounded-[2rem] border border-[#e5e7eb] bg-[#fbfcff] p-6 shadow-sm"
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${tone}`}>
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-7 text-2xl font-black text-[#16215c]">
                  {title}
                </h3>
                <p className="mt-3 leading-7 text-[#687280]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ia" className="px-5 py-18 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#e8fbf8] px-3 py-2 text-sm font-black text-[#16857d]">
              <WandSparkles className="h-4 w-4" />
              Cuidado inteligente
            </div>
            <h2 className="mt-5 text-4xl font-black tracking-normal text-[#16215c] sm:text-5xl">
              Balto tambien piensa en lo que pasa despues del paseo.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#526071]">
              Recomendaciones, recordatorios, historial y senales de bienestar
              ayudan a que la app se sienta viva, util y cercana.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#dfe5ef] bg-white p-5 shadow-xl shadow-[#16215c]/8">
            <div className="rounded-[1.5rem] bg-[#e8fbf8] p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#5fd6cc] text-white">
                  <Bot className="h-6 w-6" />
                </div>
                <div className="rounded-3xl rounded-tl-sm bg-white p-4 shadow-sm">
                  <p className="font-bold leading-7 text-[#16215c]">
                    Rocky tuvo una ruta intensa. Hoy conviene una caminata mas
                    corta y agua apenas llegue a casa.
                  </p>
                </div>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {["Rutina semanal", "Alertas suaves", "Historial claro", "Tips de bienestar"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-white/80 px-4 py-3 text-sm font-black text-[#16215c]"
                    >
                      {item}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="apk" className="px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="mx-auto max-w-7xl rounded-[2.4rem] bg-[#6d7cff] p-6 text-white shadow-2xl shadow-[#6d7cff]/20 sm:p-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.72fr]">
            <div>
              <BrandMark />
              <h2 className="mt-8 max-w-3xl text-4xl font-black tracking-normal sm:text-5xl">
                Descarga Balto para Android y prueba el ecosistema completo.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/82">
                APK publico para usuarios. El backoffice administrativo se
                mantiene privado y separado de esta experiencia.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={apkUrl}
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-white px-6 text-base font-black text-[#6d7cff] shadow-lg transition hover:-translate-y-1"
                >
                  <Download className="h-5 w-5" />
                  Descargar APK
                </a>
                <span className="inline-flex h-14 items-center justify-center rounded-2xl bg-white/12 px-5 text-sm font-black text-white">
                  Version {appVersion}
                </span>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-6 text-[#16215c] shadow-xl">
              <div className="flex items-center gap-3">
                <Image
                  src="/balto-app-icon.png"
                  alt=""
                  width={64}
                  height={64}
                  className="rounded-2xl"
                />
                <div>
                  <p className="text-xl font-black">balto.apk</p>
                  <p className="text-sm font-semibold text-[#687280]">
                    Android · instalacion directa
                  </p>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                {[
                  { icon: ShieldCheck, text: "Walkers con verificacion KYC" },
                  { icon: Stethoscope, text: "Veterinarias revisadas" },
                  { icon: HeartHandshake, text: "Experiencia para duenos" },
                  { icon: Users, text: "Comunidad pet care conectada" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 rounded-2xl bg-[#f4f6fb] p-3">
                    <Icon className="h-5 w-5 text-[#6d7cff]" />
                    <span className="text-sm font-black">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
