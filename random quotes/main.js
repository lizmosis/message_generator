// Alien Generator

function randomNumberGenerator(num){ 
    return Math.floor(Math.random()* num)
}

const chooseAlien = {
    myName: ['Glorbus', 'Xina', 'Cicero', 'Maximus', 'Astra', 'Seren', 'Mark'],
    myPlanet: ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'],
    myBodyParts: ['4 antennae', 'endless tentacles', 'spiky scales', 'long whiskers', 'one big eye', 'slimy skin', '8 legs', '20 eyes', 'knobbly knees'],
    myPower: ['shoot lasers', 'read minds', 'use x-ray vision', 'shapeshift', 'turn invisible', 'speak spanish', 'make an excellent spag bol']
}

let newAlien = []

for(let choice in chooseAlien){
    let option = randomNumberGenerator(chooseAlien[choice].length)
   switch(choice){
       case 'myName' : newAlien.push(`I, ${chooseAlien.myName[option]}, `)
       break;
       case 'myPlanet' : newAlien.push(`from planet ${chooseAlien.myPlanet[option]}, `)
       break;
       case 'myBodyParts' : newAlien.push(`have ${chooseAlien.myBodyParts[option]} `)
       break;
       case 'myPower' : newAlien.push(`and will ${chooseAlien.myPower[option]} when threatened.`)
       break;
   }
}

console.log(newAlien.join(""))