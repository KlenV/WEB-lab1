var form = document.getElementById("myForm");

form.onsubmit = function (event) {
    event.preventDefault();

    var pib = document.getElementById("pib").value;
    var group = document.getElementById("group").value;
    var idcard = document.getElementById("idcard").value;
    var birthdate = document.getElementById("birthdate").value;
    var email = document.getElementById("email").value;

    var pibRegex = /^[A-Za-zА-Яа-я]+\s[A-Za-zА-Яа-я]\.\s[A-Za-zА-Яа-я]\.$/;
    var groupRegex = /^[А-Яа-яA-Za-z]+\-[0-9]{2}$/;
    var idcardRegex = /^\d+$/;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    var pibError = !pibRegex.test(pib);
    var groupError = !groupRegex.test(group);
    var idcardError = !idcardRegex.test(idcard);
    var emailError = !emailRegex.test(email);

    document.getElementById("pib").classList.remove("error");
    document.getElementById("group").classList.remove("error");
    document.getElementById("idcard").classList.remove("error");
    document.getElementById("email").classList.remove("error");

    if (pibError) {
        document.getElementById("pib").classList.add("error");
    }

    if (groupError) {
        document.getElementById("group").classList.add("error");
    }

    if (idcardError) {
        document.getElementById("idcard").classList.add("error");
    }

    if (emailError) {
        document.getElementById("email").classList.add("error");
    }

    if (!pibError && !groupError && !idcardError && !emailError) {
        var result = "ПІБ: " + pib + "<br>Група: " + group + "<br>ID-card: " + idcard + "<br>Дата народження: " + birthdate + "<br>E-mail: " + email;
    
        // Код для передачі даних через параметри URL
        var params = new URLSearchParams();
        params.append("result", result);
        var queryString = params.toString();
    
        // Переадресовуємо на іншу сторінку і передаємо дані через параметри URL
        window.location.href = "result.html?" + queryString;
    }
    
};
