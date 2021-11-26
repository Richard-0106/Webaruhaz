$(function () {
   let id=0
    let newAjaxHivas = new AjaxHivas()
    newAjaxHivas.getAjax("http://localhost:3000/termek", window.beolvas, 'table', TermekAdmin)
    $(window).on("termekTorles", (esemeny) => {
        console.log("kitörlöm a ", esemeny.detail.nev)

        newAjaxHivas.deleteAjax("http://localhost:3000/termek", esemeny.detail.id)
    })
    $(window).on("termekModositas", (esemeny) => {


        $("#nev").val(esemeny.detail.nev)
        $("#leiras").val(esemeny.detail.leiras)
        $("#ar").val(esemeny.detail.ar)
        id=esemeny.detail.id
        // let termekNev=adat.nev.val()
        // let termekLeiras=adat.leiras.val()
        // let termekAr=adat.ar.val()


        // let id= $(this).attr("id")
        console.log("modosit")


    });
    $("#modosit").on("click", () => {
    
        let adat = {
            nev: $("#nev").val(),
            leiras: $("#leiras").val(),
            ar: $("#ar").val()
        }
        newAjaxHivas.putAjax("http://localhost:3000/termek", adat, id)


    })
    $("#uj-termek").on("click", () => {
    
        let adat = {
            nev: $("#nev").val(),
            leiras: $("#leiras").val(),
            ar: $("#ar").val()
        }
        newAjaxHivas.postAjax("http://localhost:3000/termek", adat)


    })

})