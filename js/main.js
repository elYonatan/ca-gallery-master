
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
    <a class="portfolio-link" data-toggle="modal" onclick="onClickImg('${project.name}')">
    <div class="portfolio-hover">
    <div class="portfolio-hover-content">
    <i class="fa fa-plus fa-3x"><br>${project.title}</i>
    </div>
    </div>
    <img class="img-fluid" src="${project.url}" alt="">
    </a>
    <div class="portfolio-caption">
    <h4>${project.name}</h4>
    <p class="text-muted">${project.labels[0]}</p>
    </div>
    </div>`)
    $elPortfolio.html(strHTMLs)
}

function onClickImg(name) {
    //MODAL
    console.log('here')
    const project = selectProject(name)
    //DOM
    renderModal(project)
}

function renderModal(project) {
    // console.log($('#portfolioModal0'))
    $('.proj-name').text(project.name)
    $('.proj-sub-title').text(project.title)
    $('.proj-desc').text(project.desc)
    $('.proj-date').text(project.date)
    $('.proj-client').text(project.client)
    $('.proj-category').text(project.labels.join(' '))
    $('.proj-img').attr('src', project.url)
    $('.proj-link').attr('href', project.link)
}

