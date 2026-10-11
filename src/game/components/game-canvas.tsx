"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls, Preload } from "@react-three/drei";
import { Physics } from "@react-three/rapier";

import { GAME_CONTROLS } from "@/game/config/constants";
import { GameHud } from "@/game/components/game-hud";
import { VaultPrototype } from "@/game/scenes/vault-prototype";

export function GameCanvas() {
  return (
    <KeyboardControls map={GAME_CONTROLS}>
      <div className="relative h-full w-full">
        <Canvas
          aria-label="Interactive 3D vault prototype"
          camera={{ position: [8, 6, 10], fov: 46, near: 0.1, far: 100 }}
          dpr={[1, 1.75]}
          gl={{ antialias: true, powerPreference: "high-performance" }}
          shadows
        >
          <color attach="background" args={["#07030d"]} />
          <fog attach="fog" args={["#07030d", 16, 34]} />
          <Suspense fallback={null}>
            <Physics gravity={[0, -9.81, 0]}>
              <VaultPrototype />
            </Physics>
            <Preload all />
          </Suspense>
        </Canvas>
        <GameHud />
      </div>
    </KeyboardControls>
  );
}
