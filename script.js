let taxInput = document.querySelectorAll('.tax-counter__input')
let income = document.querySelector('.tax-income')
let psd = document.querySelector('.tax-psd')
let vsd = document.querySelector('.tax-vsd')
let gpm = document.querySelector('.tax-gpm')
let totalTax = document.querySelector('.total-tax')
let afterTax = document.querySelector('.after-tax')
let totalDays = document.querySelector('.tax-dd')
let workedDays = document.querySelector('.tax-wd')
let earnsBeforeTax = document.querySelector('.beforeTax')

for (let i = 0; i < taxInput.length; i++) {
  taxInput[i].addEventListener('keyup', function () {
    earnsBeforeTax.value = (600 / totalDays.valueAsNumber ) * workedDays.valueAsNumber
    let index = income.valueAsNumber * .7/ 2
    psd.valueAsNumber = 400 * 0.09
    vsd.valueAsNumber = index * 0.309
    gpm.valueAsNumber = income.valueAsNumber * 0.7 * 0.05
    totalTax.value = psd.valueAsNumber + vsd.valueAsNumber + gpm.valueAsNumber
    afterTax.valueAsNumber = income.valueAsNumber - totalTax.valueAsNumber
  })

}
