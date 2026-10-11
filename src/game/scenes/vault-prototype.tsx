"use client";

import { useRef } from "react";
import { ContactShadows, Float, OrbitControls } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

function RoomShell() {
  return (
    <RigidBody type="fixed" colliders={false}>
      <CuboidCollider args={[7, 0.1, 6]} position={[0, -0.1, 0]} />
      <CuboidCollider args={[7, 3, 0.1]} position={[0, 3, -6]} />
      <CuboidCollider args={[0.1, 3, 6]} position={[-7, 3, 0]} />
      <CuboidCollider args={[0.1, 3, 6]} position={[7, 3, 0]} />

      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[14, 12]} />
        <meshStandardMaterial color="#151020" metalness={0.65} roughness={0.48} />
      </mesh>
      <mesh receiveShadow position={[0, 3, -6]}>
        <boxGeometry args={[14, 6, 0.2]} />
        <meshStandardMaterial color="#110b1b" metalness={0.55} roughness={0.62} />
      </mesh>
      <mesh receiveShadow position={[-7, 3, 0]}>
        <boxGeometry args={[0.2, 6, 12]} />
        <meshStandardMaterial color="#0e0918" metalness={0.45} roughness={0.7} />
      </mesh>
      <mesh receiveShadow position={[7, 3, 0]}>
        <boxGeometry args={[0.2, 6, 12]} />
        <meshStandardMaterial color="#0e0918" metalness={0.45} roughness={0.7} />
      </mesh>

      {[-4.5, 0, 4.5].map((x) => (
        <group key={x} position={[x, 0, -5.72]}>
          <mesh castShadow position={[0, 1.45, 0]}>
            <boxGeometry args={[1.5, 2.9, 0.32]} />
            <meshStandardMaterial color="#251437" metalness={0.8} roughness={0.3} />
          </mesh>
          <mesh position={[0, 1.45, 0.18]}>
            <torusGeometry args={[0.46, 0.07, 12, 40]} />
            <meshStandardMaterial color="#c581ff" emissive="#8137cf" emissiveIntensity={2.5} />
          </mesh>
        </group>
      ))}

      {[-4.5, 4.5].map((x) => (
        <mesh key={x} position={[x, 0.025, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.055, 10]} />
          <meshBasicMaterial color="#e867cf" toneMapped={false} />
        </mesh>
      ))}
    </RigidBody>
  );
}

function Crystal({ position }: { position: [number, number, number] }) {
  const crystal = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (crystal.current) crystal.current.rotation.y += delta * 0.7;
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.35}>
      <mesh ref={crystal} castShadow position={position} rotation={[0, 0, Math.PI / 4]}>
        <octahedronGeometry args={[0.42, 0]} />
        <meshStandardMaterial
          color="#e8c6ff"
          emissive="#a542f5"
          emissiveIntensity={2.2}
          metalness={0.25}
          roughness={0.12}
        />
      </mesh>
      <pointLight position={position} color="#b768ff" intensity={6} distance={4} />
    </Float>
  );
}

function PlaceholderCharacter() {
  return (
    <RigidBody position={[0, 1, 2.2]} colliders="hull" enabledRotations={[false, true, false]}>
      <group>
        <mesh castShadow position={[0, 0.35, 0]}>
          <capsuleGeometry args={[0.38, 0.8, 8, 16]} />
          <meshStandardMaterial color="#62408c" metalness={0.35} roughness={0.4} />
        </mesh>
        <mesh castShadow position={[0, 1.15, 0]}>
          <sphereGeometry args={[0.35, 20, 20]} />
          <meshStandardMaterial color="#bf87f0" metalness={0.2} roughness={0.35} />
        </mesh>
        <mesh position={[0, 1.18, 0.31]}>
          <boxGeometry args={[0.42, 0.11, 0.04]} />
          <meshStandardMaterial color="#a7f9ef" emissive="#56dccc" emissiveIntensity={3} />
        </mesh>
      </group>
    </RigidBody>
  );
}

export function VaultPrototype() {
  return (
    <>
      <ambientLight intensity={0.35} color="#cdb4ff" />
      <hemisphereLight args={["#a374e6", "#12081e", 1.1]} />
      <directionalLight castShadow position={[5, 9, 6]} intensity={2.4} color="#f3e6ff" shadow-mapSize={[1024, 1024]} />
      <pointLight position={[0, 3.5, -3]} color="#a94cff" intensity={24} distance={12} />
      <spotLight position={[-5, 5, 2]} angle={0.45} penumbra={0.8} intensity={28} color="#e34dbb" castShadow />

      <RoomShell />
      <PlaceholderCharacter />
      <Crystal position={[-2.4, 0.8, -1.5]} />
      <Crystal position={[0, 0.8, -2.7]} />
      <Crystal position={[2.5, 0.8, -1.2]} />

      <ContactShadows position={[0, 0.02, 0]} opacity={0.55} scale={13} blur={2.5} far={8} />
      <gridHelper args={[14, 28, "#713aa6", "#2a183a"]} position={[0, 0.015, 0]} />
      <OrbitControls
        makeDefault
        enablePan={false}
        minDistance={6}
        maxDistance={17}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2.15}
        target={[0, 1.3, -0.5]}
      />
    </>
  );
}
