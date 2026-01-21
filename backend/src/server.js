import app from './app.js';
import { connectDB } from './lib/db.js';
import { ENV } from './lib/env.js';

// Only start server if not in serverless environment (Vercel)
if (process.env.VERCEL !== '1') {
    // Dynamic import for cleanup (only needed in non-serverless environments)
    import('./lib/cleanupOrphanedImages.js')
        .then(({ startPeriodicCleanup }) => {
            app.listen(ENV.PORT || 3000, () => {
                console.log(`Server is running on port ${ENV.PORT || 3000}`);
                connectDB();
                
                // Start periodic cleanup of orphaned images (runs every hour)
                // Note: This doesn't work in serverless environments like Vercel
                startPeriodicCleanup();
            });
        })
        .catch((error) => {
            // Fallback if cleanup module fails to load
            console.error('Failed to load cleanup module:', error);
            app.listen(ENV.PORT || 3000, () => {
                console.log(`Server is running on port ${ENV.PORT || 3000}`);
                connectDB();
            });
        });
} else {
    // In Vercel, connect DB on first request
    // Note: Periodic cleanup doesn't work in serverless - use scheduled functions instead
    connectDB();
}