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


        <div id="quoteDescription">
        <p>${this.content}</p>
        <p id="author">${this.author}</p>
        </div>


        </div>
        </div>


        `
    }
}
