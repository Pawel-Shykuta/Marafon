


function summa (arr){

    var sum = 0;

    for(var i = 0; i < arr.length; i++){

        sum+=arr[i];

        console.log(sum);
    }
    

}

var hat = [1, 2, 3, 4, 5, 8];

var hata = [1, 3, 5, 6, 123 ,43 ,53 ,5 ,34 ,423 ,23 ,2 ,3 ,4];

//summa(hata);

//summa(hat);



console.log("hi");


function samm (mas){

    var sama = 0;

    for (var t = 0; t <mas.length; t++ ){
        sama+=mas[t];

    }
    return sama;

}

samm[hata];




var result = samm(hata);
console.log(result); // Должно вывести 15



//alert
//confirm
//prompt





if (confirm("Are you good?")) {
    alert("It's fine");

    var a = prompt("Введите, пожалуйста, ваш возраст");

    if (a != null) {
        // Пользователь ввел возраст, проверяем его
        a = parseInt(a); // Преобразуем введенное значение в число
        if (!isNaN(a)) {
            // Проверяем, что введенное значение действительно является числом
            if (a >= 18) {
                alert("You completed");
                document.body.style.opacity = 1;
            } else {
                alert("Sorry, but you are too young");
                document.body.style.opacity = 0;
            }
        } else {
            // Введенное значение не является числом
            alert("Invalid age");
            document.body.style.opacity = 0;
        }
    } else {
        // Пользователь отменил ввод
        alert("You did not enter your age");
        document.body.style.opacity = 0;
    }
} else {
    // Пользователь отменил confirm, закрываем окно
    window.close();
}
    








function updateClock() {
    var now = new Date;

    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var dayOfWeek = now.toLocaleDateString('en', { weekday: 'long' });
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    var  clock = document.getElementById('clock');
    clock.textContent = dayOfWeek + ': ' + year + ': '+ month + ': '+ day + ': '+ hour + ':' + minute + ':' + second;
}

setInterval(updateClock, 1000);

updateClock();










var audioElement = document.getElementById('Mus');

function playAudio(){
    audioElement.play();
}

function pauseAudio(){
    audioElement.pause();
}


    