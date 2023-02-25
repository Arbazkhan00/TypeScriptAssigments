function car_info(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var i = 0; i < options.length; i += 2) {
        car[options[i]] = options[i + 1];
    }
    return car;
}
var car1 = car_info("Toyota", "Corolla", "color", "red", "year", 2020);
console.log(car1);
var car2 = car_info("Honda", "Civic", "color", "blue", "transmission", "automatic", "year", 2022);
console.log(car2);
