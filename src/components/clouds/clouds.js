import * as THREE from 'three'
import { red } from 'ansi-colors';
let cam,
    scene,
    renderer,
    clock,
    smokeMaterial,
    h,
    w,
    smokeParticles = [];

export function Clouds() {

    const animate = () => {
        let delta = clock.getDelta();

        requestAnimationFrame(animate);

        [].forEach.call(smokeParticles, (sp) => {
            sp.rotation.z += delta * 0.2;
        });

        renderer.render(scene, cam);
    };
    const resize = () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
    };
    const lights = () => {
        const light = new THREE.DirectionalLight(0xffffff, 0.5);

        clock = new THREE.Clock();

        renderer = new THREE.WebGLRenderer();
        renderer.setClearColor(0x000000, 1);
        renderer.setSize(w, h);

        scene = new THREE.Scene();

        light.position.set(-1, 0, 1);
        scene.add(light);
        // TextGeometry(String, Object)
        const textObj = new THREE.TextGeometry('Im trying', {
            // font: font,
            color: red,
            size: 80,
            height: 5,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 10,
            bevelSize: 8,
            bevelOffset: 0,
            bevelSegments: 5
        });
        const material = new THREE.MeshBasicMaterial({ color: 'red' });
        const mesh = new THREE.Mesh(textObj, material);
        scene.add(mesh);
    };
    const camera = () => {
        cam = new THREE.PerspectiveCamera(75, w / h, 1, 10000);

        cam.position.z = 1000;

        scene.add(cam);
    };
    const action = () => {
        const loader = new THREE.TextureLoader();

        loader.crossOrigin = "";

        loader.load(
            "https://cdn131.picsart.com/323119214472211.png",
            function onLoad(texture) {
                const smokeGeo = new THREE.PlaneBufferGeometry(300, 300);

                smokeMaterial = new THREE.MeshLambertMaterial({
                    map: texture,
                    transparent: true
                });

                for (let p = 0, l = 350; p < l; p++) {
                    let particle = new THREE.Mesh(smokeGeo, smokeMaterial);

                    particle.position.set(
                        Math.random() * 500 - 250,
                        Math.random() * 500 - 250,
                        Math.random() * 1000 - 100
                    );

                    particle.rotation.z = Math.random() * 360;
                    scene.add(particle);
                    smokeParticles.push(particle);
                }

                animate();
            }
        );
    };
    const init = () => {
        h = window.innerHeight;
        w = window.innerWidth;

        lights(); //💡
        camera(); // 🎥
        action(); // 🎬

        document.body.appendChild(renderer.domElement);
        window.addEventListener("resize", resize);
    };
    init()

}
