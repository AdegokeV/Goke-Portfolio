import React from "react";
import "../styles/SidebarNav.css";
import FadeInSection from "./FadeInSection";
import { useMediaQuery } from "@mui/material";
const SidebarNav = () => { const isMobile = useMediaQuery("(max-width: 800px)"); const links = [["home", "intro"], ["about", "about"], ["experience", "experience"], ["projects", "projects"], ["credentials", "certifications"]]; return <div className="sidebar-nav">{!isMobile && <div className="sidebar-links">{links.map(([label, id], i) => <FadeInSection key={id} delay={`${(i + 1) * 100}ms`}><div><a href={`/#${id}`}><span className="nav-slash">/</span>{label}</a></div></FadeInSection>)}</div>}</div>; };
export default SidebarNav;
