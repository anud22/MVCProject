const openContribution = async (event) => {
    if (event.target.classList.contains('contribute-button')) {
        // Get the 'data-attr' value of the clicked button
        const dataAttrValue = event.target.dataset.attr;
        alert(dataAttrValue);
      }
    };
  

document
    .querySelector('.funds')
    .addEventListener('click', openContribution);