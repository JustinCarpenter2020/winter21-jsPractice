// Write a function that logs 1-100

// function log(){
//   for(let i = 100; i >= 1; i-- ){
//     console.log(i)
//   }
// }

// log()


let score = 0
let disabled = false

// function scoreSinglePoint(){
//   score++
//   console.log(score)
// }

// function scoreThreePoints(){
//   score += 3
//   console.log(score)
// }

function incrementScore(num){
score += num
console.log(score)
document.getElementById('score').innerText = `${score}`
}


const names = ['Mark', 'Jake', 'Harrison', 'Mick', 'Justin', 'Brittany', 'Jonesy']

// function getMarkName(){
//   console.log(names[0])
// }

// function getJakesName(){
//   console.log(names[1])
// }


function getName(index){
  console.log(names[index])
}


function disableIncrementButton(){
  disabled = !disabled
  if(disabled){
    // @ts-ignore
    document.getElementById('increment').disabled = true
  } else{
    // @ts-ignore
    document.getElementById('increment').disabled = false
  }
}

function blue(color){
  document.getElementById('body').style.backgroundColor = color
}



