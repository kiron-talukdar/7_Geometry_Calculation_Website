console.log("connected")
/*
objective: get the base, and height of a triangle, 
Calculate the area by using the provided formula. and then display the area.
 
Part 1. get base value of the triangle

    step-1. added an id in the base input field
    step-2: use getElementById to acces the input field
    step-3. get value from the input field (value is string now)
    step-4. convert the value to a number. use parseFloat
*/


function calculateTriangleArea(){
    // step-2
    const triangleBaseValue= document.getElementById('triangle-base');
    // step-3
    const bValue=triangleBaseValue.value;
    // step-4
    const base=parseFloat(bValue)
    // console.log( typeof base)

// Part2 get height value of the triangle

    // step-2 
    const triangleHeightvalue=document.getElementById('triangle-height');
    // step-3
    const hValue=triangleHeightvalue.value;
    // step-4
    const height=parseFloat(hValue);
    // console.log(height);
    
    const triangleArea= (0.5 *base * height);
    console.log(triangleArea)

    const area= document.getElementById('triangle-area');
    area.innerText=triangleArea;
}