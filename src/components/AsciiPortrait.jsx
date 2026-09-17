import React, { useEffect, useRef } from "react";

const AsciiPortrait = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const image = new Image();
    const particles = [];
    const pointer = { x: -1000, y: -1000, active: false };
    let frame;
    let startTime = 0;

    const getSize = () => Math.min(window.innerWidth < 700 ? 280 : 420, Math.max(235, window.innerWidth * 0.36));

    const buildParticles = () => {
      const size = getSize();
      canvas.width = size;
      canvas.height = size;
      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;
      const source = document.createElement("canvas");
      source.width = size;
      source.height = size;
      const sourceContext = source.getContext("2d");
      sourceContext.clearRect(0, 0, size, size);
      const scale = Math.min(size / image.width, size / image.height) * 0.94;
      const width = image.width * scale;
      const height = image.height * scale;
      sourceContext.drawImage(image, (size - width) / 2, (size - height) / 2, width, height);
      const data = sourceContext.getImageData(0, 0, size, size).data;
      particles.length = 0;
      const step = size < 300 ? 3 : 4;
      for (let y = 0; y < size; y += step) {
        for (let x = 0; x < size; x += step) {
          const index = (y * size + x) * 4;
          const alpha = data[index + 3];
          const brightness = data[index] + data[index + 1] + data[index + 2];
          if (alpha > 40 && brightness > 35) {
            particles.push({
              x: Math.random() * size,
              y: Math.random() * size,
              homeX: x,
              homeY: y,
              red: data[index],
              green: data[index + 1],
              blue: data[index + 2],
              alpha: alpha / 255,
              delay: Math.random() * 850,
              size: step - 0.5,
            });
          }
        }
      }
      startTime = performance.now();
    };

    const render = (now) => {
      const elapsed = now - startTime;
      context.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        const hasArrived = Math.max(0, Math.min(1, (elapsed - particle.delay) / 1300));
        if (hasArrived === 0) return;
        const eased = 1 - Math.pow(1 - hasArrived, 3);
        let targetX = particle.homeX;
        let targetY = particle.homeY;
        if (pointer.active) {
          const dx = particle.x - pointer.x;
          const dy = particle.y - pointer.y;
          const distance = Math.hypot(dx, dy);
          const radius = 105;
          if (distance < radius && distance > 0) {
            const strength = Math.pow(1 - distance / radius, 2) * 72;
            targetX += (dx / distance) * strength;
            targetY += (dy / distance) * strength;
          }
        }
        const arrivalX = particle.x + (particle.homeX - particle.x) * Math.min(.13, eased * .15);
        const arrivalY = particle.y + (particle.homeY - particle.y) * Math.min(.13, eased * .15);
        particle.x = arrivalX + (targetX - arrivalX) * .18;
        particle.y = arrivalY + (targetY - arrivalY) * .18;
        context.fillStyle = `rgba(${particle.red}, ${particle.green}, ${particle.blue}, ${Math.min(1, particle.alpha + .15)})`;
        context.fillRect(particle.x, particle.y, particle.size, particle.size);
      });
      frame = requestAnimationFrame(render);
    };

    const updatePointer = (event) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = (event.clientX - rect.left) * canvas.width / rect.width;
      pointer.y = (event.clientY - rect.top) * canvas.height / rect.height;
      pointer.active = true;
    };
    const clearPointer = () => { pointer.active = false; pointer.x = -1000; pointer.y = -1000; };

    image.onload = () => { buildParticles(); frame = requestAnimationFrame(render); };
    image.src = "/assets/goke-avatar.png";
    canvas.addEventListener("pointermove", updatePointer);
    canvas.addEventListener("pointerleave", clearPointer);
    window.addEventListener("resize", buildParticles);
    return () => {
      cancelAnimationFrame(frame);
      canvas.removeEventListener("pointermove", updatePointer);
      canvas.removeEventListener("pointerleave", clearPointer);
      window.removeEventListener("resize", buildParticles);
    };
  }, []);

  return <canvas ref={canvasRef} className="simulation-container" aria-label="Interactive colour pixel portrait of Oluwatosin Adegoke" />;
};

export default AsciiPortrait;
