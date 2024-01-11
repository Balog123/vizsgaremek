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
    }).then(res => res.json())
})