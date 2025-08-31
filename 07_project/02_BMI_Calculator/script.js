const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

//when we submit the form ,it submit either in post or get method.
form.addEventListener('submit', function(e) {
    e.preventDefault(); //to prevent the default behaviour of form submission

    const height = parseInt(document.querySelector('#height').value); //here we take the value of height.
    const weight = parseInt(document.querySelector('#weight').value); //here we take the value of weight.
    const results = document.querySelector('#results');
    const message = document.querySelector('#msg');

    if (height === '' || isNaN(height) || height <= 0) {
        results.innerHTML= `Please enter a valid height ${height}`;
    }else if (weight === '' || isNaN(weight) || weight <= 0) {
        results.innerHTML = `Please enter a valid weight ${weight}`;
    }else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result:
        results.innerHTML = `<span>${bmi}</span>`;

    if(bmi<=18.6){
        message.innerHTML = `<p>Your are Underweight</p>`;
    }else if(bmi>18.6 && bmi<=24.9){
        message.innerHTML = `<p>Your have Normalweight</p>`;
    }else{
        message.innerHTML = `<p>Your are Overweight</p>`;
    }
}
});