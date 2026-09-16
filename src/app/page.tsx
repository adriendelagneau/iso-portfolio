"use client";

import { Loader } from "@/components/Loader";
import { NavPad } from "@/components/NavPad";
import { OrientationModal } from "@/components/OrientationModal";
import { ResponsiveHandler } from "@/components/ResponsiveHandler";
import Scene from "@/components/Scene";
import { ServiceWorkerRegistration } from "@/components/ServiceWorkerRegistration";
import { Sidebar } from "@/components/sidebar/Sidebar";

export default function Home() {
  return (
    <div className="h-dvh w-screen">
      {/* The experience is entirely canvas/WebGL — no visible on-page text
          equivalent to a hero title. sr-only so it doesn't touch the visual
          diorama, but gives crawlers/screen readers the page's real subject
          instead of nothing (or, previously, OrientationModal's unrelated
          "rotate your device" instruction, which was the page's only h1). */}
      <h1 className="sr-only">Adrien Delagneau — Portfolio 3D interactif</h1>
      <p className="sr-only">
        Portfolio 3D interactif d&apos;Adrien Delagneau, développeur front-end — projets,
        compétences et coordonnées.
      </p>
      <Loader />
      <Scene />
      <NavPad />
      <Sidebar />
      <ResponsiveHandler />
      <OrientationModal />
      <ServiceWorkerRegistration />
    </div>
  );
}
