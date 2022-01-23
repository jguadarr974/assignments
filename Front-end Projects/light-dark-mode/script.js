const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textbox = document.getElementById('text-box');

function imagemode(color){
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_proud_coder_${color}.svg`;
    image3.src = `img/undraw_proud_coder_${color}.svg`;
}

function darkMode(){
    nav.style.bakcgrounfColor = 'rgb(0 0 0 / 50%)';
    textbox.style.backgroundColor = 'rgb(255 255 255 / 50%';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imagemode('dark');
}

function lightMode(){
    nav.style.bakcgrounfColor = 'rgb(255 255 255 / 50%)';
    textbox.style.backgroundColor = 'rgb(0 0 0 / 50%';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    imagemode('light');
}

function switchTheme(event){
    if (event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'darl');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }
}

toggleSwitch.addEventListener('change', switchTheme);

const currentTheme = localStorage.getItem('theme');
if(currentTheme) {
    document.documentElement.setAttribute('data-them', currentTheme);

    if(currentTheme === 'dark'){
        toggleSwitch.checked = true;
        darkMode();
    }
}
