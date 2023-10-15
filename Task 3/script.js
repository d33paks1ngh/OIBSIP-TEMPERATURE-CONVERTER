document.getElementById("convert").addEventListener("click", function () {
  const celsiusInput = document.getElementById("celsius");
  const fahrenheitInput = document.getElementById("fahrenheit");

  let celsius = parseFloat(celsiusInput.value);
  let fahrenheit = parseFloat(fahrenheitInput.value);

  if (!isNaN(celsius)) {
    // Convert Celsius to Fahrenheit
    fahrenheit = (celsius * 9) / 5 + 32;
    fahrenheitInput.value = fahrenheit.toFixed(2); // Limit to 2 decimal places
  } else if (!isNaN(fahrenheit)) {
    // Convert Fahrenheit to Celsius
    celsius = ((fahrenheit - 32) * 5) / 9;
    celsiusInput.value = celsius.toFixed(2);
  } else {
    alert("Please enter a valid temperature.");
  }
});
