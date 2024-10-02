const allButtons = document.querySelectorAll('.color-change')

allButtons.forEach(function (button) {
    console.log(button)
    button.addEventListener('click', function (e) {

        switch (e.target.id) {
            case 'green-box':
                document.body.style.backgroundColor = 'green'
                break;
            case 'white-box':
                document.body.style.backgroundColor = 'white';
                document.querySelector('h2').style.color = 'black';
                break;
            case 'yellow-box':
                document.body.style.backgroundColor = 'yellow';
                document.querySelector('h2').style.color = 'black';
                break;
            case 'blue-box':
                document.body.style.backgroundColor = 'blue'
                break;

            default:
                console.log("Id Does not matched");

                break;
        }


    })

}); 
