22:25:58.488 Running build in Washington, D.C., USA (East) – iad1
22:25:58.488 Build machine configuration: 2 cores, 8 GB
22:25:58.882 Cloning github.com/Ismaeel-Dilshad/wafaye-sponser (Branch: main, Commit: f8c7c55)
22:25:58.883 Previous build caches not available.
22:25:59.075 Cloning completed: 193.000ms
22:25:59.486 Running "vercel build"
22:26:00.389 Vercel CLI 50.4.8
22:26:01.044 Installing dependencies...
22:26:02.431 
22:26:02.432 added 12 packages in 1s
22:26:05.491 
22:26:05.492 added 131 packages, and audited 132 packages in 3s
22:26:05.492 
22:26:05.492 27 packages are looking for funding
22:26:05.492   run `npm fund` for details
22:26:05.494 
22:26:05.494 found 0 vulnerabilities
22:26:07.799 
22:26:07.800 added 9 packages, and audited 10 packages in 2s
22:26:07.800 
22:26:07.801 1 package is looking for funding
22:26:07.801   run `npm fund` for details
22:26:07.802 
22:26:07.803 found 0 vulnerabilities
22:26:07.938 
22:26:07.938 > frontend@0.0.0 build
22:26:07.938 > node node_modules/vite/bin/vite.js build
22:26:07.939 
22:26:07.971 node:internal/modules/cjs/loader:1210
22:26:07.972   throw err;
22:26:07.972   ^
22:26:07.972 
22:26:07.973 Error: Cannot find module '/vercel/path0/frontend/node_modules/vite/bin/vite.js'
22:26:07.973     at Module._resolveFilename (node:internal/modules/cjs/loader:1207:15)
22:26:07.973     at Module._load (node:internal/modules/cjs/loader:1038:27)
22:26:07.973     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:164:12)
22:26:07.973     at node:internal/main/run_main_module:28:49 {
22:26:07.974   code: 'MODULE_NOT_FOUND',
22:26:07.974   requireStack: []
22:26:07.974 }
22:26:07.974 
22:26:07.974 Node.js v20.20.0
22:26:07.986 Error: Command "cd backend && npm install && cd ../frontend && npm install && npm run build" exited with 1