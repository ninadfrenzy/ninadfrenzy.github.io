import data from './global-config.json' assert { type: 'json' };

window.onload = () => {
    renderContent();
}


var renderContent = () => {
    var developerNameElement = document.getElementById("developer-name");
    developerNameElement.innerText = data["developerName"]
    var developerNameElement = document.getElementById("developer-job-title");
    developerNameElement.innerText = data["developerJobTitle"]
}
var elementCreator = (elementName, classes, id, inlineCSS) => {
    var element = document.createElement(elementName);
    element.classList.add(...classes);
    if(id)
        element.setAttribute("id", id);
    if(inlineCSS)
        element.setAttribute("style", inlineCSS);
    return element;
}
var prepareBannerElement = (devName, salutation, subtitle) => {
    var divElement = elementCreator("div", ["banner"], "banner-div","height:30px;background-color:blue;");
    return divElement 
}