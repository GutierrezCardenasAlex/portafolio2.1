import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "rapigo",
    title: "RAPIGO",
    category: "Movilidad / Transporte",
    description:
      "Plataforma de movilidad para conectar pasajeros y conductores mediante geolocalización en tiempo real.",
    image: "/projects/rapigo.svg",
    technologies: ["Flutter", "Node.js", "PostgreSQL", "PostGIS", "MapLibre", "OSRM", "WebSockets"],
    features: [
      "ubicacion en tiempo real",
      "aplicacion pasajero",
      "aplicacion conductor",
      "rutas",
      "ETA",
      "seguimiento de viajes",
      "navegacion",
      "notificaciones",
    ],
    featured: true,
    status: "Case study",
  },
  {
    id: "gestion-metalurgica",
    title: "Sistema de Gestion Metalurgica",
    category: "Mineria / Software Empresarial",
    description:
      "Sistema para automatizar calculos metalurgicos y centralizar informacion operativa.",
    image: "/projects/gestion-metalurgica.svg",
    technologies: ["Python", "PostgreSQL", "Flutter"],
    features: ["calculos operativos", "centralizacion de datos", "reportes internos"],
    featured: false,
    status: "Producto interno",
  },
  {
    id: "venta-terrenos",
    title: "Plataforma de Venta de Terrenos",
    category: "GIS / Inmobiliaria",
    description:
      "Sistema para mostrar lotes georreferenciados mediante poligonos sobre mapas interactivos.",
    image: "/projects/venta-terrenos.svg",
    technologies: ["React", "Node.js", "PostgreSQL", "PostGIS", "MapLibre"],
    features: ["poligonos GIS", "mapas interactivos", "gestion de lotes"],
    featured: true,
    status: "GIS ready",
  },
  {
    id: "sumaj-ruta",
    title: "Sumaj Ruta",
    category: "Movilidad / Turismo",
    description: "Aplicacion enfocada en transporte urbano, turismo y cultura.",
    image: "/projects/sumaj-ruta.svg",
    technologies: ["Flutter", "MapLibre", "OpenStreetMap"],
    features: ["rutas urbanas", "contenido turistico", "mapas offline-ready"],
    featured: false,
    status: "Mobile app",
  },
];
