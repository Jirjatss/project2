let okButton = document.getElementById("button");
let submit = document.getElementById("submit");
let hasil = document.getElementById("hasil");
let form = document.getElementById("form");
let handles = document.getElementsByClassName("handle");

submit.addEventListener("click", function (event) {
  event.preventDefault();

  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);

  if (weight === "" || isNaN(weight) || weight <= 0) {
    weight_status = false;
  } else {
    weight_status = true;
  }

  if (height === "" || isNaN(height) || height <= 0) {
    height_status = false;
  } else {
    height_status = true;
  }

  if (height_status && weight_status) {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);

    if (BMI <= 18.5) {
      hasil.innerHTML = `Your BMI is ${BMI} which means you are Underweight`;
    } else if (BMI > 18.5 && BMI < 25) {
      hasil.innerHTML = `Your BMI is ${BMI} which means you are Normal`;
    } else if (BMI >= 25 && BMI < 30) {
      hasil.innerHTML = `Your BMI is ${BMI} which means you are Overweight`;
    } else {
      hasil.innerHTML = `Your BMI is ${BMI} which means you are Obesity`;
    }
  } else {
    hasil.style.color = "red";
    hasil.innerHTML = "Enter valid data";
    submit.classList.add("hide");
  }

  showAlert();
});

function showAlert() {
  okButton.classList.remove("hide");
  submit.classList.add("hide");
}

alertButton.addEventListener("click", showAlert);

function handler() {
  okButton.classList.add("hide");
  submit.removeEventListener();
  form.reset();
}

for (let i = 0; i < handles.length; i++) {
  handles[i].addEventListener("click", handler);
}

console.log(height);
