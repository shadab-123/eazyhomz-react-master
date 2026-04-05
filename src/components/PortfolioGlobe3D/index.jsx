import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Sphere from './Sphere';
import ProjectCard from './ProjectCard';
import './portfolio-globe-3d.scss';

const SceneContent = ({ projects, cardPositions }) => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />

      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#87ceeb" />

      <Sphere />

      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          position={cardPositions[index]}
          project={project}
          index={index}
        />
      ))}

      <OrbitControls
        autoRotate
        autoRotateSpeed={2}
        enableZoom={true}
        enablePan={true}
        minDistance={5}
        maxDistance={15}
      />
    </>
  );
};

const PortfolioGlobe3D = ({ projects }) => {
  // Convert spherical coordinates to 3D cartesian coordinates
  const distributeCardsOnSphere = (count, radius = 3.5) => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      positions.push([x, y, z]);
    }
    return positions;
  };

  const cardPositions = distributeCardsOnSphere(projects.length);

  return (
    <div className="portfolio-globe-3d-container">
      <Canvas
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        style={{ width: '100%', height: '100%' }}
      >
        <Suspense fallback={null}>
          <SceneContent projects={projects} cardPositions={cardPositions} />
        </Suspense>
      </Canvas>

      <div className="portfolio-globe-info">
        <h3>Interactive 3D Portfolio</h3>
        <p>Drag to rotate • Scroll to zoom • Right-click to pan</p>
      </div>
    </div>
  );
};

export default PortfolioGlobe3D;
