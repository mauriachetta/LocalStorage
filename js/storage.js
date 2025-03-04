//getItem => Obtener y leer un dato del storage

//setItem => Guardar un dato en el storage

//clear => borra todos los datos del storage

//removeItem => borra un elemento del storage


//! LocalStorage 

localStorage.setItem("userName", JSON.stringify("John Doe"))
localStorage.setItem("role", "ADMIN_ROLE")
localStorage.setItem("eat", "56496876415")


const user = localStorage.getItem("userName")
console.log(`Bienvenido ${user}`)

localStorage.removeItem("role")

const products = [
    {
        name:"PS5",
        price:1200000
    },
    {
        name:"Switch 2",
        price: 900000
    }
]

localStorage.setItem("cartAbandoned", JSON.stringify(products))

const productosLocalStorage = JSON.parse(localStorage.getItem("cartAbandoned"))

console.log(productosLocalStorage)


//!SessionStorage

// sessionStorage.setItem("userSession", JSON.stringify("Michael Smith"))