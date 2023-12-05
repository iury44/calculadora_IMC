import { Modal } from "./modal.js"
import {AlertError} from './alert-error.js'
import {calculateIMC,notNumber} from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

inputHeight.oninput = ()=> AlertError.close()
inputWeight.oninput = ()=> AlertError.close()



form.onsubmit = (e) => {
  e.preventDefault()

  const weight = Number(inputWeight.value)
  const height = Number(inputHeight.value)
  
  const weightOrHrightNotANumber = notNumber(weight) || notNumber(height)
  if(weightOrHrightNotANumber){
    AlertError.open()
    return;
  }


  const result = calculateIMC(weight,height)
  displayResultMessage(result)

}
Modal.buttonClose.onclick = ()=>{
  Modal.close()

}

function displayResultMessage(result){
  let message = `Seu IMC é de ${result}`
 
  Modal.message.innerText = message
  Modal.open()
}

