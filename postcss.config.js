/**
 * ═══════════════════════════════════════════════════════════════
 * AI Palm Reader - PostCSS Configuration
 * ═══════════════════════════════════════════════════════════════
 * 
 * This configuration enables:
 * - TailwindCSS processing
 * - Autoprefixer for cross-browser compatibility
 * 
 * ═══════════════════════════════════════════════════════════════
 */

export default {
  plugins: {
    /**
     * TailwindCSS
     * Processes Tailwind directives (@tailwind, @apply, @layer)
     * and generates utility classes
     */
    tailwindcss: {},

    /**
     * Autoprefixer
     * Automatically adds vendor prefixes to CSS rules
     * Based on browserslist config in package.json
     * 
     * Example transformations:
     * - display: flex → display: -webkit-flex; display: flex;
     * - user-select: none → -webkit-user-select: none; user-select: none;
     */
    autoprefixer: {},
  },
};
