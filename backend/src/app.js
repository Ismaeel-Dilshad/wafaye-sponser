import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { ENV } from './lib/env.js';
import authRoutes from './routes/authRoutes.js';
import linktreeRoutes from './routes/linktreeRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import analyticsRoutes from './routes/analyticsRoutes.js';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/linktree', linktreeRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/analytics', analyticsRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
});

// Production: Serve frontend static files
if (ENV.NODE_ENV === "production") {
    const frontendDist = path.join(__dirname, '../../frontend/dist');

    // Serve static files
    app.use(express.static(frontendDist));

    // Catch-all route for SPA - send index.html for any non-API route
    app.get('*', (req, res) => {
        res.sendFile(path.join(frontendDist, 'index.html'));
    });
}

export default app;
