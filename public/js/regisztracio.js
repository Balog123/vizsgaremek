form.addEventListener("submit", () => {
    const regisztracio = {
        keresztnev: keresztnev.value,
        vezeteknev: vezeteknev.value,
        email: email.value,
        jelszo: jelszo.value
    }
    fetch("/api/regisztracio", {
        method: "POST",
        body: JSON.stringify(regisztracio),
        headers: {
            "Content-Type":"application/json"
        }
    }).then(res => res.json()).then(data => {
        if (data.status == "error") {
            success.style.display = "none"
            error.style.display = "block"
            error.innerText = data.error
        } else {
            error.style.display = "none"
            success.style.display = "block"
            success.innerText = data.error
        }
    })
});