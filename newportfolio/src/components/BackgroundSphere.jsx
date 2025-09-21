import React, { useEffect, useRef } from 'react';
import { 
  Scene, 
  PerspectiveCamera, 
  WebGLRenderer, 
  SphereGeometry, 
  PointsMaterial, 
  Points,
  Vector3,
  Vector2,
  Camera
} from 'three';

const BackgroundSphere = () => {
  const mountRef = useRef(null);
  
  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new Scene();
    const camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.domElement.style.position = 'fixed';
    renderer.domElement.style.zIndex = 1;
    mountRef.current.appendChild(renderer.domElement);

    camera.lookAt(0, 0, 0);
    camera.position.z = 0;

    const geometry = new SphereGeometry(5, 48, 48);
    const material = new PointsMaterial({
      color: 0x6fa2de,
      size: 0.04,
      transparent: true
    });
    const sphere = new Points(geometry, material);
    sphere.rotation.x = 2.7;

    scene.add(camera);
    scene.add(sphere);

    const midLeftX = 1;
    const midLeftY = 1.5;
    const bottomRightX = 1;
    const bottomRightY = 3;
    const magicNumber = 5;

    const worldPointFromXAndY = (x, y, camera) => {
      let worldPoint = new Vector3();
      worldPoint.x = ( ( x / window.innerWidth ) * 2 ) - 1;
      worldPoint.y = - ( ( y / window.innerHeight ) * 2 ) + 1;
      worldPoint.z = 0;
      worldPoint.unproject(camera);
      return worldPoint;
    }

    const quadraticBezier = (t, p0, p1, p2) => {
      return (1 - t) ** 2 * p0 + 2 * (1 - t) * t * p1 + t ** 2 * p2;
    }

    let roughElapsedTime = 0;

    const getSpherePosition = (progress, width, height) => {
      const profilePictureContainer = document.getElementById('profile-picture-container');
      const startXProjected = profilePictureContainer ? profilePictureContainer.getBoundingClientRect().left + 55 : 0;
      const startYProjected = profilePictureContainer ? profilePictureContainer.getBoundingClientRect().top + 55 : 0;
      const startZ = -55;

      roughElapsedTime += 1;
      const profilePicture = document.querySelector('.profile-picture-container');
      const targetRadius = profilePicture.matches(':hover') ? 10 : 5;
      const currentRadius = sphere.geometry.parameters.radius;
      const newRadius = currentRadius + (targetRadius - currentRadius) * 0.1;
      sphere.geometry.dispose();
      sphere.geometry = new SphereGeometry(newRadius, 48, 48);
      material.opacity = Math.min(0.6, roughElapsedTime / 500);
      material.color.set(document.body.classList.contains('dark-mode') ? 0x5788b9 : 0x4a90e2);

      const unprojected = worldPointFromXAndY(startXProjected, startYProjected, camera);

      const startX = unprojected.x * magicNumber * -startZ;
      const startY = unprojected.y * magicNumber * -startZ;

      const fovRadians = (camera.fov * Math.PI) / 180;
      const scale = Math.tan(fovRadians / 2) * -sphere.position.z / height;

      const midX = -(width * midLeftX * scale / 2);
      const midY = -(height * midLeftY * scale / 2);
      const midZ = 0;
      
      const endX = (width * bottomRightX * scale / 2);
      const endY = -(height * bottomRightY * scale / 2);
      const endZ = Math.sin(roughElapsedTime * 0.002) - 10;

      if (progress > 0.3 && progress < 0.7) {
        const transitionProgress = (progress - 0.3) / 0.4;
        material.opacity = (1-transitionProgress) * 0.6 - transitionProgress * 0.04;
      }

      if (progress > 0.7) {
        material.opacity = 0.04;
      }

      return {
        x: 0.9 * sphere.position.x + 0.1 * quadraticBezier(progress, startX, midX, endX),
        y: 0.9 * sphere.position.y + 0.1 * quadraticBezier(progress, startY, midY, endY),
        z: 0.9 * sphere.position.z + 0.1 * quadraticBezier(progress, startZ, midZ, endZ)
      }
    }

    function animate() {
      sphere.rotation.y += 0.0005;
      sphere.rotation.x += 0.0002;

      const width = window.innerWidth;
      const height = window.innerHeight;
      const aspectRatio = width / height;
      
      camera.aspect = aspectRatio;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      
      const progress = window.scrollY/500;
      const smoothedProgress = 2 / Math.PI * Math.atan(4 * progress);
      const position = getSpherePosition(smoothedProgress, width, height);
      sphere.position.set(position.x, position.y, position.z);

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);

    // Cleanup
    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden'
      }}
    />
  );
};

export default BackgroundSphere; 