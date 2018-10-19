document.addEventListener("DOMContentLoaded", function (event) {
  M.AutoInit();

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
})
