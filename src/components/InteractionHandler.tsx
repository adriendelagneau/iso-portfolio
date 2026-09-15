"use client";

import { useThree } from "@react-three/fiber";
import { useEffect, useMemo } from "react";
import * as THREE from "three";
import useExperienceUIStore from "@/store/useExperienceUIStore";
import useInteractionStore from "@/store/useInteractionStore";

/**
 * The room geometry (walls/floor) fills the whole frame, so R3F's
 * onPointerMissed (which only fires when the raycaster hits nothing) never
 * fires reliably for "click elsewhere".
 *
 * This used to check the currently *hovered* hitbox (from HitBoxes.tsx's
 * onPointerOver/onPointerOut) at click time instead of raycasting itself —
 * which meant tapping a hitbox on a touch device did nothing, since a tap
 * has no separate "hover" phase to have set that state first (confirmed
 * unusable on mobile). Raycasting fresh from the click's own coordinates
 * works identically for mouse and touch: it doesn't depend on any prior
 * event having fired. Each hitbox's mesh tags itself via
 * userData.hitboxName (see HitBoxes.tsx) so the nearest thing actually hit
 * can be identified as a hitbox (or not).
 */
export function InteractionHandler() {
  const { gl, camera, scene } = useThree();
  const experienceStarted = useExperienceUIStore((s) => s.experienceStarted);
  const raycaster = useMemo(() => new THREE.Raycaster(), []);
  const ndc = useMemo(() => new THREE.Vector2(), []);

  useEffect(() => {
    if (!experienceStarted) return;

    const canvas = gl.domElement;

    const handleClick = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      ndc.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      ndc.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(ndc, camera);
      const hit = raycaster.intersectObjects(scene.children, true)[0];
      const hitboxName = (hit?.object.userData as { hitboxName?: string } | undefined)?.hitboxName;

      const { clickedObject, setClickedObject } = useInteractionStore.getState();

      if (hitboxName && hitboxName !== clickedObject) {
        setClickedObject(hitboxName);
      } else if (!hitboxName) {
        setClickedObject(null);
      }
    };

    canvas.addEventListener("click", handleClick);
    return () => canvas.removeEventListener("click", handleClick);
  }, [gl.domElement, camera, scene, raycaster, ndc, experienceStarted]);

  return null;
}
