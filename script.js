let form=document.getElementById("form");
let date=document.forms["form"]["day"];
let month=document.forms["month"]["month"];
let year=document.forms["year"]["year"];


var get = function (y, m, d, h) {
    var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var maleName = ["Kwasi", "Kudwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var d = new Date(y, --m, d);

    if (h === "female") {
        return d && femaleName[d.getDay()];
    } else {
        return d && maleName[d.getDay()];
    }
}

$(document).ready(function () {
    $("form#form").submit(function (event) {
        event.preventDefault();
        var y = parseInt($("#year").val());
        var d = parseInt($("#date").val());
        var m = parseInt($("#month").val());
        var h = $("input:radio[name=gender]:checked").val();
        var result = get(y, m, d, h);
        alert("Your Akan Name is: " + result);

    });
});






















}