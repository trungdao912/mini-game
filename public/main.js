$(document).ready(() => {
    // Tìm giá trị của td cuối cùng
    let max = 0;

    $('input.added').each((index, val) => {
        let number = Number($(val).attr('class').split('-')[1]);
        if (number > max) {
            max = number;
        }
    })
    max = max + 1
    // max là giá trị của class TD cuối cùng
    $('#round').on('click', () => {
        $('#record').append(`
            <tr>
                <td>Round ${max}</td>
                <td><input type="number" value="0" class="added added-${max}"></td>
                <td><input type="number" value="0" class="added added-${max}"></td>
                <td><input type="number" value="0" class="added added-${max}"></td>
                <td><input type="number" value="0" class="added added-${max}"></td>
            </tr>
        `)
        max++;
    })

    $('#save').on('click', () => {
        let sum1 = 0;
        let sum2 = 0;
        let sum3 = 0;
        let sum4 = 0;
        let arr = [];
        for (i = 1; i < max; i++) {
            let newArr = [];
            $(`.added-${i}`).each((index, val) => {
                newArr.push($(val).val())
            })
            // POST LÊN MỘT ARRAY MỚI
            arr.push(newArr);
        }
        console.log(arr);
        arr.forEach((el) => {
            sum1 += Number(el[0])
            sum2 += Number(el[1])
            sum3 += Number(el[2])
            sum4 += Number(el[3])
        })
        console.log(sum2)
        $.ajax({
            type: "POST",
            url: window.location.pathname,
            data: {
                name: arr
            }
        })
        $('#sum1').text(sum1)
        $('#sum2').text(sum2)
        $('#sum3').text(sum3)
        $('#sum4').text(sum4)
    })


})

