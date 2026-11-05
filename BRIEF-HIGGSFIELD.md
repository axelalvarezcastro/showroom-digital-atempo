# Brief Higgsfield — Atempo San Ángel · Tipología A (2 rec · 91 m² · "Park")

Base: `kit-original/Prompts-Higgsfield.md`. Se cambió solo lo que estaba entre corchetes, salvo en el
baño y la recámara, donde el prompt del kit describe cosas que **no existen en la planta** (tina, doble
lavabo, balcón en recámara principal). Usarlo tal cual violaría la regla "si cambia la arquitectura, se
descarta", así que esos dos prompts están adaptados a la planta oficial y se marca qué cambió.

**Torre:** no se genera. Se usa el render del desarrollador (`1126_Cam_01_HQ.tif`), que ya está en hora
dorada con luces encendidas → `assets/atempo/torre.jpg`. Ahorra créditos y elimina el riesgo de geometría.

---

## Lo que dice la planta oficial (fuente de verdad)

Archivo: `insumos/higgsfield/01-planta-a-oficial.jpg` (Drive › Atempo - Tipologias › `91+10-Park`, unidades B 405–B 1105).

| Espacio | Contenido según planta |
|---|---|
| Recámara principal (izq.) | Cama queen, cabecera/muro de madera clara con 2 burós, tapete gris con patrón, walk-in closet, ventana al frente (sin balcón) |
| Baño principal (arriba izq.) | WC, regadera con cancel de vidrio, 1 lavabo de sobreponer sobre cubierta de piedra. **Sin tina** |
| Recámara 2 (centro) | 2 camas individuales, buró al centro, closet, sale al balcón |
| Baño 2 (arriba centro) | WC, regadera con cancel, 1 lavabo de sobreponer. Completo |
| Medio baño (arriba) | WC y lavabo. Sin regadera |
| Cocina | Lineal sobre muro superior (refrigerador, horno, lavandería en closet) + isla negra con tarja y parrilla de 5 quemadores |
| Sala | Sofá en L gris claro, 2 sillones claros, mesa de centro redonda de madera, mueble de TV de madera, tapete claro |
| Comedor | Mesa de mármol blanco para 6, sillas verde oscuro |
| Balcón | Corrido frente a recámara 2 y sala; tumbonas de madera, mesitas blancas redondas, plantas |
| Acabados generales | Porcelanato gran formato gris oscuro tipo mármol, muros blancos, carpintería roble claro, cancelería piso-techo |

→ **Baños: 2 completos + 1 medio = 2.5** (leído de la planta; confirmar con Jesús antes de ponerlo en la ficha).

---

## 1. Maqueta 3D isométrica → `assets/atempo/planta-a.png`

Modelo `gpt_image_2_5` · quality `high` · resolution `2k` · aspect `16:10`
Referencias: `01-planta-a-oficial.jpg` (principal).

```
Convert this 2D architectural floor plan into a photorealistic 3D isometric cutaway model (dollhouse view),
seen from above at a 30–35° angle, walls cut at mid-height so every room is visible. Follow the plan EXACTLY:
same room count, same wall positions, same door and window openings. Furnish each room in a warm
contemporary style: [large-format dark grey marble-look porcelain floors, white walls, light oak millwork,
light grey L-shaped sofa with two light armchairs and a round walnut coffee table, black stone kitchen island
with sink and five-burner cooktop, white marble dining table with six dark green chairs, beige linen bedding
on a queen bed, two single beds in the second bedroom, glass-enclosed showers, long balcony with wooden
loungers and potted plants]. Soft studio lighting,
subtle ambient occlusion, floor-to-ceiling windows showing a blurred city view. Solid dark navy background
(#0f1b33), no text, no labels, no dimensions, no people. Render as a single clean object centered in frame.
```

**Checklist de aprobación** (alguien que no vio la planta cuenta):
- [ ] 2 recámaras (una con cama queen, otra con 2 individuales)
- [ ] 3 baños, de los cuales 1 sin regadera; **ninguna tina**
- [ ] Isla negra separada de la cocina lineal; comedor de 6 a la derecha de la sala
- [ ] Balcón corrido solo frente a recámara 2 + sala (no frente a la principal)
- [ ] Fondo #0f1b33 sólido, sin texto

Correcciones (2ª/3ª iteración, sumando la maqueta anterior como referencia; **una variable por vez**):
- Tina inventada: `Keep everything, but the primary bathroom has NO bathtub: only a glass-enclosed shower, one toilet and one vessel sink on a stone counter, exactly as in the plan.`
- Balcón mal: `Keep everything, but the balcony runs only along the second bedroom and the living room, not along the primary bedroom.`
- Fondo: `Same model, replace background with solid #0f1b33 and remove any shadow outside the slab.`

---

## 2. Interiores (3) → `assets/atempo/interior-a-01..03.jpg`

Modelo `gpt_image_2_5` · quality `high` · resolution `2k` · aspect `16:9`
Referencias: maqueta aprobada + `01-planta-a-oficial.jpg` + `02-ref-luz-salon.jpg` (luz y tipo de foto del
desarrollador). A partir del 2º interior, sumar también el interior anterior aprobado.

**01 · Sala y cocina** (solo corchetes cambiados)
```
Photorealistic interior render of the living room and open kitchen from this 3D floor plan, eye-level
wide shot from the entrance toward the windows. Same layout and furniture as the model. Golden hour light
entering from the floor-to-ceiling windows, warm neutral palette, [large-format dark grey marble-look porcelain
floor, light grey L-shaped sofa, black stone island with integrated cooktop, white marble dining table with six
dark green chairs, light oak millwork]. City skyline softly visible outside. No people, no text. Architectural
photography look, 35mm lens.
```

**02 · Recámara principal** (adaptado: cabecera de madera en vez de tapizada; ventana sin balcón)
```
Photorealistic render of the primary bedroom from the same 3D floor plan, camera at the door looking toward
the bed and the window. Same finishes and the same golden hour light as the living room render.
Queen bed against a light oak headboard wall with two floating oak nightstands, beige linen bedding with
mustard accent pillows, grey patterned rug, dark grey marble-look porcelain floor, two bedside lamps on.
No balcony in this room. No people, no text.
```

**03 · Baño principal** (adaptado: sin tina ni doble lavabo, porque no existen)
```
Photorealistic render of the primary bathroom from the same 3D floor plan: walk-in shower with a frameless
glass enclosure, one white vessel sink on a grey stone counter with a round mirror above, wall-hung toilet,
large-format dark grey marble-look porcelain on floor and walls, light oak accents, warm brushed-gold fixtures,
soft diffused light consistent with the other renders. No bathtub. No people, no text.
```

Criterio: los 3 lado a lado parecen del mismo departamento (mismo piso gris, misma luz cálida).

---

## 3. Después de generar

- Comprimir a JPG/WebP ≤ 600 KB y guardar en `assets/atempo/`.
- En `config.js`: `planta: "assets/atempo/planta-a.png"` y las 3 rutas de `espacios`.
- Registrar créditos por generación (para la tabla del Paso 3).

## Registro de la generación (2026-11-02)

- **Cuenta free, 50 créditos al inicio → 38 al final: 12 créditos, 6 imágenes** (2 créditos c/u). 0 videos.
- `gpt_image_2_5` (el modelo del kit) **no está disponible en plan free** ("Requires basic plan or higher").
  Se usó `nano_banana_pro` (Higgsfield lo enruta a Nano Banana 2) con los mismos prompts.
- Maqueta: **3 iteraciones** (máximo del brief).
  - v1 y v2: el modelo copió la vista cenital de la planta (fiel pero no isométrica), aun pidiendo cambio de cámara.
  - v3 ✅: se proyectó la planta a isométrico con PIL (`insumos/higgsfield/04-planta-a-isometrica.jpg`) y se le
    pidió solo extruir muros y dar volumen. Pasa el checklist. Único invento: 4 bancos en la isla (mobiliario, no arquitectura).
- Interiores: 1 intento cada uno, aprobados. Referencias: maqueta v3 + planta oficial + render del salón
  (luz); recámara y baño además con la sala aprobada. Baño sin tina, un lavabo, regadera con cancel ✅.
- Prompt que mejor funcionó: dar la planta **ya proyectada en el ángulo final** y pedir solo "extrude walls".
- Originales en `insumos/generadas/`; versiones web (≤ 600 KB) en `assets/atempo/`.

### Rehecha de la maqueta (2026-11-02, misma tarde)

- Motivo: la v3 se veía plana (sin altura de muros, muebles como texturas). Referencia de estilo pedida:
  maqueta de madera clara con muros altos sobre fondo oscuro (`insumos/referencia-reel-maqueta.png`).
- **38 → 32 créditos: 3 generaciones** con `nano_banana_2_1` (thinking `high`, 2 créditos c/u).
  - v4: misma planta con muros de 2.4 m y cámara a 40°. Mucho mejor volumen; leyó el reflejo del espejo como un 2º lavabo.
  - v5: corrección solo del baño → el modelo devolvió casi la misma imagen (descartada).
  - v6 ✅: v4 + planta oficial + captura del reel como referencia de estilo. Muros altos, base gruesa, paleta
    madera/crema. Baño principal con 1 lavabo y espejo, como en la planta. Sin bancos en la isla.
- Aprendizaje: aclarar en el prompt lo ambiguo de la planta ("la 2ª forma redonda es un reflejo, no un lavabo").
- En el sitio: fondo recortado localmente (`planta-a.webp`, con transparencia) + degradé y sombra por CSS,
  para que la maqueta flote como en la referencia. La v3 queda en `insumos/generadas/` y `assets/atempo/planta-a.jpg` (sin uso).

### Rehecha de los interiores (2026-11-02)

- Objetivo: que los 3 espacios sean fieles a la planta y combinen con la maqueta v6 (crema, roble claro, piso beige).
- Técnica: por cada ambiente, recorte de la maqueta v6 + recorte de la planta oficial como referencias, y la
  posición de cámara descrita desde la planta (qué queda a la derecha y qué a la izquierda). La sala nueva se usó como
  referencia de luz y paleta para la recámara y el baño.
- **32 → 24 créditos: 4 generaciones** con `nano_banana_2_1` (2 c/u). La cuenta free permite **1 generación a la vez** (429 si se lanzan en paralelo).
  - Sala y cocina: 2 intentos. El 1º mostró muros bajos detrás de la isla (copió el corte de la maqueta); la corrección "muros hasta el techo" funcionó. Sin bancos en la isla.
  - Recámara principal: 1 intento ✅ (ventana sin balcón, clóset de roble, 3 cuadros, cojines mostaza).
  - Baño principal: 1 intento ✅ (regadera con cancel, WC al fondo, 1 lavabo, sin tina).
- Cambio de acabado respecto de la planta oficial: piso beige claro en vez de porcelanato gris oscuro, para
  coincidir con la maqueta. Revertir si se prefiere el acabado real.

## v2 (2026-11-03, rama `feature/v2-zoom-torre-amenidades`)

Créditos: **24 → 2** (22 usados). Generaciones: 7 imágenes + 1 video (más 1 video fallido, reembolsado).

| Asset | Modelo | Intentos | Créditos | Notas |
|---|---|---|---|---|
| Torre aislada (`torre-aislada.jpg`) | nano_banana_2_1 | 1 | 2 | Recorte del conjunto central de 1126_Cam_01 + render completo. Misma fachada, sin vecinos ni autopista. |
| Maqueta B (`planta-b.webp`) | nano_banana_2_1 | 1 | 2 | Planta 187+9 City (B 2801/2901) + maqueta A v6 como estilo. Pasa el checklist (3 rec + servicio + estudio). |
| Sala y comedor B | nano_banana_2_1 | 1 | 2 | Comedor de 8, sofá en L, balcón a la izquierda. Se ve 1 de los 2 sillones (encuadre). |
| Cocina B | nano_banana_2_1 | 1 | 2 | Inventó un ventanal con balcón a la derecha → **recortado localmente** (sin créditos). |
| Recámara principal B | nano_banana_2_1 | 1 | 2 | Cama, ventanal sin balcón, sillón y TV como en la planta. |
| Video terraza (`terraza.mp4`) | minimax_h3 (5 s, 2K) | 2 | 8 | 1er intento falló (reembolsado). `kling3_0` pide plan pago. Start frame = render real del desarrollador. |
| Alberca (`alberca.jpg`) | nano_banana_2_1 | 1 | 2 | No hay render del desarrollador; imagen IA con el estilo de la terraza. Sin video: no alcanzaron créditos. |

- **Calidad del zoom:** upscale 4K de la torre aislada (`bytedance_image_upscale`, 2 créditos → quedan **0**) en
  `torre-aislada-zoom.jpg` (4096 px, con enfoque suave), usado solo en el escenario del zoom.
  Zoom **2.1× escritorio / 2.2× celular**: es el máximo que la imagen aguanta nítida (a 3.4× se estiraba ~1.6×
  sobre un upscale, borroso). La maqueta empieza a aparecer antes de que termine el zoom, así el cuadro más cercano
  nunca queda quieto. Para un zoom profundo nítido hace falta un render de primer plano por nivel (~2 cr c/u).
- **Fluidez:** el zoom y la aparición de la maqueta son Web Animations en pausa que GSAP "scrubea" (currentTime):
  Chrome rasteriza la capa a la escala máxima de los keyframes y la mueve en la GPU. Las imágenes de las unidades
  se decodifican al cargar la página (img.decode) y se quitó backdrop-filter de pins y ficha. Click: 0.7 s de
  empuje + 6 s de recorrido (sine.inOut); la sección de cada unidad pasó de 340vh a 420vh.
  **Clave:** el zoom NO usa `transform: scale`. Con transform (y will-change) Chrome rasteriza la capa una vez al tamaño
  inicial y la estira, así que la imagen 4K no se aprovechaba. Ahora se cambian left/top/width/height de la imagen en
  cada cuadro y el navegador la redibuja desde la resolución original (también en pantallas retina).
- Spa y salón de eventos: renders **reales** del desarrollador (Drive) con movimiento de cámara por CSS (0 créditos).
- Niveles de las amenidades: **inventados para la demo** (Roof, N20, N12, N3).
- Modelos de video en plan free: `kling3_0` ✗ (plan pago), `minimax_h3` ✓ 8 cr/5 s, `seedance_2_5` 12 cr, `grok_video_v15` 18 cr, `flux_3_video` 30 cr.
- La cuenta free permite generar imagen y video en paralelo, pero no dos imágenes del mismo modelo a la vez.

## Otros insumos descargados (`insumos/drive/`)

- `pauta-2rec-1/2.png` — anuncios oficiales de 2 recámaras: "Entrega 2028", "Sin pago a la firma",
  "Difiere tu enganche hasta en 40 pagos desde $25,000 mensuales". Candidatos para la ficha; confirmar con Jesús.
- `amenidad-salon/spa/terraza.jpg`, `dlc-render-1/2.jpg` (lobby) — estilo y luz del desarrollador.

## v3 de la torre (2026-11-03, misma rama)

Cuenta Ultra de la empresa conectada: **397,5 → 391,5** créditos (6 usados).

| Asset | Modelo | Intentos | Créditos | Notas |
|---|---|---|---|---|
| Torre v3 (`torre-v3.jpg` 2752 px / `torre-v3-zoom.jpg` 5504 px) | nano_banana_2_1, 4K, thinking high | 2 variantes | 6 | Referencias: torre aislada v2 (encuadre) + recorte de 1126_Cam_01_HQ.tif (fachada). Se eligió la B: plaza a nivel de calle en lugar del zócalo negro, cielo de hora azul, sin otras torres. La A cambiaba la franja de travertino izquierda. |

- **Zoom:** usa la imagen a 5504 px nativos (no upscale) → zoom 2.4× escritorio / 2.3× celular, nítido.
  Hero y zoom tienen exactamente la misma proporción (2752×1536 y 5504×3072), así el salto del click coincide al píxel.
- **Click:** sin pausa previa; salta al inicio de la sección con una réplica del hero encima (titular, velo y pins)
  y el recorrido arranca en el acto (7 s, curva con arranque lineal + frenado suave). La réplica se desvanece con el
  scroll: titular y pins en el primer tramo, el pin elegido hasta que se enciende la losa; los pins viajan con la torre.
- En vertical los bordes del render se funden con el degradé de fondo (máscara), sin línea de corte.
- Pines recalibrados a torre-v3 (pisoSuperior 14, pisoInferior 90.5, ancho 35.4–69.8).

## Videos de amenidades y datos demo (2026-11-03, misma rama)

Créditos: **391.5 → 360.5** (31 usados). Todo con plan Ultra.

| Asset | Modelo | Créditos | Notas |
|---|---|---|---|
| `amenidades/terraza.mp4` | kling3_0 pro, 6 s, sin audio | 9 | Reemplaza al de minimax (queda en `insumos/generadas/v2/terraza-minimax.mp4`). Start frame = render del desarrollador recortado a 16:9. |
| `amenidades/alberca.mp4` | kling3_0 pro, 6 s, sin audio | 9 | Start frame = `insumos/generadas/v2/alberca.png` (imagen IA). |
| `amenidades/gym.jpg` | nano_banana_2_1 2K ×2 | 4 | Refs: render del spa y del salón del desarrollador. Elegida la A (`insumos/generadas/v3/gym-a.png`). |
| `amenidades/gym.mp4` | kling3_0 pro, 6 s, sin audio | 9 | Start frame = gym A. |

- Los videos pesan 17–24 MB (1080p de Kling, sin recomprimir: no hay ffmpeg en la máquina). Solo se cargan al abrir el visor.
- El gimnasio está en el brochure ("Gimnasio / Cardio & peso"); el nivel N6 es inventado, como los demás.
- Datos de la ficha (demo): baños según las plantas oficiales (2.5 y 3.5 + servicio), m² y balcones del brochure,
  entrega = inicio de escrituración de la fase en el brochure (fase 1 ago 2028, fase 3 feb 2029),
  precios **inventados** (~$98 mil y ~$107 mil MXN/m²). El pie de página aclara "Precios de referencia para esta demo".
