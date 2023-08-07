let fundId;
let fundsContainer = $('.funds');
let pledgeBtn = $('#pledge-button');
let moneyInput = $('#money');
let createFundForm = $('#createFund');

const openContribution = function (event) {
  // Get the 'data-attr' value of the clicked button
  const dataAttrValue = event.target.dataset.attr;
  fundId = dataAttrValue;
};

const submitFund = async function (event) {
  event.preventDefault();

  const title = createFundForm.find('input[name="title"]').val().trim();
  const categoryId = createFundForm.find('select[name="categoryId"]').val();
  const description = createFundForm.find('textarea[name="description"]').val().trim();
  const targetVal = createFundForm.find('input[name="targetVal"]').val().trim();
  if (title === '' || categoryId === 'Select fund category' || description === '' || targetVal === '') {
    alert('Please fill in all the required fields.');
    return;
  }
  const formData = new FormData(createFundForm[0]);
  try {
    const response = await fetch('/fund', {
      method: 'POST',
      body: formData
    });
    if (response.ok) {
      // Successful form submission
      console.log('Form successfully submitted');
      
      // Redirect to the homepage
      window.location.href = '/';
    }
  } catch (error) {
    console.error('An error occurred:', error);
    throw new error(error);
  }
}

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
createFundForm.on('submit', submitFund);