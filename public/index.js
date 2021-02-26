const allInputs = document.querySelectorAll('#inputs-container input')
const inputAllSides = document.querySelector('#allInputs')

inputAllSides.addEventListener('input', allSides)
for ( input of allInputs ) inputFunctionalities(input)

function inputFunctionalities(input) {
  input.addEventListener('input', updateSquare)

  function updateSquare(e) {
    inputAllSides.value = ''
    inputAllSides.placeholder = 'Custom'

    const squareBlock = document.querySelector('#squareBlock')

    const inputSide = e.target.classList[0]
    const inputValue = e.target.value

    const borderSide = `border${inputSide}Radius`

    return squareBlock.style[borderSide] = `${inputValue}px`
  }
}

function allSides() {
  allInputs.forEach(input => {
    const inputAllValue = inputAllSides.value
    inputAllSides.placeholder = 'All sides'
  
    const inputSide = input.classList[0]
    const borderSide = `border${inputSide}Radius`
    
    input.value = inputAllValue
    return squareBlock.style[borderSide] = `${inputAllValue}px`

  })
}