function getComputerChoice (){
    const choices = ['rock', 'paper', 'scissors'];
    //This line creates an array called choices containing three elements: 'rock', 'paper', and 'scissors'. 
    //These represent the three possible options in the rock-paper-scissors game.
    return choices[Math.floor(Math.random() * choices.length)];
    /*
    - Math.random() generates a random number between 0 (inclusive) and 1 (exclusive). This means it can produce a decimal number like 0.354 or 0.789.

    - choices.length returns the number of elements in the choices array, which is 3 in this case.

    - Math.random() * choices.length generates a random number between 0 and 3 (exclusive), effectively giving us a decimal number between 0 and 2.999.
        Question? : Is there a chance that number 0 will be picked as a random number?
        Answer: No, in the provided code, the expression Math.random() generates a random number between 0 (inclusive) and 1 (exclusive), which means it can produce any decimal number greater than or equal to 0, but less than 1.

                Since Math.random() is designed this way, it will never return exactly 0. However, it can generate extremely small decimal numbers very close to 0, but not 0 itself. These values are typically in the range of 5.0e-324 in JavaScript, which is the smallest positive number representable in the language.

                So, in practical terms, while it's theoretically possible to get an extremely small number close to 0, it is exceedingly rare and not something you need to worry about in most practical scenarios. For all intents and purposes, you can treat the result of Math.random() as a random number greater than 0 and less than 1.

    - Math.floor(...) rounds down this decimal number to the nearest whole number. So, if Math.random() produces, say, 2.345, Math.floor(2.345) would result in 2.

    - Finally, choices[Math.floor(Math.random() * choices.length)] retrieves an element from the choices array using the randomly generated index. This means it randomly selects one of the three elements ('rock', 'paper', or 'scissors').
    */
}
