# Gogh_Room_3D  

## Overview
This is a simple web project that utilizes WebGL based on React.  
The project features a 3D model of "Van Gogh's Room" and offers a virtual environment on the web  
where visitors can enjoy Van Gogh's paintings hung on the walls of the 3D model.

React를 기반으로 WebGL을 활용한 간단한 웹 프로젝트입니다.  
이 프로젝트는 "고흐의 방"이라는 3D 모델을 활용하였으며, 3D 모델 안의 벽에 걸려있는 반 고흐의 그림들을 웹 상의 가상 공간에서 감상할 수 있습니다.  
<br/>

## Preview
![preview](./public/preview.gif)  
<br/>

## How To  
이 프로젝트를 실행하려면 `Node.js`가 설치되어 있어야 합니다.  
`Node.js`를 설치하는 방법은 [공식 사이트](https://nodejs.org/en)에서 제공하는 가이드를 참고하세요.

### Setup  
다음 명령어를 실행하여 프로젝트를 클론하고 필요한 패키지들을 설치합니다.
```console
$ git clone https://github.com/rheefine/Gogh_Room_3D.git
$ cd Gogh_Room_3D
$ npm install
```
 
### Run
다음 명령어를 실행하면 로컬 서버가 실행됩니다.  
```console
$ npm start  
```  
<br/>

브라우저에서 http://localhost:3000으로 접속하여 프로젝트를 확인할 수 있습니다.  

<br/>

## References

* [Loading 3D Models](https://docs.pmnd.rs/react-three-fiber/tutorials/loading-models)  
* [react-three-fiber example1](https://codesandbox.io/s/8pbw1f?file=/src/App.js)  
* [react-three-fiber example2](https://codesandbox.io/s/three-fiber-zoom-to-object-camera-controls-solution-final-sbgx0?file=/src/App.js)  
<br/>
 
***

## Dependencies
- [@react-three/drei](https://github.com/pmndrs/drei/blob/master/LICENSE) `^9.43.3` - MIT License
- [@react-three/fiber](https://github.com/pmndrs/react-three-fiber/blob/master/LICENSE) `^8.9.1` - MIT License
- [antd](https://github.com/ant-design/ant-design/blob/master/LICENSE) `^5.0.2` - MIT License
- [camera-controls](https://github.com/yomotsu/camera-controls/blob/main/LICENSE) `^1.30.0` - MIT License
- [react](https://github.com/facebook/react/blob/main/LICENSE) `^18.2.0` - MIT License
- [react-dom](https://github.com/facebook/react/blob/main/LICENSE) `^18.2.0` - MIT License  

## Image Sources
* [Poppy_field](https://www.kunstmuseum.nl/en/collection/poppy-field?origin=gm)
* [The_Stary_Night](https://www.moma.org/collection/works/79802?classifications=any&date_begin=Pre-1850&date_end=2022&q=van+gogh&utf8=%E2%9C%93&with_images=1)
* [Vase_with_Poppies](https://5058.sydneyplus.com/argus/final/Portal/Public.aspx?lang=en-US&g_AABJ=Vase%20with%20Poppies&d=d)
* [Self_Portrait](https://www.nga.gov/collection/art-object-page.106382.html)
* [Eugène_Boch](https://www.musee-orsay.fr/fr/oeuvres/eugene-boch-744)
* [La_Chambre_de_Van_Gogh_à_Arles](https://www.musee-orsay.fr/fr/oeuvres/la-chambre-de-van-gogh-arles-746)
* [scene.gltf (Van Gogh, Bedroom in Arles, night)](https://sketchfab.com/3d-models/van-gogh-bedroom-in-arles-night-7c28126099404406bd0f5c150d809394) - CC BY 4.0

## License

All documents and source code files in this repo are licensed under the [MIT License](http://opensource.org/licenses/MIT):  
Copyright (c) 2022-2023 [Rhee DongHyun](https://github.com/rheefine)
