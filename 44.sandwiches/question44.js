/* Sandwiches: Write a function that accepts a array of items a person wants
on a sandwich. The function should have one parameter that collects as many
items as the function call provides, and it should print a summary of the sandwich
that is being ordered. Call the function three times, using a different number
of arguments each time.*/
function make_sandwich(items) {
    console.log("The sandwich should consist of following items: ".concat(items.join(', '), "."));
}
make_sandwich(['cheese', 'pepper', 'chicken']);
make_sandwich(['cheese', 'tomato', 'beef']);
make_sandwich(['cheese', 'pepper', 'tomato', 'chicken', 'spicy']);
