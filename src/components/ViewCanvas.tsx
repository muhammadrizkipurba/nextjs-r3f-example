"use client"
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const Loader = dynamic(
  () => import("@react-three/drei").then((mod) => mod.Loader),
  { ssr: false }
);

function ViewCanvas() {
  return (
    <>
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 30
        }}
        shadows
        dpr={[1, 1.5]} // device pixels ratio
        gl={{antialias: true}}
        camera={{
          fov: 40,
        }}
      >
        <Suspense fallback={null}>
          <View.Port />
        </Suspense>

        {/* Check Render Performance - from r3f-perf */}
        {/* <Perf />  */}

        {/* Example of 3d Box Component */}
        {/* <mesh 
          rotation={[.5, .5, 0]}
          position={[1, 0, 0]}
        >
          <boxGeometry />
          <meshStandardMaterial color={"blue"}/>
        </mesh>
        <ambientLight intensity={2} />
        <spotLight intensity={3} position={[1,1,1]} /> */}
      </Canvas>
      <Loader />
    </>
  )
}

export default ViewCanvas