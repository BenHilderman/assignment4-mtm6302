//data
const navigation = document.getElementById("navigation")
const hamburger = document.getElementById("hamburger")
const $sectionA = document.getElementById('sectionA')
const $sectionB = document.getElementById('sectionB')
const $sectionC = document.getElementById('sectionC')

//displays nav on hamburger click
hamburger.addEventListener("click", toggleHamburger)
function toggleHamburger() {
    navigation.classList.toggle("showNav")
}

//fades in when section is scrolled to (section a)
window.addEventListener('scroll', fadeInSectionA)
function fadeInSectionA() {
    if (document.documentElement.scrollTop > 400) {
        $sectionA.className = 'opacity'
    }
    else {
        $sectionA.className = ''
    }
}

//fades in when section is scrolled to (section b)
window.addEventListener('scroll', fadeInSectionB)
function fadeInSectionB() {
    if (document.documentElement.scrollTop > 1500) {
        $sectionB.className = 'opacity'
    }
    else {
        $sectionB.className = ''
    }
}

//fades in when section is scrolled to (section c)
window.addEventListener('scroll', fadeInSectionC)
function fadeInSectionC() {
    if (document.documentElement.scrollTop > 2600) {
        $sectionC.className = 'opacity'
    }
    else {
        $sectionC.className = ''
    }
}