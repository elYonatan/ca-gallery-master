
$(init)



function init() {
    renderPortfolio()

}

function renderPortfolio() {
    const $elPortfolio = $('.portfolio-items-container')
    const projects = getProjects()
    //html for the photo themselves
    const strHTMLs = projects.map(project => `
    <div class="col-md-4 col-sm-6 portfolio-item">
    <a class="portfolio-link" data-toggle="modal" onclick="onClickImg('${project.name}')" href="#portfolioModal0">
    <div class="portfolio-hover">
    <div class="portfolio-hover-content">
    <i class="fa fa-plus fa-3x"><br>${project.title}</i>
    </div>
    </div>
    <img class="img-fluid thumbnail" src="${project.url}" alt="">
    </a>
    <div class="portfolio-caption">
    <h4>${project.name}</h4>
    <p class="green-hacker-color">Requested by: ${project.client}</p>
    </div>
    </div>`)
    $elPortfolio.html(strHTMLs)
}

function onClickImg(name) {
    //MODAL
    const project = selectProject(name)
    //DOM
    renderModal(project)
}

function renderModal(project) {
    $('.proj-name').text(project.name)
    $('.proj-sub-title').text(project.title)
    $('.proj-desc').text(project.desc)
    $('.proj-date').text(project.publishedAt)
    $('.proj-client').text(project.client)
    $('.proj-category').text(project.labels.join(' '))
    $('.proj-img').attr('src', project.url)
    $('.proj-link-btn').attr('onclick', `openLink('${project.link}')`)

}

const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function onSubmit(ev) {
    ev.preventDefault()
    const elEmail = document.querySelector('[name=contact-email]')
    const elSubject = document.querySelector('[name=contact-subject]')
    const elTxt = document.querySelector('[name=contact-txt]')
    var url = `https://mail.google.com/mail/?view=cm&fs=1&to=${elEmail.value}&su=${elSubject.value}&body=${elTxt.value}`
    if (!validateEmail(elEmail.value)) {
        alert('Email is wrong, please fix')
        return
    }
    if (!elSubject.value) {
        alert('Please enter a subject')
        return
    } 
    window.open(url)
    elEmail.value = ''
    elSubject.value = ''
    elTxt.value = ''
}


function openLink(link) {
    window.open(link)
}