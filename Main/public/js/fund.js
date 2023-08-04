let fundId;
let fundsContainer = $('.funds');
let pledgeBtn = $('#pledge-button');
let moneyInput = $('#money');

const openContribution = function (event) {
  // Get the 'data-attr' value of the clicked button
  const dataAttrValue = event.target.dataset.attr;
  fundId = dataAttrValue;
};

const addDonation = async (event) => {
  const donationAmount = moneyInput.val().trim();
  const regex = /^[0-9.]+$/;
  if (!regex.test(donationAmount)) {
    // Display the error message if donation amount contains invalid characters
    alert('Amount is not correct');
    return;
  }
  const response = await fetch('/api/contribution', {
    method: 'POST',
    body: JSON.stringify({ fundId, donationAmount }),
    headers: { 'Content-Type': 'application/json' },
  });
  console.log(response.status());

  if (!response.ok) {
    alert('Failed to add donation.');
  } else {
    //Render the funds
    await fetch('/category/' + fundId, {
      method: 'GET',

    })
  }
}

fundsContainer.on('click', '.contribute-button', openContribution);
pledgeBtn.on('click', addDonation);