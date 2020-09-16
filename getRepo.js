var xhr = new XMLHttpRequest();
var url = "https://api.github.com/users/Kyewn/repos?sort=updated";

xhr.onreadystatechange = function() {
    if(this.readyState == 4) {
        const data = JSON.parse(this.response);

        for(let i in data) {
            //start creating each block of repo
            var name = data[i].name;
            var htmlUrl = data[i].html_url;

            if (data[i].description == null) {
                var desc = "No description";
            } else {
                var desc = data[i].description;
            }
            
            createRepoBlock(name, desc, htmlUrl);
        }    

        var profileLink = document.querySelector(".githubProfile a");
        profileLink.setAttribute("href", data[0].owner.html_url);
    }
}

/*else if (this.status != 200) {
    createError(this.status, this.statusText);
}*/
xhr.open('GET', url, true);
xhr.send();


function createRepoBlock(rname, rdesc, rurl){ 
    var flexContainer = document.querySelector(".flex-container");
    var blockLink = document.createElement("a");
    blockLink.classList.add("repoblock");
    blockLink.setAttribute("href", rurl);
    blockLink.setAttribute("target", "_blank");
    var repoNameSpan = document.createElement("div");
    var repoName = document.createTextNode(rname);
    var repoDescDiv = document.createElement("div");
    var repoDesc = document.createTextNode(rdesc);
    repoDescDiv.appendChild(repoDesc);
    repoNameSpan.appendChild(repoName);
    blockLink.appendChild(repoNameSpan);
    blockLink.appendChild(repoDescDiv);
    flexContainer.appendChild(blockLink);
};

function createError(code, statusText) {
    var flexContainer = document.querySelector(".flex-container");
    var errorCtn = document.createElement("div");
    var errorP = document.createElement("p");
    var errorDesc = document.createElement("p");
    var pTxt = document.createTextNode(code + ": " + statusText);
    var descTxt = document.createTextNode("Unable to retrieve data. Please try again!");
    errorP.appendChild(pTxt);
    errorDesc.appendChild(descTxt);
    errorCtn.appendChild(errorP);
    errorCtn.appendChild(errorDesc);
    flexContainer.appendChild(errorCtn);
}