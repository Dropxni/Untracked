# Untracked

Aplicación web desarrollada con Angular 21, enfocada en una arquitectura modular con componentes, páginas, servicios, guards, pipes, validadores e interfaces.

## Tecnologías utilizadas

- Angular 21
- TypeScript 5.9
- Tailwind CSS 4
- RxJS
- Vitest
- PostCSS

## Estructura del proyecto

```bash
.
├── auth/
├── components/
├── guards/
├── interfaces/
├── pages/
│   └── home/
│       ├── home.html
│       └── home.ts
├── pipes/
├── public/
├── services/
├── shared/
├── src/
├── validator/
├── angular.json
├── package.json
└── README.md
```

## Instalación

Clona el repositorio:

```bash
git clone https://github.com/Dropxni/Untracked.git 
```

Entra al proyecto:

```bash
cd untracked
```

Instala las dependencias:

```bash
npm install
```

## Ejecución en desarrollo

```bash
npm start
```

También puedes usar:

```bash
ng serve
```

La aplicación estará disponible normalmente en:

```bash
http://localhost:4200/
```

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm start` | Ejecuta el servidor de desarrollo |
| `npm run build` | Compila el proyecto para producción |
| `npm run watch` | Compila en modo observación para desarrollo |
| `npm test` | Ejecuta las pruebas |

## Compilación

```bash
npm run build
```

Los archivos generados se almacenan en la carpeta de salida configurada por Angular.

## Pruebas

```bash
npm test
```

El proyecto utiliza Vitest para la ejecución de pruebas.

## Formato de código

El proyecto utiliza Prettier con la siguiente configuración principal:

- Ancho máximo de línea: `100`
- Comillas simples
- Parser especial para archivos HTML de Angular

## Estado del proyecto

🚧 En desarrollo

## Autor

Manuel Ambrosio

## Licencia

Este proyecto es privado.