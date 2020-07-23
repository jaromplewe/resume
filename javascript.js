function companyDetails(detailsId) {
    
    //make the panel visible
    document.getElementById("company-panel").style.visibility = 'visible';
    
    //make the details visible
    document.getElementById(detailsId).classList.add('visible');
}

function hideDetails() {

    //Hide Panel
    document.getElementById("company-panel").style.visibility = 'hidden';

    document.getElementsByClassName('visible')[0].classList.toggle('visible');
}