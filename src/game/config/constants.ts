import type { KeyboardControlsEntry } from "@react-three/drei";

import type { GameControl } from "@/game/types";

export const RUN_DURATION_SECONDS = 180;

export const GAME_CONTROLS: KeyboardControlsEntry<GameControl>[] = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "left", keys: ["ArrowLeft", "KeyA"] },
  { name: "right", keys: ["ArrowRight", "KeyD"] },
  { name: "sprint", keys: ["ShiftLeft", "ShiftRight"] },
  { name: "interact", keys: ["KeyE"] },
];
