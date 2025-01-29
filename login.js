document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form")
    const registerForm = document.getElementById("register-form")
    const loginSection = document.getElementById("login-section")
    const registerSection = document.getElementById("register-section")
    const showRegister = document.getElementById("show-register")
    const showLogin = document.getElementById("show-login")
  
    showRegister.addEventListener("click", (e) => {
      e.preventDefault()
      loginSection.style.display = "none"
      registerSection.style.display = "block"
    })
  
    showLogin.addEventListener("click", (e) => {
      e.preventDefault()
      registerSection.style.display = "none"
      loginSection.style.display = "block"
    })
  
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const email = document.getElementById("email").value
      const password = document.getElementById("password").value
  
      const users = JSON.parse(localStorage.getItem("users")) || []
      const user = users.find((u) => u.email === email && u.password === password)
  
      if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user))
        window.location.href = "index.html"
      } else {
        alert("Correo electrónico o contraseña incorrectos")
      }
    })
  
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const name = document.getElementById("name").value
      const email = document.getElementById("register-email").value
      const password = document.getElementById("register-password").value
  
      const users = JSON.parse(localStorage.getItem("users")) || []
  
      if (users.some((u) => u.email === email)) {
        alert("Este correo electrónico ya está registrado")
        return
      }
  
      const newUser = { name, email, password }
      users.push(newUser)
      localStorage.setItem("users", JSON.stringify(users))
      localStorage.setItem("currentUser", JSON.stringify(newUser))
  
      window.location.href = "index.html"
    })
  })
  
  