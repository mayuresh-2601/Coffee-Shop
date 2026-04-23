document.addEventListener("DOMContentLoaded", function () {

    const form =
        document.querySelector(".login-form");

    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const username =
                document.getElementById("username").value;

            const password =
                document.getElementById("password").value;

            const error =
                document.getElementById("error-message");

            /* SEND LOGIN REQUEST TO BACKEND */

            fetch(
                "http://localhost:5000/api/auth/login",
                {

                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({

                        username: username,
                        password: password

                    })

                }
            )

            .then(response =>
                response.json()
            )

            .then(data => {

                if (
                    data.message ===
                    "Login successful"
                ) {

                    /* SAVE LOGIN SESSION */

                    sessionStorage.setItem(
                        "isLoggedIn",
                        "true"
                    );

                    /* REDIRECT */

                    window.location.href =
                        "admin.html";

                }

                else {

                    error.textContent =
                        data.message;

                }

            })

            .catch(error => {

                console.error(error);

                error.textContent =
                    "Server error";

            });

        }

    );

});