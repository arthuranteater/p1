document.addEventListener("DOMContentLoaded", function (event) {
  M.AutoInit();

  const control = document.querySelector("#control")
  const carousel = document.querySelector(".carousel")
  const logo = document.querySelector(".name")
  const title = document.querySelector(".title")
  const about = document.querySelector(".about")
  const contact = document.querySelector(".contact")

  logo.textContent = `<Hunt Applegate />`
  title.textContent = `   Software Engineer`
  about.textContent = "``` const dreams = ideas + failures + work^n ```"
  contact.textContent = "``` { response = have a project in mind ? 'check a box' : 'say hi' } ```"


  control.addEventListener("click", event => {
    const instance = M.Carousel.getInstance(carousel)
    if (event.target.classList.contains("next")) {
      instance.next()
    } else if (event.target.classList.contains("prev")) {
      instance.prev()
    }
  })
})
