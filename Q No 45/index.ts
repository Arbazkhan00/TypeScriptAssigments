interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
  }
  
  function car_info(manufacturer: string, model: string, ...options: any[]): Car {
    let car: Car = {
      manufacturer: manufacturer,
      model: model
    };
  
    for (let i = 0; i < options.length; i += 2) {
      car[options[i]] = options[i + 1];
    }
  
    return car;
  }
  
  let car1 = car_info("Toyota", "Corolla", "color", "red", "year", 2020);
  console.log(car1);
  
  let car2 = car_info("Honda", "Civic", "color", "blue", "transmission", "automatic", "year", 2022);
  console.log(car2);
  