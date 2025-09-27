#!/usr/bin/env node

// Frontend-only development server for Hostinger deployment
console.log('Starting Vite development server for frontend-only deployment...');

import { spawn } from 'child_process';

// Run Vite from project root (it will use vite.config.ts)
const viteProcess = spawn('npx', ['vite', '--host', '0.0.0.0', '--port', '5000'], {
  stdio: 'inherit',
  env: { ...process.env }
});

viteProcess.on('error', (error) => {
  console.error('Failed to start Vite development server:', error);
  process.exit(1);
});

viteProcess.on('close', (code) => {
  if (code !== 0) {
    console.log(`Vite development server exited with code ${code}`);
  }
  process.exit(code);
});

// Handle process termination gracefully
process.on('SIGTERM', () => {
  console.log('Shutting down...');
  viteProcess.kill('SIGTERM');
});

process.on('SIGINT', () => {
  console.log('Shutting down...');
  viteProcess.kill('SIGINT');
});