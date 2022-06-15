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



