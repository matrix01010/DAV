$(document).ready(function () {
    getData();
});
function getData() {
    let localStorageData = localStorage.getItem("student");
    let studentObj = JSON.parse(localStorageData);
    console.log(studentObj);
    $("#firstName").text(studentObj.firstName);
    $("#lastName").text(studentObj.lastName);
    $("#mobile").text(studentObj.mobile);
    $("#city").text(studentObj.city);
    $("#mail").text(studentObj.mail);
    $("#password").text(studentObj.password);

}