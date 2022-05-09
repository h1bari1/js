// ДЗ 3. Странный калькулятор
//
// 1) с помощью promt спрашиваем у пользователя что он хочет сделать (+ - / *). Спрашиваем до тех пор пока он введет допустимое значение
//
// 2) спрашиваем сколько операндов он хочет использовать. Это должно быть число больше 1. Спрашиваем пока пользователь не введет допустимое значение
//
// 3) спрашиваем у пользователя каждый операнд. Это должно быть число. Спрашиваем пока пользователь не введет допустимое значение
//
// 4) С помощью alert или console.log выводим результат действия (+ - / *) со всеми операндами


var operator = ""
var operandCount = null
var operand;
var res = null;
console.log(operator)
while (true) {
    operator = prompt("Enter operator+");
    operandCount = +prompt("Count operand?");
    if (operator == "+" || operator == "-" || operator == "/" || operator == "*") {
        if (operandCount > 1) {
            break
        } else {
            console.log("Need more operands")
        }
    }
}
for (var i = 0; i < operandCount; i++) {
    operand = +prompt(`Enter operand ${i + 1}`);
    if(operator == "+"){
        res += operand
    }else if(operator == "-"){
        res -= operand
    }


}
console.log(res)

