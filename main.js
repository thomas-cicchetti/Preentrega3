const inputLogin = document.getElementById('password')
const btnPass = document.getElementById('button-password')
const alertPass = document.getElementsByClassName('container-pass')[0]
const start = document.getElementById("contWelcome")
const start1 = document.getElementById("articulos_button")
const start2 = document.getElementById("precio_button")
const start3 = document.getElementById("comprar_button")
const txtpass = document.getElementById("textpass")
const autosave = localStorage.getItem("userPass")
const autosaveparse = JSON.parse(autosave)


//AUTOSAVE DE CONTRASEÑA CON LOCAL STORAGE Y JSON
if(autosaveparse != "cursojs"){
    btnPass.addEventListener('click', validatePassword)
}else{
    txtpass.style.display = "none"
    console.log(txtpass.style);
    inputLogin.style.display = "none"
    console.log(inputLogin.style);
    btnPass.style.display = "none"
    console.log(btnPass.style);
    alertPass.style.display = "none"
    console.log(alertPass.style);
    start.style.display = "block"
    console.log(start.style);
    start1.style.display = "block"
    console.log(start1.style);
    start2.style.display = "block"
    console.log(start2.style);
    start3.style.display = "block"
    console.log(start3.style);
}

//FUNCION PARA VALIDAR CONTRASEÑA
function validatePassword(){
    let password = document.getElementById("password").value
    if(password != "cursojs"){
        alertPass.style.display = "block"
        console.log(alertPass.style);
    }else{
        txtpass.style.display = "none"
        console.log(txtpass.style);
        inputLogin.style.display = "none"
        console.log(inputLogin.style);
        btnPass.style.display = "none"
        console.log(btnPass.style);
        alertPass.style.display = "none"
        console.log(alertPass.style);
        start.style.display = "block"
        console.log(start.style);
        start1.style.display = "block"
        console.log(start1.style);
        start2.style.display = "block"
        console.log(start2.style);
        start3.style.display = "block"
        console.log(start3.style);
        localStorage.setItem("userPass", JSON.stringify(password))
    }
}

//FUNCION PARA CREAR LOS ARTICULOS
function articulo(nombre, valorMinorista, valorMayorista, cantidad) {
    this.nombre = nombre;
    this.valorMinorista = valorMinorista;
    this.valorMayorista = valorMayorista;
    this.cantidad = cantidad;
}

//CREACION DE ARTICULOS
const articulo1 = new articulo ("Naranja", 500, 350, 5);
const articulo2 = new articulo ("Manzana", 700, 500, 2);
const articulo3 = new articulo ("Durazno", 1500, 1000, 1);
const articulo4 = new articulo ("Banana", 600, 400, 5)

//METIENDO LOS ARTICULOS EN UN ARRAY
let frutas = [articulo1 , articulo2 , articulo3, articulo4]

//OBTENER BOTONES Y DIVS DEL HTML POR ID
let preciosButton = document.getElementById("precio_button")
let articulosButton = document.getElementById("articulos_button")
let comprarButton = document.getElementById("comprar_button")
let contenedor = document.getElementById("containerList")
let conBut = document.getElementById("CB")
let contPrices = document.getElementById("containerPrices")
let conBut2 = document.getElementById("CB2")

// FUNCION PARA VER ARTICULOS DISPONIBLES
const articulos = () => {
    
    let list = document.createElement("div")
    list.innerHTML = ` 
    <h2> ${articulo1.nombre} </h2>
    <h2> ${articulo2.nombre} </h2>
    <h2> ${articulo3.nombre} </h2>
    <h2> ${articulo4.nombre} </h2>
    `
    contenedor.append(list)

    let closeButton = document.createElement("div")
    closeButton.innerHTML = `
    <button id = "close"> Cerrar lista </button>
    `
    conBut.append(closeButton)
    
    const closeList = () => {
        list.innerHTML = ""
        closeButton.innerHTML = ""

        contenedor.append(list)
        conBut.append(closeButton)
    }

    let botonCerrar = document.getElementById("close")
    botonCerrar.addEventListener("click", closeList)

    }



//FUNCION PARA VER PRECIOS
const precios = () => {

    let prices = document.createElement("div")
    prices.innerHTML = ` 
    <h2> ${articulo1.nombre} </h2> 
    <p>Valor minorista: ${articulo1.valorMinorista}</p>
    <p>Valor mayorista: ${articulo1.valorMayorista}</p><br>
    <h2> ${articulo2.nombre} </h2> 
    <p>Valor minorista: ${articulo2.valorMinorista}</p>
    <p>Valor mayorista: ${articulo2.valorMayorista}</p><br>
    <h2> ${articulo3.nombre} </h2> 
    <p>Valor minorista: ${articulo3.valorMinorista}</p>
    <p>Valor mayorista: ${articulo3.valorMayorista}</p><br>
    <h2> ${articulo4.nombre} </h2> 
    <p>Valor minorista: ${articulo4.valorMinorista}</p>
    <p>Valor mayorista: ${articulo4.valorMayorista}</p><br>
    `
    contPrices.append(prices)

    let closeButton2 = document.createElement("div")
    closeButton2.innerHTML = `
    <button id = "close"> Cerrar lista </button>
    `
    conBut2.append(closeButton2)
    
    const closeList = () => {
        prices.innerHTML = ""
        closeButton2.innerHTML = ""

        contPrices.append(prices)
        conBut2.append(closeButton2)
    }

    let botonCerrar = document.getElementById("close")
    botonCerrar.addEventListener("click", closeList)

}

//FUNCION PARA COMPRAR Y VER CARRITO ABANDONADO (NO FUNCIONA, LO ESTOY HACIENDO TODAVIA.)
let carrito = []
let retCompra
const comprar = () => {
    if(carrito != null){
        retCompra = prompt(
            `Oh, notamos que tienes articulos cargados en tu carrito. ¿Te gustaria retomar tu compra?
            
            1.Si
            2.No, iniciar nueva compra`)
    }
    if(retCompra == 1){
        
    }

    alert(`
    Deberas seleccionar la cantidad en KG que deseas comprar de cada fruta. 
    ● Si compras mas de 5KG de la fruta seleccionada aplicara el precio mayorista.`)
    carrito = []
    let total = 0
    frutas.forEach((element) => {
    element.cantidad = parseInt(prompt(`¿Cuantos KG de ${element.nombre} quieres? (${element.valorMayorista} / ${element.valorMinorista})`))
    if (element.cantidad > 4){
        total = total + (element.cantidad * element.valorMayorista);
    }else{
        total = total + (element.cantidad * element.valorMinorista);
    }
    localStorage.setItem("carrito", carrito)
    })
    
    alert(`El valor final de tu compra es ${total}`)

    frutas.forEach((element) => {
        element.cantidad
        if (element.cantidad > 0){
            carrito.push(element)
        }
    })

}

// ESCUCHADOR DE EVENTOS 
preciosButton.addEventListener("click", precios )
articulosButton.addEventListener("click", articulos )
comprarButton.addEventListener("click", comprar )



