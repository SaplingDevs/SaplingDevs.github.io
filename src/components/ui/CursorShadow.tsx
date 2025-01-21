import React, { useState } from "react";

interface CursorShadowProps {
  children: React.ReactNode;
  size?: number;
  color?: string;
  blur?: number;
  transitionDuration?: string;
  backgroundColor?: string;
}

const CursorShadow: React.FC<CursorShadowProps> = ({
  children,
  size = 80,
  color = 'rgba(100, 100, 100, 0.3)',
  blur = 20,
  transitionDuration = '0.2s',
  backgroundColor = 'transparent',
}) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top; 
    setCursorPosition({ x, y });
  };

  return (
    <div
      className="cursor-shadow relative overflow-hidden w-full h-full flex justify-center items-center rounded-3xl"
      onMouseMove={handleMouseMove}
      style={{
        '--cursor-x': `${cursorPosition.x}px`,
        '--cursor-y': `${cursorPosition.y}px`,
        backgroundColor,
        position: 'relative',
        zIndex: 0,
      } as React.CSSProperties}
    >
      {/* Children container */}
      <section
        className="flex relative z-10 w-[calc(100%-6px)] h-[calc(100%-6px)] m-auto rounded-3xl"
        style={{ backgroundColor }}
      >
        {children}
      </section>

      {/* Estilos CSS */}
      <style>{`
        .cursor-shadow::after {
          content: '';
          position: absolute;
          left: var(--cursor-x);
          top: var(--cursor-y);
          width: ${size}px;
          height: ${size}px;
          background-color: ${color};
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: -1;
          filter: blur(${blur}px);
          transition: opacity ${transitionDuration} ease;
          opacity: 0; 
        }

        @media (pointer: fine) {
          .cursor-shadow:hover::after { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default CursorShadow;
