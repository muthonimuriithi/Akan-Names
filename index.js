var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var maleNames = ["Kwasi", "Kudwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

function findDay() {
    var dateBorn = document.getElementById("dateInput").value;
    var date = new Date(dateBorn);
    var findDay = date.getDay();

    var getGender = document.getElementsByName("gender");

    var gender_value;
    for(i = 0; i < getGender; i++) {
        if(getGender[0].checked) {
            gender_value = "female";
        }
        if(getGender[1].checked) {
            gender_value = "male";
        }
    }
    
    switch (gender_value) {
        case "female":
            if(findDay == 0){
                document.getElementById("output").innerHTML = "You were born on" + dayOfWeek[0] + "and your Akan is" + femaleNames[0];
            }
            if(findDay == 1){
                document.getElementById("output").innerHTML = "You were born on" + dayOfWeek[1] + "and your Akan is" + femaleNames[1];
            }
            if(findDay == 2){
                document.getElementById("output").innerHTML = "You were born on" + dayOfWeek[2] + "and your Akan is" + femaleNames[2];
            }
            if(findDay == 3){
                document.getElementById("output").innerHTML = "You were born on" + dayOfWeek[3] + "and your Akan is" + femaleNames[3];
            }
            if(findDay == 4){
                document.getElementById("output").innerHTML = "You were born on" + dayOfWeek[4] + "and your Akan is" + femaleNames[4];
            }
            if(findDay == 5){
                document.getElementById("output").innerHTML = "You were born on" + dayOfWeek[5] + "and your Akan is" + femaleNames[5];
            }
            if(findDay == 6){
                document.getElementById("output").innerHTML = "You were born on" + dayOfWeek[6] + "and your Akan is" + femaleNames[6];
            }
            
            break;
            case "male":
                if(findDay == 0){
                    document.getElementById("output").innerHTML = "You were born on" + dayOfWeek[0] + "and your Akan is" + maleNames[0];
                }
                if(findDay == 1){
                    document.getElementById("output").innerHTML = "You were born on" + dayOfWeek[1] + "and your Akan is" + maleNames[1];
                }
                if(findDay == 2){
                    document.getElementById("output").innerHTML = "You were born on" + dayOfWeek[2] + "and your Akan is" + maleNames[2];
                }
                if(findDay == 3){
                    document.getElementById("output").innerHTML = "You were born on" + dayOfWeek[3] + "and your Akan is" + maleNames[3];
                }
                if(findDay == 4){
                    document.getElementById("output").innerHTML = "You were born on" + dayOfWeek[4] + "and your Akan is" + maleNames[4];
                }
                if(findDay == 5){
                    document.getElementById("output").innerHTML = "You were born on" + dayOfWeek[5] + "and your Akan is" + maleNames[5];
                }
                if(findDay == 6){
                    document.getElementById("output").innerHTML = "You were born on" + dayOfWeek[6] + "and your Akan is" + maleNames[6];
                }
    
        default:
            break;
    }
    var form = document.getElementById("form");
  function handleForm(event) {
    event.preventDefault();
  }
  form.addEventListener("submit", handleForm);

}
























