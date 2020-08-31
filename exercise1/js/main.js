function msg() {
    var email = document.getElementById("email").value;
    var pwd = document.getElementById("password").value;
    if (email.length == 0 && pwd.length == 0) {
        alert("Pastikan anda telah mengisi email dan password anda dengan benar.")
    }
    else if (email.length != 0 && pwd.length < 4) {
        alert("Password minimal 4 karakter, mohon ulangi kembali.")
        clearField();
    } else {
        alert("Selamat datang " + email);
        clearField();
    }
}

function showHidePwd() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
        document.getElementById("ico1").style.display = "none";
        document.getElementById("ico2").style.display = "block";
    } else {
        x.type = "password";
        document.getElementById("ico1").style.display = "block";
        document.getElementById("ico2").style.display = "none";
    }
}

function clearField() {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}

window.onload = clearField();