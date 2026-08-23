"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function LiquidHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [timeString, setTimeString] = useState<string>("");

  // Live real-time clock for Cilegon, Banten (WIB / UTC+7)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Jakarta",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      };
      setTimeString(now.toLocaleTimeString("en-US", options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // WebGL Liquid Obsidian / Dark Chrome Shader Simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl") || (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);
    if (!gl) return;

    let animationFrameId: number;
    const startTime = Date.now();
    const mouse = { x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = (e.clientX - rect.left) / rect.width;
      mouse.targetY = 1.0 - (e.clientY - rect.top) / rect.height;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Vertex Shader
    const vsSource = `
      attribute vec2 position;
      varying vec2 vUv;
      void main() {
        vUv = position * 0.5 + 0.5;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    // Fragment Shader: Smooth Viscous Liquid Metal / Dark Obsidian Swirls
    const fsSource = `
      precision highp float;
      uniform vec2 u_resolution;
      uniform float u_time;
      uniform vec2 u_mouse;
      varying vec2 vUv;

      // 2D Rotation
      mat2 rot(float a) {
        float s = sin(a), c = cos(a);
        return mat2(c, -s, s, c);
      }

      // Smooth noise function
      float hash(vec2 p) {
        p = fract(p * vec2(123.34, 456.21));
        p += dot(p, p + 45.32);
        return fract(p.x * p.y);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.55;
        vec2 shift = vec2(100.0);
        mat2 rot2 = rot(0.5);
        for (int i = 0; i < 5; ++i) {
          v += a * noise(p);
          p = rot2 * p * 2.0 + shift;
          a *= 0.5;
        }
        return v;
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);
        
        // Mouse influence
        vec2 m = (u_mouse - 0.5) * 0.4;
        uv += m * 0.25;

        float t = u_time * 0.18;

        // Viscous Domain Warping
        vec2 q = vec2(
          fbm(uv + vec2(0.0, 0.0) + t * 0.2),
          fbm(uv + vec2(5.2, 1.3) + t * 0.25)
        );

        vec2 r = vec2(
          fbm(uv + 4.0 * q + vec2(1.7, 9.2) + t * 0.3),
          fbm(uv + 4.0 * q + vec2(8.3, 2.8) + t * 0.2)
        );

        float f = fbm(uv + 5.0 * r + t * 0.15);

        // Specular & Normal Estimation for Glossy Chrome Sheen
        float eps = 0.015;
        float fx = fbm(uv + vec2(eps, 0.0) + 5.0 * r);
        float fy = fbm(uv + vec2(0.0, eps) + 5.0 * r);
        vec3 n = normalize(vec3((fx - f) / eps, (fy - f) / eps, 0.12));

        // Light reflection
        vec3 lightDir = normalize(vec3(0.5, 0.8, 0.6));
        float diff = max(dot(n, lightDir), 0.0);
        vec3 viewDir = vec3(0.0, 0.0, 1.0);
        vec3 halfDir = normalize(lightDir + viewDir);
        float spec = pow(max(dot(n, halfDir), 0.0), 32.0);

        // Obsidian / Deep Metallic Chrome Palette
        vec3 baseDark = vec3(0.02, 0.02, 0.03);
        vec3 midTone = vec3(0.12, 0.13, 0.16);
        vec3 highlight = vec3(0.85, 0.88, 0.95);
        vec3 rimColor = vec3(0.35, 0.38, 0.45);

        // Color blending
        vec3 col = mix(baseDark, midTone, clamp(f * f * 2.5, 0.0, 1.0));
        col += spec * highlight * 0.85;
        col += pow(1.0 - max(dot(n, viewDir), 0.0), 3.0) * rimColor * 0.65;

        // Contrast boost for liquid ribbon depth
        col = pow(col, vec3(1.15));

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    // Compile Helper
    const createShader = (glCtx: WebGLRenderingContext, type: number, src: string) => {
      const shader = glCtx.createShader(type);
      if (!shader) return null;
      glCtx.shaderSource(shader, src);
      glCtx.compileShader(shader);
      if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
        console.error(glCtx.getShaderInfoLog(shader));
        glCtx.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vertShader || !fragShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    // Quad geometry
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const posAttr = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(posAttr);
    gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0);

    const uResolution = gl.getUniformLocation(program, "u_resolution");
    const uTime = gl.getUniformLocation(program, "u_time");
    const uMouse = gl.getUniformLocation(program, "u_mouse");

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    resize();
    window.addEventListener("resize", resize);

    // Render loop
    const render = () => {
      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const elapsed = (Date.now() - startTime) * 0.001;

      gl.uniform2f(uResolution, canvas.width, canvas.height);
      gl.uniform1f(uTime, elapsed);
      gl.uniform2f(uMouse, mouse.x, mouse.y);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="liquid-hero-container">
      <canvas ref={canvasRef} className="liquid-hero-canvas" />

      <div className="liquid-hero-vignette" />

      <header className="liquid-hero-header">
        <div className="liquid-brand-wrap">
          <Link href="/" className="liquid-brand-logo">
            <span className="liquid-logo-dot" />
            <span className="liquid-logo-title">BERKAH RYAN.</span>
          </Link>
          <span className="liquid-brand-desc">Heavy Lifting & Rigging Specialist.</span>
        </div>

        <nav className="liquid-nav-links">
          <Link href="/layanan" className="liquid-nav-item">
            Layanan.
          </Link>
          <Link href="/armada" className="liquid-nav-item">
            Armada.
          </Link>
          <Link href="/proyek" className="liquid-nav-item">
            Proyek.
          </Link>
          <Link href="/tentang-kami" className="liquid-nav-item">
            K3 & SIA/SIO.
          </Link>
          <Link href="/kontak" className="liquid-nav-item">
            Kontak.
          </Link>
        </nav>

        <div className="liquid-time-badge">
          <span className="liquid-city">CILEGON, BANTEN</span>
          <span className="liquid-clock">{timeString || "5:30 PM"}</span>
          <span className="liquid-weather-icon">☼</span>
        </div>
      </header>

      <div className="liquid-orbit-dot" />

      <div className="liquid-hero-center">
        <div className="liquid-eyebrow-pill">
          <span className="liquid-eyebrow-text">I • VI SPECIALTIES</span>
        </div>

        <h1 className="liquid-main-title">We lift heavy industries.</h1>

        <p className="liquid-sub-title">
          Rental Derek Crane 3 s/d 600 Ton, Forklift Industri, dan Solusi Rigging Siap 24/7 di Cilegon & Banten.
        </p>
      </div>

      <div className="liquid-pillars-list">
        <span className="liquid-pillar-item">TELESCOPIC MOBILE CRANE</span>
        <span className="liquid-pillar-item">CRAWLER CRANE</span>
        <span className="liquid-pillar-item">ROUGHTER CRANE 4X4</span>
        <span className="liquid-pillar-item">FORKLIFT & LOGISTICS</span>
        <span className="liquid-pillar-item">STEEL ROAD PLATE</span>
      </div>

      <div className="liquid-cta-wrap">
        <a
          href="https://wa.me/6281808999462?text=Halo%20CV.%20Berkah%20Ryan,%20saya%20ingin%20konsultasi%20sewa%20crane."
          target="_blank"
          rel="noopener noreferrer"
          className="liquid-pill-btn"
        >
          <span>Sewa Crane Sekarang</span>
          <span className="liquid-btn-arrow">↗</span>
        </a>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .liquid-hero-container {
          position: relative;
          width: 100vw;
          height: 100vh;
          min-height: 680px;
          background: #08080a;
          color: #ffffff;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          padding: 2.25rem 3.5rem;
          box-sizing: border-box;
          font-family: var(--font-sans), sans-serif;
          user-select: none;
        }

        .liquid-hero-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          display: block;
          pointer-events: none;
        }

        .liquid-hero-vignette {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          background: radial-gradient(circle at center, transparent 40%, rgba(8, 8, 10, 0.6) 100%),
                      linear-gradient(180deg, rgba(8,8,10,0.4) 0%, transparent 20%, transparent 80%, rgba(8,8,10,0.8) 100%);
        }

        /* ── HEADER ── */
        .liquid-hero-header {
          position: relative;
          z-index: 10;
          display: flex;
          justifyContent: space-between;
          alignItems: center;
          width: 100%;
        }

        .liquid-brand-wrap {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .liquid-brand-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          color: #ffffff;
        }

        .liquid-logo-dot {
          width: 9px;
          height: 9px;
          background: #ffffff;
          border-radius: 50%;
          display: inline-block;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
        }

        .liquid-logo-title {
          font-weight: 900;
          font-size: 1.1rem;
          letter-spacing: -0.03em;
          color: #ffffff;
        }

        .liquid-brand-desc {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.5);
          letter-spacing: -0.01em;
          border-left: 1px solid rgba(255, 255, 255, 0.15);
          padding-left: 0.75rem;
          display: inline-block;
        }

        /* ── NAV LINKS ── */
        .liquid-nav-links {
          display: flex;
          align-items: center;
          gap: 2.25rem;
        }

        .liquid-nav-item {
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: -0.02em;
          text-decoration: none;
          position: relative;
          transition: color 0.25s ease;
        }

        .liquid-nav-item:hover {
          color: #ffffff;
        }

        /* ── TIME & LOCATION WIDGET ── */
        .liquid-time-badge {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-mono), monospace;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.8);
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          padding: 0.45rem 0.9rem;
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .liquid-city {
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .liquid-clock {
          color: #ffffff;
          font-weight: 600;
        }

        .liquid-weather-icon {
          color: #e8a020;
          font-size: 0.85rem;
        }

        /* ── ORBIT GLOW DOT ── */
        .liquid-orbit-dot {
          position: absolute;
          top: 42%;
          left: 9%;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 0 20px 4px rgba(255, 255, 255, 0.8), 0 0 40px 10px rgba(255, 255, 255, 0.3);
          z-index: 5;
          pointer-events: none;
          animation: orbitPulse 4s infinite ease-in-out;
        }

        @keyframes orbitPulse {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.25); opacity: 1; }
        }

        /* ── CENTER STAGE ── */
        .liquid-hero-center {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin: auto 0;
          padding: 2rem 1rem;
        }

        .liquid-eyebrow-pill {
          display: inline-flex;
          align-items: center;
          padding: 0.35rem 0.95rem;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 100px;
          margin-bottom: 1.75rem;
        }

        .liquid-eyebrow-text {
          font-family: var(--font-mono), monospace;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: rgba(255, 255, 255, 0.85);
          text-transform: uppercase;
        }

        .liquid-main-title {
          font-family: var(--font-mono), monospace;
          font-size: clamp(2.4rem, 6.2vw, 5.5rem);
          font-weight: 500;
          letter-spacing: -0.035em;
          color: #ffffff;
          line-height: 1.05;
          margin: 0;
          text-shadow: 0 4px 30px rgba(0, 0, 0, 0.8);
          max-width: 1080px;
        }

        .liquid-sub-title {
          font-size: clamp(0.95rem, 1.4vw, 1.15rem);
          color: rgba(255, 255, 255, 0.65);
          max-width: 680px;
          margin-top: 1.5rem;
          line-height: 1.6;
          font-family: var(--font-sans), sans-serif;
          letter-spacing: -0.01em;
        }

        /* ── LOWER-LEFT PILLARS ── */
        .liquid-pillars-list {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
          font-family: var(--font-mono), monospace;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: rgba(255, 255, 255, 0.75);
          text-transform: uppercase;
        }

        .liquid-pillar-item {
          transition: color 0.2s ease, transform 0.2s ease;
          cursor: default;
          width: fit-content;
        }

        .liquid-pillar-item:hover {
          color: #ffffff;
          transform: translateX(4px);
        }

        /* ── LOWER-RIGHT CTA ── */
        .liquid-cta-wrap {
          position: absolute;
          bottom: 2.5rem;
          right: 3.5rem;
          z-index: 10;
        }

        .liquid-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: transparent;
          color: #ffffff;
          border: 1.5px solid rgba(255, 255, 255, 0.5);
          border-radius: 100px;
          padding: 0.75rem 1.65rem;
          font-size: 0.88rem;
          font-weight: 600;
          letter-spacing: -0.01em;
          text-decoration: none;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .liquid-pill-btn:hover {
          background: #ffffff;
          color: #08080a;
          border-color: #ffffff;
          box-shadow: 0 0 25px rgba(255, 255, 255, 0.4);
          transform: translateY(-2px);
        }

        .liquid-btn-arrow {
          font-size: 1.1rem;
          transition: transform 0.25s ease;
        }

        .liquid-pill-btn:hover .liquid-btn-arrow {
          transform: translate(2px, -2px);
        }

        /* ── RESPONSIVE ── */
        @media screen and (max-width: 1024px) {
          .liquid-hero-container {
            padding: 1.75rem 2rem;
          }
          .liquid-nav-links {
            display: none;
          }
          .liquid-cta-wrap {
            right: 2rem;
            bottom: 2rem;
          }
          .liquid-brand-desc {
            display: none;
          }
        }

        @media screen and (max-width: 768px) {
          .liquid-hero-container {
            padding: 1.5rem 1.25rem;
            min-height: 100dvh;
          }
          .liquid-pillars-list {
            display: none;
          }
          .liquid-cta-wrap {
            position: static;
            width: 100%;
            display: flex;
            justifyContent: center;
            margin-top: 1.5rem;
          }
          .liquid-pill-btn {
            width: 100%;
            justify-content: center;
          }
          .liquid-orbit-dot {
            display: none;
          }
          .liquid-time-badge {
            font-size: 0.68rem;
            padding: 0.35rem 0.65rem;
          }
          .liquid-main-title {
            font-size: clamp(2rem, 8.5vw, 3.2rem);
          }
        }
      `,
        }}
      />
    </section>
  );
}
