document.addEventListener('DOMContentLoaded', function() {
    const contactBtn = document.querySelector('.contact');
    const contactForm = document.querySelector('.contact-form');
    const overlay = document.querySelector('.overlay');

    if (contactBtn && contactForm && overlay) {
        contactForm.style.display = 'none';
        overlay.style.display = 'none';

        contactBtn.addEventListener('click', function() {
            contactForm.style.display = 'flex';
            overlay.style.display = 'block';
        });

        overlay.addEventListener('click', function() {
            contactForm.style.display = 'none';
            overlay.style.display = 'none';
        });
    }
});

let i = 0

function changerText() {
    const spanText = document.querySelector('.job')
    const jobList = ["Web Developper", "Designer", "Wordpress Developper"]
    
        
        spanText.textContent = jobList[i]
        spanText.classList.add('animate');
        i = (i + 1) % jobList.length;     
    setTimeout(() => {
        spanText.classList.remove('animate');
    },600);
}

changerText()
setInterval(changerText, 2000)


