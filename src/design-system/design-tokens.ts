/**
 * Design System - Global Design Tokens
 * Centralized configuration for colors, spacing, typography, and effects
 */

export const designSystem = {
  // Color Palette
  colors: {
    // Backgrounds
    background: {
      primary: '#0f1419',
      secondary: '#1a202c',
      tertiary: '#202836',
    },
    // Surfaces
    surface: {
      raised: '#202836',
      pressed: '#1a212d',
      default: '#202836',
    },
    // Text
    text: {
      primary: '#e2e8f0',
      secondary: '#cbd5e1',
      tertiary: '#94a3b8',
      muted: '#64748b',
    },
    // Interactive
    interactive: {
      accent: '#3b82f6',
      accentHover: '#2563eb',
      accentDark: '#1e40af',
    },
    // Borders
    border: {
      light: '#334155',
      medium: '#475569',
    },
  },

  // Spacing Scale
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    xxl: '24px',
    xxxl: '28px',
    huge: '32px',
  },

  // Typography
  typography: {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    fontSize: {
      xs: '12px',
      sm: '13px',
      base: '14px',
      lg: '15px',
      xl: '16px',
      xxl: '18px',
      xxxl: '24px',
      huge: '28px',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },

  // Border Radius
  radius: {
    sm: '6px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    xxl: '20px',
    full: '24px',
  },

  // Shadows - Neumorphism
  shadows: {
    // Inset shadows for depth
    inset: {
      sm: 'inset 2px 2px 4px rgba(0, 0, 0, 0.4), inset -2px -2px 4px rgba(255, 255, 255, 0.02)',
      md: 'inset 4px 4px 10px rgba(0, 0, 0, 0.4), inset -4px -4px 10px rgba(255, 255, 255, 0.02)',
    },
    // Outer shadows for elevation
    outer: {
      sm: '0 2px 4px rgba(0, 0, 0, 0.3)',
      md: '4px 4px 10px rgba(0, 0, 0, 0.4), -4px -4px 10px rgba(255, 255, 255, 0.03)',
      lg: '8px 8px 20px rgba(0, 0, 0, 0.5), -8px -8px 20px rgba(255, 255, 255, 0.05)',
    },
    // Focus shadows
    focus: '0 0 0 3px rgba(59, 130, 246, 0.1)',
  },

  // Transitions
  transition: {
    fast: 'all 0.15s ease',
    base: 'all 0.3s ease',
    slow: 'all 0.5s ease',
  },

  // Component Sizes
  componentSizes: {
    button: {
      height: '40px',
      paddingX: '20px',
      fontSize: '14px',
    },
    input: {
      height: '40px',
      paddingX: '16px',
      fontSize: '14px',
    },
    checkbox: {
      size: '22px',
      borderWidth: '2px',
    },
  },
};

// Export as CSS custom properties for use in stylesheets
export const getCSSVariables = () => `
:root {
  /* Colors */
  --color-bg-primary: ${designSystem.colors.background.primary};
  --color-bg-secondary: ${designSystem.colors.background.secondary};
  --color-bg-tertiary: ${designSystem.colors.background.tertiary};
  
  --color-surface-raised: ${designSystem.colors.surface.raised};
  --color-surface-pressed: ${designSystem.colors.surface.pressed};
  --color-surface-default: ${designSystem.colors.surface.default};
  
  --color-text-primary: ${designSystem.colors.text.primary};
  --color-text-secondary: ${designSystem.colors.text.secondary};
  --color-text-tertiary: ${designSystem.colors.text.tertiary};
  --color-text-muted: ${designSystem.colors.text.muted};
  
  --color-interactive-accent: ${designSystem.colors.interactive.accent};
  --color-interactive-accent-hover: ${designSystem.colors.interactive.accentHover};
  --color-interactive-accent-dark: ${designSystem.colors.interactive.accentDark};
  
  --color-border-light: ${designSystem.colors.border.light};
  --color-border-medium: ${designSystem.colors.border.medium};
  
  /* Spacing */
  --spacing-xs: ${designSystem.spacing.xs};
  --spacing-sm: ${designSystem.spacing.sm};
  --spacing-md: ${designSystem.spacing.md};
  --spacing-lg: ${designSystem.spacing.lg};
  --spacing-xl: ${designSystem.spacing.xl};
  --spacing-xxl: ${designSystem.spacing.xxl};
  --spacing-xxxl: ${designSystem.spacing.xxxl};
  --spacing-huge: ${designSystem.spacing.huge};
  
  /* Typography */
  --font-family: ${designSystem.typography.fontFamily};
  --font-size-xs: ${designSystem.typography.fontSize.xs};
  --font-size-sm: ${designSystem.typography.fontSize.sm};
  --font-size-base: ${designSystem.typography.fontSize.base};
  --font-size-lg: ${designSystem.typography.fontSize.lg};
  --font-size-xl: ${designSystem.typography.fontSize.xl};
  --font-size-xxl: ${designSystem.typography.fontSize.xxl};
  
  /* Radius */
  --radius-sm: ${designSystem.radius.sm};
  --radius-md: ${designSystem.radius.md};
  --radius-lg: ${designSystem.radius.lg};
  --radius-xl: ${designSystem.radius.xl};
  --radius-xxl: ${designSystem.radius.xxl};
  --radius-full: ${designSystem.radius.full};
  
  /* Transitions */
  --transition-fast: ${designSystem.transition.fast};
  --transition-base: ${designSystem.transition.base};
  --transition-slow: ${designSystem.transition.slow};
}
`;
