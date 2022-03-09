var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
 var maleNames = ["Kwasi", "Kudwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
 var results = document.getElementById("output");
 var male = document.getElementById("male");
    var female = document.getElementById("female");




 function findDay() {

 var dateBorn = document.getElementById("dateInput").value;
    var date = new Date(dateBorn);
    var findDay = date.getDay();

    // 
    if(male.checked == true ){
         let showResult = results.innerHTML = "Your Akan Name is " +maleNames[findDay]
        alert(showResult);
    }
    else if(female.checked == true) {
        let showResult = results.innerHTML = "Your Akan Name is " +femaleNames[findDay]
        alert(showResult);
    }
    

}

    

























