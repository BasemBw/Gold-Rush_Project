const render = new Renderer()
let board
let panelShortcuts = {
    "119": "up",
    "97": "left",
    "100": "right",
    "115": "down"
}

function startPLay() {
    let range = $("#rangeOptions").val()
    board = new GoldRush(range, range)
    board.add_Coins_Players_Walls()
    $(".playfiled").css("grid-template-columns", `repeat(${range}, 1fr)`);
    $(".playfiled").css("grid-template-rows", `repeat(${range}, 1fr)`);
    render.renderplayTemplate(board.matrix)
}


Handlebars.registerHelper('CheckCoin', function (arg1, arg2, options) {
    if (arg1 == "C") {
        return `<img class="coins" src="./images/coins.png"/>`
    } else if (arg1 == "1") {
        return `<img class="players" src="./images/star.webp"/>`
    } else if (arg1 == "2") {
        return `<img class="players" src="./images/star.webp"/>`
    } else if(arg1 == "W"){
        return `<img  class="walls" src="./images/walls.png"/>`
    }
});

$(document).keydown(function (e) {
    console.log(e.keyCode)
    switch (e.keyCode) {
        case 87:
            board.movePlayer(1, "up")
            render.renderplayTemplate(board.matrix)
            break;
        case 65:
            board.movePlayer(1, "left")
            render.renderplayTemplate(board.matrix)
            break;
        case 68:
            board.movePlayer(1, "right")
            render.renderplayTemplate(board.matrix)
            break;
        case 83:
            board.movePlayer(1, "down")
            render.renderplayTemplate(board.matrix)
            break;
        case 38:
            board.movePlayer(2, "up")
            render.renderplayTemplate(board.matrix)
                break;
        case 37:
            board.movePlayer(2, "left")
            render.renderplayTemplate(board.matrix)
            break;
        case 39:
            board.movePlayer(2, "right")
            render.renderplayTemplate(board.matrix)
            break;
        case 40:
            board.movePlayer(2, "down")
            render.renderplayTemplate(board.matrix)
            break;
    }
});



