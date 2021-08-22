// button 
const memory1button = document.getElementById('memory1-button')
const memory2Button = document.getElementById('memory2-button')
const storage1Button = document.getElementById('storage1-button')
const storage2Button = document.getElementById('storage2-button')
const storage3Button = document.getElementById('storage3-button')
const delivery1Button = document.getElementById('delivery1-button')
const delivery2Button = document.getElementById('delivery2-button')

//input
const memoryInput = document.getElementById('memory-input')
const storageInput = document.getElementById('storage-input')
const deliveryInput = document.getElementById('delivery-input');
const bestPrice = document.getElementById('best-price')
const totalField = document.getElementById('total')
const finalPrice = document.getElementById('final-price')

// update total 
function updateTotal() {
    const memoryField = parseFloat(memoryInput.innerText);
    const storageField = parseFloat(storageInput.innerText);
    const deliveryField = parseFloat(deliveryInput.innerText);
    const bestPriceField = parseFloat(bestPrice.innerText);
    const grandTotal = memoryField + storageField + deliveryField;
    const totalField = grandTotal + bestPriceField;
    total.innerText = totalField;
}



// memory 
memory1button.addEventListener('click', function () {
    memoryInput.innerText = 0;
    updateTotal()
})
memory2Button.addEventListener('click', function () {

    memoryInput.innerText = parseInt(180);
    updateTotal()
})

// storage 
storage1Button.addEventListener('click', function () {
    storageInput.innerText = 0;
})

storage2Button.addEventListener('click', function () {
    storageInput.innerText = 100;
    updateTotal()
})

storage3Button.addEventListener('click', function () {
    storageInput.innerText = 180;
    updateTotal()
})
// delivery 

delivery1Button.addEventListener('click', function () {
    deliveryInput.innerText = 0;
    updateTotal()
})

delivery2Button.addEventListener('click', function () {
    deliveryInput.innerText = 20;
    updateTotal()
})


// promo code apply
document.getElementById('apply-button').addEventListener('click', function () {
    const promoCode = document.getElementById('promo-code').value;
    const totalField = document.getElementById('total').innerText;
    const totalAmount = parseFloat(totalField);
    if (promoCode == "stevekaku") {
        const discount = (totalAmount / 100) * 20;
        finalPrice.innerText = totalField - discount;

    }
    document.getElementById('promo-code').value = '';
})