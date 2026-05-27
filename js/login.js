const loginForm =
    document.getElementById("loginForm");

loginForm.addEventListener(
    "submit",
    function(e){

    e.preventDefault();

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    if(email && password){

        // SAVE USER

        localStorage.setItem(
            "Portfolio_User",
            email
        );

        // REDIRECT TO HOME PAGE

        window.location.href =
            "index.html";
    }

    else{

        alert(
            "Please enter email and password"
        );
    }

});