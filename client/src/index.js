import 'aframe';
//import 'aframe-animation-component';
//import 'aframe-particle-system-component';
import 'networked-aframe';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: 'red'};
  }

  changeColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  render () {
    return (
      <Scene>
      <a-assets>
        <a-asset-item id="floor-obj" src="/assets/Floor.obj"></a-asset-item>
        <a-asset-item id="floor-mtl" src="/assets/Floor.mtl"></a-asset-item>
        <a-asset-item
          id="office-obj"
          src="/assets/RoomStructure.obj"
        ></a-asset-item>
        <a-asset-item
          id="office-mtl"
          src="/assets/RoomStructure.mtl"
        ></a-asset-item>

        <img id="sky" src="/assets/test-panorama.jpg" />

        <img id="groundTexture" src="/assets/brown_concrete_texture.jpg" />

        <img id="wallTexture" src="/assets/black-paper.jpg" />
        <img id="pillar" src="/assets/pillar_white_texture.jpeg" />
        <img id="officeBackground" src="/assets/office_background.png" />
        <img id="ceilingBackground" src="/assets/ceiling_background.png" />

        <canvas id="tv"></canvas>

        <a-asset-item id="chair" src="/assets/scene.gltf"></a-asset-item>
        <canvas id="cam2"></canvas>
      </a-assets>

      <template id="avatar-template" type="text/html">
        <a-entity class="avatar" networked-audio-source>
          <a-text
            class="nametag"
            text="value: Hello World; align:center"
            position="0 0.7 0"
            rotation="0 180 0"
            width="0.4"
            z-offset=".05"
            scale="8 8 8"
          ></a-text>

          <a-entity class="body">
            <a-sphere
              color="#57b2f2"
              scale="0.3 0.3 0.3"
              position="0 -0.4 0.0"
            ></a-sphere>
            <a-cylinder
              src="/assets/shirt.png"
              color="#57b2f2"
              scale="0.3 0.2 0.3"
              position="0 -0.5 0.0"
            ></a-cylinder>
            <a-cylinder
              color="#57b2f2"
              scale="0.3 0.1 0.3"
              position="0 -0.6 0.0"
            ></a-cylinder>
            <a-cylinder
              color="#063a7a"
              scale="0.3 0.3 0.3"
              position="0 -0.8 0.0"
            ></a-cylinder>
            <a-sphere
              color="#063a7a"
              scale="0.3 0.3 0.3"
              position="0 -0.91 0.0"
            ></a-sphere>
          </a-entity>
          <a-sphere
            class="head"
            color="#fff"
            scale="0.45 0.45 0.45"
            src="/assets/face.jpg"
            rotation="0 90 0"
            position="0 0.3 0"
          ></a-sphere>
        </a-entity>
      </template>

      <a-entity>
      <a-obj-model
        src="#office-obj"
        scale="0.01 0.01 0.01"
        position="2.8 0 -2.4"
        rotation="0 270 0"
        mtl="#office-mtl"
      >
      </a-obj-model>
      <a-obj-model
        src="#floor-obj"
        scale="0.01 0.01 0.01"
        position="2.8 0 -2.4"
        rotation="0 270 0"
        mtl="#floor-mtl"
      ></a-obj-model>
      <a-box
        id="office-wall-cover"
        src="#wallTexture"
        repeat="1 1"
        rotation="0 0 0"
        position="2.85 2.25 -5.48"
        color="#CCC"
        height="5"
        width="5"
        depth="0.25"
      ></a-box>


      <a-entity
        position="2.8 2 -5.3"
        rotation="0 0 0"
        width="2.8"
        height="1.5"
        material="src:#tv; opacity: .95"
        geometry="primitive: plane; width: 2.8; height: 1.5"
        canvas-updater
      >
        <a-box
          color="black"
          width="3"
          height="1.7"
          depth=".1"
          position="0 0 -0.065"
        ></a-box>
      </a-entity>
      <a-entity
        camera="active: false; fov: 80; zoom: 0.8;"
        camrender="cid: tv"
        position="2.85 3.2 -5.1"
        rotation="-8 146 -8.1"
        scale="0.1 0.1 0.1"
      >
      </a-entity>
      <a-entity
        scale="0.0015 0.0015 0.0015"
        position="1.5 0.88 -4"
        rotation="0 90"
        gltf-model="#chair"
      ></a-entity>
      <a-entity
        scale="0.0015 0.0015 0.0015"
        position="1.5 0.88 -2.8"
        rotation="0 90"
        gltf-model="#chair"
      ></a-entity>
      <a-entity
        scale="0.0015 0.0015 0.0015"
        position="4 0.88 -4"
        rotation="0 270"
        gltf-model="#chair"
      ></a-entity>
      <a-entity
        scale="0.0015 0.0015 0.0015"
        position="4 0.88 -2.8"
        rotation="0 270"
        gltf-model="#chair"
      ></a-entity>

      <a-box
        color="#CACFD2"
        id="table"
        position="2.8 1 -3.5"
        width="1.8"
        height="0.1"
        depth="3.5"
      >
        <a-cylinder
          color="#CACFD2"
          id="table_edge"
          position="0 0 1.75"
          radius=".9"
          height="0.1"
          depth="1"
        >
          <a-cylinder
            id="table_leg"
            color="#566573"
            position="0 -0.6 0"
            radius="0.06"
            height="1.2"
          ></a-cylinder>
          <a-box
            id="table-base"
            color="#566573"
            position="0 -1.1 0"
            width="0.9"
            height="0.03"
            depth="0.9"
          ></a-box>
        </a-cylinder>
      </a-box>

      <a-box
        color="#CACFD2"
        id="whiteboard"
        position="2.75 2.5 1.12"
        width="3.3"
        height="2"
        depth="0.03"
      ></a-box>
      <a-box
        color="#CACFD2"
        opacity="0.4"
        id="whiteboard-glass"
        position="2.75 2.5 1.1"
        width="3.33"
        height="2.03"
        depth="0.03"
      ></a-box>

      <a-entity id="door_entrance_parent" position="0.335 0 -2.3">
        <a-entity id="panes1_parent" height="5" position="0 2.263 0">
          <a-box
            id="pane_1"
            width="0.04"
            depth="2.1"
            height="1.6"
            opacity="0.2"
            position="0 1.6 0"
          ></a-box>
          <a-box
            id="pane_2"
            width="0.04"
            depth="2.1"
            height="1.6"
            opacity="0.9"
            color="silver"
            position="0 0 0"
          >
            <a-plane
              src="/assets/doge.png"
              rotation="0 90 0"
              material="alphaTest: 1"
              position="0.032 0.441 0.726"
              width="0.4"
              height="0.4"
            ></a-plane>
            <a-plane
              src="/assets/wood.jpg"
              rotation="0 90 0"
              material="alphaTest: 1"
              position="0.031 0.441 0.5"
              width="0.4"
              height="0.3"
            ></a-plane>
          </a-box>
          <a-box
            id="pane_3"
            width="0.04"
            depth="2.1"
            height="1.6"
            opacity="0.2"
            position="0 -1.6 0"
          ></a-box>
        </a-entity>

        <a-entity id="panes2_parent" height="5" position="0 2.263 2.12">
          <a-box
            id="pane_1"
            width="0.04"
            depth="2.1"
            height="1.6"
            opacity="0.2"
            position="0 1.6 0"
          ></a-box>
          <a-box
            id="pane_2"
            width="0.04"
            depth="2.1"
            height="1.6"
            opacity="0.9"
            color="silver"
            position="0 0 0"
          >
            <a-cylinder
              id="doorknob"
              position="-.2 0 -.8"
              radius=".03"
              color="gray"
              height="1.4"
            >
              <a-cylinder
                id="doorknob_part"
                position="0.091 0.225 0"
                color="gray"
                rotation="90 0 90"
                radius=".03"
                color="silver"
                height=".15"
              ></a-cylinder>
              <a-cylinder
                id="doorknob_part"
                position="0.091 -0.225 0"
                color="gray"
                rotation="90 0 90"
                radius=".03"
                color="silver"
                height=".15"
              ></a-cylinder>
            </a-cylinder>
            <a-cylinder
              id="doorknob_inner"
              position=".2 0 -.8"
              radius=".03"
              color="gray"
              height="1.4"
            >
              <a-cylinder
                id="doorknob_part"
                position="-0.091 0.225 0"
                color="gray"
                rotation="90 0 90"
                radius=".03"
                color="silver"
                height=".15"
              ></a-cylinder>
              <a-cylinder
                id="doorknob_part"
                position="-0.091 -0.225 0"
                color="gray"
                rotation="90 0 90"
                radius=".03"
                color="silver"
                height=".15"
              ></a-cylinder>
            </a-cylinder>
          </a-box>
          <a-box
            id="pane_3"
            width="0.04"
            depth="2.1"
            height="1.6"
            opacity="0.2"
            position="0 -1.6 0"
          ></a-box>
        </a-entity>

        <a-entity id="panes3_parent" height="5" position="0 2.263 -2.12">
          <a-box
            id="pane_1"
            width="0.04"
            depth="2.1"
            height="1.6"
            opacity="0.2"
            position="0 1.6 0"
          ></a-box>
          <a-box
            id="pane_2"
            width="0.04"
            depth="2.1"
            height="1.6"
            opacity="0.9"
            color="silver"
            position="0 0 0"
          >
          </a-box>
          <a-box
            id="pane_3"
            width="0.04"
            depth="2.1"
            height="1.6"
            opacity="0.2"
            position="0 -1.6 0"
          ></a-box>
        </a-entity>
      </a-entity>
      </a-entity>

      <a-entity id="exterior_parent">
        <a-plane
          id="floor"
          repeat="50 50"
          src="#groundTexture"
          position="-9.5 -.2 0"
          rotation="-90 0 0"
          height="50"
          width="20"
        >
        </a-plane>
        <a-obj-model
          id="outside_door"
          src="#floor-obj"
          scale="0.01 0.01 0.01"
          position="-4.7 0 -.79"
          rotation="0 270 0"
          mtl="#floor-mtl"
        >
          <a-box
            id="pillar"
            src="#pillar"
            repeat="1 4"
            position="-114 335 -68"
            height="700"
            width="160"
            depth="160"
          ></a-box>
        </a-obj-model>
        <a-obj-model
          id="outside_right"
          src="#floor-obj"
          scale="0.01 0.01 0.01"
          position="-4.7 0 -9.5"
          rotation="0 270 0"
          mtl="#floor-mtl"
        >
          <a-box
            id="pillar"
            src="#pillar"
            repeat="1 4"
            position="-114 335 -68"
            height="700"
            width="160"
            depth="160"
          ></a-box>
        </a-obj-model>

        <a-obj-model
          id="far_left"
          src="#floor-obj"
          scale="0.01 0.01 0.01"
          position="-10 0 -.3"
          rotation="0 90 0"
          mtl="#floor-mtl"
        >
          <a-box
            id="pillar"
            src="#pillar"
            repeat="1 4"
            position="-114 335 -68"
            height="700"
            width="160"
            depth="160"
          ></a-box>
        </a-obj-model>

        <a-obj-model
          id="far_right"
          src="#floor-obj"
          scale="0.01 0.01 0.01"
          position="-10 0 -9.02"
          rotation="0 90 0"
          mtl="#floor-mtl"
        >
          <a-box
            id="pillar"
            src="#pillar"
            repeat="1 4"
            position="-114 335 -68"
            height="700"
            width="160"
            depth="160"
          ></a-box>
        </a-obj-model>
      </a-entity>

      <a-plane
        id="office_background"
        src="#officeBackground"
        repeat="1 1"
        position="-25 9 -3.8"
        rotation="0 90 0"
        height="30"
        width="40"
      >
      </a-plane>
      <a-plane
        id="office_background"
        src="#officeBackground"
        repeat="1 1"
        position="-20.9 9 26.8"
        rotation="0 120 0"
        height="30"
        width="40"
      >
      </a-plane>
      <a-plane
        id="office_background"
        src="#officeBackground"
        repeat="1 1"
        position="-20 9 -28.15"
        rotation="0 60 0"
        height="30"
        width="40"
      >
      </a-plane>
      <a-plane
        id="office_ceiling"
        src="#ceilingBackground"
        repeat="1 3"
        position="-8.2 14.9 -1.25"
        rotation="90 90 180"
        height="30"
        width="40"
      >
      </a-plane>

      <a-sky src="#sky" rotation="0 270 0"></a-sky>

      <a-camera
        id="player"
        camera
        networked="template:#avatar-template;attachTemplateToLocal:false;"
        position="2 1.5 -2"
        spawn-in-circle="radius:1"
        wasd-controls
        look-controls
        fence="width:4.5;depth:6;x0:2.9;z0:-2.2"
        twoway-motion="speed: 80"
      >
        <a-text zOffset=".1" width="0.4" class="nametag"></a-text>
        <a-sphere class="head" visible="false" random-color></a-sphere>
      </a-camera>

 

      </Scene>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));
