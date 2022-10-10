document.querySelector('.fa-times').style.display ="none"

const menuBtn = document.querySelector(".btn-menu")
const Sibebar = document.querySelector(".sidebar")
const btns = document.querySelectorAll('.btn');
const video = document.querySelector('.video-container video')
const videoContainer = document.querySelector('.video-container')
const close = document.querySelector('.close');

menuBtn.addEventListener('click', () => {
    if(Sibebar.classList.contains('active')){
        Sibebar.classList.remove("active")
        document.querySelector('.fa-times').style.display =""
        document.querySelector('.fa-bars').style.display ="none"

    }else{
        Sibebar.classList.add("active")
        document.querySelector('.fa-times').style.display ="none"
        document.querySelector('.fa-bars').style.display =""
    }
})

btns.forEach(btn=>btn.addEventListener('click', ()=>{
        video.src=btn.dataset.video
        videoContainer.classList.add('show');
        video.volume=0.5;
        video.play();
    })
)


close.addEventListener('click', ()=>{
    videoContainer.classList.remove('show');
    video.pause();
    video.currentTime=0;
})