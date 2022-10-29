function randomNumber() {
    let number = Math.floor(Math.random()*100);
    for(let count = 1; count <= 10; count++) {
        let result = +prompt(`Попытка №${count}, Введите число:`)
        if(result == number) {
            return alert (`Вы угадали число! Попыток: ${count}, Число: ${number}`)
            } else if (result < number) {
                alert(`Ваше число ${result}, меньше загаданного!`)
                } else if (result > number) {
                    alert(`Ваше число ${result}, больше загаданного!`)
                }
            }
            return alert (`Вы не угадали число! Число: ${number}`)
        }
randomNumber();

