
// function calculateParallelogramArea(){

//     // part1
//     const paraBase=document.getElementById('parallelogram-base');
//     const paraBaseImput= paraBase.value;

//     const base=parseFloat(paraBaseImput);
//     console.log(base);

//     // part2
//     const paraHeight=document.getElementById('parallelogram-height');
//     const paraHeightInput=paraHeight.value;
//     height=parseFloat(paraHeightInput);
//     console.log(height);


//     // part3

//     const parallelogramArea=document.getElementById('parallelogram-area');

//     const area= (base*height);
//     parallelogramArea.innerText=area;
// }


// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

function calculateParallelogramArea(){
    // calling function 1
    const base= getInputValueById('parallelogram-base');
    console.log(base);

    // calling function 2
    const height=getInputValueById('parallelogram-height')
    console.log(height);
    
    // calculate area
    const area=base*height;
    console.log("area of parallelogram", area)
    // add area value 
    setInnerTextById('parallelogram-area', area);
}

// create a function and add a parameter
// get Element by id 
function getInputValueById(inputFieldId){
    const inputField= document.getElementById(inputFieldId);

    const inputValueText= inputField.value;
    const inputValue= parseFloat(inputValueText);
    return inputValue;
}

// reusable function to add value
function setInnerTextById(elementId, area){
    const element= document.getElementById(elementId);
    element.innerText= area;
}

// function calculateParallelogramArea(){
//     const base = getInputValueById('parallelogram-base');
//     console.log(base);
// }

// function getInputValueById(inputFieldId){
//     const inputField= document.getElementById(inputFieldId);

//     const inputValueText = inputField.value ;
//     const inputValue=parseFloat(inputValueText);
//     return inputValue;
// }













