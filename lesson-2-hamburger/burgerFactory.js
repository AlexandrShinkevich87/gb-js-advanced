class Param {
    /**
     *
     * value - название свойства
     * price - цена
     * calories - калорийность
     * @param element - аттрибуты input'а
     */
    constructor(element) {
        this.name = element.value;
        this.price = +element.dataset['price']; // dataset взять data аттрибут: data-price
        this.calories = +element.dataset['calories'];
    }
}

class Burger {
    /**
     *
     * @param size размер
     * @param add начинка, состав бургера
     * @param topping стоимость
     */
    constructor(size, add, topping) {//add - состав
        this.size = new Param(this._select(size));
        this.add = new Param(this._select(add));
        this.toppings = this._getToppings(topping);
    }

    _getToppings(name) {
        let result = [];
        this._selectAll(name).forEach(input => result.push(new Param(input)))
        return result;
    }

    /**
     * вернем выбранный input
     * @param name
     * @returns {Element}
     * @private
     */
    _select(name) {
        return document.querySelector(`input[name=${name}]:checked`);
    }

    /**
     * вернем все отмеченные checkbox
     * @param name
     * @returns {NodeListOf<Element>}
     * @private
     */
    _selectAll(name) {
        // return [...document.querySelectorAll(`input[name=${name}]:checked`)]; // вернет массив
        return document.querySelectorAll(`input[name=${name}]:checked`); // вернет коллекцию
    }

    _sumPrice() {
        //console.log(this.toppings);
        // стоимость за размер и за начинку
        let result = this.size.price + this.add.price;
        this.toppings.forEach(el => result += el.price);
        return result;
    }

    _sumCalories() {
        let result = this.size.calories + this.add.calories;
        this.toppings.forEach(el => result += el.calories);
        return result;
    }

    showSum(price, calories) {
        document.querySelector(price).textContent = this._sumPrice();
        // document.querySelector(price).innerHTML = this._sumPrice();
        document.querySelector(calories).textContent = this._sumCalories();
    }
}