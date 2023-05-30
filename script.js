$(document).ready(function () {
    $("#btnAddStudent").click(function () {
        function getStudentData() {
            let student = {
                firstName: $("#firstName").val(),
                lastName: $("#lastName").val(),
                mobile: $("#mobile").val(),
                city: $("#city").val(),
                mail: $("#mail").val(),
                password: $("#password").val(),
            };
            return student;
        }
        function storeDataToLocalStorage() {
            if (!localStorage.getItem('student')) {
                localStorage.setItem('student', JSON.stringify(getStudentData()));

            }
            else {
                localStorage.removeItem('student');
                localStorage.setItem('student', JSON.stringify(getStudentData()));
            }

        }
        storeDataToLocalStorage();
        window.location.href = "display.html"
    });
});