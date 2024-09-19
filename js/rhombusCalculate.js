
function calculateRhombusArea(){
   const d1=getInputValueById('rhombus-d1');
   const d2=getInputValueById("rhombus-d2");
   console.log(d1,d2);


   const area= (0.5*d1*d2);
   setInnerTextById('rhombus-area', area);
}

function getInputValueById(inputFieldId){
    const inputField=document.getElementById(inputFieldId);
    const inputFieldValue=inputField.value ;
    const value=parseFloat(inputFieldValue);
    return value;
}

function setInnerTextById(elementId, area){
    const element= document.getElementById(elementId);
    element.innerText= area;
}

