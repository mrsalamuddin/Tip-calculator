
function calculateTip() {
  let billAmount = document.getElementById('billAmount').value;
  let serviceQuality = document.getElementById('serviceQuality').value;
  let numPeople = document.getElementById('numPeople').value;

  if(billAmount === '' || serviceQuality === '0' || numPeople === '') {
    alert('Please fill out all fields.');
    return;
  }

  let total = (billAmount * serviceQuality) / numPeople;
  total = total.toFixed(2);

  document.getElementById('tipAmount').textContent = 'Tip Amount: $' + total + ' each';
}
