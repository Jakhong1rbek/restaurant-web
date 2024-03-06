function slider() {
	const slides = document.querySelectorAll('.offer__slide'),
		prev = document.querySelector('.offer__slider-prev'),
		next = document.querySelector('.offer__slider-next'),
		total = document.querySelector('#total'),
		current = document.querySelector('#current'),
		slidesWrapper = document.querySelector('.offer__slider-wrapper'),
		slidesInner = document.querySelector('.offer__slider-inner'),
		width = window.getComputedStyle(slidesWrapper).width

	let slideIndex = 1,
		offset = 0

	if (slides.length < 10) {
		total.textContent = `0${slides.length}`
		current.textContent = `0${slideIndex}`
	} else {
		total.textContent = slides.length
		current.textContent = slideIndex
	}

	slidesInner.style.width = 100 * slides.length + '%'
	slidesInner.style.display = 'flex'
	slidesInner.style.transition = 'all .5s ease'

	slidesWrapper.style.overflow = 'hidden'

	slides.forEach(slide => {
		slide.style.width = width
	})

	next.addEventListener('click', () => {
		if (offset === +width.replace(/\D/g, '') * (slides.length - 1)) {
			offset = 0
		} else {
			offset += +width.replace(/\D/g, '')
		}
		slidesInner.style.transform = `translateX(-${offset}px)`

		if (slideIndex === slides.length) {
			slideIndex = 1
		} else {
			slideIndex++
		}

		if (slides.length < 10) {
			current.textContent = `0${slideIndex}`
		} else {
			current.textContent = slideIndex
		}
	})

	prev.addEventListener('click', () => {
		if (offset === 0) {
			// width  = 900px
			offset = +width.replace(/\D/g, '') * (slides.length - 1)
		} else {
			offset -= +width.replace(/\D/g, '')
		}
		slidesInner.style.transform = `translateX(-${offset}px)`

		if (slideIndex === 1) {
			slideIndex = slides.length
		} else {
			slideIndex--
		}

		if (slides.length < 10) {
			current.textContent = `0${slideIndex}`
		} else {
			current.textContent = slideIndex
		}
	})
}

export default slider
