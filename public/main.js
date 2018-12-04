$(document).ready(() => {
    let num = 2;
    $('#round').on('click', () => {
        $('#record').append(`
            <tr>
                <td><input type="text" value="0" class="added added-${num}"></td>
                <td><input type="text" value="0" class="added added-${num}"></td>
                <td><input type="text" value="0" class="added added-${num}"></td>
                <td><input type="text" value="0" class="added added-${num}"></td>
            </tr>
        `)
        num++;
    })

    $('#save').on('click', () => {
        let arr = [];
        $()
        for (i = 1; i < num; i++) {
            let newArr = [];
            $(`.added-${i}`).each((index, val) => {
                newArr.push($(val).val())
            })
            arr.push(newArr);
        }
        console.log(arr);
        $.ajax({
            type: "POST",
            url: window.location.pathname,
            data: {
                name: arr
            }
        })
    })
})

