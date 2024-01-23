const header = document.querySelector("h5");
const span = document.querySelector("span");
const para = document.querySelector("p");
const input = document.getElementById('input-field');
const searchButton = document.getElementById('submit-btn');


function searchName() {
    const name = input.value.trim();

    if (name !== '') {
        const apiUrl = `https://api.nationalize.io/?name=${name}`;
    
        function successFunc(response) {
            console.log(response)
            header.innerText = `Name: ${response.name}`;
            span.innerText = `Count: ${response.count}`;
            para.innerText = `Country: ${response.country}`;
        }
        
        function errorFunc(error) {
            console.log(error, 'Error fetchimg data')
        }

        fetch(apiUrl)
        .then(function(resp) {
            return resp.json()
        })
        .then(successFunc)
        .catch(errorFunc)
    } else {
        header.textContent = 'Please enter a valid name.';
    }

}

searchButton.addEventListener('click', searchName)

