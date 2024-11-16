const STORAGE_KEY = "feedback-form";  

const form = document.querySelector(".feedback-form");
const input = document.querySelector(".input-email");
const textarea = document.querySelector(".input-message");

const formData = {
    email: "",
    message: ""
};


form.addEventListener('input', event => {
    if (event.target.name === "email" || event.target.name === "message") {
        formData[event.target.name] = event.target.value.trim();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData)); 
    }
});


function loadFormData() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        formData.email = parsedData.email || "";
        formData.message = parsedData.message || "";

        input.value = formData.email;
        textarea.value = formData.message;
    }
}

loadFormData();

form.addEventListener("submit", event => {
    event.preventDefault();
    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }

    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);  
    formData.email = "";
    formData.message = "";
    form.reset();  
});
