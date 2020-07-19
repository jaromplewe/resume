function companyDetails(detailsId) {
    //center the div
    document.getElementById(detailsId).style.marginLeft = "-200px";
    //lower the div
    document.getElementById(detailsId).style.marginTop = 0;
    //make the panel visible
    document.getElementById("company-panel").style.visibility = 'visible';
    //make the div visible
    document.getElementById("company-panel div").style.visibility = 'visible';
    
    
    //((window.innerHeight/2) - (20 + document.getElementById('enlarged_image').height/2)).toString() + "px";


    //document.getElementById("executech-details"). = detailsId;
}

function hideDetails() {

    //Hide Panel
    document.getElementById("company-panel").style.visibility = 'hidden';

    //Hide Executech
    document.getElementById("executech-details").style.marginTop = "-400px";
    
    //Hide Weave
    document.getElementById("weave-details").style.marginTop = "-400px";

    //Hide Weave
    document.getElementById("jacobsen-details").style.marginTop = "-400px";
}