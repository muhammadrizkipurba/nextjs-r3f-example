"use client"

import { Float } from '@react-three/drei'
import { SodaCan, SodaCanProps } from '@/components/SodaCan'
import { forwardRef, ReactNode } from 'react';
import { Group } from 'three';

type FloatingCanProps = {
  flavor?: SodaCanProps["flavor"];
  rotationIntensity?: number;
  floatSpeed?: number;
  floatIntensity?: number;
  floatingRange?: [number, number];
  children?: ReactNode;
};

const FloatingCan = forwardRef<Group, FloatingCanProps>(({
  flavor = "blackCherry",
  rotationIntensity = 1,
  floatSpeed = 1.5,
  floatIntensity = 1,
  floatingRange = [-0.1, 0.1],
  children,
  ...props
}, ref) => {
  return (
    <group ref={ref} {...props}>
      <Float
        speed={floatSpeed} // Animation Speed, default to 1
        rotationIntensity={rotationIntensity} // X,Y,Z rotation intensity, default to 1
        floatIntensity={floatIntensity} // Up/down float intensity, works like multiplier with floatingRange, default to 1
        floatingRange={floatingRange}
      >
        {children}
        <SodaCan flavor={flavor} />
      </Float>
    </group>
  )
});

FloatingCan.displayName = "FloatingCan";

export default FloatingCan