import app from './app.js';
import { connectDB } from './lib/db.js';
import { ENV } from './lib/env.js';

const PORT = ENV.PORT || 3000;

// Connect to database and start server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        console.log(`Environment: ${ENV.NODE_ENV}`);
    });
}).catch((error) => {
    console.error('Failed to connect to database:', error);
    process.exit(1);
});
