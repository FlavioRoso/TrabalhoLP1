

formLoader.submit("#form-login", (data) =>{

    let header = {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    fetch("/painel/login/autenticar",header)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if(data.sucesso)
            {
                window.location.href = "/painel/dashboard";
            }
            else
            {
                $('#senha').val('');
                $('.alert .msg').html(data.msg);
                $('.alert').removeClass("hide");
                $('.alert').addClass("show");
            }
        })

});