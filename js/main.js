/**
 * SIGNATURE PROPERTY & CONSULTANT — Main Application Orchestrator
 * Bootstraps all luxury modular systems upon DOM readiness.
 */
import { initCursor } from './cursor.js';
import { initParticles } from './particles.js';
import { initAnimations } from './animations.js';
import { initInteractions } from './interactions.js';

document.addEventListener('DOMContentLoaded', () => {
  try {
    initCursor();
    initParticles();
    initAnimations();
    initInteractions();
    console.log('✓ Signature Property luxury interactive systems initialized.');
  } catch (error) {
    console.error('Initialization notice:', error);
  }
});
