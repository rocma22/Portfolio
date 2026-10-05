// ✏️ EDIT THIS FILE: your real info goes here.
export const EMAIL = "amine.hassnat@gmail.com";
export const PHONE = "+212 655 374 610";
export const LINKS = { linkedin: "https://linkedin.com/in/amine-hasnat", github: "https://github.com/your-username", cv: "/cv.pdf", wa: "https://wa.me/212655374610" };

export const SKILLS = {
  Frontend: ["React", "JavaScript ES6+", "TypeScript", "HTML5 / CSS3", "Tailwind CSS", "Responsive design"],
  Backend: ["Node.js", "Express.js", "PHP", "REST API design", "JWT auth", "Role-based access"],
  "SQL databases": ["MySQL", "Schema design", "Query optimization"],
  "NoSQL databases": ["MongoDB", "Document modeling"],
  Security: ["HTTPS", "JWT", "AES-256 encryption", "Web security best practices"],
  "Tools & practice": ["Git", "Agile / Scrum", "Unit & integration tests", "Apache config", "IT support"],
};

export const PROJECTS = [
  { id: "nouha", stack: ["React", "Vite", "i18n (EN/FR/AR)", "RTL"], live: "", code: "",
    en: ["Nouha Optic", "Bilingual website for an optician's shop.", "A responsive site for a real optical store in Morocco, with English, French and Arabic (right-to-left) support, an interactive focus-lens hero and a filterable frame collection."],
    fr: ["Nouha Optic", "Site bilingue pour une boutique d'optique.", "Un site responsive pour une vraie boutique d'optique au Maroc, avec anglais, français et arabe (RTL), un hero interactif et une collection filtrable."],
    ar: ["بصريات نهى", "موقع متعدد اللغات لمحل بصريات.", "موقع متجاوب لمحل بصريات حقيقي في المغرب، يدعم الإنجليزية والفرنسية والعربية (من اليمين إلى اليسار)، مع واجهة تفاعلية ومجموعة قابلة للتصفية."] },
 { id: "onee", stack: ["PHP", "MySQL", "JWT", "AES-256", "Apache"], live: "", code: "",
    en: ["ONEE employee dashboard", "Secure production dashboard with a PHP REST API.", "Built a normalized MySQL schema with optimized queries (30% faster data retrieval), PHP REST APIs with validation, HTTPS, JWT login and AES-256 encryption. Testing cut application errors by 25%."],
    fr: ["Tableau de bord ONEE", "Tableau de bord sécurisé avec API REST PHP.", "Schéma MySQL normalisé et requêtes optimisées (récupération des données 30 % plus rapide), API REST PHP, HTTPS, JWT et chiffrement AES-256. Les tests ont réduit les erreurs de 25 %."],
    ar: ["لوحة تحكم ONEE", "لوحة تحكم آمنة بواجهة PHP REST.", "قاعدة MySQL مُطبّعة واستعلامات محسّنة (استرجاع أسرع بنسبة 30%)، وواجهات REST بـ PHP مع HTTPS وJWT وتشفير AES-256. الاختبارات خفّضت الأخطاء بنسبة 25%."] },
  { id: "cnmh", stack: ["JavaScript", "PHP", "MySQL", "RBAC"], live: "", code: "",
    en: ["Patient management app (CNMH)", "End-to-end healthcare app with three user roles.", "Built from requirements to deployment: patient records, appointment scheduling and medical history, with role-based access for admin, medical staff and patients, plus backups and user training."],
    fr: ["Gestion des patients (CNMH)", "Application santé complète avec trois rôles.", "Du recueil des besoins au déploiement : dossiers patients, rendez-vous et historique médical, avec accès par rôle (admin, personnel médical, patients), sauvegardes et formation."],
    ar: ["إدارة المرضى (CNMH)", "تطبيق صحي متكامل بثلاثة أدوار.", "من تحليل المتطلبات إلى النشر: ملفات المرضى والمواعيد والتاريخ الطبي، مع صلاحيات للمدير والطاقم الطبي والمرضى، ونسخ احتياطي وتدريب المستخدمين."] },
];

export const EXPERIENCE = [
  { role: "Web Developer Intern", org: "ONEE, Kenitra", date: "Mar 2023 – May 2023", tags: ["PHP", "MySQL", "JWT"], pts: [
    "Turned business requirements into technical specifications and architecture documentation.",
    "Designed a normalized MySQL schema with optimized queries: 30% faster data retrieval.",
    "Built PHP REST APIs with error handling and input validation for a production employee dashboard.",
    "Configured Apache and secured endpoints; implemented HTTPS, JWT and AES-256 encryption.",
    "Reduced application errors by 25% through systematic testing and debugging."] },
  { role: "Developer Intern", org: "CNMH", date: "Apr 2023 – Oct 2023", tags: ["JavaScript", "PHP", "RBAC"], pts: [
    "Delivered a patient management app end to end, from requirements to deployment.",
    "Implemented authentication and role-based access for admin, medical staff and patients.",
    "Built patient records, appointment scheduling and medical history features.",
    "Worked with medical staff to turn healthcare workflows into software features.",
    "Handled updates, security patches, backups and recovery, plus user training and documentation."] },
  { role: "IT Support Technician", org: "Miage School, Kenitra", date: "2021 – 2023", tags: ["Support", "Networks", "Hardware"], pts: [
    "First-level support for staff and students: network, printer and password issues.",
    "Installed operating systems and software, and set up workstations.",
    "Deployed and maintained IT hardware; kept the equipment inventory.",
    "Handled support tickets for production teams."] },
];
export const SPOKEN = [["Arabic", "Native", 100], ["English", "B2 · professional working", 75], ["French", "Reading & writing", 65]];
export const CODE_LANGS = ["JavaScript", "TypeScript", "PHP", "SQL", "HTML5", "CSS3"];
