'use strict'


var gProjects
_createProjects()


function getProjects() {
    return gProjects
}

function selectProject(name) {
    return gProjects.find(project => project.name === name)
}


function _createProjects() {
    gProjects = [_createProject("MineSweeper", "Board game",
        `This is a project of a game called Minesweeper
        in which u need to logically think where the mines
        are located on the board
        and evade them as much as possible`, new Date(), 'Coding Academy', ['matrixes', 'events'],
        'https://elyonatan.github.io/Sprint1CA/'),
        _createProject("MineSweeper", "Board game",
        `This is a project of a game called Minesweeper
        in which u need to logically think where the mines
        are located on the board
        and evade them as much as possible`, new Date(), 'Coding Academy', ['matrixes', 'events'],
        'https://elyonatan.github.io/Sprint1CA/')
    ]
}

function _createProject(name, title, desc, publishedAt, client, labels, link) {
    return {
        name,
        title,
        desc,
        url: `/img/portfolio/${name.toLowerCase()}.jpg`,
        publishedAt,
        client,
        labels,
        link
    }
}