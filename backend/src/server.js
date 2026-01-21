import app from './app.js';
import { connectDB } from './lib/db.js';
import { ENV } from './lib/env.js';
import { startPeriodicCleanup } from './lib/cleanupOrphanedImages.js';

// Only start server if not in serverless environment (Vercel)
if (process.env.VERCEL !== '1') {
    app.listen(ENV.PORT || 3000, () => {
        console.log(`Server is running on port ${ENV.PORT || 3000}`);
        connectDB();
        
        // Start periodic cleanup of orphaned images (runs every hour)
        startPeriodicCleanup();
    });
} else {
    // In Vercel, connect DB on first request
    connectDB();
}