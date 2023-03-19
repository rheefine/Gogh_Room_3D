/*eslint-disable*/

import React from "react";
import * as THREE from "three";
import "./styles.css";
import { useState, useMemo, Suspense } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import CameraControls from "camera-controls";
import { Modal } from "antd";
import a from "./img/1.jpg";
import b from "./img/2.jpg";
import c from "./img/3.jpg";
import d from "./img/4.jpg";
import e from "./img/5.jpg";
import f from "./img/6.jpg";

CameraControls.install({ THREE });
document.body.style = "background: #0C0C0C;";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./scene.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={10} position={[0, -13, 0]} />
    </>
  );
};

function Boxobject({ data, zoomToView, modalShow, setObj }) {
  const [active, setActive] = useState(false);

  return data.map(({ position, args, rotation }, i) => (
    <mesh
      key={i}
      rotation={rotation}
      position={position}
      onClick={(e) => {
        zoomToView(e.object.position);
        setTimeout(modalShow, 1500);
        setObj(e.object.id);
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        setActive(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setActive(false);
      }}
    >
      <boxGeometry args={args} />
      <meshStandardMaterial
        color={"lightblue"}
        opacity={active ? 0.2 : 0.05}
        transparent
        clearcoat={1}
        clearcoatRoughness={0}
        roughness={0}
        metalness={0.25}
      />
    </mesh>
  ));
}

function Controls({
  zoom,
  focus,
  pos = new THREE.Vector3(),
  look = new THREE.Vector3(),
}) {
  const camera = useThree((state) => state.camera);
  const gl = useThree((state) => state.gl);
  const controls = useMemo(() => new CameraControls(camera, gl.domElement), []);
  return useFrame((state, delta) => {
    if (focus.z == 1) {
      zoom ? pos.set(0, 0, 52) : pos.set(focus.x, focus.y, focus.z + 9);
      zoom ? look.set(0, 0, 0) : look.set(focus.x, focus.y, focus.z);
    } else if (focus.x == 14.9) {
      zoom ? pos.set(0, 0, 52) : pos.set(focus.x - 9, focus.y, focus.z);
      zoom ? look.set(0, 0, 0) : look.set(focus.x, focus.y, focus.z);
    } else {
      zoom ? pos.set(0, 0, 52) : pos.set(focus.x + 3, focus.y + 1, focus.z + 5);
      zoom ? look.set(0, 0, 0) : look.set(focus.x + 1.5, focus.y, focus.z);
    }

    state.camera.position.lerp(pos, 0.7);
    state.camera.updateProjectionMatrix();

    controls.setLookAt(
      state.camera.position.x,
      state.camera.position.y,
      state.camera.position.z,
      look.x,
      look.y,
      look.z,
      true
    );
    return controls.update(delta);
  });
}

export default function App() {
  React.memo(Description);
  const [zoom, setZoom] = useState(true);
  const [focus, setFocus] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [obj, setObj] = useState();
  const modalShow = () =>
    setIsModalVisible(zoom == true ? !isModalVisible : isModalVisible);

  var data = [
    { position: [7.1, 6.4, 1], args: [7.5, 5, 0.01], rotation: [0, 0, 0] },
    { position: [-5.75, 7, 1], args: [8.5, 15.5, 0.01], rotation: [0, 0, 0] },
    { position: [-14.2, 6.4, 1], args: [4.2, 5.3, 0.01], rotation: [0, 0, 0] },
    { position: [14.9, 8.3, 8.3], args: [0.01, 4.3, 3.4], rotation: [0, 0, 0] },
    {
      position: [14.9, 8.4, 17.1],
      args: [0.01, 4.3, 3.4],
      rotation: [0, 0, 0],
    },
    {
      position: [-7.44, -3.5, 35.5],
      args: [0.01, 3.55, 4.76],
      rotation: [3.1, 4.16, 0.17],
    },
  ];

  console.log(obj);

  return (
    <div style={{ width: "90vw", height: "100vh", margin: "auto" }}>
      <Canvas camera={{ position: [0, 0, 52] }}>
        <hemisphereLight intensity={1} />
        <directionalLight position={[0, 0, 0]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <Boxobject
          data={data}
          setObj={setObj}
          modalShow={modalShow}
          zoomToView={(focusRef) => (setZoom(!zoom), setFocus(focusRef))}
        />
        <Controls zoom={zoom} focus={focus} />
        <Html>
          <Modal
            className="modalStyle"
            width={1000}
            bodyStyle={{ width: 950, height: 700 }}
            open={isModalVisible}
            footer={null}
            onCancel={() => {
              setObj(0);
              setTimeout(() => {
                setIsModalVisible(false);
                setZoom(zoom == true ? zoom : !zoom);
              }, 0.01);
            }}
          >
            <Description obj={obj} />
          </Modal>
        </Html>
      </Canvas>
    </div>
  );
}

function Description({ obj }) {
  if (obj == 14) {
    return (
      <div className="container">
        <div className="img-container">
          <img className="img" src={a} />
        </div>
        <div className="descrip-container">
          <div className="descrip">
            <h1>Vincent Van Gogh [1853-1890]</h1>
            <h2>Poppy field</h2>
            <p>
              1890
              <br />
              H.73, W.91.5cm <br />
              Oil on Canvas
              <br />
              The Hague Museum of Contemporary Art
            </p>
          </div>
        </div>
      </div>
    );
  } else if (obj == 15) {
    return (
      <div className="container">
        <div className="img-container">
          <img className="img" src={b} />
        </div>
        <div className="descrip-container">
          <div className="descrip">
            <h1>Vincent Van Gogh [1853-1890]</h1>
            <h2>The Stary Night</h2>
            <p>
              1890
              <br />
              H.73, W.91.5cm <br />
              Oil on Canvas
              <br />
              The Hague Museum of Contemporary Art
            </p>
          </div>
        </div>
      </div>
    );
  } else if (obj == 16) {
    return (
      <div className="container">
        <div className="img-container">
          <img className="img" src={c} />
        </div>
        <div className="descrip-container">
          <div className="descrip">
            <h1>Vincent Van Gogh [1853-1890]</h1>
            <h2>Vase with Poppies</h2>
            <p>
              1886
              <br />
              H.54.6, W.45.1cm <br />
              Oil on Canvas
              <br />
              Wadsworth Atheneum Museum of Art
            </p>
          </div>
        </div>
      </div>
    );
  } else if (obj == 17) {
    return (
      <div className="container">
        <div className="img-container">
          <img className="img" src={d} />
        </div>
        <div className="descrip-container">
          <div className="descrip">
            <h1>Vincent Van Gogh [1853-1890]</h1>
            <h2>Self Portrait</h2>
            <p>
              1889
              <br />
              H.57.79, W.44.5cm <br />
              Oil on Canvas
              <br />
              National Gallery of Art
            </p>
          </div>
        </div>
      </div>
    );
  } else if (obj == 18) {
    return (
      <div className="container">
        <div className="img-container">
          <img className="img" src={e} />
        </div>
        <div className="descrip-container">
          <div className="descrip">
            <h1>Vincent van Gogh [1853-1890]</h1>
            <h2>Eugène Boch</h2>
            <p>
              1888
              <br />
              H.60.3, W.45.4cm <br />
              Oil on Canvas
              <br />
              Musée d'Orsay
            </p>
          </div>
        </div>
      </div>
    );
  } else if (obj == 19) {
    return (
      <div className="container">
        <div className="img-container">
          <img className="img" src={f} />
        </div>
        <div className="descrip-container">
          <div className="descrip">
            <h1>Vincent Van Gogh [1853-1890]</h1>
            <h2>La Chambre de Van Gogh à Arles</h2>
            <p>
              1889
              <br />
              H.57.3, W.73.5cm <br />
              Oil on Canvas
              <br />
              Musée d'Orsay
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
