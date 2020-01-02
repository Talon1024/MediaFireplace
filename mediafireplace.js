// This extension makes all links to MediaFire open in new windows automatically
const mediafireRegex = /^(https?:\/\/)?(www\.)?mediafire\.com/i;
// Do nothing if already on MediaFire.com
if(!mediafireRegex.test(window.location.href)){
    // Get anchor elements used for HTML hyperlinks
    const links = document.querySelectorAll("a");
    for(const linkElement of links){
        fixLink(linkElement);
    }
}

function fixLink(linkElement){
    // Which ones have an href attribute?
    const linkLocation = linkElement.getAttribute("href");
    const hasLink = linkLocation != null && linkLocation.length > 0;
    // Which ones take you to MediaFire?
    if(hasLink && mediafireRegex.test(linkLocation)){
        // Set the target to _blank so that these links are opened in a new window or tab
        linkElement.setAttribute("target", "_blank");
        // For a bit of extra security and privacy, do not send Referrer headers with the request
        linkElement.setAttribute("referrerpolicy", "same-origin");
    }
}