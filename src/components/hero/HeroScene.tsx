"use client";

import { Environment } from "@react-three/drei";
import FloatingCan from "@/components/FloatingCan";
import { useRef } from "react";
import { Group } from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const HeroScene = () => {
  const can1Ref = useRef<Group>(null);
  const can2Ref = useRef<Group>(null);
  const can3Ref = useRef<Group>(null);
  const can4Ref = useRef<Group>(null);
  const can5Ref = useRef<Group>(null);

  const can1GroupRef = useRef<Group>(null);
  const can2GroupRef = useRef<Group>(null);
  
  const groupRef = useRef<Group>(null);

  const FLOAT_SPEED = 1.5;

  useGSAP(() => {
    if(
      !can1Ref.current ||
      !can2Ref.current ||
      !can3Ref.current ||
      !can4Ref.current ||
      !can5Ref.current ||
      !can1GroupRef.current ||
      !can2GroupRef.current ||
      !groupRef.current
    ) return;

    // Set the Can starting location
    gsap.set(can1Ref.current.position, {x: -1.65});
    gsap.set(can1Ref.current.rotation, {z: -0.5});
    
    gsap.set(can2Ref.current.position, {x: 1.65});
    gsap.set(can2Ref.current.rotation, {z: 0.5});

    gsap.set(can3Ref.current.position, {y: 5, z: 2});
    gsap.set(can4Ref.current.position, {x: 2, y: 4, z: 2});
    gsap.set(can5Ref.current.position, {y: -5});

    // Create timeline
    const introTl = gsap.timeline({
      defaults: {
        duration: 3,
        ease: "back.out(1.4)"
      }
    });

    if(window.scrollY < 20) {
      introTl
        .from(can1GroupRef.current.position, {y: -5, x: 1}, 0)
        .from(can1GroupRef.current.rotation, {z: 3}, 0)
        .from(can2GroupRef.current.position, {y: 5, x: 1}, 0)
        .from(can2GroupRef.current.rotation, {z: 3}, 0);
    }


    // Create Scroll Timeline
    const scrollTl = gsap.timeline({
      defaults: {
        duration: 2,
      },
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5
      }
    });

    scrollTl
      // rotate the Can Group
      .to(groupRef.current.rotation, {y: Math.PI * 2})
      // Can 1 - Black Cherry
      .to(can1Ref.current.position, {x: -.2, y: -.7, z: -.2}, 0)
      .to(can1Ref.current.rotation, {z: .3}, 0)
      // Can 2 - Lemon Lime
      .to(can2Ref.current.position, {x: 1, y: -.2, z: -1}, 0)
      .to(can2Ref.current.rotation, {z: 0}, 0)
      // Can 3 - Grape
      .to(can3Ref.current.position, {x: -.3, y: .5, z: -1}, 0)
      .to(can3Ref.current.rotation, {z: -.1}, 0)
      // Can 4 - Strawberry Lemonade
      .to(can4Ref.current.position, {x: 0, y: -.3, z: .5}, 0)
      .to(can4Ref.current.rotation, {z: .3}, 0)
      // Can 5 - Watermelon
      .to(can5Ref.current.position, {x: .3, y: .5, z: -.5}, 0)
      .to(can5Ref.current.rotation, {z: -.25}, 0)
      
      // Cans Group
      .to(groupRef.current.position, {
        x: 1, duration: 3, ease: "sine.inOut"
      }, 1.5)
  });

  return (
    <group ref={groupRef}>
      <group ref={can1GroupRef}>
        <FloatingCan
          ref={can1Ref}
          flavor="blackCherry"
          floatSpeed={FLOAT_SPEED}
        />
      </group>
      <group ref={can2GroupRef}>
        <FloatingCan
          ref={can2Ref}
          flavor="lemonLime"
          floatSpeed={FLOAT_SPEED}
        />
      </group>
      <FloatingCan
        ref={can3Ref}
        flavor="grape"
        floatSpeed={FLOAT_SPEED}
      />
      <FloatingCan
        ref={can4Ref}
        flavor="strawberryLemonade"
        floatSpeed={FLOAT_SPEED}
      />
      <FloatingCan
        ref={can5Ref}
        flavor="watermelon"
        floatSpeed={FLOAT_SPEED}
      />

      <Environment // HDR | Light Settings
        files="/assets/3d-model/hdr/lobby.hdr"
        environmentIntensity={1.2}
      />
    </group>
  );
};

export default HeroScene;