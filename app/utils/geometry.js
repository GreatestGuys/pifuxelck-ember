export default function geometry() {
  return {
    getDistance: function(pointA, pointB) {
      var aX = pointA.get('x'),
          bX = pointB.get('x'),
          aY = pointA.get('y'),
          bY = pointB.get('y');
      return Math.sqrt(Math.pow((bX - aX), 2), Math.pow((bY - aY), 2));
    }
  };
}
