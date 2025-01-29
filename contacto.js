document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form")
  
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()
  
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const message = document.getElementById("message").value
  
      
      console.log("Form submitted:")
      console.log("Name:", name)
      console.log("Email:", email)
      console.log("Message:", message)

      contactForm.reset()
  
      alert("¡Gracias por tu mensaje! Te contactaremos pronto.")
    })
  })
  
  