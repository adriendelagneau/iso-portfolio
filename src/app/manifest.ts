import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Adrien Delagneau — Portfolio 3D",
    short_name: "Adrien Delagneau",
    description: "Portfolio 3D interactif présentant mes projets, compétences et coordonnées.",
    start_url: "/",
    display: "standalone",
    background_color: "#383836",
    theme_color: "#383836",
    icons: [
      { src: "/icons/pwa/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/pwa/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      {
        src: "/icons/pwa/icon-512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
