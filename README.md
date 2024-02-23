## JavaScript-Projects

## This project mainly focus on javascript
## Solution code

# 1.BMI Calculator
```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

```

#Color Changer
```javascript
const buttons =document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  // console.log(button);

  button.addEventListener('click', function(e){
   
   if(e.target.id === "grey"){
    body.style.backgroundColor = e.target.id;
   }
   if(e.target.id === "yellow"){
    body.style.backgroundColor = e.target.id;
   }
   if(e.target.id === "white"){
    body.style.backgroundColor = e.target.id;
   }
   if(e.target.id === "blue"){
    body.style.backgroundColor = e.target.id;
   }
   if(e.target.id === "green"){
    body.style.backgroundColor = e.target.id;
   }
   if(e.target.id === "pink"){
    body.style.backgroundColor = e.target.id;
   }
  })
});

```
