var Name = document.getElementById('Name')
var phone = document.getElementById('phone')
var btn = document.getElementById('btn');
var cards = document.querySelector('.cards');
var Male = document.getElementById('Male')
var Female = document.getElementById('Female')
var html = document.getElementById('html')
var css = document.getElementById('css')
var javascript = document.getElementById('javascript')
var form = document.querySelector('form');
var selectImage;

var image = function (e) {
  selectImage = URL.createObjectURL(event.target.files[0]);
};
btn.addEventListener('click', function () {
  let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  let values = []
  checkboxes.forEach((checkbox) => {
    values.push(checkbox.value);
  });

  if (!Name.value || !Email.value ) {
    alert('Please enter all fields!')
  }
  else {
    cards.innerHTML += `
  <div class="card">
  <div class="card-body">
  <h4 class="title"> Name: ${Name.value}</h4>
  <p class="text"> Email: ${Email.value}</p>  
  <p class="text"> Gender: ${Male.checked ? Male.value : Female.checked ? Female.value : 'Others'}</p>
  
  
  
  <p class="text"> Skills: ${values}</p>
  </div>
  <div class="image">
      <img src='${selectImage}' alt="Image">
    </div>
  </div>`

    alert(' Student Enrolled Successfully ')
    
  }
});