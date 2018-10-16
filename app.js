document.addEventListener("DOMContentLoaded", function (event) {
  M.AutoInit();

  const email = document.querySelector("#email")
  const form = document.querySelector('#form')
  const control = document.querySelector("#control")
  const carousel = document.querySelector(".carousel")


  control.addEventListener("click", event => {
    const instance = M.Carousel.getInstance(carousel)
    console.log(event.target)
    if (event.target.classList.contains("next")) {
      instance.next()
    } else if (event.target.classList.contains("prev")) {
      instance.prev()
    }
  })

  form.addEventListener("submit", event => {
    if (email.value === '') {
      event.preventDefault()
      alert("Please add your email!")
    } else {
      alert("Thank you! We'll get back to you soon!")
    }
  })

});
