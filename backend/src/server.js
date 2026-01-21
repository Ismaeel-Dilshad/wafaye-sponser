import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { connectDB } from './lib/db.js';
import { ENV } from './lib/env.js';
import authRoutes from './routes/authRoutes.js';
import linktreeRoutes from './routes/linktreeRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import analyticsRoutes from './routes/analyticsRoutes.js';
import { startPeriodicCleanup } from './lib/cleanupOrphanedImages.js';

const __dirname = path.resolve();

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Production: Serve frontend static files
if (ENV.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '../frontend', 'dist')));
}

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/linktree', linktreeRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/analytics', analyticsRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
});

// Production: Catch-all route for SPA (must be after API routes)
if (ENV.NODE_ENV === "production") {
    app.get("/{*splat}", (_, res) => {
        res.sendFile(path.join(__dirname, '../frontend', 'dist', 'index.html'));
    });
}

// Start server
app.listen(ENV.PORT, () => {
    console.log(`Server is running on port ${ENV.PORT}`);
    connectDB();
    
    // Start periodic cleanup of orphaned images (runs every hour)
    startPeriodicCleanup();
});