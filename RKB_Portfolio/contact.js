const form = document.querySelector(".contact-form");

form.addEventListener("submit", async function(e){

e.preventDefault();

const formData = new FormData(form);

const data = {
name: formData.get("name"),
email: formData.get("email"),
message: formData.get("message")
};

const response = await fetch("/api/sendmail",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body: JSON.stringify(data)
});

if(response.ok){

document.getElementById("success-popup").classList.add("show");

form.reset();

setTimeout(()=>{
document.getElementById("success-popup").classList.remove("show");
},3000);

}

});