const navLinks = document.querySelectorAll('.list-item');

navLinks.forEach((link)=>{
    const dropdownMenu = link.querySelector('.dropdown-menu');
    link.addEventListener('click', ()=>{
        dropdownMenu.classList.toggle('active')
    })
})
