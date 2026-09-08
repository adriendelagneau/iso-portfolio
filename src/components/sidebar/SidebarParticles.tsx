"use client";

import { Button } from "@/components/ui/button";
import { InteractiveObject } from "@/data/interactiveObjects";
import { useMorphStore } from "@/store/useMorphStore";
import { SidebarPanel } from "./SidebarPanel";

export function SidebarParticles({ object }: { object: InteractiveObject }) {
  const setTargetIndex = useMorphStore((s) => s.setTargetIndex);
  // Populated by ParticlesModel from whatever shapes Particules.glb
  // actually contains — see useMorphStore.
  const shapeNames = useMorphStore((s) => s.shapeNames);

  return (
    <SidebarPanel object={object}>
      <div className="content-block flex flex-wrap gap-2 pt-2">
        {shapeNames.map((name, index) => (
          <Button key={`${name}-${index}`} className="action-item" onClick={() => setTargetIndex(index)}>
            {name}
          </Button>
        ))}
      </div>
    </SidebarPanel>
  );
}
