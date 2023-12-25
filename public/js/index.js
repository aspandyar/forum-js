const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // get values
    const email = form.email.value;
    const password = form.password.value;

    try {
        const res = await fetch('/user/signup', {
            method: 'POST', 
            body: JSON.stringify({ email, password }),
            headers: {'Content-Type': 'application/json'}
        })

        console.log("res: ", res);
    }
    catch (err) {
        console.log(err);
    }

});