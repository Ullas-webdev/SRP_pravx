import React from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'square' | 'horizontal' | 'favicon';
  mode?: 'light' | 'dark'; // 'light' means the logo is displayed on a light background, so shapes are dark
}

export function Logo({ variant = 'horizontal', mode = 'light', className = '', ...props }: LogoProps) {
  const fillColor = mode === 'light' ? '#000000' : '#FFFFFF';

  if (variant === 'favicon') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={className} {...props}>
        <path d="M56,56 H316 V196 H456 V456 H56 Z" fill={fillColor} />
        <rect x="356" y="56" width="100" height="100" fill={fillColor} />
      </svg>
    );
  }

  if (variant === 'square') {
    // Note: For the square variant, text sits inside the filled block.
    // So if the block is black, text must be white.
    const squareFill = mode === 'light' ? '#000000' : '#FFFFFF';
    const squareText = mode === 'light' ? '#FFFFFF' : '#000000';
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" className={className} {...props}>
        <path d="M50,50 H310 V190 H450 V450 H50 Z" fill={squareFill} />
        <rect x="350" y="50" width="100" height="100" fill={squareFill} />
        <g fill={squareText} textAnchor="middle" style={{ fontFamily: 'Montserrat, "Helvetica Neue", sans-serif' }}>
          <text x="316" y="325" fontSize="44" fontWeight="700" textLength="200" lengthAdjust="spacing" style={{ letterSpacing: '12px' }}>SPACE</text>
          <text x="316" y="375" fontSize="44" fontWeight="700" textLength="200" lengthAdjust="spacing" style={{ letterSpacing: '12px' }}>RIGHT</text>
          <text x="318" y="415" fontSize="18" fontWeight="500" textLength="200" lengthAdjust="spacing" style={{ letterSpacing: '18px' }}>PROJECTS</text>
        </g>
      </svg>
    );
  }

  // horizontal variant
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 180" className={className} {...props}>
      <path d="M20,20 H111 V69 H160 V160 H20 Z" fill={fillColor} />
      <rect x="125" y="20" width="35" height="35" fill={fillColor} />
      <g fill={fillColor} style={{ fontFamily: 'Montserrat, "Helvetica Neue", sans-serif' }}>
        <text x="190" y="70" fontSize="60" fontWeight="700" textLength="350" lengthAdjust="spacing" style={{ letterSpacing: '16px' }}>SPACE</text>
        <text x="190" y="130" fontSize="60" fontWeight="700" textLength="350" lengthAdjust="spacing" style={{ letterSpacing: '16px' }}>RIGHT</text>
        <text x="190" y="165" fontSize="24" fontWeight="500" textLength="350" lengthAdjust="spacing" style={{ letterSpacing: '30px' }}>PROJECTS</text>
      </g>
    </svg>
  );
}

export default Logo;
