document.addEventListener("DOMContentLoaded", function () {

    /* CHECK LOGIN STATUS */

    const isLoggedIn =
        sessionStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {

        alert("Please login first");

        window.location.href =
            "admin-login.html";

        return;

    }

    /* LOGOUT BUTTON */

    const logoutBtn =
        document.getElementById("logout-btn");

    if (logoutBtn) {

        logoutBtn.addEventListener(
            "click",
            function () {

                sessionStorage.removeItem(
                    "isLoggedIn"
                );

                window.location.href =
                    "admin-login.html";

            }

        );

    }

});

document.addEventListener("DOMContentLoaded", function () {

    /* PROTECT ADMIN PAGE */

    const isLoggedIn =
        sessionStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {

        window.location.href =
            "admin-login.html";

        return;

    }

    /* FORM SUBMIT */

    const form =
        document.getElementById("product-form");

    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value;

            const price =
                document.getElementById("price").value;

            const category =
                document.getElementById("category").value;

            const image =
                document.getElementById("image").value;

            fetch(
                "http://127.0.0.1:5000/api/products/add",
                {

                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({

                        name: name,
                        price: price,
                        category: category,
                        image: image

                    })

                }
            )

            .then(response =>
                response.json()
            )

            .then(data => {

                alert(data.message);

                form.reset();

            })

            .catch(error => {

                console.log(error);

                alert("Error saving product");

            });

        }

    );

});