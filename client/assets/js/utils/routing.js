var dynamic_content = document.querySelector('#dynamic-content');
window.onload = function() {
    if(window.location.hash == ''){
        window.location = '#home'
    }
    renderContent(window.location)            
}

window.addEventListener("hashchange", function(){
    if(window.location.hash) {
        toggleHideNavbars(window.location.hash);
        renderContent(window.location);
        console.log('Should change')
    }
});

function toggleHideNavbars(location) {
    var navigationHolder = document.querySelector("#navigation-holder");

    var sp_navigation_bar = document.querySelector('#sp-navigation-bar');
    var navigation_bar = document.querySelector('#navigation-bar');  
    if(location == "#home") {
        sp_navigation_bar.classList.add('hidden')
        navigation_bar.classList.remove('hidden')        
        navigationHolder.childNodes[3].remove();
    } else {
        navigation_bar.classList.add('hidden')
        sp_navigation_bar.classList.remove('hidden');
        navigationHolder.insertAdjacentHTML("beforeend", navigation_bar.outerHTML);
    }
    //location == "#home" ? (sp_navigation_bar.classList.add('hidden')) : sp_navigation_bar.classList.remove('hidden');
    //location != "#home" ? navigation_bar.classList.add('hidden') : navigation_bar.classList.remove('hidden');     
}

function renderContent(location) {
    var hash = location.hash.substring(1); //Puts hash in variable, and removes the # character
    console.log(hash);
    if(hash.indexOf("-") !== -1) {
        hash = hash.replace(/-/g, "");
    }
    try {
        dynamic_content.innerHTML = window[hash]();
        
    }
       catch(e) {
        dynamic_content.innerHTML = "";
    }
}
