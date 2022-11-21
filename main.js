var target1
var target2
var target3

function onLoad(){ // defines main variables
    const divTargets = [document.getElementById("target1"), document.getElementById("target2"), document.getElementById("target3")];
    divTargets.forEach(onLoadPropertiesDivs);
    [target1, target2, target3] = divTargets;
    
}

function onLoadPropertiesDivs(object){ // loads starting properties 
    object.style.transitionDuration = '0s';
    object.style.opacity = '0';
    object.style.fontSize = '0%';
}

function changeVis1() { // parts
    console.log("T1 " + target1.style.fontSize); // debugging, will delete later..
    visibility(target1);
}

function changeVis2() { // specs
    console.log("T2 " + target2.style.fontSize); // debugging, will delete later..
    visibility(target2);
}

function changeVis3() { // specs
    console.log("T3 " + target3.style.fontSize); // debugging, will delete later..
    visibility(target3);
}

function visibility(object){ // main function for changing visibility after onLoad()
    object.style.transitionDuration = '1s';
    if (object.style.opacity == '0'){
        object.style.fontSize = '100%';
        object.style.opacity = '1';
    } else if (object.style.opacity == '1') {
        object.style.opacity = '0';
        object.style.fontSize = '0%';
    }
}