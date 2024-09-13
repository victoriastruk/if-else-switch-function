//1
const number1 = Number(prompt("Введіть перше число:"));
const number2 = Number(prompt("Введіть друге число:"));
const sum = number1 + number2;

if (sum % 5 === 0) {
  alert(`Сума ${sum} кратна 5`);
} else {
  alert(`Сума ${sum} не кратна 5`);
}

//2
function calSquareArea(side) {
  return side ** 2;
}
const side = Number(prompt("Введіть довжину сторони квадрата:"));
alert(`Площа квадрата = ` + calSquareArea(side));

//3
function showMenu() {
  let choice = Number(prompt("1 - Чай\n2 - Кава\n3 - Сік\n4 - Вода"));
  switch (choice) {
    case 1:
      alert("Ви вибрали чай");
      break;
    case 2:
      alert("Ви вибрали каву");
      break;
    case 3:
      alert("Ви вибрали сік");
      break;
    case 4:
      alert("Ви вибрали воду");
      break;
    default:
      alert("Такого напою у нас нема");
  }
}
showMenu();

//4
let price = parseFloat(prompt("Введіть суму покупки"));
let finalPrice =
  price > 800 ? price * 0.95 : price > 500 ? price * 0.97 : price;
alert(`Остаточна сума покупки: ${finalPrice.toFixed(2)} грн.`);

//5
function isDivisible(number1, number2) {
  return number1 % number2 == 0;
}
console.log(isDivisible(8, 2));
console.log(isDivisible(9, 2));

//*
function calcQuadraticEquation(a, b, c) {
  if (a === 0) {
    return "Рівняння не є квадратним";
  }
  const discriminator = Math.pow(b, 2) - 4 * a * c;
  if (discriminator < 0) {
    return "Немає дійсних коренів";
  } else if (discriminator > 0) {
    const x1 = (-b + Math.sqrt(discriminator)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminator)) / (2 * a);
    return { x1, x2 };
  } else if (discriminator === 0) {
    const x = -b / (2 * a);
    return { x };
  }
}
console.log(calcQuadraticEquation(2, -7, 6));
console.log(calcQuadraticEquation(16, -8, 1));
console.log(calcQuadraticEquation(0, -7, 6));
console.log(calcQuadraticEquation(1, 0, 36));
