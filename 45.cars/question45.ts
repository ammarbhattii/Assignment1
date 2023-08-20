/*45. Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name. It
should then accept an arbitrary number of keyword arguments. Call the function
with the required information and two other name-value pairs, such as a
color or an optional feature. 
Print the Object that’s returned to make sure all the information was
stored correctly.*/

function create_car(manufacturer, model, ... options) {
    const car = {
        manufacturer,
        model,
    }

    for (let i = 0; i < options.length; i += 2) {
        const key = options[i];
        const value = options[i + 1];
        car[key] = value;
      }
    
      return car;
    }

let carInfo = create_car("Suzuki", "swift", "color","white", "year",200);

console.log(carInfo)