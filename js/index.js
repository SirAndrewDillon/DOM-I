const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
let logo = document.querySelector("#logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// NavBar
let nav = document.querySelectorAll('header nav a');
nav[0].textContent = siteContent['nav']['nav-item-1']
nav[1].textContent = siteContent['nav']['nav-item-2']
nav[2].textContent = siteContent['nav']['nav-item-3']
nav[3].textContent = siteContent['nav']['nav-item-4']
nav[4].textContent = siteContent['nav']['nav-item-5']
nav[5].textContent = siteContent['nav']['nav-item-6']

//Header CTA
let mainSentence = document.querySelector(".cta .cta-text h1");
mainSentence.innerHTML = "ANDY <br> IS<br>AWESOME";
document.querySelector(".cta .cta-text button").textContent = siteContent["cta"]["button"];
let mainPic = document.querySelector("#cta-img");
mainPic.setAttribute('src', siteContent["cta"]["img-src"]);

//Main-Content
let mainContentIMG = document.querySelector("#middle-img");
mainContentIMG.src = siteContent["main-content"]["middle-img-src"];
let mainContent = document.querySelectorAll("div.text-content");
mainContent[0].childNodes[1].textContent = siteContent["main-content"]["features-h4"];
mainContent[0].childNodes[3].textContent = siteContent["main-content"]["features-content"];
mainContent[1].childNodes[1].textContent = siteContent["main-content"]["about-h4"];
mainContent[1].childNodes[3].textContent = siteContent["main-content"]["about-content"];
mainContent[2].childNodes[1].textContent = siteContent["main-content"]["services-h4"];
mainContent[2].childNodes[3].textContent = siteContent["main-content"]["services-content"];
mainContent[3].childNodes[1].textContent = siteContent["main-content"]["product-h4"];
mainContent[3].childNodes[3].textContent = siteContent["main-content"]["product-content"];
mainContent[4].childNodes[1].textContent = siteContent["main-content"]["vision-h4"];
mainContent[4].childNodes[3].textContent = siteContent["main-content"]["vision-content"];

// Contact
let contact = document.querySelector(".contact");
contact.childNodes[1].textContent = siteContent["contact"]["contact-h4"];
contact.childNodes[3].textContent = siteContent["contact"]["address"];
contact.childNodes[5].textContent = siteContent["contact"]["phone"];
contact.childNodes[7].textContent = siteContent["contact"]["email"];

// Footer
let footer = document.querySelector("footer");
footer.childNodes[1].innerText = siteContent["footer"]["copyright"];







//creation of two new a tags in the header 
let a = document.createElement("a");
a.textContent = "Free Stuff ";
let header = document.querySelector("nav");
header.prepend(a);
let b = document.createElement("a");

b.textContent = "Buy Stuff";
header.appendChild(b);

// Turn Nav Green
let navLinks = document.querySelectorAll("a");
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].style.color = "green";
}