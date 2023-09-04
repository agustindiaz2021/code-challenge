document.getElementById("Form").addEventListener("submit", function(event){
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let fecha = document.getElementById("fechaNacimiento").value;

    let data = {
        name: nombre,
        lastname: apellido,
        birthdate: fecha
    };

    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert("Registro exitoso!");
    })
    .catch(error => {
        console.log("Error:", error);
        alert("Hubo un error al registrarse. Por favor, inténtalo de nuevo.");
    });
});