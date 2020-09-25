import React, { useRef, useState } from "react";
//R3F
import { Canvas, useFrame, useThree } from "react-three-fiber";
// Deai - R3F
import { softShadows, MeshWobbleMaterial, OrbitControls } from "drei";

// Styles
import "./App.scss";
// React Spring
import { useSpring, a } from "react-spring/three";
// Use Cannon : Cannon Js Hook
import { Physics, useBox, useSphere, usePlane } from "use-cannon";

const Sphere = () => {
  const { viewport } = useThree();
  const [ref, api] = useSphere(() => ({ args: 0.5, mass: 2 }));
  usePlane(() => ({
    position: [0, -viewport.height, 0],
    rotation: [-Math.PI / 2, 0, 0],
    onCollide: () => {
      api.position.set(0, 0, 0);
      api.velocity.set(0, 10, 0);
    },
  }));

  return (
    <mesh ref={ref}>
      <sphereBufferGeometry attach="geometry" args={[0.5, 32, 32]} />
      <meshStandardMaterial attach="material" color="hotpink" />
    </mesh>
  );
};

const Dash = () => {
  const [ref, api] = useBox(() => ({ args: [2, 0.5, 1] }));
  useFrame((state) => {
    api.position.set(
      (state.mouse.x * state.viewport.width) / 2,
      -state.viewport.height / 2,
      0
    );
    api.rotation.set(0, 0, (state.mouse.x * Math.PI) / 5);
  });
  return (
    <mesh ref={ref}>
      <boxBufferGeometry attach="geometry" args={[2, 0.5, 1]} />
      <meshStandardMaterial attach="material" color="red" />
    </mesh>
  );
};

// const Huddle = ({
//   args = [2, 0.3, 0.5],
//   color,
//   speed = 0.1,
//   long = false,
//   y = 2,
//   right = false,
//   ...props
// }) => {
//   const { viewport } = useThree();
//   const { width } = viewport;
//   const [ref, api] = useBox(() => ({ args, ...props }));
//   let initial = right ? width : -width;
//   let r = Math.random();
//   let rot = 0.2 * speed;
//   let x = initial;
//   let z = 0;
//   useFrame((state, delta) => {
//     //api.rotation.set(0, 0, r * Math.PI + (right ? (z += rot) : (z -= rot)))
//     api.position.set((x = right ? x - speed : x + speed), y, 0);
//     if (right ? x + 2 < -width / 2 : x - 2 > width / 2) x = initial;
//   });
//   return (
//     <mesh ref={ref}>
//       <boxBufferGeometry attach="geometry" args={args} />
//       <meshStandardMaterial attach="material" color={color} />
//     </mesh>
//   );
// };

const Huddle = ({ args = [2, 0.3, 0.5], color, ...props }) => {
  const [ref, api] = useBox(() => ({ args, ...props }));

  return (
    <mesh ref={ref}>
      <boxBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
};

const App = () => {
  return (
    <>
      <Canvas colorManagement camera={{ position: [0, 5, 10], fov: 40 }}>
        <ambientLight intensity={0.5} />
        <pointLight intensity={0.7} position={[10, 5, 10]} />
        <pointLight intensity={0.4} position={[-10, -5, -10]} />
        <Physics
          gravity={[0, -20, 0]} // Gravity , three parameters coordinate
          defaultContactMaterial={{ restitution: 1.1 }} // restitution for collision
        >
          <Sphere />
          <Dash />
          <Huddle color="yellow" position={[2, 3, 0]} />
          <Huddle color="yellow" position={[-3, 2, 0]} />
        </Physics>
        {/* <OrbitControls /> */}
      </Canvas>
    </>
  );
};

export default App;
