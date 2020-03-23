AFRAME.registerComponent('spawn-in-circle', {
  schema: {
    radius: {type: 'number', default: 1}
  },

  init: function() {
    var el = this.el;
    var center = el.getAttribute('position');

    var angleRad = this.getRandomAngleInRadians();
    var circlePoint = this.randomPointOnCircle(this.data.radius, angleRad);
    var worldPoint = {x: circlePoint.x + center.x, y: center.y, z: circlePoint.y + center.z};
    var newPoint = this.randomCoord(0.65, 5.15, -4.45, 0.05)
    el.setAttribute('position', newPoint);
    console.log('world point', newPoint);

    var angleDeg = angleRad * 180 / Math.PI;
    var angleToCenter = -1 * angleDeg + 90;
    var angleRad = THREE.Math.degToRad(angleToCenter);
    el.object3D.rotation.set(0, angleRad, 0);
    // console.log('angle deg', angleDeg);
  },

  getRandomAngleInRadians: function() {
    return Math.random()*Math.PI*2;
  },

  randomPointOnCircle: function (radius, angleRad) {
    var x = Math.cos(angleRad)*radius;
    var z = Math.sin(angleRad)*radius;
    return {x: x, y: 0, z: z};
  },

  randomCoord: function (x0, xf, z0, zf) {
    var x = Math.random() * (xf - x0 + 1) + x0;
    var z = Math.random() * (zf - z0 + 1) + z0;
    return {x: x, y: 1.5, z: z};
  }
});
