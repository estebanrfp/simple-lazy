export default function SimpleLazy (container) {
  container = document.querySelector(container)
  container.addEventListener('load', lazyLoadImages)
  container.addEventListener('resize', lazyLoadImages)
  container.addEventListener('scroll', lazyLoadImages)

  function isElementInViewport (el) {
    let rect = el.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  function lazyLoadImages () {
    let images = document.querySelectorAll('img[data-src]')

    Array.from(images, (item) => {
      if (isElementInViewport(item)) {
        item.src = item.getAttribute('data-src')
        item.removeAttribute('data-src')
        item.onload = function () {
          item.classList.add('s-loaded')
        }
        item.onerror = function () {
          item.classList.add('s-error')
        }
      }
    })

    if (images.length === 0) {
      container.removeEventListener('load', lazyLoadImages)
      container.removeEventListener('resize', lazyLoadImages)
      container.removeEventListener('scroll', lazyLoadImages)
    }
  }
  lazyLoadImages()
}
