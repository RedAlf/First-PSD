"use strict"

let newProjectButton = document.body.getElementsByClassName('add-new-project')[0];
let newProjectWindowCloseButton = document.body.getElementsByClassName('newProject_window_header_close')[0];
let submitButton = document.body.getElementsByClassName('add-button')[0];
let addImageButton = document.body.getElementsByClassName('projectImg_img')[0];
let newImgURL;
let projectNum = 1;

newProjectButton.onclick = function() {
    let newProjectBG = document.body.getElementsByClassName('newProjectBG')[0];
    let newProjectWindow = document.body.getElementsByClassName('newProject_window')[0];

    newProjectBG.style.display = "block";
    newProjectWindow.style.display = "block";
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "16px";
}

newProjectWindowCloseButton.onclick = function() {
    let newProjectBG = document.body.getElementsByClassName('newProjectBG')[0];
    let newProjectWindow = document.body.getElementsByClassName('newProject_window')[0];

    newProjectBG.style.display = "none";
    newProjectWindow.style.display = "none";
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "";
}

addImageButton.onclick = function() {
    let addImageHiddenButton = document.body.getElementsByClassName('hiddenFileLoader')[0];
    addImageHiddenButton.click();
}

submitButton.onclick = function() {
    let newProjectBG = document.body.getElementsByClassName('newProjectBG')[0];
    let newProjectWindow = document.body.getElementsByClassName('newProject_window')[0];
    let formFields = newProjectWindow.getElementsByTagName('input');
    let descriptionTextarea = newProjectWindow.getElementsByTagName('textarea')[0];
    let projectsList = document.body.getElementsByClassName('projects')[0];
    let title, url, description;
    let file = document.getElementById("fileloader").files[0];
    let reader = new FileReader();

    function newElem(title, url, description) {
        let newLi = document.createElement('li');
    
        newLi.className = "project";
        newLi.innerHTML = `<li class="project">
            <div class="project-pic newProject${projectNum}">
                <div class="project-pic_shade">
                    <div class="project-pic_name"><span>${title}</span></div>
                </div>
            </div>
            <span class="project-adress">${url}</span>
            <span class="project-info">${description}</span>
        </li>`;
    
        return(newLi);
    }

    for (let i = 0; i < formFields.length; i++) {
        title = formFields[0].value;
        url = formFields[3].value;
        description = descriptionTextarea.value;
    }

    if (file) { 
    reader.readAsDataURL(file); 
    } 

    reader.onloadend = function() {
        newImgURL = reader.result;
    }

    projectsList.insertBefore(newElem(title, url, description), newProjectButton);

    document.body.getElementsByClassName(`newProject${projectNum}`)[0].style.background = `url(${newImgURL})`;
    
    newProjectBG.style.display = "none";
    newProjectWindow.style.display = "none";
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "";
    formFields[0].value ="";
    formFields[3].value ="";
    descriptionTextarea.value ="";
    projectNum++;
}