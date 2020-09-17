# Documentation 

For more info refer to [three js docs](https://threejs.org/docs/)  
### React Basics :
> - State : The state object is where you store property values that belongs to the component. When the state object changes, the component re-renders.
>- Hooks : It allows you to use state and other React features without writing a class. Hooks are the functions which "hook into" React state and lifecycle features from function components.
>- Props : React allows us to pass information to a Component using something called props (stands for properties). Props are basically kind of global variable or object. 
#### Canvas

  - Your go to for three js, renders three js elements 
  - components : WebGL renderer, camera, scene, etc


#### Lighting
  - Ambient Light: uniform light , cannot cast shadow
  - Point Light : light emitted from a point
  - Directional Light : Light coming from specific direction, source is at infity rays are parallel

#### Mesh
Class of tringular polygonal objects

#### Buffergeometry
An efficient way to present lines, mesh, position, face vertex within buffer. It doesnt heavy loads GPU

#### Material 
Appearance of Object, it is renderer independent.
>MeshBasicMaterial
>MeshStandardMaterial
>MeshDepthMaterial
>MeshDistanceMaterial
>MeshLambertMaterial
>MeshMatcapMaterial
>MeshNormalMaterial
>MeshPhongMaterial
>MeshPhysicalMaterial
>MeshToonMaterial
>LineBasicMaterial
>LineDashedMaterial
>PointsMaterial
>RawShaderMaterial
>ShaderMaterial
>ShadowMaterial
>SpriteMaterial

#### useFrame() ( In react three fiber docs useRender)
It is hook which callback after every frame, used for effects , controls, postprocessing. It is a render loop in which you can use internal state as well.
**Important**: Never use in your Main canvas component or else it'll go into an infite callback loop
**Example :** 
```sh
useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.03));
mesh is an reference variable here, not the mesh as mentioned above
```
#### Shadow 
 - castShadow 
 - recieveShadow
 - MapShadow
>shadow-mapSize-width={1024}
> shadow-mapSize-height={1024}
>shadow-camera-far={50}
> shadow-camera-left={-10}
>shadow-camera-right={10}
>shadow-camera-top={10}
> shadow-camera-bottom={-10}

#### Drei 
- Abstraction of React Three Fiber , made coding more easier by providing prebuilt shapes and effects 
- Also Provides various controls as jsx tags , that would have been pretty complex to code
- Additionally gives shader, camera controls , etc


[Game](https://2yqpv.csb.app/)

### Installation

React App [Install](https://create-react-app.dev/docs/getting-started/) 

Install the dependencies and devDependencies and start the server.

```sh
$ npx create-react-app ProjectName
$ yarn add three react-three-fiber react-spring sass drei
$ yarn start
```

### Plugins


| Packages | README |
| ------ | ------ |
| three | [https://www.npmjs.com/package/three] |
| react-three-fiber | [https://www.npmjs.com/package/react-three-fiber] |
| react-spring | [https://www.npmjs.com/package/react-spring][ |
| sass | [https://www.npmjs.com/package/sass]|
| drei | [https://www.npmjs.com/package/drei] |





