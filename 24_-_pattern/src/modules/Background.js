/* Background Plane
 * 
 * To fade the background rather than cleaning it each frame
 *
 */

import {
    Mesh,
    PlaneGeometry,
    MeshBasicMaterial,
    NormalBlending
} from '../../../node_modules/three/build/three.module.js';

const Background = function () {

    this.geometry = new Mesh(new PlaneGeometry(window.innerWidth, window.innerHeight, 0), new MeshBasicMaterial({
        color: 0x000000,
        blending: NormalBlending,
        transparent: true,
        opacity: 0.05
    }));
    this.geometry.position.z = -10;
    this.geometry.material.depthTest = false;
    this.geometry.material.depthWrite = false;

}

export {
    Background
}