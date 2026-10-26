/**
 * BINOX — SMALL BLUE GLOW CURSOR BALL & MAGNETIC CLICKABLE ATTRACTION
 * Features:
 * 1. Small Blue Cursor Ball: An 8px electric blue (#2F5CFF) dot cursor with a tight blue aura.
 * 2. Magnetic Attraction on Clickable Elements: CTA buttons, navbar links, arrows, social icons,
 *    and work/branch cards magnetically pull toward the cursor when approached.
 * 3. Interactive Feedback: The cursor ball smoothly expands slightly when over clickable targets.
 */

(function () {
  'use strict';

  const injectStyles = () => {
    if (document.getElementById('binox-cursor-magnetic-css')) return;

    const style = document.createElement('style');
    style.id = 'binox-cursor-magnetic-css';
    style.textContent = `
      @media (hover: hover) and (pointer: fine) {
        body, a, button, input, select, textarea {
          cursor: none !important;
        }
      }

      /* SMALL BLUE GLOW CURSOR BALL */
      #binox-cursor-ball {
        position: fixed;
        top: 0;
        left: 0;
        width: 8px;
        height: 8px;
        background: #2F5CFF;
        border-radius: 50%;
        pointer-events: none;
        z-index: 999999;
        transform: translate(-50%, -50%);
        box-shadow: 
          0 0 6px #2F5CFF,
          0 0 12px rgba(47, 92, 255, 0.7);
        transition: width 0.25s ease, height 0.25s ease, background 0.25s ease, box-shadow 0.25s ease, opacity 0.2s ease;
      }

      /* Cursor expansion over clickable targets */
      #binox-cursor-ball.hovering {
        width: 14px;
        height: 14px;
        background: rgba(47, 92, 255, 0.95);
        box-shadow: 
          0 0 10px #2F5CFF,
          0 0 20px rgba(47, 92, 255, 0.8);
      }

      /* Smooth transform transition for magnetic clickable elements */
      .btn, .play-btn, nav a, .social-links a, .contact-socials a, 
      .hero-bottom-bar a, .branch-card, .stat-card, .value-card {
        will-change: transform;
        transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s ease, border-color 0.3s ease;
      }
    `;
    document.head.appendChild(style);
  };

  // ==========================================
  // 1. SMALL BLUE CURSOR BALL LOGIC
  // ==========================================
  const initSmallBlueCursor = () => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    let ball = document.getElementById('binox-cursor-ball');
    if (!ball) {
      ball = document.createElement('div');
      ball.id = 'binox-cursor-ball';
      document.body.appendChild(ball);
    }

    window.addEventListener('mousemove', (e) => {
      ball.style.left = `${e.clientX}px`;
      ball.style.top = `${e.clientY}px`;
    });

    window.addEventListener('mouseleave', () => {
      ball.style.opacity = '0';
    });
    window.addEventListener('mouseenter', () => {
      ball.style.opacity = '1';
    });
  };

  // ==========================================
  // 2. MAGNETIC ATTRACTION ON CLICKABLE ELEMENTS
  // ==========================================
  const initMagneticElements = () => {
    const ball = document.getElementById('binox-cursor-ball');
    const magneticSelector = '.btn, .play-btn, nav a, .social-links a, .contact-socials a, .hero-bottom-bar a, .branch-card, .stat-card, .value-card';
    const magneticTargets = document.querySelectorAll(magneticSelector);

    magneticTargets.forEach((el) => {
      let frameId = null;

      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Gentle magnetic pull strength
        const distanceX = (e.clientX - centerX) * 0.26;
        const distanceY = (e.clientY - centerY) * 0.26;

        if (frameId) cancelAnimationFrame(frameId);
        frameId = requestAnimationFrame(() => {
          el.style.transform = `translate3d(${distanceX}px, ${distanceY}px, 0)`;
        });
      });

      el.addEventListener('mouseenter', () => {
        if (ball) ball.classList.add('hovering');
      });

      el.addEventListener('mouseleave', () => {
        if (frameId) cancelAnimationFrame(frameId);
        el.style.transform = 'translate3d(0, 0, 0)';
        if (ball) ball.classList.remove('hovering');
      });
    });
  };

  const initAll = () => {
    injectStyles();
    initSmallBlueCursor();
    initMagneticElements();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }

  setTimeout(initAll, 200);
})();
