import React from "react";
import "../styles/Certifications.css";
import FadeInSection from "./FadeInSection";

const credentials = [
  ["2025", "Associate in Project Management (CAPM)", "Project Management Institute", "https://drive.google.com/file/d/1Td1wyla3E8lIsawlXIUADADz66D2lMpj/view?usp=sharing"],
  ["2023", "Project Management Professional", "Google / Coursera", "https://drive.google.com/file/d/1erWcu3c9R1uodkVWGOIiOt7lQg_jtTJg/view?usp=sharing"],
  ["2026", "Data Science Bootcamp", "GoMyCode", "https://drive.google.com/file/d/1s8az2F8_VHVYTigCQ2p9LCopE72OBcVF/view?usp=sharing"],
  ["2024", "AI Essentials for Professionals", "ALX Africa", "https://drive.google.com/file/d/1LyF9ZAZQujHbHhcJ8JM9gGMq3zX1zegB/view?usp=sharing"],
  ["2023", "People and Soft Skills for Professionals", "IBM", "https://drive.google.com/file/d/12PJp1jeh7owJXIUcexHvAAsgi2lg3xJK/view?usp=sharing"],
  ["2022", "UX Researcher", "Google / Coursera", "https://drive.google.com/file/d/1NIh0GmjhLCk35Mua-tO_OdmX4hrcA_Fr/view?usp=sharing"],
];
const Certifications = () => <section id="certifications"><FadeInSection><div className="section-header"><span className="section-title">/ certifications</span></div><div className="credentials-intro">A few credentials that support how I approach delivery, people, products, and data.</div><ul className="credentials-list">{credentials.map(([year, title, issuer, link], index) => <FadeInSection key={title} delay={`${(index + 1) * 80}ms`}><li><a href={link} target="_blank" rel="noreferrer"><span>{year}</span><div><strong>{title}</strong><em>{issuer}</em></div><b>↗</b></a></li></FadeInSection>)}</ul></FadeInSection></section>;
export default Certifications;
