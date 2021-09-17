
formLoader.submit("#form-categoria", (data) =>{

    let header = {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    fetch("/painel/categoria/novo",header)
        .then((response) => response.json())
        .then((data) => {
            if(data.sucesso)
            {
                toastr.success(data.msg);
            }
            else
            {
                toastr.error(data.msg);
            }
        })

});