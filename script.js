/* =========================================================
   PORTAFOLIO · PRISCILA CUÉLLAR
   1. Textos en español e inglés
   2. Datos de los trabajos
   3. Funciones interactivas
   ========================================================= */

/* ---------- 1. TEXTOS EN LOS DOS IDIOMAS ---------- */
const textos = {
    es: {
        nav_about: "Sobre mí", nav_services: "Servicios", nav_work: "Trabajos", nav_exp: "Experiencia", nav_contact: "Contacto",
        hero_tag1: "Impulso marcas con <br>marketing digital y <br>edición de video",
        hero_tag2: "Ideas que se convierten <br>en campañas con <br>resultados reales",
        btn_work: "Ver mi trabajo", btn_contact: "Contáctame", btn_cv: "Descargar CV",
        about_title: "¡Hola!<br>Soy Priscila",
        about_p: "Impulso marcas a través del marketing digital y la edición de video. Combino estrategias innovadoras con contenido audiovisual de alto impacto para conectar con la audiencia y generar resultados medibles. Mi enfoque se centra en transformar ideas en campañas y videos que potencien el crecimiento real de cada negocio.",
        stat_brands: "marcas gestionadas", stat_places: "agencias y proyectos", stat_services: "servicios",
        location: "📍 Barcelona, Anzoátegui · Venezuela",
        band_services: "Servicios", services_hint: "Toca cada servicio para ver más",
        s1_title: "Edición de video", s1_short: "Nivel: Alto",
        s1_body: "Creo y edito contenido audiovisual pensado para comunicar el mensaje de tu marca de forma clara, atractiva y profesional. Ya sea para redes sociales, campañas publicitarias o presentaciones, cada video está diseñado para conectar con tu audiencia, reforzar tu identidad visual y generar impacto.",
        s2_title: "Gestión de redes sociales",
        s2_body: "Gestiono estratégicamente tus redes sociales para que tu marca comunique de forma efectiva y conecte con su audiencia. A través del análisis de datos, planificación de contenido y la ejecución de campañas, optimizo tu presencia digital, aumento el engagement y te ayudo a construir una comunidad sólida y fiel.",
        s3_title: "Planificación de contenido",
        s3_body: "Diseño estrategias de contenido alineadas con los objetivos de tu marca, creando calendarios editoriales basados en tendencias, datos de audiencia y buenas prácticas del sector. Me aseguro de que cada publicación sea coherente, atractiva y pensada para generar interacción, fortalecer tu presencia digital y convertir seguidores en clientes.",
        s4_short: "Redacción de contenidos",
        s4_body: "Creo textos estratégicos que potencian la voz de tu marca y generan resultados reales. Ya sea para redes sociales, descripciones de productos, artículos de blog o campañas publicitarias, cada contenido está pensado para captar la atención, comunicar con claridad y convertir a tu audiencia en clientes fieles.",
        band_work: "Trabajos", f_all: "Todos", f_social: "Redes sociales", f_video: "Edición de video", f_uni: "Universidad",
        see_more: "Ver más →", see_video: "Ver video", kind_brand: "Marca", kind_uni: "Proyecto universitario",
        band_exp: "Experiencia", agency: "Agencia de Marketing", freelance_role: "Proyectos independientes",
        brands_worked: "Cuentas que trabajé:",
        j1_date: "Marzo 2025 – Actualidad", j2_date: "2024 – Actualidad", j3_date: "Noviembre 2023 – Marzo 2025",
        j1_tasks: ["Creación de contenido", "Elaboración de grillas", "Reportes de estadísticas mensuales", "Publicación en redes", "Edición de fotos y videos", "Meta Ads"],
        j2_tasks: ["Edición de videos", "Planificación de redes sociales", "Redacción de guiones", "Cobertura de eventos", "Creación de contenido", "Meta Ads"],
        j3_tasks: ["Planificación de contenido", "Copywriting", "Publicación de contenido", "Edición de imágenes", "Edición de video", "Atención de mensajería"],
        edu_title: "Educación", edu1: "Cursando Comunicación Social", edu2: "Inglés", edu4: "Marketing Digital",
        skills_title: "Habilidades",
        skills: ["Gestión de redes sociales", "Meta Ads", "Contenido audiovisual", "Redacción de guiones", "Grillas de contenido", "Voz para videos", "Atención al detalle", "Ideas originales"],
        tools_title: "Herramientas que domino",
        contact_kicker: "¿Trabajamos juntos?",
        contact_big: "Lista para transformar visiones en realidad.",
        contact_mail: "Escríbeme un correo",
        back_top: "Volver arriba ↑"
    },
    en: {
        nav_about: "About", nav_services: "Services", nav_work: "Work", nav_exp: "Experience", nav_contact: "Contact",
        hero_tag1: "I grow brands with <br>digital marketing and <br>video editing",
        hero_tag2: "Ideas that turn <br>into campaigns with <br>real results",
        btn_work: "See my work", btn_contact: "Contact me", btn_cv: "Download CV",
        about_title: "Hi!<br>I'm Priscila",
        about_p: "I help brands grow through digital marketing and video editing. I combine innovative strategies with high-impact audiovisual content to connect with audiences and deliver measurable results. My focus is turning ideas into campaigns and videos that drive real growth for every business.",
        stat_brands: "brands managed", stat_places: "agencies & projects", stat_services: "services",
        location: "📍 Barcelona, Anzoátegui · Venezuela",
        band_services: "Services", services_hint: "Tap each service to learn more",
        s1_title: "Video editing", s1_short: "Level: Advanced",
        s1_body: "I create and edit audiovisual content designed to communicate your brand's message in a clear, engaging and professional way. Whether for social media, ad campaigns or presentations, every video is built to connect with your audience, strengthen your visual identity and make an impact.",
        s2_title: "Social media management",
        s2_body: "I manage your social media strategically so your brand communicates effectively and connects with its audience. Through data analysis, content planning and campaign execution, I optimize your digital presence, increase engagement and help you build a strong, loyal community.",
        s3_title: "Content planning",
        s3_body: "I design content strategies aligned with your brand's goals, building editorial calendars based on trends, audience data and industry best practices. I make sure every post is consistent, appealing and designed to drive interaction, strengthen your digital presence and turn followers into customers.",
        s4_short: "Content writing",
        s4_body: "I write strategic copy that amplifies your brand's voice and drives real results. Whether for social media, product descriptions, blog articles or ad campaigns, every piece is designed to grab attention, communicate clearly and turn your audience into loyal customers.",
        band_work: "Work", f_all: "All", f_social: "Social media", f_video: "Video editing", f_uni: "University",
        see_more: "See more →", see_video: "Watch video", kind_brand: "Brand", kind_uni: "University project",
        band_exp: "Experience", agency: "Marketing Agency", freelance_role: "Independent projects",
        brands_worked: "Accounts I managed:",
        j1_date: "March 2025 – Present", j2_date: "2024 – Present", j3_date: "November 2023 – March 2025",
        j1_tasks: ["Content creation", "Content grids", "Monthly analytics reports", "Social media publishing", "Photo & video editing", "Meta Ads"],
        j2_tasks: ["Video editing", "Social media planning", "Scriptwriting", "Event coverage", "Content creation", "Meta Ads"],
        j3_tasks: ["Content planning", "Copywriting", "Content publishing", "Image editing", "Video editing", "Inbox management"],
        edu_title: "Education", edu1: "Studying Social Communication", edu2: "English", edu4: "Digital Marketing",
        skills_title: "Skills",
        skills: ["Social media management", "Meta Ads", "Audiovisual content", "Scriptwriting", "Content grids", "Voice-over", "Attention to detail", "Original ideas"],
        tools_title: "Tools I master",
        contact_kicker: "Shall we work together?",
        contact_big: "Ready to turn visions into reality.",
        contact_mail: "Send me an email",
        back_top: "Back to top ↑"
    }
};

/* ---------- 2. TRABAJOS ----------
   Para agregar un trabajo nuevo, copia uno de estos bloques y cambia los datos.
   categorias: "redes", "video" o "universidad" (puede tener varias) */
const drive = id => `https://drive.google.com/file/d/${id}/view`;

const trabajos = [
    {
        nombre: "Six Bar PLC",
        tipo: "brand",
        categorias: ["video", "redes"],
        portada: "img/logo-sixbar.jpg",
        resumen: { es: "Bar & Restaurante", en: "Bar & Restaurant" },
        descripcion: {
            es: "Edición de video, grabación de contenido audiovisual y gestión de contenido para Instagram.",
            en: "Video editing, audiovisual content shooting and Instagram content management."
        },
        imagenes: ["img/sixbar-1.jpg", "img/sixbar-2.jpg", "img/sixbar-3.jpg", "img/sixbar-4.jpg"],
        enlaces: [
            { es: "Video destacado 1", en: "Featured video 1", url: drive("1VBjLSa_V_ZAF_Suvvx7-fXkp0PRThyon") },
            { es: "Video destacado 2", en: "Featured video 2", url: drive("1bSBda8SsVejl8pLGnNuBPdLmfuO7WLJi") },
            { es: "Video destacado 3", en: "Featured video 3", url: drive("1X_WMXEN2xUaCIJppSgE4TO8gA9DzijUO") }
        ]
    },
    {
        nombre: "Century 21 Oceanik",
        tipo: "brand",
        categorias: ["video"],
        portada: "img/logo-century21.jpg",
        resumen: { es: "Bienes raíces · Edición de videos", en: "Real estate · Video editing" },
        descripcion: {
            es: "Edición de videos para la promoción de propiedades en redes sociales.",
            en: "Video editing to promote real estate listings on social media."
        },
        imagenes: ["img/century21-1.jpg", "img/century21-2.jpg", "img/century21-3.jpg", "img/century21-4.jpg"],
        enlaces: [
            { es: "Video 1", en: "Video 1", url: drive("17OYWobttg-1tUzzSAIKcZ9R6EFQyqLcJ") },
            { es: "Video 2", en: "Video 2", url: drive("12yz8i3fFikbJENHFvBtma1RIZGUlUIna") },
            { es: "Video 3", en: "Video 3", url: drive("1XG4kOxkdNRNuWOyxkM4LuRdqo9dh-E5j") },
            { es: "Video 4", en: "Video 4", url: drive("15TIJ57Z-YFNsocV-WFr9DVuiSntQ1ulP") }
        ]
    },
    {
        nombre: "Pa’ Quel Primo",
        tipo: "brand",
        categorias: ["redes"],
        portada: "img/logo-paquelprimo.jpg",
        resumen: { es: "Restaurante · Instagram", en: "Restaurant · Instagram" },
        descripcion: {
            es: "Gestión de redes sociales en Instagram: carruseles y publicaciones.",
            en: "Instagram social media management: carousels and posts."
        },
        imagenes: Array.from({ length: 14 }, (_, i) => `img/paquelprimo-${i + 1}.jpg`),
        enlaces: [
            { es: "Ver Instagram", en: "View Instagram", url: "https://www.instagram.com/paquelprimo/" }
        ]
    },
    {
        nombre: "JP Élite Training",
        tipo: "brand",
        categorias: ["redes"],
        portada: "img/logo-jpelite.jpg",
        resumen: { es: "Centro de entrenamiento", en: "Training center" },
        descripcion: {
            es: "Planificación de contenido, copywriting, publicación de contenido, edición de imágenes y video, atención de mensajería y gestión de pautas.",
            en: "Content planning, copywriting, publishing, image and video editing, inbox management and paid ads management."
        },
        imagenes: ["img/jpelite-1.jpg", "img/jpelite-2.jpg", "img/jpelite-3.jpg", "img/jpelite-4.jpg", "img/jpelite-5.jpg"],
        enlaces: [
            { es: "Ver grilla de contenido", en: "View content grid", url: drive("1sP1cn382GGYsrTX2ZiefiuQZKpyVf2Jw") }
        ]
    },
    {
        nombre: "Universidad Santa María",
        tipo: "uni",
        categorias: ["universidad", "redes", "video"],
        portada: "img/logo-usm.jpg",
        resumen: { es: "3 proyectos universitarios", en: "3 university projects" },
        descripcion: {
            es: "Proyectos realizados durante la carrera de Comunicación Social.",
            en: "Projects created while studying Social Communication."
        },
        // Cada proyecto de la universidad aparece como una tarjeta dentro de la ventana
        subproyectos: [
            {
                nombre: "Spoilers Sin Culpa",
                imagen: "img/logo-spoilers.jpg",
                resumen: { es: "Branding · Instagram", en: "Branding · Instagram" },
                descripcion: {
                    es: "Cuenta creada para la materia “Creación de Contenido”. Branding, creación y planificación de contenido, elaboración de guiones, grabación y edición de videos.",
                    en: "Account created for the “Content Creation” course. Branding, content creation and planning, scriptwriting, video shooting and editing."
                },
                enlace: { es: "Ver Instagram", en: "View Instagram", url: "https://www.instagram.com/spoilersinculpa/" }
            },
            {
                nombre: "Reseña “Don’t Look Up”",
                imagen: "img/dontlookup-1.jpg",
                resumen: { es: "Reseña periodística · Video", en: "Film review · Video" },
                descripcion: {
                    es: "Video evaluativo: reseña periodística de opinión sobre la película “Don’t Look Up”.",
                    en: "Graded video: an opinion review of the film “Don’t Look Up”."
                },
                enlace: { es: "Ver video", en: "Watch video", url: drive("18wmzDodLgIPDQMKzWpPFbpRxKd97FaKm") }
            },
            {
                nombre: "Desarrollo del Pensamiento",
                imagen: "img/pensamiento-1.jpg",
                resumen: { es: "Video evaluativo", en: "Graded video" },
                descripcion: {
                    es: "Video resumen de lo aprendido durante el semestre en la materia “Desarrollo del Pensamiento”.",
                    en: "Video summarizing what we learned during the semester in the “Critical Thinking Development” course."
                },
                enlace: { es: "Ver video", en: "Watch video", url: drive("1V6ffXLaUeyBDxyhYr3A8X_MgzJ78z8lZ") }
            }
        ]
    }
];

/* ---------- 3. FUNCIONES ---------- */
let idioma = "es";
try { idioma = localStorage.getItem("idioma") || "es"; } catch (e) {}

// Cambia todos los textos al idioma elegido
function aplicarIdioma(lang) {
    idioma = lang;
    const t = textos[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el => el.textContent = t[el.dataset.i18n]);
    document.querySelectorAll("[data-i18n-html]").forEach(el => el.innerHTML = t[el.dataset.i18nHtml]);
    document.querySelectorAll("[data-i18n-list]").forEach(ul => {
        ul.innerHTML = t[ul.dataset.i18nList].map(item => `<li>${item}</li>`).join("");
    });
    document.querySelectorAll(".lang-btn").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
    pintarTrabajos();
    try { localStorage.setItem("idioma", lang); } catch (e) {}
}
document.querySelectorAll(".lang-btn").forEach(b => b.addEventListener("click", () => aplicarIdioma(b.dataset.lang)));

// Crea las tarjetas de trabajos
const contenedor = document.getElementById("projects");
let filtroActual = "todos";

function pintarTrabajos() {
    const t = textos[idioma];
    contenedor.innerHTML = trabajos.map((p, i) => `
        <article class="project" tabindex="0" data-index="${i}" data-cats="${p.categorias.join(" ")}">
            <div class="project-img" data-more="${t.see_more}">
                <img src="${p.portada}" alt="${p.nombre}" loading="lazy">
            </div>
            <h3>${p.nombre}</h3>
            <p>${p.resumen[idioma]}</p>
        </article>`).join("");
    filtrar(filtroActual, false);
}

// Filtros
function filtrar(cat, animar = true) {
    filtroActual = cat;
    document.querySelectorAll(".filter").forEach(b => b.classList.toggle("active", b.dataset.filter === cat));
    contenedor.querySelectorAll(".project").forEach(card => {
        const mostrar = cat === "todos" || card.dataset.cats.includes(cat);
        card.classList.toggle("hide", !mostrar);
        card.classList.remove("pop");
        if (mostrar && animar) { void card.offsetWidth; card.classList.add("pop"); }
    });
}
document.querySelectorAll(".filter").forEach(b => b.addEventListener("click", () => filtrar(b.dataset.filter)));

// Ventana emergente
const modal = document.getElementById("modal");
let ultimoFoco = null;

function abrirModal(i) {
    const p = trabajos[i], t = textos[idioma];
    ultimoFoco = document.activeElement;
    document.getElementById("modal-kind").textContent = p.tipo === "uni" ? t.kind_uni : t.kind_brand;
    document.getElementById("modal-title").textContent = p.nombre;
    document.getElementById("modal-desc").textContent = p.descripcion[idioma];
    const galeria = document.getElementById("modal-gallery");
    const enlaces = document.getElementById("modal-links");
    if (p.subproyectos) {
        // Varios proyectos dentro de una misma tarjeta (Universidad)
        galeria.className = "subprojects";
        galeria.innerHTML = p.subproyectos.map(s => `
            <article class="subproject">
                <img src="${s.imagen}" alt="${s.nombre}" loading="lazy">
                <h4>${s.nombre}</h4>
                <span>${s.resumen[idioma]}</span>
                <p>${s.descripcion[idioma]}</p>
                <a class="btn" href="${s.enlace.url}" target="_blank" rel="noopener">${s.enlace[idioma]} ↗</a>
            </article>`).join("");
        enlaces.innerHTML = "";
    } else {
        galeria.className = "gallery";
        galeria.innerHTML = p.imagenes.map(src => `<img src="${src}" alt="${p.nombre}" loading="lazy">`).join("");
        enlaces.innerHTML = p.enlaces.map((e, n) =>
            `<a class="btn ${n ? "btn-outline" : ""}" href="${e.url}" target="_blank" rel="noopener">${e[idioma]} ↗</a>`).join("");
    }
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    document.getElementById("modal-close").focus();
}
function cerrarModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (ultimoFoco) ultimoFoco.focus();
}
contenedor.addEventListener("click", e => {
    const card = e.target.closest(".project");
    if (card) abrirModal(card.dataset.index);
});
contenedor.addEventListener("keydown", e => {
    const card = e.target.closest(".project");
    if (card && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); abrirModal(card.dataset.index); }
});
document.getElementById("modal-close").addEventListener("click", cerrarModal);
modal.addEventListener("click", e => { if (e.target === modal) cerrarModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && modal.classList.contains("open")) cerrarModal(); });

// Servicios que se abren y cierran
document.querySelectorAll(".service-head").forEach(btn => {
    btn.addEventListener("click", () => {
        const card = btn.closest(".service");
        const abierto = card.classList.toggle("open");
        btn.setAttribute("aria-expanded", abierto);
    });
});

// Menú de celular
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
hamburger.addEventListener("click", () => {
    const abierto = menu.classList.toggle("open");
    hamburger.classList.toggle("open", abierto);
    hamburger.setAttribute("aria-expanded", abierto);
});
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    menu.classList.remove("open");
    hamburger.classList.remove("open");
    hamburger.setAttribute("aria-expanded", false);
}));

// Menú superior con fondo al bajar
const topbar = document.getElementById("topbar");
window.addEventListener("scroll", () => topbar.classList.toggle("scrolled", window.scrollY > 40), { passive: true });

// Contadores que suben (se reinician cada vez que vuelves a verlos)
function contar(el) {
    clearTimeout(el._timer);
    const meta = +el.dataset.target;
    let n = 0;
    const paso = () => { n++; el.textContent = n; if (n < meta) el._timer = setTimeout(paso, 900 / meta); };
    paso();
}

// Animaciones al hacer scroll: se repiten cada vez que subes o bajas
const observador = new IntersectionObserver(entradas => {
    entradas.forEach(entrada => {
        const el = entrada.target;
        if (entrada.intersectionRatio >= 0.15 && !el.classList.contains("visible")) {
            // Entra en pantalla: aparece, se llenan las barras y suben los números
            el.classList.add("visible");
            el.querySelectorAll(".fill").forEach(f => f.style.width = f.dataset.value + "%");
            el.querySelectorAll(".count").forEach(contar);
        } else if (entrada.intersectionRatio === 0) {
            // Sale por completo de la pantalla: se reinicia para animarse otra vez
            el.classList.remove("visible");
            el.querySelectorAll(".fill").forEach(f => f.style.width = "0");
            el.querySelectorAll(".count").forEach(c => { clearTimeout(c._timer); c.textContent = "0"; });
        }
    });
}, { threshold: [0, 0.15] });
document.querySelectorAll(".reveal").forEach(el => observador.observe(el));

// La portada repite su animación de entrada cuando vuelves arriba
const portada = document.getElementById("inicio");
const animadosPortada = portada.querySelectorAll(".big, .hero-photo, .hero-tag, .hero-buttons");
let portadaFuera = false;
new IntersectionObserver(([entrada]) => {
    if (entrada.intersectionRatio === 0) portadaFuera = true;
    else if (portadaFuera && entrada.intersectionRatio >= 0.3) {
        portadaFuera = false;
        animadosPortada.forEach(el => { el.style.animation = "none"; void el.offsetWidth; el.style.animation = ""; });
    }
}, { threshold: [0, 0.3] }).observe(portada);

// Marca en el menú la sección donde estás
const secciones = document.querySelectorAll("main section[id]");
const marcador = new IntersectionObserver(entradas => {
    entradas.forEach(entrada => {
        if (!entrada.isIntersecting) return;
        menu.querySelectorAll("a").forEach(a => a.classList.toggle("current", a.getAttribute("href") === "#" + entrada.target.id));
    });
}, { rootMargin: "-45% 0px -50% 0px" });
secciones.forEach(s => marcador.observe(s));

// Año automático en el pie de página
document.getElementById("year").textContent = new Date().getFullYear();

// Arranque
aplicarIdioma(idioma);
