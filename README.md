# Balto Web

Aplicacion web de Balto construida con Next.js. Contiene la landing publica
para descarga del APK y el punto de partida del backoffice administrativo
privado.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Axios
- TanStack Query
- React Hook Form + Zod
- Lucide React

## Estructura

```txt
src/
  app/
    (marketing)/       # landing publica
    (dashboard)/       # backoffice administrativo privado
    globals.css
    layout.tsx
    providers.tsx
  features/
    auth/
    dashboard/
    marketing/
  infrastructure/
    http/
  shared/
    utils/
public/
  downloads/
    version.json
```

## Variables locales

Copia el ejemplo y ajusta los valores:

```bash
cp .env.example .env.local
```

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_APK_URL=/downloads/balto.apk
NEXT_PUBLIC_APP_VERSION=1.0.0
```

Si vas a probar contra el backend desplegado, cambia `NEXT_PUBLIC_API_URL`:

```env
NEXT_PUBLIC_API_URL=https://tu-backend/api
```

## Correr localmente

El repo usa `pnpm` mediante Corepack.

```bash
corepack enable
corepack prepare pnpm@10.34.1 --activate
pnpm install
pnpm dev
```

Abre:

```txt
http://localhost:3000
```

## Validacion local

Antes de abrir un pull request o desplegar:

```bash
pnpm lint
pnpm build
```

## Descarga del APK

Para probar la landing con descarga local, copia el APK generado por Flutter en:

```txt
public/downloads/balto.apk
```

La metadata publica de descarga vive en:

```txt
public/downloads/version.json
```

Si el APK se aloja en otro lugar, cambia:

```env
NEXT_PUBLIC_APK_URL=https://url-publica/balto.apk
```

## Integracion con backend

El backend debe exponer una URL publica o local terminada en `/api`.
El cliente HTTP lee esa URL desde `NEXT_PUBLIC_API_URL`.

Para que login y dashboard funcionen en navegador, el backend tambien debe
permitir CORS desde el origen local:

```txt
http://localhost:3000
```

Y, en despliegue, desde el dominio real de la web.

La landing no enlaza al dashboard. El backoffice vive en `/dashboard` y debe
protegerse con login/rol administrador antes de usarse con datos reales.

## Despliegue futuro en Vercel

Cuando se pase a despliegue, conecta solamente este repo (`174-balto-web`) en
Vercel:

```txt
Framework Preset: Next.js
Install Command: pnpm install
Build Command: pnpm build
Output Directory: automatico
Node.js Version: 20.x
```

Configura en Vercel las mismas variables de `.env.example` con valores reales.
