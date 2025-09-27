#!/usr/bin/env tsx

// Frontend-only development server entry point
// This replaces the old backend server for Hostinger deployment
import { spawn } from 'child_process';
import path from 'path';

console.log('🚀 Starting frontend-only development server...');
console.log('📁 Perfect for Hostinger static hosting deployment');

// Start Vite development server from project root
const viteProcess = spawn('npx', ['vite', '--host', '0.0.0.0', '--port', '5000'], {
  stdio: 'inherit',
  env: { ...process.env }
});

viteProcess.on('error', (error) => {
  console.error('❌ Failed to start Vite development server:', error);
  process.exit(1);
});

viteProcess.on('close', (code) => {
  if (code !== 0) {
    console.log(`❌ Vite development server exited with code ${code}`);
  }
  process.exit(code);
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('⏹️  Shutting down development server...');
  viteProcess.kill('SIGTERM');
});

process.on('SIGINT', () => {
  console.log('⏹️  Shutting down development server...');
  viteProcess.kill('SIGINT');
});