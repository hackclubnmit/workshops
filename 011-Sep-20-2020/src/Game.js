import React, { useState } from "react";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import { Physics, useSphere, useBox, usePlane } from "use-cannon";
import "./App.scss";

const Game = () => {
  return (
    <>
      <Canvas>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 3]} />
        <pointLight position={[-5, -5, -3]} />

        <mesh>
          <sphereBufferGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="lightblue" />
        </mesh>
      </Canvas>
    </>
  );
};
export default Game;
