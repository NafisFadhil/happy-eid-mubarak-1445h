const section = document.getElementById("section")

function reveal() {
	let windowH = window.innerHeight
	let sectionTop = section.getBoundingClientRect().top

	if(sectionTop < windowH) {
		section.classList.remove("opacity-0")
		section.classList.remove("translate-y-12")
		section.classList.add("opacity-1")
		section.classList.add("translate-y-0")
	}
}

const nameTxt = document.getElementById("nameTxt")
const nextBtn = document.getElementById("nextBtn")
const nameElement = document.getElementById("name")
const inputGroup = document.getElementById("inputGroup")
const audio = new Audio("audio/takbiran.mp3")

nextBtn.addEventListener("click", function() {
	if(nameTxt.value == "") {
		return alert("Silahkan isi nama dulu")
	}
	nameElement.innerHTML = nameTxt.value
	inputGroup.classList.add("hidden")
	audio.currentTime = 10
	audio.play()
	reveal()
})
