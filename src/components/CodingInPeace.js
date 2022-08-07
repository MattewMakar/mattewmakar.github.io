import React, { Suspense } from "react";
import Loading from "components/Loading";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
// import { useFrame } from "@react-three/fiber";

const CodingInPeace = () => {
  const { nodes, materials } = useGLTF("https://mattewmakar.github.io/portfolio.gltf");
  const animatedGroupProps = useSpring({
    loop: { reverse: true },
    config: { duration: 7000 },
    from: { rotation: [0, 0, 0] },
    to: { rotation: [0, -1, 0] },
  });
  const MusicProps = useSpring({
    loop: { reverse: true },
    config: { duration: 1000 },
    from: { rotation: [-0.43, 0.26, 0.12] },
    to: { rotation: [-0.43, 0.26, 0.5] },
  });
  const ChatProps = useSpring({
    loop: { reverse: true },
    config: { duration: 1000 },
    from: { rotation: [-0.43, 0.26, 0.12] },
    to: { rotation: [-0.43, 0.26, 0.5] },
  });
  const TriangleProps = useSpring({
    loop: { reverse: true },
    config: { duration: 1000 },
    from: { rotation: [0.06, -0.2, -1.15] },
    to: { rotation: [-0.43, 0.26, 0.5] },
  });

  return (
    <Suspense fallback={<Loading />}>
      <directionalLight />
      <ambientLight
        intensity={0.5}
        angle={0.1}
        penumbra={1}
        position={[10, 15, 10]}
        castShadow
      />
      <OrbitControls enableRotate enableZoom={false} />
      <animated.group {...animatedGroupProps} dispose={null}>
        <group position={[-2.85, -130.53, -0.34]} scale={7}>
          <group position={[-2.85, 16.53, -0.34]} scale={0.05}>
            <group position={[2.85, 159.1, -104.82]}>
              <animated.group
                position={[143.33, -48.47, 215.43]}
                rotation={[0.01, -0.29, -0.42]}
                scale={0.81}
                {...ChatProps}
              >
                <mesh
                  geometry={nodes.Rectangle.geometry}
                  material={materials["Material.057"]}
                  position={[-0.01, 1.49, -7.99]}
                />
                <mesh
                  geometry={nodes.Sphere_2.geometry}
                  material={materials["Material.056"]}
                  position={[-11.35, 3.23, -2.16]}
                  scale={[0.9, 0.9, 0.91]}
                />
                <mesh
                  geometry={nodes.Sphere_3.geometry}
                  material={materials["Material.054"]}
                  position={[0.46, 3.25, -2.07]}
                  scale={[0.9, 0.9, 0.91]}
                />
                <mesh
                  geometry={nodes.Sphere_4.geometry}
                  material={materials["Material.055"]}
                  position={[11.82, 3.26, -1.97]}
                  scale={[0.9, 0.9, 0.91]}
                />
              </animated.group>
              <animated.group
                position={[-145.78, 29.15, -61.38]}
                {...ChatProps}
              >
                <mesh
                  geometry={nodes.Ellipse.geometry}
                  material={materials["Material.059"]}
                  position={[-14.18, 4.69, 3.52]}
                />
                <mesh
                  geometry={nodes.Rectangle_2.geometry}
                  material={materials["Material.060"]}
                  position={[23.28, 10.09, 3.52]}
                  scale={[1, 0.85, 1]}
                />
                <mesh
                  geometry={nodes.Rectangle_3.geometry}
                  material={materials["Material.061"]}
                  position={[14.28, -0.17, 3.52]}
                  scale={[1, 0.85, 1]}
                />
                <mesh
                  geometry={nodes.Rectangle_3001.geometry}
                  material={materials["Material.058"]}
                  position={[23.29, 4.97, -5.52]}
                />
              </animated.group>
              <animated.mesh
                geometry={nodes.Shape.geometry}
                material={materials["Material.053"]}
                position={[149.96, 136.39, 118.79]}
                {...MusicProps}
              />
              <animated.mesh
                geometry={nodes.Triangle.geometry}
                material={materials["Material.051"]}
                position={[172.19, -42.25, -29.02]}
                {...TriangleProps}
              />
            </group>
            <group position={[6.69, 6.7, -0.42]}>
              <group
                position={[5.06, 49.66, -37.85]}
                rotation={[0, -Math.PI / 6, 0]}
              >
                <mesh
                  geometry={nodes.body001.geometry}
                  material={materials["Material.064"]}
                  position={[0.15, 16.28, -51.27]}
                />
                <mesh
                  geometry={nodes.Cylinder_2002.geometry}
                  material={materials["Material.075"]}
                  position={[0.97, 83.67, -58.41]}
                  rotation={[0.22, -0.17, 0]}
                  scale={1.33}
                />
                <mesh
                  geometry={nodes["hand-15"].geometry}
                  material={materials["Material.036"]}
                  position={[-69.05, -69.33, 71.27]}
                  rotation={[1.81, 0.31, -0.24]}
                />
                <mesh
                  geometry={nodes["hand-15_2"].geometry}
                  material={materials["Material.037"]}
                  position={[57.19, -72.48, 62.33]}
                  rotation={[-1.37, -0.04, -0.48]}
                  scale={-1}
                />
                <mesh
                  geometry={nodes.line.geometry}
                  material={materials["Material.065"]}
                  position={[-8.34, -29.82, -1.07]}
                />
              </group>
              <group
                position={[17.29, -213.5, -71.28]}
                rotation={[0, -Math.PI / 6, 0]}
              >
                <mesh
                  geometry={nodes.Cube_8.geometry}
                  material={materials["Material.004"]}
                  position={[-2.38, 97.16, 2.31]}
                  rotation={[Math.PI / 2, 0, -Math.PI / 4]}
                />
                <mesh
                  geometry={nodes.Cube_9.geometry}
                  material={materials["Material.003"]}
                  position={[-2.31, 98.83, -2.38]}
                  rotation={[Math.PI / 2, 0, Math.PI / 4]}
                />
                <mesh
                  geometry={nodes.Cylinder_2001.geometry}
                  material={materials["Material.001"]}
                  position={[3.25, 110.66, 3.32]}
                  scale={1.24}
                />
                <mesh
                  geometry={nodes.Cylinder_4.geometry}
                  material={materials["Material.005"]}
                  position={[67.27, -2.73, -67.32]}
                  rotation={[0.09, 0.02, 0.09]}
                  scale={1.24}
                />
                <mesh
                  geometry={nodes.Cylinder_5.geometry}
                  material={materials["Material.006"]}
                  position={[-67.33, -2.73, 67.32]}
                  rotation={[-0.09, 0, -0.09]}
                  scale={1.24}
                />
                <mesh
                  geometry={nodes.Cylinder_6.geometry}
                  material={materials["Material.002"]}
                  position={[67.32, -2.73, 67.27]}
                  rotation={[1.4, -1.48, 1.48]}
                  scale={1.24}
                />
                <mesh
                  geometry={nodes.Cylinder_6001.geometry}
                  material={materials["Material.007"]}
                  position={[-67.32, -2.73, -67.33]}
                  rotation={[-Math.PI / 2, -1.48, -1.66]}
                  scale={1.24}
                />
              </group>
              <group
                position={[-47.41, 10.18, 45.32]}
                rotation={[-2.97, 0.52, 3.06]}
                scale={[0.64, 0.7, 0.7]}
              >
                <mesh
                  geometry={nodes.Rectangle_2005.geometry}
                  material={materials["Material.009"]}
                  position={[0, -0.21, -81.43]}
                  rotation={[-Math.PI / 9, 0, 0]}
                />
                <mesh
                  geometry={nodes.Rectangle_3006.geometry}
                  material={materials["Material.010"]}
                  position={[0, -66.85, 15.84]}
                  rotation={[Math.PI / 2, 0, 0]}
                />
                <mesh
                  geometry={nodes.Rectangle_4002.geometry}
                  material={materials["Material.011"]}
                  position={[0, -62.82, -3.88]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.83}
                />
                <mesh
                  geometry={nodes.Rectangle_5002.geometry}
                  material={materials["Material.012"]}
                  position={[0, -66.01, 62.64]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.83}
                />
                <mesh
                  geometry={nodes.Rectangle001.geometry}
                  material={materials["Material.008"]}
                  position={[0, -5.45, -85.58]}
                  rotation={[-Math.PI / 9, 0, 0]}
                />
              </group>
              <group
                position={[18.51, 200.48, -52.92]}
                rotation={[0.4, -0.49, 0.19]}
              >
                <mesh
                  geometry={nodes.Cube_12.geometry}
                  material={materials["Material.050"]}
                  position={[12.6, 6.38, 31.35]}
                  rotation={[-0.1, 0.28, 0.2]}
                />
                <mesh
                  geometry={nodes.Cube_13.geometry}
                  material={materials["Material.046"]}
                  position={[-21.98, 10.29, 29.17]}
                  rotation={[-0.04, -0.41, 3.03]}
                />
                <mesh
                  geometry={nodes.Cube_14.geometry}
                  material={materials["Material.047"]}
                  position={[-21.34, 1.12, 28.72]}
                  rotation={[0, -Math.PI / 9, 0]}
                />
                <mesh
                  geometry={nodes.Cube_15.geometry}
                  material={materials["Material.049"]}
                  position={[11.67, 1.12, 30.38]}
                  rotation={[0, Math.PI / 9, 0]}
                />
                <mesh
                  geometry={nodes.Cube_16.geometry}
                  material={materials["Material.039"]}
                  position={[38.42, -12.67, -6.07]}
                  rotation={[Math.PI, 0, 0]}
                  scale={-1}
                />
                <mesh
                  geometry={nodes.Cube_2003.geometry}
                  material={materials["Material.041"]}
                  position={[34.85, 14.43, 27.35]}
                  rotation={[-3.12, 0.61, -0.14]}
                  scale={[-1, -1, -1.36]}
                />
                <mesh
                  geometry={nodes.Cube_3.geometry}
                  material={materials["Material.043"]}
                  position={[-3.71, -39.93, -45.36]}
                />
                <mesh
                  geometry={nodes.Cube_4.geometry}
                  material={materials["Material.040"]}
                  position={[49.14, -11.33, 15.7]}
                  rotation={[3.09, 0.34, 0.02]}
                  scale={[-1, -1, -1.14]}
                />
                <mesh
                  geometry={nodes.Cube_5.geometry}
                  material={materials["Material.045"]}
                  position={[-45.39, 23.81, 20.24]}
                  rotation={[-0.09, 0.35, -0.48]}
                />
                <mesh
                  geometry={nodes.Cube_6.geometry}
                  material={materials["Material.042"]}
                  position={[12.61, 21.85, 28.5]}
                  rotation={[0.37, -0.79, 1.73]}
                  scale={[1, 1, 0.78]}
                />
                <mesh
                  geometry={nodes.Cube_7.geometry}
                  material={materials["Material.063"]}
                  position={[-2.71, 44.73, -69.78]}
                  rotation={[0.61, Math.PI / 2, 0]}
                />
                <mesh
                  geometry={nodes.Cube002.geometry}
                  material={materials["Material.048"]}
                  position={[-4.85, -22.51, 35.87]}
                />
                <mesh
                  geometry={nodes.Cube003.geometry}
                  material={materials["Material.044"]}
                  position={[-51.46, 1.7, 11.03]}
                  rotation={[-0.09, 0.35, 0.24]}
                />
                <mesh
                  geometry={nodes.Cube004.geometry}
                  material={materials["Material.038"]}
                  position={[-44.39, -12.67, -6.07]}
                />
                <mesh
                  geometry={nodes.Sphere_2001.geometry}
                  material={materials["Material.033"]}
                  position={[-2.88, -8.51, -8.67]}
                />
              </group>
              <group
                position={[31.88, 137.51, -80.19]}
                rotation={[-1.13, -0.24, -0.47]}
                scale={0.59}
              >
                <group
                  position={[55.95, -61.83, 1.78]}
                  rotation={[Math.PI / 2, 1.48, -Math.PI / 2]}
                  scale={0.7}
                >
                  <mesh
                    geometry={nodes.Rectangle_2004.geometry}
                    material={materials["Material.066"]}
                    position={[-1.2, -0.12, 8.51]}
                  />
                  <mesh
                    geometry={nodes.Rectangle_3005.geometry}
                    material={materials["Material.067"]}
                    position={[-1.2, -0.12, 15.36]}
                  />
                </group>
                <group
                  position={[-58.3, -62.56, 1.56]}
                  rotation={[Math.PI / 2, -1.4, -Math.PI / 2]}
                  scale={0.7}
                >
                  <mesh
                    geometry={nodes.Cube.geometry}
                    material={materials["Material.071"]}
                    position={[0, 0, -7.36]}
                  />
                  <mesh
                    geometry={nodes.Rectangle_2003.geometry}
                    material={materials["Material.072"]}
                    position={[-1.2, -0.12, 8.51]}
                  />
                  <mesh
                    geometry={nodes.Rectangle_3004.geometry}
                    material={materials["Material.073"]}
                    position={[-1.2, -0.12, 15.36]}
                  />
                </group>
                <mesh
                  geometry={nodes.Cylinder.geometry}
                  material={materials["Material.069"]}
                  position={[72.07, -48.41, 2.68]}
                  rotation={[0, 0, -0.17]}
                />
                <mesh
                  geometry={nodes.Cylinder_2.geometry}
                  material={materials["Material.074"]}
                  position={[-76.47, -48.31, 2.68]}
                  rotation={[0, 0, 0.26]}
                />
                <mesh
                  geometry={nodes.Torus002.geometry}
                  material={materials["Material.068"]}
                  position={[-2.41, -33.31, 1.83]}
                  rotation={[0, 0, -Math.PI / 2]}
                  scale={[1.05, 1, 1]}
                />
              </group>
              <group
                position={[-99.24, -294.46, 140.87]}
                rotation={[-0.09, -Math.PI / 6, -0.17]}
                scale={1.2}
              >
                <mesh
                  geometry={nodes.Cube_2002.geometry}
                  material={materials["Material.013"]}
                  position={[-0.12, -11.5, 2.05]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                  geometry={nodes.Cylinder_3001.geometry}
                  material={materials["Material.034"]}
                  position={[-0.07, 25.37, -26.1]}
                  rotation={[-0.17, 0, 0]}
                  scale={0.65}
                />
                <mesh
                  geometry={nodes.Rectangle_2002.geometry}
                  material={materials["Material.015"]}
                  position={[-0.01, -27.5, 0.54]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                  geometry={nodes.Rectangle_3003.geometry}
                  material={materials["Material.017"]}
                  position={[11.29, -9.72, -3.39]}
                  rotation={[-Math.PI / 2, 1.48, 0.35]}
                />
                <mesh
                  geometry={nodes.Rectangle_4001.geometry}
                  material={materials["Material.018"]}
                  position={[11.45, -11.57, 5.14]}
                  rotation={[-Math.PI / 2, 1.48, 0.35]}
                />
                <mesh
                  geometry={nodes.Rectangle_5001.geometry}
                  material={materials["Material.019"]}
                  position={[11.67, -14.09, 13.97]}
                  rotation={[-Math.PI / 2, 1.48, 0.35]}
                />
                <mesh
                  geometry={nodes.Torus_2001.geometry}
                  material={materials["Material.022"]}
                  position={[0, -4.82, -6.39]}
                  rotation={[-2.34, 0, 2.36]}
                />
                <mesh
                  geometry={nodes.Torus_3001.geometry}
                  material={materials["Material.023"]}
                  position={[0, -2.43, -11.25]}
                  rotation={[-2.34, 0, 2.36]}
                />
                <mesh
                  geometry={nodes.Torus_4001.geometry}
                  material={materials["Material.021"]}
                  position={[0, 0.78, -15.38]}
                  rotation={[-2.34, 0, 2.36]}
                />
                <mesh
                  geometry={nodes.Torus_5001.geometry}
                  material={materials["Material.031"]}
                  position={[0, 4.97, -18.7]}
                  rotation={[-2.34, 0, 2.36]}
                />
                <mesh
                  geometry={nodes.Torus001.geometry}
                  material={materials["Material.020"]}
                  position={[0, -6.17, -0.33]}
                  rotation={[-2.34, 0, 2.36]}
                />
              </group>
              <group
                position={[-45.75, -283.03, 87.46]}
                rotation={[-2.83, 0.2, -0.49]}
                scale={-1.2}
              >
                <mesh
                  geometry={nodes.Cube_2001.geometry}
                  material={materials["Material.014"]}
                  position={[-0.12, -11.5, 2.05]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                  geometry={nodes.Cylinder_3.geometry}
                  material={materials["Material.035"]}
                  position={[-2.99, 24.83, -28.74]}
                  rotation={[-Math.PI / 9, 0, 0.09]}
                  scale={0.65}
                />
                <mesh
                  geometry={nodes.Rectangle_2001.geometry}
                  material={materials["Material.016"]}
                  position={[-0.01, -27.5, 0.54]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                  geometry={nodes.Rectangle_3002.geometry}
                  material={materials["Material.026"]}
                  position={[11.29, -9.72, -3.39]}
                  rotation={[-1.57, 1.48, 0.35]}
                />
                <mesh
                  geometry={nodes.Rectangle_4.geometry}
                  material={materials["Material.028"]}
                  position={[11.45, -11.57, 5.14]}
                  rotation={[-1.57, 1.48, 0.35]}
                />
                <mesh
                  geometry={nodes.Rectangle_5.geometry}
                  material={materials["Material.029"]}
                  position={[11.67, -14.09, 13.97]}
                  rotation={[-1.57, 1.48, 0.35]}
                />
                <mesh
                  geometry={nodes.Torus.geometry}
                  material={materials["Material.024"]}
                  position={[0, -6.17, -0.33]}
                  rotation={[-2.34, 0, 2.36]}
                />
                <mesh
                  geometry={nodes.Torus_2.geometry}
                  material={materials["Material.025"]}
                  position={[0, -4.82, -6.39]}
                  rotation={[-2.34, 0, 2.36]}
                />
                <mesh
                  geometry={nodes.Torus_3.geometry}
                  material={materials["Material.030"]}
                  position={[0, -2.43, -11.25]}
                  rotation={[-2.34, 0, 2.36]}
                />
                <mesh
                  geometry={nodes.Torus_4.geometry}
                  material={materials["Material.027"]}
                  position={[0, 0.78, -15.38]}
                  rotation={[-2.34, 0, 2.36]}
                />
                <mesh
                  geometry={nodes.Torus_5.geometry}
                  material={materials["Material.032"]}
                  position={[0, 4.97, -18.7]}
                  rotation={[-2.34, 0, 2.36]}
                />
              </group>
              <mesh
                geometry={nodes.Cylinder001.geometry}
                material={materials["Material.076"]}
                position={[33.52, 151.87, -85.2]}
                rotation={[0.4, -0.49, 0.19]}
              />
              <mesh
                geometry={nodes.leg.geometry}
                material={materials["Material.062"]}
                position={[31.27, -40.93, -83.02]}
                rotation={[0, -Math.PI / 6, 0]}
              />
            </group>
          </group>
          <animated.group
            position={[-8.85, 34.2, -6.8]}
            scale={[0.63, 0.51, 0.71]}
            {...ChatProps}
          >
            <mesh
              geometry={nodes.Cube019.geometry}
              material={materials.Orange}
              position={[-0.01, -0.15, -0.13]}
              scale={1.69}
            />
            <mesh
              geometry={nodes.Cube020.geometry}
              material={materials.White}
              position={[-0.17, -0.23, 0.14]}
            />
          </animated.group>
          <animated.group
            position={[9.59, 29.27, -1.54]}
            scale={[0.77, 0.77, 1.02]}
            {...ChatProps}
          >
            <mesh
              geometry={nodes.Cube005.geometry}
              material={materials["White.001"]}
              position={[0.17, -0.23, 0.17]}
              scale={1.69}
            />
            <mesh
              geometry={nodes.Cube016.geometry}
              material={materials.Blue}
              position={[0.1, -0.15, -0.13]}
              scale={1.69}
            />
          </animated.group>
          <mesh
            geometry={nodes.CBase.geometry}
            material={materials.white}
            position={[0.58, 33.81, -0.5]}
            rotation={[Math.PI, -0.55, Math.PI]}
            scale={[0.67, 1, 1]}
          />
          <mesh
            geometry={nodes.Cube018.geometry}
            material={materials["Material.077"]}
            position={[0.31, 33.81, -0.34]}
            rotation={[Math.PI, -0.55, Math.PI]}
          />
          <mesh
            geometry={nodes.Curve011.geometry}
            material={materials.white}
            position={[0.28, 33.81, 0.09]}
            rotation={[Math.PI / 2, 0, 1.02]}
            scale={16.64}
          />
          <mesh
            geometry={nodes.Text.geometry}
            material={materials.white}
            position={[0.27, 33.67, 0.08]}
            rotation={[Math.PI / 2, 0, 1.02]}
            scale={0.55}
          />
          <mesh
            geometry={nodes.Curve010.geometry}
            material={materials["SVGMat.008"]}
            position={[-1.41, 36.71, -7.12]}
            rotation={[Math.PI / 2, 0, 0.51]}
            scale={3.26}
          />
          <mesh
            geometry={nodes.Curve013.geometry}
            material={materials["SVGMat.011"]}
            position={[-0.37, 37.82, -6.58]}
            rotation={[Math.PI / 2, 0, 0.51]}
            scale={3.26}
          />
          <mesh
            geometry={nodes.Cube013.geometry}
            material={nodes.Cube013.material}
            position={[-0.07, 38.14, -6.58]}
            rotation={[Math.PI, -1.06, Math.PI]}
            scale={[0.67, 1, 1]}
          />
          <mesh
            geometry={nodes.ReactBase.geometry}
            material={materials.base_0}
            position={[-14.14, 30.91, -0.24]}
            rotation={[1.72, -0.53, 2.13]}
            scale={[0.67, 1, 1]}
          />
          <mesh
            geometry={nodes.ReactElectron.geometry}
            material={materials["Material.052"]}
            position={[-14.4, 30.99, 0.22]}
            rotation={[1.31, 0.44, 2.06]}
            scale={0.17}
          />
          <mesh
            geometry={nodes.BezierCircle.geometry}
            material={materials["Material.052"]}
            position={[-14.42, 30.96, 0.22]}
            rotation={[1.19, 0.42, 2.33]}
            scale={[0.32, 0.68, 0.68]}
          />
          <mesh
            geometry={nodes.BezierCircle001.geometry}
            material={materials["Material.052"]}
            position={[-14.38, 31.02, 0.23]}
            rotation={[-0.1, 1.13, -3.08]}
            scale={[0.41, 0.68, 0.68]}
          />
          <mesh
            geometry={nodes.BezierCircle002.geometry}
            material={materials["Material.052"]}
            position={[-14.39, 31, 0.23]}
            rotation={[-1.32, 0.54, 1.05]}
            scale={[0.35, 0.68, 0.68]}
          />
          <mesh
            geometry={nodes.vscode.geometry}
            material={materials["Material.078"]}
            position={[-6.08, 16.89, 4.37]}
            rotation={[0.56, -0.46, -2.86]}
            scale={[-3.09, -1.96, -0.02]}
          />
        </group>
      </animated.group>
    </Suspense>
  );
};

useGLTF.preload("https://mattewmakar.github.io/portfolio.gltf");
export default CodingInPeace;
