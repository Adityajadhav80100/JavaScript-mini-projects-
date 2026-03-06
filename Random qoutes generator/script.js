const qoutes = [
    "The best way to predict the future is to create it.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Don't watch the clock; do what it does. Keep going.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Believe you can and you're halfway there." ,
    "The future belongs to those who believe in the beauty of their dreams.",
    "The only way to do great work is to love what you do.",
    "Don't be afraid to give up the good to go for the great.",
    "Success is not in what you have, but who you are.",
    "The harder you work for something, the greater you'll feel when you achieve it." ,
    "Dream big and dare to fail.",
    "The only place where success comes before work is in the dictionary.",
    "Success is not about how much money you make, it's about the difference you make in people's lives.",
    "The secret of success is to do the common thing uncommonly well.",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    "The road to success and the road to failure are almost exactly the same.",
    "Success is not measured by what you accomplish, but by the opposition you have encountered, and the courage with which you have maintained the struggle against overwhelming odds.",
    "  Success is not about being the best. It's about always getting better.",
    "Success is not about how high you have climbed, but how you make a positive difference to the world.",
    "The only limit to our realization of tomorrow will be our doubts of today."    
]  

const button = document.querySelector('button') ;
const qoute = document.querySelector('h2') ;


button.addEventListener('click' , ()=>{
 const index = Math.floor(Math.random()*qoutes.length);

 qoute.textContent = qoutes[index];
}
)