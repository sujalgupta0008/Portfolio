import { Canvas } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const ParticleField = () => {
  const ref = useRef();
  const positions = useMemo(() => {
    const count = 260;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 9;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 9;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.03;
      ref.current.rotation.x += delta * 0.008;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.045} color="#38BDF8" transparent opacity={0.55} sizeAttenuation />
    </points>
  );
};

export const ParticlesField = () => (
  <Canvas
    camera={{ position: [0, 0, 5], fov: 60 }}
    style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    data-testid="hero-particles-canvas"
  >
    <ParticleField />
  </Canvas>
);
