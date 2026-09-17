import React from "react";
import { GitHubIcon } from "./BrandIcons";
const ExternalLinks = ({ githubLink, liveLink }) => <span className="external-links">{githubLink && <a className="github-icon" href={githubLink} target="_blank" rel="noreferrer" aria-label="View source on GitHub"><GitHubIcon /></a>}{liveLink && <a className="live-link" href={liveLink} target="_blank" rel="noreferrer">Live site <span>↗</span></a>}</span>;
export default ExternalLinks;
