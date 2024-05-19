function convertTemperature() {
            let celsius = document.getElementById("celsius").value; 
            let result = document.getElementById("result");
            if (celsius === "") 
            { 
                result.textContent = ""; 
            } 
            else 
            {
                let fahrenheit = (celsius * 9 / 5) + 32; 
                fahrenheit =fahrenheit.toFixed(2); 
                result.textContent ="Fahrenheit: " + fahrenheit;
            }
        }