

function calculateRectangleArea(){
// part1 
   const rectangleWidth=document.getElementById('rectangle-width');
   const rectangleWidthValue=rectangleWidth.value;
   const width=parseFloat(rectangleWidthValue);
//    console.log(width);

// part2
const triangleLength=document.getElementById('triangle-length');
const triangleLengthValue= triangleLength.value;
const length=parseFloat(triangleLengthValue);
// console.log(length);


// part 3
const rectangleArea=(width * length);
console.log(rectangleArea)

const area = document.getElementById('rectangle-area');

area.innerText=rectangleArea;
}