    $('form[name=contactdetails]').submit(function( event ) {
                let submitbutton = document.getElementById('submit-form-button');
                submitbutton.style.backgroundColor = ("#8affa9");
                submitbutton.value = "Success!";
                submitbutton.setAttribute("type","blank");
    })