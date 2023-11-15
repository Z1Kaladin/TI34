function squarePerimeterCalculate() {
    const side = parseFloat(document.getElementById('squareInput').value);
    const perimeter = 4 * side;
    document.getElementById('squarePerimeter').textContent = `Perimeter: ${perimeter}`;
}

function squareAreaCalculate() {
    const side = parseFloat(document.getElementById('squareInput').value);
    const area = side * side;
    document.getElementById('squareArea').textContent = `Area: ${area}`;
}

function resetSquare() {
    document.getElementById('squareInput').value = '';
    document.getElementById('squarePerimeter').textContent = '';
    document.getElementById('squareArea').textContent = '';
}

function circlePerimeterCalculate() {
    const radius = parseFloat(document.getElementById('circleInput').value);
    const perimeter = 2 * Math.PI * radius;
    document.getElementById('circlePerimeter').textContent = `Perimeter: ${perimeter.toFixed(2)}`;
}

function circleAreaCalculate() {
    const radius = parseFloat(document.getElementById('circleInput').value);
    const area = Math.PI * radius * radius;
    document.getElementById('circleArea').textContent = `Area: ${area.toFixed(2)}`;
}

function resetCircle() {
    document.getElementById('circleInput').value = '';
    document.getElementById('circlePerimeter').textContent = '';
    document.getElementById('circleArea').textContent = '';
}

function trianglePerimeterCalculate() {
    const side1 = parseFloat(document.getElementById('triangleSide1').value);
    const side2 = parseFloat(document.getElementById('triangleSide2').value);
    const base = parseFloat(document.getElementById('triangleBase').value);
    const perimeter = side1 + side2 + base;
    document.getElementById('trianglePerimeter').textContent = `Perimeter: ${perimeter}`;
}

function triangleAreaCalculate() {
    const base = parseFloat(document.getElementById('triangleBase').value);
    const height = parseFloat(document.getElementById('triangleHeight').value);
    const area = (base * height) / 2;
    document.getElementById('triangleArea').textContent = `Area: ${area}`;
}

function resetTriangle() {
    document.getElementById('triangleSide1').value = '';
    document.getElementById('triangleSide2').value = '';
    document.getElementById('triangleBase').value = '';
    document.getElementById('triangleHeight').value = '';
    document.getElementById('trianglePerimeter').textContent = '';
    document.getElementById('triangleArea').textContent = '';
}
