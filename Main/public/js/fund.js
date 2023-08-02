var fundsContainer = $('.funds');
const openContribution = async (event) => {
    if (event.target.classList.contains('contribute-button')) {
        // Get the 'data-attr' value of the clicked button
        const dataAttrValue = event.target.dataset.attr;
       alert(dataAttrValue);
      }
    };
  
    fundsContainer.on('click', '.contribute-button', playTrailer);