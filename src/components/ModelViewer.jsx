import { Environment, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { useLayoutEffect, useRef } from "react";
import { MaleModelSuit } from "./Models/MaleModelSuit";
import { FemaleModelJeans } from "./Models/FemaleModelJeans";
import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";
import { FemaleModelDressSmall } from "./Models/FemaleModelDressSmall";

/* eslint-disable react/no-unknown-property */
gsap.registerPlugin(_ScrollTrigger);
const Scene = () => {
  const { viewport } = useThree();

  const FemaleModelDressRef = useRef();
  const MaleModelSuitRef = useRef();
  const FemaleModelJeansRef = useRef();

  const tl = gsap.timeline();

  useLayoutEffect(() => {
    tl.to(MaleModelSuitRef.current?.rotation, {
      x: 0,
      y: 6.18,
      z: 0,
      scrollTrigger: {
        trigger: ".rotateOne",
        start: "top top",
        end: "+=" + innerHeight * 2,
        scrub: 0.2,
        immediateRender: false,
      },
    });
    tl.to(FemaleModelDressRef.current?.rotation, {
      x: 0,
      y: 6.18,
      z: 0,
      scrollTrigger: {
        trigger: ".rotateOne",
        start: "top top",
        end: "+=" + innerHeight * 2,
        scrub: 0.2,
        immediateRender: false,
      },
    });
    if (FemaleModelJeansRef.current) {
      tl.to(FemaleModelJeansRef.current?.rotation, {
        x: 0,
        y: 6.18,
        z: 0,
        scrollTrigger: {
          trigger: ".rotateOne",
          start: "top top",
          end: "+=" + innerHeight * 2,
          scrub: 0.2,
          immediateRender: false,
        },
      });
    }
    return () => {
      tl.kill(); // Kill the timeline on unmount
      _ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Kill all scroll triggers
    };
  }, []);

  let isXSm = false;
  let isSm = false;
  let isLg = false;
  let isXl = false;
  if (window.innerWidth < 400) {
    isXSm = true;
  } else if (window.innerWidth < 768) {
    isSm = true;
  } else if (window.innerWidth < 1024) {
    isLg = true;
  } else {
    isXl = true;
  }
  return (
    <>
      <Environment preset="city" />
      <hemisphereLight intensity={1} />
      <FemaleModelDressSmall
        position={[
          isXSm ? -0.5 : isSm ? -0.7 : isLg ? -1.4 : -1.6,
          isXSm ? -2 : isSm ? -2.1 : isLg ? -2.2 : -2,
          isXSm ? 0 : 0,
        ]}
        scale={
          isXSm
            ? viewport.width / 1.9
            : isSm
            ? viewport.width / 2.5
            : isLg
            ? viewport.width / 3.8
            : 1.3
        }
        ref={FemaleModelDressRef}
      />
      <MaleModelSuit
        position={[
          isXSm ? 0.5 : isSm ? 0.7 : 0.1,
          isXSm ? -2 : isSm ? -2.1 : isLg ? -2.1 : -2,
          0,
        ]}
        scale={
          isXSm
            ? viewport.width / 3.6
            : isSm
            ? viewport.width / 4.6
            : isLg
            ? viewport.width / 7
            : 0.7
        }
        ref={MaleModelSuitRef}
      />
      {isLg || isXl ? (
        <FemaleModelJeans
          position={[isLg ? 1.6 : 1.6, isLg ? -2.1 : -2, 0]}
          rotation={[0, 0, 0]}
          scale={isLg ? viewport.width / 3.8 : 1.3}
          ref={FemaleModelJeansRef}
        />
      ) : (
        <> </>
      )}

      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
    </>
  );
};
export const ModelViewer = () => {
  return (
    <div className="h-[600vh] relative bg-gradient-to-b bgbodysection">
      <div className="sticky z-10 top-0 text-[45px] md:text-[80px] lg:text-[100px] xl:text-[120px] font-mulish font-[600] text-center bg-[linear-gradient(181.59deg,_#a09588_16.78%,_#F2F2F2_83.68%)] bg-clip-text text-transparent">
        Virtual Trial Room
      </div>
      <div className="w-[100%] h-[95vh] md:h-[100vh] pointer-events-none sticky top-0 bg-[url('./assets/Studio.png')] bg-no-repeat bg-cover bg-bottom">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f2f2f2] to-transparent"></div>
        <Canvas>
          <Scene />
        </Canvas>
      </div>
      <div className="rotateOne h-[50vh]">Trigger 1</div>
    </div>
  );
};
