const btn = document.querySelector(".send_btn"),
    name = document.querySelector(".name"),
    email = document.querySelector(".email"),
    text = document.querySelector(".text"),
    a = document.querySelector(".send_btn_a");

btn.addEventListener("click", ()=> {
    a.href = `mailto:kadirovdenis123@gmail.com?subject=${text} &Body=text &cc=${email} &bcc=${email}`
})