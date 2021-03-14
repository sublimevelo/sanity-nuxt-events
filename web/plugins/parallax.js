import 'object-fit-images'
import { jarallax } from 'jarallax'

window.addEventListener('load', function(event) {
  let jarallaxers = document.querySelectorAll('.jarallax')
  for (let j of jarallaxers) {
    jarallax(j, { speed: j.dataset.speed || 0.8 })
  }
})
