const inputAge = document.getElementById('age')
const male = document.getElementById('male')
const female = document.getElementById('female')
const weight = document.getElementById('weight')
const height = document.getElementById('height')
const button = document.getElementById('Calculate-btn')
const result = document.getElementById('result')
const resultText = document.getElementById('resultText')
const spanResult = document.getElementById('span-result')
const required1 = document.getElementById("required1")
const required2 = document.getElementById("required2")
const required3 = document.getElementById("required3")


const error = (element, condition) => {
    element.style.display = condition ? 'block' : 'none'
}


const Calculate = () => {


    const age = inputAge.value === ''
    const gender = !male.checked  && !female.checked
    const messure = weight.value === '' || height.value === ''


    error(required1, age)
    error(required2, gender)
    error(required3, messure)


    if (!age  && !gender && !messure) {
        build()
    }



    // if (inputAge.value == '' || weight.value == '' || height.value == '' || (male.checked == false && female.checked == false)) {
    //     required1.style.display = 'block'
    //     required2.style.display = 'block'
    //     required3.style.display = 'block'

    // } else {
    //     required1.style.display = 'none'
    //     required2.style.display = 'none'
    //     required3.style.display = 'none'

    //     build()
    // }

}

const build = () => {
    const heightValue = height.value
    const weightValue = weight.value
    const formula = Number(weightValue) / (Number(heightValue) / 100 * Number(heightValue) / 100)

    if (formula < 18.5) {
        resultArea = 'Underweight'
    } else if (18.5 <= formula && formula <= 24.9) {
        resultArea = 'Healthy'
    } else if (25 <= formula && formula <= 29.9) {
        resultArea = 'Overweight'
    } else if (30 <= formula && formula <= 34.9) {
        resultArea = 'Obese'
    } else if (35 <= formula) {
        resultArea = 'Extremely obese'
    }

    result.innerHTML = formula.toFixed(2)
    resultText.style.display = 'block'
    spanResult.innerhtml = resultArea



}
button.addEventListener('click', Calculate)