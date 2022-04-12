const app = {
    form : document.querySelector('form'),
    answer : document.querySelector('.name-answer'),
    repAnswer : document.querySelector('.authorization-answer'),

    init: function() {
        app.form.addEventListener('submit', app.noName);
    },

    noName : function(evt) {
        evt.preventDefault();

        let nomUser = document.querySelector('#lastname').value;
        let prenomUser = document.querySelector('#firstname').value; 
        let age = document.querySelector('#age').value;

        app.answer.textContent = prenomUser +" "+ nomUser;

        if(nomUser == "" || prenomUser == "" || age == "")  {
            window.alert("Erreur: Un champ est vide");
        } else{
            app.answer.textContent = prenomUser +" "+ nomUser;
            if(age < 16) {
                let childSoon = 16 - age;
                console.log(childSoon);
                app.repAnswer.innerHTML = "Trop jeune pour s'inscrire <br> Inscription possible dans " +childSoon+ " ans";
            } else if(age >= 16 && age <= 18) {
                app.repAnswer.textContent = 'Inscription possible en conduite accompagnée';
            } else {
                app.repAnswer.textContent = 'Inscription possible';
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', app.init);