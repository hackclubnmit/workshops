import React, { useState, useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";

extend({ OrbitControls });

const Logo = () => {
  const [model, setModel] = useState();

  useEffect(() => {
    new GLTFLoader().load("/Hackclub.gltf", setModel);
  }, []);

  return model ? <primitive object={model.scene} /> : null;
};

const Controls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();

  useFrame(() => {
    orbitRef.current.update();
  });

  return (
    <orbitControls autoRotate args={[camera, gl.domElement]} ref={orbitRef} />
  );
};

function App() {
  const isBrowser = typeof window !== "undefined";
  // var scene = new THREE.Scene(); // initialising the scene
  // scene.background = new THREE.Color(0xff0000);

  return (
    <>
      {isBrowser && (
        <Canvas
          camera={{ position: [0, 0, 25], fov: 20 }}
          onCreated={({ gl }) => {
            gl.shadowMap.enabled = true;
            gl.shadowMap.type = THREE.PCFSoftShadowMap;
          }}
        >
          <ambientLight intensity={2.0} />

          <Controls />
          <Logo />
        </Canvas>
      )}
    </>
  );
}
export default App;
