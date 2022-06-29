const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней
for (let i=0; i <=lines; i++){

    for (k=i; k <lines; k++){
        result +=' ';
    }
    result +='*';

    for (k=0; k <i*2; k++){
        result +='*';
    }
    result +='\n';
}
console.log(result);

result='';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result)