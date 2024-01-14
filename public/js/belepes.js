form.addEventListener("submit", () => {
    const belepes = {   
        email: email.value,
        jelszo: jelszo.value
    }
    fetch("/api/belepes", {
        method: "POST",
        body: JSON.stringify(belepes),
        headers: {
            "Content-Type":"application/json"
        }
    }).then(res => res.json())
    .then(data => {
        console.log("Belépés sikeres:", data)
    })
    .catch(error => {
        console.error("Belépés failed:", error)
    })
})