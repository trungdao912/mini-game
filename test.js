$(document).ready(() => {
    


    $('.button').on('click', () => {
        $('.container').append(`
            <h1 class="yes">ADDED</h1>
        `)
        $('.yes').on('click', () => {
            console.log("CLICKED");
        })
    })

})