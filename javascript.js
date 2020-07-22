function companyDetails(detailsId) {

    //horizontally center the div
    document.getElementById(detailsId).style.marginLeft = '-200px';

    //vertically center the div
    document.getElementById(detailsId).style.marginTop = '200px';

    // var halfWindowHeight = (window.innerHeight/2);
    // var halfDetialsHeight = (document.getElementById(detailsId).height/2);
    // document.getElementById = (mentById(detailsId).style.marginTop = (halfWindowHeight - halfDetialsHeight);
    
    //make the panel visible
    document.getElementById("company-panel").style.visibility = 'visible';
    
    //make the details visible
    document.getElementById(detailsId).style.visibility = 'visible';
}

function hideDetails() {

    //Hide Panel
    document.getElementById("company-panel").style.visibility = 'hidden';

    //Hide Executech
    document.getElementById("executech-details").style.marginTop = "-400px";
    
    //Hide Weave
    document.getElementById("weave-details").style.marginTop = "-400px";

    //Hide Jacobsen
    document.getElementById("jacobsen-details").style.marginTop = "-400px";

    //Hide Air Source
    document.getElementById("airsource-details").style.marginTop = "-400px";
}