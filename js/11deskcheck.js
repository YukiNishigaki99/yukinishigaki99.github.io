testPyramid();

function testPyramid() {
    var pa = pyramidSurfaceArea(8, 7);
}

// Computes and returns the surface area of the
// four triangular faces of a regular pyramid
// with the specified base length and height.
function pyramidSurfaceArea(base, height) {
    var edge = Math.sqrt(base*base/2 + height*height);
    var triArea = triangleArea(base, edge, edge);
    document.getElementById('output').innerHTML = triArea;
    var pyramidArea = 4 * triArea;
    return pyramidArea;
}

// Computes and returns the area of a
// triangle with side lengths a, b, and c.
function triangleArea(a, b, c) {
    var s = (a + b + c) / 2;
    var area = Math.sqrt(s * (s-a) * (s-b) * (s-c));
    return area;
}