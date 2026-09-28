import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // or `true` — listen on all network interfaces
    port: 5173, // optional, default is 5173
    allowedHosts: true, // allow any host header (disables the check entirely)
  },
});
