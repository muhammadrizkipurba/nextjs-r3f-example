"use client"
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { View } from '@react-three/drei';

import Button from '@/components/Button';
import { TextSplitter } from '@/components/TextSplitter';
import HeroScene from '@/components/hero/HeroScene';
import { Bubbles } from '@/components/hero/Bubbles';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero = () => {

  useGSAP(() => {
    const introTimeline = gsap.timeline();

    introTimeline
      .set('.hero', { opacity: 1 })
      .from(".hero-header-word", {
        scale: 3,
        opacity: 0,
        duration: 1,
        ease: 'power4.in',
        // delay: 0.3,
        stagger: .8, //staggered each element animating for 0.8 seconds
      })
      .from(".hero-subheading", {
        opacity: 0,
        y: 30,
        // delay: 0.5,
      }, "+=.5")
      .from(".hero-body", {
        opacity: 0,
        y: 10,
      })
      .from('.hero-button', {
        opacity: 0,
        y: 10,
        duration: .5
      });

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top", // when the top of trigger hits the top of viewport
        end: "bottom bottom",
        scrub: 1.5,
        // markers: true
      }
    });

    scrollTl
      .fromTo("body", {
          backgroundColor: "#FDE047"
        }, {
          backgroundColor: "#9df99f",
          overwrite: "auto"
        },
        1
      )
    .from(".text-side-heading .split-char", {
      scale: 1.3,
      y: 40,
      rotate: -25,
      opacity: 0,
      stagger: .5,
      ease: "back.out(3)",
      duration: 1
    })
    .from(".text-side-body", {
      y: 20,
      opacity: 0
    })
  });



  return (
    <section className='hero opacity-0'>
      <View className='hero-scene pointer-events-none sticky top-0 z-50 h-screen w-screen hidden md:block'>
        <HeroScene />
        <Bubbles speed={1.5} bubbleSize={0.06} repeat={true} count={200} />
      </View>
      <div className='grid md:-mt-[100vh] mt-28'>
        <div className='grid h-screen place-items-center px-5 md:px-0 md:mt-6 lg:mt-[10rem]'>
          <div className='grid auto-rows-min place-items-center text-center'>
            <h1 className='text-8xl md:text-[9rem] lg:text-[13rem] font-black leading-[.8] uppercase text-orange-600'>
              <TextSplitter 
                text="Live Gutsy" 
                wordDisplayStyle='block' 
                className='hero-header-word'
              />
            </h1>
            <h2 className='hero-subheading mt-12 text-5xl font-semibold text-sky-950 lg:text-6xl'>
              Soda Perfected
            </h2>
            <p className='hero-body text-lg md:text-xl font-normal text-sky-950 mt-2'>
              3-5gr Sugar, 9gr Fiber with 5 delicious flavors
            </p>
            <Button
              buttonLink='/'
              buttonText='Shop Now'
              className='hero-button mt-12'
            />
          </div>
        </div>
        
        <div className='lg:container contain mx-auto px-5 lg:px-0'>
          <div className='text-side relative z-[80] grid h-screen items-center gap-4 md:grid-cols-2'>
            <Image
              alt=""
              src="/assets/all-cans-bunched.png"
              height={700}
              width={700}
              className='h-[450px] w-auto -ml-6 md:h-auto md:ml-0 md:w-full md:hidden'
            />
            <div>
              <h2 className='text-side-heading text-4xl md:text-5xl lg:text-8xl font-bold uppercase text-sky-950 text-balance'>
                <TextSplitter 
                  text="Try all five flavors"
                  wordDisplayStyle='inline-block'
                />
              </h2>
              <p className='text-side-body mt-4 max-w-xl text-balance text-lg lg:text-2xl font-normal text-sky-950'>
                Our soda is made with real fruit juice and a touch of cane sugar. We never use artificial sweeteners or high fructose corn syrup. Try all five flavors and find your favorite!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero