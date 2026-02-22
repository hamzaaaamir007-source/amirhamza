/**
 * Amir Hamza Portfolio - Enhanced JavaScript with Advanced Animations
 * Full Stack Developer & ML Engineer
 */

// ==================== PARTICLE BACKGROUND ====================
(function() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    const particleCount = 80;
    const connectionDistance = 120;
    const mouseDistance = 150;
    let mouse = { x: null, y: null };
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    window.addEventListener('mousemove', function(e) {
        mouse.x = e.x;
        mouse.y = e.y;
    });
    
    window.addEventListener('mouseout', function() {
        mouse.x = null;
        mouse.y = null;
    });
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 1.5;
            this.vy = (Math.random() - 0.5) * 1.5;
            this.size = Math.random() * 2 + 1;
            this.color = 'rgba(99, 102, 241, 0.6)';
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            
            // Mouse interaction
            if (mouse.x != null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouseDistance) {
                    const force = (mouseDistance - distance) / mouseDistance;
                    this.vx -= (dx / distance) * force * 0.5;
                    this.vy -= (dy / distance) * force * 0.5;
                }
            }
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }
    
    function initParticles() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }
    
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            
            // Draw connections
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < connectionDistance) {
                    const opacity = (connectionDistance - distance) / connectionDistance;
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(99, 102, 241, ${opacity * 0.3})`;
                    ctx.lineWidth = 1;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(animateParticles);
    }
    
    initParticles();
    animateParticles();
})();

// ==================== SCROLL PROGRESS BAR ====================
(function() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.innerHTML = '<div class="scroll-progress-fill"></div>';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.querySelector('.scroll-progress-fill').style.width = scrollPercent + '%';
    });
})();

// ==================== SCROLL REVEAL ANIMATIONS ====================
(function() {
    const revealElements = document.querySelectorAll('.service-card, .project-card, .skill-item, .stat-block, .about-image, .about-content, .contact-info, .contact-form');
    
    const revealOnScroll = function() {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;
        
        revealElements.forEach(function(element) {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('reveal-active');
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
})();

// ==================== LANGUAGE SWITCHER ====================
const translations = {
    en: {
        // Navigation
        home: "Home",
        about: "About",
        services: "Services",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
        letsTalk: "Let's Talk",
        
        // Hero
        available: "Available for new opportunities",
        hiIm: "Hi, I'm",
        amirHamza: "Amir Hamza",
        building: "Building",
        extraordinary: "Extraordinary",
        digitalExperiences: "Digital Experiences",
        heroDesc: "I'm Amir Hamza — a Full Stack Developer & Machine Learning Engineer dedicated to building innovative solutions that transform ideas into powerful digital realities.",
        exploreWork: "Explore Work",
        getInTouch: "Get In Touch",
        yearsExperience: "Years<br>Experience",
        projectsCompleted: "Projects<br>Completed",
        happyClients: "Happy<br>Clients",
        
        // About
        aboutMe: "About Me",
        transformingIdeas: "Transforming Ideas Into",
        reality: "Reality",
        aboutDesc1: "As a passionate Full Stack Developer and Machine Learning Engineer, I specialize in creating robust web applications and intelligent AI solutions that drive business growth.",
        aboutDesc2: "My expertise spans across modern web technologies, backend development, and machine learning algorithms. I believe in delivering solutions that not only meet but exceed expectations.",
        letsCollaborate: "Let's Collaborate",
        
        // Services
        servicesTitle: "Services",
        whatIOffer: "What I Offer",
        offer: "",
        deliveringExcellence: "Delivering excellence through innovative digital solutions",
        webDevelopment: "Web Development",
        webDevDesc: "Creating stunning, responsive websites and web applications using cutting-edge technologies like React, JavaScript, and PHP.",
        machineLearning: "Machine Learning",
        mlDesc: "Building intelligent ML models for predictions, classification, and data-driven insights using Python and TensorFlow.",
        backendSolutions: "Backend Solutions",
        backendDesc: "Developing powerful server-side applications, RESTful APIs, and database solutions for scalable systems.",
        wordpressDev: "WordPress Development",
        wordpressDesc: "Creating custom WordPress websites, themes, plugins, and WooCommerce online stores.",
        uiuxDesign: "UI/UX Design",
        uiuxDesc: "Creating intuitive user interfaces and exceptional user experiences using Figma. Designing prototypes, wireframes, and modern visual designs.",
        
        // Skills
        skillsTitle: "Skills",
        myExpertise: "My Expertise",
        my: "My",
        expertise: "Expertise",
        technologies: "Technologies I use to bring visions to life",
        
        // Stats
        yearsOfExcellence: "Years of",
        excellence: "Excellence",
        
        // Projects
        portfolio: "Portfolio",
        featuredProjects: "Featured Projects",
        projectsSubtitle: "A showcase of my technical prowess and creativity",
        
        // Project 1
        housePriceTitle: "House Price Prediction",
        housePriceDesc: "Intelligent ML model predicting property prices with high accuracy using regression algorithms.",
        code: "Code",
        demo: "Demo",
        
        // Project 2
        portfolioTitle: "Personal Portfolio",
        portfolioDesc: "Modern, responsive portfolio with smooth animations and stunning visual effects.",
        
        // Project 3
        schoolTitle: "School Management System",
        schoolDesc: "Comprehensive school management with student records, grades, and attendance tracking.",
        
        // Project 4
        ecommerceTitle: "E-Commerce Platform",
        ecommerceDesc: "Feature-rich online store with cart, payments, and comprehensive admin panel.",
        
        // Contact
        contactTitle: "Contact",
        contactSubtitle: "Have a project in mind? Let's create something amazing together.",
        emailMe: "Email Me",
        callMe: "Call Me",
        location: "Location",
        yourName: "Your Name",
        yourEmail: "Your Email",
        subject: "Subject",
        yourMessage: "Your Message",
        sendMessage: "Send Message",
        
        // Footer
        footerDesc: "Full Stack Developer & ML Engineer",
        copyright: "© 2026 Amir Hamza. Built with code, powered by passion.",
        
        // Scroll
        scroll: "Scroll"
    },
    ur: {
        // Navigation
        home: "ہوم",
        about: "متعلقہ",
        services: "خدمات",
        skills: "مہارتیں",
        projects: "پروجیکٹس",
        contact: "رابطہ",
        letsTalk: "بات چیت کریں",
        
        // Hero
        available: "نئے موقعوں کے لیے دستیاب",
        hiIm: "میں ہوں",
        amirHamza: "عامر حمزہ",
        building: "تعمیر کر رہا ہوں",
        extraordinary: "غیر معمولی",
        digitalExperiences: "ڈیجیٹل تجربات",
        heroDesc: "میں عامر حمزہ ہوں — ایک فول اسٹیک ڈویلپر اور مشین لرننگ انجینئر جو جدید حل بنانے کے لیے وقف ہے۔",
        exploreWork: "کام دیکھیں",
        getInTouch: "رابطہ کریں",
        yearsExperience: "سال کا<br>تجربہ",
        projectsCompleted: "مکمل<br>پروجیکٹس",
        happyClients: "خوش<br>کلائنٹس",
        
        // About
        aboutMe: "میرے بارے میں",
        transformingIdeas: "خیالات کو",
        reality: "حقیقت میں تبدیل کرنا",
        aboutDesc1: "بطور پرجوش فول اسٹیک ڈویلپر اور مشین لرننگ انجینئر، میں مضبوط ویب ایپلیکیشنز اور ذہین AI سلوشنز بنانے میں مہارت رکھتا ہوں۔",
        aboutDesc2: "میری مہارت جدید ویب ٹیکنالوجیز، بیک اینڈ ڈویلپمنٹ، اور مشین لرننگ الگورتھم پر محیط ہے۔",
        letsCollaborate: "آؤ مل کر کام کریں",
        
        // Services
        servicesTitle: "خدمات",
        whatIOffer: "میں کیا",
        offer: "پیش کرتا ہوں",
        deliveringExcellence: "جدید ڈیجیٹل سلوشنز کے ذریعے عمدگی فراہم کرنا",
        webDevelopment: "ویب ڈویلپمنٹ",
        webDevDesc: "React، JavaScript، اور PHP جیسی جدید ٹیکنالوجیز کا استعال کرتے ہوئے خوبصورت، ریسپانسویب سائٹس اور ویب ایپلیکیشنز بنانا۔",
        machineLearning: "مشین لرننگ",
        mlDesc: "Python اور TensorFlow کا استعال کرتے ہوئے پیشن گوئی، درجہ بندی، اور ڈیٹا پر مبنی معلومات کے لیے ذہین ML ماڈلز بنانا۔",
        backendSolutions: "بیک اینڈ سلوشنز",
        backendDesc: "پیمانے کے قابل سسٹم کے لیے طاقتور سرور سائیڈ ایپلیکیشنز، RESTful APIs، اور ڈیٹابیس سلوشنز تیار کرنا۔",
        wordpressDev: "ورڈپریس ڈویلپمنٹ",
        wordpressDesc: "کسٹم ورڈپریس ویب سائٹس، تھیمز، پلگ انز، اور ووکامرس آن لائن اسٹورز بنانا۔",
        uiuxDesign: "UI/UX ڈیزائن",
        uiuxDesc: "Figma کا استعال کرتے ہوئے直觉ی یوزر انٹرفیس اور بہترین یوزر ایکسپرینس بنانا۔ پروٹوٹائپس، وائرفریمز، اور جدید ویجول ڈیزائنز ڈیزائن کرنا۔",
        
        // Skills
        skillsTitle: "مہارتیں",
        myExpertise: "میری",
        expertise: "مہارت",
        technologies: "ٹیکنالوجیز جو میرے خیالات کو زندگی دیتی ہیں",
        
        // Stats
        yearsOfExcellence: "سالوں کی",
        excellence: "علامتی کارکردگی",
        
        // Projects
        projectsSubtitle: "میری ٹیکنیکی مہارت اور تخلیقیت کا مظاہرہ",
        
        // Contact
        contactTitle: "رابطہ",
        contactSubtitle: "کیا آپ کے پاس کوئی پروجیکٹ ہے؟ آؤ مل کر کچھ حیرت انگیز بنائیں۔",
        emailMe: "ای میل کریں",
        callMe: "کال کریں",
        location: "مقام",
        yourName: "آپ کا نام",
        yourEmail: "آپ کا ای میل",
        subject: "موضوع",
        yourMessage: "آپ کا پیغام",
        sendMessage: "پیغام بھیجیں",
        
        // Footer
        footerDesc: "فول اسٹیک ڈویلپر اور ML انجینئر",
        copyright: "© 2026 عامر حمزہ۔ کوڈ سے بنایا، جوش سے چلایا۔"
    },
    ar: {
        // Navigation
        home: "الرئيسية",
        about: "من أنا",
        services: "الخدمات",
        skills: "المهارات",
        projects: "المشاريع",
        contact: "اتصل بي",
        letsTalk: "لنتحدث",
        
        // Hero
        available: "متاح لفرص جديدة",
        building: "أبني",
        extraordinary: "غير عادي",
        digitalExperiences: "تجارب رقمية",
        heroDesc: "أنا أمير حمزة — مطور.full stack ومهندس تعلم آلي مكرس لبناء حلول مبتكرة.",
        exploreWork: "استكشفاعمالي",
        getInTouch: "تواصل معي",
        yearsExperience: "سنوات<br>الخبرة",
        projectsCompleted: "مشاريع<br>مكتملة",
        happyClients: "عملاء سعداء",
        
        // About
        aboutMe: "من أنا",
        transformingIdeas: "تحويل الأفكار إلى",
        reality: "واقع",
        aboutDesc1: "كمطور full stack ومهندس تعلم آلي، متخصص في إنشاء تطبيقات ويب قوية وحلول ذكية.",
        aboutDesc2: "خبرتي تمتد عبر تقنيات الويب الحديثة وتطوير الخلفية وخوارزميات تعلم الآلة.",
        letsCollaborate: "لنتعاون",
        
        // Services
        servicesTitle: "الخدمات",
        whatIOffer: "ماذا",
        offer: "أقدم",
        deliveringExcellence: "تقديم التميز من خلال حلول رقمية مبتكرة",
        webDevelopment: "تطوير الويب",
        webDevDesc: "إنشاء مواقع وتطبيقات ويب مذهلة باستخدام تقنيات حديثة.",
        machineLearning: "تعلم الآلة",
        mlDesc: "بناء نماذج ذكية للتنبؤ والتصنيف باستخدام Python وTensorFlow.",
        backendSolutions: "حلول الخلفية",
        backendDesc: "تطوير تطبيقات جانب الخادم وواجهات API وقواعد بيانات قابلة للتوسع.",
        wordpressDev: "تطوير ووردبريس",
        wordpressDesc: "إنشاء مواقع ووردبريس مخصصة ومواضيع ومتاجر.",
        uiuxDesign: "تصميم UI/UX",
        uiuxDesc: "إنشاء واجهات مستخدم بديهية وتجارب مستخدم استثنائية.",
        
        // Skills
        skillsTitle: "المهارات",
        myExpertise: "خبراتي",
        expertise: "في",
        technologies: "التقنيات التي أستخدمها لإحياء الرؤى",
        
        // Projects
        projectsSubtitle: "عرض لإبداعي ومهاراتي التقنية",
        
        // Contact
        contactTitle: "اتصل بي",
        contactSubtitle: "هل لديك مشروع في ذهنك؟ لنتعاون لإبداع شيء رائع",
        emailMe: "راسلني",
        callMe: "اتصل بي",
        location: "الموقع",
        yourName: "اسمك",
        yourEmail: "بريدك الإلكتروني",
        subject: "الموضوع",
        yourMessage: "رسالتك",
        sendMessage: "إرسال الرسالة",
        
        // Footer
        footerDesc: "مطور.full stack ومهندس ML",
        copyright: "© 2026 أمير حمزة. مبني بالكود، مدفوع بالشغف."
    },
    fr: {
        home: "Accueil",
        about: "À propos",
        services: "Services",
        skills: "Compétences",
        projects: "Projets",
        contact: "Contact",
        letsTalk: "Parlons",
        available: "Disponible pour nouvelles opportunités",
        building: "Je construis",
        extraordinary: "Extraordinaires",
        digitalExperiences: "Expériences digitales",
        exploreWork: "Voir mes projets",
        getInTouch: "Me contacter",
        yearsExperience: "Années<br>Expérience",
        projectsCompleted: "Projets<br>Terminés",
        happyClients: "Clients<br>Satisfaits",
        aboutMe: "À propos de moi",
        transformingIdeas: "Transformer les idées en",
        reality: "Réalité",
        letsCollaborate: "Collaborons",
        servicesTitle: "Services",
        whatIOffer: "Ce que je",
        offer: "Propose",
        deliveringExcellence: "L'excellence à travers des solutions numériques innovantes",
        webDevelopment: "Développement Web",
        machineLearning: "Machine Learning",
        backendSolutions: "Solutions Backend",
        wordpressDev: "Développement WordPress",
        uiuxDesign: "Design UI/UX",
        skillsTitle: "Compétences",
        myExpertise: "Mon Expertise",
        expertise: "en",
        technologies: "Technologies que j'utilise pour donner vie aux visions",
        
        // Projects
        projectsSubtitle: "Une vitrine de mes compétences techniques et créatives",
        
        // Contact
        contactTitle: "Contact",
        contactSubtitle: "Vous avez un projet en tête? Créons quelque chose d'incroyable ensemble.",
        emailMe: "M'envoyer un email",
        callMe: "M'appeler",
        location: "Localisation",
        yourName: "Votre nom",
        yourEmail: "Votre email",
        subject: "Sujet",
        yourMessage: "Votre message",
        sendMessage: "Envoyer",
        
        // Footer
        footerDesc: "Développeur Full Stack & Ingénieur ML",
        copyright: "© 2026 Amir Hamza. Built with code, powered by passion."
    },
    es: {
        home: "Inicio",
        about: "Sobre mí",
        services: "Servicios",
        skills: "Habilidades",
        projects: "Proyectos",
        contact: "Contacto",
        letsTalk: "Hablemos",
        available: "Disponible para nuevas oportunidades",
        building: "Construyendo",
        extraordinary: "Extraordinarias",
        digitalExperiences: "Experiencias digitales",
        exploreWork: "Ver proyectos",
        getInTouch: "Contactar",
        yearsExperience: "Años de",
        projectsCompleted: "Proyectos",
        happyClients: "Clientes",
        aboutMe: "Sobre mí",
        transformingIdeas: "Transformando ideas en",
        reality: "Realidad",
        letsCollaborate: "Colaboremos",
        servicesTitle: "Servicios",
        whatIOffer: "Lo que",
        offer: "Ofrezco",
        deliveringExcellence: "Entregando excelencia a través de soluciones digitales innovadoras",
        webDevelopment: "Desarrollo Web",
        machineLearning: "Machine Learning",
        backendSolutions: "Soluciones Backend",
        wordpressDev: "Desarrollo WordPress",
        uiuxDesign: "Diseño UI/UX",
        skillsTitle: "Habilidades",
        myExpertise: "Mi Experiencia",
        expertise: "en",
        technologies: "Tecnologías que uso para dar vida a las visiones",
        
        // Projects
        projectsSubtitle: "Una muestra de mis habilidades técnicas y creatividad",
        
        // Contact
        contactTitle: "Contacto",
        contactSubtitle: "¿Tienes un proyecto en mente? Creemos algo increíble juntos.",
        emailMe: "Enviar email",
        callMe: "Llamar",
        location: "Ubicación",
        yourName: "Tu nombre",
        yourEmail: "Tu email",
        subject: "Asunto",
        yourMessage: "Tu mensaje",
        sendMessage: "Enviar mensaje",
        
        // Footer
        footerDesc: "Desarrollador Full Stack & Ingeniero ML",
        copyright: "© 2026 Amir Hamza. Built with code, powered by passion."
    }
};

// Language Switcher
(function() {
    const langToggle = document.getElementById('langToggle');
    const langDropdown = document.getElementById('langDropdown');
    const langCurrent = document.querySelector('.lang-current');
    
    // Load saved language
    let currentLang = localStorage.getItem('portfolio-lang') || 'en';
    
    // Update language display
    function updateLangDisplay(lang) {
        const langNames = {
            en: 'EN',
            ur: 'اردو',
            ar: 'ع',
            fr: 'FR',
            es: 'ES'
        };
        langCurrent.textContent = langNames[lang];
        
        // Update active class
        document.querySelectorAll('.lang-option').forEach(opt => {
            opt.classList.remove('active');
            if (opt.getAttribute('data-lang') === lang) {
                opt.classList.add('active');
            }
        });
    }
    
    // Apply translations
function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;
    
    // Apply to all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.innerHTML = t[key];
        }
    });
    
    // Apply to placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) {
            el.placeholder = t[key];
        }
    });
    
    // Translate Hero section title - Hi, I'm Amir Hamza, Building Extraordinary, Digital Experiences
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle && t.hiIm && t.amirHamza) {
        heroTitle.innerHTML = t.hiIm + ' <span class="text-gradient">' + t.amirHamza + '</span><br>' + t.building + ' <span class="text-gradient">' + t.extraordinary + '</span><br>' + t.digitalExperiences;
    }
    
    // Translate Hero description
    const heroText = document.querySelector('.hero-text');
    if (heroText && t.heroDesc) {
        heroText.innerHTML = t.heroDesc;
    }
    
    // Translate About section title
    const aboutTitle = document.querySelector('.about-details .section-title');
    if (aboutTitle && t.transformingIdeas && t.reality) {
        aboutTitle.innerHTML = `${t.transformingIdeas} <span class="text-gradient">${t.reality}</span>`;
    }
    
    // Translate About descriptions
    document.querySelectorAll('.about-desc').forEach((el, i) => {
        if (i === 0 && t.aboutDesc1) el.textContent = t.aboutDesc1;
        if (i === 1 && t.aboutDesc2) el.textContent = t.aboutDesc2;
    });
    
    // Translate service titles and descriptions
    document.querySelectorAll('.service-box').forEach((box, i) => {
        const title = box.querySelector('h3');
        const desc = box.querySelector('p');
        
        if (i === 0 && title && t.webDevelopment) title.textContent = t.webDevelopment;
        if (i === 0 && desc && t.webDevDesc) desc.textContent = t.webDevDesc;
        
        if (i === 1 && title && t.mlTitle) title.textContent = t.mlTitle;
        if (i === 1 && desc && t.mlDesc) desc.textContent = t.mlDesc;
        
        if (i === 2 && title && t.backendTitle) title.textContent = t.backendTitle;
        if (i === 2 && desc && t.backendDesc) desc.textContent = t.backendDesc;
        
        if (i === 3 && title && t.wordpressTitle) title.textContent = t.wordpressTitle;
        if (i === 3 && desc && t.wordpressDesc) desc.textContent = t.wordpressDesc;
        
        if (i === 4 && title && t.uiuxTitle) title.textContent = t.uiuxTitle;
        if (i === 4 && desc && t.uiuxDesc) desc.textContent = t.uiuxDesc;
    });
    
    // Translate project titles and descriptions
    document.querySelectorAll('.project-info').forEach((info, i) => {
        const title = info.querySelector('h3');
        const desc = info.querySelector('p');
        
        if (i === 0 && title && t.housePriceTitle) title.textContent = t.housePriceTitle;
        if (i === 0 && desc && t.housePriceDesc) desc.textContent = t.housePriceDesc;
        
        if (i === 1 && title && t.portfolioTitle) title.textContent = t.portfolioTitle;
        if (i === 1 && desc && t.portfolioDesc) desc.textContent = t.portfolioDesc;
        
        if (i === 2 && title && t.schoolTitle) title.textContent = t.schoolTitle;
        if (i === 2 && desc && t.schoolDesc) desc.textContent = t.schoolDesc;
        
        if (i === 3 && title && t.ecommerceTitle) title.textContent = t.ecommerceTitle;
        if (i === 3 && desc && t.ecommerceDesc) desc.textContent = t.ecommerceDesc;
    });
    
    // Translate project links
    document.querySelectorAll('.project-links a').forEach((link, i) => {
        if (i % 2 === 0 && t.code) link.innerHTML = `<i class="fab fa-github"></i> ${t.code}`;
        if (i % 2 === 1 && t.demo) link.innerHTML = `<i class="fas fa-external-link-alt"></i> ${t.demo}`;
    });
    
    // Also handle special cases
    // Nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === '#home') link.innerHTML = `<span>01</span> ${t.home}`;
        if (href === '#about') link.innerHTML = `<span>02</span> ${t.about}`;
        if (href === '#services') link.innerHTML = `<span>03</span> ${t.services}`;
        if (href === '#skills') link.innerHTML = `<span>04</span> ${t.skills}`;
        if (href === '#projects') link.innerHTML = `<span>05</span> ${t.projects}`;
        if (href === '#contact') link.innerHTML = `<span>06</span> ${t.contact}`;
    });
    
    // Footer nav
    document.querySelectorAll('.footer-nav a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === '#home') link.textContent = t.home;
        if (href === '#about') link.textContent = t.about;
        if (href === '#services') link.textContent = t.services;
        if (href === '#projects') link.textContent = t.projects;
        if (href === '#contact') link.textContent = t.contact;
    });
}
    
    // Initialize
    updateLangDisplay(currentLang);
    applyTranslations(currentLang);
    
    // Toggle dropdown
    if (langToggle) {
        langToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            langDropdown.classList.toggle('show');
            // Close theme dropdown if open
            document.getElementById('themeDropdown').classList.remove('show');
        });
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!langDropdown.contains(e.target) && e.target !== langToggle) {
            langDropdown.classList.remove('show');
        }
    });
    
    // Language selection
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            currentLang = lang;
            localStorage.setItem('portfolio-lang', lang);
            updateLangDisplay(lang);
            applyTranslations(lang);
            langDropdown.classList.remove('show');
        });
    });
})();
(function() {
    const themeToggle = document.getElementById('themeToggle');
    const themeDropdown = document.getElementById('themeDropdown');
    
    // Load saved theme
    const savedTheme = localStorage.getItem('portfolio-theme') || 'ocean';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Update active class on theme options
    function updateActiveTheme(theme) {
        document.querySelectorAll('.theme-option').forEach(opt => {
            opt.classList.remove('active');
            if (opt.getAttribute('data-theme') === theme) {
                opt.classList.add('active');
            }
        });
    }
    updateActiveTheme(savedTheme);
    
    // Toggle dropdown
    if (themeToggle) {
        themeToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            themeDropdown.classList.toggle('show');
        });
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!themeDropdown.contains(e.target) && e.target !== themeToggle) {
            themeDropdown.classList.remove('show');
        }
    });
    
    // Theme selection
    document.querySelectorAll('.theme-option').forEach(option => {
        option.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('portfolio-theme', theme);
            updateActiveTheme(theme);
            themeDropdown.classList.remove('show');
        });
    });
})();

// ==================== PRELOADER ====================
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    setTimeout(function() {
        preloader.classList.add('hidden');
        // Trigger entrance animations after preloader
        document.body.style.overflow = 'visible';
    }, 1500);
});

// ==================== AOS ANIMATION ====================
AOS.init({
    duration: 1000,
    once: false,
    offset: 100,
    easing: 'ease-out-cubic',
    mirror: true
});

// ==================== CUSTOM CURSOR ====================
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

if (cursorDot && cursorOutline) {
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Smooth cursor following
    function updateCursor() {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;
        
        cursorX += dx * 0.15;
        cursorY += dy * 0.15;
        
        cursorDot.style.left = cursorX + 'px';
        cursorDot.style.top = cursorY + 'px';
        
        cursorOutline.style.left = cursorX + 'px';
        cursorOutline.style.top = cursorY + 'px';
        
        requestAnimationFrame(updateCursor);
    }
    updateCursor();

    // Hover effects on interactive elements
    const hoverElements = document.querySelectorAll('a, button, .service-box, .project-card, .contact-card-item, .info-badge, .years-badge, .tech-tags span, .expertise-item, .footer-nav a, .footer-social a');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.8)';
            cursorOutline.style.background = 'rgba(14, 165, 233, 0.15)';
            cursorOutline.style.borderColor = 'var(--primary)';
        });
        el.addEventListener('mouseleave', () => {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorOutline.style.background = 'transparent';
            cursorOutline.style.borderColor = 'var(--primary)';
        });
    });
}

// ==================== NAVBAR ====================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ==================== TILT EFFECT FOR CARDS ====================
document.querySelectorAll('.service-box, .project-card, .contact-card-item').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

// ==================== BACK TO TOP ====================
const backToTop = document.getElementById('backToTop');

if (backToTop) {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 400) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ==================== SKILL PROGRESS BARS ====================
const progressBars = document.querySelectorAll('.progress-fill');

if (progressBars.length > 0) {
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.getAttribute('data-width');
                
                // Animate with delay
                setTimeout(() => {
                    bar.style.width = width + '%';
                }, 200);
                
                // Add glow effect when complete
                setTimeout(() => {
                    bar.style.boxShadow = '0 0 20px rgba(14, 165, 233, 0.5)';
                }, 1500);
            }
        });
    }, { threshold: 0.3 });

    progressBars.forEach(bar => skillObserver.observe(bar));
}

// ==================== COUNTER ANIMATION ====================
// Run when stats section comes into view
function startCounterAnimation() {
    const statValues = document.querySelectorAll('.stat-value[data-target]');
    console.log('Found counters:', statValues.length);
    
    if (statValues.length === 0) {
        console.log('No counters found!');
        return;
    }
    
    statValues.forEach(counter => {
        // Skip if already animated
        if (counter.classList.contains('animated')) return;
        counter.classList.add('animated');
        
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2500;
        const startTime = performance.now();
        
        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(target * easeOutQuart);
            
            counter.textContent = current;
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        }
        
        requestAnimationFrame(updateCounter);
    });
}

// Initialize counter animation
function initCounter() {
    const heroStats = document.querySelector('.hero-stats');
    
    // Check if element exists
    if (!heroStats) {
        console.log('Hero stats section not found!');
        return;
    }
    
    // Get element position
    const rect = heroStats.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    
    // If already visible, animate immediately
    if (isVisible) {
        console.log('Stats already visible, animating now');
        startCounterAnimation();
    } else {
        // Otherwise wait for scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log('Stats now visible via scroll');
                    startCounterAnimation();
                    observer.disconnect();
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(heroStats);
    }
}

// Run on DOM ready
document.addEventListener('DOMContentLoaded', initCounter);

// Also run after a short delay as fallback
setTimeout(initCounter, 500);

// ==================== MAGNETIC BUTTON EFFECT ====================
document.querySelectorAll('.btn-main, .btn-alt, .nav-cta-btn').forEach(btn => {
    btn.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        this.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.05)`;
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== MOBILE MENU ====================
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const collapse = document.querySelector('.navbar-collapse');
        if (collapse.classList.contains('show')) {
            collapse.classList.remove('show');
        }
    });
});

// ==================== CONTACT FORM ====================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const btn = this.querySelector('.btn-main');
    const originalHTML = btn.innerHTML;
    
    // Get form values
    const name = this.querySelector('input[placeholder="Your Name"]').value;
    const email = this.querySelector('input[placeholder="Your Email"]').value;
    const subject = this.querySelector('input[placeholder="Subject"]').value;
    const message = this.querySelector('textarea[placeholder="Your Message"]').value;
    
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Sending...</span>';
    btn.disabled = true;
    
    // Send email using EmailJS
    const templateParams = {
        to_name: 'Amir',
        from_name: name,
        from_email: email,
        subject: subject,
        message: message
    };
    
    // Show success modal after short delay (simulating send)
    setTimeout(function() {
        // Show success modal
        const modal = document.getElementById('successModal');
        modal.classList.add('show');
        
        // Reset form
        contactForm.reset();
        btn.innerHTML = originalHTML;
        btn.disabled = false;
    }, 1500);
    
    // Actually send the email in background
    emailjs.send('service_9n98gh2', 'template_l48i66i', templateParams)
    .then(function(response) {
        console.log('Email sent successfully!', response.status, response.text);
    })
    .catch(function(error) {
        console.log('Email send failed:', error);
    });
});

// Modal close function
function closeModal() {
    const modal = document.getElementById('successModal');
    modal.classList.remove('show');
}

// Close modal on overlay click
document.getElementById('successModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// ==================== PARALLAX EFFECT ====================
const gradientOrbs = document.querySelectorAll('.gradient-orb');

document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;
    
    gradientOrbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.5;
        const rotate = (index + 1) * 10;
        orb.style.transform = `translate(${x * speed}px, ${y * speed}px) rotate(${rotate}deg)`;
    });
});

// ==================== SCROLL REVEAL ANIMATIONS ====================
const revealElements = document.querySelectorAll('.service-box, .project-card, .contact-card-item');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) rotateX(0)';
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px) rotateX(10deg)';
    el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    revealObserver.observe(el);
});

// ==================== ACTIVE NAV HIGHLIGHT ====================
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.style.color = 'var(--primary) !important';
                
                // Add underline animation
                navLink.style.position = 'relative';
            } else {
                navLink.style.color = '';
            }
        }
    });
});

// ==================== STAGGERED ANIMATIONS ====================
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
});

const serviceBoxes = document.querySelectorAll('.service-box');
serviceBoxes.forEach((box, index) => {
    box.style.transitionDelay = `${index * 0.15}s`;
});

const contactItems = document.querySelectorAll('.contact-card-item');
contactItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
});

// ==================== IMAGE HOVER ZOOM ====================
document.querySelectorAll('.project-img-wrap img, .image-frame img, .main-image img').forEach(img => {
    img.addEventListener('mouseover', function() {
        this.style.transition = 'transform 0.6s ease';
    });
});

// ==================== EXPERIENCE BADGE PULSE ====================
const experienceBadge = document.querySelector('.years-badge');
if (experienceBadge) {
    experienceBadge.addEventListener('mouseenter', function() {
        this.style.animation = 'none';
    });
    
    experienceBadge.addEventListener('mouseleave', function() {
        this.style.animation = 'pulse-badge 2s ease-in-out infinite';
    });
}

// ==================== FLOATING BADGES ====================
const infoBadges = document.querySelectorAll('.info-badge');
infoBadges.forEach((badge, index) => {
    badge.style.animationDelay = `${index * 2}s`;
});

// ==================== SCROLL PROGRESS BAR ====================
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    // You can add a progress bar based on this value
});

// ==================== MOUSE TRAIL EFFECT ====================
const trailElements = [];
document.addEventListener('mousemove', function(e) {
    // Create trail on fast movement
    if (Math.abs(e.movementX) > 5 || Math.abs(e.movementY) > 5) {
        // Add your trail effect here if needed
    }
});

// ==================== TEXT REVEAL ON SCROLL ====================
const textElements = document.querySelectorAll('.hero-title, .section-title');
textElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s ease';
});

const textObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

textElements.forEach(el => textObserver.observe(el));

// ==================== BUTTON RIPPLE EFFECT ====================
document.querySelectorAll('.btn-main, .btn-alt').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            width: 100px;
            height: 100px;
            left: ${x - 50}px;
            top: ${y - 50}px;
            transform: scale(0);
            animation: ripple-effect 0.6s linear;
            pointer-events: none;
        `;
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple-effect {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ==================== KEYBOARD SUPPORT ====================
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const collapse = document.querySelector('.navbar-collapse');
        if (collapse.classList.contains('show')) {
            collapse.classList.remove('show');
        }
    }
});

// Tab navigation support
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('focus', function() {
        this.style.color = 'var(--primary)';
    });
    link.addEventListener('blur', function() {
        this.style.color = '';
    });
});

// ==================== IMAGE ERROR HANDLING ====================
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        this.style.background = 'linear-gradient(135deg, var(--dark-3), var(--dark-2))';
        this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect fill="%231e293b" width="400" height="300"/%3E%3Ctext fill="%2394a3b8" font-family="sans-serif" font-size="16" x="50%25" y="50%25" text-anchor="middle"%3EImage%3C/text%3E%3C/svg%3E';
    });
});

// ==================== PERFORMANCE ====================
// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==================== CONSOLE MESSAGE ====================
console.log('%c Welcome to Amir Hamza Portfolio ', 'background: linear-gradient(135deg, #0ea5e9, #8b5cf6); color: white; padding: 12px 24px; font-size: 14px; font-weight: bold; border-radius: 8px;');
console.log('%c Full Stack Developer & ML Engineer ', 'color: #0ea5e9; font-size: 12px;');

// ==================== AI CHATBOT ====================
document.addEventListener('DOMContentLoaded', function() {
    const chatbot = document.getElementById('chatbot');
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotWindow = document.getElementById('chatbotWindow');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotSend = document.getElementById('chatbotSend');
    const chatbotInputArea = document.getElementById('chatbotInputArea');
    const chatbotForm = document.getElementById('chatbotForm');
    const chatbotSubmit = document.getElementById('chatbotSubmit');
    const chatbotNotification = document.getElementById('chatbotNotification');
    
    // Chat state
    let conversationState = 'greeting'; // greeting, asking, collecting_info, done
    let userName = '';
    let userEmail = '';
    let userMessage = '';
    
    // Bot responses based on keywords
    const botResponses = {
        greetings: ['hello', 'hi', 'hey', 'good morning', 'good evening', 'good afternoon'],
        services: ['service', 'services', 'what do you do', 'what can you help', 'offer'],
        skills: ['skill', 'skills', 'technology', 'technologies', 'tech', 'stack', 'expert'],
        projects: ['project', 'projects', 'portfolio', 'work', 'done', 'built', 'created'],
        pricing: ['price', 'pricing', 'cost', 'budget', 'fee', 'charge'],
        contact: ['contact', 'email', 'phone', 'reach', 'talk'],
        about: ['about', 'who', 'yourself', 'bio', 'background'],
        hire: ['hire', 'available', 'job', 'work', 'freelance', 'commission'],
        thanks: ['thank', 'thanks', 'appreciate', 'great', 'nice']
    };
    
    const botAnswers = {
        greetings: "Hello! Great to meet you! 😊 I'm here to help you learn more about Amir's services. What would you like to know?",
        services: "Amir offers:\n• Web Development (React, JavaScript, PHP)\n• Machine Learning (Python, TensorFlow)\n• Backend Solutions (APIs, MySQL)\n• WordPress Development\n• UI/UX Design (Figma)\n\nWhich service interests you?",
        skills: "Amir's key skills include:\n✓ HTML/CSS/JavaScript\n✓ React & Node.js\n✓ Python & Machine Learning\n✓ PHP & MySQL\n✓ WordPress Development\n✓ UI/UX Design with Figma\n\nWould you like to see his projects?",
        projects: "Amir has completed 25+ projects including:\n🏠 House Price Prediction (ML)\n💼 Personal Portfolio Websites\n🏫 School Management System\n🛒 E-Commerce Platforms\n\nWould you like more details about any project?",
        pricing: "For pricing inquiries, please share your project details. Amir offers competitive rates for:\n• Web Development\n• ML Solutions\n• WordPress Sites\n• Custom Projects\n\nWould you like to discuss your project?",
        contact: "You can reach Amir via:\n📧 hamzaaaamir007@gmail.com\n📱 +92 344 7340060\n📍 Pakistan, Peshawar\n\nOr use the contact form!",
        about: "Amir Hamza is a Full Stack Developer & Machine Learning Engineer with 3+ years of experience. He specializes in building innovative web applications and AI solutions.",
        hire: "Yes! Amir is available for freelance work and full-time opportunities. Feel free to discuss your project requirements.",
        thanks: "You're welcome! Happy to help! Is there anything else you'd like to know?"
    };
    
    // Toggle chatbot
    if (chatbotToggle) {
        chatbotToggle.addEventListener('click', function() {
            chatbotWindow.classList.toggle('show');
            chatbotNotification.style.display = 'none';
        });
    }
    
    if (chatbotClose) {
        chatbotClose.addEventListener('click', function() {
            chatbotWindow.classList.remove('show');
        });
    }
    
    // Send message
    function sendMessage() {
        const message = chatbotInput.value.trim().toLowerCase();
        if (!message) return;
        
        // Add user message
        addMessage(message, 'user');
        chatbotInput.value = '';
        
        // Process message and get response
        setTimeout(() => {
            const response = getBotResponse(message);
            addMessage(response, 'bot');
            
            // Check if we should collect user info
            if (conversationState === 'asking' || message.includes('contact') || message.includes('hire') || message.includes('project')) {
                setTimeout(() => {
                    askForContactInfo();
                }, 1000);
            }
        }, 500);
    }
    
    function getBotResponse(message) {
        // Check for keywords
        for (const [key, keywords] of Object.entries(botResponses)) {
            for (const keyword of keywords) {
                if (message.includes(keyword)) {
                    return botAnswers[key];
                }
            }
        }
        
        // Default response
        return "I'm not sure I understood that. Could you please rephrase? Or feel free to ask about services, skills, projects, or pricing!";
    }
    
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chatbot-message ${sender}`;
        messageDiv.innerHTML = `<div class="message-content"><p>${text.replace(/\n/g, '<br>')}</p></div>`;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    function askForContactInfo() {
        conversationState = 'collecting_info';
        addMessage("I'd love to help you! Could you share your contact details so Amir can get back to you?", 'bot');
        
        setTimeout(() => {
            chatbotInputArea.style.display = 'none';
            chatbotForm.style.display = 'flex';
        }, 500);
    }
    
    // Send button click
    if (chatbotSend) {
        chatbotSend.addEventListener('click', sendMessage);
    }
    
    // Enter key
    if (chatbotInput) {
        chatbotInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
    
    // Form submit
    if (chatbotSubmit) {
        chatbotSubmit.addEventListener('click', function() {
            const name = document.getElementById('chatbotName').value.trim();
            const email = document.getElementById('chatbotEmail').value.trim();
            const message = document.getElementById('chatbotMessage').value.trim();
            
            if (!name || !email || !message) {
                addMessage('Please fill in all fields.', 'bot');
                return;
            }
            
            // Store user info
            userName = name;
            userEmail = email;
            userMessage = message;
            
            // Show success
            chatbotForm.style.display = 'none';
            chatbotInputArea.style.display = 'flex';
            
            addMessage(`Thank you, ${name}! Your message has been received. Amir will contact you at ${email} soon!`, 'bot');
            
            conversationState = 'done';
            
            // Here you could send the data to a server/EmailJS
            console.log('Chatbot lead captured:', { name, email, message });
        });
    }
});

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    AOS.refresh();
    
    // Trigger initial animations
    setTimeout(() => {
        document.querySelector('.hero-title').style.opacity = '1';
        document.querySelector('.hero-title').style.transform = 'translateY(0)';
    }, 100);
});

// ==================== RESIZE HANDLER ====================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        AOS.refresh();
    }, 200);
});