var home = document.getElementById("home");
var about = document.getElementById("about");
var experience = document.getElementById("experience");
var education = document.getElementById("education");
var skills = document.getElementById("skills");
var portfolio = document.getElementById("portfolio");
var cover = document.getElementById("cover");
var btnHome = document.getElementById("btn-home");
var btnAbout = document.getElementById("btn-about");
var btnExperience = document.getElementById("btn-experience");
var btnEducation = document.getElementById("btn-Education");
var btnSkills = document.getElementById("btn-skills");
var btnPortfolio = document.getElementById("btn-portfolio");
var btnCover = document.getElementById("btn-cover");

function openHome(){
    home.style.transform = "translateX(0)";
    about.style.transform = "translateX(200%)";
    experience.style.transform = "translateX(200%)";
    education.style.transform = "translateX(200%)";
    skills.style.transform = "translateX(200%)";
    portfolio.style.transform = "translateX(200%)";
    cover.style.transform = "translateX(200%)";
    home.style.transitionDelay ="0.3s";
    about.style.transitionDelay ="0.3s";
    experience.style.transitionDelay ="0s";
    education.style.transitionDelay ="0s";
    skills.style.transitionDelay ="0s";
    portfolio.style.transitionDelay ="0s";
    cover.style.transitionDelay ="0s";
    home.style.transitionDuration ="1s";
    about.style.transitionDuration ="1s";
    experience.style.transitionDuration ="1s";
    education.style.transitionDuration ="1s";
    skills.style.transitionDuration ="1s";
    portfolio.style.transitionDuration ="1s";
    cover.style.transitionDuration ="1s";

}

function openAbout(){
    home.style.transform = "translateX(-200%)";
    about.style.transform = "translateX(0)";
    experience.style.transform = "translateX(200%)";
    education.style.transform = "translateX(200%)";
    skills.style.transform = "translateX(200%)";
    portfolio.style.transform = "translateX(200%)";
    cover.style.transform = "translateX(200%)";
    home.style.transitionDelay ="0s";
    about.style.transitionDelay ="0.3s";
    experience.style.transitionDelay ="0s";
    education.style.transitionDelay ="0s";
    skills.style.transitionDelay ="0s";
    portfolio.style.transitionDelay ="0s";
    cover.style.transitionDelay ="0s";
    home.style.transitionDuration ="0s";
    about.style.transitionDuration ="1s";
    experience.style.transitionDuration ="0s";
    education.style.transitionDuration ="0s";
    skills.style.transitionDuration ="0s";
    portfolio.style.transitionDuration ="0s";
    cover.style.transitionDuration ="0s";
}

function openExperience(){
    home.style.transform = "translateX(-200%)";
    about.style.transform = "translateX(-200%)";
    experience.style.transform = "translateX(0)";
    education.style.transform = "translateX(200%)";
    skills.style.transform = "translateX(200%)";
    portfolio.style.transform = "translateX(200%)";
    cover.style.transform = "translateX(200%)";
    home.style.transitionDelay ="0s";
    about.style.transitionDelay ="0s";
    experience.style.transitionDelay ="0.3s";
    education.style.transitionDelay ="0s";
    skills.style.transitionDelay ="0s";
    portfolio.style.transitionDelay ="0s";
    cover.style.transitionDelay ="0s";
    home.style.transitionDuration ="0s";
    about.style.transitionDuration ="0s";
    experience.style.transitionDuration ="1s";
    education.style.transitionDuration ="0s";
    skills.style.transitionDuration ="0s";
    portfolio.style.transitionDuration ="0s";
    cover.style.transitionDuration ="0s";
}

function openEducation(){
    home.style.transform = "translateX(-200%)";
    about.style.transform = "translateX(-200%)";
    experience.style.transform = "translateX(-200%)";
    education.style.transform = "translateX(0)";
    skills.style.transform = "translateX(200%)";
    portfolio.style.transform = "translateX(200%)";
    cover.style.transform = "translateX(200%)";
    home.style.transitionDelay ="0s";
    about.style.transitionDelay ="0s";
    experience.style.transitionDelay ="0s";
    education.style.transitionDelay ="0.3s";
    skills.style.transitionDelay ="0s";
    portfolio.style.transitionDelay ="0s";
    cover.style.transitionDelay ="0s";
    home.style.transitionDuration ="0s";
    about.style.transitionDuration ="0s";
    experience.style.transitionDuration ="0s";
    education.style.transitionDuration ="1s";
    skills.style.transitionDuration ="0s";
    portfolio.style.transitionDuration ="0s";
    cover.style.transitionDuration ="0s";
}

function openSkills(){
    home.style.transform = "translateX(-200%)";
    about.style.transform = "translateX(-200%)";
    experience.style.transform = "translateX(-200%)";
    education.style.transform = "translateX(-200%)";
    skills.style.transform = "translateX(0)";
    portfolio.style.transform = "translateX(200%)";
    cover.style.transform = "translateX(200%)";
    home.style.transitionDelay ="0s";
    about.style.transitionDelay ="0s";
    experience.style.transitionDelay ="0s";
    education.style.transitionDelay ="0s";
    skills.style.transitionDelay ="0.3s";
    portfolio.style.transitionDelay ="0s";
    cover.style.transitionDelay ="0s";
    home.style.transitionDuration ="0s";
    about.style.transitionDuration ="0s";
    experience.style.transitionDuration ="0s";
    education.style.transitionDuration ="0s";
    skills.style.transitionDuration ="1s";
    portfolio.style.transitionDuration ="0s";
    cover.style.transitionDuration ="0s";
}

function openPortfolio(){
    home.style.transform = "translateX(-200%)";
    about.style.transform = "translateX(-200%)";
    experience.style.transform = "translateX(-200%)";
    education.style.transform = "translateX(-200%)";
    skills.style.transform = "translateX(-200%)";
    portfolio.style.transform = "translateX(0)";
    cover.style.transform = "translateX(200%)";
    home.style.transitionDelay ="0s";
    about.style.transitionDelay ="0s";
    experience.style.transitionDelay ="0s";
    education.style.transitionDelay ="0s";
    skills.style.transitionDelay ="0s";
    portfolio.style.transitionDelay ="0.3s";
    cover.style.transitionDelay ="0s";
    home.style.transitionDuration ="0s";
    about.style.transitionDuration ="0s";
    experience.style.transitionDuration ="0s";
    education.style.transitionDuration ="0s";
    skills.style.transitionDuration ="0s";
    portfolio.style.transitionDuration ="1s";
    cover.style.transitionDuration ="0s";
}

function openCover(){
    home.style.transform = "translateX(-200%)";
    about.style.transform = "translateX(-200%)";
    experience.style.transform = "translateX(-200%)";
    education.style.transform = "translateX(-200%)";
    skills.style.transform = "translateX(-200%)";
    portfolio.style.transform = "translateX(-200%)";
    cover.style.transform = "translateX(0)";
    home.style.transitionDelay ="0s";
    about.style.transitionDelay ="0s";
    experience.style.transitionDelay ="0s";
    education.style.transitionDelay ="0s";
    skills.style.transitionDelay ="0s";
    portfolio.style.transitionDelay ="0s";
    cover.style.transitionDelay ="0.3s";
    home.style.transitionDuration ="0s";
    about.style.transitionDuration ="0s";
    experience.style.transitionDuration ="0s";
    education.style.transitionDuration ="0s";
    skills.style.transitionDuration ="0s";
    portfolio.style.transitionDuration ="0s";
    cover.style.transitionDuration ="1s";
}
