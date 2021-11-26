$(function () {
 new AjaxHivas().getAjax("http://localhost:3000/termek",window.beolvas,'table',TermekAdmin)
    $(window).on("termekTorles", (esemeny) => {
        console.log("kitörlöm a ",esemeny.detail.nev)

       new AjaxHivas().deleteAjax("http://localhost:3000/termek",esemeny.detail.id)
    })
    $(window).on("termekModositas",(esemeny)=>{
       // let id= $(this).attr("id")
        console.log(id)
    //    new AjaxHivas().putAjax("http://localhost:3000/termek",,esemeny.detail.id)

    })
})