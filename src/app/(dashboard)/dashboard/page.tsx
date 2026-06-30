import { Activity, BarChart3, PawPrint, ShieldCheck, Users2 } from "lucide-react";

const stats = [
  { label: "Usuarios", value: "0", icon: Users2 },
  { label: "Mascotas", value: "0", icon: PawPrint },
  { label: "Paseos", value: "0", icon: Activity },
  { label: "Alertas", value: "0", icon: BarChart3 },
];

export default function DashboardPage() {
  return (
    <section className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
      <div className="space-y-6">
        <div className="rounded-lg border border-white/10 bg-white/5 p-8">
          <p className="text-sm uppercase text-zinc-400">
            Panel operativo
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Gestion de usuarios y metricas de Balto.
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-300">
            Esta vista queda lista para conectarse al backend desplegado cuando
            se confirme la URL publica y los permisos administrativos.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map(({ label, value, icon: Icon }) => (
            <article
              key={label}
              className="rounded-lg border border-white/10 bg-white/5 p-5"
            >
              <Icon className="h-5 w-5 text-[#7cb7b7]" />
              <p className="mt-4 text-2xl font-semibold text-white">{value}</p>
              <p className="mt-1 text-sm text-zinc-400">{label}</p>
            </article>
          ))}
        </div>
      </div>

      <aside className="rounded-lg border border-white/10 bg-white/5 p-6">
        <ShieldCheck className="h-5 w-5 text-emerald-300" />
        <h3 className="mt-4 text-lg font-semibold text-white">Conexion local</h3>
        <ul className="mt-4 space-y-3 text-sm text-zinc-300">
          <li>API: {process.env.NEXT_PUBLIC_API_URL ?? "sin configurar"}</li>
          <li>Version: {process.env.NEXT_PUBLIC_APP_VERSION ?? "local"}</li>
          <li>Datos visibles como cero hasta conectar endpoints reales.</li>
        </ul>
      </aside>
    </section>
  );
}
