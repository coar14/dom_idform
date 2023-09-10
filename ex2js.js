const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const firstName = document.getElementById('firstName-input').value;
  const lastName = document.getElementById('lastName-input').value;
  const birthdate = document.getElementById('birthdate-input').value;
  const address = document.getElementById('address-input').value;
  const photo = document.getElementById('photo-input').files[0];

  function isValidInput(inputValue) {
    return inputValue.trim() !== '' && /^[A-Za-z\s]+$/.test(inputValue);
  }
  
  if (!isValidInput(firstName) || !isValidInput(lastName) || !isValidInput(address) || birthdate.trim() === '' ||!photo) {
    alert('Please provide valid information.');
    form.reset();
    return;
  }
  
  const formStyle = `
      font-family: "Audiowide", sans-serif;
      background: #AED2FF;  
      padding: 45px;
      border-radius: 50px;
      margin-left: 50px;
      display: flex;
      align-items: flex-start;
      box-shadow: rgba(0, 145, 255, 0.3) 0px 15px 15px 15px, rgba(172, 219, 255, 0.15) 0px 10px 30px 10px; 
  `;

  const userInfo = `
    <img src="${URL.createObjectURL(photo)}" alt="User's Photo" width="200" style="border: 5px solid #19A7CE; border-style: double">
    <div style="margin-left: 30px;font-family: "Sego">
      <h2 style="color: #337CCF">
      Welcome To The Unknown, ${firstName}.</h2> 
      <p style="font-size: 14pt; font-family: 'Arial', serif; background-color: #2CD3E1; color:#1D267D">
      Name: ${firstName} ${lastName} <br>
      Birthdate: ${birthdate} <br>
      Address: ${address}</p>
    </div>
  `;
  
  displaySection.style.cssText = formStyle;
  displaySection.innerHTML = userInfo;
});
