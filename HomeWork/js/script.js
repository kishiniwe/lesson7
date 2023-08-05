/* 
Створіть функцію-конструктор Calculator, який створює об’єкти з трьома
методами:
read() запитує два значення за допомогою prompt і запам’ятовує їх у
властивостях об’єкта.
sum() повертає суму цих властивостей.
mul() повертає результат множення даних властивостей.
 */

function Calculator() {

  this.read = function() {
    this.number1 = +prompt('number1?', 0);
    this.number2 = +prompt('number2?', 0);
  };

  this.sum = function() {
    return this.number1 + this.number2;
  };

  this.mul = function() {
    return this.number1 * this.number2;
  };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );