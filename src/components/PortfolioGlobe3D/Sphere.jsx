import React from 'react';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Sphere = () => {
  const sphereRef = useRef();

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += 0.0005;
      sphereRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh ref={sphereRef} scale={2}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhysicalMaterial
        transparent
        opacity={0.15}
        transmission={0.95}
        ior={1.5}
        thickness={0.1}
        roughness={0.1}
        color="#ffffff"
      />
    </mesh>
  );
};

export default Sphere;
