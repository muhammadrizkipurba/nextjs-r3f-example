"use client"
import { Canvas } from "@react-three/fiber";
import { Environment, View } from "@react-three/drei";
import FloatingCan from "@/components/FloatingCan";

type Props = {}

function ViewCanvas({}: Props) {
  return (
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
      <View.Port />

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
  )
}

export default ViewCanvas