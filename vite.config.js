import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// This repository publishes at https://dem3m.github.io/.
export default defineConfig({ plugins: [react()], base: "/" });
