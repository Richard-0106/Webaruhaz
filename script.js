$(function(){
    const kosar = new Kosar()
    
    new AjaxHivas().getAjax("http://localhost:3000/termek",window.beolvas,'article',TermekGaleria)

    

    $(window).on("termekValasztas", (esemeny) => {
        console.log(esemeny.detail)
        kosar.termekEltarolas(esemeny.detail)
        $("#termekTarolas").css("border-bottom", "1px solid black")
    })

    $("#kereses").keyup(function(){
    let keresettTermek=$(this).val()
    let szures="http://localhost:3000/termek"+"?nev_like="+keresettTermek
       console.log(keresettTermek)
    
       new AjaxHivas().getAjax(szures,window.beolvas,'article',TermekGaleria)
})

    
})