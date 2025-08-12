let score=0;
let value = prompt("Сколько будет 2+2?");
if (value === "4") {
    score+=100;
}
value = prompt("Сколько будет 2/2?");
if (value === "1") {
    score+=100;
}
value = prompt("Сколько будет 2-2?");
if (value === "0") {
    score+=100;
}
alert(`Число очков = ${score}`)