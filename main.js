const _0x543adf=_0x5b6d;(function(_0x1dc4ef,_0x2946a9){const _0x3bb9d8=_0x5b6d,_0x468204=_0x1dc4ef();while(!![]){try{const _0x10b338=-parseInt(_0x3bb9d8(0x164))/0x1*(parseInt(_0x3bb9d8(0x15b))/0x2)+-parseInt(_0x3bb9d8(0x169))/0x3*(-parseInt(_0x3bb9d8(0x165))/0x4)+-parseInt(_0x3bb9d8(0x15f))/0x5+-parseInt(_0x3bb9d8(0x166))/0x6+parseInt(_0x3bb9d8(0x14b))/0x7+parseInt(_0x3bb9d8(0x146))/0x8*(parseInt(_0x3bb9d8(0x14f))/0x9)+parseInt(_0x3bb9d8(0x138))/0xa*(-parseInt(_0x3bb9d8(0x13c))/0xb);if(_0x10b338===_0x2946a9)break;else _0x468204['push'](_0x468204['shift']());}catch(_0x511330){_0x468204['push'](_0x468204['shift']());}}}(_0x1d8e,0xa2c84));let camera,scene,renderer,bikeModel,bikeModelVisible=!![];function addPointLight(){const _0x4ace48=_0x5b6d,_0x18736a=new THREE['PointLight'](0xffffff,0.6,0x0);_0x18736a[_0x4ace48(0x148)][_0x4ace48(0x13b)](0x0,0x2,0xa),scene['add'](_0x18736a);}function ambientLight(){const _0x51aed6=_0x5b6d,_0x57bdda=new THREE[(_0x51aed6(0x161))](0xffffff,0.3,0x0);scene[_0x51aed6(0x14c)](_0x57bdda);}function _0x5b6d(_0x346d10,_0x3caf8a){const _0x1d8e3d=_0x1d8e();return _0x5b6d=function(_0x5b6d59,_0x26a333){_0x5b6d59=_0x5b6d59-0x133;let _0x54b136=_0x1d8e3d[_0x5b6d59];return _0x54b136;},_0x5b6d(_0x346d10,_0x3caf8a);}function ground(){const _0x4405e4=_0x5b6d,_0x3c1a83=0x9,_0x27298c=0x64,_0xf6b55=new THREE[(_0x4405e4(0x16d))](_0x3c1a83,_0x27298c),_0x50d341=new THREE['MeshStandardMaterial']({'map':new THREE[(_0x4405e4(0x14d))]()['load']('https://threejs.org/examples/textures/hardwood2_diffuse.jpg'),'metalness':0x0,'roughness':0x1}),_0x56deb5=new THREE[(_0x4405e4(0x140))](_0xf6b55,_0x50d341);_0x56deb5[_0x4405e4(0x167)]['x']=-Math['PI']*0.5,_0x56deb5[_0x4405e4(0x148)][_0x4405e4(0x13b)](0x0,-0.77,0x0),scene['add'](_0x56deb5);}function init(){const _0x3094af=_0x5b6d,_0x463f5c=document[_0x3094af(0x15c)](_0x3094af(0x145));_0x463f5c[_0x3094af(0x14a)](_0x3094af(0x162),toggleLights),camera=new THREE[(_0x3094af(0x151))](0x4b,window['innerWidth']/window['innerHeight'],0x1,0x64),camera['position']['z']=5.5,screenWidth=window['innerWidth'],screenWidth<=0x1f4&&(camera[_0x3094af(0x148)]['z']=0xa),scene=new THREE['Scene'](),renderer=new THREE[(_0x3094af(0x16c))](),renderer[_0x3094af(0x15e)](window['innerWidth'],window[_0x3094af(0x14e)]),document['body'][_0x3094af(0x16e)](renderer[_0x3094af(0x15a)]),ground(),createStars(),addPointLight(),ambientLight();}function createStars(){const _0x32872d=_0x5b6d,_0x451880=new THREE['SphereGeometry'](0.1,0x18,0x18),_0x1b66ea=new THREE[(_0x32872d(0x137))]({'color':0xffffff}),_0x348db4=new THREE[(_0x32872d(0x150))]();for(let _0x5e0824=0x0;_0x5e0824<0x3e8;_0x5e0824++){const _0x261aec=new THREE[(_0x32872d(0x140))](_0x451880,_0x1b66ea);_0x261aec['position']['x']=Math[_0x32872d(0x13a)]()*0xc8-0x64,_0x261aec[_0x32872d(0x148)]['y']=Math[_0x32872d(0x13a)]()*0xc8-0x64,_0x261aec['position']['z']=Math[_0x32872d(0x13a)]()*0xc8-0x64,_0x348db4[_0x32872d(0x14c)](_0x261aec);}scene[_0x32872d(0x14c)](_0x348db4);}function loadBikeModel(){const _0x1438fc=_0x5b6d,_0x5a0c95=new THREE[(_0x1438fc(0x139))]();_0x5a0c95['load']('./css/assets/scene.gltf',_0x3014cd=>{const _0x46563d=_0x1438fc;bikeModel=_0x3014cd[_0x46563d(0x168)],bikeModel['visible']=bikeModelVisible;bikeModel&&bikeModel['traverse'](_0x444b55=>{const _0x305592=_0x46563d;if(_0x444b55[_0x305592(0x159)]){const _0x1daf28=_0x444b55[_0x305592(0x13f)];_0x1daf28&&(_0x1daf28[_0x305592(0x142)]=0.45,_0x1daf28[_0x305592(0x158)]=0.01);}});const _0x10d428=new THREE[(_0x46563d(0x147))](0xf6e58d,0x96,0xa,THREE[_0x46563d(0x16a)][_0x46563d(0x149)](0xa),0.25);_0x10d428[_0x46563d(0x148)][_0x46563d(0x13b)](-0.9,0.5,-0x1),_0x10d428[_0x46563d(0x16b)]['position'][_0x46563d(0x13b)](-0.8,-0.1,3.5),bikeModel[_0x46563d(0x14c)](_0x10d428);const _0x19db20=new THREE[(_0x46563d(0x147))](0xf6e58d,0x96,0xa,THREE['MathUtils']['degToRad'](0xa),0.25);_0x19db20[_0x46563d(0x148)]['set'](0.9,0.5,-0x1),_0x19db20['target'][_0x46563d(0x148)][_0x46563d(0x13b)](0.8,-0.1,3.5),bikeModel[_0x46563d(0x14c)](_0x19db20);const _0x275603=new THREE[(_0x46563d(0x13d))](0.05,0x20,0x20),_0x33655a=new THREE['MeshBasicMaterial']({'color':0xffff00}),_0x240131=new THREE[(_0x46563d(0x140))](_0x275603,_0x33655a);_0x240131['position']['set'](-0.8,0.4,2.1),bikeModel[_0x46563d(0x14c)](_0x240131);const _0x47db4c=new THREE[(_0x46563d(0x140))](_0x275603,_0x33655a);_0x47db4c[_0x46563d(0x148)][_0x46563d(0x13b)](0.8,0.4,2.1),bikeModel[_0x46563d(0x14c)](_0x47db4c);const _0x3c216e=new THREE['ConeGeometry'](0.23,2.7,0x1e),_0x185111=new THREE[(_0x46563d(0x137))]({'color':0xf6e58d,'opacity':0.35,'transparent':!![],'side':THREE['DoubleSide']}),_0x598851=new THREE['Mesh'](_0x3c216e,_0x185111);_0x598851['position']['set'](0.1,-0.222,3.5),_0x598851['rotation']['x']=-Math['PI']/2.45,_0x10d428[_0x46563d(0x14c)](_0x598851),bikeModel['add'](_0x10d428[_0x46563d(0x16b)]);const _0x44bb80=new THREE['Mesh'](_0x3c216e,_0x185111);_0x44bb80[_0x46563d(0x148)][_0x46563d(0x13b)](-0.1,-0.222,3.5),_0x44bb80[_0x46563d(0x167)]['x']=Math['PI']/-2.45,_0x19db20[_0x46563d(0x14c)](_0x44bb80),bikeModel[_0x46563d(0x14c)](_0x19db20[_0x46563d(0x16b)]);let _0x43aac9=new Audio(_0x46563d(0x156)),_0x11153a=new Audio(_0x46563d(0x136)),_0x31e0cd=![];const _0x856370=![];bikeModel[_0x46563d(0x13e)]=bikeModelVisible,_0x10d428[_0x46563d(0x13e)]=_0x856370,_0x19db20[_0x46563d(0x13e)]=_0x856370,_0x598851[_0x46563d(0x13e)]=_0x856370,_0x44bb80['visible']=_0x856370,_0x240131[_0x46563d(0x13e)]=_0x856370,_0x47db4c[_0x46563d(0x13e)]=_0x856370;let _0x3158d7=![];function _0x10ef8e(){const _0x57822c=_0x46563d;_0x3158d7=!_0x3158d7,_0x10d428[_0x57822c(0x13e)]=_0x3158d7,_0x19db20[_0x57822c(0x13e)]=_0x3158d7,_0x598851[_0x57822c(0x13e)]=_0x3158d7,_0x44bb80['visible']=_0x3158d7,_0x240131[_0x57822c(0x13e)]=_0x3158d7,_0x47db4c[_0x57822c(0x13e)]=_0x3158d7;const _0x7981cd=document['getElementById'](_0x57822c(0x16f));_0x7981cd[_0x57822c(0x154)]({'behavior':_0x57822c(0x135)}),_0x3158d7?!_0x31e0cd&&(_0x43aac9[_0x57822c(0x157)](),_0x43aac9[_0x57822c(0x14a)](_0x57822c(0x163),()=>{const _0x1ae32e=_0x57822c;_0x31e0cd=!![],_0x11153a[_0x1ae32e(0x144)]=!![],_0x11153a[_0x1ae32e(0x157)]();})):(_0x31e0cd=![],_0x43aac9[_0x57822c(0x160)](),_0x11153a[_0x57822c(0x144)]=![],_0x11153a[_0x57822c(0x160)]());}document['getElementById'](_0x46563d(0x145))[_0x46563d(0x14a)]('click',_0x10ef8e),scene[_0x46563d(0x14c)](bikeModel);});}function animate(){const _0xb3ba4a=_0x5b6d;requestAnimationFrame(animate),bikeModel&&(bikeModel[_0xb3ba4a(0x167)]['y']+=0.004),renderer[_0xb3ba4a(0x141)](scene,camera),controls['update']();}function onWindowResize(){const _0x2b1341=_0x5b6d;camera['aspect']=window[_0x2b1341(0x134)]/window[_0x2b1341(0x14e)],camera['updateProjectionMatrix'](),renderer['setSize'](window['innerWidth'],window[_0x2b1341(0x14e)]),renderer[_0x2b1341(0x15d)](window['devicePixelRatio']);}init(),loadBikeModel(),ground();const controls=new THREE[(_0x543adf(0x152))](camera,renderer[_0x543adf(0x15a)]);controls[_0x543adf(0x153)]=!![],controls[_0x543adf(0x143)]=![],controls['enableZoom']=![],controls['minPolarAngle']=controls[_0x543adf(0x155)]=Math['PI']/0x2,window[_0x543adf(0x14a)](_0x543adf(0x133),onWindowResize,![]),animate();function _0x1d8e(){const _0x54214a=['2499460dfKexr','GLTFLoader','random','set','22QIQXUb','SphereGeometry','visible','material','Mesh','render','roughness','enablePan','loop','toggleLights','895672PGknMp','SpotLight','position','degToRad','addEventListener','5759278JAqHTI','add','TextureLoader','innerHeight','81FjidHz','Group','PerspectiveCamera','OrbitControls','enableDamping','scrollIntoView','maxPolarAngle','./css/assets/mixkit-car-ignition-1\x20.mp3','play','metalness','isMesh','domElement','2qxpvID','getElementById','setPixelRatio','setSize','2087585MaFCDc','pause','AmbientLight','click','ended','765505ljnJjL','700bpPvDM','2782140hJFfzQ','rotation','scene','16851OERiCX','MathUtils','target','WebGLRenderer','CircleGeometry','appendChild','about','resize','innerWidth','smooth','./css/assets/mixkit-car-ignition-124.mp3','MeshBasicMaterial'];_0x1d8e=function(){return _0x54214a;};return _0x1d8e();}
