
//STEP 1: CREATE THE ELEMENT
const newH1 = document.createElement("h1");

//STEP 2: ADD ATTRUBUTES/PROPERTIES
newH1.textContent = "This is H1 element";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";


// STEP 3: APPEND ELEMENT TO DOM
    //document.body.append(newH1); // last 
    //document.body.prepend(newH1);  // first


    //document.getElementById("div1").append(newH1); 
    //document.getElementById("div1").prepend(newH1); 
    
    const box3 = document.getElementById("div3");
    document.body.insertBefore(newH1, box3); // chen h1 nam giua box1 va box 2

//STEP 4: REMOVE HTML ELEMENT
document.body.removeChild(newH1);