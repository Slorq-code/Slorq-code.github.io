
window.onload = sendApiRequest 


async function sendApiRequest(){
  let response = await fetch(`https://opentdb.com/api.php?amount=1&type=multiple`);
  console.log(response)
  let data = await response.json ()
  console.log (data)
  useApiData(data)

}


function useApiData(data){
  // informacion acerca de la pregunta y pregunta
   document.querySelector("#category").innerHTML = `Category: ${data.results[0].category}`
   document.querySelector("#difficulty").innerHTML = `Difficulty: ${data.results[0].difficulty}`
   document.querySelector("#questions").innerHTML = `Question: ${data.results[0].question}`
   // posibles respuestas
   document.querySelector("#answer1").innerHTML = data.results[0].incorrect_answers[1]
   document.querySelector("#answer2").innerHTML = data.results[0].incorrect_answers[0]
   document.querySelector("#answer3").innerHTML = data.results[0].correct_answer
   document.querySelector("#answer4").innerHTML = data.results[0].incorrect_answers[2]
}

// respuesta correcta!
let correctButton = document.querySelector("#answer3")
correctButton.addEventListener ("click",()=>{
 alert("¡Correct!")
 sendApiRequest()
})

// respuestas incorrectas

let otherButton1 = document.querySelector("#answer1")
otherButton1.addEventListener ("click", ()=>{
 alert ("try again!")
 sendApiRequest () 
})
let otherButton2 = document.querySelector("#answer2")
otherButton2.addEventListener ("click", ()=>{
 alert ("try again!")
 sendApiRequest () 
})
let otherButton4 = document.querySelector("#answer4")
otherButton4.addEventListener ("click", ()=>{
 alert ("try again!")
 sendApiRequest () 
})
