const allInputs = document.querySelectorAll('#inputs-container input')
const allUnits = document.querySelectorAll('#unit-buttons .unit')

const inputAllSides = document.querySelector('#allInputs')

let valueUnit = 'px'

allUnits.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList[1] != valueUnit) changeUnit(button)
  })
})

inputAllSides.addEventListener('input', changeAllSides)

allInputs.forEach(input => input.addEventListener('input', updateSquare))

function updateSquare(e) {
  inputAllSides.value = ''
  inputAllSides.placeholder = 'Custom'

  const inputSide = e.target.classList[0]
  const inputValue = e.target.value

  const borderSide = `border${inputSide}Radius`

  return squareBlock.style[borderSide] = `${inputValue}${valueUnit}`
}

function changeAllSides() {
  allInputs.forEach(input => {
    const inputAllValue = inputAllSides.value
    inputAllSides.placeholder = `0${valueUnit}`
  
    const inputSide = input.classList[0]
    const borderSide = `border${inputSide}Radius`
    
    input.value = inputAllValue
    return squareBlock.style[borderSide] = `${inputAllValue}${valueUnit}`
  })
}

function changeUnit(unit) {
  allUnits.forEach(button => button.classList.remove('active'))

  valueUnit = unit.classList[1]
  
  allInputs.forEach(input => input.placeholder = `0${valueUnit}`)
  inputAllSides.placeholder = `0${valueUnit}`

  changeAllSides()
  
  return unit.classList.add('active')
}