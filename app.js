document.addEventListener("DOMContentLoaded", function (event) {
  M.AutoInit();

  // const email = document.querySelector("#email")
  const form = document.querySelector('#form')
  // console.log(form)
  const control = document.querySelector("#control")
  const carousel = document.querySelector(".carousel")

  // const site_id = "www.huntcodes.co"



  control.addEventListener("click", event => {
    const instance = M.Carousel.getInstance(carousel)
    console.log(event.target)
    if (event.target.classList.contains("next")) {
      instance.next()
    } else if (event.target.classList.contains("prev")) {
      instance.prev()
    }
  })

  // form.addEventListener("submit", event => {
  //   event.preventDefault()
  //   const data = new FormData(form)
  //   data.set('form-name', 'contact')
  //   console.log(data)
  //   //console.dir(data)

  //   fetch("/forms", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json; charset=utf-8" },
  //     body: {
  //       "hello": "hello"
  //     }
  //   })
  //     .then(response => {
  //       if (response.status > 299) {
  //         throw new Error("Failed to send message. Please try again.")
  //       }
  //       return response.text()
  //     })
  //     .then(data => {
  //       console.log("Form submission success", data)
  //       alert("Success!")
  //       // fetch(`/sites/${site_id}/forms`)
  //       //   .then(function (response) {
  //       //     return response
  //       //   })
  //       //   .then(function (response) {
  //       //     console.log(response)
  //       //   })
  //     })
  //     .catch(error => {
  //       console.error("Form submission FAIL:", error)
  //       alert('Message Failed')
  //     })
  // })
})
