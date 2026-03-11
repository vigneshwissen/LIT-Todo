/**
 * Design System - Shared Component Styles
 * Common style mixins and utilities for consistent component styling
 */

import { designSystem } from './design-tokens';

export const componentStyles = {
  // Button base styles
  buttonBase: `
    border: 0;
    font-family: ${designSystem.typography.fontFamily};
    font-size: ${designSystem.typography.fontSize.base};
    font-weight: ${designSystem.typography.fontWeight.semibold};
    cursor: pointer;
    transition: ${designSystem.transition.base};
    border-radius: ${designSystem.radius.lg};
    padding: ${designSystem.spacing.md} ${designSystem.spacing.xl};
  `,

  // Button raised state (primary)
  buttonRaised: `
    background: ${designSystem.colors.surface.default};
    color: ${designSystem.colors.text.primary};
    box-shadow: ${designSystem.shadows.outer.md};
  `,

  // Button hover state
  buttonHover: `
    box-shadow: ${designSystem.shadows.outer.lg};
    color: ${designSystem.colors.interactive.accent};
  `,

  // Button active/pressed state
  buttonActive: `
    box-shadow: ${designSystem.shadows.inset.md};
  `,

  // Button disabled state
  buttonDisabled: `
    background: ${designSystem.colors.surface.pressed};
    color: ${designSystem.colors.text.muted};
    cursor: not-allowed;
    box-shadow: ${designSystem.shadows.inset.md};
  `,

  // Input base styles
  inputBase: `
    width: 100%;
    border: none;
    border-radius: ${designSystem.radius.lg};
    background: ${designSystem.colors.surface.pressed};
    color: ${designSystem.colors.text.primary};
    padding: ${designSystem.spacing.md} ${designSystem.spacing.lg};
    font-family: ${designSystem.typography.fontFamily};
    font-size: ${designSystem.typography.fontSize.base};
    outline: none;
    transition: ${designSystem.transition.base};
    box-shadow: ${designSystem.shadows.inset.md};
  `,

  // Input focus state
  inputFocus: `
    box-shadow: ${designSystem.shadows.inset.md}, ${designSystem.shadows.focus};
    color: ${designSystem.colors.text.secondary};
  `,

  // Card base styles
  cardBase: `
    border-radius: ${designSystem.radius.xxl};
    background: ${designSystem.colors.surface.default};
    border: none;
    box-shadow: ${designSystem.shadows.outer.lg};
    padding: ${designSystem.spacing.xxxl};
    display: grid;
    gap: ${designSystem.spacing.xl};
  `,

  // Checkbox/Toggle base
  checkboxBase: `
    width: ${designSystem.componentSizes.checkbox.size};
    height: ${designSystem.componentSizes.checkbox.size};
    cursor: pointer;
    appearance: none;
    background: ${designSystem.colors.surface.pressed};
    border: ${designSystem.componentSizes.checkbox.borderWidth} solid ${designSystem.colors.border.light};
    border-radius: ${designSystem.radius.md};
    transition: ${designSystem.transition.base};
    box-shadow: ${designSystem.shadows.inset.sm}, ${designSystem.shadows.outer.sm};
    position: relative;
    flex-shrink: 0;
  `,

  // Navbar base styles
  navbarBase: `
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${designSystem.spacing.lg};
    padding: ${designSystem.spacing.lg} ${designSystem.spacing.xxl};
    border-radius: ${designSystem.radius.xxl};
    background: ${designSystem.colors.surface.default};
    border: none;
    box-shadow: ${designSystem.shadows.outer.lg};
  `,
};

// Utility function to compose styles
export const composeStyles = (...styles: string[]): string => {
  return styles.join('\n');
};
