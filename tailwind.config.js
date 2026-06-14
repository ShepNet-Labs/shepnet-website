/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        // ShepNet Security brand palette. Use these exact tokens only.
        ebony: "#1B1C1B",    // primary ink, dark section backgrounds
        charcoal: "#322E2D", // secondary text
        stone: "#686462",    // muted / caption text
        sable: "#926840",    // deep gold accent
        tan: "#E5B576",      // gold highlight (CTA, accent)
        ivory: "#E5DFDC",    // warm light background
        ice: "#F4F3F2",      // lightest background / page base
      },
      fontFamily: {
        // Figtree is self-hosted (see src/input.css @font-face rules).
        sans: ['Figtree', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        // Signature device: Sable -> Tan -> Sable. Use once, as a thin accent rule.
        'brand-rule': 'linear-gradient(90deg, #926840 0%, #E5B576 50%, #926840 100%)',
      },
      maxWidth: {
        'prose-tight': '46rem',
      },
    },
  },
  plugins: [],
};
