import React from "react";
import "../styles/ProductDelivery.css";
import FadeInSection from "./FadeInSection";

const deliveryProjects = [
  {
    name: "ReconXi",
    className: "reconxi",
    description:
      "AI-powered financial reconciliation software. I managed delivery, requirements, release planning, testing coordination, and stakeholder updates.",
    images: [
      "/assets/reconxi-landing.png",
      "/assets/reconxi-upload.png",
      "/assets/reconxi-results.png",
      "/assets/reconxi-dashboard.png",
    ],
  },
  {
    name: "FitsCheck",
    className: "fitscheck",
    description:
      "A social fashion app centred on community voting and style challenges. I guided MVP planning, cross-functional delivery, and early-user testing.",
    images: [
      "/assets/fitscheck-feed.png",
      "/assets/fitscheck-leaderboard.png",
      "/assets/fitscheck-onboarding.png",
      "/assets/fitscheck-play.png",
    ],
  },
];

const ProductDelivery = () => (
  <section id="product-delivery">
    <div className="section-header">
      <span className="section-title">/ product delivery</span>
    </div>
    <div className="delivery-grid">
      {deliveryProjects.map((project, index) => (
        <FadeInSection key={project.name} delay={`${(index + 1) * 100}ms`}>
          <article className={`delivery-card ${project.className}`}>
            <div className="delivery-copy">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <span>Project management · Product delivery</span>
            </div>
            <div
              className="delivery-images"
              tabIndex="0"
              role="region"
              aria-label={`${project.name} product screenshots. Scroll horizontally to view all screenshots.`}
              onWheel={project.className === "reconxi" ? (event) => {
                if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
                  event.preventDefault();
                  event.currentTarget.scrollBy({ left: event.deltaY, behavior: "smooth" });
                }
              } : undefined}
            >
              {project.images.map((image, imageIndex) => (
                <img
                  key={image}
                  src={image}
                  alt={`${project.name} product screen ${imageIndex + 1}`}
                  loading="lazy"
                />
              ))}
            </div>
          </article>
        </FadeInSection>
      ))}
    </div>
  </section>
);

export default ProductDelivery;
