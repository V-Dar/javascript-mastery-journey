let countPeople = prompt("Введите количество человек.");
let money = prompt("Введите стоимость общего заказа.");
let gift = prompt("Введите процент чаевых от стоимости заказа.");
if (!isNaN(countPeople) && !isNaN(money) && !isNaN(gift)) {
    let moneyForPerson = money * (1 + gift / 100) / countPeople;
    alert(`Столько денег нужно на человека: ${moneyForPerson}`);
}