/**
 * GreenScan - 3D Vector SVG Icons Collection
 * Handcrafted 3D Isometric / Graded SVG icons for all 6 waste streams
 */

const GreenScanIcons = {
  // 1. Plastic: 3D Yellow PET Bottle with Sports Cap and Recycle Logo
  plastic: `
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-3d-icon">
      <defs>
        <linearGradient id="petBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fef08a"/>
          <stop offset="40%" stop-color="#facc15"/>
          <stop offset="100%" stop-color="#ca8a04"/>
        </linearGradient>
        <linearGradient id="petShine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="capGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#60a5fa"/>
          <stop offset="100%" stop-color="#1d4ed8"/>
        </linearGradient>
        <filter id="iconShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" flood-opacity="0.25"/>
        </filter>
      </defs>
      <!-- Cap -->
      <rect x="27" y="6" width="10" height="7" rx="2" fill="url(#capGrad)" filter="url(#iconShadow)"/>
      <rect x="25" y="11" width="14" height="3" rx="1.5" fill="#3b82f6"/>
      <!-- Bottle Neck -->
      <path d="M28 14H36L38 22H26L28 14Z" fill="url(#petBody)"/>
      <!-- Bottle Body with 3D Contours -->
      <path d="M24 22C24 22 20 25 20 30V48C20 54 25 58 32 58C39 58 44 54 44 48V30C44 25 40 22 40 22H24Z" fill="url(#petBody)" filter="url(#iconShadow)"/>
      <!-- Specular Highlight Strip -->
      <path d="M23 26C23 26 25 24 28 24V55C25 54 23 52 23 48V26Z" fill="url(#petShine)"/>
      <!-- Embossed PET #1 Recycle Triangle -->
      <path d="M32 33L36 40H28L32 33Z" stroke="#854d0e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <text x="32" y="47" font-family="sans-serif" font-size="7" font-weight="900" fill="#713f12" text-anchor="middle">PET</text>
    </svg>
  `,

  // 2. Paper: 3D Blue / Brown Corrugated Cardboard Packaging Box
  paper: `
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-3d-icon">
      <defs>
        <linearGradient id="boxTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#93c5fd"/>
          <stop offset="100%" stop-color="#3b82f6"/>
        </linearGradient>
        <linearGradient id="boxLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#2563eb"/>
          <stop offset="100%" stop-color="#1d4ed8"/>
        </linearGradient>
        <linearGradient id="boxRight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1e40af"/>
          <stop offset="100%" stop-color="#172554"/>
        </linearGradient>
        <linearGradient id="tapeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fef08a"/>
          <stop offset="100%" stop-color="#eab308"/>
        </linearGradient>
      </defs>
      <!-- Isometric 3D Box Top Face -->
      <polygon points="32,8 54,20 32,32 10,20" fill="url(#boxTop)"/>
      <!-- Left Face -->
      <polygon points="10,20 32,32 32,54 10,42" fill="url(#boxLeft)"/>
      <!-- Right Face -->
      <polygon points="32,32 54,20 54,42 32,54" fill="url(#boxRight)"/>
      <!-- Packaging Tape across Top -->
      <polygon points="28,10 36,15 36,30 28,25" fill="url(#tapeGrad)" opacity="0.9"/>
      <!-- Paper Mobius Icon on Box Front -->
      <path d="M21 34L25 38H17L21 34Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <line x1="16" y1="41" x2="26" y2="41" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  `,

  // 3. Glass: 3D Teal Glossy Glass Jar with Metallic Lid
  glass: `
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-3d-icon">
      <defs>
        <linearGradient id="glassBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#a5f3fc"/>
          <stop offset="50%" stop-color="#22d3ee"/>
          <stop offset="100%" stop-color="#0891b2"/>
        </linearGradient>
        <linearGradient id="glassReflection" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.85"/>
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0.1"/>
        </linearGradient>
        <linearGradient id="glassLid" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#cbd5e1"/>
          <stop offset="100%" stop-color="#64748b"/>
        </linearGradient>
      </defs>
      <!-- Metallic Screw Lid -->
      <rect x="20" y="8" width="24" height="8" rx="3" fill="url(#glassLid)"/>
      <line x1="22" y1="12" x2="42" y2="12" stroke="#475569" stroke-width="1.5"/>
      <!-- Glass Jar Neck -->
      <rect x="22" y="16" width="20" height="4" fill="#06b6d4" opacity="0.7"/>
      <!-- Glass Body with Specular Curvature -->
      <path d="M16 22C16 20 18 20 22 20H42C46 20 48 20 48 22V50C48 55 44 58 38 58H26C20 58 16 55 16 50V22Z" fill="url(#glassBody)"/>
      <!-- Left Glare Stripe -->
      <path d="M19 24C19 24 21 23 23 23V54C21 53 19 51 19 48V24Z" fill="url(#glassReflection)"/>
      <!-- Translucent Fluid/Glass Depth Center Ring -->
      <ellipse cx="32" cy="42" rx="10" ry="4" stroke="#cffafe" stroke-width="1.5" stroke-dasharray="3 3"/>
    </svg>
  `,

  // 4. Metal: 3D Silver Grey Brushed Aluminum Can with Pop-Tab
  metal: `
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-3d-icon">
      <defs>
        <linearGradient id="canBody" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#64748b"/>
          <stop offset="25%" stop-color="#e2e8f0"/>
          <stop offset="60%" stop-color="#94a3b8"/>
          <stop offset="100%" stop-color="#475569"/>
        </linearGradient>
        <linearGradient id="canRim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="100%" stop-color="#94a3b8"/>
        </linearGradient>
      </defs>
      <!-- Can Cylinder Body -->
      <path d="M18 16H46V48C46 54 40 58 32 58C24 58 18 54 18 48V16Z" fill="url(#canBody)"/>
      <!-- Top Ellipse Rim -->
      <ellipse cx="32" cy="16" rx="14" ry="5" fill="url(#canRim)" stroke="#334155" stroke-width="1.5"/>
      <!-- Inset Rim -->
      <ellipse cx="32" cy="16" rx="11" ry="3.5" fill="#cbd5e1"/>
      <!-- Pop-Tab Ring -->
      <ellipse cx="32" cy="15" rx="3.5" ry="1.8" stroke="#475569" stroke-width="1.2" fill="#f8fafc"/>
      <rect x="31" y="15" width="2" height="3" fill="#334155"/>
      <!-- Aluminum Eco Wave Lines -->
      <path d="M22 30C26 33 38 27 42 30" stroke="#ffffff" stroke-width="2" stroke-linecap="round" opacity="0.8"/>
      <path d="M22 36C26 39 38 33 42 36" stroke="#475569" stroke-width="2" stroke-linecap="round" opacity="0.8"/>
      <text x="32" y="47" font-family="sans-serif" font-size="7" font-weight="900" fill="#334155" text-anchor="middle">ALU</text>
    </svg>
  `,

  // 5. Organic: 3D Emerald Green Apple & Bio Compost Leaf
  organic: `
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-3d-icon">
      <defs>
        <radialGradient id="appleGrad" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#86efac"/>
          <stop offset="50%" stop-color="#22c55e"/>
          <stop offset="100%" stop-color="#15803d"/>
        </radialGradient>
        <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#4ade80"/>
          <stop offset="100%" stop-color="#166534"/>
        </linearGradient>
      </defs>
      <!-- Apple Stem -->
      <path d="M32 18C33 12 37 8 40 7" stroke="#78350f" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Green Bio Leaf with Vein -->
      <path d="M34 14C37 8 48 10 46 18C41 20 34 16 34 14Z" fill="url(#leafGrad)"/>
      <line x1="36" y1="15" x2="44" y2="14" stroke="#bbf7d0" stroke-width="1"/>
      <!-- 3D Apple Body with Bottom Indent -->
      <path d="M32 20C24 20 16 26 16 36C16 48 24 57 30 57C32 57 32 55 34 55C36 55 36 57 38 57C44 57 52 48 52 36C52 26 44 20 36 20C34 20 33 21 32 20Z" fill="url(#appleGrad)"/>
      <!-- Specular Highlight -->
      <ellipse cx="25" cy="28" rx="4" ry="7" transform="rotate(-25 25 28)" fill="#ffffff" opacity="0.6"/>
      <!-- Eco Compost Recycle Cycle -->
      <circle cx="34" cy="40" r="7" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-dasharray="10 3" fill="none"/>
    </svg>
  `,

  // 6. E-Waste: 3D High-Tech Circuit Board / CPU Chip with Warning
  "e-waste": `
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-3d-icon">
      <defs>
        <linearGradient id="chipBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fb923c"/>
          <stop offset="50%" stop-color="#ea580c"/>
          <stop offset="100%" stop-color="#9a3412"/>
        </linearGradient>
        <linearGradient id="goldPin" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fde047"/>
          <stop offset="100%" stop-color="#ca8a04"/>
        </linearGradient>
      </defs>
      <!-- Silicon Substrate (3D base) -->
      <rect x="12" y="12" width="40" height="40" rx="8" fill="url(#chipBody)"/>
      <!-- Gold Connector Pins around Board -->
      <rect x="18" y="7" width="4" height="6" rx="1" fill="url(#goldPin)"/>
      <rect x="26" y="7" width="4" height="6" rx="1" fill="url(#goldPin)"/>
      <rect x="34" y="7" width="4" height="6" rx="1" fill="url(#goldPin)"/>
      <rect x="42" y="7" width="4" height="6" rx="1" fill="url(#goldPin)"/>
      <rect x="18" y="51" width="4" height="6" rx="1" fill="url(#goldPin)"/>
      <rect x="26" y="51" width="4" height="6" rx="1" fill="url(#goldPin)"/>
      <rect x="34" y="51" width="4" height="6" rx="1" fill="url(#goldPin)"/>
      <rect x="42" y="51" width="4" height="6" rx="1" fill="url(#goldPin)"/>
      <rect x="7" y="22" width="6" height="4" rx="1" fill="url(#goldPin)"/>
      <rect x="7" y="30" width="6" height="4" rx="1" fill="url(#goldPin)"/>
      <rect x="7" y="38" width="6" height="4" rx="1" fill="url(#goldPin)"/>
      <rect x="51" y="22" width="6" height="4" rx="1" fill="url(#goldPin)"/>
      <rect x="51" y="30" width="6" height="4" rx="1" fill="url(#goldPin)"/>
      <rect x="51" y="38" width="6" height="4" rx="1" fill="url(#goldPin)"/>
      <!-- Inner Silicon Core -->
      <rect x="20" y="20" width="24" height="24" rx="4" fill="#1e293b"/>
      <!-- Glowing Energy Lightning Bolt -->
      <path d="M33 24L26 33H32L30 40L39 30H33L35 24H33Z" fill="#fbbf24"/>
    </svg>
  `
};

function getGreenScan3DIcon(category) {
  const key = (category || "").toLowerCase();
  return GreenScanIcons[key] || GreenScanIcons.plastic;
}
