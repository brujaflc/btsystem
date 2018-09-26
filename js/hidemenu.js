$(window).scroll(function() {
    if ($(this).scrollTop()>100)
    {
        $('#openMenu').hide(1000);
    }
    else
    {
        $('#openMenu').show(1000);
    }
});

$(window).scroll(function() {
    if ($(this).scrollTop()>100)
    {
        $('#pocetnaMenu').hide(1000);
    }
    else
    {
        $('#pocetnaMenu').show(1000);
    }
});