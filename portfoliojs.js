document.getElementById("contactForm").onsubmit = function(e) {
    e.preventDefault();
    let form = this;
    fetch(form.action, {
        method: "POST",
    body: new FormData(form),
headers: { Accept: "application/json"}
}
    )
        .then(res => {
            if (res.ok) {
                // Show success message if the response is successful
                document.getElementById("sentOk").classList.remove("d-none");
                form.reset(); // Reset the form after submission
            } else {
                // Show failure message if there is an error with the submission
                document.getElementById("sentFail").classList.remove("d-none");
            }
        })
        .catch(() => {
            // If there is an error in the fetch request, show failure message
            document.getElementById("sentFail").classList.remove("d-none");
        });
}