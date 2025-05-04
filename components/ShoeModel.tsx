import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";

const Shoe = () => {
  const { scene } = useGLTF("/joggers.glb");
  const shoeRef = useRef(null);

  useEffect(() => {
    if (shoeRef.current) {

      const tl = gsap.timeline();

      tl.fromTo(
        shoeRef.current.position,
        { y: 5, x: 5 },
        { y: 0, x: 0.5, duration: 1.5 }
      )
      // Floating animation after position animation
      .to(shoeRef.current.position, {
        y: 0.2, // Float up to y = 1
        duration: 1.5,
        yoyo: true,  // Make it go back down after reaching y = 1
        repeat: -1,  // Loop infinitely
        ease: "power1.inOut", // Smooth easing effect
      });
    }
  }, []);

  return (
    <primitive
      ref={shoeRef}
      object={scene}
      scale={2} 
      position={[0.65, 0, 0.5]} 
      rotation={[0, 0, 0.5]}
    />
  );
};

const ShoeModel = () => {
  return (
    <div className="absolute">
      <div className="h-screen w-screen">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight color="white" position={[5, 5, 5]} />
          <Suspense fallback={null}>
            <Shoe />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default ShoeModel;
