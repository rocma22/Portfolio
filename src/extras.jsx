import { useEffect, useRef, useState } from "react";
import { EXPERIENCE, SPOKEN, CODE_LANGS } from "./data.js";

function Count({ to, suffix }) {
  const [n, setN] = useState(0); const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; io.disconnect(); let v = 0;
      const id = setInterval(() => { v += Math.max(1, Math.round(to / 25)); if (v >= to) { v = to; clearInterval(id); } setN(v); }, 35);
    }, { threshold: 0.6 });
    io.observe(ref.current); return () => io.disconnect();
  }, [to]);
  return <b ref={ref}>{n}{suffix}</b>;
}

export function Impact({ t }) {
  const items = [[30, "%", t.i[0]], [25, "%", t.i[1]], [3, "", t.i[2]], [2, "", t.i[3]]];
  return <section className="impact">{items.map(([n, s, l]) => <div key={l}><Count to={n} suffix={s} /><span>{l}</span></div>)}</section>;
}

export function Experience({ t }) {
  const [open, setOpen] = useState(0);
  return (
    <section id="experience" className="sec">
      <h2>{t.exp}</h2>
      <ol className="tl">
        {EXPERIENCE.map((x, i) => (
          <li key={x.org} className={open === i ? "open" : ""}>
            <button aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
              <span className="date">{x.date}</span>
              <strong>{x.role}</strong><em>{x.org}</em>
              <ul className="chips">{x.tags.map((g) => <li key={g}>{g}</li>)}</ul>
            </button>
            {open === i && <ul className="pts">{x.pts.map((p) => <li key={p}>{p}</li>)}</ul>}
          </li>
        ))}
      </ol>
      <p className="note">{t.expNote}</p>
    </section>
  );
}

export function Languages({ t }) {
  return (
    <section id="languages" className="sec">
      <h2>{t.langs}</h2>
      <div className="two">
        <div className="group"><h3>{t.spoken}</h3>
          {SPOKEN.map(([l, lv, w]) => (
            <div key={l} className="bar2"><div><b>{l}</b><span>{lv}</span></div><i style={{ "--w": w + "%" }} /></div>
          ))}
        </div>
        <div className="group"><h3>{t.codeL}</h3>
          <ul className="big">{CODE_LANGS.map((c) => <li key={c}>{c}</li>)}</ul>
          <h3 style={{ marginTop: 24 }}>{t.edu}</h3>
          <p className="muted">{t.eduP[0]}</p><p className="muted">{t.eduP[1]}</p>
          <p className="muted" style={{ marginTop: 12 }}>{t.vol}</p>
        </div>
      </div>
    </section>
  );
}

const RES = {
  admin: [200, '{ "records": "all patients" }'],
  staff: [200, '{ "records": "assigned patients only" }'],
  patient: [403, '{ "error": "Forbidden: staff only" }'],
};
export function Flow({ t }) {
  const [role, setRole] = useState("staff"); const [step, setStep] = useState(-1);
  useEffect(() => {
    if (step < 0 || step > 3) return;
    const id = setTimeout(() => setStep(step + 1), 650); return () => clearTimeout(id);
  }, [step]);
  const [code, body] = RES[role];
  return (
    <section id="security" className="sec">
      <h2>{t.flowT}</h2>
      <p className="lead">{t.flowP}</p>
      <div className="flow">
        <div className="roles" role="group" aria-label="Role">
          {Object.keys(RES).map((r) => <button key={r} aria-pressed={role === r} onClick={() => { setRole(r); setStep(-1); }}>{r}</button>)}
        </div>
        <ol className="steps">
          {t.flowS.map((s, i) => <li key={s} className={step >= i ? "on" : ""}>{s}</li>)}
        </ol>
        <button className="btn" onClick={() => setStep(0)}>{t.run} GET /api/patients</button>
        <pre className={`resp ${step > 3 ? (code === 200 ? "ok" : "bad") : ""}`} aria-live="polite">
          {step > 3 ? `HTTP ${code}\n${body}` : "…"}
        </pre>
      </div>
    </section>
  );
}
