import React from "react";
import "../styles/Credits.css";
import FadeInSection from "./FadeInSection";
const Credits = () => <FadeInSection><footer id="credits"><div className="ending-credits"><div>Built by Oluwatosin Adegoke.</div><div>© {new Date().getFullYear()}</div></div></footer></FadeInSection>;
export default Credits;
