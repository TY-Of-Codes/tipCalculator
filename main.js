let billEl = document.querySelector('#bill');
let noOfPeopleEl = document.querySelector('#people');
let tipPercentages = document.querySelectorAll('.btn');
let tipAmountPerPersonEl = document.querySelector('#tip-amount');
let totalAmountPerPersonEl = document.querySelector('.tip-amount');
let resetEl = document.querySelector('.reset-btn');
let customEl = document.querySelector('.custom')

let billAmount = 0;
let noOfPeople = 0;
let tipPercentage = 0;

billEl.addEventListener('keyup', e => {
    billAmount = Number(e.target.value);
    calculation()
})

noOfPeopleEl.addEventListener('keyup', e => {
    noOfPeople = Number(e.target.value);
    calculation()
})

Array.from(tipPercentages).forEach(button => {
    button.addEventListener('click', e => {
        if (e.target.innerText.includes('%')) {
            tipPercentage = Number(e.target.innerText.replace('%', ''));
            calculation()
        }
    })
});


function calculation() {
    let tipAmount = billAmount * (tipPercentage / 100);
    let totalAmount = tipAmount + billAmount;
    let tipAmountPerPerson = tipAmount / noOfPeople;
    let totalAmountPerPerson = totalAmount / noOfPeople;


    updatevalues({
        tipAmountPerPerson,
        totalAmountPerPerson
    });
}

function updatevalues({ tipAmountPerPerson, totalAmountPerPerson }) {
    tipAmountPerPersonEl.innerText =
        tipAmountPerPerson == Infinity ? 0 : tipAmountPerPerson.toFixed(2);
    totalAmountPerPersonEl.innerText =
        totalAmountPerPerson == Infinity ? 0 : totalAmountPerPerson.toFixed(2);
}

customEl.addEventListener('click', e => {
    tipPercentage = prompt("Input Number");
    calculation();
})

resetEl.addEventListener('click', e => {
    location.reload();
})

// if (billAmount == 0 || noOfPeople == 0) {
//     alert("Value can not be zero");
// }