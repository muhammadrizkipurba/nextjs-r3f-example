"use client";
import { View } from "@react-three/drei"
import SkyDiveScene from "./SkyDiveScene"

const SkyDive = () => {
  const SENTENCE = "Dive Into Better Health"

  return (
    <div className="skydive h-screen">
      <h2 className="sr-only">Sky Dive Section</h2>
      <View className="h-screen w-screen">
        <SkyDiveScene sentence={SENTENCE} flavor="blackCherry" />
      </View>
    </div>
  )
}

export default SkyDive