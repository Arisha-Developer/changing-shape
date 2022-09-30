function rec(){
    var rectangle=document.getElementById("rectangle");
    console.log(rectangle)
    rectangle.style.height ='200px'
    rectangle.style.width ='400px'
}
function cl(){
    var circle = document.getElementById("circle")
    console.log(circle)
    circle.style.borderRadius='50%'
}
function tr(){
    var triangle = document.getElementById("triangle")
    console.log(triangle)
    triangle.style.height='0px'
    triangle.style.width='0px'
    triangle.style.backgroundColor='white'
    triangle.style.borderLeft='150px solid transparent'
    triangle.style.borderRight='150px solid transparent'
    triangle.style.borderBottom='250px solid #000'
}
