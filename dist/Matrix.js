class Matrix{
    constructor(rowNum,colNum){
           this.matrix = this.generateMatrix(rowNum,colNum)
           this.rowNum = parseInt(rowNum)
           this.colNum = parseInt(colNum)
    }
    generateMatrix(rowNum,colNum){
       let matrix = []
       for(let i=0 ; i<rowNum;i++){
           let row = []
           for(let j=0 ; j<colNum;j++){
              row.push("")
           }
           matrix.push(row)
       }
       return matrix
    }
    printRow(rowNum){
        let row = ""
        for (let i = 0; i < this.matrix[rowNum].length; i++) {
            row += (this.matrix[rowNum][i]+"\t")
        }
        console.log(row)
    }
    printColumn(colNum){
        let colum = ""
        for (let i = 0; i < this.matrix.length; i++) {
            colum += (this.matrix[i][colNum] + "\t")
        }
        console.log(colum)
    }
    print(){
        for (let i = 0; i < this.matrix.length; i++) {
            let line = ""
            for (let j = 0; j < this.matrix[i].length; j++) {
                line += (this.matrix[i][j] + "\t")
            }
            console.log(line)
        }
    }
    alert(rowNum,colNum,newNum){
        this.matrix[rowNum][colNum] = newNum
    }
    get(rowNum,colNum){
       return this.matrix[rowNum][colNum]
    }
    findCoordinate(value){
        for(let r=0;r<this.matrix.length;r++){
            for(let c=0;c<this.matrix[r].length;c++){
                if(this.matrix[r][c] == value){
                    return {x:c,y:r}
                }
            }
        }
    }
}


