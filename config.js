// ─────────────────────────────────────────────────────────────
// CONFIG DEL SITIO — Demo reutilizable de showroom digital para torre en preventa.
// Proyecto ficticio: nombre, ubicación, precios, entregas y disponibilidad son de ejemplo.
// Para un proyecto real se cambia este archivo y las imágenes de assets/demo/.
// Un null en recámaras/baños/m² muestra "Consultar".
// ─────────────────────────────────────────────────────────────
window.SITE = {
  proyecto: {
    nombre: "Torre Aurora",
    ubicacion: "Ciudad de México",
    // Logo del proyecto (PNG/WebP/SVG claro sobre fondo oscuro). null = el nombre en texto.
    logo: null,
    tagline: "Residencias y amenidades",
    // URL del calendario de citas del proyecto (Calendly, etc.).
    cta: { texto: "Agenda tu visita", url: "#agenda" },
    nav: [
      { texto: "Residencias", href: "#residencia-2r-91" },
      { texto: "Amenidades", href: "#amenidades" },
      { texto: "Agenda", href: "#agenda" }
    ],
    amenidadesTitulo: "Más de 15 amenidades",
    amenidadesTexto: "Diseñadas para tu estilo de vida.",
    cierre: {
      titulo: "Conoce tu residencia en persona.",
      texto: "Visita nuestro showroom y recorre tu futura residencia con un asesor."
    },
    disclaimer: "Imágenes ilustrativas generadas con IA a partir del proyecto arquitectónico. Precios de referencia para esta demo. Acabados, vistas y medidas pueden variar."
  },

  // DEMO: disponibilidad inventada al azar (con semilla fija, no cambia al recargar) y botón de
  // WhatsApp que no hace nada. Cambiar la semilla reparte otros estados.
  demo: { semillaDisponibilidad: 11, deptosPorNivel: 6 },

  torre: {
    // Render de la torre aislada sobre plaza, 4K nativo. Solo demo.
    imagen: "assets/demo/torre-v3.jpg",           // 2752 px, hero
    imagenZoom: "assets/demo/torre-v3-zoom.jpg",  // la misma imagen a 5504 px (resolución original), solo para el zoom
    // Losas del nivel 31 y del nivel 1 en torre-v3 (% desde arriba).
    pisoSuperior: 14,
    pisoInferior: 90.5,
    niveles: 31,                               // total de niveles de la torre
    ancho: [35.4, 69.8],                       // borde izq. de la torre clara → borde der. de la oscura (% del ancho)
    cielo: "#344a70", suelo: "#302420"         // colores del borde superior/inferior del render (relleno en celular)
  },

  unidades: [
    {
      id: "residencia-2r-91",
      nombre: "Residencia 2 recámaras",
      nivel: 11,                    // posición del pin
      nivelEtiqueta: "4–11",
      niveles: [4, 11],             // rango que se resalta en la regla y al pasar el mouse por la torre
      pin: { x: 50, y: 65 },        // nivel 11 sobre el render
      recamaras: 2,
      banos: 2.5,                   // 2 completos + 1 medio
      m2: 91,                       // + 9 m² de balcón
      precio: "Desde $8,950,000 MXN",   // inventado para la demo (~$98 mil/m²)
      entrega: "desde agosto 2028",     // de ejemplo
      bullets: ["Balcón de 9 m²", "Enganche 15 % diferido", "Más de 15 amenidades", "Seguridad 24/7 y acceso controlado"],
      planta: "assets/demo/planta-a.webp",      // maqueta 3D isométrica con fondo recortado
      transicionVideo: null,
      // punto: posición del hotspot sobre la maqueta (% de planta-a.webp).
      espacios: [
        { nombre: "Sala y cocina",      imagen: "assets/demo/interior-a-01.jpg", punto: { x: 62, y: 56 },
          texto: "Sala, comedor y cocina abierta con barra, frente al balcón de 9 m²." },
        { nombre: "Recámara principal", imagen: "assets/demo/interior-a-02.jpg", punto: { x: 20, y: 55 },
          texto: "Recámara con clóset de muro a muro y salida al balcón." },
        { nombre: "Baño principal",     imagen: "assets/demo/interior-a-03.jpg", punto: { x: 45, y: 25 },
          texto: "Baño completo con regadera de cancel de vidrio." }
      ]
    },
    {
      id: "residencia-3r-186",
      nombre: "Residencia 3 recámaras",
      nivel: 28,                    // posición del pin
      nivelEtiqueta: "28–29",
      niveles: [28, 29],
      pin: { x: 50, y: 21.7 },
      recamaras: 3,
      banos: 3.5,                   // planta: 3 completos + 1 medio, más el baño de servicio (ver bullets)
      m2: 186,                      // + 9 m² de balcón
      precio: "Desde $19,850,000 MXN",  // inventado para la demo (~$107 mil/m², niveles altos)
      entrega: "desde febrero 2029",    // de ejemplo
      bullets: ["Cuarto y baño de servicio + estudio", "Balcón de 9 m²", "Niveles altos con vista", "Más de 15 amenidades"],
      planta: "assets/demo/planta-b.webp",
      transicionVideo: null,
      espacios: [
        { nombre: "Sala y comedor",     imagen: "assets/demo/interior-b-01.jpg", punto: { x: 38, y: 31 },
          texto: "Estancia y comedor para ocho, abiertos a la terraza." },
        { nombre: "Cocina con isla",    imagen: "assets/demo/interior-b-02.jpg", punto: { x: 15, y: 33 },
          texto: "Cocina con isla central y muro de guardado en madera." },
        { nombre: "Recámara principal", imagen: "assets/demo/interior-b-03.jpg", punto: { x: 84, y: 31 },
          texto: "Suite principal con vestidor y baño propio." }
      ]
    }
  ],

  // Amenidades de ejemplo (nombres, niveles y descripciones inventados para la demo).
  // video: clip de Higgsfield; sin video se muestra el render con movimiento de cámara.
  amenidades: [
    {
      nombre: "Terraza con asadores", nivel: "Roof · Nivel 31", nivelCorto: "Roof", pin: { x: 38, y: 13.5 },
      descripcion: "Asadores, comedor al aire libre y pérgola para reunirte con tu gente al atardecer.",
      video: "assets/demo/amenidades/terraza.mp4", poster: "assets/demo/amenidades/terraza.jpg"
    },
    {
      nombre: "Salón de eventos", nivel: "Nivel 20", nivelCorto: "N20", pin: { x: 38, y: 42 },
      descripcion: "Salón con terraza para celebraciones, con cocina y bar.",
      imagen: "assets/demo/amenidades/salon.jpg"
    },
    {
      nombre: "Spa", nivel: "Nivel 12", nivelCorto: "N12", pin: { x: 38, y: 62.5 },
      descripcion: "Spa para mujeres y caballeros con sauna seco y cabinas de masaje.",
      imagen: "assets/demo/amenidades/spa.jpg"
    },
    {
      nombre: "Alberca y carril de nado", nivel: "Nivel 3 · Amenidades", nivelCorto: "N3", pin: { x: 62, y: 85.4 }, lado: "der",   // a la derecha: a la izquierda choca con el titular
      descripcion: "Alberca recreativa, carril de nado y jacuzzi rodeados de jardín.",
      // Render generado con IA; video Kling 3.0 a partir de ese render.
      video: "assets/demo/amenidades/alberca.mp4", poster: "assets/demo/amenidades/alberca.jpg", ia: true
    },
    {
      nombre: "Gimnasio", nivel: "Nivel 6", nivelCorto: "N6", pin: { x: 62, y: 77.75 }, lado: "der",
      descripcion: "Gimnasio de cardio y peso libre con vista al jardín.",
      // Render generado con IA; video Kling 3.0.
      video: "assets/demo/amenidades/gym.mp4", poster: "assets/demo/amenidades/gym.jpg", ia: true
    }
  ]
};
