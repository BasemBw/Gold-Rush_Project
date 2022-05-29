class Renderer {
    constructor() {
        this.source = $('#template').html();
        this.playTemplate = Handlebars.compile(this.source);
    }
    renderplayTemplate(matrixData){
        let dataObject = {
            Matrix:matrixData
        }
        const newHTML = this.playTemplate(dataObject);
        $('.playfiled').html('')
        $('.playfiled').append(newHTML)
    }
}