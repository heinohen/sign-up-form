// confirm password

function onChange() {
    const pw = document.querySelector('input[name=password]');
    const conf = document.querySelector('input[name=confirm]');
    const val = document.querySelector('.validator');
    console.log(pw, conf)
    if (pw.value.length < 8) {
        val.textContent = 'Passwords too SHORT!';
        val.style.color = "red";
        return;
    }
    
    if (conf.value == pw.value) {
        val.textContent = "Passwords match!";
        val.style.color = "green";
    } else {
        val.textContent = 'Passwords do not match!';
        val.style.color = "red";

        
    
}
}
    
//footer

const footer = document.querySelector('.footer');
const footerLegal = document.createElement('div');
footer.appendChild(footerLegal);

const footerPara = document.createElement('p')
footerPara.textContent = " (c) heinohen 2022";
footerLegal.appendChild(footerPara);

const footerGit = document.createElement('a')

footerGit.href = "https://github.com/heinohen"
const footerImg = document.createElement('img')
footerImg.src = "./images/git.png";
footerImg.alt = "gitcat";
footerGit.setAttribute('id','gitlink');
footerGit.appendChild(footerImg);
footer.appendChild(footerGit);



