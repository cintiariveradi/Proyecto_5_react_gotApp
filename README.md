# PROYECTO 5 REACT: Explorador de Personajes de Game of Thrones

Este proyecto consiste en el desarrollo de una aplicación web construida con React y Vite, cuyo objetivo es mostrar información de los personajes de la serie Game of Thrones utilizando una API pública. La aplicación permite navegar entre distintas páginas, visualizar detalles individuales, buscar personajes por nombre, manejar errores de renderizado y aplicar estilos mediante Material UI (MUI) y un tema personalizado.
La aplicación está estructurada en componentes reutilizables, páginas independientes y un servicio dedicado al consumo de la API. Además, se implementa React Router para el manejo de rutas y un Error Boundary para capturar errores de renderizado.


## Estructura del Proyecto

```
.
├── node_modules
├── public
├── src
│   ├── assets
│   │   └── react.svg
│   ├── Components
│   │   ├── CharacterCard.jsx
│   │   ├── ErrorBoundary.jsx
│   │   └── NavBar.jsx
│   ├── Pages
│   │   ├── Buscar.jsx
│   │   ├── CharacterDetail.jsx
│   │   ├── CharactersPage.jsx
│   │   └── Home.jsx
│   ├── services
│   │   └── api.js
│   ├── styles
│   │   └── theme.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Tecnologías Utilizadas
.
React 19
Vite
React Router DOM
Material UI (MUI)
API ThronesAPI
JavaScript (ES6+)
CSS global y tema personalizado
ESLint
ChatGPT para apoyo en depuración durante el desarrollo

## Descripción de la Aplicación
La aplicación permite:
Ver una lista completa de personajes de Game of Thrones.
Navegar al detalle de cada personaje según su ID.
Buscar personajes por nombre mediante un filtro dinámico.
Manejar errores de renderizado a través de un componente Error Boundary.
Contar con un Navbar fijo para la navegación.
Utilizar un tema oscuro personalizado con tipografías y colores inspirados en la estética de la serie.
La interfaz se construyó siguiendo principios de modularidad y separación de responsabilidades.

## Instalación
Clonar el repositorio:
git clone <URL-del-repositorio>
Instalar dependencias:
npm install
Instalar Material UI (si no está instalado):
npm install @mui/material @emotion/react @emotion/styled
Ejecutar en modo desarrollo:
npm run dev
Abrir en el navegador:
http://localhost:5173/ (o la URL que entregue Vite).

## Uso
Ingresar a la página principal.
Navegar a la sección Personajes para visualizar todas las cartas.
Seleccionar un personaje para ver su ficha detallada.
Utilizar la sección Buscar para filtrar personajes por nombre.
En caso de error, el componente ErrorBoundary mostrará una vista alternativa con opción de recargar.

## Rutas Principales
.
/ → Página de inicio (Home)
/personajes → Lista completa de personajes
/personajes/:id → Detalle según ID
/buscar → Buscador dinámico por nombre

## API Utilizada
Thrones API (API pública)
https://thronesapi.com/api/v2

## Endpoints utilizados:
/Characters → Lista de todos los personajes.
/Characters/:id → Detalle según ID.

## Captura de Pantalla
(Insertar aquí una captura una vez desplegado o funcionando localmente.)

## Manejo de Errores (Error Boundary)
El proyecto incluye un componente ErrorBoundary encargado de:
Detectar errores de renderizado en componentes hijos.
Mostrar un mensaje indicando que ocurrió un error.
Permitir recargar la aplicación mediante un botón.
Esta funcionalidad cumple con el requisito del módulo para manejar errores en React.

## Despliegue
El proyecto será desplegado utilizando un servicio externo como Netlify, Vercel o GitHub Pages.
La URL final será incorporada una vez realizado el despliegue.
Deploy: próximamente (URL aquí)

## Licencia y Autoría
Proyecto desarrollado por Cintia Rivera
Módulo de React — Bootcamp DWFS.
