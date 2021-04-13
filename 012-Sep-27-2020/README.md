# Documentation for Webinar Part - II
  Author : [Auralshin](https://github.com/auralshin)

- You can either create your own new react app or clone already built app and do changes
- For Both Option Instructions have been mentioned

### Installation of React App

React App [Install](https://create-react-app.dev/docs/getting-started/)

Install the dependencies and devDependencies and start the server.

```sh
$ npx create-react-app ProjectName
$ yarn add three react-three-fiber react-spring sass drei use-cannon
$ yarn start
```
### OR

### To Clone and Start the App

```sh
$ git clone worshop-repo-link
$ yarn install
$ yarn start
```
Paste the link in place of the placeholder (workshop-repo-link)

## Concepts To Be Covered
### React Basics :
> - State : The state object is where you store property values that belongs to the component. When the state object changes, the component re-renders.
>- Hooks : It allows you to use state and other React features without writing a class. Hooks are the functions which "hook into" React state and lifecycle features from function components.
>- Props : React allows us to pass information to a Component using something called props (stands for properties). Props are basically kind of global variable or object. 

### Canvas

  - Your go to for three js, renders three js elements 
  - components : WebGL renderer, camera, scene, etc

### Cannon Js
#### Three Js and Ammo Js based Physics Engine
- Lightweight than many ported physics engines.
- Open source JavaScript library.
- Uses an iterative Gauss-Seidel solver to solve constraints.



#### Ammo Js
- Bullet Physics Engine
Bullet is a physics engine which simulates collision detection, soft and rigid body dynamics
 'ammo' stands for "Avoided Making My Own js physics engine by compiling bullet from C++"

### Buffer Geometry and Lighting 
- Refer to [Webinar Part - I](https://github.com/hackclubnmit/workshops/edit/master/011-Sep-20-2020/)
- Refer to [Webinar Video](https://www.youtube.com/watch?v=dVw6fJDxE2E&ab_channel=HackClubNMIT)

### Use Cannon 
To install [npm package](https://www.npmjs.com/package/use-cannon)
- Physics based hooks for react-three-fiber
- It's based on Cannon JS
- You can find proper documentation of use-cannon [here](https://github.com/pmndrs/use-cannon)

>- Important Hooks : 
> useBox
> useSphere
> usePlane
> Physics

### useFrame 
If you're running effects, postprocessings, controls, etc that need to get updated every frame, useRender gives you access to the render-loop. You receive the internal state as well, which is the same as what you would get from useThree.
Refer to Previous Session [Docs](https://github.com/hackclubnmit/workshops/edit/master/011-Sep-20-2020/)

### GLTFLoaders
glTF (GL Transmission Format) is an open format specification for efficient delivery and loading of 3D content. Assets may be provided either in JSON (.gltf) or binary (.glb) format. External files store textures (.jpg, .png) and additional binary data (.bin). A glTF asset may deliver one or more scenes, including meshes, materials, textures, skins, skeletons, morph targets, animations, lights, and/or cameras.
- Refer To Three Js [Docs](https://threejs.org/docs/#examples/en/loaders/GLTFLoader)

### OrbitControls
Orbit controls allow the camera to orbit around a target.

### Food for Thoughts
[Article](https://www.digitalocean.com/community/tutorials/react-react-with-threejs)


### Plugins and Links

| Packages | README |
| ------ | ------ |
| three | https://www.npmjs.com/package/three |
| react-three-fiber | https://www.npmjs.com/package/react-three-fiber |
| use-cannon | https://github.com/pmndrs/use-cannon |
|Cannon Js |https://schteppe.github.io/cannon.js/ |
|GLTFLoader|https://threejs.org/docs/#examples/en/loaders/GLTFLoader |
| sass | https://www.npmjs.com/package/sass |
| drei | https://www.npmjs.com/package/drei |
|Ammo Js|https://github.com/kripken/ammo.js/ |

