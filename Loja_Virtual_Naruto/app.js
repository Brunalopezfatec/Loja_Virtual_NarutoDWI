function dados() {

    const ds =[
               {id:1, login:"Bruna", password:"1234@", email:"bruna@gmail.com"},
               {id:2, login:"Dilan", password:"1234@", email:"dilan@gmail.com"},
               {id:3, login:"Vinicius", password:"1234@", email:"Vinicius@gmail.com"}
              ]
              
    return ds

}

console.log(dados()[1].login)

const usuarios = dados()

// console.log("O seu Login é: " + usuarios[0].login + "\n A sua senha é: " + usuarios[0].password)

//let log = document.querySelector(login).value
//let senha = document.querySelector(password).value

function login() {

    let log = document.querySelector(login).value
    let senha = document.querySelector(password).value

    if (log == usuarios[1].login && senha == usuarios[1].password) {
        console.log("Você logou!")
}
}

