let form = document.getElementById('form')
form.addEventListener('submit', function(event) {
event.preventDefault(); 

    
let success = document.getElementById('msg')
success.classList.remove('hidden');


    this.reset();
});
