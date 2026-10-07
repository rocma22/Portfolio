import { useEffect, useRef, useState } from "react";
import { EMAIL, PHONE, LINKS, SKILLS, PROJECTS } from "./data.js";
import { Impact, Experience, Languages, Flow } from "./extras.jsx";

const T = {
  en: { dir: "ltr", nav: ["About", "Skills", "Projects", "Contact"], hello: "Full stack developer", h1: "I build web apps from the database to the screen.",
    about: "About me", aboutP: "I am Amine Hasnat, a full stack developer who works with React and Node.js and is comfortable with both SQL (MySQL) and NoSQL (MongoDB) databases. I secure apps with JWT, work in Git and GitHub every day, and care about clean, responsive interfaces.",
    stats: [["SQL + NoSQL", "databases"], ["EN · FR · AR", "languages"], ["JWT", "auth"]],
    skills: "Skills", projects: "Projects", open: "View details", close: "Close", live: "Live site", code: "Source code", none: "Link coming soon",
    cv: "Download CV", hire: "Contact me", contact: "Let's work together", name: "Your name", mail: "Your email", msg: "Message", send: "Send message",
    copy: "Copy email", copied: "Email copied", cvT: "Downloading CV…", sentT: "Message ready to send in your mail app", needed: "Please fill in every field.",
    confirmT: "Open your mail app?", confirmP: "Your message will open in your email app so you can send it.", yes: "Yes, open", no: "Cancel", theme: "Switch theme", prev: "Previous", next: "Next" },
  fr: { dir: "ltr", nav: ["À propos", "Compétences", "Projets", "Contact"], hello: "Développeur full stack", h1: "Je construis des applications web, de la base de données à l'écran.",
    about: "À propos", aboutP: "Je suis Amine Hasnat, développeur full stack avec React et Node.js, à l'aise avec les bases SQL (MySQL) et NoSQL (MongoDB). Je sécurise mes applications avec JWT, j'utilise Git et GitHub au quotidien et je soigne les interfaces propres et responsives.",
    stats: [["SQL + NoSQL", "bases de données"], ["EN · FR · AR", "langues"], ["JWT", "authentification"]],
    skills: "Compétences", projects: "Projets", open: "Voir les détails", close: "Fermer", live: "Site en ligne", code: "Code source", none: "Lien bientôt disponible",
    cv: "Télécharger le CV", hire: "Me contacter", contact: "Travaillons ensemble", name: "Votre nom", mail: "Votre e-mail", msg: "Message", send: "Envoyer le message",
    copy: "Copier l'e-mail", copied: "E-mail copié", cvT: "Téléchargement du CV…", sentT: "Message prêt à envoyer dans votre messagerie", needed: "Veuillez remplir tous les champs.",
    confirmT: "Ouvrir votre messagerie ?", confirmP: "Votre message s'ouvrira dans votre application e-mail pour l'envoyer.", yes: "Oui, ouvrir", no: "Annuler", theme: "Changer de thème", prev: "Précédent", next: "Suivant" },
  ar: { dir: "rtl", nav: ["من أنا", "المهارات", "المشاريع", "تواصل"], hello: "مطوّر ويب متكامل", h1: "أبني تطبيقات الويب من قاعدة البيانات إلى الشاشة.",
    about: "من أنا", aboutP: "أنا أمين روكما، مطوّر ويب متكامل أعمل بـ React وNode.js، وأتقن قواعد البيانات SQL (MySQL) وNoSQL (MongoDB). أؤمّن التطبيقات بـ JWT، وأستخدم Git وGitHub يومياً، وأهتم بواجهات نظيفة ومتجاوبة.",
    stats: [["SQL + NoSQL", "قواعد البيانات"], ["EN · FR · AR", "اللغات"], ["JWT", "المصادقة"]],
    skills: "المهارات", projects: "المشاريع", open: "عرض التفاصيل", close: "إغلاق", live: "الموقع المباشر", code: "الكود المصدري", none: "الرابط قريباً",
    cv: "تحميل السيرة الذاتية", hire: "تواصل معي", contact: "لنعمل معاً", name: "اسمك", mail: "بريدك الإلكتروني", msg: "الرسالة", send: "إرسال الرسالة",
    copy: "نسخ البريد", copied: "تم نسخ البريد", cvT: "جارٍ تحميل السيرة الذاتية…", sentT: "الرسالة جاهزة للإرسال في تطبيق البريد", needed: "يرجى ملء جميع الحقول.",
    confirmT: "فتح تطبيق البريد؟", confirmP: "ستُفتح رسالتك في تطبيق البريد لإرسالها.", yes: "نعم، افتح", no: "إلغاء", theme: "تغيير المظهر", prev: "السابق", next: "التالي" },
};


const T2 = {
  en: { nav: ["About", "Experience", "Skills", "Languages", "Projects", "Contact"], avail: "Open to work · Kenitra, Morocco",
    aboutP: "I am Amine Hasnat, a full stack web developer. I build secure, responsive apps with React, TypeScript, Node.js and PHP, backed by MySQL and MongoDB. I have shipped real systems for ONEE and CNMH, improved query speed by 30%, cut errors by 25%, and I work comfortably in Agile teams.",
    stats: [["SQL + NoSQL", "databases"], ["Agile / Scrum", "team workflow"], ["JWT + AES-256", "security"]],
    i: ["faster data retrieval", "fewer application errors", "user roles secured with RBAC", "database types: MySQL + MongoDB"],
    exp: "Experience", expNote: "Tap a role to open or close its details.",
    langs: "Languages", spoken: "Spoken", codeL: "Programming", edu: "Education", vol: "Volunteering: active in community associations and social initiatives.",
    eduP: ["Specialized Technician in Development, Miage School (2021–2023)", "Bac+1 English Literature, Ibn Tofail University (2018–2019)"],
    flowT: "Try it: how my role-based security works", flowP: "Pick a user role, then send a request. You will see the login, the signed token and the permission check that decide what the API returns.",
    flowS: ["Login", "Server signs JWT", "Request with token", "Role check"], run: "Send", phone: "Call or WhatsApp" },
  fr: { nav: ["À propos", "Expérience", "Compétences", "Langues", "Projets", "Contact"], avail: "Disponible · Kénitra, Maroc",
    aboutP: "Je suis Amine Hasnat, développeur web full stack. Je crée des applications sécurisées et responsives avec React, TypeScript, Node.js et PHP, appuyées par MySQL et MongoDB. J'ai livré de vrais systèmes pour l'ONEE et le CNMH, accéléré les requêtes de 30 %, réduit les erreurs de 25 %, et je travaille à l'aise en équipe Agile.",
    stats: [["SQL + NoSQL", "bases de données"], ["Agile / Scrum", "méthode d'équipe"], ["JWT + AES-256", "sécurité"]],
    i: ["récupération de données plus rapide", "d'erreurs en moins", "rôles utilisateur sécurisés (RBAC)", "types de bases : MySQL + MongoDB"],
    exp: "Expérience", expNote: "Touchez un poste pour ouvrir ou fermer les détails (en anglais).",
    langs: "Langues", spoken: "Parlées", codeL: "Programmation", edu: "Formation", vol: "Bénévolat : actif dans des associations et initiatives sociales.",
    eduP: ["Technicien spécialisé en développement, Miage School (2021–2023)", "Bac+1 Littérature anglaise, Université Ibn Tofail (2018–2019)"],
    flowT: "Essayez : ma sécurité par rôles", flowP: "Choisissez un rôle puis envoyez une requête. Vous verrez la connexion, le jeton signé et la vérification des droits qui décident de la réponse de l'API.",
    flowS: ["Connexion", "Le serveur signe le JWT", "Requête avec jeton", "Vérification du rôle"], run: "Envoyer", phone: "Appeler ou WhatsApp" },
  ar: { nav: ["من أنا", "الخبرة", "المهارات", "اللغات", "المشاريع", "تواصل"], avail: "متاح للعمل · القنيطرة، المغرب",
    aboutP: "أنا أمين حسنات، مطوّر ويب متكامل. أبني تطبيقات آمنة ومتجاوبة بـ React وTypeScript وNode.js وPHP مع MySQL وMongoDB. أنجزت أنظمة حقيقية لـ ONEE وCNMH، وحسّنت سرعة الاستعلامات بنسبة 30% وخفّضت الأخطاء بنسبة 25%، وأعمل بسهولة ضمن فرق Agile.",
    stats: [["SQL + NoSQL", "قواعد البيانات"], ["Agile / Scrum", "منهجية العمل"], ["JWT + AES-256", "الأمان"]],
    i: ["استرجاع أسرع للبيانات", "أخطاء أقل في التطبيقات", "أدوار مستخدمين مؤمَّنة (RBAC)", "نوعا قواعد بيانات: MySQL وMongoDB"],
    exp: "الخبرة", expNote: "اضغط على المنصب لفتح التفاصيل أو إغلاقها (بالإنجليزية).",
    langs: "اللغات", spoken: "اللغات المحكية", codeL: "لغات البرمجة", edu: "التكوين", vol: "العمل التطوعي: نشيط في جمعيات ومبادرات اجتماعية.",
    eduP: ["تقني متخصص في التطوير، Miage School (2021–2023)", "باك+1 الأدب الإنجليزي، جامعة ابن طفيل (2018–2019)"],
    flowT: "جرّب: كيف يعمل أمان الأدوار عندي", flowP: "اختر دور المستخدم ثم أرسل طلباً. سترى تسجيل الدخول والرمز الموقّع وفحص الصلاحيات التي تحدد ما تُرجعه الواجهة.",
    flowS: ["تسجيل الدخول", "الخادم يوقّع JWT", "طلب مع الرمز", "فحص الدور"], run: "إرسال", phone: "اتصال أو واتساب" },
};

function useTyped(text) {
  const [n, setN] = useState(0);
  useEffect(() => { setN(0); const id = setInterval(() => setN((v) => (v < text.length ? v + 1 : v)), 28); return () => clearInterval(id); }, [text]);
  return text.slice(0, n);
}

export default function App() {
  const [lang, setLang] = useState("en");
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const [slide, setSlide] = useState(0);
  const [modal, setModal] = useState(null);
  const [confirm, setConfirm] = useState(false);
  const [toast, setToast] = useState("");
  const [form, setForm] = useState({ name: "", mail: "", msg: "" });
  const [prog, setProg] = useState(0);
  const track = useRef(null);
  const t = { ...T[lang], ...T2[lang] };

  useEffect(() => { document.documentElement.lang = lang; document.documentElement.dir = t.dir; }, [lang, t.dir]);
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem("theme", theme); }, [theme]);
  useEffect(() => {
    const f = () => setProg(scrollY / (document.body.scrollHeight - innerHeight));
    addEventListener("scroll", f, { passive: true }); return () => removeEventListener("scroll", f);
  }, []);
  useEffect(() => { if (toast) { const id = setTimeout(() => setToast(""), 2800); return () => clearTimeout(id); } }, [toast]);
  useEffect(() => { const k = (e) => e.key === "Escape" && (setModal(null), setConfirm(false)); addEventListener("keydown", k); return () => removeEventListener("keydown", k); }, []);

  const go = (i) => {
    const n = (i + PROJECTS.length) % PROJECTS.length; setSlide(n);
    const el = track.current?.children[n]; el && track.current.scrollTo({ left: el.offsetLeft - track.current.offsetLeft, behavior: "smooth" });
  };
  const submit = (e) => { e.preventDefault(); if (!form.name || !form.mail || !form.msg) return setToast(t.needed); setConfirm(true); };
  const openMail = () => {
    setConfirm(false);
    location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Portfolio: " + form.name)}&body=${encodeURIComponent(form.msg + "\n\n" + form.name + " <" + form.mail + ">")}`;
    setToast(t.sentT);
  };
  const typed = useTyped(`{ name: "Amine Hasnat", role: "Full Stack Web Dev", stack: ["React", "Node", "PHP"], db: ["MySQL", "MongoDB"], auth: "JWT" }`);
  const p = modal && PROJECTS.find((x) => x.id === modal);

  return (
    <>
      <div className="prog" style={{ transform: `scaleX(${prog})` }} />
      <header className="bar">
        <a className="logo" href="#top">amine<span>.dev</span></a>
        <nav>
          {["about", "experience", "skills", "languages", "projects", "contact"].map((id, i) => <a key={id} href={`#${id}`}>{t.nav[i]}</a>)}
        </nav>
        <div className="tools">
          <div className="seg" role="group" aria-label="Language">
            {[["en", "EN"], ["fr", "FR"], ["ar", "عربي"]].map(([k, l]) => <button key={k} aria-pressed={lang === k} onClick={() => setLang(k)}>{l}</button>)}
          </div>
          <button className="icon" aria-label={t.theme} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>{theme === "dark" ? "☀" : "☾"}</button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div>
            <p className="tag"><i className="dot" />{t.avail}</p>
            <h1>{t.h1}</h1>
            <div className="cta">
              <a className="btn" href="#contact">{t.hire}</a>
              <a className="btn ghost" href={LINKS.cv} download="Amine-Hasnat-CV.pdf" onClick={() => setToast(t.cvT)}>{t.cv}</a>
            </div>
          </div>
          <pre className="code" aria-label="profile"><code>{"const profile = "}{typed}<i className="caret" /></code></pre>
        </section>

        <Impact t={t} />

        <section id="about" className="sec">
          <h2>{t.about}</h2>
          <p className="lead">{t.aboutP}</p>
          <div className="stats">{t.stats.map(([a, b]) => <div key={a}><b>{a}</b><span>{b}</span></div>)}</div>
        </section>

        <Experience t={t} />

        <section id="skills" className="sec">
          <h2>{t.skills}</h2>
          <div className="skills">
            {Object.entries(SKILLS).map(([g, list]) => (
              <div key={g} className="group"><h3>{g}</h3><ul>{list.map((s) => <li key={s}>{s}</li>)}</ul></div>
            ))}
          </div>
        </section>

        <Languages t={t} />
        <Flow t={t} />

        <section id="projects" className="sec">
          <div className="row"><h2>{t.projects}</h2>
            <div className="arrows">
              <button className="icon" aria-label={t.prev} onClick={() => go(slide - 1)}>{t.dir === "rtl" ? "→" : "←"}</button>
              <button className="icon" aria-label={t.next} onClick={() => go(slide + 1)}>{t.dir === "rtl" ? "←" : "→"}</button>
            </div>
          </div>
          <div className="track" ref={track}>
            {PROJECTS.map((pr) => (
              <article key={pr.id} className="card">
                <h3>{pr[lang][0]}</h3><p>{pr[lang][1]}</p>
                <ul className="chips">{pr.stack.map((s) => <li key={s}>{s}</li>)}</ul>
                <button className="btn" onClick={() => setModal(pr.id)}>{t.open}</button>
              </article>
            ))}
          </div>
          <div className="dots">{PROJECTS.map((_, i) => <button key={i} aria-label={`${i + 1}`} aria-current={slide === i} onClick={() => go(i)} />)}</div>
        </section>

        <section id="contact" className="sec contact">
          <div><h2>{t.contact}</h2>
            <p className="lead">{EMAIL}<br />{PHONE}</p>
            <div className="cta">
              <button className="btn ghost" onClick={() => { navigator.clipboard?.writeText(EMAIL); setToast(t.copied); }}>{t.copy}</button>
              <a className="btn ghost" href={LINKS.wa} target="_blank" rel="noreferrer">{t.phone}</a>
              <a className="btn ghost" href={LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
          <form onSubmit={submit} noValidate>
            <label>{t.name}<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label>
            <label>{t.mail}<input type="email" value={form.mail} onChange={(e) => setForm({ ...form, mail: e.target.value })} /></label>
            <label>{t.msg}<textarea rows="4" value={form.msg} onChange={(e) => setForm({ ...form, msg: e.target.value })} /></label>
            <button className="btn">{t.send}</button>
          </form>
        </section>
      </main>
      <footer>© {new Date().getFullYear()} Amine Hasnat</footer>

      {p && (
        <div className="overlay" onClick={() => setModal(null)}>
          <div className="modal" role="dialog" aria-modal="true" aria-label={p[lang][0]} onClick={(e) => e.stopPropagation()}>
            <h3>{p[lang][0]}</h3><p>{p[lang][2]}</p>
            <ul className="chips">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
            <div className="cta">
              {p.live ? <a className="btn" href={p.live} target="_blank" rel="noreferrer">{t.live}</a> : <span className="soon">{t.live}: {t.none}</span>}
              {p.code && <a className="btn ghost" href={p.code} target="_blank" rel="noreferrer">{t.code}</a>}
              <button className="btn ghost" autoFocus onClick={() => setModal(null)}>{t.close}</button>
            </div>
          </div>
        </div>
      )}
      {confirm && (
        <div className="overlay" onClick={() => setConfirm(false)}>
          <div className="modal small" role="alertdialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <h3>{t.confirmT}</h3><p>{t.confirmP}</p>
            <div className="cta"><button className="btn" autoFocus onClick={openMail}>{t.yes}</button><button className="btn ghost" onClick={() => setConfirm(false)}>{t.no}</button></div>
          </div>
        </div>
      )}
      <div className={`toast ${toast ? "on" : ""}`} role="status">{toast}</div>
    </>
  );
}
