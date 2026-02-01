import React, { useEffect, useRef } from 'react';

/**
 * ✨ Star Field Animation
 * 
 * Uses HTML5 Canvas to render a performant, twinkling star field.
 * Stars move slowly to create a parallax/depth effect.
 */
const StarField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Configuration
    const STAR_COUNT = 80;
    const SPEED = 0.05;
    
    // Resize handling
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Star Class
    class Star {
      constructor() {
        this.reset();
        // Random initial y to fill screen
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.z = Math.random() * 2 + 1; // Depth factor
        this.size = Math.random() * 1.5;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.blinkSpeed = Math.random() * 0.02 + 0.005;
        this.blinkOffset = Math.random() * Math.PI * 2;
      }

      update() {
        this.y += SPEED * this.z;
        this.blinkOffset += this.blinkSpeed;
        
        // Reset if off screen
        if (this.y > canvas.height) {
          this.reset();
          this.y = -10; // Start slightly above
        }
      }

      draw() {
        const currentOpacity = this.opacity + Math.sin(this.blinkOffset) * 0.2;
        
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, currentOpacity)})`;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Subtle Glow for larger stars
        if (this.size > 1) {
            ctx.shadowBlur = 4;
            ctx.shadowColor = "white";
        } else {
            ctx.shadowBlur = 0;
        }
      }
    }

    // Initialize Stars
    const stars = Array.from({ length: STAR_COUNT }, () => new Star());

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        star.update();
        star.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-background pointer-events-none opacity-60"
    />
  );
};

export default StarField;
