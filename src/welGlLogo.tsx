import Modules from ".";
import { useRef, useEffect } from "react";

function WebGlLogo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
    const scene = new Modules.THREE.Scene();
    // const camera = new Modules.THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 100);
    const camera = new Modules.THREE.PerspectiveCamera(20, 2, 0.1, 100);
    const renderer = new Modules.THREE.WebGLRenderer({
        canvas: canvasRef.current
    });

    const bodyContainer = document.getElementById('bodyContainer');
    const bodyWidth = bodyContainer !== null ? bodyContainer.offsetWidth : 0;


    //calculate 1 rem
    const tempDiv = document.createElement('div');
    tempDiv.style.fontSize = '1rem';
    tempDiv.style.position = 'absolute';
    tempDiv.style.visibility = 'hidden';
    tempDiv.innerHTML = 'M';
        document.body.appendChild(tempDiv);
        const remSize = tempDiv.getBoundingClientRect().width;
        document.body.removeChild(tempDiv);


    renderer.setPixelRatio(1);
    renderer.setSize(bodyWidth-(remSize*3*2), (bodyWidth-(remSize*3*2))/2);
    camera.position.setZ(15);

    const loader = new Modules.FBXLoader();
    //load the fbx logo
    loader.load('/src/assets/taeLogo3d.fbx', (fbx:any) => {
        const mesh = new Modules.THREE.Mesh(fbx.children[0].geometry, new Modules.THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true}));
        scene.add(mesh);
        const animate = () => {
            requestAnimationFrame(animate);
            mesh.rotation.x += 0.01;
            mesh.rotation.y += 0.007;
            renderer.render(scene, camera);
        }
        animate();
        });
        }
    }, [canvasRef]);

    return (
        <div>
            <canvas
            id="glCanvas"
            width="150"
            height=""
            ref={canvasRef}
            style={{ margin: "auto" }}
            />
        </div>
    );
}

export default WebGlLogo;
