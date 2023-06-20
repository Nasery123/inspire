export class Quote {
    constructor(data) {
        // this.id = data.id || generatID()
        this.quote = data.quote
        this.description = data.description

        // console.log('the debugger')
        this.content = data.content
        this.author = data.author
        this.tags = data.tags


    }

    get quoteTemplate() {
        return/*html*/`
        <div class="row">
        <div class="col-6 text-center ">

        <div class="row">
        <div class="d-flex" id="quoteDescription">
        <p>${this.content}</p>

        <div class="row">
        <b>
        <p class="text-end" id="author">${this.author}</p></b>

        </div>


        </div>
        </div>


        `
    }
}
