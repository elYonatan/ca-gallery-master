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
        and evade them as much as possible`, new Date(1658000000000), 'Coding Academy', ['matrixes', 'events'],
        'https://elyonatan.github.io/Sprint1CA/'),
    _createProject("Chess", "Board game",
        `This is a project of a game called Chess
        in which u need to make the enemy king in a threat where he has no options left.`
        , new Date(1658000000000), 'Coding Academy', ['matrixes', 'events' , 'logical thinking'],
        'https://elyonatan.github.io/Sprint1CA/')
    ]
}

function _createProject(name, title, desc, time, client, labels, link) {
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return {
        name,
        title,
        desc,
        url: `/img/portfolio/${name.toLowerCase()}.jpg`,
        publishedAt: `${month[time.getMonth()]} , ${1900 + time.getYear()}`,
        client,
        labels,
        link
    }
}