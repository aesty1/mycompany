jQuery(document).ready(function() {
    jQuery("a.scrollto").click(function () {
    elementClick = jQuery(this).attr("href")
    destination = jQuery(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
    return false;
    });
});
const btn = document.querySelector(".send_btn"),
    Name = document.querySelector(".Name"),
    email = document.querySelector(".email"),
    text = document.querySelector(".text"),
    a = document.querySelector(".send_btn_a");

btn.addEventListener("click", ()=> {
    console.log(Name.value);
    window.location.href = `mailto:kadirovdenis123@gmail.com?subject=${Name.value}&body=${text.value} &cc=${email.value} &bcc=${email.value}`;
})
 	

const home = document.querySelector("#home"),
    about = document.querySelector("#about"),
    services = document.querySelector("#services"),
    port = document.querySelector("#port"),
    test = document.querySelector("#test"),
    contact = document.querySelector("#contact");
