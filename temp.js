function convertTemperature() {
    var inputTemperature = document.getElementById("inputTemperature").value;
    var inputUnit = document.getElementById("inputUnit").value;
    var outputUnit = document.getElementById("outputUnit").value;
    var outputTemperature = document.getElementById("outputTemperature");

    if (inputUnit === outputUnit) {
        outputTemperature.value = inputTemperature;
        return;
    }

    if (inputUnit === "celsius") {
        if (outputUnit === "fahrenheit") {
            outputTemperature.value = (inputTemperature * 9/5) + 32;
        } else if (outputUnit === "kelvin") {
            outputTemperature.value = parseFloat(inputTemperature) + 273.15;
        }
    } else if (inputUnit === "fahrenheit") {
        if (outputUnit === "celsius") {
            outputTemperature.value = (inputTemperature - 32) * 5/9;
        } else if (outputUnit === "kelvin") {
            outputTemperature.value = (parseFloat(inputTemperature) + 459.67) * 5/9;
        }
    } else if (inputUnit === "kelvin") {
        if (outputUnit === "celsius") {
            outputTemperature.value = parseFloat(inputTemperature) - 273.15;
        } else if (outputUnit === "fahrenheit") {
            outputTemperature.value = (parseFloat(inputTemperature) *9)
        }
    }
}