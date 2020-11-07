"use strict";var aboutContainer=document.querySelector(".about-container"),skillsContainer=document.querySelector(".skills-container"),workContainer=document.querySelector(".work"),studiesContainer=document.querySelector(".studies"),portfolioContainer=document.querySelector(".portfolio-container"),createBio=function(n){var e=n.about;aboutContainer.innerHTML+='\n    <div class="avatar-container">\n      <div class="avatar" style="background: url(\''.concat(e.img_src,"') no-repeat center center/cover\"></div>\n    </div>\n\n    <div>\n          <div>\n            <h3>").concat(e.heading,"</h3>\n            <p>").concat(e.bio,"</p>\n          </div>\n        </div>\n  ")},createSkills=function(n){n.skills.forEach(function(n){skillsContainer.innerHTML+='\n      <div class="skill">\n        <i class="'.concat(n.icon,' fa-3x"></i>\n        <span>').concat(n.name,"</span>\n      </div>\n    ")})},createWork=function(n){n.jobs.forEach(function(n){workContainer.innerHTML+='\n      <div class="resume-item">\n        <h4>'.concat(n.company,"</h4>\n        <span>").concat(n.title,"</span><br>\n        <span>").concat(n.date_start," – ").concat(n.date_end,"</span>\n        <p>").concat(n.descr,"</p>\n      </div>\n    ")})},createStudies=function(n){n.studies.forEach(function(n){studiesContainer.innerHTML+='\n      <div class="resume-item">\n        <h4>'.concat(n.title,"</h4>\n        <span>").concat(n.institution,"</span><br>\n        <span>").concat(n.date_start," – ").concat(n.date_end,"</span>\n        <p>").concat(n.descr,"</p>\n      </div>\n    ")})},isIos=function(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream},createPortfolio=function(n){n.projects.forEach(function(n){portfolioContainer.innerHTML+='\n      <div class="portfolio-item" style="background: url('.concat(n.img_src,') no-repeat center center/cover">\n        <div class="portfolio-item_overlay">\n          <div class="portfolio-item_content">\n            <h3><a href="').concat(n.prj_url,'" target="_blank">').concat(n.title,"</a></h3>\n            <p>").concat(n.descr,"</p>\n          </div>\n        </div>\n      </div>\n    ")}),isIos()&&document.querySelectorAll(".portfolio-item_overlay").forEach(function(n){return elementDisplay(n,"block")})};window.addEventListener("load",createBio(portfolio),createSkills(portfolio),createWork(portfolio),createStudies(portfolio),createPortfolio(portfolio)),window.onscroll=function(){hideMenu(),hideToTopBtn(),alterBgColor(300,"rgba(0, 0, 0, 0.6)","transparent",header),screen.width<813&&alterBgColor(300,"rgba(0, 0, 0, 0.6)","transparent",mainMenu)};var prevScrollpos=window.pageYOffset,hideMenu=function(){var n=window.pageYOffset;100<window.pageYOffset&&(elementToggle(header,"top",n<prevScrollpos?"0":"-80px"),elementDisplay(mainMenu,"none")),prevScrollpos=n};$("#main-menu-toggle").click(function(){$(".main-menu ul").slideToggle(200,function(){})});var header=document.querySelector(".header-content"),toTopBtn=document.querySelector("#goTop"),mainMenu=document.querySelector("#menu-main-menu"),elementToggle=function(n,e,t){return"top"===e?n.style.top=t:n.style.bottom=t},elementDisplay=function(n,e){return n.style.display=e},hideToTopBtn=function(){return window.pageYOffset>window.screen.height?elementToggle(toTopBtn,"bottom","20px"):elementToggle(toTopBtn,"bottom","-50px")},alterBgColor=function(e,t,o){for(var n=arguments.length,r=new Array(3<n?n-3:0),i=3;i<n;i++)r[i-3]=arguments[i];return r.forEach(function(n){return window.pageYOffset>window.screen.height-e?n.style.background=t:n.style.background=o})};isIos=function(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream};$("#menu-main-menu a, .btn-top, .arrow-link").on("click",function(n){if(""!==this.hash){n.preventDefault();var e=this.hash;$("html, body").animate({scrollTop:$(e).offset().top},800)}});