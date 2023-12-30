import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import beep from "@rollup/plugin-beep";

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");
  return {
    // vite config
    plugins: [react(), beep()],
    onwarn(warning, warn) {
      if (
        warning.code == "EVAL" &&
        /[\\/]node_modules[\\/]firebase[\\/]/.test(warning.id)
      )
        return;

      warn(warning);
    },

    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
  };
});
