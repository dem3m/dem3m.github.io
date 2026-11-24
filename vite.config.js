import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// This repository publishes at https://dem3m.github.io/.
export default defineConfig({
  plugins: [react(), {
    name: "production-security-policy",
    apply: "build",
    transformIndexHtml: {
      order: "post",
      handler: () => [{
        tag: "meta",
        attrs: {
          "http-equiv": "Content-Security-Policy",
          content: "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self'; font-src 'self'; connect-src 'none'; frame-src 'self'; object-src 'self'; base-uri 'none'; form-action 'none'",
        },
        injectTo: "head-prepend",
      }],
    },
  }],
  base: "/",
});
