const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profileImg = document.getElementById('profile_img')
const authorName = document.getElementById('name')
const date = document.getElementById('date')

const animatedBgs = document.querySelectorAll('.animated-bg')
const animatedBgTexts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1575024357670-2b5164f470c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt=""> '
    title.innerHTML = 'Lorem ipsum dolor sit amet'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, dignissimos'
    profileImg.innerHTML = '  <img src="http://randomuser.me/api/portraits/men/45.jpg" alt="">'
    authorName.innerHTML= 'John Doe'
    date.innerHTML = 'Jan 11 2023'

    animatedBgs.forEach(bg => bg.classList.remove('animated-bg'))
    animatedBgs.forEach(bg => bg.classList.remove('animated-bg-text'))
}


