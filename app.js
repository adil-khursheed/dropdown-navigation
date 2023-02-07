const listItem = document.getElementsByClassName('.list-item');
const dropdownLink1 = document.querySelector('.dropdown-link-1');
const dropdownLink2 = document.querySelector('.dropdown-link-2');

const dropdown1 = document.querySelector('.dropdown-1');
const dropdown2 = document.querySelector('.dropdown-2');
const dropdownIcon1 = document.querySelector('.dropdown-icon-1');
const dropdownIcon2 = document.querySelector('.dropdown-icon-2');

const dropdownActive1 = () => {
    dropdown1.classList.toggle('active');
    dropdown1.style.height = '145px';
}

const dropdownActive2 = () => {
    dropdown2.classList.toggle('active');
    dropdown2.style.height = '110px';
}
