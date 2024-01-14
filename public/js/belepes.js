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
    .catch(error => {
        console.error('Error during fetch:', error);
        // Handle error (display a message, etc.)
    });
})