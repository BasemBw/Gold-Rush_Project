class GoldRush extends Matrix {
    constructor(rowNum, colNUm) {
        super(rowNum, colNUm)
        this.playersPoints = {
            1: 0,
            2: 0
        }
    }
    movePlayer(player, move) {
        let Coordinate = this.findCoordinate(player)
        switch (move) {
            case "left":
                if (Coordinate.x > 0 && this.get(Coordinate.y, Coordinate.x) != "W") {
                    this.alert(Coordinate.y, Coordinate.x, "")
                    Coordinate.x -= 1
                    if (this.get(Coordinate.y, Coordinate.x) == "C") {
                        this.playersPoints[player]+=10
                    }
                    this.alert(Coordinate.y, Coordinate.x, player)
                }
                break;
            case "up":
                if (Coordinate.y > 0 && this.get(Coordinate.y, Coordinate.x) != "W") {
                    this.alert(Coordinate.y, Coordinate.x, "")
                    Coordinate.y -= 1
                    if (this.get(Coordinate.y, Coordinate.x) == "C") {
                        this.playersPoints[player]+=10
                    }
                    this.alert(Coordinate.y, Coordinate.x, player)
                }
                break;
            case "down":
                if (Coordinate.y < this.rowNum - 1 && this.get(Coordinate.y, Coordinate.x) != "W") {
                    this.alert(Coordinate.y, Coordinate.x, "")
                    Coordinate.y += 1
                    if (this.get(Coordinate.y, Coordinate.x) == "C") {
                        this.playersPoints[player]+=10
                    }
                    this.alert(Coordinate.y, Coordinate.x, player)
                }
                break;
            case "right":
                if (Coordinate.x < this.colNum - 1 && this.get(Coordinate.y, Coordinate.x) != "W") {
                    this.alert(Coordinate.y, Coordinate.x, "")
                    Coordinate.x += 1
                    if (this.get(Coordinate.y, Coordinate.x) == "C") {
                        this.playersPoints[player]+=10
                    }
                    this.alert(Coordinate.y, Coordinate.x, player)
                }
                break;
        }
    }
    add_Coins_Players_Walls() {
        //---PLyers
        this.alert(this.rowNum - 1, this.rowNum - 1, "2")
        this.alert(0, 0, "1")
        //---Coins
        let Coins = (this.colNum*this.colNum)/2
        for (let i = 0; i < Coins; i++) {
            let x = Math.floor(Math.random() * (this.colNum - 1));
            let y = Math.floor(Math.random() * (this.rowNum - 1));
            if (this.get(y, x) !== "1" && this.get(y, x) !== "2") {
                this.alert(y, x, "C")
            }
        }
        //--Walls
        let Walls = (this.colNum*this.colNum)/3
        for (let i = 0; i < Walls; i++) {
            let x = Math.floor(Math.random() * (this.colNum - 1));
            let y = Math.floor(Math.random() * (this.rowNum - 1));
            if (this.get(y, x) !== "1" && this.get(y, x) !== "2") {
                this.alert(y, x, "W")
            }
        }

    }
}
