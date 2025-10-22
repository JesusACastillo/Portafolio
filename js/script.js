function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

const translations = {
    ES: {
        inicio: "Inicio",
        acercaDe: "Acerca de",
        proyectos: "Proyectos",
        certificados: "Certificados",
        contacto: "Contacto",
        conocimientos: "Conocimientos",
        conocimientosSubtitulo: "Dominio y experiencia en el desarrollo de software.",
        proyectosTitulo: "Proyectos",
        proyectosSubtitulo: "Proyectos destacados y trabajos recientes",
        certificadosTitulo: "Certificados",
        subtitulocertificados: "Certificados y logros profesionales",
        hablemosProyecto: "Hablemos sobre tu próximo proyecto",

        hola: "Hola, soy",
        contactoLabel: "Contacto",
        descriptionHero: "Soy un ingeniero en tecnologías de la información graduado de la Universidad Politécnica de Sinaloa, con experiencia en desarrollo de software, análisis de sistemas y gestión de proyectos tecnológicos.",
        descargarCV: "Descargar CV",
        contactame: "Contáctame",

        descriptionHeroAbout: "Soy un ingeniero en tecnologías de la información graduado de la Universidad Politécnica de Sinaloa, con experiencia en desarrollo de software, análisis de sistemas y gestión de proyectos tecnológicos.",
        habilidadesTecnicas: "Habilidades Técnicas",
        htmlCss: "HTML y CSS",

        educacion: "Educación",
        experiencia: "Experiencia",
        puestoEducacion: "Ing. Tecnologías de la Información",
        descEducacion: "Especialización en desarrollo de software y sistema de información",
        puestoExperiencia: "Especialista en Redes",
        descExperiencia: "Gestión y mantenimiento de la infraestructura de red corporativa",

        tituloCisco: "Simulación y Optimización de la Red UPSIN",
        tituloWeb: "Plan de Asignatura",
        tecnologias: "Tecnologías:",
        verProyecto: "Ver Proyecto",
        descFarmaCode: "Aplicación completa para la gestión de usuarios, compras, ventas y proveedores en farmacias, que incluye funcionalidades avanzadas como seguimiento de inventario, generación de reportes en tiempo real y una interfaz intuitiva que mejora la experiencia del usuario, facilitando la administración y optimización de procesos en el negocio.",
        descOptiRuta: "Aplicación móvil para la gestión y optimización de rutas de transporte público, diseñada específicamente para estudiantes, con interfaz intuitiva y funcionalidades en tiempo real.",
        descCisco: "Aplicación de simulación en Cisco Packet Tracer que representa la infraestructura de red de la Universidad Politécnica de Sinaloa.",
        descWeb: "Diseño de un plan de asignatura para la materia de Desarrollo Web, que abarca los fundamentos y mejores prácticas en la creación de sitios web atractivos y funcionales.",

        certIT: "IT Essentials",
        emisorIT: "Emisor: <strong>Cisco</strong>",
        fechaIT: "Fecha: <strong>2024</strong>",
        certCCNA: "CCNA: Introduction to Networks",
        emisorCCNA: "Emisor: <strong>Cisco</strong>",
        fechaCCNA: "Fecha: <strong>2024</strong>",
        certbd: "Administrador de bases de datos",
        certpoo: "Programador (POO)",
        emisorSlim: "Emisor: <strong>Fundacion Carlos Slim",
        fechaSlim: "Fecha: <strong>2025</strong>",

        portafolioFooter: "Portafolio",
        descripcionFooter: "Portafolio de Jesús Antonio Hdez Castillo",
        enlacesRapidos: "Enlaces Rápidos",
        direccion: "C. Leandro Valle #819, Mazatlán, Sinaloa",
        telefono: "Tel: (669) 932 8266",
        email: "Email: jesus200546656@gmail.com",
        derechosReservados: "© 2025 Castillo - Todos los derechos reservados"
    },
    EN: {
        inicio: "Home",
        acercaDe: "About",
        proyectos: "Projects",
        certificados: "Certificates",
        contacto: "Contact",
        conocimientos: "Knowledge",
        conocimientosSubtitulo: "Mastery and experience in software development.",
        proyectosTitulo: "Projects",
        proyectosSubtitulo: "Featured projects and recent works",
        certificadosTitulo: "Certificates",
        subtitulocertificados: "Professional certificates and achievements",
        hablemosProyecto: "Let's talk about your next project",

        hola: "Hello, I am",
        contactoLabel: "Contact",
        descriptionHero: "I am an Information Technology Engineer graduated from the Polytechnic University of Sinaloa, with experience in software development, systems analysis, and technology project management.",
        descargarCV: "Download CV",
        contactame: "Contact Me",

        descriptionHeroAbout: "I am an Information Technology Engineer graduated from the Polytechnic University of Sinaloa, with experience in software development, systems analysis, and technology project management.",
        habilidadesTecnicas: "Technical Skills",
        htmlCss: "HTML and CSS",

        educacion: "Education",
        experiencia: "Experience",
        puestoEducacion: "Information Technology Engineer",
        descEducacion: "Specialization in software development and information systems",
        puestoExperiencia: "Network Specialist",
        descExperiencia: "Management and maintenance of the corporate network infrastructure",

        tituloCisco: "Simulation and Optimization of the UPSIN Network",
        tituloWeb: "Subject Plan",
        tecnologias: "Technologies:",
        verProyecto: "View Project",
        descFarmaCode: "Complete application for the management of usuaries, purchases, sales and receipts infarmacias, which include advanced functions such as inventory sequence,generation of reports in real time and an intuitive interface that improves the experienceof usership, facilitating administration and optimizing trading processes.",
        descOptiRuta: "Mobile application for managing and optimizing public transportation routes, designed specifically for students, with an intuitive interface and real-time functionality.",
        descCisco: "Simulation application in Cisco Packet Tracer that represents the network infrastructure of the Polytechnic University of Sinaloa.",
        descWeb: "Design of a course plan for Web Development, covering the fundamentals and best practices for creating attractive and functional websites.",
        
        certIT: "IT Essentials",
        emisorIT: "Issuer: <strong>Cisco</strong>",
        fechaIT: "Date: <strong>2024</strong>",
        certCCNA: "CCNA: Introduction to Networks",
        emisorCCNA: "Issuer: <strong>Cisco</strong>",
        fechaCCNA: "Date: <strong>2024</strong>",
        certbd: "Database administrator",
        certpoo: "Programmer (OOP)",
        emisorSlim: "Issuer: <strong>Fundación Carlos Slim</strong>",
        fechaSlim: "Date: <strong>2025</strong>",

        portafolioFooter: "Portfolio",
        descripcionFooter: "Portfolio of Jesús Antonio Hdez Castillo",
        enlacesRapidos: "Quick Links",
        direccion: "C. Leandro Valle #819, Mazatlán, Sinaloa",
        telefono: "Phone: (669) 932 8266",
        email: "Email: jesus200546656@gmail.com",
        derechosReservados: "© 2025 Castillo - All rights reserved"
    },
    FR: {
        inicio: "Accueil",
        acercaDe: "À propos",
        proyectos: "Projets",
        certificados: "Certificats",
        contacto: "Contact",
        conocimientos: "Connaissances",
        conocimientosSubtitulo: "Maîtrise et expérience en développement logiciel.",
        proyectosTitulo: "Projets",
        proyectosSubtitulo: "Projets phares et travaux récents",
        certificadosTitulo: "Certificats",
        subtitulocertificados: "Certificats et réalisations professionnelles",
        hablemosProyecto: "Parlons de votre prochain projet",

        hola: "Bonjour, je suis",
        contactoLabel: "Contact",
        descriptionHero: "Je suis un ingénieur en technologies de l'information diplômé de l'Université Polytechnique de Sinaloa, avec une expérience en développement de logiciels, analyse de systèmes et gestion de projets technologiques.",
        descargarCV: "Télécharger CV",
        contactame: "Contactez-moi",

        descriptionHeroAbout: "Je suis un ingénieur en technologies de l'information diplômé de l'Université Polytechnique de Sinaloa, avec une expérience en développement de logiciels, analyse de systèmes et gestion de projets technologiques.",
        habilidadesTecnicas: "Compétences Techniques",
        htmlCss: "HTML et CSS",

        educacion: "Éducation",
        experiencia: "Expérience",
        puestoEducacion: "Ing. Technologies de l'Information",
        descEducacion: "Spécialisation en développement de logiciels et systèmes d'information",
        puestoExperiencia: "Spécialiste Réseaux",
        descExperiencia: "Gestion et maintenance de l'infrastructure de réseau d'entreprise",

        tituloCisco: "Simulation et optimisation du réseau UPSIN",
        tituloWeb: "Plan du sujet",
        tecnologias: "Technologies:",
        verProyecto: "Voir le Projet",
        descFarmaCode: "Application complète pour la gestion des utilisateurs, des achats, des ventes et des fournisseurs enfarmacias, qui incluent des fonctionnalités avancées comme le suivi de l'inventaire,génération de rapports en temps réel et une interface intuitive qui améliore l'expériencede l'utilisateur, facilitant l'administration et l'optimisation des processus dans le commerce.",
        descOptiRuta: "Application mobile de gestion et d'optimisation des itinéraires de transports en commun, conçue spécifiquement pour les étudiants, avec une interface intuitive et des fonctionnalités en temps réel.",
        descCisco: "Application de simulation dans Cisco Packet Tracer qui représente l'infrastructure réseau de l'Université Polytechnique de Sinaloa.",
        descWeb: "Conception d'un plan de cours pour le développement Web, couvrant les fondamentaux et les meilleures pratiques pour créer des sites Web attrayants et fonctionnels.",
        
        certIT: "IT Essentials",
        emisorIT: "Émetteur: <strong>Cisco</strong>",
        fechaIT: "Date: <strong>2024</strong>",
        certCCNA: "CCNA: Introduction aux réseaux",
        emisorCCNA: "Émetteur: <strong>Cisco</strong>",
        fechaCCNA: "Date: <strong>2024</strong>",
        certbd: "Administrateur de base de données",
        certpoo: "Programmeur (POO)",
        emisorSlim: "Émetteur: <strong>Fundacion Carlos Slim<strong>",
        fechaSlim: "Date: <strong>2025</strong>",


        portafolioFooter: "Portefeuille",
        descripcionFooter: "Portefeuille de Jesús Antonio Hdez Castillo",
        enlacesRapidos: "Liens Rapides",
        direccion: "C. Leandro Valle #819, Mazatlán, Sinaloa",
        telefono: "Tél: (669) 932 8266",
        email: "Email: jesus200546656@gmail.com",
        derechosReservados: "© 2025 Castillo - Tous droits réservés"
    }
};

function setLanguage(lang) {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent === lang) {
            btn.classList.add('active');
        }
    });

    const texts = translations[lang];

    document.querySelectorAll('nav button').forEach(btn => {
        if (btn.getAttribute('onclick').includes('inicio')) btn.textContent = texts.inicio;
        if (btn.getAttribute('onclick').includes('acerca')) btn.textContent = texts.acercaDe;
        if (btn.getAttribute('onclick').includes('proyectos')) btn.textContent = texts.proyectos;
        if (btn.getAttribute('onclick').includes('certificados')) btn.textContent = texts.certificados;
        if (btn.getAttribute('onclick').includes('contacto')) btn.textContent = texts.contacto;
    });
    document.querySelectorAll('.footer-links button').forEach(btn => {
        if (btn.getAttribute('onclick').includes('inicio')) btn.textContent = texts.inicio;
        if (btn.getAttribute('onclick').includes('acerca')) btn.textContent = texts.acercaDe;
        if (btn.getAttribute('onclick').includes('proyectos')) btn.textContent = texts.proyectos;
        if (btn.getAttribute('onclick').includes('certificados')) btn.textContent = texts.certificados;
    });

    document.querySelectorAll('[data-text-id]').forEach(element => {
        const textId = element.getAttribute('data-text-id');
        if (texts[textId]) {
            element.innerHTML = texts[textId];
        }
    });

    document.querySelector('.knowledge-section .section-title').textContent = texts.conocimientos;
    document.querySelector('.knowledge-section .section-subtitle').textContent = texts.conocimientosSubtitulo;
    document.querySelector('.projects-section .section-title').textContent = texts.proyectosTitulo;
    document.querySelector('.projects-section .section-subtitle').textContent = texts.proyectosSubtitulo;
    document.querySelector('.certificates-section .section-title').textContent = texts.certificadosTitulo;
    document.querySelector('.certificates-section .section-subtitle').textContent = texts.subtitulocertificados;
    document.querySelector('.skills-title').textContent = texts.habilidadesTecnicas;

    const educationTitles = document.querySelectorAll('.education-title');
    if (educationTitles.length > 0) educationTitles[0].textContent = texts.educacion;
    if (educationTitles.length > 1) educationTitles[1].textContent = texts.experiencia;
}

document.addEventListener('DOMContentLoaded', () => {
    setLanguage('ES');
});