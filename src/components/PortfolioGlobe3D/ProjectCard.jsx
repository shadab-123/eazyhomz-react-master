import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

const ProjectCard = ({ position, project, index }) => {
  const groupRef = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const targetScale = isHovered ? 1.15 : 1;
  const currentScale = useRef(1);

  useFrame(() => {
    if (groupRef.current) {
      // Floating animation
      groupRef.current.position.y =
        position[1] + Math.sin(Date.now() * 0.0005 + index) * 0.15;

      // Smooth scale lerp
      currentScale.current += (targetScale - currentScale.current) * 0.1;
      groupRef.current.scale.set(currentScale.current, currentScale.current, currentScale.current);

      // Billboard effect - always face camera
      groupRef.current.quaternion.copy(new THREE.Quaternion());
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <Html
        position={[0, 0, 0]}
        scale={1}
        distanceFactor={1}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
      >
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            padding: '1.2rem',
            borderRadius: '14px',
            width: '180px',
            backdropFilter: 'blur(10px)',
            boxShadow: isHovered
              ? '0 12px 48px rgba(0, 0, 0, 0.2)'
              : '0 8px 32px rgba(0, 0, 0, 0.1)',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            border: isHovered ? '1px solid #111' : '1px solid rgba(0, 0, 0, 0.1)',
          }}
        >
          <div
            style={{
              backgroundColor: project.color || '#f5f0e9',
              borderRadius: '8px',
              height: '80px',
              marginBottom: '0.8rem',
              backgroundImage: `url('${project.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <h3
            style={{
              margin: '0 0 0.5rem 0',
              fontSize: '0.9rem',
              fontWeight: '700',
              color: '#111',
              lineHeight: '1.3',
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              margin: '0',
              fontSize: '0.75rem',
              color: '#666',
              lineHeight: '1.4',
            }}
          >
            {project.category}
          </p>
        </div>
      </Html>
    </group>
  );
};

export default ProjectCard;
