import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "src", //When App.jsx is int src directory otherwise you can remove this part
});
