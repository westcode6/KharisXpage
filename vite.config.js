import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import beep from "@rollup/plugin-beep"
export default defineConfig({
  plugins: [react(), beep()],
  onwarn(warning, warn)
  {
      if (warning.code == 'EVAL' && /[\\/]node_modules[\\/]firebase[\\/]/.test(warning.id)) return;

      warn(warning);
  },

  build: {
    chunkSizeWarningLimit: 100000000,
  },
})
