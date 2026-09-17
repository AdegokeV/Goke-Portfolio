import React from "react";
import "../styles/Intro.css";
import FadeInSection from "./FadeInSection";
import AsciiPortrait from "./AsciiPortrait";
const Intro = () => <section id="intro"><div className="intro-simulation"><AsciiPortrait /></div><div className="intro-block"><h1 className="intro-title">Hey there, <span className="intro-name">Goke</span> here.<span className="intro-cursor">|</span></h1><FadeInSection><p className="intro-desc">I’m a CAPM-certified Project Manager with an interest in data science and building ML models when the idea calls for it. I keep an eye on financial markets and advocate for cryptocurrency adoption because I dabble.</p><a href="mailto:goke.vincent@gmail.com" className="intro-contact">✉ Say hi!</a></FadeInSection></div></section>;
export default Intro;
