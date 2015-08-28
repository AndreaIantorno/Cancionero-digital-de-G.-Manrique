/* El "Cancionero digital de Gómez Manrique", 
   proyecto desarrollado por Andrea Iantorno (mail:andrea.iantorno@gmail.com - Google+:https://plus.google.com/u/0/+AndreaIantorno/about) */  

/* Funciones jQuery - 'cancionero.html' */
$(document).ready(function(){

/*scroll*/
$('a[href^=#]:not([href=#])').click(function(e){
$('html, body').animate({ 
scrollTop: $($(this).attr("href"))
.offset().top }, 1000);
e.preventDefault();
});

/*formulario*/

/*botón1*/
$('a[href="#sectit"]').click(function()
{
$('#p11v1').css('background-color', '#FFFF80')
}
);

$('a[href="#pag13"]').click(function()
{
$('#p13v1').css('background-color', '#FFFF80')
}
);

$('a[href="#pag15"]').click(function()
{
$('#p15v1').css('background-color', '#FFFF80')
}
);

$('a[href="#pag17"]').click(function()
{
$('#p17v1').css('background-color', '#FFFF80')
}
);

$('a[href="#pag19"]').click(function()
{
$('#p19v1').css('background-color', '#FFFF80')
}
);

$('a[href="#pag22"]').click(function()
{
$('#p22v1').css('background-color', '#FFFF80')
}
);

$('a[href="#pag25"]').click(function()
{
$('#p25v1').css('background-color', '#FFFF80')
}
);

$('a[href="#pag27"]').click(function()
{
$('#p27v1').css('background-color', '#FFFF80')
}
);

$('a[href="#pag31"]').click(function()
{
$('#p31v1').css('background-color', '#FFFF80')
}
);

$('a[href="#pag32"]').click(function()
{
$('#p32v1').css('background-color', '#FFFF80')
}
);

$('a[href="#p33v22"]').click(function()
{
$('#p33v1').css('background-color', '#FFFF80')
}
);

$('a[href="#pag34"]').click(function()
{
$('#p34_1v1').css('background-color', '#FFFF80')
}
);

$('a[href="#ma34_2"]').click(function()
{
$('#p34_2v1').css('background-color', '#FFFF80')
}
);

$('a[href="#pag35"]').click(function()
{
$('#p35v1').css('background-color', '#FFFF80')
}
);

$('a[href="#pag36"]').click(function()
{
$('#p36_1v1').css('background-color', '#FFFF80')
}
);

$('a[href="#ma36_2"]').click(function()
{
$('#p36_2v1').css('background-color', '#FFFF80')
}
);

$('a[href="#pag37"]').click(function()
{
$('#p37_1v1').css('background-color', '#FFFF80')
}
);

$('a[href="#ma37_2"]').click(function()
{
$('#p37_2v1').css('background-color', '#FFFF80')
}
);

$('a[href="#p38v7"]').click(function()
{
$('#p38v1').css('background-color', '#FFFF80')
}
);

$('a[href="#pag39"]').click(function()
{
$('#p39_2v1').css('background-color', '#FFFF80')
}
);

$('a[href="#ma39_2"]').click(function()
{
$('#p39_3v1').css('background-color', '#FFFF80')
}
);

$('a[href="#p40v7"]').click(function()
{
$('#p40v1').css('background-color', '#FFFF80')
}
);

$('a[href="#pag41"]').click(function()
{
$('#p41_2v1').css('background-color', '#FFFF80')
}
);

$('a[href="#ma41_2"]').click(function()
{
$('#p41_3v1').css('background-color', '#FFFF80')
}
);

$('a[href="#ma42"]').click(function()
{
$('#p42_2v1').css('background-color', '#FFFF80')
}
);

$('a[href="#pag43"]').click(function()
{
$('#p43_2v1').css('background-color', '#FFFF80')
}
);

$('a[href="#pag44"]').click(function()
{
$('#p44v1').css('background-color', '#FFFF80')
}
);

$('#but1').click(function()
{
$('#pop1').css('display', 'none')
}
);

$('#but1').click(function()
{
$('#pop2').css('display', 'none')
}
);

/*botón2*/
$('#but2').click(function()
{
$('p.l,p.note,p.opener,p.head,p.add').addClass('ptm')
}
);
$('#but2').dblclick(function()
{
$('p.l,p.note,p.opener,p.head,p.add').removeClass('ptm')
}
);

$('#but2').click(function()
{
$('.marco').fadeIn(1)
}
);
$('#but2').dblclick(function()
{
$('.marco').fadeOut(1)
}
);

$('#but2').click(function()
{
$('#pop1').css('display', 'none')
}
);

$('#but2').click(function()
{
$('#pop2').css('display', 'none')
}
);

/*botón3*/
$('#but3').click(function()
{
$('.met').fadeToggle(1)
}
);

$('#but3').click(function()
{
$('#pop1').css('display', 'none')
}
);

$('#but3').click(function()
{
$('#pop2').css('display', 'none')
}
);

/*botón4*/
$('#but4').click(function()
{
$('#imagenes').fadeIn(1)
}
);

$('#but4').click(function()
{
$('.figuras').addClass('resize')
}
);

$('#but4').click(function()
{
$('#imagenes').css('margin-left', '15%')
}
);

$('#but4').click(function()
{
$('#canciones').css('display', 'none')
}
);

$('#but4').click(function()
{
$('#marcos').css('display', 'none')
}
);

$('#but4').click(function()
{
$('#pop1').css('display', 'none')
}
);

$('#but4').click(function()
{
$('#pop2').css('display', 'none')
}
);

/*botón5*/
$('#but5').click(function()
{
$('#canciones').fadeIn(1)
}
);

$('#but5').click(function()
{
$('p.l,p.note,p.opener,p.head,p.add').removeClass('ptm')
}
);

$('#but5').click(function()
{
$('#canciones').css({"float": "left", "margin-left": "30%"});
}
);

$('#but5').click(function()
{
$('#imagenes').css('display', 'none')
}
);

$('#but5').click(function()
{
$('#marcos').css('display', 'none')
}
);

$('#but5').click(function()
{
$('#pop1').css('display', 'none')
}
);

$('#but5').click(function()
{
$('#pop2').css('display', 'none')
}
);

/*botón6*/
$('#but6').click(function()
{
location.reload();
}
);

$('#but6').click(function()
{
$('#pop1').css('display', 'none')
}
);

$('#but6').click(function()
{
$('#pop2').css('display', 'none')
}
);

/*botón7*/
$('#but7').click(function()
{
window.print();
}
);

$('#but7').click(function()
{
$('#pop1').css('display', 'none')
}
);

$('#but7').click(function()
{
$('#pop2').css('display', 'none')
}
);

/*botón8*/
$('#but8').click(function()
{
$('#pop1').fadeToggle(800)
}
);

$('#but8').click(function()
{
$('#pop2').css('display', 'none')
}
);

/*botón9*/
$('#but9').click(function()
{
$('#pop2').fadeToggle(800)
}
);

$('#but9').click(function()
{
$('#pop1').css('display', 'none')
}
);


/* Funciones jQuery creadas para implementar el Parallel Transcription Method */
/*pagina11*/
/*text-image*/
$('#p11v1').hover(function()
{
$('#p11_v1').addClass('res1')
}
,function()
{
$('#p11_v1').removeClass('res1')
});

/*image-text*/
$('#p11_v1').hover(function()
{
$('#p11v1').addClass('res2')
}
,function()
{
$('#p11v1').removeClass('res2')
});

/*text-image*/
$('#p11v2').hover(function()
{
$('#p11_v2').addClass('res1')
}
,function()
{
$('#p11_v2').removeClass('res1')
});

/*image-text*/
$('#p11_v2').hover(function()
{
$('#p11v2').addClass('res2')
}
,function()
{
$('#p11v2').removeClass('res2')
});

/*text-image*/
$('#p11v3').hover(function()
{
$('#p11_v3').addClass('res1')
}
,function()
{
$('#p11_v3').removeClass('res1')
});

/*image-text*/
$('#p11_v3').hover(function()
{
$('#p11v3').addClass('res2')
}
,function()
{
$('#p11v3').removeClass('res2')
});

/*text-image*/
$('#p11v4').hover(function()
{
$('#p11_v4').addClass('res1')
}
,function()
{
$('#p11_v4').removeClass('res1')
});

/*image-text*/
$('#p11_v4').hover(function()
{
$('#p11v4').addClass('res2')
}
,function()
{
$('#p11v4').removeClass('res2')
});

/*text-image*/
$('#p11v5').hover(function()
{
$('#p11_v5').addClass('res1')
}
,function()
{
$('#p11_v5').removeClass('res1')
});

/*image-text*/
$('#p11_v5').hover(function()
{
$('#p11v5').addClass('res2')
}
,function()
{
$('#p11v5').removeClass('res2')
});

/*text-image*/
$('#p11v6').hover(function()
{
$('#p11_v6').addClass('res1')
}
,function()
{
$('#p11_v6').removeClass('res1')
});

/*image-text*/
$('#p11_v6').hover(function()
{
$('#p11v6').addClass('res2')
}
,function()
{
$('#p11v6').removeClass('res2')
});

/*text-image*/
$('#p11v7').hover(function()
{
$('#p11_v7').addClass('res1')
}
,function()
{
$('#p11_v7').removeClass('res1')
});

/*image-text*/
$('#p11_v7').hover(function()
{
$('#p11v7').addClass('res2')
}
,function()
{
$('#p11v7').removeClass('res2')
});

/*text-image*/
$('#p11v8').hover(function()
{
$('#p11_v8').addClass('res1')
}
,function()
{
$('#p11_v8').removeClass('res1')
});

/*image-text*/
$('#p11_v8').hover(function()
{
$('#p11v8').addClass('res2')
}
,function()
{
$('#p11v8').removeClass('res2')
});

/*text-image*/
$('#p11v9').hover(function()
{
$('#p11_v9').addClass('res1')
}
,function()
{
$('#p11_v9').removeClass('res1')
});

/*image-text*/
$('#p11_v9').hover(function()
{
$('#p11v9').addClass('res2')
}
,function()
{
$('#p11v9').removeClass('res2')
});

/*text-image*/
$('#p11v10').hover(function()
{
$('#p11_v10').addClass('res1')
}
,function()
{
$('#p11_v10').removeClass('res1')
});

/*image-text*/
$('#p11_v10').hover(function()
{
$('#p11v10').addClass('res2')
}
,function()
{
$('#p11v10').removeClass('res2')
});

/*text-image*/
$('#p11v11').hover(function()
{
$('#p11_v11').addClass('res1')
}
,function()
{
$('#p11_v11').removeClass('res1')
});

/*image-text*/
$('#p11_v11').hover(function()
{
$('#p11v11').addClass('res2')
}
,function()
{
$('#p11v11').removeClass('res2')
});

/*text-image*/
$('#p11v12').hover(function()
{
$('#p11_v12').addClass('res1')
}
,function()
{
$('#p11_v12').removeClass('res1')
});

/*image-text*/
$('#p11_v12').hover(function()
{
$('#p11v12').addClass('res2')
}
,function()
{
$('#p11v12').removeClass('res2')
});

/*text-image*/
$('#p11v13').hover(function()
{
$('#p11_v13').addClass('res1')
}
,function()
{
$('#p11_v13').removeClass('res1')
});

/*image-text*/
$('#p11_v13').hover(function()
{
$('#p11v13').addClass('res2')
}
,function()
{
$('#p11v13').removeClass('res2')
});

/*text-image*/
$('#p11v14').hover(function()
{
$('#p11_v14').addClass('res1')
}
,function()
{
$('#p11_v14').removeClass('res1')
});

/*image-text*/
$('#p11_v14').hover(function()
{
$('#p11v14').addClass('res2')
}
,function()
{
$('#p11v14').removeClass('res2')
});

/*text-image*/
$('#p11v15').hover(function()
{
$('#p11_v15').addClass('res1')
}
,function()
{
$('#p11_v15').removeClass('res1')
});

/*image-text*/
$('#p11_v15').hover(function()
{
$('#p11v15').addClass('res2')
}
,function()
{
$('#p11v15').removeClass('res2')
});

/*text-image*/
$('#p11v16').hover(function()
{
$('#p11_v16').addClass('res1')
}
,function()
{
$('#p11_v16').removeClass('res1')
});

/*image-text*/
$('#p11_v16').hover(function()
{
$('#p11v16').addClass('res2')
}
,function()
{
$('#p11v16').removeClass('res2')
});

/*text-image*/
$('#p11v17').hover(function()
{
$('#p11_v17').addClass('res1')
}
,function()
{
$('#p11_v17').removeClass('res1')
});

/*image-text*/
$('#p11_v17').hover(function()
{
$('#p11v17').addClass('res2')
}
,function()
{
$('#p11v17').removeClass('res2')
});

/*text-image*/
$('#p11v18').hover(function()
{
$('#p11_v18').addClass('res1')
}
,function()
{
$('#p11_v18').removeClass('res1')
});

/*image-text*/
$('#p11_v18').hover(function()
{
$('#p11v18').addClass('res2')
}
,function()
{
$('#p11v18').removeClass('res2')
});

/*text-image*/
$('#p11v19').hover(function()
{
$('#p11_v19').addClass('res1')
}
,function()
{
$('#p11_v19').removeClass('res1')
});

/*image-text*/
$('#p11_v19').hover(function()
{
$('#p11v19').addClass('res2')
}
,function()
{
$('#p11v19').removeClass('res2')
});

/*text-image*/
$('#p11v20').hover(function()
{
$('#p11_v20').addClass('res1')
}
,function()
{
$('#p11_v20').removeClass('res1')
});

/*image-text*/
$('#p11_v20').hover(function()
{
$('#p11v20').addClass('res2')
}
,function()
{
$('#p11v20').removeClass('res2')
});

/*text-image*/
$('#p11v21').hover(function()
{
$('#p11_v21').addClass('res1')
}
,function()
{
$('#p11_v21').removeClass('res1')
});

/*image-text*/
$('#p11_v21').hover(function()
{
$('#p11v21').addClass('res2')
}
,function()
{
$('#p11v21').removeClass('res2')
});

/*text-image*/
$('#p11v22').hover(function()
{
$('#p11_v22').addClass('res1')
}
,function()
{
$('#p11_v22').removeClass('res1')
});

/*image-text*/
$('#p11_v22').hover(function()
{
$('#p11v22').addClass('res2')
}
,function()
{
$('#p11v22').removeClass('res2')
});

/*text-image*/
$('#p11v23').hover(function()
{
$('#p11_v23').addClass('res1')
}
,function()
{
$('#p11_v23').removeClass('res1')
});

/*image-text*/
$('#p11_v23').hover(function()
{
$('#p11v23').addClass('res2')
}
,function()
{
$('#p11v23').removeClass('res2')
});

/*text-image*/
$('#p11v24').hover(function()
{
$('#p11_v24').addClass('res1')
}
,function()
{
$('#p11_v24').removeClass('res1')
});

/*image-text*/
$('#p11_v24').hover(function()
{
$('#p11v24').addClass('res2')
}
,function()
{
$('#p11v24').removeClass('res2')
});


/*pagina12*/
/*text-image*/
$('#p12v25').hover(function()
{
$('#p12_v25').addClass('res1')
}
,function()
{
$('#p12_v25').removeClass('res1')
});

/*image-text*/
$('#p12_v25').hover(function()
{
$('#p12v25').addClass('res2')
}
,function()
{
$('#p12v25').removeClass('res2')
});

/*text-image*/
$('#p12v26').hover(function()
{
$('#p12_v26').addClass('res1')
}
,function()
{
$('#p12_v26').removeClass('res1')
});

/*image-text*/
$('#p12_v26').hover(function()
{
$('#p12v26').addClass('res2')
}
,function()
{
$('#p12v26').removeClass('res2')
});

/*text-image*/
$('#p12v27').hover(function()
{
$('#p12_v27').addClass('res1')
}
,function()
{
$('#p12_v27').removeClass('res1')
});

/*image-text*/
$('#p12_v27').hover(function()
{
$('#p12v27').addClass('res2')
}
,function()
{
$('#p12v27').removeClass('res2')
});

/*text-image*/
$('#p12v28').hover(function()
{
$('#p12_v28').addClass('res1')
}
,function()
{
$('#p12_v28').removeClass('res1')
});

/*image-text*/
$('#p12_v28').hover(function()
{
$('#p12v28').addClass('res2')
}
,function()
{
$('#p12v28').removeClass('res2')
});

/*text-image*/
$('#p12v29').hover(function()
{
$('#p12_v29').addClass('res1')
}
,function()
{
$('#p12_v29').removeClass('res1')
});

/*image-text*/
$('#p12_v29').hover(function()
{
$('#p12v29').addClass('res2')
}
,function()
{
$('#p12v29').removeClass('res2')
});

/*text-image*/
$('#p12v30').hover(function()
{
$('#p12_v30').addClass('res1')
}
,function()
{
$('#p12_v30').removeClass('res1')
});

/*image-text*/
$('#p12_v30').hover(function()
{
$('#p12v30').addClass('res2')
}
,function()
{
$('#p12v30').removeClass('res2')
});

/*text-image*/
$('#p12v31').hover(function()
{
$('#p12_v31').addClass('res1')
}
,function()
{
$('#p12_v31').removeClass('res1')
});

/*image-text*/
$('#p12_v31').hover(function()
{
$('#p12v31').addClass('res2')
}
,function()
{
$('#p12v31').removeClass('res2')
});

/*text-image*/
$('#p12v32').hover(function()
{
$('#p12_v32').addClass('res1')
}
,function()
{
$('#p12_v32').removeClass('res1')
});

/*image-text*/
$('#p12_v32').hover(function()
{
$('#p12v32').addClass('res2')
}
,function()
{
$('#p12v32').removeClass('res2')
});

/*text-image*/
$('#p12v33').hover(function()
{
$('#p12_v33').addClass('res1')
}
,function()
{
$('#p12_v33').removeClass('res1')
});

/*image-text*/
$('#p12_v33').hover(function()
{
$('#p12v33').addClass('res2')
}
,function()
{
$('#p12v33').removeClass('res2')
});

/*text-image*/
$('#p12v34').hover(function()
{
$('#p12_v34').addClass('res1')
}
,function()
{
$('#p12_v34').removeClass('res1')
});

/*image-text*/
$('#p12_v34').hover(function()
{
$('#p12v34').addClass('res2')
}
,function()
{
$('#p12v34').removeClass('res2')
});

/*text-image*/
$('#p12v35').hover(function()
{
$('#p12_v35').addClass('res1')
}
,function()
{
$('#p12_v35').removeClass('res1')
});

/*image-text*/
$('#p12_v35').hover(function()
{
$('#p12v35').addClass('res2')
}
,function()
{
$('#p12v35').removeClass('res2')
});

/*text-image*/
$('#p12v36').hover(function()
{
$('#p12_v36').addClass('res1')
}
,function()
{
$('#p12_v36').removeClass('res1')
});

/*image-text*/
$('#p12_v36').hover(function()
{
$('#p12v36').addClass('res2')
}
,function()
{
$('#p12v36').removeClass('res2')
});

/*text-image*/
$('#p12v37').hover(function()
{
$('#p12_v37').addClass('res1')
}
,function()
{
$('#p12_v37').removeClass('res1')
});

/*image-text*/
$('#p12_v37').hover(function()
{
$('#p12v37').addClass('res2')
}
,function()
{
$('#p12v37').removeClass('res2')
});

/*text-image*/
$('#p12v38').hover(function()
{
$('#p12_v38').addClass('res1')
}
,function()
{
$('#p12_v38').removeClass('res1')
});

/*image-text*/
$('#p12_v38').hover(function()
{
$('#p12v38').addClass('res2')
}
,function()
{
$('#p12v38').removeClass('res2')
});

/*text-image*/
$('#p12v39').hover(function()
{
$('#p12_v39').addClass('res1')
}
,function()
{
$('#p12_v39').removeClass('res1')
});

/*image-text*/
$('#p12_v39').hover(function()
{
$('#p12v39').addClass('res2')
}
,function()
{
$('#p12v39').removeClass('res2')
});

/*text-image*/
$('#p12v40').hover(function()
{
$('#p12_v40').addClass('res1')
}
,function()
{
$('#p12_v40').removeClass('res1')
});

/*image-text*/
$('#p12_v40').hover(function()
{
$('#p12v40').addClass('res2')
}
,function()
{
$('#p12v40').removeClass('res2')
});

/*text-image*/
$('#fin12').hover(function()
{
$('#p12_fyn').addClass('res1')
}
,function()
{
$('#p12_fyn').removeClass('res1')
});

/*image-text*/
$('#p12_fyn').hover(function()
{
$('#fin12').addClass('res2')
}
,function()
{
$('#fin12').removeClass('res2')
});

/*text-image*/
$('#p12v41').hover(function()
{
$('#p12_v41').addClass('res1')
}
,function()
{
$('#p12_v41').removeClass('res1')
});

/*image-text*/
$('#p12_v41').hover(function()
{
$('#p12v41').addClass('res2')
}
,function()
{
$('#p12v41').removeClass('res2')
});

/*text-image*/
$('#p12v42').hover(function()
{
$('#p12_v42').addClass('res1')
}
,function()
{
$('#p12_v42').removeClass('res1')
});

/*image-text*/
$('#p12_v42').hover(function()
{
$('#p12v42').addClass('res2')
}
,function()
{
$('#p12v42').removeClass('res2')
});

/*text-image*/
$('#p12v43').hover(function()
{
$('#p12_v43').addClass('res1')
}
,function()
{
$('#p12_v43').removeClass('res1')
});

/*image-text*/
$('#p12_v43').hover(function()
{
$('#p12v43').addClass('res2')
}
,function()
{
$('#p12v43').removeClass('res2')
});

/*text-image*/
$('#p12v44').hover(function()
{
$('#p12_v44').addClass('res1')
}
,function()
{
$('#p12_v44').removeClass('res1')
});

/*image-text*/
$('#p12_v44').hover(function()
{
$('#p12v44').addClass('res2')
}
,function()
{
$('#p12v44').removeClass('res2')
});


/*pagina13*/
/*text-image*/
$('#op13').hover(function()
{
$('#p13_op').addClass('res1')
}
,function()
{
$('#p13_op').removeClass('res1')
});

/*image-text*/
$('#p13_op').hover(function()
{
$('#op13').addClass('ophov')
}
,function()
{
$('#op13').removeClass('ophov')
});

/*text-image*/
$('#he13').hover(function()
{
$('#p13_he').addClass('res1')
}
,function()
{
$('#p13_he').removeClass('res1')
});

/*image-text*/
$('#p13_he').hover(function()
{
$('#he13').addClass('res2')
}
,function()
{
$('#he13').removeClass('res2')
});

/*text-image*/
$('#p13v1').hover(function()
{
$('#p13_v1').addClass('res1')
}
,function()
{
$('#p13_v1').removeClass('res1')
});

/*image-text*/
$('#p13_v1').hover(function()
{
$('#p13v1').addClass('res2')
}
,function()
{
$('#p13v1').removeClass('res2')
});

/*text-image*/
$('#p13v2').hover(function()
{
$('#p13_v2').addClass('res1')
}
,function()
{
$('#p13_v2').removeClass('res1')
});

/*image-text*/
$('#p13_v2').hover(function()
{
$('#p13v2').addClass('res2')
}
,function()
{
$('#p13v2').removeClass('res2')
});

/*text-image*/
$('#p13v3').hover(function()
{
$('#p13_v3').addClass('res1')
}
,function()
{
$('#p13_v3').removeClass('res1')
});

/*image-text*/
$('#p13_v3').hover(function()
{
$('#p13v3').addClass('res2')
}
,function()
{
$('#p13v3').removeClass('res2')
});

/*text-image*/
$('#p13v4').hover(function()
{
$('#p13_v4').addClass('res1')
}
,function()
{
$('#p13_v4').removeClass('res1')
});

/*image-text*/
$('#p13_v4').hover(function()
{
$('#p13v4').addClass('res2')
}
,function()
{
$('#p13v4').removeClass('res2')
});

/*text-image*/
$('#p13v5').hover(function()
{
$('#p13_v5').addClass('res1')
}
,function()
{
$('#p13_v5').removeClass('res1')
});

/*image-text*/
$('#p13_v5').hover(function()
{
$('#p13v5').addClass('res2')
}
,function()
{
$('#p13v5').removeClass('res2')
});

/*text-image*/
$('#p13v6').hover(function()
{
$('#p13_v6').addClass('res1')
}
,function()
{
$('#p13_v6').removeClass('res1')
});

/*image-text*/
$('#p13_v6').hover(function()
{
$('#p13v6').addClass('res2')
}
,function()
{
$('#p13v6').removeClass('res2')
});

/*text-image*/
$('#p13v7').hover(function()
{
$('#p13_v7').addClass('res1')
}
,function()
{
$('#p13_v7').removeClass('res1')
});

/*image-text*/
$('#p13_v7').hover(function()
{
$('#p13v7').addClass('res2')
}
,function()
{
$('#p13v7').removeClass('res2')
});

/*text-image*/
$('#p13v8').hover(function()
{
$('#p13_v8').addClass('res1')
}
,function()
{
$('#p13_v8').removeClass('res1')
});

/*image-text*/
$('#p13_v8').hover(function()
{
$('#p13v8').addClass('res2')
}
,function()
{
$('#p13v8').removeClass('res2')
});

/*text-image*/
$('#p13v9').hover(function()
{
$('#p13_v9').addClass('res1')
}
,function()
{
$('#p13_v9').removeClass('res1')
});

/*image-text*/
$('#p13_v9').hover(function()
{
$('#p13v9').addClass('res2')
}
,function()
{
$('#p13v9').removeClass('res2')
});

/*text-image*/
$('#p13v10').hover(function()
{
$('#p13_v10').addClass('res1')
}
,function()
{
$('#p13_v10').removeClass('res1')
});

/*image-text*/
$('#p13_v10').hover(function()
{
$('#p13v10').addClass('res2')
}
,function()
{
$('#p13v10').removeClass('res2')
});

/*text-image*/
$('#p13v11').hover(function()
{
$('#p13_v11').addClass('res1')
}
,function()
{
$('#p13_v11').removeClass('res1')
});

/*image-text*/
$('#p13_v11').hover(function()
{
$('#p13v11').addClass('res2')
}
,function()
{
$('#p13v11').removeClass('res2')
});

/*text-image*/
$('#p13v12').hover(function()
{
$('#p13_v12').addClass('res1')
}
,function()
{
$('#p13_v12').removeClass('res1')
});

/*image-text*/
$('#p13_v12').hover(function()
{
$('#p13v12').addClass('res2')
}
,function()
{
$('#p13v12').removeClass('res2')
});

/*text-image*/
$('#p13v13').hover(function()
{
$('#p13_v13').addClass('res1')
}
,function()
{
$('#p13_v13').removeClass('res1')
});

/*image-text*/
$('#p13_v13').hover(function()
{
$('#p13v13').addClass('res2')
}
,function()
{
$('#p13v13').removeClass('res2')
});

/*text-image*/
$('#p13v14').hover(function()
{
$('#p13_v14').addClass('res1')
}
,function()
{
$('#p13_v14').removeClass('res1')
});

/*image-text*/
$('#p13_v14').hover(function()
{
$('#p13v14').addClass('res2')
}
,function()
{
$('#p13v14').removeClass('res2')
});

/*text-image*/
$('#p13v15').hover(function()
{
$('#p13_v15').addClass('res1')
}
,function()
{
$('#p13_v15').removeClass('res1')
});

/*image-text*/
$('#p13_v15').hover(function()
{
$('#p13v15').addClass('res2')
}
,function()
{
$('#p13v15').removeClass('res2')
});

/*text-image*/
$('#p13v16').hover(function()
{
$('#p13_v16').addClass('res1')
}
,function()
{
$('#p13_v16').removeClass('res1')
});

/*image-text*/
$('#p13_v16').hover(function()
{
$('#p13v16').addClass('res2')
}
,function()
{
$('#p13v16').removeClass('res2')
});

/*text-image*/
$('#p13v17').hover(function()
{
$('#p13_v17').addClass('res1')
}
,function()
{
$('#p13_v17').removeClass('res1')
});

/*image-text*/
$('#p13_v17').hover(function()
{
$('#p13v17').addClass('res2')
}
,function()
{
$('#p13v17').removeClass('res2')
});

/*text-image*/
$('#p13v18').hover(function()
{
$('#p13_v18').addClass('res1')
}
,function()
{
$('#p13_v18').removeClass('res1')
});

/*image-text*/
$('#p13_v18').hover(function()
{
$('#p13v18').addClass('res2')
}
,function()
{
$('#p13v18').removeClass('res2')
});

/*text-image*/
$('#p13v19').hover(function()
{
$('#p13_v19').addClass('res1')
}
,function()
{
$('#p13_v19').removeClass('res1')
});

/*image-text*/
$('#p13_v19').hover(function()
{
$('#p13v19').addClass('res2')
}
,function()
{
$('#p13v19').removeClass('res2')
});

/*text-image*/
$('#p13v20').hover(function()
{
$('#p13_v20').addClass('res1')
}
,function()
{
$('#p13_v20').removeClass('res1')
});

/*image-text*/
$('#p13_v20').hover(function()
{
$('#p13v20').addClass('res2')
}
,function()
{
$('#p13v20').removeClass('res2')
});

/*text-image*/
$('#p13v21').hover(function()
{
$('#p13_v21').addClass('res1')
}
,function()
{
$('#p13_v21').removeClass('res1')
});

/*image-text*/
$('#p13_v21').hover(function()
{
$('#p13v21').addClass('res2')
}
,function()
{
$('#p13v21').removeClass('res2')
});

/*text-image*/
$('#p13v22').hover(function()
{
$('#p13_v22').addClass('res1')
}
,function()
{
$('#p13_v22').removeClass('res1')
});

/*image-text*/
$('#p13_v22').hover(function()
{
$('#p13v22').addClass('res2')
}
,function()
{
$('#p13v22').removeClass('res2')
});

/*text-image*/
$('#p13v23').hover(function()
{
$('#p13_v23').addClass('res1')
}
,function()
{
$('#p13_v23').removeClass('res1')
});

/*image-text*/
$('#p13_v23').hover(function()
{
$('#p13v23').addClass('res2')
}
,function()
{
$('#p13v23').removeClass('res2')
});

/*text-image*/
$('#p13v24').hover(function()
{
$('#p13_v24').addClass('res1')
}
,function()
{
$('#p13_v24').removeClass('res1')
});

/*image-text*/
$('#p13_v24').hover(function()
{
$('#p13v24').addClass('res2')
}
,function()
{
$('#p13v24').removeClass('res2')
});


/*pagina14*/
/*text-image*/
$('#p14v25').hover(function()
{
$('#p14_v25').addClass('res1')
}
,function()
{
$('#p14_v25').removeClass('res1')
});

/*image-text*/
$('#p14_v25').hover(function()
{
$('#p14v25').addClass('res2')
}
,function()
{
$('#p14v25').removeClass('res2')
});

/*text-image*/
$('#p14v26').hover(function()
{
$('#p14_v26').addClass('res1')
}
,function()
{
$('#p14_v26').removeClass('res1')
});

/*image-text*/
$('#p14_v26').hover(function()
{
$('#p14v26').addClass('res2')
}
,function()
{
$('#p14v26').removeClass('res2')
});

/*text-image*/
$('#p14v27').hover(function()
{
$('#p14_v27').addClass('res1')
}
,function()
{
$('#p14_v27').removeClass('res1')
});

/*image-text*/
$('#p14_v27').hover(function()
{
$('#p14v27').addClass('res2')
}
,function()
{
$('#p14v27').removeClass('res2')
});

/*text-image*/
$('#p14v28').hover(function()
{
$('#p14_v28').addClass('res1')
}
,function()
{
$('#p14_v28').removeClass('res1')
});

/*image-text*/
$('#p14_v28').hover(function()
{
$('#p14v28').addClass('res2')
}
,function()
{
$('#p14v28').removeClass('res2')
});

/*text-image*/
$('#p14v29').hover(function()
{
$('#p14_v29').addClass('res1')
}
,function()
{
$('#p14_v29').removeClass('res1')
});

/*image-text*/
$('#p14_v29').hover(function()
{
$('#p14v29').addClass('res2')
}
,function()
{
$('#p14v29').removeClass('res2')
});

/*text-image*/
$('#p14v30').hover(function()
{
$('#p14_v30').addClass('res1')
}
,function()
{
$('#p14_v30').removeClass('res1')
});

/*image-text*/
$('#p14_v30').hover(function()
{
$('#p14v30').addClass('res2')
}
,function()
{
$('#p14v30').removeClass('res2')
});

/*text-image*/
$('#p14v31').hover(function()
{
$('#p14_v31').addClass('res1')
}
,function()
{
$('#p14_v31').removeClass('res1')
});

/*image-text*/
$('#p14_v31').hover(function()
{
$('#p14v31').addClass('res2')
}
,function()
{
$('#p14v31').removeClass('res2')
});

/*text-image*/
$('#p14v32').hover(function()
{
$('#p14_v32').addClass('res1')
}
,function()
{
$('#p14_v32').removeClass('res1')
});

/*image-text*/
$('#p14_v32').hover(function()
{
$('#p14v32').addClass('res2')
}
,function()
{
$('#p14v32').removeClass('res2')
});

/*text-image*/
$('#p14v33').hover(function()
{
$('#p14_v33').addClass('res1')
}
,function()
{
$('#p14_v33').removeClass('res1')
});

/*image-text*/
$('#p14_v33').hover(function()
{
$('#p14v33').addClass('res2')
}
,function()
{
$('#p14v33').removeClass('res2')
});

/*text-image*/
$('#p14v34').hover(function()
{
$('#p14_v34').addClass('res1')
}
,function()
{
$('#p14_v34').removeClass('res1')
});

/*image-text*/
$('#p14_v34').hover(function()
{
$('#p14v34').addClass('res2')
}
,function()
{
$('#p14v34').removeClass('res2')
});

/*text-image*/
$('#p14v35').hover(function()
{
$('#p14_v35').addClass('res1')
}
,function()
{
$('#p14_v35').removeClass('res1')
});

/*image-text*/
$('#p14_v35').hover(function()
{
$('#p14v35').addClass('res2')
}
,function()
{
$('#p14v35').removeClass('res2')
});

/*text-image*/
$('#p14v36').hover(function()
{
$('#p14_v36').addClass('res1')
}
,function()
{
$('#p14_v36').removeClass('res1')
});

/*image-text*/
$('#p14_v36').hover(function()
{
$('#p14v36').addClass('res2')
}
,function()
{
$('#p14v36').removeClass('res2')
});

/*text-image*/
$('#p14v37').hover(function()
{
$('#p14_v37').addClass('res1')
}
,function()
{
$('#p14_v37').removeClass('res1')
});

/*image-text*/
$('#p14_v37').hover(function()
{
$('#p14v37').addClass('res2')
}
,function()
{
$('#p14v37').removeClass('res2')
});

/*text-image*/
$('#p14v38').hover(function()
{
$('#p14_v38').addClass('res1')
}
,function()
{
$('#p14_v38').removeClass('res1')
});

/*image-text*/
$('#p14_v38').hover(function()
{
$('#p14v38').addClass('res2')
}
,function()
{
$('#p14v38').removeClass('res2')
});

/*text-image*/
$('#p14v39').hover(function()
{
$('#p14_v39').addClass('res1')
}
,function()
{
$('#p14_v39').removeClass('res1')
});

/*image-text*/
$('#p14_v39').hover(function()
{
$('#p14v39').addClass('res2')
}
,function()
{
$('#p14v39').removeClass('res2')
});

/*text-image*/
$('#p14v40').hover(function()
{
$('#p14_v40').addClass('res1')
}
,function()
{
$('#p14_v40').removeClass('res1')
});

/*image-text*/
$('#p14_v40').hover(function()
{
$('#p14v40').addClass('res2')
}
,function()
{
$('#p14v40').removeClass('res2')
});

/*text-image*/
$('#fin14').hover(function()
{
$('#p14_fyn').addClass('res1')
}
,function()
{
$('#p14_fyn').removeClass('res1')
});

/*image-text*/
$('#p14_fyn').hover(function()
{
$('#fin14').addClass('res2')
}
,function()
{
$('#fin14').removeClass('res2')
});

/*text-image*/
$('#p14v41').hover(function()
{
$('#p14_v41').addClass('res1')
}
,function()
{
$('#p14_v41').removeClass('res1')
});

/*image-text*/
$('#p14_v41').hover(function()
{
$('#p14v41').addClass('res2')
}
,function()
{
$('#p14v41').removeClass('res2')
});

/*text-image*/
$('#p14v42').hover(function()
{
$('#p14_v42').addClass('res1')
}
,function()
{
$('#p14_v42').removeClass('res1')
});

/*image-text*/
$('#p14_v42').hover(function()
{
$('#p14v42').addClass('res2')
}
,function()
{
$('#p14v42').removeClass('res2')
});

/*text-image*/
$('#p14v43').hover(function()
{
$('#p14_v43').addClass('res1')
}
,function()
{
$('#p14_v43').removeClass('res1')
});

/*image-text*/
$('#p14_v43').hover(function()
{
$('#p14v43').addClass('res2')
}
,function()
{
$('#p14v43').removeClass('res2')
});

/*text-image*/
$('#p14v44').hover(function()
{
$('#p14_v44').addClass('res1')
}
,function()
{
$('#p14_v44').removeClass('res1')
});

/*image-text*/
$('#p14_v44').hover(function()
{
$('#p14v44').addClass('res2')
}
,function()
{
$('#p14v44').removeClass('res2')
});


/*pagina15*/
/*text-image*/
$('#op15').hover(function()
{
$('#p15_op').addClass('res1')
}
,function()
{
$('#p15_op').removeClass('res1')
});

/*image-text*/
$('#p15_op').hover(function()
{
$('#op15').addClass('ophov')
}
,function()
{
$('#op15').removeClass('ophov')
});

/*text-image*/
$('#he15').hover(function()
{
$('#p15_he').addClass('res1')
}
,function()
{
$('#p15_he').removeClass('res1')
});

/*image-text*/
$('#p15_he').hover(function()
{
$('#he15').addClass('res2')
}
,function()
{
$('#he15').removeClass('res2')
});

/*text-image*/
$('#p15v1').hover(function()
{
$('#p15_v1').addClass('res1')
}
,function()
{
$('#p15_v1').removeClass('res1')
});

/*image-text*/
$('#p15_v1').hover(function()
{
$('#p15v1').addClass('res2')
}
,function()
{
$('#p15v1').removeClass('res2')
});

/*text-image*/
$('#p15v2').hover(function()
{
$('#p15_v2').addClass('res1')
}
,function()
{
$('#p15_v2').removeClass('res1')
});

/*image-text*/
$('#p15_v2').hover(function()
{
$('#p15v2').addClass('res2')
}
,function()
{
$('#p15v2').removeClass('res2')
});

/*text-image*/
$('#p15v3').hover(function()
{
$('#p15_v3').addClass('res1')
}
,function()
{
$('#p15_v3').removeClass('res1')
});

/*image-text*/
$('#p15_v3').hover(function()
{
$('#p15v3').addClass('res2')
}
,function()
{
$('#p15v3').removeClass('res2')
});

/*text-image*/
$('#p15v4').hover(function()
{
$('#p15_v4').addClass('res1')
}
,function()
{
$('#p15_v4').removeClass('res1')
});

/*image-text*/
$('#p15_v4').hover(function()
{
$('#p15v4').addClass('res2')
}
,function()
{
$('#p15v4').removeClass('res2')
});

/*text-image*/
$('#p15v5').hover(function()
{
$('#p15_v5').addClass('res1')
}
,function()
{
$('#p15_v5').removeClass('res1')
});

/*image-text*/
$('#p15_v5').hover(function()
{
$('#p15v5').addClass('res2')
}
,function()
{
$('#p15v5').removeClass('res2')
});

/*text-image*/
$('#p15v6').hover(function()
{
$('#p15_v6').addClass('res1')
}
,function()
{
$('#p15_v6').removeClass('res1')
});

/*image-text*/
$('#p15_v6').hover(function()
{
$('#p15v6').addClass('res2')
}
,function()
{
$('#p15v6').removeClass('res2')
});

/*text-image*/
$('#p15v7').hover(function()
{
$('#p15_v7').addClass('res1')
}
,function()
{
$('#p15_v7').removeClass('res1')
});

/*image-text*/
$('#p15_v7').hover(function()
{
$('#p15v7').addClass('res2')
}
,function()
{
$('#p15v7').removeClass('res2')
});

/*text-image*/
$('#p15v8').hover(function()
{
$('#p15_v8').addClass('res1')
}
,function()
{
$('#p15_v8').removeClass('res1')
});

/*image-text*/
$('#p15_v8').hover(function()
{
$('#p15v8').addClass('res2')
}
,function()
{
$('#p15v8').removeClass('res2')
});

/*text-image*/
$('#p15v9').hover(function()
{
$('#p15_v9').addClass('res1')
}
,function()
{
$('#p15_v9').removeClass('res1')
});

/*image-text*/
$('#p15_v9').hover(function()
{
$('#p15v9').addClass('res2')
}
,function()
{
$('#p15v9').removeClass('res2')
});

/*text-image*/
$('#p15v10').hover(function()
{
$('#p15_v10').addClass('res1')
}
,function()
{
$('#p15_v10').removeClass('res1')
});

/*image-text*/
$('#p15_v10').hover(function()
{
$('#p15v10').addClass('res2')
}
,function()
{
$('#p15v10').removeClass('res2')
});

/*text-image*/
$('#p15v11').hover(function()
{
$('#p15_v11').addClass('res1')
}
,function()
{
$('#p15_v11').removeClass('res1')
});

/*image-text*/
$('#p15_v11').hover(function()
{
$('#p15v11').addClass('res2')
}
,function()
{
$('#p15v11').removeClass('res2')
});

/*text-image*/
$('#p15v12').hover(function()
{
$('#p15_v12').addClass('res1')
}
,function()
{
$('#p15_v12').removeClass('res1')
});

/*image-text*/
$('#p15_v12').hover(function()
{
$('#p15v12').addClass('res2')
}
,function()
{
$('#p15v12').removeClass('res2')
});

/*text-image*/
$('#p15v13').hover(function()
{
$('#p15_v13').addClass('res1')
}
,function()
{
$('#p15_v13').removeClass('res1')
});

/*image-text*/
$('#p15_v13').hover(function()
{
$('#p15v13').addClass('res2')
}
,function()
{
$('#p15v13').removeClass('res2')
});

/*text-image*/
$('#p15v14').hover(function()
{
$('#p15_v14').addClass('res1')
}
,function()
{
$('#p15_v14').removeClass('res1')
});

/*image-text*/
$('#p15_v14').hover(function()
{
$('#p15v14').addClass('res2')
}
,function()
{
$('#p15v14').removeClass('res2')
});

/*text-image*/
$('#p15v15').hover(function()
{
$('#p15_v15').addClass('res1')
}
,function()
{
$('#p15_v15').removeClass('res1')
});

/*image-text*/
$('#p15_v15').hover(function()
{
$('#p15v15').addClass('res2')
}
,function()
{
$('#p15v15').removeClass('res2')
});

/*text-image*/
$('#p15v16').hover(function()
{
$('#p15_v16').addClass('res1')
}
,function()
{
$('#p15_v16').removeClass('res1')
});

/*image-text*/
$('#p15_v16').hover(function()
{
$('#p15v16').addClass('res2')
}
,function()
{
$('#p15v16').removeClass('res2')
});

/*text-image*/
$('#p15v17').hover(function()
{
$('#p15_v17').addClass('res1')
}
,function()
{
$('#p15_v17').removeClass('res1')
});

/*image-text*/
$('#p15_v17').hover(function()
{
$('#p15v17').addClass('res2')
}
,function()
{
$('#p15v17').removeClass('res2')
});

/*text-image*/
$('#p15v18').hover(function()
{
$('#p15_v18').addClass('res1')
}
,function()
{
$('#p15_v18').removeClass('res1')
});

/*image-text*/
$('#p15_v18').hover(function()
{
$('#p15v18').addClass('res2')
}
,function()
{
$('#p15v18').removeClass('res2')
});

/*text-image*/
$('#p15v19').hover(function()
{
$('#p15_v19').addClass('res1')
}
,function()
{
$('#p15_v19').removeClass('res1')
});

/*image-text*/
$('#p15_v19').hover(function()
{
$('#p15v19').addClass('res2')
}
,function()
{
$('#p15v19').removeClass('res2')
});

/*text-image*/
$('#p15v20').hover(function()
{
$('#p15_v20').addClass('res1')
}
,function()
{
$('#p15_v20').removeClass('res1')
});

/*image-text*/
$('#p15_v20').hover(function()
{
$('#p15v20').addClass('res2')
}
,function()
{
$('#p15v20').removeClass('res2')
});

/*text-image*/
$('#p15v21').hover(function()
{
$('#p15_v21').addClass('res1')
}
,function()
{
$('#p15_v21').removeClass('res1')
});

/*image-text*/
$('#p15_v21').hover(function()
{
$('#p15v21').addClass('res2')
}
,function()
{
$('#p15v21').removeClass('res2')
});

/*text-image*/
$('#p15v22').hover(function()
{
$('#p15_v22').addClass('res1')
}
,function()
{
$('#p15_v22').removeClass('res1')
});

/*image-text*/
$('#p15_v22').hover(function()
{
$('#p15v22').addClass('res2')
}
,function()
{
$('#p15v22').removeClass('res2')
});

/*text-image*/
$('#p15v23').hover(function()
{
$('#p15_v23').addClass('res1')
}
,function()
{
$('#p15_v23').removeClass('res1')
});

/*image-text*/
$('#p15_v23').hover(function()
{
$('#p15v23').addClass('res2')
}
,function()
{
$('#p15v23').removeClass('res2')
});

/*text-image*/
$('#p15v24').hover(function()
{
$('#p15_v24').addClass('res1')
}
,function()
{
$('#p15_v24').removeClass('res1')
});

/*image-text*/
$('#p15_v24').hover(function()
{
$('#p15v24').addClass('res2')
}
,function()
{
$('#p15v24').removeClass('res2')
});


/*pagina16*/
/*text-image*/
$('#p16v25').hover(function()
{
$('#p16_v25').addClass('res1')
}
,function()
{
$('#p16_v25').removeClass('res1')
});

/*image-text*/
$('#p16_v25').hover(function()
{
$('#pag16v25').addClass('res2')
}
,function()
{
$('#pag16v25').removeClass('res2')
});

/*text-image*/
$('#p16v26').hover(function()
{
$('#p16_v26').addClass('res1')
}
,function()
{
$('#p16_v26').removeClass('res1')
});

/*image-text*/
$('#p16_v26').hover(function()
{
$('#p16v26').addClass('res2')
}
,function()
{
$('#p16v26').removeClass('res2')
});

/*text-image*/
$('#p16v27').hover(function()
{
$('#p16_v27').addClass('res1')
}
,function()
{
$('#p16_v27').removeClass('res1')
});

/*image-text*/
$('#p16_v27').hover(function()
{
$('#p16v27').addClass('res2')
}
,function()
{
$('#p16v27').removeClass('res2')
});

/*text-image*/
$('#p16v28').hover(function()
{
$('#p16_v28').addClass('res1')
}
,function()
{
$('#p16_v28').removeClass('res1')
});

/*image-text*/
$('#p16_v28').hover(function()
{
$('#p16v28').addClass('res2')
}
,function()
{
$('#p16v28').removeClass('res2')
});

/*text-image*/
$('#p16v29').hover(function()
{
$('#p16_v29').addClass('res1')
}
,function()
{
$('#p16_v29').removeClass('res1')
});

/*image-text*/
$('#p16_v29').hover(function()
{
$('#p16v29').addClass('res2')
}
,function()
{
$('#p16v29').removeClass('res2')
});

/*text-image*/
$('#p16v30').hover(function()
{
$('#p16_v30').addClass('res1')
}
,function()
{
$('#p16_v30').removeClass('res1')
});

/*image-text*/
$('#p16_v30').hover(function()
{
$('#p16v30').addClass('res2')
}
,function()
{
$('#p16v30').removeClass('res2')
});

/*text-image*/
$('#p16v31').hover(function()
{
$('#p16_v31').addClass('res1')
}
,function()
{
$('#p16_v31').removeClass('res1')
});

/*image-text*/
$('#p16_v31').hover(function()
{
$('#p16v31').addClass('res2')
}
,function()
{
$('#p16v31').removeClass('res2')
});

/*text-image*/
$('#p16v32').hover(function()
{
$('#p16_v32').addClass('res1')
}
,function()
{
$('#p16_v32').removeClass('res1')
});

/*image-text*/
$('#p16_v32').hover(function()
{
$('#p16v32').addClass('res2')
}
,function()
{
$('#p16v32').removeClass('res2')
});

/*text-image*/
$('#p16v33').hover(function()
{
$('#p16_v33').addClass('res1')
}
,function()
{
$('#p16_v33').removeClass('res1')
});

/*image-text*/
$('#p16_v33').hover(function()
{
$('#p16v33').addClass('res2')
}
,function()
{
$('#p16v33').removeClass('res2')
});

/*text-image*/
$('#p16v34').hover(function()
{
$('#p16_v34').addClass('res1')
}
,function()
{
$('#p16_v34').removeClass('res1')
});

/*image-text*/
$('#p16_v34').hover(function()
{
$('#p16v34').addClass('res2')
}
,function()
{
$('#p16v34').removeClass('res2')
});

/*text-image*/
$('#p16v35').hover(function()
{
$('#p16_v35').addClass('res1')
}
,function()
{
$('#p16_v35').removeClass('res1')
});

/*image-text*/
$('#p16_v35').hover(function()
{
$('#p16v35').addClass('res2')
}
,function()
{
$('#p16v35').removeClass('res2')
});

/*text-image*/
$('#p16v36').hover(function()
{
$('#p16_v36').addClass('res1')
}
,function()
{
$('#p16_v36').removeClass('res1')
});

/*image-text*/
$('#p16_v36').hover(function()
{
$('#p16v36').addClass('res2')
}
,function()
{
$('#p16v36').removeClass('res2')
});

/*text-image*/
$('#p16v37').hover(function()
{
$('#p16_v37').addClass('res1')
}
,function()
{
$('#p16_v37').removeClass('res1')
});

/*image-text*/
$('#p16_v37').hover(function()
{
$('#p16v37').addClass('res2')
}
,function()
{
$('#p16v37').removeClass('res2')
});

/*text-image*/
$('#p16v38').hover(function()
{
$('#p16_v38').addClass('res1')
}
,function()
{
$('#p16_v38').removeClass('res1')
});

/*image-text*/
$('#p16_v38').hover(function()
{
$('#p16v38').addClass('res2')
}
,function()
{
$('#p16v38').removeClass('res2')
});

/*text-image*/
$('#p16v39').hover(function()
{
$('#p16_v39').addClass('res1')
}
,function()
{
$('#p16_v39').removeClass('res1')
});

/*image-text*/
$('#p16_v39').hover(function()
{
$('#p16v39').addClass('res2')
}
,function()
{
$('#p16v39').removeClass('res2')
});

/*text-image*/
$('#p16v40').hover(function()
{
$('#p16_v40').addClass('res1')
}
,function()
{
$('#p16_v40').removeClass('res1')
});

/*image-text*/
$('#p16_v40').hover(function()
{
$('#p16v40').addClass('res2')
}
,function()
{
$('#p16v40').removeClass('res2')
});

/*text-image*/
$('#p16v41').hover(function()
{
$('#p16_v41').addClass('res1')
}
,function()
{
$('#p16_v41').removeClass('res1')
});

/*image-text*/
$('#p16_v41').hover(function()
{
$('#p16v41').addClass('res2')
}
,function()
{
$('#p16v41').removeClass('res2')
});

/*text-image*/
$('#p16v42').hover(function()
{
$('#p16_v42').addClass('res1')
}
,function()
{
$('#p16_v42').removeClass('res1')
});

/*image-text*/
$('#p16_v42').hover(function()
{
$('#p16v42').addClass('res2')
}
,function()
{
$('#p16v42').removeClass('res2')
});

/*text-image*/
$('#p16v43').hover(function()
{
$('#p16_v43').addClass('res1')
}
,function()
{
$('#p16_v43').removeClass('res1')
});

/*image-text*/
$('#p16_v43').hover(function()
{
$('#p16v43').addClass('res2')
}
,function()
{
$('#p16v43').removeClass('res2')
});

/*text-image*/
$('#p16v44').hover(function()
{
$('#p16_v44').addClass('res1')
}
,function()
{
$('#p16_v44').removeClass('res1')
});

/*image-text*/
$('#p16_v44').hover(function()
{
$('#p16v44').addClass('res2')
}
,function()
{
$('#p16v44').removeClass('res2')
});

/*text-image*/
$('#p16v45').hover(function()
{
$('#p16_v45').addClass('res1')
}
,function()
{
$('#p16_v45').removeClass('res1')
});

/*image-text*/
$('#p16_v45').hover(function()
{
$('#p16v45').addClass('res2')
}
,function()
{
$('#p16v45').removeClass('res2')
});

/*text-image*/
$('#p16v46').hover(function()
{
$('#p16_v46').addClass('res1')
}
,function()
{
$('#p16_v46').removeClass('res1')
});

/*image-text*/
$('#p16_v46').hover(function()
{
$('#p16v46').addClass('res2')
}
,function()
{
$('#p16v46').removeClass('res2')
});

/*text-image*/
$('#p16v47').hover(function()
{
$('#p16_v47').addClass('res1')
}
,function()
{
$('#p16_v47').removeClass('res1')
});

/*image-text*/
$('#p16_v47').hover(function()
{
$('#p16v47').addClass('res2')
}
,function()
{
$('#p16v47').removeClass('res2')
});

/*text-image*/
$('#p16v48').hover(function()
{
$('#p16_v48').addClass('res1')
}
,function()
{
$('#p16_v48').removeClass('res1')
});

/*image-text*/
$('#p16_v48').hover(function()
{
$('#p16v48').addClass('res2')
}
,function()
{
$('#p16v48').removeClass('res2')
});


/*pagina17*/
/*text-image*/
$('#fin17').hover(function()
{
$('#p17_fyn').addClass('res1')
}
,function()
{
$('#p17_fyn').removeClass('res1')
});

/*image-text*/
$('#p17_fyn').hover(function()
{
$('#fin17').addClass('res2')
}
,function()
{
$('#fin17').removeClass('res2')
});

/*text-image*/
$('#p17v49').hover(function()
{
$('#p17_v49').addClass('res1')
}
,function()
{
$('#p17_v49').removeClass('res1')
});

/*image-text*/
$('#p17_v49').hover(function()
{
$('#p17v49').addClass('res2')
}
,function()
{
$('#p17v49').removeClass('res2')
});

/*text-image*/
$('#p17v50').hover(function()
{
$('#p17_v50').addClass('res1')
}
,function()
{
$('#p17_v50').removeClass('res1')
});

/*image-text*/
$('#p17_v50').hover(function()
{
$('#p17v50').addClass('res2')
}
,function()
{
$('#p17v50').removeClass('res2')
});

/*text-image*/
$('#p17v51').hover(function()
{
$('#p17_v51').addClass('res1')
}
,function()
{
$('#p17_v51').removeClass('res1')
});

/*image-text*/
$('#p17_v51').hover(function()
{
$('#p17v51').addClass('res2')
}
,function()
{
$('#p17v51').removeClass('res2')
});

/*text-image*/
$('#p17v52').hover(function()
{
$('#p17_v52').addClass('res1')
}
,function()
{
$('#p17_v52').removeClass('res1')
});

/*image-text*/
$('#p17_v52').hover(function()
{
$('#p17v52').addClass('res2')
}
,function()
{
$('#p17v52').removeClass('res2')
});

/*text-image*/
$('#op17').hover(function()
{
$('#p17_op').addClass('res1')
}
,function()
{
$('#p17_op').removeClass('res1')
});

/*image-text*/
$('#p17_op').hover(function()
{
$('#op17').addClass('ophov')
}
,function()
{
$('#op17').removeClass('ophov')
});

/*text-image*/
$('#he17').hover(function()
{
$('#p17_he').addClass('res1')
}
,function()
{
$('#p17_he').removeClass('res1')
});

/*image-text*/
$('#p17_he').hover(function()
{
$('#he17').addClass('res2')
}
,function()
{
$('#he17').removeClass('res2')
});

/*text-image*/
$('#p17v1').hover(function()
{
$('#p17_v1').addClass('res1')
}
,function()
{
$('#p17_v1').removeClass('res1')
});

/*image-text*/
$('#p17_v1').hover(function()
{
$('#p17v1').addClass('res2')
}
,function()
{
$('#p17v1').removeClass('res2')
});

/*text-image*/
$('#p17v2').hover(function()
{
$('#p17_v2').addClass('res1')
}
,function()
{
$('#p17_v2').removeClass('res1')
});

/*image-text*/
$('#p17_v2').hover(function()
{
$('#p17v2').addClass('res2')
}
,function()
{
$('#p17v2').removeClass('res2')
});

/*text-image*/
$('#p17v3').hover(function()
{
$('#p17_v3').addClass('res1')
}
,function()
{
$('#p17_v3').removeClass('res1')
});

/*image-text*/
$('#p17_v3').hover(function()
{
$('#p17v3').addClass('res2')
}
,function()
{
$('#p17v3').removeClass('res2')
});

/*text-image*/
$('#p17v4').hover(function()
{
$('#p17_v4').addClass('res1')
}
,function()
{
$('#p17_v4').removeClass('res1')
});

/*image-text*/
$('#p17_v4').hover(function()
{
$('#p17v4').addClass('res2')
}
,function()
{
$('#p17v4').removeClass('res2')
});

/*text-image*/
$('#p17v5').hover(function()
{
$('#p17_v5').addClass('res1')
}
,function()
{
$('#p17_v5').removeClass('res1')
});

/*image-text*/
$('#p17_v5').hover(function()
{
$('#p17v5').addClass('res2')
}
,function()
{
$('#p17v5').removeClass('res2')
});

/*text-image*/
$('#p17v6').hover(function()
{
$('#p17_v6').addClass('res1')
}
,function()
{
$('#p17_v6').removeClass('res1')
});

/*image-text*/
$('#p17_v6').hover(function()
{
$('#p17v6').addClass('res2')
}
,function()
{
$('#p17v6').removeClass('res2')
});

/*text-image*/
$('#p17v7').hover(function()
{
$('#p17_v7').addClass('res1')
}
,function()
{
$('#p17_v7').removeClass('res1')
});

/*image-text*/
$('#p17_v7').hover(function()
{
$('#p17v7').addClass('res2')
}
,function()
{
$('#p17v7').removeClass('res2')
});

/*text-image*/
$('#p17v8').hover(function()
{
$('#p17_v8').addClass('res1')
}
,function()
{
$('#p17_v8').removeClass('res1')
});

/*image-text*/
$('#p17_v8').hover(function()
{
$('#p17v8').addClass('res2')
}
,function()
{
$('#p17v8').removeClass('res2')
});

/*text-image*/
$('#p17v9').hover(function()
{
$('#p17_v9').addClass('res1')
}
,function()
{
$('#p17_v9').removeClass('res1')
});

/*image-text*/
$('#p17_v9').hover(function()
{
$('#p17v9').addClass('res2')
}
,function()
{
$('#p17v9').removeClass('res2')
});

/*text-image*/
$('#ma17').hover(function()
{
$('#p17_ma17').addClass('res1')
}
,function()
{
$('#p17_ma17').removeClass('res1')
});

/*image-text*/
$('#p17_ma17').hover(function()
{
$('#ma17').addClass('res2')
}
,function()
{
$('#ma17').removeClass('res2')
});

/*text-image*/
$('#p17v10').hover(function()
{
$('#p17_v10').addClass('res1')
}
,function()
{
$('#p17_v10').removeClass('res1')
});

/*image-text*/
$('#p17_v10').hover(function()
{
$('#p17v10').addClass('res2')
}
,function()
{
$('#p17v10').removeClass('res2')
});

/*text-image*/
$('#p17v11').hover(function()
{
$('#p17_v11').addClass('res1')
}
,function()
{
$('#p17_v11').removeClass('res1')
});

/*image-text*/
$('#p17_v11').hover(function()
{
$('#p17v11').addClass('res2')
}
,function()
{
$('#p17v11').removeClass('res2')
});

/*text-image*/
$('#p17v12').hover(function()
{
$('#p17_v12').addClass('res1')
}
,function()
{
$('#p17_v12').removeClass('res1')
});

/*image-text*/
$('#p17_v12').hover(function()
{
$('#p17v12').addClass('res2')
}
,function()
{
$('#p17v12').removeClass('res2')
});

/*text-image*/
$('#p17v13').hover(function()
{
$('#p17_v13').addClass('res1')
}
,function()
{
$('#p17_v13').removeClass('res1')
});

/*image-text*/
$('#p17_v13').hover(function()
{
$('#p17v13').addClass('res2')
}
,function()
{
$('#p17v13').removeClass('res2')
});

/*text-image*/
$('#p17v14').hover(function()
{
$('#p17_v14').addClass('res1')
}
,function()
{
$('#p17_v14').removeClass('res1')
});

/*image-text*/
$('#p17_v14').hover(function()
{
$('#p17v14').addClass('res2')
}
,function()
{
$('#p17v14').removeClass('res2')
});

/*text-image*/
$('#p17v15').hover(function()
{
$('#p17_v15').addClass('res1')
}
,function()
{
$('#p17_v15').removeClass('res1')
});

/*image-text*/
$('#p17_v15').hover(function()
{
$('#p17v15').addClass('res2')
}
,function()
{
$('#p17v15').removeClass('res2')
});

/*text-image*/
$('#p17v16').hover(function()
{
$('#p17_v16').addClass('res1')
}
,function()
{
$('#p17_v16').removeClass('res1')
});

/*image-text*/
$('#p17_v16').hover(function()
{
$('#p17v16').addClass('res2')
}
,function()
{
$('#p17v16').removeClass('res2')
});

/*text-image*/
$('#p17v17').hover(function()
{
$('#p17_v17').addClass('res1')
}
,function()
{
$('#p17_v17').removeClass('res1')
});

/*image-text*/
$('#p17_v17').hover(function()
{
$('#p17v17').addClass('res2')
}
,function()
{
$('#p17v17').removeClass('res2')
});

/*text-image*/
$('#p17v18').hover(function()
{
$('#p17_v18').addClass('res1')
}
,function()
{
$('#p17_v18').removeClass('res1')
});

/*image-text*/
$('#p17_v18').hover(function()
{
$('#p17v18').addClass('res2')
}
,function()
{
$('#p17v18').removeClass('res2')
});


/*pagina18*/
/*text-image*/
$('#ma18_1').hover(function()
{
$('#p18_ma18_1').addClass('res1')
}
,function()
{
$('#p18_ma18_1').removeClass('res1')
});

/*image-text*/
$('#p18_ma18_1').hover(function()
{
$('#ma18_1').addClass('res2')
}
,function()
{
$('#ma18_1').removeClass('res2')
});

/*text-image*/
$('#p18v19').hover(function()
{
$('#p18_v19').addClass('res1')
}
,function()
{
$('#p18_v19').removeClass('res1')
});

/*image-text*/
$('#p18_v19').hover(function()
{
$('#p18v19').addClass('res2')
}
,function()
{
$('#p18v19').removeClass('res2')
});

/*text-image*/
$('#p18v20').hover(function()
{
$('#p18_v20').addClass('res1')
}
,function()
{
$('#p18_v20').removeClass('res1')
});

/*image-text*/
$('#p18_v20').hover(function()
{
$('#p18v20').addClass('res2')
}
,function()
{
$('#p18v20').removeClass('res2')
});

/*text-image*/
$('#p18v21').hover(function()
{
$('#p18_v21').addClass('res1')
}
,function()
{
$('#p18_v21').removeClass('res1')
});

/*image-text*/
$('#p18_v21').hover(function()
{
$('#p18v21').addClass('res2')
}
,function()
{
$('#p18v21').removeClass('res2')
});

/*text-image*/
$('#p18v22').hover(function()
{
$('#p18_v22').addClass('res1')
}
,function()
{
$('#p18_v22').removeClass('res1')
});

/*image-text*/
$('#p18_v22').hover(function()
{
$('#p18v22').addClass('res2')
}
,function()
{
$('#p18v22').removeClass('res2')
});

/*text-image*/
$('#p18v23').hover(function()
{
$('#p18_v23').addClass('res1')
}
,function()
{
$('#p18_v23').removeClass('res1')
});

/*image-text*/
$('#p18_v23').hover(function()
{
$('#p18v23').addClass('res2')
}
,function()
{
$('#p18v23').removeClass('res2')
});

/*text-image*/
$('#p18v24').hover(function()
{
$('#p18_v24').addClass('res1')
}
,function()
{
$('#p18_v24').removeClass('res1')
});

/*image-text*/
$('#p18_v24').hover(function()
{
$('#p18v24').addClass('res2')
}
,function()
{
$('#p18v24').removeClass('res2')
});

/*text-image*/
$('#p18v25').hover(function()
{
$('#p18_v25').addClass('res1')
}
,function()
{
$('#p18_v25').removeClass('res1')
});

/*image-text*/
$('#p18_v25').hover(function()
{
$('#p18v25').addClass('res2')
}
,function()
{
$('#p18v25').removeClass('res2')
});

/*text-image*/
$('#p18v26').hover(function()
{
$('#p18_v26').addClass('res1')
}
,function()
{
$('#p18_v26').removeClass('res1')
});

/*image-text*/
$('#p18_v26').hover(function()
{
$('#p18v26').addClass('res2')
}
,function()
{
$('#p18v26').removeClass('res2')
});

/*text-image*/
$('#p18v27').hover(function()
{
$('#p18_v27').addClass('res1')
}
,function()
{
$('#p18_v27').removeClass('res1')
});

/*image-text*/
$('#p18_v27').hover(function()
{
$('#p18v27').addClass('res2')
}
,function()
{
$('#p18v27').removeClass('res2')
});

/*text-image*/
$('#ma18_2').hover(function()
{
$('#p18_ma18_2').addClass('res1')
}
,function()
{
$('#p18_ma18_2').removeClass('res1')
});

/*image-text*/
$('#p18_ma18_2').hover(function()
{
$('#ma18_2').addClass('res2')
}
,function()
{
$('#ma18_2').removeClass('res2')
});

/*text-image*/
$('#p18v28').hover(function()
{
$('#p18_v28').addClass('res1')
}
,function()
{
$('#p18_v28').removeClass('res1')
});

/*image-text*/
$('#p18_v28').hover(function()
{
$('#p18v28').addClass('res2')
}
,function()
{
$('#p18v28').removeClass('res2')
});

/*text-image*/
$('#p18v29').hover(function()
{
$('#p18_v29').addClass('res1')
}
,function()
{
$('#p18_v29').removeClass('res1')
});

/*image-text*/
$('#p18_v29').hover(function()
{
$('#p18v29').addClass('res2')
}
,function()
{
$('#p18v29').removeClass('res2')
});

/*text-image*/
$('#p18v30').hover(function()
{
$('#p18_v30').addClass('res1')
}
,function()
{
$('#p18_v30').removeClass('res1')
});

/*image-text*/
$('#p18_v30').hover(function()
{
$('#p18v30').addClass('res2')
}
,function()
{
$('#p18v30').removeClass('res2')
});

/*text-image*/
$('#p18v31').hover(function()
{
$('#p18_v31').addClass('res1')
}
,function()
{
$('#p18_v31').removeClass('res1')
});

/*image-text*/
$('#p18_v31').hover(function()
{
$('#p18v31').addClass('res2')
}
,function()
{
$('#p18v31').removeClass('res2')
});

/*text-image*/
$('#p18v32').hover(function()
{
$('#p18_v32').addClass('res1')
}
,function()
{
$('#p18_v32').removeClass('res1')
});

/*image-text*/
$('#p18_v32').hover(function()
{
$('#p18v32').addClass('res2')
}
,function()
{
$('#p18v32').removeClass('res2')
});

/*text-image*/
$('#p18v33').hover(function()
{
$('#p18_v33').addClass('res1')
}
,function()
{
$('#p18_v33').removeClass('res1')
});

/*image-text*/
$('#p18_v33').hover(function()
{
$('#p18v33').addClass('res2')
}
,function()
{
$('#p18v33').removeClass('res2')
});

/*text-image*/
$('#p18v34').hover(function()
{
$('#p18_v34').addClass('res1')
}
,function()
{
$('#p18_v34').removeClass('res1')
});

/*image-text*/
$('#p18_v34').hover(function()
{
$('#p18v34').addClass('res2')
}
,function()
{
$('#p18v34').removeClass('res2')
});

/*text-image*/
$('#p18v35').hover(function()
{
$('#p18_v35').addClass('res1')
}
,function()
{
$('#p18_v35').removeClass('res1')
});

/*image-text*/
$('#p18_v35').hover(function()
{
$('#p18v35').addClass('res2')
}
,function()
{
$('#p18v35').removeClass('res2')
});

/*text-image*/
$('#p18v36').hover(function()
{
$('#p18_v36').addClass('res1')
}
,function()
{
$('#p18_v36').removeClass('res1')
});

/*image-text*/
$('#p18_v36').hover(function()
{
$('#p18v36').addClass('res2')
}
,function()
{
$('#p18v36').removeClass('res2')
});

/*text-image*/
$('#ma18_3').hover(function()
{
$('#p18_ma18_3').addClass('res1')
}
,function()
{
$('#p18_ma18_3').removeClass('res1')
});

/*image-text*/
$('#p18_ma18_3').hover(function()
{
$('#ma18_3').addClass('res2')
}
,function()
{
$('#ma18_3').removeClass('res2')
});

/*text-image*/
$('#p18v37').hover(function()
{
$('#p18_v37').addClass('res1')
}
,function()
{
$('#p18_v37').removeClass('res1')
});

/*image-text*/
$('#p18_v37').hover(function()
{
$('#p18v37').addClass('res2')
}
,function()
{
$('#p18v37').removeClass('res2')
});

/*text-image*/
$('#p18v38').hover(function()
{
$('#p18_v38').addClass('res1')
}
,function()
{
$('#p18_v38').removeClass('res1')
});

/*image-text*/
$('#p18_v38').hover(function()
{
$('#p18v38').addClass('res2')
}
,function()
{
$('#p18v38').removeClass('res2')
});

/*text-image*/
$('#p18v39').hover(function()
{
$('#p18_v39').addClass('res1')
}
,function()
{
$('#p18_v39').removeClass('res1')
});

/*image-text*/
$('#p18_v39').hover(function()
{
$('#p18v39').addClass('res2')
}
,function()
{
$('#p18v39').removeClass('res2')
});

/*text-image*/
$('#p18v40').hover(function()
{
$('#p18_v40').addClass('res1')
}
,function()
{
$('#p18_v40').removeClass('res1')
});

/*image-text*/
$('#p18_v40').hover(function()
{
$('#p18v40').addClass('res2')
}
,function()
{
$('#p18v40').removeClass('res2')
});

/*text-image*/
$('#p18v41').hover(function()
{
$('#p18_v41').addClass('res1')
}
,function()
{
$('#p18_v41').removeClass('res1')
});

/*image-text*/
$('#p18_v41').hover(function()
{
$('#p18v41').addClass('res2')
}
,function()
{
$('#p18v41').removeClass('res2')
});

/*text-image*/
$('#p18v42').hover(function()
{
$('#p18_v42').addClass('res1')
}
,function()
{
$('#p18_v42').removeClass('res1')
});

/*image-text*/
$('#p18_v42').hover(function()
{
$('#p18v42').addClass('res2')
}
,function()
{
$('#p18v42').removeClass('res2')
});

/*text-image*/
$('#p18v43').hover(function()
{
$('#p18_v43').addClass('res1')
}
,function()
{
$('#p18_v43').removeClass('res1')
});

/*image-text*/
$('#p18_v43').hover(function()
{
$('#p18v43').addClass('res2')
}
,function()
{
$('#p18v43').removeClass('res2')
});

/*text-image*/
$('#p18v44').hover(function()
{
$('#p18_v44').addClass('res1')
}
,function()
{
$('#p18_v44').removeClass('res1')
});

/*image-text*/
$('#p18_v44').hover(function()
{
$('#p18v44').addClass('res2')
}
,function()
{
$('#p18v44').removeClass('res2')
});

/*text-image*/
$('#p18v45').hover(function()
{
$('#p18_v45').addClass('res1')
}
,function()
{
$('#p18_v45').removeClass('res1')
});

/*image-text*/
$('#p18_v45').hover(function()
{
$('#p18v45').addClass('res2')
}
,function()
{
$('#p18v45').removeClass('res2')
});


/*pagina19*/
/*text-image*/
$('#ma19').hover(function()
{
$('#p19_ma19').addClass('res1')
}
,function()
{
$('#p19_ma19').removeClass('res1')
});

/*image-text*/
$('#p19_ma19').hover(function()
{
$('#ma19').addClass('res2')
}
,function()
{
$('#ma19').removeClass('res2')
});

/*text-image*/
$('#p19v46').hover(function()
{
$('#p19_v46').addClass('res1')
}
,function()
{
$('#p19_v46').removeClass('res1')
});

/*image-text*/
$('#p19_v46').hover(function()
{
$('#p19v46').addClass('res2')
}
,function()
{
$('#p19v46').removeClass('res2')
});

/*text-image*/
$('#p19v47').hover(function()
{
$('#p19_v47').addClass('res1')
}
,function()
{
$('#p19_v47').removeClass('res1')
});

/*image-text*/
$('#p19_v47').hover(function()
{
$('#p19v47').addClass('res2')
}
,function()
{
$('#p19v47').removeClass('res2')
});

/*text-image*/
$('#p19v48').hover(function()
{
$('#p19_v48').addClass('res1')
}
,function()
{
$('#p19_v48').removeClass('res1')
});

/*image-text*/
$('#p19_v48').hover(function()
{
$('#p19v48').addClass('res2')
}
,function()
{
$('#p19v48').removeClass('res2')
});

$('#p19v49').hover(function()
{
$('#p19_v49').addClass('res1')
}
,function()
{
$('#p19_v49').removeClass('res1')
});

/*image-text*/
$('#p19_v49').hover(function()
{
$('#p19v49').addClass('res2')
}
,function()
{
$('#p19v49').removeClass('res2')
});

/*text-image*/
$('#p19v50').hover(function()
{
$('#p19_v50').addClass('res1')
}
,function()
{
$('#p19_v50').removeClass('res1')
});

/*image-text*/
$('#p19_v50').hover(function()
{
$('#p19v50').addClass('res2')
}
,function()
{
$('#p19v50').removeClass('res2')
});

/*text-image*/
$('#p19v51').hover(function()
{
$('#p19_v51').addClass('res1')
}
,function()
{
$('#p19_v51').removeClass('res1')
});

/*image-text*/
$('#p19_v51').hover(function()
{
$('#p19v51').addClass('res2')
}
,function()
{
$('#p19v51').removeClass('res2')
});

/*text-image*/
$('#p19v52').hover(function()
{
$('#p19_v52').addClass('res1')
}
,function()
{
$('#p19_v52').removeClass('res1')
});

/*image-text*/
$('#p19_v52').hover(function()
{
$('#p19v52').addClass('res2')
}
,function()
{
$('#p19v52').removeClass('res2')
});

/*text-image*/
$('#p19v53').hover(function()
{
$('#p19_v53').addClass('res1')
}
,function()
{
$('#p19_v53').removeClass('res1')
});

/*image-text*/
$('#p19_v53').hover(function()
{
$('#p19v53').addClass('res2')
}
,function()
{
$('#p19v53').removeClass('res2')
});

/*text-image*/
$('#p19v54').hover(function()
{
$('#p19_v54').addClass('res1')
}
,function()
{
$('#p19_v54').removeClass('res1')
});

/*image-text*/
$('#p19_v54').hover(function()
{
$('#p19v54').addClass('res2')
}
,function()
{
$('#p19v54').removeClass('res2')
});

/*text-image*/
$('#op19').hover(function()
{
$('#p19_op').addClass('res1')
}
,function()
{
$('#p19_op').removeClass('res1')
});

/*image-text*/
$('#p19_op').hover(function()
{
$('#op19').addClass('ophov')
}
,function()
{
$('#op19').removeClass('ophov')
});

/*text-image*/
$('#he19').hover(function()
{
$('#p19_he').addClass('res1')
}
,function()
{
$('#p19_he').removeClass('res1')
});

/*image-text*/
$('#p19_he').hover(function()
{
$('#he19').addClass('res2')
}
,function()
{
$('#he19').removeClass('res2')
});

/*text-image*/
$('#p19v1').hover(function()
{
$('#p19_v1').addClass('res1')
}
,function()
{
$('#p19_v1').removeClass('res1')
});

/*image-text*/
$('#p19_v1').hover(function()
{
$('#p19v1').addClass('res2')
}
,function()
{
$('#p19v1').removeClass('res2')
});

/*text-image*/
$('#p19v2').hover(function()
{
$('#p19_v2').addClass('res1')
}
,function()
{
$('#p19_v2').removeClass('res1')
});

/*image-text*/
$('#p19_v2').hover(function()
{
$('#p19v2').addClass('res2')
}
,function()
{
$('#p19v2').removeClass('res2')
});

/*text-image*/
$('#p19v3').hover(function()
{
$('#p19_v3').addClass('res1')
}
,function()
{
$('#p19_v3').removeClass('res1')
});

/*image-text*/
$('#p19_v3').hover(function()
{
$('#p19v3').addClass('res2')
}
,function()
{
$('#p19v3').removeClass('res2')
});

/*text-image*/
$('#p19v4').hover(function()
{
$('#p19_v4').addClass('res1')
}
,function()
{
$('#p19_v4').removeClass('res1')
});

/*image-text*/
$('#p19_v4').hover(function()
{
$('#p19v4').addClass('res2')
}
,function()
{
$('#p19v4').removeClass('res2')
});

/*text-image*/
$('#p19v5').hover(function()
{
$('#p19_v5').addClass('res1')
}
,function()
{
$('#p19_v5').removeClass('res1')
});

/*image-text*/
$('#p19_v5').hover(function()
{
$('#p19v5').addClass('res2')
}
,function()
{
$('#p19v5').removeClass('res2')
});

/*text-image*/
$('#p19v6').hover(function()
{
$('#p19_v6').addClass('res1')
}
,function()
{
$('#p19_v6').removeClass('res1')
});

/*image-text*/
$('#p19_v6').hover(function()
{
$('#p19v6').addClass('res2')
}
,function()
{
$('#p19v6').removeClass('res2')
});

/*text-image*/
$('#p19v7').hover(function()
{
$('#p19_v7').addClass('res1')
}
,function()
{
$('#p19_v7').removeClass('res1')
});

/*image-text*/
$('#p19_v7').hover(function()
{
$('#p19v7').addClass('res2')
}
,function()
{
$('#p19v7').removeClass('res2')
});

/*text-image*/
$('#p19v8').hover(function()
{
$('#p19_v8').addClass('res1')
}
,function()
{
$('#p19_v8').removeClass('res1')
});

/*image-text*/
$('#p19_v8').hover(function()
{
$('#p19v8').addClass('res2')
}
,function()
{
$('#p19v8').removeClass('res2')
});

/*text-image*/
$('#p19v9').hover(function()
{
$('#p19_v9').addClass('res1')
}
,function()
{
$('#p19_v9').removeClass('res1')
});

/*image-text*/
$('#p19_v9').hover(function()
{
$('#p19v9').addClass('res2')
}
,function()
{
$('#p19v9').removeClass('res2')
});

/*text-image*/
$('#p19v10').hover(function()
{
$('#p19_v10').addClass('res1')
}
,function()
{
$('#p19_v10').removeClass('res1')
});

/*image-text*/
$('#p19_v10').hover(function()
{
$('#p19v10').addClass('res2')
}
,function()
{
$('#p19v10').removeClass('res2')
});


/*pagina20*/
/*text-image*/
$('#ma20_1').hover(function()
{
$('#p20_ma20_1').addClass('res1')
}
,function()
{
$('#p20_ma20_1').removeClass('res1')
});

/*image-text*/
$('#p20_ma20_1').hover(function()
{
$('#ma20_1').addClass('res2')
}
,function()
{
$('#ma20_1').removeClass('res2')
});

/*text-image*/
$('#p20v11').hover(function()
{
$('#p20_v11').addClass('res1')
}
,function()
{
$('#p20_v11').removeClass('res1')
});

/*image-text*/
$('#p20_v11').hover(function()
{
$('#p20v11').addClass('res2')
}
,function()
{
$('#p20v11').removeClass('res2')
});

/*text-image*/
$('#p20v12').hover(function()
{
$('#p20_v12').addClass('res1')
}
,function()
{
$('#p20_v12').removeClass('res1')
});

/*image-text*/
$('#p20_v12').hover(function()
{
$('#p20v12').addClass('res2')
}
,function()
{
$('#p20v12').removeClass('res2')
});

/*text-image*/
$('#p20v13').hover(function()
{
$('#p20_v13').addClass('res1')
}
,function()
{
$('#p20_v13').removeClass('res1')
});

/*image-text*/
$('#p20_v13').hover(function()
{
$('#p20v13').addClass('res2')
}
,function()
{
$('#p20v13').removeClass('res2')
});

/*text-image*/
$('#p20v14').hover(function()
{
$('#p20_v14').addClass('res1')
}
,function()
{
$('#p20_v14').removeClass('res1')
});

/*image-text*/
$('#p20_v14').hover(function()
{
$('#p20v14').addClass('res2')
}
,function()
{
$('#p20v14').removeClass('res2')
});

/*text-image*/
$('#p20v15').hover(function()
{
$('#p20_v15').addClass('res1')
}
,function()
{
$('#p20_v15').removeClass('res1')
});

/*image-text*/
$('#p20_v15').hover(function()
{
$('#p20v15').addClass('res2')
}
,function()
{
$('#p20v15').removeClass('res2')
});

/*text-image*/
$('#p20v16').hover(function()
{
$('#p20_v16').addClass('res1')
}
,function()
{
$('#p20_v16').removeClass('res1')
});

/*image-text*/
$('#p20_v16').hover(function()
{
$('#p20v16').addClass('res2')
}
,function()
{
$('#p20v16').removeClass('res2')
});

/*text-image*/
$('#p20v17').hover(function()
{
$('#p20_v17').addClass('res1')
}
,function()
{
$('#p20_v17').removeClass('res1')
});

/*image-text*/
$('#p20_v17').hover(function()
{
$('#p20v17').addClass('res2')
}
,function()
{
$('#p20v17').removeClass('res2')
});

/*text-image*/
$('#p20v18').hover(function()
{
$('#p20_v18').addClass('res1')
}
,function()
{
$('#p20_v18').removeClass('res1')
});

/*image-text*/
$('#p20_v18').hover(function()
{
$('#p20v18').addClass('res2')
}
,function()
{
$('#p20v18').removeClass('res2')
});

/*text-image*/
$('#p20v19').hover(function()
{
$('#p20_v19').addClass('res1')
}
,function()
{
$('#p20_v19').removeClass('res1')
});

/*image-text*/
$('#p20_v19').hover(function()
{
$('#p20v19').addClass('res2')
}
,function()
{
$('#p20v19').removeClass('res2')
});

/*text-image*/
$('#p20v20').hover(function()
{
$('#p20_v20').addClass('res1')
}
,function()
{
$('#p20_v20').removeClass('res1')
});

/*image-text*/
$('#p20_v20').hover(function()
{
$('#p20v20').addClass('res2')
}
,function()
{
$('#p20v20').removeClass('res2')
});

/*text-image*/
$('#ma20_2').hover(function()
{
$('#p20_ma20_2').addClass('res1')
}
,function()
{
$('#p20_ma20_2').removeClass('res1')
});

/*image-text*/
$('#p20_ma20_2').hover(function()
{
$('#ma20_2').addClass('res2')
}
,function()
{
$('#ma20_2').removeClass('res2')
});

/*text-image*/
$('#p20v21').hover(function()
{
$('#p20_v21').addClass('res1')
}
,function()
{
$('#p20_v21').removeClass('res1')
});

/*image-text*/
$('#p20_v21').hover(function()
{
$('#p20v21').addClass('res2')
}
,function()
{
$('#p20v21').removeClass('res2')
});

/*text-image*/
$('#p20v22').hover(function()
{
$('#p20_v22').addClass('res1')
}
,function()
{
$('#p20_v22').removeClass('res1')
});

/*image-text*/
$('#p20_v22').hover(function()
{
$('#p20v22').addClass('res2')
}
,function()
{
$('#p20v22').removeClass('res2')
});

/*text-image*/
$('#p20v23').hover(function()
{
$('#p20_v23').addClass('res1')
}
,function()
{
$('#p20_v23').removeClass('res1')
});

/*image-text*/
$('#p20_v23').hover(function()
{
$('#p20v23').addClass('res2')
}
,function()
{
$('#p20v23').removeClass('res2')
});

/*text-image*/
$('#p20v24').hover(function()
{
$('#p20_v24').addClass('res1')
}
,function()
{
$('#p20_v24').removeClass('res1')
});

/*image-text*/
$('#p20_v24').hover(function()
{
$('#p20v24').addClass('res2')
}
,function()
{
$('#p20v24').removeClass('res2')
});

/*text-image*/
$('#p20v25').hover(function()
{
$('#p20_v25').addClass('res1')
}
,function()
{
$('#p20_v25').removeClass('res1')
});

/*image-text*/
$('#p20_v25').hover(function()
{
$('#p20v25').addClass('res2')
}
,function()
{
$('#p20v25').removeClass('res2')
});

/*text-image*/
$('#p20v26').hover(function()
{
$('#p20_v26').addClass('res1')
}
,function()
{
$('#p20_v26').removeClass('res1')
});

/*image-text*/
$('#p20_v26').hover(function()
{
$('#p20v26').addClass('res2')
}
,function()
{
$('#p20v26').removeClass('res2')
});

/*text-image*/
$('#p20v27').hover(function()
{
$('#p20_v27').addClass('res1')
}
,function()
{
$('#p20_v27').removeClass('res1')
});

/*image-text*/
$('#p20_v27').hover(function()
{
$('#p20v27').addClass('res2')
}
,function()
{
$('#p20v27').removeClass('res2')
});

/*text-image*/
$('#p20v28').hover(function()
{
$('#p20_v28').addClass('res1')
}
,function()
{
$('#p20_v28').removeClass('res1')
});

/*image-text*/
$('#p20_v28').hover(function()
{
$('#p20v28').addClass('res2')
}
,function()
{
$('#p20v28').removeClass('res2')
});

/*text-image*/
$('#p20v29').hover(function()
{
$('#p20_v29').addClass('res1')
}
,function()
{
$('#p20_v29').removeClass('res1')
});

/*image-text*/
$('#p20_v29').hover(function()
{
$('#p20v29').addClass('res2')
}
,function()
{
$('#p20v29').removeClass('res2')
});

/*text-image*/
$('#p20v30').hover(function()
{
$('#p20_v30').addClass('res1')
}
,function()
{
$('#p20_v30').removeClass('res1')
});

/*image-text*/
$('#p20_v30').hover(function()
{
$('#p20v30').addClass('res2')
}
,function()
{
$('#p20v30').removeClass('res2')
});


/*pagina21*/
/*text-image*/
$('#ma21_1').hover(function()
{
$('#p21_ma21_1').addClass('res1')
}
,function()
{
$('#p21_ma21_1').removeClass('res1')
});

/*image-text*/
$('#p21_ma21_1').hover(function()
{
$('#ma21_1').addClass('res2')
}
,function()
{
$('#ma21_1').removeClass('res2')
});

/*text-image*/
$('#p21v31').hover(function()
{
$('#p21_v31').addClass('res1')
}
,function()
{
$('#p21_v31').removeClass('res1')
});

/*image-text*/
$('#p21_v31').hover(function()
{
$('#p21v31').addClass('res2')
}
,function()
{
$('#p21v31').removeClass('res2')
});

/*text-image*/
$('#p21v32').hover(function()
{
$('#p21_v32').addClass('res1')
}
,function()
{
$('#p21_v32').removeClass('res1')
});

/*image-text*/
$('#p21_v32').hover(function()
{
$('#p21v32').addClass('res2')
}
,function()
{
$('#p21v32').removeClass('res2')
});

/*text-image*/
$('#p21v33').hover(function()
{
$('#p21_v33').addClass('res1')
}
,function()
{
$('#p21_v33').removeClass('res1')
});

/*image-text*/
$('#p21_v33').hover(function()
{
$('#p21v33').addClass('res2')
}
,function()
{
$('#p21v33').removeClass('res2')
});

/*text-image*/
$('#p21v34').hover(function()
{
$('#p21_v34').addClass('res1')
}
,function()
{
$('#p21_v34').removeClass('res1')
});

/*image-text*/
$('#p21_v34').hover(function()
{
$('#p21v34').addClass('res2')
}
,function()
{
$('#p21v34').removeClass('res2')
});

/*text-image*/
$('#p21v35').hover(function()
{
$('#p21_v35').addClass('res1')
}
,function()
{
$('#p21_v35').removeClass('res1')
});

/*image-text*/
$('#p21_v35').hover(function()
{
$('#p21v35').addClass('res2')
}
,function()
{
$('#p21v35').removeClass('res2')
});

/*text-image*/
$('#p21v36').hover(function()
{
$('#p21_v36').addClass('res1')
}
,function()
{
$('#p21_v36').removeClass('res1')
});

/*image-text*/
$('#p21_v36').hover(function()
{
$('#p21v36').addClass('res2')
}
,function()
{
$('#p21v36').removeClass('res2')
});

/*text-image*/
$('#p21v37').hover(function()
{
$('#p21_v37').addClass('res1')
}
,function()
{
$('#p21_v37').removeClass('res1')
});

/*image-text*/
$('#p21_v37').hover(function()
{
$('#p21v37').addClass('res2')
}
,function()
{
$('#p21v37').removeClass('res2')
});

/*text-image*/
$('#p21v38').hover(function()
{
$('#p21_v38').addClass('res1')
}
,function()
{
$('#p21_v38').removeClass('res1')
});

/*image-text*/
$('#p21_v38').hover(function()
{
$('#p21v38').addClass('res2')
}
,function()
{
$('#p21v38').removeClass('res2')
});

/*text-image*/
$('#p21v39').hover(function()
{
$('#p21_v39').addClass('res1')
}
,function()
{
$('#p21_v39').removeClass('res1')
});

/*image-text*/
$('#p21_v39').hover(function()
{
$('#p21v39').addClass('res2')
}
,function()
{
$('#p21v39').removeClass('res2')
});

/*text-image*/
$('#p21v40').hover(function()
{
$('#p21_v40').addClass('res1')
}
,function()
{
$('#p21_v40').removeClass('res1')
});

/*image-text*/
$('#p21_v40').hover(function()
{
$('#p21v40').addClass('res2')
}
,function()
{
$('#p21v40').removeClass('res2')
});

/*text-image*/
$('#ma21_2').hover(function()
{
$('#p21_ma21_2').addClass('res1')
}
,function()
{
$('#p21_ma21_2').removeClass('res1')
});

/*image-text*/
$('#p21_ma21_2').hover(function()
{
$('#ma21_2').addClass('res2')
}
,function()
{
$('#ma21_2').removeClass('res2')
});

/*text-image*/
$('#p21v41').hover(function()
{
$('#p21_v41').addClass('res1')
}
,function()
{
$('#p21_v41').removeClass('res1')
});

/*image-text*/
$('#p21_v41').hover(function()
{
$('#p21v41').addClass('res2')
}
,function()
{
$('#p21v41').removeClass('res2')
});

/*text-image*/
$('#p21v42').hover(function()
{
$('#p21_v42').addClass('res1')
}
,function()
{
$('#p21_v42').removeClass('res1')
});

/*image-text*/
$('#p21_v42').hover(function()
{
$('#p21v42').addClass('res2')
}
,function()
{
$('#p21v42').removeClass('res2')
});

/*text-image*/
$('#p21v43').hover(function()
{
$('#p21_v43').addClass('res1')
}
,function()
{
$('#p21_v43').removeClass('res1')
});

/*image-text*/
$('#p21_v43').hover(function()
{
$('#p21v43').addClass('res2')
}
,function()
{
$('#p21v43').removeClass('res2')
});

/*text-image*/
$('#p21v44').hover(function()
{
$('#p21_v44').addClass('res1')
}
,function()
{
$('#p21_v44').removeClass('res1')
});

/*image-text*/
$('#p21_v44').hover(function()
{
$('#p21v44').addClass('res2')
}
,function()
{
$('#p21v44').removeClass('res2')
});

/*text-image*/
$('#p21v45').hover(function()
{
$('#p21_v45').addClass('res1')
}
,function()
{
$('#p21_v45').removeClass('res1')
});

/*image-text*/
$('#p21_v45').hover(function()
{
$('#p21v45').addClass('res2')
}
,function()
{
$('#p21v45').removeClass('res2')
});

/*text-image*/
$('#p21v46').hover(function()
{
$('#p21_v46').addClass('res1')
}
,function()
{
$('#p21_v46').removeClass('res1')
});

/*image-text*/
$('#p21_v46').hover(function()
{
$('#p21v46').addClass('res2')
}
,function()
{
$('#p21v46').removeClass('res2')
});

/*text-image*/
$('#p21v47').hover(function()
{
$('#p21_v47').addClass('res1')
}
,function()
{
$('#p21_v47').removeClass('res1')
});

/*image-text*/
$('#p21_v47').hover(function()
{
$('#p21v47').addClass('res2')
}
,function()
{
$('#p21v47').removeClass('res2')
});

/*text-image*/
$('#p21v48').hover(function()
{
$('#p21_v48').addClass('res1')
}
,function()
{
$('#p21_v48').removeClass('res1')
});

/*image-text*/
$('#p21_v48').hover(function()
{
$('#p21v48').addClass('res2')
}
,function()
{
$('#p21v48').removeClass('res2')
});

$('#p21v49').hover(function()
{
$('#p21_v49').addClass('res1')
}
,function()
{
$('#p21_v49').removeClass('res1')
});

/*image-text*/
$('#p21_v49').hover(function()
{
$('#p21v49').addClass('res2')
}
,function()
{
$('#p21v49').removeClass('res2')
});

/*text-image*/
$('#p21v50').hover(function()
{
$('#p21_v50').addClass('res1')
}
,function()
{
$('#p21_v50').removeClass('res1')
});

/*image-text*/
$('#p21_v50').hover(function()
{
$('#p21v50').addClass('res2')
}
,function()
{
$('#p21v50').removeClass('res2')
});


/*pagina22*/
/*text-image*/
$('#op22').hover(function()
{
$('#p22_op').addClass('res1')
}
,function()
{
$('#p22_op').removeClass('res1')
});

/*image-text*/
$('#p22_op').hover(function()
{
$('#op22').addClass('ophov')
}
,function()
{
$('#op22').removeClass('ophov')
});

/*text-image*/
$('#he22').hover(function()
{
$('#p22_he').addClass('res1')
}
,function()
{
$('#p22_he').removeClass('res1')
});

/*image-text*/
$('#p22_he').hover(function()
{
$('#he22').addClass('res2')
}
,function()
{
$('#he22').removeClass('res2')
});

/*text-image*/
$('#p22v1').hover(function()
{
$('#p22_v1').addClass('res1')
}
,function()
{
$('#p22_v1').removeClass('res1')
});

/*image-text*/
$('#p22_v1').hover(function()
{
$('#p22v1').addClass('res2')
}
,function()
{
$('#p22v1').removeClass('res2')
});

/*text-image*/
$('#p22v2').hover(function()
{
$('#p22_v2').addClass('res1')
}
,function()
{
$('#p22_v2').removeClass('res1')
});

/*image-text*/
$('#p22_v2').hover(function()
{
$('#p22v2').addClass('res2')
}
,function()
{
$('#p22v2').removeClass('res2')
});

/*text-image*/
$('#p22v3').hover(function()
{
$('#p22_v3').addClass('res1')
}
,function()
{
$('#p22_v3').removeClass('res1')
});

/*image-text*/
$('#p22_v3').hover(function()
{
$('#p22v3').addClass('res2')
}
,function()
{
$('#p22v3').removeClass('res2')
});

/*text-image*/
$('#p22v4').hover(function()
{
$('#p22_v4').addClass('res1')
}
,function()
{
$('#p22_v4').removeClass('res1')
});

/*image-text*/
$('#p22_v4').hover(function()
{
$('#p22v4').addClass('res2')
}
,function()
{
$('#p22v4').removeClass('res2')
});

/*text-image*/
$('#p22v5').hover(function()
{
$('#p22_v5').addClass('res1')
}
,function()
{
$('#p22_v5').removeClass('res1')
});

/*image-text*/
$('#p22_v5').hover(function()
{
$('#p22v5').addClass('res2')
}
,function()
{
$('#p22v5').removeClass('res2')
});

/*text-image*/
$('#p22v6').hover(function()
{
$('#p22_v6').addClass('res1')
}
,function()
{
$('#p22_v6').removeClass('res1')
});

/*image-text*/
$('#p22_v6').hover(function()
{
$('#p22v6').addClass('res2')
}
,function()
{
$('#p22v6').removeClass('res2')
});

/*text-image*/
$('#p22v7').hover(function()
{
$('#p22_v7').addClass('res1')
}
,function()
{
$('#p22_v7').removeClass('res1')
});

/*image-text*/
$('#p22_v7').hover(function()
{
$('#p22v7').addClass('res2')
}
,function()
{
$('#p22v7').removeClass('res2')
});

/*text-image*/
$('#p22v8').hover(function()
{
$('#p22_v8').addClass('res1')
}
,function()
{
$('#p22_v8').removeClass('res1')
});

/*image-text*/
$('#p22_v8').hover(function()
{
$('#p22v8').addClass('res2')
}
,function()
{
$('#p22v8').removeClass('res2')
});

/*text-image*/
$('#p22v9').hover(function()
{
$('#p22_v9').addClass('res1')
}
,function()
{
$('#p22_v9').removeClass('res1')
});

/*image-text*/
$('#p22_v9').hover(function()
{
$('#p22v9').addClass('res2')
}
,function()
{
$('#p22v9').removeClass('res2')
});

/*text-image*/
$('#p22v10').hover(function()
{
$('#p22_v10').addClass('res1')
}
,function()
{
$('#p22_v10').removeClass('res1')
});

/*image-text*/
$('#p22_v10').hover(function()
{
$('#p22v10').addClass('res2')
}
,function()
{
$('#p22v10').removeClass('res2')
});

/*text-image*/
$('#p22v11').hover(function()
{
$('#p22_v11').addClass('res1')
}
,function()
{
$('#p22_v11').removeClass('res1')
});

/*image-text*/
$('#p22_v11').hover(function()
{
$('#p22v11').addClass('res2')
}
,function()
{
$('#p22v11').removeClass('res2')
});

/*text-image*/
$('#p22v12').hover(function()
{
$('#p22_v12').addClass('res1')
}
,function()
{
$('#p22_v12').removeClass('res1')
});

/*image-text*/
$('#p22_v12').hover(function()
{
$('#p22v12').addClass('res2')
}
,function()
{
$('#p22v12').removeClass('res2')
});

/*text-image*/
$('#p22v13').hover(function()
{
$('#p22_v13').addClass('res1')
}
,function()
{
$('#p22_v13').removeClass('res1')
});

/*image-text*/
$('#p22_v13').hover(function()
{
$('#p22v13').addClass('res2')
}
,function()
{
$('#p22v13').removeClass('res2')
});

/*text-image*/
$('#p22v14').hover(function()
{
$('#p22_v14').addClass('res1')
}
,function()
{
$('#p22_v14').removeClass('res1')
});

/*image-text*/
$('#p22_v14').hover(function()
{
$('#p22v14').addClass('res2')
}
,function()
{
$('#p22v14').removeClass('res2')
});

/*text-image*/
$('#p22v15').hover(function()
{
$('#p22_v15').addClass('res1')
}
,function()
{
$('#p22_v15').removeClass('res1')
});

/*image-text*/
$('#p22_v15').hover(function()
{
$('#p22v15').addClass('res2')
}
,function()
{
$('#p22v15').removeClass('res2')
});

/*text-image*/
$('#p22v16').hover(function()
{
$('#p22_v16').addClass('res1')
}
,function()
{
$('#p22_v16').removeClass('res1')
});

/*image-text*/
$('#p22_v16').hover(function()
{
$('#p22v16').addClass('res2')
}
,function()
{
$('#p22v16').removeClass('res2')
});

/*text-image*/
$('#p22v17').hover(function()
{
$('#p22_v17').addClass('res1')
}
,function()
{
$('#p22_v17').removeClass('res1')
});

/*image-text*/
$('#p22_v17').hover(function()
{
$('#p22v17').addClass('res2')
}
,function()
{
$('#p22v17').removeClass('res2')
});

/*text-image*/
$('#p22v18').hover(function()
{
$('#p22_v18').addClass('res1')
}
,function()
{
$('#p22_v18').removeClass('res1')
});

/*image-text*/
$('#p22_v18').hover(function()
{
$('#p22v18').addClass('res2')
}
,function()
{
$('#p22v18').removeClass('res2')
});

/*text-image*/
$('#p22v19').hover(function()
{
$('#p22_v19').addClass('res1')
}
,function()
{
$('#p22_v19').removeClass('res1')
});

/*image-text*/
$('#p22_v19').hover(function()
{
$('#p22v19').addClass('res2')
}
,function()
{
$('#p22v19').removeClass('res2')
});

/*text-image*/
$('#p22v20').hover(function()
{
$('#p22_v20').addClass('res1')
}
,function()
{
$('#p22_v20').removeClass('res1')
});

/*image-text*/
$('#p22_v20').hover(function()
{
$('#p22v20').addClass('res2')
}
,function()
{
$('#p22v20').removeClass('res2')
});

/*text-image*/
$('#p22v21').hover(function()
{
$('#p22_v21').addClass('res1')
}
,function()
{
$('#p22_v21').removeClass('res1')
});

/*image-text*/
$('#p22_v21').hover(function()
{
$('#p22v21').addClass('res2')
}
,function()
{
$('#p22v21').removeClass('res2')
});

/*text-image*/
$('#p22v22').hover(function()
{
$('#p22_v22').addClass('res1')
}
,function()
{
$('#p22_v22').removeClass('res1')
});

/*image-text*/
$('#p22_v22').hover(function()
{
$('#p22v22').addClass('res2')
}
,function()
{
$('#p22v22').removeClass('res2')
});

/*text-image*/
$('#p22v23').hover(function()
{
$('#p22_v23').addClass('res1')
}
,function()
{
$('#p22_v23').removeClass('res1')
});

/*image-text*/
$('#p22_v23').hover(function()
{
$('#p22v23').addClass('res2')
}
,function()
{
$('#p22v23').removeClass('res2')
});

/*text-image*/
$('#p22v24').hover(function()
{
$('#p22_v24').addClass('res1')
}
,function()
{
$('#p22_v24').removeClass('res1')
});

/*image-text*/
$('#p22_v24').hover(function()
{
$('#p22v24').addClass('res2')
}
,function()
{
$('#p22v24').removeClass('res2')
});

/*text-image*/
$('#p22v25').hover(function()
{
$('#p22_v25').addClass('res1')
}
,function()
{
$('#p22_v25').removeClass('res1')
});

/*image-text*/
$('#p22_v25').hover(function()
{
$('#p22v25').addClass('res2')
}
,function()
{
$('#p22v25').removeClass('res2')
});

/*text-image*/
$('#p22v26').hover(function()
{
$('#p22_v26').addClass('res1')
}
,function()
{
$('#p22_v26').removeClass('res1')
});

/*image-text*/
$('#p22_v26').hover(function()
{
$('#p22v26').addClass('res2')
}
,function()
{
$('#p22v26').removeClass('res2')
});

/*text-image*/
$('#p22v27').hover(function()
{
$('#p22_v27').addClass('res1')
}
,function()
{
$('#p22_v27').removeClass('res1')
});

/*image-text*/
$('#p22_v27').hover(function()
{
$('#p22v27').addClass('res2')
}
,function()
{
$('#p22v27').removeClass('res2')
});


/*pagina23*/
/*text-image*/
$('#p23v28').hover(function()
{
$('#p23_v28').addClass('res1')
}
,function()
{
$('#p23_v28').removeClass('res1')
});

/*image-text*/
$('#p23_v28').hover(function()
{
$('#p23v28').addClass('res2')
}
,function()
{
$('#p23v28').removeClass('res2')
});

/*text-image*/
$('#p23v29').hover(function()
{
$('#p23_v29').addClass('res1')
}
,function()
{
$('#p23_v29').removeClass('res1')
});

/*image-text*/
$('#p23_v29').hover(function()
{
$('#p23v29').addClass('res2')
}
,function()
{
$('#p23v29').removeClass('res2')
});

/*text-image*/
$('#p23v30').hover(function()
{
$('#p23_v30').addClass('res1')
}
,function()
{
$('#p23_v30').removeClass('res1')
});

/*image-text*/
$('#p23_v30').hover(function()
{
$('#p23v30').addClass('res2')
}
,function()
{
$('#p23v30').removeClass('res2')
});

/*text-image*/
$('#p23v31').hover(function()
{
$('#p23_v31').addClass('res1')
}
,function()
{
$('#p23_v31').removeClass('res1')
});

/*image-text*/
$('#p23_v31').hover(function()
{
$('#p23v31').addClass('res2')
}
,function()
{
$('#p23v31').removeClass('res2')
});

/*text-image*/
$('#p23v32').hover(function()
{
$('#p23_v32').addClass('res1')
}
,function()
{
$('#p23_v32').removeClass('res1')
});

/*image-text*/
$('#p23_v32').hover(function()
{
$('#p23v32').addClass('res2')
}
,function()
{
$('#p23v32').removeClass('res2')
});

/*text-image*/
$('#p23v33').hover(function()
{
$('#p23_v33').addClass('res1')
}
,function()
{
$('#p23_v33').removeClass('res1')
});

/*image-text*/
$('#p23_v33').hover(function()
{
$('#p23v33').addClass('res2')
}
,function()
{
$('#p23v33').removeClass('res2')
});

/*text-image*/
$('#p23v34').hover(function()
{
$('#p23_v34').addClass('res1')
}
,function()
{
$('#p23_v34').removeClass('res1')
});

/*image-text*/
$('#p23_v34').hover(function()
{
$('#p23v34').addClass('res2')
}
,function()
{
$('#p23v34').removeClass('res2')
});

/*text-image*/
$('#p23v35').hover(function()
{
$('#p23_v35').addClass('res1')
}
,function()
{
$('#p23_v35').removeClass('res1')
});

/*image-text*/
$('#p23_v35').hover(function()
{
$('#p23v35').addClass('res2')
}
,function()
{
$('#p23v35').removeClass('res2')
});

/*text-image*/
$('#p23v36').hover(function()
{
$('#p23_v36').addClass('res1')
}
,function()
{
$('#p23_v36').removeClass('res1')
});

/*image-text*/
$('#p23_v36').hover(function()
{
$('#p23v36').addClass('res2')
}
,function()
{
$('#p23v36').removeClass('res2')
});

/*text-image*/
$('#p23v37').hover(function()
{
$('#p23_v37').addClass('res1')
}
,function()
{
$('#p23_v37').removeClass('res1')
});

/*image-text*/
$('#p23_v37').hover(function()
{
$('#p23v37').addClass('res2')
}
,function()
{
$('#p23v37').removeClass('res2')
});

/*text-image*/
$('#p23v38').hover(function()
{
$('#p23_v38').addClass('res1')
}
,function()
{
$('#p23_v38').removeClass('res1')
});

/*image-text*/
$('#p23_v38').hover(function()
{
$('#p23v38').addClass('res2')
}
,function()
{
$('#p23v38').removeClass('res2')
});

/*text-image*/
$('#p23v39').hover(function()
{
$('#p23_v39').addClass('res1')
}
,function()
{
$('#p23_v39').removeClass('res1')
});

/*image-text*/
$('#p23_v39').hover(function()
{
$('#p23v39').addClass('res2')
}
,function()
{
$('#p23v39').removeClass('res2')
});

/*text-image*/
$('#p23v40').hover(function()
{
$('#p23_v40').addClass('res1')
}
,function()
{
$('#p23_v40').removeClass('res1')
});

/*image-text*/
$('#p23_v40').hover(function()
{
$('#p23v40').addClass('res2')
}
,function()
{
$('#p23v40').removeClass('res2')
});

/*text-image*/
$('#p23v41').hover(function()
{
$('#p23_v41').addClass('res1')
}
,function()
{
$('#p23_v41').removeClass('res1')
});

/*image-text*/
$('#p23_v41').hover(function()
{
$('#p23v41').addClass('res2')
}
,function()
{
$('#p23v41').removeClass('res2')
});

/*text-image*/
$('#p23v42').hover(function()
{
$('#p23_v42').addClass('res1')
}
,function()
{
$('#p23_v42').removeClass('res1')
});

/*image-text*/
$('#p23_v42').hover(function()
{
$('#p23v42').addClass('res2')
}
,function()
{
$('#p23v42').removeClass('res2')
});

/*text-image*/
$('#p23v43').hover(function()
{
$('#p23_v43').addClass('res1')
}
,function()
{
$('#p23_v43').removeClass('res1')
});

/*image-text*/
$('#p23_v43').hover(function()
{
$('#p23v43').addClass('res2')
}
,function()
{
$('#p23v43').removeClass('res2')
});

/*text-image*/
$('#p23v44').hover(function()
{
$('#p23_v44').addClass('res1')
}
,function()
{
$('#p23_v44').removeClass('res1')
});

/*image-text*/
$('#p23_v44').hover(function()
{
$('#p23v44').addClass('res2')
}
,function()
{
$('#p23v44').removeClass('res2')
});

/*text-image*/
$('#p23v45').hover(function()
{
$('#p23_v45').addClass('res1')
}
,function()
{
$('#p23_v45').removeClass('res1')
});

/*image-text*/
$('#p23_v45').hover(function()
{
$('#p23v45').addClass('res2')
}
,function()
{
$('#p23v45').removeClass('res2')
});

/*text-image*/
$('#p23v46').hover(function()
{
$('#p23_v46').addClass('res1')
}
,function()
{
$('#p23_v46').removeClass('res1')
});

/*image-text*/
$('#p23_v46').hover(function()
{
$('#p23v46').addClass('res2')
}
,function()
{
$('#p23v46').removeClass('res2')
});

/*text-image*/
$('#p23v47').hover(function()
{
$('#p23_v47').addClass('res1')
}
,function()
{
$('#p23_v47').removeClass('res1')
});

/*image-text*/
$('#p23_v47').hover(function()
{
$('#p23v47').addClass('res2')
}
,function()
{
$('#p23v47').removeClass('res2')
});

/*text-image*/
$('#p23v48').hover(function()
{
$('#p23_v48').addClass('res1')
}
,function()
{
$('#p23_v48').removeClass('res1')
});

/*image-text*/
$('#p23_v48').hover(function()
{
$('#p23v48').addClass('res2')
}
,function()
{
$('#p23v48').removeClass('res2')
});

$('#p23v49').hover(function()
{
$('#p23_v49').addClass('res1')
}
,function()
{
$('#p23_v49').removeClass('res1')
});

/*image-text*/
$('#p23_v49').hover(function()
{
$('#p23v49').addClass('res2')
}
,function()
{
$('#p23v49').removeClass('res2')
});

/*text-image*/
$('#p23v50').hover(function()
{
$('#p23_v50').addClass('res1')
}
,function()
{
$('#p23_v50').removeClass('res1')
});

/*image-text*/
$('#p23_v50').hover(function()
{
$('#p23v50').addClass('res2')
}
,function()
{
$('#p23v50').removeClass('res2')
});

/*text-image*/
$('#p23v51').hover(function()
{
$('#p23_v51').addClass('res1')
}
,function()
{
$('#p23_v51').removeClass('res1')
});

/*image-text*/
$('#p23_v51').hover(function()
{
$('#p23v51').addClass('res2')
}
,function()
{
$('#p23v51').removeClass('res2')
});

/*text-image*/
$('#p23v52').hover(function()
{
$('#p23_v52').addClass('res1')
}
,function()
{
$('#p23_v52').removeClass('res1')
});

/*image-text*/
$('#p23_v52').hover(function()
{
$('#p23v52').addClass('res2')
}
,function()
{
$('#p23v52').removeClass('res2')
});

/*text-image*/
$('#p23v53').hover(function()
{
$('#p23_v53').addClass('res1')
}
,function()
{
$('#p23_v53').removeClass('res1')
});

/*image-text*/
$('#p23_v53').hover(function()
{
$('#p23v53').addClass('res2')
}
,function()
{
$('#p23v53').removeClass('res2')
});

/*text-image*/
$('#p23v54').hover(function()
{
$('#p23_v54').addClass('res1')
}
,function()
{
$('#p23_v54').removeClass('res1')
});

/*image-text*/
$('#p23_v54').hover(function()
{
$('#p23v54').addClass('res2')
}
,function()
{
$('#p23v54').removeClass('res2')
});


/*pagina24*/
/*text-image*/
$('#p24v55').hover(function()
{
$('#p24_v55').addClass('res1')
}
,function()
{
$('#p24_v55').removeClass('res1')
});

/*image-text*/
$('#p24_v55').hover(function()
{
$('#p24v55').addClass('res2')
}
,function()
{
$('#p24v55').removeClass('res2')
});

/*text-image*/
$('#p24v56').hover(function()
{
$('#p24_v56').addClass('res1')
}
,function()
{
$('#p24_v56').removeClass('res1')
});

/*image-text*/
$('#p24_v56').hover(function()
{
$('#p24v56').addClass('res2')
}
,function()
{
$('#p24v56').removeClass('res2')
});

/*text-image*/
$('#p24v57').hover(function()
{
$('#p24_v57').addClass('res1')
}
,function()
{
$('#p24_v57').removeClass('res1')
});

/*image-text*/
$('#p24_v57').hover(function()
{
$('#p24v57').addClass('res2')
}
,function()
{
$('#p24v57').removeClass('res2')
});

/*text-image*/
$('#p24v58').hover(function()
{
$('#p24_v58').addClass('res1')
}
,function()
{
$('#p24_v58').removeClass('res1')
});

/*image-text*/
$('#p24_v58').hover(function()
{
$('#p24v58').addClass('res2')
}
,function()
{
$('#p24v58').removeClass('res2')
});

/*text-image*/
$('#p24v59').hover(function()
{
$('#p24_v59').addClass('res1')
}
,function()
{
$('#p24_v59').removeClass('res1')
});

/*image-text*/
$('#p24_v59').hover(function()
{
$('#p24v59').addClass('res2')
}
,function()
{
$('#p24v59').removeClass('res2')
});

/*text-image*/
$('#p24v60').hover(function()
{
$('#p24_v60').addClass('res1')
}
,function()
{
$('#p24_v60').removeClass('res1')
});

/*image-text*/
$('#p24_v60').hover(function()
{
$('#p24v60').addClass('res2')
}
,function()
{
$('#p24v60').removeClass('res2')
});

/*text-image*/
$('#p24v61').hover(function()
{
$('#p24_v61').addClass('res1')
}
,function()
{
$('#p24_v61').removeClass('res1')
});

/*image-text*/
$('#p24_v61').hover(function()
{
$('#p24v61').addClass('res2')
}
,function()
{
$('#p24v61').removeClass('res2')
});

/*text-image*/
$('#p24v62').hover(function()
{
$('#p24_v62').addClass('res1')
}
,function()
{
$('#p24_v62').removeClass('res1')
});

/*image-text*/
$('#p24_v62').hover(function()
{
$('#p24v62').addClass('res2')
}
,function()
{
$('#p24v62').removeClass('res2')
});

/*text-image*/
$('#p24v63').hover(function()
{
$('#p24_v63').addClass('res1')
}
,function()
{
$('#p24_v63').removeClass('res1')
});

/*image-text*/
$('#p24_v63').hover(function()
{
$('#p24v63').addClass('res2')
}
,function()
{
$('#p24v63').removeClass('res2')
});

/*text-image*/
$('#fin24').hover(function()
{
$('#p24_fyn').addClass('res1')
}
,function()
{
$('#p24_fyn').removeClass('res1')
});

/*image-text*/
$('#p24_fyn').hover(function()
{
$('#fin24').addClass('res2')
}
,function()
{
$('#fin24').removeClass('res2')
});


/*text-image*/
$('#p24v64').hover(function()
{
$('#p24_v64').addClass('res1')
}
,function()
{
$('#p24_v64').removeClass('res1')
});

/*image-text*/
$('#p24_v64').hover(function()
{
$('#p24v64').addClass('res2')
}
,function()
{
$('#p24v64').removeClass('res2')
});

/*text-image*/
$('#p24v65').hover(function()
{
$('#p24_v65').addClass('res1')
}
,function()
{
$('#p24_v65').removeClass('res1')
});

/*image-text*/
$('#p24_v65').hover(function()
{
$('#p24v65').addClass('res2')
}
,function()
{
$('#p24v65').removeClass('res2')
});

/*text-image*/
$('#p24v66').hover(function()
{
$('#p24_v66').addClass('res1')
}
,function()
{
$('#p24_v66').removeClass('res1')
});

/*image-text*/
$('#p24_v66').hover(function()
{
$('#p24v66').addClass('res2')
}
,function()
{
$('#p24v66').removeClass('res2')
});

/*text-image*/
$('#p24v67').hover(function()
{
$('#p24_v67').addClass('res1')
}
,function()
{
$('#p24_v67').removeClass('res1')
});

/*image-text*/
$('#p24_v67').hover(function()
{
$('#p24v67').addClass('res2')
}
,function()
{
$('#p24v67').removeClass('res2')
});

/*text-image*/
$('#p24v68').hover(function()
{
$('#p24_v68').addClass('res1')
}
,function()
{
$('#p24_v68').removeClass('res1')
});

/*image-text*/
$('#p24_v68').hover(function()
{
$('#p24v68').addClass('res2')
}
,function()
{
$('#p24v68').removeClass('res2')
});

/*text-image*/
$('#p24v69').hover(function()
{
$('#p24_v69').addClass('res1')
}
,function()
{
$('#p24_v69').removeClass('res1')
});

/*image-text*/
$('#p24_v69').hover(function()
{
$('#p24v69').addClass('res2')
}
,function()
{
$('#p24v69').removeClass('res2')
});

/*text-image*/
$('#p24v70').hover(function()
{
$('#p24_v70').addClass('res1')
}
,function()
{
$('#p24_v70').removeClass('res1')
});

/*image-text*/
$('#p24_v70').hover(function()
{
$('#p24v70').addClass('res2')
}
,function()
{
$('#p24v70').removeClass('res2')
});

/*text-image*/
$('#p24v71').hover(function()
{
$('#p24_v71').addClass('res1')
}
,function()
{
$('#p24_v71').removeClass('res1')
});

/*image-text*/
$('#p24_v71').hover(function()
{
$('#p24v71').addClass('res2')
}
,function()
{
$('#p24v71').removeClass('res2')
});

/*text-image*/
$('#p24v72').hover(function()
{
$('#p24_v72').addClass('res1')
}
,function()
{
$('#p24_v72').removeClass('res1')
});

/*image-text*/
$('#p24_v72').hover(function()
{
$('#p24v72').addClass('res2')
}
,function()
{
$('#p24v72').removeClass('res2')
});

/*text-image*/
$('#p24v73').hover(function()
{
$('#p24_v73').addClass('res1')
}
,function()
{
$('#p24_v73').removeClass('res1')
});

/*image-text*/
$('#p24_v73').hover(function()
{
$('#p24v73').addClass('res2')
}
,function()
{
$('#p24v73').removeClass('res2')
});

/*text-image*/
$('#p24v74').hover(function()
{
$('#p24_v74').addClass('res1')
}
,function()
{
$('#p24_v74').removeClass('res1')
});

/*image-text*/
$('#p24_v74').hover(function()
{
$('#p24v74').addClass('res2')
}
,function()
{
$('#p24v74').removeClass('res2')
});

/*text-image*/
$('#p24v75').hover(function()
{
$('#p24_v75').addClass('res1')
}
,function()
{
$('#p24_v75').removeClass('res1')
});

/*image-text*/
$('#p24_v75').hover(function()
{
$('#p24v75').addClass('res2')
}
,function()
{
$('#p24v75').removeClass('res2')
});


/*pagina25*/
/*text-image*/
$('#op25').hover(function()
{
$('#p25_op').addClass('res1')
}
,function()
{
$('#p25_op').removeClass('res1')
});

/*image-text*/
$('#p25_op').hover(function()
{
$('#op25').addClass('ophov')
}
,function()
{
$('#op25').removeClass('ophov')
});

/*text-image*/
$('#he25').hover(function()
{
$('#p25_he').addClass('res1')
}
,function()
{
$('#p25_he').removeClass('res1')
});

/*image-text*/
$('#p25_he').hover(function()
{
$('#he25').addClass('res2')
}
,function()
{
$('#he25').removeClass('res2')
});

/*text-image*/
$('#ma25_1').hover(function()
{
$('#p25_ma25_1').addClass('res1')
}
,function()
{
$('#p25_ma25_1').removeClass('res1')
});

/*image-text*/
$('#p25_ma25_1').hover(function()
{
$('#ma25_1').addClass('res2')
}
,function()
{
$('#ma25_1').removeClass('res2')
});

/*text-image*/
$('#p25v1').hover(function()
{
$('#p25_v1').addClass('res1')
}
,function()
{
$('#p25_v1').removeClass('res1')
});

/*image-text*/
$('#p25_v1').hover(function()
{
$('#p25v1').addClass('res2')
}
,function()
{
$('#p25v1').removeClass('res2')
});

/*text-image*/
$('#p25v2').hover(function()
{
$('#p25_v2').addClass('res1')
}
,function()
{
$('#p25_v2').removeClass('res1')
});

/*image-text*/
$('#p25_v2').hover(function()
{
$('#p25v2').addClass('res2')
}
,function()
{
$('#p25v2').removeClass('res2')
});

/*text-image*/
$('#p25v3').hover(function()
{
$('#p25_v3').addClass('res1')
}
,function()
{
$('#p25_v3').removeClass('res1')
});

/*image-text*/
$('#p25_v3').hover(function()
{
$('#p25v3').addClass('res2')
}
,function()
{
$('#p25v3').removeClass('res2')
});

/*text-image*/
$('#p25v4').hover(function()
{
$('#p25_v4').addClass('res1')
}
,function()
{
$('#p25_v4').removeClass('res1')
});

/*image-text*/
$('#p25_v4').hover(function()
{
$('#p25v4').addClass('res2')
}
,function()
{
$('#p25v4').removeClass('res2')
});

/*text-image*/
$('#p25v5').hover(function()
{
$('#p25_v5').addClass('res1')
}
,function()
{
$('#p25_v5').removeClass('res1')
});

/*image-text*/
$('#p25_v5').hover(function()
{
$('#p25v5').addClass('res2')
}
,function()
{
$('#p25v5').removeClass('res2')
});

/*text-image*/
$('#p25v6').hover(function()
{
$('#p25_v6').addClass('res1')
}
,function()
{
$('#p25_v6').removeClass('res1')
});

/*image-text*/
$('#p25_v6').hover(function()
{
$('#p25v6').addClass('res2')
}
,function()
{
$('#p25v6').removeClass('res2')
});

/*text-image*/
$('#p25v7').hover(function()
{
$('#p25_v7').addClass('res1')
}
,function()
{
$('#p25_v7').removeClass('res1')
});

/*image-text*/
$('#p25_v7').hover(function()
{
$('#p25v7').addClass('res2')
}
,function()
{
$('#p25v7').removeClass('res2')
});

/*text-image*/
$('#p25v8').hover(function()
{
$('#p25_v8').addClass('res1')
}
,function()
{
$('#p25_v8').removeClass('res1')
});

/*image-text*/
$('#p25_v8').hover(function()
{
$('#p25v8').addClass('res2')
}
,function()
{
$('#p25v8').removeClass('res2')
});

/*text-image*/
$('#ma25_2').hover(function()
{
$('#p25_ma25_2').addClass('res1')
}
,function()
{
$('#p25_ma25_2').removeClass('res1')
});

/*image-text*/
$('#p25_ma25_2').hover(function()
{
$('#ma25_2').addClass('res2')
}
,function()
{
$('#ma25_2').removeClass('res2')
});


/*text-image*/
$('#p25v9').hover(function()
{
$('#p25_v9').addClass('res1')
}
,function()
{
$('#p25_v9').removeClass('res1')
});

/*image-text*/
$('#p25_v9').hover(function()
{
$('#p25v9').addClass('res2')
}
,function()
{
$('#p25v9').removeClass('res2')
});

/*text-image*/
$('#p25v10').hover(function()
{
$('#p25_v10').addClass('res1')
}
,function()
{
$('#p25_v10').removeClass('res1')
});

/*image-text*/
$('#p25_v10').hover(function()
{
$('#p25v10').addClass('res2')
}
,function()
{
$('#p25v10').removeClass('res2')
});

/*text-image*/
$('#p25v11').hover(function()
{
$('#p25_v11').addClass('res1')
}
,function()
{
$('#p25_v11').removeClass('res1')
});

/*image-text*/
$('#p25_v11').hover(function()
{
$('#p25v11').addClass('res2')
}
,function()
{
$('#p25v11').removeClass('res2')
});

/*text-image*/
$('#p25v12').hover(function()
{
$('#p25_v12').addClass('res1')
}
,function()
{
$('#p25_v12').removeClass('res1')
});

/*image-text*/
$('#p25_v12').hover(function()
{
$('#p25v12').addClass('res2')
}
,function()
{
$('#p25v12').removeClass('res2')
});

/*text-image*/
$('#p25v13').hover(function()
{
$('#p25_v13').addClass('res1')
}
,function()
{
$('#p25_v13').removeClass('res1')
});

/*image-text*/
$('#p25_v13').hover(function()
{
$('#p25v13').addClass('res2')
}
,function()
{
$('#p25v13').removeClass('res2')
});

/*text-image*/
$('#p25v14').hover(function()
{
$('#p25_v14').addClass('res1')
}
,function()
{
$('#p25_v14').removeClass('res1')
});

/*image-text*/
$('#p25_v14').hover(function()
{
$('#p25v14').addClass('res2')
}
,function()
{
$('#p25v14').removeClass('res2')
});

/*text-image*/
$('#p25v15').hover(function()
{
$('#p25_v15').addClass('res1')
}
,function()
{
$('#p25_v15').removeClass('res1')
});

/*image-text*/
$('#p25_v15').hover(function()
{
$('#p25v15').addClass('res2')
}
,function()
{
$('#p25v15').removeClass('res2')
});

/*text-image*/
$('#p25v16').hover(function()
{
$('#p25_v16').addClass('res1')
}
,function()
{
$('#p25_v16').removeClass('res1')
});

/*image-text*/
$('#p25_v16').hover(function()
{
$('#p25v16').addClass('res2')
}
,function()
{
$('#p25v16').removeClass('res2')
});

/*text-image*/
$('#ma25_3').hover(function()
{
$('#p25_ma25_3').addClass('res1')
}
,function()
{
$('#p25_ma25_3').removeClass('res1')
});

/*image-text*/
$('#p25_ma25_3').hover(function()
{
$('#ma25_3').addClass('res2')
}
,function()
{
$('#ma25_3').removeClass('res2')
});

/*text-image*/
$('#p25v17').hover(function()
{
$('#p25_v17').addClass('res1')
}
,function()
{
$('#p25_v17').removeClass('res1')
});

/*image-text*/
$('#p25_v17').hover(function()
{
$('#p25v17').addClass('res2')
}
,function()
{
$('#p25v17').removeClass('res2')
});

/*text-image*/
$('#p25v18').hover(function()
{
$('#p25_v18').addClass('res1')
}
,function()
{
$('#p25_v18').removeClass('res1')
});

/*image-text*/
$('#p25_v18').hover(function()
{
$('#p25v18').addClass('res2')
}
,function()
{
$('#p25v18').removeClass('res2')
});

/*text-image*/
$('#p25v19').hover(function()
{
$('#p25_v19').addClass('res1')
}
,function()
{
$('#p25_v19').removeClass('res1')
});

/*image-text*/
$('#p25_v19').hover(function()
{
$('#p25v19').addClass('res2')
}
,function()
{
$('#p25v19').removeClass('res2')
});

/*text-image*/
$('#p25v20').hover(function()
{
$('#p25_v20').addClass('res1')
}
,function()
{
$('#p25_v20').removeClass('res1')
});

/*image-text*/
$('#p25_v20').hover(function()
{
$('#p25v20').addClass('res2')
}
,function()
{
$('#p25v20').removeClass('res2')
});

/*text-image*/
$('#p25v21').hover(function()
{
$('#p25_v21').addClass('res1')
}
,function()
{
$('#p25_v21').removeClass('res1')
});

/*image-text*/
$('#p25_v21').hover(function()
{
$('#p25v21').addClass('res2')
}
,function()
{
$('#p25v21').removeClass('res2')
});

/*text-image*/
$('#p25v22').hover(function()
{
$('#p25_v22').addClass('res1')
}
,function()
{
$('#p25_v22').removeClass('res1')
});

/*image-text*/
$('#p25_v22').hover(function()
{
$('#p25v22').addClass('res2')
}
,function()
{
$('#p25v22').removeClass('res2')
});

/*text-image*/
$('#p25v23').hover(function()
{
$('#p25_v23').addClass('res1')
}
,function()
{
$('#p25_v23').removeClass('res1')
});

/*image-text*/
$('#p25_v23').hover(function()
{
$('#p25v23').addClass('res2')
}
,function()
{
$('#p25v23').removeClass('res2')
});

/*text-image*/
$('#p25v24').hover(function()
{
$('#p25_v24').addClass('res1')
}
,function()
{
$('#p25_v24').removeClass('res1')
});

/*image-text*/
$('#p25_v24').hover(function()
{
$('#p25v24').addClass('res2')
}
,function()
{
$('#p25v24').removeClass('res2')
});


/*pagina26*/
/*text-image*/
$('#ma26_1').hover(function()
{
$('#p26_ma26_1').addClass('res1')
}
,function()
{
$('#p26_ma26_1').removeClass('res1')
});

/*image-text*/
$('#p26_ma26_1').hover(function()
{
$('#ma26_1').addClass('res2')
}
,function()
{
$('#ma26_1').removeClass('res2')
});

/*text-image*/
$('#p26v25').hover(function()
{
$('#p26_v25').addClass('res1')
}
,function()
{
$('#p26_v25').removeClass('res1')
});

/*image-text*/
$('#p26_v25').hover(function()
{
$('#p26v25').addClass('res2')
}
,function()
{
$('#p26v25').removeClass('res2')
});

/*text-image*/
$('#p26v26').hover(function()
{
$('#p26_v26').addClass('res1')
}
,function()
{
$('#p26_v26').removeClass('res1')
});

/*image-text*/
$('#p26_v26').hover(function()
{
$('#p26v26').addClass('res2')
}
,function()
{
$('#p26v26').removeClass('res2')
});

/*text-image*/
$('#p26v27').hover(function()
{
$('#p26_v27').addClass('res1')
}
,function()
{
$('#p26_v27').removeClass('res1')
});

/*image-text*/
$('#p26_v27').hover(function()
{
$('#p26v27').addClass('res2')
}
,function()
{
$('#p26v27').removeClass('res2')
});

/*text-image*/
$('#p26v28').hover(function()
{
$('#p26_v28').addClass('res1')
}
,function()
{
$('#p26_v28').removeClass('res1')
});

/*image-text*/
$('#p26_v28').hover(function()
{
$('#p26v28').addClass('res2')
}
,function()
{
$('#p26v28').removeClass('res2')
});

/*text-image*/
$('#p26v29').hover(function()
{
$('#p26_v29').addClass('res1')
}
,function()
{
$('#p26_v29').removeClass('res1')
});

/*image-text*/
$('#p26_v29').hover(function()
{
$('#p26v29').addClass('res2')
}
,function()
{
$('#p26v29').removeClass('res2')
});

/*text-image*/
$('#p26v30').hover(function()
{
$('#p26_v30').addClass('res1')
}
,function()
{
$('#p26_v30').removeClass('res1')
});

/*image-text*/
$('#p26_v30').hover(function()
{
$('#p26v30').addClass('res2')
}
,function()
{
$('#p26v30').removeClass('res2')
});

/*text-image*/
$('#p26v31').hover(function()
{
$('#p26_v31').addClass('res1')
}
,function()
{
$('#p26_v31').removeClass('res1')
});

/*image-text*/
$('#p26_v31').hover(function()
{
$('#p26v31').addClass('res2')
}
,function()
{
$('#p26v31').removeClass('res2')
});

/*text-image*/
$('#p26v32').hover(function()
{
$('#p26_v32').addClass('res1')
}
,function()
{
$('#p26_v32').removeClass('res1')
});

/*image-text*/
$('#p26_v32').hover(function()
{
$('#p26v32').addClass('res2')
}
,function()
{
$('#p26v32').removeClass('res2')
});

/*text-image*/
$('#ma26_2').hover(function()
{
$('#p26_ma26_2').addClass('res1')
}
,function()
{
$('#p26_ma26_2').removeClass('res1')
});

/*image-text*/
$('#p26_ma26_2').hover(function()
{
$('#ma26_2').addClass('res2')
}
,function()
{
$('#ma26_2').removeClass('res2')
});

/*text-image*/
$('#p26v33').hover(function()
{
$('#p26_v33').addClass('res1')
}
,function()
{
$('#p26_v33').removeClass('res1')
});

/*image-text*/
$('#p26_v33').hover(function()
{
$('#p26v33').addClass('res2')
}
,function()
{
$('#p26v33').removeClass('res2')
});

/*text-image*/
$('#p26v34').hover(function()
{
$('#p26_v34').addClass('res1')
}
,function()
{
$('#p26_v34').removeClass('res1')
});

/*image-text*/
$('#p26_v34').hover(function()
{
$('#p26v34').addClass('res2')
}
,function()
{
$('#p26v34').removeClass('res2')
});

/*text-image*/
$('#p26v35').hover(function()
{
$('#p26_v35').addClass('res1')
}
,function()
{
$('#p26_v35').removeClass('res1')
});

/*image-text*/
$('#p26_v35').hover(function()
{
$('#p26v35').addClass('res2')
}
,function()
{
$('#p26v35').removeClass('res2')
});

/*text-image*/
$('#p26v36').hover(function()
{
$('#p26_v36').addClass('res1')
}
,function()
{
$('#p26_v36').removeClass('res1')
});

/*image-text*/
$('#p26_v36').hover(function()
{
$('#p26v36').addClass('res2')
}
,function()
{
$('#p26v36').removeClass('res2')
});

/*text-image*/
$('#p26v37').hover(function()
{
$('#p26_v37').addClass('res1')
}
,function()
{
$('#p26_v37').removeClass('res1')
});

/*image-text*/
$('#p26_v37').hover(function()
{
$('#p26v37').addClass('res2')
}
,function()
{
$('#p26v37').removeClass('res2')
});

/*text-image*/
$('#p26v38').hover(function()
{
$('#p26_v38').addClass('res1')
}
,function()
{
$('#p26_v38').removeClass('res1')
});

/*image-text*/
$('#p26_v38').hover(function()
{
$('#p26v38').addClass('res2')
}
,function()
{
$('#p26v38').removeClass('res2')
});

/*text-image*/
$('#p26v39').hover(function()
{
$('#p26_v39').addClass('res1')
}
,function()
{
$('#p26_v39').removeClass('res1')
});

/*image-text*/
$('#p26_v39').hover(function()
{
$('#p26v39').addClass('res2')
}
,function()
{
$('#p26v39').removeClass('res2')
});

/*text-image*/
$('#p26v40').hover(function()
{
$('#p26_v40').addClass('res1')
}
,function()
{
$('#p26_v40').removeClass('res1')
});

/*image-text*/
$('#p26_v40').hover(function()
{
$('#p26v40').addClass('res2')
}
,function()
{
$('#p26v40').removeClass('res2')
});

/*text-image*/
$('#ma26_3').hover(function()
{
$('#p26_ma26_3').addClass('res1')
}
,function()
{
$('#p26_ma26_3').removeClass('res1')
});

/*image-text*/
$('#p26_ma26_3').hover(function()
{
$('#ma26_3').addClass('res2')
}
,function()
{
$('#ma26_3').removeClass('res2')
});

/*text-image*/
$('#p26v41').hover(function()
{
$('#p26_v41').addClass('res1')
}
,function()
{
$('#p26_v41').removeClass('res1')
});

/*image-text*/
$('#p26_v41').hover(function()
{
$('#p26v41').addClass('res2')
}
,function()
{
$('#p26v41').removeClass('res2')
});

/*text-image*/
$('#p26v42').hover(function()
{
$('#p26_v42').addClass('res1')
}
,function()
{
$('#p26_v42').removeClass('res1')
});

/*image-text*/
$('#p26_v42').hover(function()
{
$('#p26v42').addClass('res2')
}
,function()
{
$('#p26v42').removeClass('res2')
});

/*text-image*/
$('#p26v43').hover(function()
{
$('#p26_v43').addClass('res1')
}
,function()
{
$('#p26_v43').removeClass('res1')
});

/*image-text*/
$('#p26_v43').hover(function()
{
$('#p26v43').addClass('res2')
}
,function()
{
$('#p26v43').removeClass('res2')
});

/*text-image*/
$('#p26v44').hover(function()
{
$('#p26_v44').addClass('res1')
}
,function()
{
$('#p26_v44').removeClass('res1')
});

/*image-text*/
$('#p26_v44').hover(function()
{
$('#p26v44').addClass('res2')
}
,function()
{
$('#p26v44').removeClass('res2')
});

/*text-image*/
$('#p26v45').hover(function()
{
$('#p26_v45').addClass('res1')
}
,function()
{
$('#p26_v45').removeClass('res1')
});

/*image-text*/
$('#p26_v45').hover(function()
{
$('#p26v45').addClass('res2')
}
,function()
{
$('#p26v45').removeClass('res2')
});

/*text-image*/
$('#p26v46').hover(function()
{
$('#p26_v46').addClass('res1')
}
,function()
{
$('#p26_v46').removeClass('res1')
});

/*image-text*/
$('#p26_v46').hover(function()
{
$('#p26v46').addClass('res2')
}
,function()
{
$('#p26v46').removeClass('res2')
});

/*text-image*/
$('#p26v47').hover(function()
{
$('#p26_v47').addClass('res1')
}
,function()
{
$('#p26_v47').removeClass('res1')
});

/*image-text*/
$('#p26_v47').hover(function()
{
$('#p26v47').addClass('res2')
}
,function()
{
$('#p26v47').removeClass('res2')
});

/*text-image*/
$('#p26v48').hover(function()
{
$('#p26_v48').addClass('res1')
}
,function()
{
$('#p26_v48').removeClass('res1')
});

/*image-text*/
$('#p26_v48').hover(function()
{
$('#p26v48').addClass('res2')
}
,function()
{
$('#p26v48').removeClass('res2')
});


/*pagina27*/
/*text-image*/
$('#ma27').hover(function()
{
$('#p27_ma27').addClass('res1')
}
,function()
{
$('#p27_ma27').removeClass('res1')
});

/*image-text*/
$('#p27_ma27').hover(function()
{
$('#ma27').addClass('res2')
}
,function()
{
$('#ma27').removeClass('res2')
});


$('#p27v49').hover(function()
{
$('#p27_v49').addClass('res1')
}
,function()
{
$('#p27_v49').removeClass('res1')
});

/*image-text*/
$('#p27_v49').hover(function()
{
$('#p27v49').addClass('res2')
}
,function()
{
$('#p27v49').removeClass('res2')
});

/*text-image*/
$('#p27v50').hover(function()
{
$('#p27_v50').addClass('res1')
}
,function()
{
$('#p27_v50').removeClass('res1')
});

/*image-text*/
$('#p27_v50').hover(function()
{
$('#p27v50').addClass('res2')
}
,function()
{
$('#p27v50').removeClass('res2')
});

/*text-image*/
$('#p27v51').hover(function()
{
$('#p27_v51').addClass('res1')
}
,function()
{
$('#p27_v51').removeClass('res1')
});

/*image-text*/
$('#p27_v51').hover(function()
{
$('#p27v51').addClass('res2')
}
,function()
{
$('#p27v51').removeClass('res2')
});

/*text-image*/
$('#p27v52').hover(function()
{
$('#p27_v52').addClass('res1')
}
,function()
{
$('#p27_v52').removeClass('res1')
});

/*image-text*/
$('#p27_v52').hover(function()
{
$('#p27v52').addClass('res2')
}
,function()
{
$('#p27v52').removeClass('res2')
});

/*text-image*/
$('#p27v53').hover(function()
{
$('#p27_v53').addClass('res1')
}
,function()
{
$('#p27_v53').removeClass('res1')
});

/*image-text*/
$('#p27_v53').hover(function()
{
$('#p27v53').addClass('res2')
}
,function()
{
$('#p27v53').removeClass('res2')
});

/*text-image*/
$('#p27v54').hover(function()
{
$('#p27_v54').addClass('res1')
}
,function()
{
$('#p27_v54').removeClass('res1')
});

/*image-text*/
$('#p27_v54').hover(function()
{
$('#p27v54').addClass('res2')
}
,function()
{
$('#p27v54').removeClass('res2')
});

/*text-image*/
$('#p27v55').hover(function()
{
$('#p27_v55').addClass('res1')
}
,function()
{
$('#p27_v55').removeClass('res1')
});

/*image-text*/
$('#p27_v55').hover(function()
{
$('#p27v55').addClass('res2')
}
,function()
{
$('#p27v55').removeClass('res2')
});

/*text-image*/
$('#p27v56').hover(function()
{
$('#p27_v56').addClass('res1')
}
,function()
{
$('#p27_v56').removeClass('res1')
});

/*image-text*/
$('#p27_v56').hover(function()
{
$('#p27v56').addClass('res2')
}
,function()
{
$('#p27v56').removeClass('res2')
});

/*text-image*/
$('#op27').hover(function()
{
$('#p27_op').addClass('res1')
}
,function()
{
$('#p27_op').removeClass('res1')
});

/*image-text*/
$('#p27_op').hover(function()
{
$('#op27').addClass('ophov')
}
,function()
{
$('#op27').removeClass('ophov')
});

/*text-image*/
$('#he27').hover(function()
{
$('#p27_he').addClass('res1')
}
,function()
{
$('#p27_he').removeClass('res1')
});

/*image-text*/
$('#p27_he').hover(function()
{
$('#he27').addClass('res2')
}
,function()
{
$('#he27').removeClass('res2')
});

/*text-image*/
$('#p27v1').hover(function()
{
$('#p27_v1').addClass('res1')
}
,function()
{
$('#p27_v1').removeClass('res1')
});

/*image-text*/
$('#p27_v1').hover(function()
{
$('#p27v1').addClass('res2')
}
,function()
{
$('#p27v1').removeClass('res2')
});

/*text-image*/
$('#p27v2').hover(function()
{
$('#p27_v2').addClass('res1')
}
,function()
{
$('#p27_v2').removeClass('res1')
});

/*image-text*/
$('#p27_v2').hover(function()
{
$('#p27v2').addClass('res2')
}
,function()
{
$('#p27v2').removeClass('res2')
});

/*text-image*/
$('#p27v3').hover(function()
{
$('#p27_v3').addClass('res1')
}
,function()
{
$('#p27_v3').removeClass('res1')
});

/*image-text*/
$('#p27_v3').hover(function()
{
$('#p27v3').addClass('res2')
}
,function()
{
$('#p27v3').removeClass('res2')
});

/*text-image*/
$('#p27v4').hover(function()
{
$('#p27_v4').addClass('res1')
}
,function()
{
$('#p27_v4').removeClass('res1')
});

/*image-text*/
$('#p27_v4').hover(function()
{
$('#p27v4').addClass('res2')
}
,function()
{
$('#p27v4').removeClass('res2')
});

/*text-image*/
$('#p27v5').hover(function()
{
$('#p27_v5').addClass('res1')
}
,function()
{
$('#p27_v5').removeClass('res1')
});

/*image-text*/
$('#p27_v5').hover(function()
{
$('#p27v5').addClass('res2')
}
,function()
{
$('#p27v5').removeClass('res2')
});

/*text-image*/
$('#p27v6').hover(function()
{
$('#p27_v6').addClass('res1')
}
,function()
{
$('#p27_v6').removeClass('res1')
});

/*image-text*/
$('#p27_v6').hover(function()
{
$('#p27v6').addClass('res2')
}
,function()
{
$('#p27v6').removeClass('res2')
});

/*text-image*/
$('#p27v7').hover(function()
{
$('#p27_v7').addClass('res1')
}
,function()
{
$('#p27_v7').removeClass('res1')
});

/*image-text*/
$('#p27_v7').hover(function()
{
$('#p27v7').addClass('res2')
}
,function()
{
$('#p27v7').removeClass('res2')
});

/*text-image*/
$('#p27v8').hover(function()
{
$('#p27_v8').addClass('res1')
}
,function()
{
$('#p27_v8').removeClass('res1')
});

/*image-text*/
$('#p27_v8').hover(function()
{
$('#p27v8').addClass('res2')
}
,function()
{
$('#p27v8').removeClass('res2')
});

/*text-image*/
$('#p27v9').hover(function()
{
$('#p27_v9').addClass('res1')
}
,function()
{
$('#p27_v9').removeClass('res1')
});

/*image-text*/
$('#p27_v9').hover(function()
{
$('#p27v9').addClass('res2')
}
,function()
{
$('#p27v9').removeClass('res2')
});

/*text-image*/
$('#p27v10').hover(function()
{
$('#p27_v10').addClass('res1')
}
,function()
{
$('#p27_v10').removeClass('res1')
});

/*image-text*/
$('#p27_v10').hover(function()
{
$('#p27v10').addClass('res2')
}
,function()
{
$('#p27v10').removeClass('res2')
});


/*pagina28*/
/*text-image*/
$('#p28v11').hover(function()
{
$('#p28_v11').addClass('res1')
}
,function()
{
$('#p28_v11').removeClass('res1')
});

/*image-text*/
$('#p28_v11').hover(function()
{
$('#p28v11').addClass('res2')
}
,function()
{
$('#p28v11').removeClass('res2')
});

/*text-image*/
$('#p28v12').hover(function()
{
$('#p28_v12').addClass('res1')
}
,function()
{
$('#p28_v12').removeClass('res1')
});

/*image-text*/
$('#p28_v12').hover(function()
{
$('#p28v12').addClass('res2')
}
,function()
{
$('#p28v12').removeClass('res2')
});

/*text-image*/
$('#p28v13').hover(function()
{
$('#p28_v13').addClass('res1')
}
,function()
{
$('#p28_v13').removeClass('res1')
});

/*image-text*/
$('#p28_v13').hover(function()
{
$('#p28v13').addClass('res2')
}
,function()
{
$('#p28v13').removeClass('res2')
});

/*text-image*/
$('#p28v14').hover(function()
{
$('#p28_v14').addClass('res1')
}
,function()
{
$('#p28_v14').removeClass('res1')
});

/*image-text*/
$('#p28_v14').hover(function()
{
$('#p28v14').addClass('res2')
}
,function()
{
$('#p28v14').removeClass('res2')
});

/*text-image*/
$('#p28v15').hover(function()
{
$('#p28_v15').addClass('res1')
}
,function()
{
$('#p28_v15').removeClass('res1')
});

/*image-text*/
$('#p28_v15').hover(function()
{
$('#p28v15').addClass('res2')
}
,function()
{
$('#p28v15').removeClass('res2')
});

/*text-image*/
$('#p28v16').hover(function()
{
$('#p28_v16').addClass('res1')
}
,function()
{
$('#p28_v16').removeClass('res1')
});

/*image-text*/
$('#p28_v16').hover(function()
{
$('#p28v16').addClass('res2')
}
,function()
{
$('#p28v16').removeClass('res2')
});

/*text-image*/
$('#p28v17').hover(function()
{
$('#p28_v17').addClass('res1')
}
,function()
{
$('#p28_v17').removeClass('res1')
});

/*image-text*/
$('#p28_v17').hover(function()
{
$('#p28v17').addClass('res2')
}
,function()
{
$('#p28v17').removeClass('res2')
});

/*text-image*/
$('#p28v18').hover(function()
{
$('#p28_v18').addClass('res1')
}
,function()
{
$('#p28_v18').removeClass('res1')
});

/*image-text*/
$('#p28_v18').hover(function()
{
$('#p28v18').addClass('res2')
}
,function()
{
$('#p28v18').removeClass('res2')
});

/*text-image*/
$('#p28v19').hover(function()
{
$('#p28_v19').addClass('res1')
}
,function()
{
$('#p28_v19').removeClass('res1')
});

/*image-text*/
$('#p28_v19').hover(function()
{
$('#p28v19').addClass('res2')
}
,function()
{
$('#p28v19').removeClass('res2')
});

/*text-image*/
$('#p28v20').hover(function()
{
$('#p28_v20').addClass('res1')
}
,function()
{
$('#p28_v20').removeClass('res1')
});

/*image-text*/
$('#p28_v20').hover(function()
{
$('#p28v20').addClass('res2')
}
,function()
{
$('#p28v20').removeClass('res2')
});

/*text-image*/
$('#p28v21').hover(function()
{
$('#p28_v21').addClass('res1')
}
,function()
{
$('#p28_v21').removeClass('res1')
});

/*image-text*/
$('#p28_v21').hover(function()
{
$('#p28v21').addClass('res2')
}
,function()
{
$('#p28v21').removeClass('res2')
});

/*text-image*/
$('#p28v22').hover(function()
{
$('#p28_v22').addClass('res1')
}
,function()
{
$('#p28_v22').removeClass('res1')
});

/*image-text*/
$('#p28_v22').hover(function()
{
$('#p28v22').addClass('res2')
}
,function()
{
$('#p28v22').removeClass('res2')
});

/*text-image*/
$('#p28v23').hover(function()
{
$('#p28_v23').addClass('res1')
}
,function()
{
$('#p28_v23').removeClass('res1')
});

/*image-text*/
$('#p28_v23').hover(function()
{
$('#p28v23').addClass('res2')
}
,function()
{
$('#p28v23').removeClass('res2')
});

/*text-image*/
$('#p28v24').hover(function()
{
$('#p28_v24').addClass('res1')
}
,function()
{
$('#p28_v24').removeClass('res1')
});

/*image-text*/
$('#p28_v24').hover(function()
{
$('#p28v24').addClass('res2')
}
,function()
{
$('#p28v24').removeClass('res2')
});

/*text-image*/
$('#p28v25').hover(function()
{
$('#p28_v25').addClass('res1')
}
,function()
{
$('#p28_v25').removeClass('res1')
});

/*image-text*/
$('#p28_v25').hover(function()
{
$('#p28v25').addClass('res2')
}
,function()
{
$('#p28v25').removeClass('res2')
});

/*text-image*/
$('#p28v26').hover(function()
{
$('#p28_v26').addClass('res1')
}
,function()
{
$('#p28_v26').removeClass('res1')
});

/*image-text*/
$('#p28_v26').hover(function()
{
$('#p28v26').addClass('res2')
}
,function()
{
$('#p28v26').removeClass('res2')
});

/*text-image*/
$('#p28v27').hover(function()
{
$('#p28_v27').addClass('res1')
}
,function()
{
$('#p28_v27').removeClass('res1')
});

/*image-text*/
$('#p28_v27').hover(function()
{
$('#p28v27').addClass('res2')
}
,function()
{
$('#p28v27').removeClass('res2')
});

/*text-image*/
$('#p28v28').hover(function()
{
$('#p28_v28').addClass('res1')
}
,function()
{
$('#p28_v28').removeClass('res1')
});

/*image-text*/
$('#p28_v28').hover(function()
{
$('#p28v28').addClass('res2')
}
,function()
{
$('#p28v28').removeClass('res2')
});

/*text-image*/
$('#p28v29').hover(function()
{
$('#p28_v29').addClass('res1')
}
,function()
{
$('#p28_v29').removeClass('res1')
});

/*image-text*/
$('#p28_v29').hover(function()
{
$('#p28v29').addClass('res2')
}
,function()
{
$('#p28v29').removeClass('res2')
});

/*text-image*/
$('#p28v30').hover(function()
{
$('#p28_v30').addClass('res1')
}
,function()
{
$('#p28_v30').removeClass('res1')
});

/*image-text*/
$('#p28_v30').hover(function()
{
$('#p28v30').addClass('res2')
}
,function()
{
$('#p28v30').removeClass('res2')
});

$('#fin28').hover(function()
{
$('#p28_fyn').addClass('res1')
}
,function()
{
$('#p28_fyn').removeClass('res1')
});

/*image-text*/
$('#p28_fyn').hover(function()
{
$('#fin28').addClass('res2')
}
,function()
{
$('#fin28').removeClass('res2')
});

/*text-image*/
$('#p28v31').hover(function()
{
$('#p28_v31').addClass('res1')
}
,function()
{
$('#p28_v31').removeClass('res1')
});

/*image-text*/
$('#p28_v31').hover(function()
{
$('#p28v31').addClass('res2')
}
,function()
{
$('#p28v31').removeClass('res2')
});

/*text-image*/
$('#p28v32').hover(function()
{
$('#p28_v32').addClass('res1')
}
,function()
{
$('#p28_v32').removeClass('res1')
});

/*image-text*/
$('#p28_v32').hover(function()
{
$('#p28v32').addClass('res2')
}
,function()
{
$('#p28v32').removeClass('res2')
});

/*text-image*/
$('#p28v33').hover(function()
{
$('#p28_v33').addClass('res1')
}
,function()
{
$('#p28_v33').removeClass('res1')
});

/*image-text*/
$('#p28_v33').hover(function()
{
$('#p28v33').addClass('res2')
}
,function()
{
$('#p28v33').removeClass('res2')
});

/*text-image*/
$('#p28v34').hover(function()
{
$('#p28_v34').addClass('res1')
}
,function()
{
$('#p28_v34').removeClass('res1')
});

/*image-text*/
$('#p28_v34').hover(function()
{
$('#p28v34').addClass('res2')
}
,function()
{
$('#p28v34').removeClass('res2')
});


/*pagina29*/
/*text-image*/
$('#ma29').hover(function()
{
$('#p29_ma29').addClass('res1')
}
,function()
{
$('#p29_ma29').removeClass('res1')
});

/*image-text*/
$('#p29_ma29').hover(function()
{
$('#ma29').addClass('res2')
}
,function()
{
$('#ma29').removeClass('res2')
});

/*text-image*/
$('#p29v35').hover(function()
{
$('#p29_v35').addClass('res1')
}
,function()
{
$('#p29_v35').removeClass('res1')
});

/*image-text*/
$('#p29_v35').hover(function()
{
$('#p29v35').addClass('res2')
}
,function()
{
$('#p29v35').removeClass('res2')
});

/*text-image*/
$('#p29v36').hover(function()
{
$('#p29_v36').addClass('res1')
}
,function()
{
$('#p29_v36').removeClass('res1')
});

/*image-text*/
$('#p29_v36').hover(function()
{
$('#p29v36').addClass('res2')
}
,function()
{
$('#p29v36').removeClass('res2')
});

/*text-image*/
$('#p29v37').hover(function()
{
$('#p29_v37').addClass('res1')
}
,function()
{
$('#p29_v37').removeClass('res1')
});

/*image-text*/
$('#p29_v37').hover(function()
{
$('#p29v37').addClass('res2')
}
,function()
{
$('#p29v37').removeClass('res2')
});

/*text-image*/
$('#p29v38').hover(function()
{
$('#p29_v38').addClass('res1')
}
,function()
{
$('#p29_v38').removeClass('res1')
});

/*image-text*/
$('#p29_v38').hover(function()
{
$('#p29v38').addClass('res2')
}
,function()
{
$('#p29v38').removeClass('res2')
});

/*text-image*/
$('#p29v39').hover(function()
{
$('#p29_v39').addClass('res1')
}
,function()
{
$('#p29_v39').removeClass('res1')
});

/*image-text*/
$('#p29_v39').hover(function()
{
$('#p29v39').addClass('res2')
}
,function()
{
$('#p29v39').removeClass('res2')
});

/*text-image*/
$('#p29v40').hover(function()
{
$('#p29_v40').addClass('res1')
}
,function()
{
$('#p29_v40').removeClass('res1')
});

/*image-text*/
$('#p29_v40').hover(function()
{
$('#p29v40').addClass('res2')
}
,function()
{
$('#p29v40').removeClass('res2')
});

/*text-image*/
$('#p29v41').hover(function()
{
$('#p29_v41').addClass('res1')
}
,function()
{
$('#p29_v41').removeClass('res1')
});

/*image-text*/
$('#p29_v41').hover(function()
{
$('#p29v41').addClass('res2')
}
,function()
{
$('#p29v41').removeClass('res2')
});

/*text-image*/
$('#p29v42').hover(function()
{
$('#p29_v42').addClass('res1')
}
,function()
{
$('#p29_v42').removeClass('res1')
});

/*image-text*/
$('#p29_v42').hover(function()
{
$('#p29v42').addClass('res2')
}
,function()
{
$('#p29v42').removeClass('res2')
});

/*text-image*/
$('#p29v43').hover(function()
{
$('#p29_v43').addClass('res1')
}
,function()
{
$('#p29_v43').removeClass('res1')
});

/*image-text*/
$('#p29_v43').hover(function()
{
$('#p29v43').addClass('res2')
}
,function()
{
$('#p29v43').removeClass('res2')
});

/*text-image*/
$('#p29v44').hover(function()
{
$('#p29_v44').addClass('res1')
}
,function()
{
$('#p29_v44').removeClass('res1')
});

/*image-text*/
$('#p29_v44').hover(function()
{
$('#p29v44').addClass('res2')
}
,function()
{
$('#p29v44').removeClass('res2')
});

/*text-image*/
$('#p29v45').hover(function()
{
$('#p29_v45').addClass('res1')
}
,function()
{
$('#p29_v45').removeClass('res1')
});

/*image-text*/
$('#p29_v45').hover(function()
{
$('#p29v45').addClass('res2')
}
,function()
{
$('#p29v45').removeClass('res2')
});

/*text-image*/
$('#p29v46').hover(function()
{
$('#p29_v46').addClass('res1')
}
,function()
{
$('#p29_v46').removeClass('res1')
});

/*image-text*/
$('#p29_v46').hover(function()
{
$('#p29v46').addClass('res2')
}
,function()
{
$('#p29v46').removeClass('res2')
});

/*text-image*/
$('#p29v47').hover(function()
{
$('#p29_v47').addClass('res1')
}
,function()
{
$('#p29_v47').removeClass('res1')
});

/*image-text*/
$('#p29_v47').hover(function()
{
$('#p29v47').addClass('res2')
}
,function()
{
$('#p29v47').removeClass('res2')
});

/*text-image*/
$('#p29v48').hover(function()
{
$('#p29_v48').addClass('res1')
}
,function()
{
$('#p29_v48').removeClass('res1')
});

/*image-text*/
$('#p29_v48').hover(function()
{
$('#p29v48').addClass('res2')
}
,function()
{
$('#p29v48').removeClass('res2')
});

/*text-image*/
$('#p29v49').hover(function()
{
$('#p29_v49').addClass('res1')
}
,function()
{
$('#p29_v49').removeClass('res1')
});

/*image-text*/
$('#p29_v49').hover(function()
{
$('#p29v49').addClass('res2')
}
,function()
{
$('#p29v49').removeClass('res2')
});

/*text-image*/
$('#p29v50').hover(function()
{
$('#p29_v50').addClass('res1')
}
,function()
{
$('#p29_v50').removeClass('res1')
});

/*image-text*/
$('#p29_v50').hover(function()
{
$('#p29v50').addClass('res2')
}
,function()
{
$('#p29v50').removeClass('res2')
});

/*text-image*/
$('#p29v51').hover(function()
{
$('#p29_v51').addClass('res1')
}
,function()
{
$('#p29_v51').removeClass('res1')
});

/*image-text*/
$('#p29_v51').hover(function()
{
$('#p29v51').addClass('res2')
}
,function()
{
$('#p29v51').removeClass('res2')
});

/*text-image*/
$('#p29v52').hover(function()
{
$('#p29_v52').addClass('res1')
}
,function()
{
$('#p29_v52').removeClass('res1')
});

/*image-text*/
$('#p29_v52').hover(function()
{
$('#p29v52').addClass('res2')
}
,function()
{
$('#p29v52').removeClass('res2')
});

/*text-image*/
$('#p29v53').hover(function()
{
$('#p29_v53').addClass('res1')
}
,function()
{
$('#p29_v53').removeClass('res1')
});

/*image-text*/
$('#p29_v53').hover(function()
{
$('#p29v53').addClass('res2')
}
,function()
{
$('#p29v53').removeClass('res2')
});

/*text-image*/
$('#p29v54').hover(function()
{
$('#p29_v54').addClass('res1')
}
,function()
{
$('#p29_v54').removeClass('res1')
});

/*image-text*/
$('#p29_v54').hover(function()
{
$('#p29v54').addClass('res2')
}
,function()
{
$('#p29v54').removeClass('res2')
});


/*pagina30*/
/*text-image*/
$('#p30v55').hover(function()
{
$('#p30_v55').addClass('res1')
}
,function()
{
$('#p30_v55').removeClass('res1')
});

/*image-text*/
$('#p30_v55').hover(function()
{
$('#p30v55').addClass('res2')
}
,function()
{
$('#p30v55').removeClass('res2')
});

/*text-image*/
$('#p30v56').hover(function()
{
$('#p30_v56').addClass('res1')
}
,function()
{
$('#p30_v56').removeClass('res1')
});

/*image-text*/
$('#p30_v56').hover(function()
{
$('#p30v56').addClass('res2')
}
,function()
{
$('#p30v56').removeClass('res2')
});

/*text-image*/
$('#p30v57').hover(function()
{
$('#p30_v57').addClass('res1')
}
,function()
{
$('#p30_v57').removeClass('res1')
});

/*image-text*/
$('#p30_v57').hover(function()
{
$('#p30v57').addClass('res2')
}
,function()
{
$('#p30v57').removeClass('res2')
});

/*text-image*/
$('#p30v58').hover(function()
{
$('#p30_v58').addClass('res1')
}
,function()
{
$('#p30_v58').removeClass('res1')
});

/*image-text*/
$('#p30_v58').hover(function()
{
$('#p30v58').addClass('res2')
}
,function()
{
$('#p30v58').removeClass('res2')
});

/*text-image*/
$('#p30v59').hover(function()
{
$('#p30_v59').addClass('res1')
}
,function()
{
$('#p30_v59').removeClass('res1')
});

/*image-text*/
$('#p30_v59').hover(function()
{
$('#p30v59').addClass('res2')
}
,function()
{
$('#p30v59').removeClass('res2')
});

/*text-image*/
$('#p30v60').hover(function()
{
$('#p30_v60').addClass('res1')
}
,function()
{
$('#p30_v60').removeClass('res1')
});

/*image-text*/
$('#p30_v60').hover(function()
{
$('#p30v60').addClass('res2')
}
,function()
{
$('#p30v60').removeClass('res2')
});

/*text-image*/
$('#p30v61').hover(function()
{
$('#p30_v61').addClass('res1')
}
,function()
{
$('#p30_v61').removeClass('res1')
});

/*image-text*/
$('#p30_v61').hover(function()
{
$('#p30v61').addClass('res2')
}
,function()
{
$('#p30v61').removeClass('res2')
});

/*text-image*/
$('#p30v62').hover(function()
{
$('#p30_v62').addClass('res1')
}
,function()
{
$('#p30_v62').removeClass('res1')
});

/*image-text*/
$('#p30_v62').hover(function()
{
$('#p30v62').addClass('res2')
}
,function()
{
$('#p30v62').removeClass('res2')
});

/*text-image*/
$('#p30v63').hover(function()
{
$('#p30_v63').addClass('res1')
}
,function()
{
$('#p30_v63').removeClass('res1')
});

/*image-text*/
$('#p30_v63').hover(function()
{
$('#p30v63').addClass('res2')
}
,function()
{
$('#p30v63').removeClass('res2')
});

/*text-image*/
$('#p30v64').hover(function()
{
$('#p30_v64').addClass('res1')
}
,function()
{
$('#p30_v64').removeClass('res1')
});

/*image-text*/
$('#p30_v64').hover(function()
{
$('#p30v64').addClass('res2')
}
,function()
{
$('#p30v64').removeClass('res2')
});

/*text-image*/
$('#fin30').hover(function()
{
$('#p30_fyn').addClass('res1')
}
,function()
{
$('#p30_fyn').removeClass('res1')
});

/*image-text*/
$('#p30_fyn').hover(function()
{
$('#fin30').addClass('res2')
}
,function()
{
$('#fin30').removeClass('res2')
});

/*text-image*/
$('#p30v65').hover(function()
{
$('#p30_v65').addClass('res1')
}
,function()
{
$('#p30_v65').removeClass('res1')
});

/*image-text*/
$('#p30_v65').hover(function()
{
$('#p30v65').addClass('res2')
}
,function()
{
$('#p30v65').removeClass('res2')
});

/*text-image*/
$('#p30v66').hover(function()
{
$('#p30_v66').addClass('res1')
}
,function()
{
$('#p30_v66').removeClass('res1')
});

/*image-text*/
$('#p30_v66').hover(function()
{
$('#p30v66').addClass('res2')
}
,function()
{
$('#p30v66').removeClass('res2')
});

/*text-image*/
$('#p30v67').hover(function()
{
$('#p30_v67').addClass('res1')
}
,function()
{
$('#p30_v67').removeClass('res1')
});

/*image-text*/
$('#p30_v67').hover(function()
{
$('#p30v67').addClass('res2')
}
,function()
{
$('#p30v67').removeClass('res2')
});

/*text-image*/
$('#p30v68').hover(function()
{
$('#p30_v68').addClass('res1')
}
,function()
{
$('#p30_v68').removeClass('res1')
});

/*image-text*/
$('#p30_v68').hover(function()
{
$('#p30v68').addClass('res2')
}
,function()
{
$('#p30v68').removeClass('res2')
});

/*text-image*/
$('#ma30').hover(function()
{
$('#p30_ma30').addClass('res1')
}
,function()
{
$('#p30_ma30').removeClass('res1')
});

/*image-text*/
$('#p30_ma30').hover(function()
{
$('#ma30').addClass('res2')
}
,function()
{
$('#ma30').removeClass('res2')
});

/*text-image*/
$('#p30v69').hover(function()
{
$('#p30_v69').addClass('res1')
}
,function()
{
$('#p30_v69').removeClass('res1')
});

/*image-text*/
$('#p30_v69').hover(function()
{
$('#p30v69').addClass('res2')
}
,function()
{
$('#p30v69').removeClass('res2')
});

/*text-image*/
$('#p30v70').hover(function()
{
$('#p30_v70').addClass('res1')
}
,function()
{
$('#p30_v70').removeClass('res1')
});

/*image-text*/
$('#p30_v70').hover(function()
{
$('#p30v70').addClass('res2')
}
,function()
{
$('#p30v70').removeClass('res2')
});

/*text-image*/
$('#p30v71').hover(function()
{
$('#p30_v71').addClass('res1')
}
,function()
{
$('#p30_v71').removeClass('res1')
});

/*image-text*/
$('#p30_v71').hover(function()
{
$('#p30v71').addClass('res2')
}
,function()
{
$('#p30v71').removeClass('res2')
});

/*text-image*/
$('#p30v72').hover(function()
{
$('#p30_v72').addClass('res1')
}
,function()
{
$('#p30_v72').removeClass('res1')
});

/*image-text*/
$('#p30_v72').hover(function()
{
$('#p30v72').addClass('res2')
}
,function()
{
$('#p30v72').removeClass('res2')
});

/*text-image*/
$('#p30v73').hover(function()
{
$('#p30_v73').addClass('res1')
}
,function()
{
$('#p30_v73').removeClass('res1')
});

/*image-text*/
$('#p30_v73').hover(function()
{
$('#p30v73').addClass('res2')
}
,function()
{
$('#p30v73').removeClass('res2')
});

/*text-image*/
$('#p30v74').hover(function()
{
$('#p30_v74').addClass('res1')
}
,function()
{
$('#p30_v74').removeClass('res1')
});

/*image-text*/
$('#p30_v74').hover(function()
{
$('#p30v74').addClass('res2')
}
,function()
{
$('#p30v74').removeClass('res2')
});

/*text-image*/
$('#p30v75').hover(function()
{
$('#p30_v75').addClass('res1')
}
,function()
{
$('#p30_v75').removeClass('res1')
});

/*image-text*/
$('#p30_v75').hover(function()
{
$('#p30v75').addClass('res2')
}
,function()
{
$('#p30v75').removeClass('res2')
});

/*text-image*/
$('#p30v76').hover(function()
{
$('#p30_v76').addClass('res1')
}
,function()
{
$('#p30_v76').removeClass('res1')
});

/*image-text*/
$('#p30_v76').hover(function()
{
$('#p30v76').addClass('res2')
}
,function()
{
$('#p30v76').removeClass('res2')
});

/*text-image*/
$('#p30v77').hover(function()
{
$('#p30_v77').addClass('res1')
}
,function()
{
$('#p30_v77').removeClass('res1')
});

/*image-text*/
$('#p30_v77').hover(function()
{
$('#p30v77').addClass('res2')
}
,function()
{
$('#p30v77').removeClass('res2')
});

/*text-image*/
$('#p30v78').hover(function()
{
$('#p30_v78').addClass('res1')
}
,function()
{
$('#p30_v78').removeClass('res1')
});

/*image-text*/
$('#p30_v78').hover(function()
{
$('#p30v78').addClass('res2')
}
,function()
{
$('#p30v78').removeClass('res2')
});

/*text-image*/
$('#p30v79').hover(function()
{
$('#p30_v79').addClass('res1')
}
,function()
{
$('#p30_v79').removeClass('res1')
});

/*image-text*/
$('#p30_v79').hover(function()
{
$('#p30v79').addClass('res2')
}
,function()
{
$('#p30v79').removeClass('res2')
});

/*text-image*/
$('#p30v80').hover(function()
{
$('#p30_v80').addClass('res1')
}
,function()
{
$('#p30_v80').removeClass('res1')
});

/*image-text*/
$('#p30_v80').hover(function()
{
$('#p30v80').addClass('res2')
}
,function()
{
$('#p30v80').removeClass('res2')
});


/*pagina31*/
/*text-image*/
$('#op31').hover(function()
{
$('#p31_op').addClass('res1')
}
,function()
{
$('#p31_op').removeClass('res1')
});

/*image-text*/
$('#p31_op').hover(function()
{
$('#op31').addClass('ophov')
}
,function()
{
$('#op31').removeClass('ophov')
});

/*text-image*/
$('#he31').hover(function()
{
$('#p31_he').addClass('res1')
}
,function()
{
$('#p31_he').removeClass('res1')
});

/*image-text*/
$('#p31_he').hover(function()
{
$('#he31').addClass('res2')
}
,function()
{
$('#he31').removeClass('res2')
});

/*text-image*/
$('#p31v1').hover(function()
{
$('#p31_v1').addClass('res1')
}
,function()
{
$('#p31_v1').removeClass('res1')
});

/*image-text*/
$('#p31_v1').hover(function()
{
$('#p31v1').addClass('res2')
}
,function()
{
$('#p31v1').removeClass('res2')
});

/*text-image*/
$('#p31v2').hover(function()
{
$('#p31_v2').addClass('res1')
}
,function()
{
$('#p31_v2').removeClass('res1')
});

/*image-text*/
$('#p31_v2').hover(function()
{
$('#p31v2').addClass('res2')
}
,function()
{
$('#p31v2').removeClass('res2')
});

/*text-image*/
$('#p31v3').hover(function()
{
$('#p31_v3').addClass('res1')
}
,function()
{
$('#p31_v3').removeClass('res1')
});

/*image-text*/
$('#p31_v3').hover(function()
{
$('#p31v3').addClass('res2')
}
,function()
{
$('#p31v3').removeClass('res2')
});

/*text-image*/
$('#p31v4').hover(function()
{
$('#p31_v4').addClass('res1')
}
,function()
{
$('#p31_v4').removeClass('res1')
});

/*image-text*/
$('#p31_v4').hover(function()
{
$('#p31v4').addClass('res2')
}
,function()
{
$('#p31v4').removeClass('res2')
});

/*text-image*/
$('#p31v5').hover(function()
{
$('#p31_v5').addClass('res1')
}
,function()
{
$('#p31_v5').removeClass('res1')
});

/*image-text*/
$('#p31_v5').hover(function()
{
$('#p31v5').addClass('res2')
}
,function()
{
$('#p31v5').removeClass('res2')
});

/*text-image*/
$('#p31v6').hover(function()
{
$('#p31_v6').addClass('res1')
}
,function()
{
$('#p31_v6').removeClass('res1')
});

/*image-text*/
$('#p31_v6').hover(function()
{
$('#p31v6').addClass('res2')
}
,function()
{
$('#p31v6').removeClass('res2')
});

/*text-image*/
$('#p31v7').hover(function()
{
$('#p31_v7').addClass('res1')
}
,function()
{
$('#p31_v7').removeClass('res1')
});

/*image-text*/
$('#p31_v7').hover(function()
{
$('#p31v7').addClass('res2')
}
,function()
{
$('#p31v7').removeClass('res2')
});

/*text-image*/
$('#p31v8').hover(function()
{
$('#p31_v8').addClass('res1')
}
,function()
{
$('#p31_v8').removeClass('res1')
});

/*image-text*/
$('#p31_v8').hover(function()
{
$('#p31v8').addClass('res2')
}
,function()
{
$('#p31v8').removeClass('res2')
});

/*text-image*/
$('#p31v9').hover(function()
{
$('#p31_v9').addClass('res1')
}
,function()
{
$('#p31_v9').removeClass('res1')
});

/*image-text*/
$('#p31_v9').hover(function()
{
$('#p31v9').addClass('res2')
}
,function()
{
$('#p31v9').removeClass('res2')
});

/*text-image*/
$('#p31v10').hover(function()
{
$('#p31_v10').addClass('res1')
}
,function()
{
$('#p31_v10').removeClass('res1')
});

/*image-text*/
$('#p31_v10').hover(function()
{
$('#p31v10').addClass('res2')
}
,function()
{
$('#p31v10').removeClass('res2')
});

/*text-image*/
$('#p31v11').hover(function()
{
$('#p31_v11').addClass('res1')
}
,function()
{
$('#p31_v11').removeClass('res1')
});

/*image-text*/
$('#p31_v11').hover(function()
{
$('#p31v11').addClass('res2')
}
,function()
{
$('#p31v11').removeClass('res2')
});

/*text-image*/
$('#p31v12').hover(function()
{
$('#p31_v12').addClass('res1')
}
,function()
{
$('#p31_v12').removeClass('res1')
});

/*image-text*/
$('#p31_v12').hover(function()
{
$('#p31v12').addClass('res2')
}
,function()
{
$('#p31v12').removeClass('res2')
});

/*text-image*/
$('#p31v13').hover(function()
{
$('#p31_v13').addClass('res1')
}
,function()
{
$('#p31_v13').removeClass('res1')
});

/*image-text*/
$('#p31_v13').hover(function()
{
$('#p31v13').addClass('res2')
}
,function()
{
$('#p31v13').removeClass('res2')
});

/*text-image*/
$('#p31v14').hover(function()
{
$('#p31_v14').addClass('res1')
}
,function()
{
$('#p31_v14').removeClass('res1')
});

/*image-text*/
$('#p31_v14').hover(function()
{
$('#p31v14').addClass('res2')
}
,function()
{
$('#p31v14').removeClass('res2')
});

/*text-image*/
$('#p31v15').hover(function()
{
$('#p31_v15').addClass('res1')
}
,function()
{
$('#p31_v15').removeClass('res1')
});

/*image-text*/
$('#p31_v15').hover(function()
{
$('#p31v15').addClass('res2')
}
,function()
{
$('#p31v15').removeClass('res2')
});

/*text-image*/
$('#p31v16').hover(function()
{
$('#p31_v16').addClass('res1')
}
,function()
{
$('#p31_v16').removeClass('res1')
});

/*image-text*/
$('#p31_v16').hover(function()
{
$('#p31v16').addClass('res2')
}
,function()
{
$('#p31v16').removeClass('res2')
});

/*text-image*/
$('#p31v17').hover(function()
{
$('#p31_v17').addClass('res1')
}
,function()
{
$('#p31_v17').removeClass('res1')
});

/*image-text*/
$('#p31_v17').hover(function()
{
$('#p31v17').addClass('res2')
}
,function()
{
$('#p31v17').removeClass('res2')
});

/*text-image*/
$('#p31v18').hover(function()
{
$('#p31_v18').addClass('res1')
}
,function()
{
$('#p31_v18').removeClass('res1')
});

/*image-text*/
$('#p31_v18').hover(function()
{
$('#p31v18').addClass('res2')
}
,function()
{
$('#p31v18').removeClass('res2')
});

/*text-image*/
$('#p31v19').hover(function()
{
$('#p31_v19').addClass('res1')
}
,function()
{
$('#p31_v19').removeClass('res1')
});

/*image-text*/
$('#p31_v19').hover(function()
{
$('#p31v19').addClass('res2')
}
,function()
{
$('#p31v19').removeClass('res2')
});

/*text-image*/
$('#p31v20').hover(function()
{
$('#p31_v20').addClass('res1')
}
,function()
{
$('#p31_v20').removeClass('res1')
});

/*image-text*/
$('#p31_v20').hover(function()
{
$('#p31v20').addClass('res2')
}
,function()
{
$('#p31v20').removeClass('res2')
});

/*text-image*/
$('#p31v21').hover(function()
{
$('#p31_v21').addClass('res1')
}
,function()
{
$('#p31_v21').removeClass('res1')
});

/*image-text*/
$('#p31_v21').hover(function()
{
$('#p31v21').addClass('res2')
}
,function()
{
$('#p31v21').removeClass('res2')
});

/*text-image*/
$('#p31v22').hover(function()
{
$('#p31_v22').addClass('res1')
}
,function()
{
$('#p31_v22').removeClass('res1')
});

/*image-text*/
$('#p31_v22').hover(function()
{
$('#p31v22').addClass('res2')
}
,function()
{
$('#p31v22').removeClass('res2')
});

/*text-image*/
$('#p31v23').hover(function()
{
$('#p31_v23').addClass('res1')
}
,function()
{
$('#p31_v23').removeClass('res1')
});

/*image-text*/
$('#p31_v23').hover(function()
{
$('#p31v23').addClass('res2')
}
,function()
{
$('#p31v23').removeClass('res2')
});

/*text-image*/
$('#p31v24').hover(function()
{
$('#p31_v24').addClass('res1')
}
,function()
{
$('#p31_v24').removeClass('res1')
});

/*image-text*/
$('#p31_v24').hover(function()
{
$('#p31v24').addClass('res2')
}
,function()
{
$('#p31v24').removeClass('res2')
});


/*pagina32*/
/*text-image*/
$('#fin32').hover(function()
{
$('#p32_fyn').addClass('res1')
}
,function()
{
$('#p32_fyn').removeClass('res1')
});

/*image-text*/
$('#p32_fyn').hover(function()
{
$('#fin32').addClass('res2')
}
,function()
{
$('#fin32').removeClass('res2')
});

/*text-image*/
$('#p32v25').hover(function()
{
$('#p32_v25').addClass('res1')
}
,function()
{
$('#p32_v25').removeClass('res1')
});

/*image-text*/
$('#p32_v25').hover(function()
{
$('#p32v25').addClass('res2')
}
,function()
{
$('#p32v25').removeClass('res2')
});

/*text-image*/
$('#p32v26').hover(function()
{
$('#p32_v26').addClass('res1')
}
,function()
{
$('#p32_v26').removeClass('res1')
});

/*image-text*/
$('#p32_v26').hover(function()
{
$('#p32v26').addClass('res2')
}
,function()
{
$('#p32v26').removeClass('res2')
});

/*text-image*/
$('#p32v27').hover(function()
{
$('#p32_v27').addClass('res1')
}
,function()
{
$('#p32_v27').removeClass('res1')
});

/*image-text*/
$('#p32_v27').hover(function()
{
$('#p32v27').addClass('res2')
}
,function()
{
$('#p32v27').removeClass('res2')
});

/*text-image*/
$('#p32v28').hover(function()
{
$('#p32_v28').addClass('res1')
}
,function()
{
$('#p32_v28').removeClass('res1')
});

/*image-text*/
$('#p32_v28').hover(function()
{
$('#p32v28').addClass('res2')
}
,function()
{
$('#p32v28').removeClass('res2')
});

/*text-image*/
$('#op32').hover(function()
{
$('#p32_op').addClass('res1')
}
,function()
{
$('#p32_op').removeClass('res1')
});

/*image-text*/
$('#p32_op').hover(function()
{
$('#op32').addClass('ophov')
}
,function()
{
$('#op32').removeClass('ophov')
});

/*text-image*/
$('#he32').hover(function()
{
$('#p32_he').addClass('res1')
}
,function()
{
$('#p32_he').removeClass('res1')
});

/*image-text*/
$('#p32_he').hover(function()
{
$('#he32').addClass('res2')
}
,function()
{
$('#he32').removeClass('res2')
});

/*text-image*/
$('#p32v1').hover(function()
{
$('#p32_v1').addClass('res1')
}
,function()
{
$('#p32_v1').removeClass('res1')
});

/*image-text*/
$('#p32_v1').hover(function()
{
$('#p32v1').addClass('res2')
}
,function()
{
$('#p32v1').removeClass('res2')
});

/*text-image*/
$('#p32v2').hover(function()
{
$('#p32_v2').addClass('res1')
}
,function()
{
$('#p32_v2').removeClass('res1')
});

/*image-text*/
$('#p32_v2').hover(function()
{
$('#p32v2').addClass('res2')
}
,function()
{
$('#p32v2').removeClass('res2')
});

/*text-image*/
$('#p32v3').hover(function()
{
$('#p32_v3').addClass('res1')
}
,function()
{
$('#p32_v3').removeClass('res1')
});

/*image-text*/
$('#p32_v3').hover(function()
{
$('#p32v3').addClass('res2')
}
,function()
{
$('#p32v3').removeClass('res2')
});

/*text-image*/
$('#p32v4').hover(function()
{
$('#p32_v4').addClass('res1')
}
,function()
{
$('#p32_v4').removeClass('res1')
});

/*image-text*/
$('#p32_v4').hover(function()
{
$('#p32v4').addClass('res2')
}
,function()
{
$('#p32v4').removeClass('res2')
});

/*text-image*/
$('#p32v5').hover(function()
{
$('#p32_v5').addClass('res1')
}
,function()
{
$('#p32_v5').removeClass('res1')
});

/*image-text*/
$('#p32_v5').hover(function()
{
$('#p32v5').addClass('res2')
}
,function()
{
$('#p32v5').removeClass('res2')
});

/*text-image*/
$('#p32v6').hover(function()
{
$('#p32_v6').addClass('res1')
}
,function()
{
$('#p32_v6').removeClass('res1')
});

/*image-text*/
$('#p32_v6').hover(function()
{
$('#p32v6').addClass('res2')
}
,function()
{
$('#p32v6').removeClass('res2')
});

/*text-image*/
$('#p32v7').hover(function()
{
$('#p32_v7').addClass('res1')
}
,function()
{
$('#p32_v7').removeClass('res1')
});

/*image-text*/
$('#p32_v7').hover(function()
{
$('#p32v7').addClass('res2')
}
,function()
{
$('#p32v7').removeClass('res2')
});

/*text-image*/
$('#p32v8').hover(function()
{
$('#p32_v8').addClass('res1')
}
,function()
{
$('#p32_v8').removeClass('res1')
});

/*image-text*/
$('#p32_v8').hover(function()
{
$('#p32v8').addClass('res2')
}
,function()
{
$('#p32v8').removeClass('res2')
});

/*text-image*/
$('#p32v9').hover(function()
{
$('#p32_v9').addClass('res1')
}
,function()
{
$('#p32_v9').removeClass('res1')
});

/*image-text*/
$('#p32_v9').hover(function()
{
$('#p32v9').addClass('res2')
}
,function()
{
$('#p32v9').removeClass('res2')
});

/*text-image*/
$('#p32v10').hover(function()
{
$('#p32_v10').addClass('res1')
}
,function()
{
$('#p32_v10').removeClass('res1')
});

/*image-text*/
$('#p32_v10').hover(function()
{
$('#p32v10').addClass('res2')
}
,function()
{
$('#p32v10').removeClass('res2')
});

/*text-image*/
$('#p32v11').hover(function()
{
$('#p32_v11').addClass('res1')
}
,function()
{
$('#p32_v11').removeClass('res1')
});

/*image-text*/
$('#p32_v11').hover(function()
{
$('#p32v11').addClass('res2')
}
,function()
{
$('#p32v11').removeClass('res2')
});

/*text-image*/
$('#p32v12').hover(function()
{
$('#p32_v12').addClass('res1')
}
,function()
{
$('#p32_v12').removeClass('res1')
});

/*image-text*/
$('#p32_v12').hover(function()
{
$('#p32v12').addClass('res2')
}
,function()
{
$('#p32v12').removeClass('res2')
});

/*text-image*/
$('#p32v13').hover(function()
{
$('#p32_v13').addClass('res1')
}
,function()
{
$('#p32_v13').removeClass('res1')
});

/*image-text*/
$('#p32_v13').hover(function()
{
$('#p32v13').addClass('res2')
}
,function()
{
$('#p32v13').removeClass('res2')
});

/*text-image*/
$('#p32v14').hover(function()
{
$('#p32_v14').addClass('res1')
}
,function()
{
$('#p32_v14').removeClass('res1')
});

/*image-text*/
$('#p32_v14').hover(function()
{
$('#p32v14').addClass('res2')
}
,function()
{
$('#p32v14').removeClass('res2')
});

/*text-image*/
$('#p32v15').hover(function()
{
$('#p32_v15').addClass('res1')
}
,function()
{
$('#p32_v15').removeClass('res1')
});

/*image-text*/
$('#p32_v15').hover(function()
{
$('#p32v15').addClass('res2')
}
,function()
{
$('#p32v15').removeClass('res2')
});

/*text-image*/
$('#p32v16').hover(function()
{
$('#p32_v16').addClass('res1')
}
,function()
{
$('#p32_v16').removeClass('res1')
});

/*image-text*/
$('#p32_v16').hover(function()
{
$('#p32v16').addClass('res2')
}
,function()
{
$('#p32v16').removeClass('res2')
});

/*text-image*/
$('#p32v17').hover(function()
{
$('#p32_v17').addClass('res1')
}
,function()
{
$('#p32_v17').removeClass('res1')
});

/*image-text*/
$('#p32_v17').hover(function()
{
$('#p32v17').addClass('res2')
}
,function()
{
$('#p32v17').removeClass('res2')
});

/*text-image*/
$('#p32v18').hover(function()
{
$('#p32_v18').addClass('res1')
}
,function()
{
$('#p32_v18').removeClass('res1')
});

/*image-text*/
$('#p32_v18').hover(function()
{
$('#p32v18').addClass('res2')
}
,function()
{
$('#p32v18').removeClass('res2')
});


/*pagina33*/
/*text-image*/
$('#p33v19').hover(function()
{
$('#p33_v19').addClass('res1')
}
,function()
{
$('#p33_v19').removeClass('res1')
});

/*image-text*/
$('#p33_v19').hover(function()
{
$('#p33v19').addClass('res2')
}
,function()
{
$('#p33v19').removeClass('res2')
});

/*text-image*/
$('#p33v20').hover(function()
{
$('#p33_v20').addClass('res1')
}
,function()
{
$('#p33_v20').removeClass('res1')
});

/*image-text*/
$('#p33_v20').hover(function()
{
$('#p33v20').addClass('res2')
}
,function()
{
$('#p33v20').removeClass('res2')
});

/*text-image*/
$('#p33v21').hover(function()
{
$('#p33_v21').addClass('res1')
}
,function()
{
$('#p33_v21').removeClass('res1')
});

/*image-text*/
$('#p33_v21').hover(function()
{
$('#p33v21').addClass('res2')
}
,function()
{
$('#p33v21').removeClass('res2')
});

/*text-image*/
$('#p33v22').hover(function()
{
$('#p33_v22').addClass('res1')
}
,function()
{
$('#p33_v22').removeClass('res1')
});

/*image-text*/
$('#p33_v22').hover(function()
{
$('#p33v22').addClass('res2')
}
,function()
{
$('#p33v22').removeClass('res2')
});

/*text-image*/
$('#p33v23').hover(function()
{
$('#p33_v23').addClass('res1')
}
,function()
{
$('#p33_v23').removeClass('res1')
});

/*image-text*/
$('#p33_v23').hover(function()
{
$('#p33v23').addClass('res2')
}
,function()
{
$('#p33v23').removeClass('res2')
});

/*text-image*/
$('#p33v24').hover(function()
{
$('#p33_v24').addClass('res1')
}
,function()
{
$('#p33_v24').removeClass('res1')
});

/*image-text*/
$('#p33_v24').hover(function()
{
$('#p33v24').addClass('res2')
}
,function()
{
$('#p33v24').removeClass('res2')
});

/*text-image*/
$('#p33v25').hover(function()
{
$('#p33_v25').addClass('res1')
}
,function()
{
$('#p33_v25').removeClass('res1')
});

/*image-text*/
$('#p33_v25').hover(function()
{
$('#p33v25').addClass('res2')
}
,function()
{
$('#p33v25').removeClass('res2')
});

/*text-image*/
$('#p33v26').hover(function()
{
$('#p33_v26').addClass('res1')
}
,function()
{
$('#p33_v26').removeClass('res1')
});

/*image-text*/
$('#p33_v26').hover(function()
{
$('#p33v26').addClass('res2')
}
,function()
{
$('#p33v26').removeClass('res2')
});

/*text-image*/
$('#p33v27').hover(function()
{
$('#p33_v27').addClass('res1')
}
,function()
{
$('#p33_v27').removeClass('res1')
});

/*image-text*/
$('#p33_v27').hover(function()
{
$('#p33v27').addClass('res2')
}
,function()
{
$('#p33v27').removeClass('res2')
});

/*text-image*/
$('#fin33').hover(function()
{
$('#p33_fyn').addClass('res1')
}
,function()
{
$('#p33_fyn').removeClass('res1')
});

/*image-text*/
$('#p33_fyn').hover(function()
{
$('#fin33').addClass('res2')
}
,function()
{
$('#fin33').removeClass('res2')
});

/*text-image*/
$('#p33v28').hover(function()
{
$('#p33_v28').addClass('res1')
}
,function()
{
$('#p33_v28').removeClass('res1')
});

/*image-text*/
$('#p33_v28').hover(function()
{
$('#p33v28').addClass('res2')
}
,function()
{
$('#p33v28').removeClass('res2')
});

/*text-image*/
$('#p33v29').hover(function()
{
$('#p33_v29').addClass('res1')
}
,function()
{
$('#p33_v29').removeClass('res1')
});

/*image-text*/
$('#p33_v29').hover(function()
{
$('#p33v29').addClass('res2')
}
,function()
{
$('#p33v29').removeClass('res2')
});

/*text-image*/
$('#p33v30').hover(function()
{
$('#p33_v30').addClass('res1')
}
,function()
{
$('#p33_v30').removeClass('res1')
});

/*image-text*/
$('#p33_v30').hover(function()
{
$('#p33v30').addClass('res2')
}
,function()
{
$('#p33v30').removeClass('res2')
});

/*text-image*/
$('#p33v31').hover(function()
{
$('#p33_v31').addClass('res1')
}
,function()
{
$('#p33_v31').removeClass('res1')
});

/*image-text*/
$('#p33_v31').hover(function()
{
$('#p33v31').addClass('res2')
}
,function()
{
$('#p33v31').removeClass('res2')
});

/*text-image*/
$('#op33').hover(function()
{
$('#p33_op').addClass('res1')
}
,function()
{
$('#p33_op').removeClass('res1')
});

/*image-text*/
$('#p33_op').hover(function()
{
$('#op33').addClass('ophov')
}
,function()
{
$('#op33').removeClass('ophov')
});

/*text-image*/
$('#he33').hover(function()
{
$('#p33_he').addClass('res1')
}
,function()
{
$('#p33_he').removeClass('res1')
});

/*image-text*/
$('#p33_he').hover(function()
{
$('#he33').addClass('res2')
}
,function()
{
$('#he33').removeClass('res2')
});

/*text-image*/
$('#p33v1').hover(function()
{
$('#p33_v1').addClass('res1')
}
,function()
{
$('#p33_v1').removeClass('res1')
});

/*image-text*/
$('#p33_v1').hover(function()
{
$('#p33v1').addClass('res2')
}
,function()
{
$('#p33v1').removeClass('res2')
});

/*text-image*/
$('#p33v2').hover(function()
{
$('#p33_v2').addClass('res1')
}
,function()
{
$('#p33_v2').removeClass('res1')
});

/*image-text*/
$('#p33_v2').hover(function()
{
$('#p33v2').addClass('res2')
}
,function()
{
$('#p33v2').removeClass('res2')
});

/*text-image*/
$('#p33v3').hover(function()
{
$('#p33_v3').addClass('res1')
}
,function()
{
$('#p33_v3').removeClass('res1')
});

/*image-text*/
$('#p33_v3').hover(function()
{
$('#p33v3').addClass('res2')
}
,function()
{
$('#p33v3').removeClass('res2')
});

/*text-image*/
$('#p33v4').hover(function()
{
$('#p33_v4').addClass('res1')
}
,function()
{
$('#p33_v4').removeClass('res1')
});

/*image-text*/
$('#p33_v4').hover(function()
{
$('#p33v4').addClass('res2')
}
,function()
{
$('#p33v4').removeClass('res2')
});

/*text-image*/
$('#p33v5').hover(function()
{
$('#p33_v5').addClass('res1')
}
,function()
{
$('#p33_v5').removeClass('res1')
});

/*image-text*/
$('#p33_v5').hover(function()
{
$('#p33v5').addClass('res2')
}
,function()
{
$('#p33v5').removeClass('res2')
});

/*text-image*/
$('#p33v6').hover(function()
{
$('#p33_v6').addClass('res1')
}
,function()
{
$('#p33_v6').removeClass('res1')
});

/*image-text*/
$('#p33_v6').hover(function()
{
$('#p33v6').addClass('res2')
}
,function()
{
$('#p33v6').removeClass('res2')
});

/*text-image*/
$('#p33v7').hover(function()
{
$('#p33_v7').addClass('res1')
}
,function()
{
$('#p33_v7').removeClass('res1')
});

/*image-text*/
$('#p33_v7').hover(function()
{
$('#p33v7').addClass('res2')
}
,function()
{
$('#p33v7').removeClass('res2')
});

/*text-image*/
$('#p33v8').hover(function()
{
$('#p33_v8').addClass('res1')
}
,function()
{
$('#p33_v8').removeClass('res1')
});

/*image-text*/
$('#p33_v8').hover(function()
{
$('#p33v8').addClass('res2')
}
,function()
{
$('#p33v8').removeClass('res2')
});

/*text-image*/
$('#p33v9').hover(function()
{
$('#p33_v9').addClass('res1')
}
,function()
{
$('#p33_v9').removeClass('res1')
});

/*image-text*/
$('#p33_v9').hover(function()
{
$('#p33v9').addClass('res2')
}
,function()
{
$('#p33v9').removeClass('res2')
});

/*text-image*/
$('#p33v10').hover(function()
{
$('#p33_v10').addClass('res1')
}
,function()
{
$('#p33_v10').removeClass('res1')
});

/*image-text*/
$('#p33_v10').hover(function()
{
$('#p33v10').addClass('res2')
}
,function()
{
$('#p33v10').removeClass('res2')
});

/*text-image*/
$('#p33v11').hover(function()
{
$('#p33_v11').addClass('res1')
}
,function()
{
$('#p33_v11').removeClass('res1')
});

/*image-text*/
$('#p33_v11').hover(function()
{
$('#p33v11').addClass('res2')
}
,function()
{
$('#p33v11').removeClass('res2')
});

/*text-image*/
$('#p33v12').hover(function()
{
$('#p33_v12').addClass('res1')
}
,function()
{
$('#p33_v12').removeClass('res1')
});

/*image-text*/
$('#p33_v12').hover(function()
{
$('#p33v12').addClass('res2')
}
,function()
{
$('#p33v12').removeClass('res2')
});


/*pagina34*/
/*text-image*/
$('#ma34_1').hover(function()
{
$('#p34_ma34_1').addClass('res1')
}
,function()
{
$('#p34_ma34_1').removeClass('res1')
});

/*image-text*/
$('#p34_ma34_1').hover(function()
{
$('#ma34_1').addClass('res2')
}
,function()
{
$('#ma34_1').removeClass('res2')
});

/*text-image*/
$('#p34_1v1').hover(function()
{
$('#p34_v1').addClass('res1')
}
,function()
{
$('#p34_v1').removeClass('res1')
});

/*image-text*/
$('#p34_v1').hover(function()
{
$('#p34_1v1').addClass('res2')
}
,function()
{
$('#p34_1v1').removeClass('res2')
});

/*text-image*/
$('#p34_1v2').hover(function()
{
$('#p34_v2').addClass('res1')
}
,function()
{
$('#p34_v2').removeClass('res1')
});

/*image-text*/
$('#p34_v2').hover(function()
{
$('#p34_1v2').addClass('res2')
}
,function()
{
$('#p34_1v2').removeClass('res2')
});

/*text-image*/
$('#p34_1v3').hover(function()
{
$('#p34_v3').addClass('res1')
}
,function()
{
$('#p34_v3').removeClass('res1')
});

/*image-text*/
$('#p34_v3').hover(function()
{
$('#p34_1v3').addClass('res2')
}
,function()
{
$('#p34_1v3').removeClass('res2')
});

/*text-image*/
$('#p34_1v4').hover(function()
{
$('#p34_v4').addClass('res1')
}
,function()
{
$('#p34_v4').removeClass('res1')
});

/*image-text*/
$('#p34_v4').hover(function()
{
$('#p34_1v4').addClass('res2')
}
,function()
{
$('#p34_1v4').removeClass('res2')
});

/*text-image*/
$('#p34_1v5').hover(function()
{
$('#p34_v5').addClass('res1')
}
,function()
{
$('#p34_v5').removeClass('res1')
});

/*image-text*/
$('#p34_v5').hover(function()
{
$('#p34_1v5').addClass('res2')
}
,function()
{
$('#p34_1v5').removeClass('res2')
});

/*text-image*/
$('#p34_1v6').hover(function()
{
$('#p34_v6').addClass('res1')
}
,function()
{
$('#p34_v6').removeClass('res1')
});

/*image-text*/
$('#p34_v6').hover(function()
{
$('#p34_1v6').addClass('res2')
}
,function()
{
$('#p34_1v6').removeClass('res2')
});

/*text-image*/
$('#p34_1v7').hover(function()
{
$('#p34_v7').addClass('res1')
}
,function()
{
$('#p34_v7').removeClass('res1')
});

/*image-text*/
$('#p34_v7').hover(function()
{
$('#p34_1v7').addClass('res2')
}
,function()
{
$('#p34_1v7').removeClass('res2')
});

/*text-image*/
$('#p34_1v8').hover(function()
{
$('#p34_v8').addClass('res1')
}
,function()
{
$('#p34_v8').removeClass('res1')
});

/*image-text*/
$('#p34_v8').hover(function()
{
$('#p34_1v8').addClass('res2')
}
,function()
{
$('#p34_1v8').removeClass('res2')
});

/*text-image*/
$('#p34_1v9').hover(function()
{
$('#p34_v9').addClass('res1')
}
,function()
{
$('#p34_v9').removeClass('res1')
});

/*image-text*/
$('#p34_v9').hover(function()
{
$('#p34_1v9').addClass('res2')
}
,function()
{
$('#p34_1v9').removeClass('res2')
});

/*text-image*/
$('#p34_1v10').hover(function()
{
$('#p34_v10').addClass('res1')
}
,function()
{
$('#p34_v10').removeClass('res1')
});

/*image-text*/
$('#p34_v10').hover(function()
{
$('#p34_1v10').addClass('res2')
}
,function()
{
$('#p34_1v10').removeClass('res2')
});

/*text-image*/
$('#p34_1v11').hover(function()
{
$('#p34_v11').addClass('res1')
}
,function()
{
$('#p34_v11').removeClass('res1')
});

/*image-text*/
$('#p34_v11').hover(function()
{
$('#p34_1v11').addClass('res2')
}
,function()
{
$('#p34_1v11').removeClass('res2')
});

/*text-image*/
$('#p34_1v12').hover(function()
{
$('#p34_v12').addClass('res1')
}
,function()
{
$('#p34_v12').removeClass('res1')
});

/*image-text*/
$('#p34_v12').hover(function()
{
$('#p34_1v12').addClass('res2')
}
,function()
{
$('#p34_1v12').removeClass('res2')
});

/*text-image*/
$('#ma34_2').hover(function()
{
$('#p34_ma34_2').addClass('res1')
}
,function()
{
$('#p34_ma34_2').removeClass('res1')
});

/*image-text*/
$('#p34_ma34_2').hover(function()
{
$('#ma34_2').addClass('res2')
}
,function()
{
$('#ma34_2').removeClass('res2')
});

/*text-image*/
$('#p34_2v1').hover(function()
{
$('#p34_v_1').addClass('res1')
}
,function()
{
$('#p34_v_1').removeClass('res1')
});

/*image-text*/
$('#p34_v_2').hover(function()
{
$('#p34_2v1').addClass('res2')
}
,function()
{
$('#p34_2v1').removeClass('res2')
});

/*text-image*/
$('#p34_2v2').hover(function()
{
$('#p34_v_2').addClass('res1')
}
,function()
{
$('#p34_v_2').removeClass('res1')
});

/*image-text*/
$('#p34_v_2').hover(function()
{
$('#p34_2v2').addClass('res2')
}
,function()
{
$('#p34_2v2').removeClass('res2')
});

/*text-image*/
$('#p34_2v3').hover(function()
{
$('#p34_v_3').addClass('res1')
}
,function()
{
$('#p34_v_3').removeClass('res1')
});

/*image-text*/
$('#p34_v_3').hover(function()
{
$('#p34_2v3').addClass('res2')
}
,function()
{
$('#p34_2v3').removeClass('res2')
});

/*text-image*/
$('#p34_2v4').hover(function()
{
$('#p34_v_4').addClass('res1')
}
,function()
{
$('#p34_v_4').removeClass('res1')
});

/*image-text*/
$('#p34_v_4').hover(function()
{
$('#p34_2v4').addClass('res2')
}
,function()
{
$('#p34_2v4').removeClass('res2')
});

/*text-image*/
$('#p34_2v5').hover(function()
{
$('#p34_v_5').addClass('res1')
}
,function()
{
$('#p34_v_5').removeClass('res1')
});

/*image-text*/
$('#p34_v_5').hover(function()
{
$('#p34_2v5').addClass('res2')
}
,function()
{
$('#p34_2v5').removeClass('res2')
});

/*text-image*/
$('#p34_2v6').hover(function()
{
$('#p34_v_6').addClass('res1')
}
,function()
{
$('#p34_v_6').removeClass('res1')
});

/*image-text*/
$('#p34_v_6').hover(function()
{
$('#p34_2v6').addClass('res2')
}
,function()
{
$('#p34_2v6').removeClass('res2')
});

/*text-image*/
$('#p34_2v7').hover(function()
{
$('#p34_v_7').addClass('res1')
}
,function()
{
$('#p34_v_7').removeClass('res1')
});

/*image-text*/
$('#p34_v_7').hover(function()
{
$('#p34_2v7').addClass('res2')
}
,function()
{
$('#p34_2v7').removeClass('res2')
});

/*text-image*/
$('#p34_2v8').hover(function()
{
$('#p34_v_8').addClass('res1')
}
,function()
{
$('#p34_v_8').removeClass('res1')
});

/*image-text*/
$('#p34_v_8').hover(function()
{
$('#p34_2v8').addClass('res2')
}
,function()
{
$('#p34_2v8').removeClass('res2')
});

/*text-image*/
$('#p34_2v9').hover(function()
{
$('#p34_v_9').addClass('res1')
}
,function()
{
$('#p34_v_9').removeClass('res1')
});

/*image-text*/
$('#p34_v_9').hover(function()
{
$('#p34_2v9').addClass('res2')
}
,function()
{
$('#p34_2v9').removeClass('res2')
});

/*text-image*/
$('#p34_2v10').hover(function()
{
$('#p34_v_10').addClass('res1')
}
,function()
{
$('#p34_v_10').removeClass('res1')
});

/*image-text*/
$('#p34_v_10').hover(function()
{
$('#p34_2v10').addClass('res2')
}
,function()
{
$('#p34_2v10').removeClass('res2')
});

/*text-image*/
$('#p34_2v11').hover(function()
{
$('#p34_v_11').addClass('res1')
}
,function()
{
$('#p34_v_11').removeClass('res1')
});

/*image-text*/
$('#p34_v_11').hover(function()
{
$('#p34_2v11').addClass('res2')
}
,function()
{
$('#p34_2v11').removeClass('res2')
});

/*text-image*/
$('#p34_2v12').hover(function()
{
$('#p34_v_12').addClass('res1')
}
,function()
{
$('#p34_v_12').removeClass('res1')
});

/*image-text*/
$('#p34_v_12').hover(function()
{
$('#p34_2v12').addClass('res2')
}
,function()
{
$('#p34_2v12').removeClass('res2')
});


/*pagina35*/
/*text-image*/
$('#p35v13').hover(function()
{
$('#p35_v13').addClass('res1')
}
,function()
{
$('#p35_v13').removeClass('res1')
});

/*image-text*/
$('#p35_v13').hover(function()
{
$('#p35v13').addClass('res2')
}
,function()
{
$('#p35v13').removeClass('res2')
});

/*text-image*/
$('#p35v14').hover(function()
{
$('#p35_v14').addClass('res1')
}
,function()
{
$('#p35_v14').removeClass('res1')
});

/*image-text*/
$('#p35_v14').hover(function()
{
$('#p35v14').addClass('res2')
}
,function()
{
$('#p35v14').removeClass('res2')
});

/*text-image*/
$('#p35v15').hover(function()
{
$('#p35_v15').addClass('res1')
}
,function()
{
$('#p35_v15').removeClass('res1')
});

/*image-text*/
$('#p35_v15').hover(function()
{
$('#p35v15').addClass('res2')
}
,function()
{
$('#p35v15').removeClass('res2')
});

/*text-image*/
$('#p35v16').hover(function()
{
$('#p35_v16').addClass('res1')
}
,function()
{
$('#p35_v16').removeClass('res1')
});

/*image-text*/
$('#p35_v16').hover(function()
{
$('#p35v16').addClass('res2')
}
,function()
{
$('#p35v16').removeClass('res2')
});

/*text-image*/
$('#p35v17').hover(function()
{
$('#p35_v17').addClass('res1')
}
,function()
{
$('#p35_v17').removeClass('res1')
});

/*image-text*/
$('#p35_v17').hover(function()
{
$('#p35v17').addClass('res2')
}
,function()
{
$('#p35v17').removeClass('res2')
});

/*text-image*/
$('#p35v18').hover(function()
{
$('#p35_v18').addClass('res1')
}
,function()
{
$('#p35_v18').removeClass('res1')
});

/*image-text*/
$('#p35_v18').hover(function()
{
$('#p35v18').addClass('res2')
}
,function()
{
$('#p35v18').removeClass('res2')
});

/*text-image*/
$('#p35v19').hover(function()
{
$('#p35_v19').addClass('res1')
}
,function()
{
$('#p35_v19').removeClass('res1')
});

/*image-text*/
$('#p35_v19').hover(function()
{
$('#p35v19').addClass('res2')
}
,function()
{
$('#p35v19').removeClass('res2')
});

/*text-image*/
$('#p35v20').hover(function()
{
$('#p35_v20').addClass('res1')
}
,function()
{
$('#p35_v20').removeClass('res1')
});

/*image-text*/
$('#p35_v20').hover(function()
{
$('#p35v20').addClass('res2')
}
,function()
{
$('#p35v20').removeClass('res2')
});

/*text-image*/
$('#ma35').hover(function()
{
$('#p35_ma35').addClass('res1')
}
,function()
{
$('#p35_ma35').removeClass('res1')
});

/*image-text*/
$('#p35_ma35').hover(function()
{
$('#ma35').addClass('res2')
}
,function()
{
$('#ma35').removeClass('res2')
});

/*text-image*/
$('#p35v1').hover(function()
{
$('#p35_v1').addClass('res1')
}
,function()
{
$('#p35_v1').removeClass('res1')
});

/*image-text*/
$('#p35_v1').hover(function()
{
$('#p35v1').addClass('res2')
}
,function()
{
$('#p35v1').removeClass('res2')
});

/*text-image*/
$('#p35v2').hover(function()
{
$('#p35_v2').addClass('res1')
}
,function()
{
$('#p35_v2').removeClass('res1')
});

/*image-text*/
$('#p35_v2').hover(function()
{
$('#p35v2').addClass('res2')
}
,function()
{
$('#p35v2').removeClass('res2')
});

/*text-image*/
$('#p35v3').hover(function()
{
$('#p35_v3').addClass('res1')
}
,function()
{
$('#p35_v3').removeClass('res1')
});

/*image-text*/
$('#p35_v3').hover(function()
{
$('#p35v3').addClass('res2')
}
,function()
{
$('#p35v3').removeClass('res2')
});

/*text-image*/
$('#p35v4').hover(function()
{
$('#p35_v4').addClass('res1')
}
,function()
{
$('#p35_v4').removeClass('res1')
});

/*image-text*/
$('#p35_v4').hover(function()
{
$('#p35v4').addClass('res2')
}
,function()
{
$('#p35v4').removeClass('res2')
});

/*text-image*/
$('#p35v5').hover(function()
{
$('#p35_v5').addClass('res1')
}
,function()
{
$('#p35_v5').removeClass('res1')
});

/*image-text*/
$('#p35_v5').hover(function()
{
$('#p35v5').addClass('res2')
}
,function()
{
$('#p35v5').removeClass('res2')
});

/*text-image*/
$('#p35v6').hover(function()
{
$('#p35_v6').addClass('res1')
}
,function()
{
$('#p35_v6').removeClass('res1')
});

/*image-text*/
$('#p35_v6').hover(function()
{
$('#p35v6').addClass('res2')
}
,function()
{
$('#p35v6').removeClass('res2')
});

/*text-image*/
$('#p35v7').hover(function()
{
$('#p35_v7').addClass('res1')
}
,function()
{
$('#p35_v7').removeClass('res1')
});

/*image-text*/
$('#p35_v7').hover(function()
{
$('#p35v7').addClass('res2')
}
,function()
{
$('#p35v7').removeClass('res2')
});

/*text-image*/
$('#p35v8').hover(function()
{
$('#p35_v8').addClass('res1')
}
,function()
{
$('#p35_v8').removeClass('res1')
});

/*image-text*/
$('#p35_v8').hover(function()
{
$('#p35v8').addClass('res2')
}
,function()
{
$('#p35v8').removeClass('res2')
});

/*text-image*/
$('#p35v9').hover(function()
{
$('#p35_v9').addClass('res1')
}
,function()
{
$('#p35_v9').removeClass('res1')
});

/*image-text*/
$('#p35_v9').hover(function()
{
$('#p35v9').addClass('res2')
}
,function()
{
$('#p35v9').removeClass('res2')
});

/*text-image*/
$('#p35v10').hover(function()
{
$('#p35_v10').addClass('res1')
}
,function()
{
$('#p35_v10').removeClass('res1')
});

/*image-text*/
$('#p35_v10').hover(function()
{
$('#p35v10').addClass('res2')
}
,function()
{
$('#p35v10').removeClass('res2')
});

/*text-image*/
$('#p35v11').hover(function()
{
$('#p35_v11').addClass('res1')
}
,function()
{
$('#p35_v11').removeClass('res1')
});

/*image-text*/
$('#p35_v11').hover(function()
{
$('#p35v11').addClass('res2')
}
,function()
{
$('#p35v11').removeClass('res2')
});

/*text-image*/
$('#p35v12').hover(function()
{
$('#p35_v12').addClass('res1')
}
,function()
{
$('#p35_v12').removeClass('res1')
});

/*image-text*/
$('#p35_v12').hover(function()
{
$('#p35v12').addClass('res2')
}
,function()
{
$('#p35v12').removeClass('res2')
});


/*pagina36*/
/*text-image*/
$('#ma36_1').hover(function()
{
$('#p36_ma36_1').addClass('res1')
}
,function()
{
$('#p36_ma36_1').removeClass('res1')
});

/*image-text*/
$('#p36_ma36_1').hover(function()
{
$('#ma36_1').addClass('res2')
}
,function()
{
$('#ma36_1').removeClass('res2')
});

/*text-image*/
$('#p36_1v1').hover(function()
{
$('#p36_v1').addClass('res1')
}
,function()
{
$('#p36_v1').removeClass('res1')
});

/*image-text*/
$('#p36_v1').hover(function()
{
$('#p36_1v1').addClass('res2')
}
,function()
{
$('#p36_1v1').removeClass('res2')
});

/*text-image*/
$('#p36_1v2').hover(function()
{
$('#p36_v2').addClass('res1')
}
,function()
{
$('#p36_v2').removeClass('res1')
});

/*image-text*/
$('#p36_v2').hover(function()
{
$('#p36_1v2').addClass('res2')
}
,function()
{
$('#p36_1v2').removeClass('res2')
});

/*text-image*/
$('#p36_1v3').hover(function()
{
$('#p36_v3').addClass('res1')
}
,function()
{
$('#p36_v3').removeClass('res1')
});

/*image-text*/
$('#p36_v3').hover(function()
{
$('#p36_1v3').addClass('res2')
}
,function()
{
$('#p36_1v3').removeClass('res2')
});

/*text-image*/
$('#p36_1v4').hover(function()
{
$('#p36_v4').addClass('res1')
}
,function()
{
$('#p36_v4').removeClass('res1')
});

/*image-text*/
$('#p36_v4').hover(function()
{
$('#p36_1v4').addClass('res2')
}
,function()
{
$('#p36_1v4').removeClass('res2')
});

/*text-image*/
$('#p36_1v5').hover(function()
{
$('#p36_v5').addClass('res1')
}
,function()
{
$('#p36_v5').removeClass('res1')
});

/*image-text*/
$('#p36_v5').hover(function()
{
$('#p36_1v5').addClass('res2')
}
,function()
{
$('#p36_1v5').removeClass('res2')
});

/*text-image*/
$('#p36_1v6').hover(function()
{
$('#p36_v6').addClass('res1')
}
,function()
{
$('#p36_v6').removeClass('res1')
});

/*image-text*/
$('#p36_v6').hover(function()
{
$('#p36_1v6').addClass('res2')
}
,function()
{
$('#p36_1v6').removeClass('res2')
});

/*text-image*/
$('#p36_1v7').hover(function()
{
$('#p36_v7').addClass('res1')
}
,function()
{
$('#p36_v7').removeClass('res1')
});

/*image-text*/
$('#p36_v7').hover(function()
{
$('#p36_1v7').addClass('res2')
}
,function()
{
$('#p36_1v7').removeClass('res2')
});

/*text-image*/
$('#p36_1v8').hover(function()
{
$('#p36_v8').addClass('res1')
}
,function()
{
$('#p36_v8').removeClass('res1')
});

/*image-text*/
$('#p36_v8').hover(function()
{
$('#p36_1v8').addClass('res2')
}
,function()
{
$('#p36_1v8').removeClass('res2')
});

/*text-image*/
$('#p36_1v9').hover(function()
{
$('#p36_v9').addClass('res1')
}
,function()
{
$('#p36_v9').removeClass('res1')
});

/*image-text*/
$('#p36_v9').hover(function()
{
$('#p36_1v9').addClass('res2')
}
,function()
{
$('#p36_1v9').removeClass('res2')
});

/*text-image*/
$('#p36_1v10').hover(function()
{
$('#p36_v10').addClass('res1')
}
,function()
{
$('#p36_v10').removeClass('res1')
});

/*image-text*/
$('#p36_v10').hover(function()
{
$('#p36_1v10').addClass('res2')
}
,function()
{
$('#p36_1v10').removeClass('res2')
});

/*text-image*/
$('#p36_1v11').hover(function()
{
$('#p36_v11').addClass('res1')
}
,function()
{
$('#p36_v11').removeClass('res1')
});

/*image-text*/
$('#p36_v11').hover(function()
{
$('#p36_1v11').addClass('res2')
}
,function()
{
$('#p36_1v11').removeClass('res2')
});

/*text-image*/
$('#p36_1v12').hover(function()
{
$('#p36_v12').addClass('res1')
}
,function()
{
$('#p36_v12').removeClass('res1')
});

/*image-text*/
$('#p36_v12').hover(function()
{
$('#p36_1v12').addClass('res2')
}
,function()
{
$('#p36_1v12').removeClass('res2')
});

/*text-image*/
$('#ma36_2').hover(function()
{
$('#p36_ma36_2').addClass('res1')
}
,function()
{
$('#p36_ma36_2').removeClass('res1')
});

/*image-text*/
$('#p36_ma36_2').hover(function()
{
$('#ma36_2').addClass('res2')
}
,function()
{
$('#ma36_2').removeClass('res2')
});

/*text-image*/
$('#p36_2v1').hover(function()
{
$('#p36_v_1').addClass('res1')
}
,function()
{
$('#p36_v_1').removeClass('res1')
});

/*image-text*/
$('#p36_v_1').hover(function()
{
$('#p36_2v1').addClass('res2')
}
,function()
{
$('#p36_2v1').removeClass('res2')
});

/*text-image*/
$('#p36_2v2').hover(function()
{
$('#p36_v_2').addClass('res1')
}
,function()
{
$('#p36_v_2').removeClass('res1')
});

/*image-text*/
$('#p36_v_2').hover(function()
{
$('#p36_2v2').addClass('res2')
}
,function()
{
$('#p36_2v2').removeClass('res2')
});

/*text-image*/
$('#p36_2v3').hover(function()
{
$('#p36_v_3').addClass('res1')
}
,function()
{
$('#p36_v_3').removeClass('res1')
});

/*image-text*/
$('#p36_v_3').hover(function()
{
$('#p36_2v3').addClass('res2')
}
,function()
{
$('#p36_2v3').removeClass('res2')
});

/*text-image*/
$('#p36_2v4').hover(function()
{
$('#p36_v_4').addClass('res1')
}
,function()
{
$('#p36_v_4').removeClass('res1')
});

/*image-text*/
$('#p36_v_4').hover(function()
{
$('#p36_2v4').addClass('res2')
}
,function()
{
$('#p36_2v4').removeClass('res2')
});

/*text-image*/
$('#p36_2v5').hover(function()
{
$('#p36_v_5').addClass('res1')
}
,function()
{
$('#p36_v_5').removeClass('res1')
});

/*image-text*/
$('#p36_v_5').hover(function()
{
$('#p36_2v5').addClass('res2')
}
,function()
{
$('#p36_2v5').removeClass('res2')
});

/*text-image*/
$('#p36_2v6').hover(function()
{
$('#p36_v_6').addClass('res1')
}
,function()
{
$('#p36_v_6').removeClass('res1')
});

/*image-text*/
$('#p36_v_6').hover(function()
{
$('#p36_2v6').addClass('res2')
}
,function()
{
$('#p36_2v6').removeClass('res2')
});

/*text-image*/
$('#p36_2v7').hover(function()
{
$('#p36_v_7').addClass('res1')
}
,function()
{
$('#p36_v_7').removeClass('res1')
});

/*image-text*/
$('#p36_v_7').hover(function()
{
$('#p36_2v7').addClass('res2')
}
,function()
{
$('#p36_2v7').removeClass('res2')
});

/*text-image*/
$('#p36_2v8').hover(function()
{
$('#p36_v_8').addClass('res1')
}
,function()
{
$('#p36_v_8').removeClass('res1')
});

/*image-text*/
$('#p36_v_8').hover(function()
{
$('#p36_2v8').addClass('res2')
}
,function()
{
$('#p36_2v8').removeClass('res2')
});

/*text-image*/
$('#p36_2v9').hover(function()
{
$('#p36_v_9').addClass('res1')
}
,function()
{
$('#p36_v_9').removeClass('res1')
});

/*image-text*/
$('#p36_v_9').hover(function()
{
$('#p36_2v9').addClass('res2')
}
,function()
{
$('#p36_2v9').removeClass('res2')
});

/*text-image*/
$('#p36_2v10').hover(function()
{
$('#p36_v_10').addClass('res1')
}
,function()
{
$('#p36_v_10').removeClass('res1')
});

/*image-text*/
$('#p36_v_10').hover(function()
{
$('#p36_2v10').addClass('res2')
}
,function()
{
$('#p36_2v10').removeClass('res2')
});

/*text-image*/
$('#p36_2v11').hover(function()
{
$('#p36_v_11').addClass('res1')
}
,function()
{
$('#p36_v_11').removeClass('res1')
});

/*image-text*/
$('#p36_v_11').hover(function()
{
$('#p36_2v11').addClass('res2')
}
,function()
{
$('#p36_2v11').removeClass('res2')
});

/*text-image*/
$('#p36_2v12').hover(function()
{
$('#p36_v_12').addClass('res1')
}
,function()
{
$('#p36_v_12').removeClass('res1')
});

/*image-text*/
$('#p36_v_12').hover(function()
{
$('#p36_2v12').addClass('res2')
}
,function()
{
$('#p36_2v12').removeClass('res2')
});


/*pagina37*/
/*text-image*/
$('#p37v13').hover(function()
{
$('#p37_v13').addClass('res1')
}
,function()
{
$('#p37_v13').removeClass('res1')
});

/*image-text*/
$('#p37_v13').hover(function()
{
$('#p37v13').addClass('res2')
}
,function()
{
$('#p37v13').removeClass('res2')
});

/*text-image*/
$('#p37v14').hover(function()
{
$('#p37_v14').addClass('res1')
}
,function()
{
$('#p37_v14').removeClass('res1')
});

/*image-text*/
$('#p37_v14').hover(function()
{
$('#p37v14').addClass('res2')
}
,function()
{
$('#p37v14').removeClass('res2')
});

/*text-image*/
$('#p37v15').hover(function()
{
$('#p37_v15').addClass('res1')
}
,function()
{
$('#p37_v15').removeClass('res1')
});

/*image-text*/
$('#p37_v15').hover(function()
{
$('#p37v15').addClass('res2')
}
,function()
{
$('#p37v15').removeClass('res2')
});

/*text-image*/
$('#p37v16').hover(function()
{
$('#p37_v16').addClass('res1')
}
,function()
{
$('#p37_v16').removeClass('res1')
});

/*image-text*/
$('#p37_v16').hover(function()
{
$('#p37v16').addClass('res2')
}
,function()
{
$('#p37v16').removeClass('res2')
});

/*text-image*/
$('#p37v17').hover(function()
{
$('#p37_v17').addClass('res1')
}
,function()
{
$('#p37_v17').removeClass('res1')
});

/*image-text*/
$('#p37_v17').hover(function()
{
$('#p37v17').addClass('res2')
}
,function()
{
$('#p37v17').removeClass('res2')
});

/*text-image*/
$('#p37v18').hover(function()
{
$('#p37_v18').addClass('res1')
}
,function()
{
$('#p37_v18').removeClass('res1')
});

/*image-text*/
$('#p37_v18').hover(function()
{
$('#p37v18').addClass('res2')
}
,function()
{
$('#p37v18').removeClass('res2')
});

/*text-image*/
$('#p37v19').hover(function()
{
$('#p37_v19').addClass('res1')
}
,function()
{
$('#p37_v19').removeClass('res1')
});

/*image-text*/
$('#p37_v19').hover(function()
{
$('#p37v19').addClass('res2')
}
,function()
{
$('#p37v19').removeClass('res2')
});

/*text-image*/
$('#p37v20').hover(function()
{
$('#p37_v20').addClass('res1')
}
,function()
{
$('#p37_v20').removeClass('res1')
});

/*image-text*/
$('#p37_v20').hover(function()
{
$('#p37v20').addClass('res2')
}
,function()
{
$('#p37v20').removeClass('res2')
});

/*text-image*/
$('#ma37_1').hover(function()
{
$('#p37_ma37_1').addClass('res1')
}
,function()
{
$('#p37_ma37_1').removeClass('res1')
});

/*image-text*/
$('#p37_ma37_1').hover(function()
{
$('#ma37_1').addClass('res2')
}
,function()
{
$('#ma37_1').removeClass('res2')
});

/*text-image*/
$('#p37_1v1').hover(function()
{
$('#p37_v1').addClass('res1')
}
,function()
{
$('#p37_v1').removeClass('res1')
});

/*image-text*/
$('#p37_v1').hover(function()
{
$('#p37_1v1').addClass('res2')
}
,function()
{
$('#p37_1v1').removeClass('res2')
});

/*text-image*/
$('#p37_1v2').hover(function()
{
$('#p37_v2').addClass('res1')
}
,function()
{
$('#p37_v2').removeClass('res1')
});

/*image-text*/
$('#p37_v2').hover(function()
{
$('#p37_1v2').addClass('res2')
}
,function()
{
$('#p37_1v2').removeClass('res2')
});

/*text-image*/
$('#p37_1v3').hover(function()
{
$('#p37_v3').addClass('res1')
}
,function()
{
$('#p37_v3').removeClass('res1')
});

/*image-text*/
$('#p37_v3').hover(function()
{
$('#p37_1v3').addClass('res2')
}
,function()
{
$('#p37_1v3').removeClass('res2')
});

/*text-image*/
$('#p37_1v4').hover(function()
{
$('#p37_v4').addClass('res1')
}
,function()
{
$('#p37_v4').removeClass('res1')
});

/*image-text*/
$('#p37_v4').hover(function()
{
$('#p37_1v4').addClass('res2')
}
,function()
{
$('#p37_1v4').removeClass('res2')
});

/*text-image*/
$('#p37_1v5').hover(function()
{
$('#p37_v5').addClass('res1')
}
,function()
{
$('#p37_v5').removeClass('res1')
});

/*image-text*/
$('#p37_v5').hover(function()
{
$('#p37_1v5').addClass('res2')
}
,function()
{
$('#p37_1v5').removeClass('res2')
});

/*text-image*/
$('#p37_1v6').hover(function()
{
$('#p37_v6').addClass('res1')
}
,function()
{
$('#p37_v6').removeClass('res1')
});

/*image-text*/
$('#p37_v6').hover(function()
{
$('#p37_1v6').addClass('res2')
}
,function()
{
$('#p37_1v6').removeClass('res2')
});

/*text-image*/
$('#p37_1v7').hover(function()
{
$('#p37_v7').addClass('res1')
}
,function()
{
$('#p37_v7').removeClass('res1')
});

/*image-text*/
$('#p37_v7').hover(function()
{
$('#p37_1v7').addClass('res2')
}
,function()
{
$('#p37_1v7').removeClass('res2')
});

/*text-image*/
$('#p37_1v8').hover(function()
{
$('#p37_v8').addClass('res1')
}
,function()
{
$('#p37_v8').removeClass('res1')
});

/*image-text*/
$('#p37_v8').hover(function()
{
$('#p37_1v8').addClass('res2')
}
,function()
{
$('#p37_1v8').removeClass('res2')
});

/*text-image*/
$('#p37_1v9').hover(function()
{
$('#p37_v9').addClass('res1')
}
,function()
{
$('#p37_v9').removeClass('res1')
});

/*image-text*/
$('#p37_v9').hover(function()
{
$('#p37_1v9').addClass('res2')
}
,function()
{
$('#p37_1v9').removeClass('res2')
});

/*text-image*/
$('#p37_1v10').hover(function()
{
$('#p37_v10').addClass('res1')
}
,function()
{
$('#p37_v10').removeClass('res1')
});

/*image-text*/
$('#p37_v10').hover(function()
{
$('#p37_1v10').addClass('res2')
}
,function()
{
$('#p37_1v10').removeClass('res2')
});

/*text-image*/
$('#p37_1v11').hover(function()
{
$('#p37_v11').addClass('res1')
}
,function()
{
$('#p37_v11').removeClass('res1')
});

/*image-text*/
$('#p37_v11').hover(function()
{
$('#p37_1v11').addClass('res2')
}
,function()
{
$('#p37_1v11').removeClass('res2')
});

/*text-image*/
$('#p37_1v12').hover(function()
{
$('#p37_v12').addClass('res1')
}
,function()
{
$('#p37_v12').removeClass('res1')
});

/*image-text*/
$('#p37_v12').hover(function()
{
$('#p37_1v12').addClass('res2')
}
,function()
{
$('#p37_1v12').removeClass('res2')
});

/*text-image*/
$('#ma37_2').hover(function()
{
$('#p37_ma37_2').addClass('res1')
}
,function()
{
$('#p37_ma37_2').removeClass('res1')
});

/*image-text*/
$('#p37_ma37_2').hover(function()
{
$('#ma37_2').addClass('res2')
}
,function()
{
$('#ma37_2').removeClass('res2')
});

/*text-image*/
$('#p37_2v1').hover(function()
{
$('#p37_v_1').addClass('res1')
}
,function()
{
$('#p37_v_1').removeClass('res1')
});

/*image-text*/
$('#p37_v_1').hover(function()
{
$('#p37_2v1').addClass('res2')
}
,function()
{
$('#p37_2v1').removeClass('res2')
});

/*text-image*/
$('#p37_2v2').hover(function()
{
$('#p37_v_2').addClass('res1')
}
,function()
{
$('#p37_v_2').removeClass('res1')
});

/*image-text*/
$('#p37_v_2').hover(function()
{
$('#p37_2v2').addClass('res2')
}
,function()
{
$('#p37_2v2').removeClass('res2')
});

/*text-image*/
$('#p37_2v3').hover(function()
{
$('#p37_v_3').addClass('res1')
}
,function()
{
$('#p37_v_3').removeClass('res1')
});

/*image-text*/
$('#p37_v_3').hover(function()
{
$('#p37_2v3').addClass('res2')
}
,function()
{
$('#p37_2v3').removeClass('res2')
});

/*text-image*/
$('#p37_2v4').hover(function()
{
$('#p37_v_4').addClass('res1')
}
,function()
{
$('#p37_v_4').removeClass('res1')
});

/*image-text*/
$('#p37_v_4').hover(function()
{
$('#p37_2v4').addClass('res2')
}
,function()
{
$('#p37_2v4').removeClass('res2')
});


/*pagina38*/
/*text-image*/
$('#p38v5').hover(function()
{
$('#p38_v5').addClass('res1')
}
,function()
{
$('#p38_v5').removeClass('res1')
});

/*image-text*/
$('#p38_v5').hover(function()
{
$('#p38v5').addClass('res2')
}
,function()
{
$('#p38v5').removeClass('res2')
});

/*text-image*/
$('#p38v6').hover(function()
{
$('#p38_v6').addClass('res1')
}
,function()
{
$('#p38_v6').removeClass('res1')
});

/*image-text*/
$('#p38_v6').hover(function()
{
$('#p38v6').addClass('res2')
}
,function()
{
$('#p38v6').removeClass('res2')
});

/*text-image*/
$('#p38v7').hover(function()
{
$('#p38_v7').addClass('res1')
}
,function()
{
$('#p38_v7').removeClass('res1')
});

/*image-text*/
$('#p38_v7').hover(function()
{
$('#p38v7').addClass('res2')
}
,function()
{
$('#p38v7').removeClass('res2')
});

/*text-image*/
$('#p38v8').hover(function()
{
$('#p38_v8').addClass('res1')
}
,function()
{
$('#p38_v8').removeClass('res1')
});

/*image-text*/
$('#p38_v8').hover(function()
{
$('#p38v8').addClass('res2')
}
,function()
{
$('#p38v8').removeClass('res2')
});

/*text-image*/
$('#p38v9').hover(function()
{
$('#p38_v9').addClass('res1')
}
,function()
{
$('#p38_v9').removeClass('res1')
});

/*image-text*/
$('#p38_v9').hover(function()
{
$('#p38v9').addClass('res2')
}
,function()
{
$('#p38v9').removeClass('res2')
});

/*text-image*/
$('#p38v10').hover(function()
{
$('#p38_v10').addClass('res1')
}
,function()
{
$('#p38_v10').removeClass('res1')
});

/*image-text*/
$('#p38_v10').hover(function()
{
$('#p38v10').addClass('res2')
}
,function()
{
$('#p38v10').removeClass('res2')
});

/*text-image*/
$('#p38v11').hover(function()
{
$('#p38_v11').addClass('res1')
}
,function()
{
$('#p38_v11').removeClass('res1')
});

/*image-text*/
$('#p38_v11').hover(function()
{
$('#p38v11').addClass('res2')
}
,function()
{
$('#p38v11').removeClass('res2')
});

/*text-image*/
$('#p38v12').hover(function()
{
$('#p38_v12').addClass('res1')
}
,function()
{
$('#p38_v12').removeClass('res1')
});

/*image-text*/
$('#p38_v12').hover(function()
{
$('#p38v12').addClass('res2')
}
,function()
{
$('#p38v12').removeClass('res2')
});

/*text-image*/
$('#p38v13').hover(function()
{
$('#p38_v13').addClass('res1')
}
,function()
{
$('#p38_v13').removeClass('res1')
});

/*image-text*/
$('#p38_v13').hover(function()
{
$('#p38v13').addClass('res2')
}
,function()
{
$('#p38v13').removeClass('res2')
});

/*text-image*/
$('#p38v14').hover(function()
{
$('#p38_v14').addClass('res1')
}
,function()
{
$('#p38_v14').removeClass('res1')
});

/*image-text*/
$('#p38_v14').hover(function()
{
$('#p38v14').addClass('res2')
}
,function()
{
$('#p38v14').removeClass('res2')
});

/*text-image*/
$('#p38v15').hover(function()
{
$('#p38_v15').addClass('res1')
}
,function()
{
$('#p38_v15').removeClass('res1')
});

/*image-text*/
$('#p38_v15').hover(function()
{
$('#p38v15').addClass('res2')
}
,function()
{
$('#p38v15').removeClass('res2')
});

/*text-image*/
$('#p38v16').hover(function()
{
$('#p38_v16').addClass('res1')
}
,function()
{
$('#p38_v16').removeClass('res1')
});

/*image-text*/
$('#p38_v16').hover(function()
{
$('#p38v16').addClass('res2')
}
,function()
{
$('#p38v16').removeClass('res2')
});

/*text-image*/
$('#p38v17').hover(function()
{
$('#p38_v17').addClass('res1')
}
,function()
{
$('#p38_v17').removeClass('res1')
});

/*image-text*/
$('#p38_v17').hover(function()
{
$('#p38v17').addClass('res2')
}
,function()
{
$('#p38v17').removeClass('res2')
});

/*text-image*/
$('#p38v18').hover(function()
{
$('#p38_v18').addClass('res1')
}
,function()
{
$('#p38_v18').removeClass('res1')
});

/*image-text*/
$('#p38_v18').hover(function()
{
$('#p38v18').addClass('res2')
}
,function()
{
$('#p38v18').removeClass('res2')
});

/*text-image*/
$('#p38v19').hover(function()
{
$('#p38_v19').addClass('res1')
}
,function()
{
$('#p38_v19').removeClass('res1')
});

/*image-text*/
$('#p38_v19').hover(function()
{
$('#p38v19').addClass('res2')
}
,function()
{
$('#p38v19').removeClass('res2')
});

/*text-image*/
$('#p38v20').hover(function()
{
$('#p38_v20').addClass('res1')
}
,function()
{
$('#p38_v20').removeClass('res1')
});

/*image-text*/
$('#p38_v20').hover(function()
{
$('#p38v20').addClass('res2')
}
,function()
{
$('#p38v20').removeClass('res2')
});

/*text-image*/
$('#ma38').hover(function()
{
$('#p38_ma38').addClass('res1')
}
,function()
{
$('#p38_ma38').removeClass('res1')
});

/*image-text*/
$('#p38_ma38').hover(function()
{
$('#ma38').addClass('res2')
}
,function()
{
$('#ma38').removeClass('res2')
});

/*text-image*/
$('#p38v1').hover(function()
{
$('#p38_v1').addClass('res1')
}
,function()
{
$('#p38_v1').removeClass('res1')
});

/*image-text*/
$('#p38_v1').hover(function()
{
$('#p38v1').addClass('res2')
}
,function()
{
$('#p38v1').removeClass('res2')
});

/*text-image*/
$('#p38v2').hover(function()
{
$('#p38_v2').addClass('res1')
}
,function()
{
$('#p38_v2').removeClass('res1')
});

/*image-text*/
$('#p38_v2').hover(function()
{
$('#p38v2').addClass('res2')
}
,function()
{
$('#p38v2').removeClass('res2')
});

/*text-image*/
$('#p38v3').hover(function()
{
$('#p38_v3').addClass('res1')
}
,function()
{
$('#p38_v3').removeClass('res1')
});

/*image-text*/
$('#p38_v3').hover(function()
{
$('#p38v3').addClass('res2')
}
,function()
{
$('#p38v3').removeClass('res2')
});

/*text-image*/
$('#p38v4').hover(function()
{
$('#p38_v4').addClass('res1')
}
,function()
{
$('#p38_v4').removeClass('res1')
});

/*image-text*/
$('#p38_v4').hover(function()
{
$('#p38v4').addClass('res2')
}
,function()
{
$('#p38v4').removeClass('res2')
});


/*pagina39*/
/*text-image*/
$('#p39_1v5').hover(function()
{
$('#p39_v5').addClass('res1')
}
,function()
{
$('#p39_v5').removeClass('res1')
});

/*image-text*/
$('#p39_v5').hover(function()
{
$('#p39_1v5').addClass('res2')
}
,function()
{
$('#p39_1v5').removeClass('res2')
});

/*text-image*/
$('#p39_1v6').hover(function()
{
$('#p39_v6').addClass('res1')
}
,function()
{
$('#p39_v6').removeClass('res1')
});

/*image-text*/
$('#p39_v6').hover(function()
{
$('#p39_1v6').addClass('res2')
}
,function()
{
$('#p39_1v6').removeClass('res2')
});

/*text-image*/
$('#p39_1v7').hover(function()
{
$('#p39_v7').addClass('res1')
}
,function()
{
$('#p39_v7').removeClass('res1')
});

/*image-text*/
$('#p39_v7').hover(function()
{
$('#p39_1v7').addClass('res2')
}
,function()
{
$('#p39_1v7').removeClass('res2')
});

/*text-image*/
$('#p39_1v8').hover(function()
{
$('#p39_v8').addClass('res1')
}
,function()
{
$('#p39_v8').removeClass('res1')
});

/*image-text*/
$('#p39_v8').hover(function()
{
$('#p39_1v8').addClass('res2')
}
,function()
{
$('#p39_1v8').removeClass('res2')
});

/*text-image*/
$('#p39_1v9').hover(function()
{
$('#p39_v9').addClass('res1')
}
,function()
{
$('#p39_v9').removeClass('res1')
});

/*image-text*/
$('#p39_v9').hover(function()
{
$('#p39_1v9').addClass('res2')
}
,function()
{
$('#p39_1v9').removeClass('res2')
});

/*text-image*/
$('#p39_1v10').hover(function()
{
$('#p39_v10').addClass('res1')
}
,function()
{
$('#p39_v10').removeClass('res1')
});

/*image-text*/
$('#p39_v10').hover(function()
{
$('#p39_1v10').addClass('res2')
}
,function()
{
$('#p39_1v10').removeClass('res2')
});

/*text-image*/
$('#p39_1v11').hover(function()
{
$('#p39_v11').addClass('res1')
}
,function()
{
$('#p39_v11').removeClass('res1')
});

/*image-text*/
$('#p39_v11').hover(function()
{
$('#p39_1v11').addClass('res2')
}
,function()
{
$('#p39_1v11').removeClass('res2')
});

/*text-image*/
$('#p39_1v12').hover(function()
{
$('#p39_v12').addClass('res1')
}
,function()
{
$('#p39_v12').removeClass('res1')
});

/*image-text*/
$('#p39_v12').hover(function()
{
$('#p39_1v12').addClass('res2')
}
,function()
{
$('#p39_1v12').removeClass('res2')
});

/*text-image*/
$('#ma39_1').hover(function()
{
$('#p39_ma39_1').addClass('res1')
}
,function()
{
$('#p39_ma39_1').removeClass('res1')
});

/*image-text*/
$('#p39_ma39_1').hover(function()
{
$('#ma39_1').addClass('res2')
}
,function()
{
$('#ma39_1').removeClass('res2')
});

/*text-image*/
$('#p39_2v1').hover(function()
{
$('#p39_v_1').addClass('res1')
}
,function()
{
$('#p39_v_1').removeClass('res1')
});

/*image-text*/
$('#p39_v_1').hover(function()
{
$('#p39_2v1').addClass('res2')
}
,function()
{
$('#p39_2v1').removeClass('res2')
});

/*text-image*/
$('#p39_2v2').hover(function()
{
$('#p39_v_2').addClass('res1')
}
,function()
{
$('#p39_v_2').removeClass('res1')
});

/*image-text*/
$('#p39_v_2').hover(function()
{
$('#p39_2v2').addClass('res2')
}
,function()
{
$('#p39_2v2').removeClass('res2')
});

/*text-image*/
$('#p39_2v3').hover(function()
{
$('#p39_v_3').addClass('res1')
}
,function()
{
$('#p39_v_3').removeClass('res1')
});

/*image-text*/
$('#p39_v_3').hover(function()
{
$('#p39_2v3').addClass('res2')
}
,function()
{
$('#p39_2v3').removeClass('res2')
});

/*text-image*/
$('#p39_2v4').hover(function()
{
$('#p39_v_4').addClass('res1')
}
,function()
{
$('#p39_v_4').removeClass('res1')
});

/*image-text*/
$('#p39_v_4').hover(function()
{
$('#p39_2v4').addClass('res2')
}
,function()
{
$('#p39_2v4').removeClass('res2')
});

/*text-image*/
$('#p39_2v5').hover(function()
{
$('#p39_v_5').addClass('res1')
}
,function()
{
$('#p39_v_5').removeClass('res1')
});

/*image-text*/
$('#p39_v_5').hover(function()
{
$('#p39_2v5').addClass('res2')
}
,function()
{
$('#p39_2v5').removeClass('res2')
});

/*text-image*/
$('#p39_2v6').hover(function()
{
$('#p39_v_6').addClass('res1')
}
,function()
{
$('#p39_v_6').removeClass('res1')
});

/*image-text*/
$('#p39_v_6').hover(function()
{
$('#p39_2v6').addClass('res2')
}
,function()
{
$('#p39_2v6').removeClass('res2')
});

/*text-image*/
$('#p39_2v7').hover(function()
{
$('#p39_v_7').addClass('res1')
}
,function()
{
$('#p39_v_7').removeClass('res1')
});

/*image-text*/
$('#p39_v_7').hover(function()
{
$('#p39_2v7').addClass('res2')
}
,function()
{
$('#p39_2v7').removeClass('res2')
});

/*text-image*/
$('#p39_2v8').hover(function()
{
$('#p39_v_8').addClass('res1')
}
,function()
{
$('#p39_v_8').removeClass('res1')
});

/*image-text*/
$('#p39_v_8').hover(function()
{
$('#p39_2v8').addClass('res2')
}
,function()
{
$('#p39_2v8').removeClass('res2')
});

/*text-image*/
$('#p39_2v9').hover(function()
{
$('#p39_v_9').addClass('res1')
}
,function()
{
$('#p39_v_9').removeClass('res1')
});

/*image-text*/
$('#p39_v_9').hover(function()
{
$('#p39_2v9').addClass('res2')
}
,function()
{
$('#p39_2v9').removeClass('res2')
});

/*text-image*/
$('#p39_2v10').hover(function()
{
$('#p39_v_10').addClass('res1')
}
,function()
{
$('#p39_v_10').removeClass('res1')
});

/*image-text*/
$('#p39_v_10').hover(function()
{
$('#p39_2v10').addClass('res2')
}
,function()
{
$('#p39_2v10').removeClass('res2')
});

/*text-image*/
$('#p39_2v11').hover(function()
{
$('#p39_v_11').addClass('res1')
}
,function()
{
$('#p39_v_11').removeClass('res1')
});

/*image-text*/
$('#p39_v_11').hover(function()
{
$('#p39_2v11').addClass('res2')
}
,function()
{
$('#p39_2v11').removeClass('res2')
});

/*text-image*/
$('#p39_2v12').hover(function()
{
$('#p39_v_12').addClass('res1')
}
,function()
{
$('#p39_v_12').removeClass('res1')
});

/*image-text*/
$('#p39_v_12').hover(function()
{
$('#p39_2v12').addClass('res2')
}
,function()
{
$('#p39_2v12').removeClass('res2')
});

/*text-image*/
$('#ma39_2').hover(function()
{
$('#p39_ma39_2').addClass('res1')
}
,function()
{
$('#p39_ma39_2').removeClass('res1')
});

/*image-text*/
$('#p39_ma39_2').hover(function()
{
$('#ma39_2').addClass('res2')
}
,function()
{
$('#ma39_2').removeClass('res2')
});

/*text-image*/
$('#p39_3v1').hover(function()
{
$('#p39_v1').addClass('res1')
}
,function()
{
$('#p39_v1').removeClass('res1')
});

/*image-text*/
$('#p39_v1').hover(function()
{
$('#p39_3v1').addClass('res2')
}
,function()
{
$('#p39_3v1').removeClass('res2')
});

/*text-image*/
$('#p39_3v2').hover(function()
{
$('#p39_v2').addClass('res1')
}
,function()
{
$('#p39_v2').removeClass('res1')
});

/*image-text*/
$('#p39_v2').hover(function()
{
$('#p39_3v2').addClass('res2')
}
,function()
{
$('#p39_3v2').removeClass('res2')
});

/*text-image*/
$('#p39_3v3').hover(function()
{
$('#p39_v3').addClass('res1')
}
,function()
{
$('#p39_v3').removeClass('res1')
});

/*image-text*/
$('#p39_v3').hover(function()
{
$('#p39_3v3').addClass('res2')
}
,function()
{
$('#p39_3v3').removeClass('res2')
});

/*text-image*/
$('#p39_3v4').hover(function()
{
$('#p39_v4').addClass('res1')
}
,function()
{
$('#p39_v4').removeClass('res1')
});

/*image-text*/
$('#p39_v4').hover(function()
{
$('#p39_3v4').addClass('res2')
}
,function()
{
$('#p39_3v4').removeClass('res2')
});


/*pagina40*/
/*text-image*/
$('#p40v5').hover(function()
{
$('#p40_v5').addClass('res1')
}
,function()
{
$('#p40_v5').removeClass('res1')
});

/*image-text*/
$('#p40_v5').hover(function()
{
$('#p40v5').addClass('res2')
}
,function()
{
$('#p40v5').removeClass('res2')
});

/*text-image*/
$('#p40v6').hover(function()
{
$('#p40_v6').addClass('res1')
}
,function()
{
$('#p40_v6').removeClass('res1')
});

/*image-text*/
$('#p40_v6').hover(function()
{
$('#p40v6').addClass('res2')
}
,function()
{
$('#p40v6').removeClass('res2')
});

/*text-image*/
$('#p40v7').hover(function()
{
$('#p40_v7').addClass('res1')
}
,function()
{
$('#p40_v7').removeClass('res1')
});

/*image-text*/
$('#p40_v7').hover(function()
{
$('#p40v7').addClass('res2')
}
,function()
{
$('#p40v7').removeClass('res2')
});

/*text-image*/
$('#p40v8').hover(function()
{
$('#p40_v8').addClass('res1')
}
,function()
{
$('#p40_v8').removeClass('res1')
});

/*image-text*/
$('#p40_v8').hover(function()
{
$('#p40v8').addClass('res2')
}
,function()
{
$('#p40v8').removeClass('res2')
});

/*text-image*/
$('#p40v9').hover(function()
{
$('#p40_v9').addClass('res1')
}
,function()
{
$('#p40_v9').removeClass('res1')
});

/*image-text*/
$('#p40_v9').hover(function()
{
$('#p40v9').addClass('res2')
}
,function()
{
$('#p40v9').removeClass('res2')
});

/*text-image*/
$('#p40v10').hover(function()
{
$('#p40_v10').addClass('res1')
}
,function()
{
$('#p40_v10').removeClass('res1')
});

/*image-text*/
$('#p40_v10').hover(function()
{
$('#p40v10').addClass('res2')
}
,function()
{
$('#p40v10').removeClass('res2')
});

/*text-image*/
$('#p40v11').hover(function()
{
$('#p40_v11').addClass('res1')
}
,function()
{
$('#p40_v11').removeClass('res1')
});

/*image-text*/
$('#p40_v11').hover(function()
{
$('#p40v11').addClass('res2')
}
,function()
{
$('#p40v11').removeClass('res2')
});

/*text-image*/
$('#p40v12').hover(function()
{
$('#p40_v12').addClass('res1')
}
,function()
{
$('#p40_v12').removeClass('res1')
});

/*image-text*/
$('#p40_v12').hover(function()
{
$('#p40v12').addClass('res2')
}
,function()
{
$('#p40v12').removeClass('res2')
});

/*text-image*/
$('#p40v13').hover(function()
{
$('#p40_v13').addClass('res1')
}
,function()
{
$('#p40_v13').removeClass('res1')
});

/*image-text*/
$('#p40_v13').hover(function()
{
$('#p40v13').addClass('res2')
}
,function()
{
$('#p40v13').removeClass('res2')
});

/*text-image*/
$('#p40v14').hover(function()
{
$('#p40_v14').addClass('res1')
}
,function()
{
$('#p40_v14').removeClass('res1')
});

/*image-text*/
$('#p40_v14').hover(function()
{
$('#p40v14').addClass('res2')
}
,function()
{
$('#p40v14').removeClass('res2')
});

/*text-image*/
$('#p40v15').hover(function()
{
$('#p40_v15').addClass('res1')
}
,function()
{
$('#p40_v15').removeClass('res1')
});

/*image-text*/
$('#p40_v15').hover(function()
{
$('#p40v15').addClass('res2')
}
,function()
{
$('#p40v15').removeClass('res2')
});

/*text-image*/
$('#p40v16').hover(function()
{
$('#p40_v16').addClass('res1')
}
,function()
{
$('#p40_v16').removeClass('res1')
});

/*image-text*/
$('#p40_v16').hover(function()
{
$('#p40v16').addClass('res2')
}
,function()
{
$('#p40v16').removeClass('res2')
});

/*text-image*/
$('#p40v17').hover(function()
{
$('#p40_v17').addClass('res1')
}
,function()
{
$('#p40_v17').removeClass('res1')
});

/*image-text*/
$('#p40_v17').hover(function()
{
$('#p40v17').addClass('res2')
}
,function()
{
$('#p40v17').removeClass('res2')
});

/*text-image*/
$('#p40v18').hover(function()
{
$('#p40_v18').addClass('res1')
}
,function()
{
$('#p40_v18').removeClass('res1')
});

/*image-text*/
$('#p40_v18').hover(function()
{
$('#p40v18').addClass('res2')
}
,function()
{
$('#p40v18').removeClass('res2')
});

/*text-image*/
$('#p40v19').hover(function()
{
$('#p40_v19').addClass('res1')
}
,function()
{
$('#p40_v19').removeClass('res1')
});

/*image-text*/
$('#p40_v19').hover(function()
{
$('#p40v19').addClass('res2')
}
,function()
{
$('#p40v19').removeClass('res2')
});

/*text-image*/
$('#p40v20').hover(function()
{
$('#p40_v20').addClass('res1')
}
,function()
{
$('#p40_v20').removeClass('res1')
});

/*image-text*/
$('#p40_v20').hover(function()
{
$('#p40v20').addClass('res2')
}
,function()
{
$('#p40v20').removeClass('res2')
});

/*text-image*/
$('#ma40').hover(function()
{
$('#p40_ma40').addClass('res1')
}
,function()
{
$('#p40_ma40').removeClass('res1')
});

/*image-text*/
$('#p40_ma40').hover(function()
{
$('#ma40').addClass('res2')
}
,function()
{
$('#ma40').removeClass('res2')
});

/*text-image*/
$('#p40v1').hover(function()
{
$('#p40_v1').addClass('res1')
}
,function()
{
$('#p40_v1').removeClass('res1')
});

/*image-text*/
$('#p40_v1').hover(function()
{
$('#p40v1').addClass('res2')
}
,function()
{
$('#p40v1').removeClass('res2')
});

/*text-image*/
$('#p40v2').hover(function()
{
$('#p40_v2').addClass('res1')
}
,function()
{
$('#p40_v2').removeClass('res1')
});

/*image-text*/
$('#p40_v2').hover(function()
{
$('#p40v2').addClass('res2')
}
,function()
{
$('#p40v2').removeClass('res2')
});

/*text-image*/
$('#p40v3').hover(function()
{
$('#p40_v3').addClass('res1')
}
,function()
{
$('#p40_v3').removeClass('res1')
});

/*image-text*/
$('#p40_v3').hover(function()
{
$('#p40v3').addClass('res2')
}
,function()
{
$('#p40v3').removeClass('res2')
});

/*text-image*/
$('#p40v4').hover(function()
{
$('#p40_v4').addClass('res1')
}
,function()
{
$('#p40_v4').removeClass('res1')
});

/*image-text*/
$('#p40_v4').hover(function()
{
$('#p40v4').addClass('res2')
}
,function()
{
$('#p40v4').removeClass('res2')
});

/*pagina41*/
/*text-image*/
$('#p41_1v5').hover(function()
{
$('#p41_v5').addClass('res1')
}
,function()
{
$('#p41_v5').removeClass('res1')
});

/*image-text*/
$('#p41_v5').hover(function()
{
$('#p41_1v5').addClass('res2')
}
,function()
{
$('#p41_1v5').removeClass('res2')
});

/*text-image*/
$('#p41_1v6').hover(function()
{
$('#p41_v6').addClass('res1')
}
,function()
{
$('#p41_v6').removeClass('res1')
});

/*image-text*/
$('#p41_v6').hover(function()
{
$('#p41_1v6').addClass('res2')
}
,function()
{
$('#p41_1v6').removeClass('res2')
});

/*text-image*/
$('#p41_1v7').hover(function()
{
$('#p41_v7').addClass('res1')
}
,function()
{
$('#p41_v7').removeClass('res1')
});

/*image-text*/
$('#p41_v7').hover(function()
{
$('#p41_1v7').addClass('res2')
}
,function()
{
$('#p41_1v7').removeClass('res2')
});

/*text-image*/
$('#p41_1v8').hover(function()
{
$('#p41_v8').addClass('res1')
}
,function()
{
$('#p41_v8').removeClass('res1')
});

/*image-text*/
$('#p41_v8').hover(function()
{
$('#p41_1v8').addClass('res2')
}
,function()
{
$('#p41_1v8').removeClass('res2')
});

/*text-image*/
$('#p41_1v9').hover(function()
{
$('#p41_v9').addClass('res1')
}
,function()
{
$('#p41_v9').removeClass('res1')
});

/*image-text*/
$('#p41_v9').hover(function()
{
$('#p41_1v9').addClass('res2')
}
,function()
{
$('#p41_1v9').removeClass('res2')
});

/*text-image*/
$('#p41_1v10').hover(function()
{
$('#p41_v10').addClass('res1')
}
,function()
{
$('#p41_v10').removeClass('res1')
});

/*image-text*/
$('#p41_v10').hover(function()
{
$('#p41_1v10').addClass('res2')
}
,function()
{
$('#p41_1v10').removeClass('res2')
});

/*text-image*/
$('#p41_1v11').hover(function()
{
$('#p41_v11').addClass('res1')
}
,function()
{
$('#p41_v11').removeClass('res1')
});

/*image-text*/
$('#p41_v11').hover(function()
{
$('#p41_1v11').addClass('res2')
}
,function()
{
$('#p41_1v11').removeClass('res2')
});

/*text-image*/
$('#p41_1v12').hover(function()
{
$('#p41_v12').addClass('res1')
}
,function()
{
$('#p41_v12').removeClass('res1')
});

/*image-text*/
$('#p41_v12').hover(function()
{
$('#p41_1v12').addClass('res2')
}
,function()
{
$('#p41_1v12').removeClass('res2')
});

/*text-image*/
$('#ma41_1').hover(function()
{
$('#p41_ma41_1').addClass('res1')
}
,function()
{
$('#p41_ma41_1').removeClass('res1')
});

/*image-text*/
$('#p41_ma41_1').hover(function()
{
$('#ma41_1').addClass('res2')
}
,function()
{
$('#ma41_1').removeClass('res2')
});

/*text-image*/
$('#p41_2v1').hover(function()
{
$('#p41_v_1').addClass('res1')
}
,function()
{
$('#p41_v_1').removeClass('res1')
});

/*image-text*/
$('#p41_v_1').hover(function()
{
$('#p41_2v1').addClass('res2')
}
,function()
{
$('#p41_2v1').removeClass('res2')
});

/*text-image*/
$('#p41_2v2').hover(function()
{
$('#p41_v_2').addClass('res1')
}
,function()
{
$('#p41_v_2').removeClass('res1')
});

/*image-text*/
$('#p41_v_2').hover(function()
{
$('#p41_2v2').addClass('res2')
}
,function()
{
$('#p41_2v2').removeClass('res2')
});

/*text-image*/
$('#p41_2v3').hover(function()
{
$('#p41_v_3').addClass('res1')
}
,function()
{
$('#p41_v_3').removeClass('res1')
});

/*image-text*/
$('#p41_v_3').hover(function()
{
$('#p41_2v3').addClass('res2')
}
,function()
{
$('#p41_2v3').removeClass('res2')
});

/*text-image*/
$('#p41_2v4').hover(function()
{
$('#p41_v_4').addClass('res1')
}
,function()
{
$('#p41_v_4').removeClass('res1')
});

/*image-text*/
$('#p41_v_4').hover(function()
{
$('#p41_2v4').addClass('res2')
}
,function()
{
$('#p41_2v4').removeClass('res2')
});

/*text-image*/
$('#p41_2v5').hover(function()
{
$('#p41_v_5').addClass('res1')
}
,function()
{
$('#p41_v_5').removeClass('res1')
});

/*image-text*/
$('#p41_v_5').hover(function()
{
$('#p41_2v5').addClass('res2')
}
,function()
{
$('#p41_2v5').removeClass('res2')
});

/*text-image*/
$('#p41_2v6').hover(function()
{
$('#p41_v_6').addClass('res1')
}
,function()
{
$('#p41_v_6').removeClass('res1')
});

/*image-text*/
$('#p41_v_6').hover(function()
{
$('#p41_2v6').addClass('res2')
}
,function()
{
$('#p41_2v6').removeClass('res2')
});

/*text-image*/
$('#p41_2v7').hover(function()
{
$('#p41_v_7').addClass('res1')
}
,function()
{
$('#p41_v_7').removeClass('res1')
});

/*image-text*/
$('#p41_v_7').hover(function()
{
$('#p41_2v7').addClass('res2')
}
,function()
{
$('#p41_2v7').removeClass('res2')
});

/*text-image*/
$('#p41_2v8').hover(function()
{
$('#p41_v_8').addClass('res1')
}
,function()
{
$('#p41_v_8').removeClass('res1')
});

/*image-text*/
$('#p41_v_8').hover(function()
{
$('#p41_2v8').addClass('res2')
}
,function()
{
$('#p41_2v8').removeClass('res2')
});

/*text-image*/
$('#p41_2v9').hover(function()
{
$('#p41_v_9').addClass('res1')
}
,function()
{
$('#p41_v_9').removeClass('res1')
});

/*image-text*/
$('#p41_v_9').hover(function()
{
$('#p41_2v9').addClass('res2')
}
,function()
{
$('#p41_2v9').removeClass('res2')
});

/*text-image*/
$('#p41_2v10').hover(function()
{
$('#p41_v_10').addClass('res1')
}
,function()
{
$('#p41_v_10').removeClass('res1')
});

/*image-text*/
$('#p41_v_10').hover(function()
{
$('#p41_2v10').addClass('res2')
}
,function()
{
$('#p41_2v10').removeClass('res2')
});

/*text-image*/
$('#p41_2v11').hover(function()
{
$('#p41_v_11').addClass('res1')
}
,function()
{
$('#p41_v_11').removeClass('res1')
});

/*image-text*/
$('#p41_v_11').hover(function()
{
$('#p41_2v11').addClass('res2')
}
,function()
{
$('#p41_2v11').removeClass('res2')
});

/*text-image*/
$('#p41_2v12').hover(function()
{
$('#p41_v_12').addClass('res1')
}
,function()
{
$('#p41_v_12').removeClass('res1')
});

/*image-text*/
$('#p41_v_12').hover(function()
{
$('#p41_2v12').addClass('res2')
}
,function()
{
$('#p41_2v12').removeClass('res2')
});

/*text-image*/
$('#ma41_2').hover(function()
{
$('#p41_ma41_2').addClass('res1')
}
,function()
{
$('#p41_ma41_2').removeClass('res1')
});

/*image-text*/
$('#p41_ma41_2').hover(function()
{
$('#ma41_2').addClass('res2')
}
,function()
{
$('#ma41_2').removeClass('res2')
});

/*text-image*/
$('#p41_3v1').hover(function()
{
$('#p41_v1').addClass('res1')
}
,function()
{
$('#p41_v1').removeClass('res1')
});

/*image-text*/
$('#p41_v1').hover(function()
{
$('#p41_3v1').addClass('res2')
}
,function()
{
$('#p41_3v1').removeClass('res2')
});

/*text-image*/
$('#p41_3v2').hover(function()
{
$('#p41_v2').addClass('res1')
}
,function()
{
$('#p41_v2').removeClass('res1')
});

/*image-text*/
$('#p41_v2').hover(function()
{
$('#p41_3v2').addClass('res2')
}
,function()
{
$('#p41_3v2').removeClass('res2')
});

/*text-image*/
$('#p41_3v3').hover(function()
{
$('#p41_v3').addClass('res1')
}
,function()
{
$('#p41_v3').removeClass('res1')
});

/*image-text*/
$('#p41_v3').hover(function()
{
$('#p41_3v3').addClass('res2')
}
,function()
{
$('#p41_3v3').removeClass('res2')
});

/*text-image*/
$('#p41_3v4').hover(function()
{
$('#p41_v4').addClass('res1')
}
,function()
{
$('#p41_v4').removeClass('res1')
});

/*image-text*/
$('#p41_v4').hover(function()
{
$('#p41_3v4').addClass('res2')
}
,function()
{
$('#p41_3v4').removeClass('res2')
});


/*pagina42*/
/*text-image*/
$('#p42_1v5').hover(function()
{
$('#p42_v5').addClass('res1')
}
,function()
{
$('#p42_v5').removeClass('res1')
});

/*image-text*/
$('#p42_v5').hover(function()
{
$('#p42_1v5').addClass('res2')
}
,function()
{
$('#p42_1v5').removeClass('res2')
});

/*text-image*/
$('#p42_1v6').hover(function()
{
$('#p42_v6').addClass('res1')
}
,function()
{
$('#p42_v6').removeClass('res1')
});

/*image-text*/
$('#p42_v6').hover(function()
{
$('#p42_1v6').addClass('res2')
}
,function()
{
$('#p42_1v6').removeClass('res2')
});

/*text-image*/
$('#p42_1v7').hover(function()
{
$('#p42_v7').addClass('res1')
}
,function()
{
$('#p42_v7').removeClass('res1')
});

/*image-text*/
$('#p42_v7').hover(function()
{
$('#p42_1v7').addClass('res2')
}
,function()
{
$('#p42_1v7').removeClass('res2')
});

/*text-image*/
$('#p42_1v8').hover(function()
{
$('#p42_v8').addClass('res1')
}
,function()
{
$('#p42_v8').removeClass('res1')
});

/*image-text*/
$('#p42_v8').hover(function()
{
$('#p42_1v8').addClass('res2')
}
,function()
{
$('#p42_1v8').removeClass('res2')
});

/*text-image*/
$('#p42_1v9').hover(function()
{
$('#p42_v9').addClass('res1')
}
,function()
{
$('#p42_v9').removeClass('res1')
});

/*image-text*/
$('#p42_v9').hover(function()
{
$('#p42_1v9').addClass('res2')
}
,function()
{
$('#p42_1v9').removeClass('res2')
});

/*text-image*/
$('#p42_1v10').hover(function()
{
$('#p42_v10').addClass('res1')
}
,function()
{
$('#p42_v10').removeClass('res1')
});

/*image-text*/
$('#p42_v10').hover(function()
{
$('#p42_1v10').addClass('res2')
}
,function()
{
$('#p42_1v10').removeClass('res2')
});

/*text-image*/
$('#p42_1v11').hover(function()
{
$('#p42_v11').addClass('res1')
}
,function()
{
$('#p42_v11').removeClass('res1')
});

/*image-text*/
$('#p42_v11').hover(function()
{
$('#p42_1v11').addClass('res2')
}
,function()
{
$('#p42_1v11').removeClass('res2')
});

/*text-image*/
$('#p42_1v12').hover(function()
{
$('#p42_v12').addClass('res1')
}
,function()
{
$('#p42_v12').removeClass('res1')
});

/*image-text*/
$('#p42_v12').hover(function()
{
$('#p42_1v12').addClass('res2')
}
,function()
{
$('#p42_1v12').removeClass('res2')
});

/*text-image*/
$('#p42_1v13').hover(function()
{
$('#p42_v13').addClass('res1')
}
,function()
{
$('#p42_v13').removeClass('res1')
});

/*image-text*/
$('#p42_v13').hover(function()
{
$('#p42_1v13').addClass('res2')
}
,function()
{
$('#p42_1v13').removeClass('res2')
});

/*text-image*/
$('#p42_1v14').hover(function()
{
$('#p42_v14').addClass('res1')
}
,function()
{
$('#p42_v14').removeClass('res1')
});

/*image-text*/
$('#p42_v14').hover(function()
{
$('#p42_1v14').addClass('res2')
}
,function()
{
$('#p42_1v14').removeClass('res2')
});

/*text-image*/
$('#p42_1v15').hover(function()
{
$('#p42_v15').addClass('res1')
}
,function()
{
$('#p42_v15').removeClass('res1')
});

/*image-text*/
$('#p42_v15').hover(function()
{
$('#p42_1v15').addClass('res2')
}
,function()
{
$('#p42_1v15').removeClass('res2')
});

/*text-image*/
$('#p42_1v16').hover(function()
{
$('#p42_v16').addClass('res1')
}
,function()
{
$('#p42_v16').removeClass('res1')
});

/*image-text*/
$('#p42_v16').hover(function()
{
$('#p42_1v16').addClass('res2')
}
,function()
{
$('#p42_1v16').removeClass('res2')
});

/*text-image*/
$('#p42_1v17').hover(function()
{
$('#p42_v17').addClass('res1')
}
,function()
{
$('#p42_v17').removeClass('res1')
});

/*image-text*/
$('#p42_v17').hover(function()
{
$('#p42_1v17').addClass('res2')
}
,function()
{
$('#p42_1v17').removeClass('res2')
});

/*text-image*/
$('#p42_1v18').hover(function()
{
$('#p42_v18').addClass('res1')
}
,function()
{
$('#p42_v18').removeClass('res1')
});

/*image-text*/
$('#p42_v18').hover(function()
{
$('#p42_1v18').addClass('res2')
}
,function()
{
$('#p42_1v18').removeClass('res2')
});

/*text-image*/
$('#p42_1v19').hover(function()
{
$('#p42_v19').addClass('res1')
}
,function()
{
$('#p42_v19').removeClass('res1')
});

/*image-text*/
$('#p42_v19').hover(function()
{
$('#p42_1v19').addClass('res2')
}
,function()
{
$('#p42_1v19').removeClass('res2')
});

/*text-image*/
$('#p42_1v20').hover(function()
{
$('#p42_v20').addClass('res1')
}
,function()
{
$('#p42_v20').removeClass('res1')
});

/*image-text*/
$('#p42_v20').hover(function()
{
$('#p42_1v20').addClass('res2')
}
,function()
{
$('#p42_1v20').removeClass('res2')
});

/*text-image*/
$('#ma42').hover(function()
{
$('#p42_ma42').addClass('res1')
}
,function()
{
$('#p42_ma42').removeClass('res1')
});

/*image-text*/
$('#p42_ma42').hover(function()
{
$('#ma42').addClass('res2')
}
,function()
{
$('#ma42').removeClass('res2')
});

/*text-image*/
$('#p42_2v1').hover(function()
{
$('#p42_v1').addClass('res1')
}
,function()
{
$('#p42_v1').removeClass('res1')
});

/*image-text*/
$('#p42_v1').hover(function()
{
$('#p42_2v1').addClass('res2')
}
,function()
{
$('#p42_2v1').removeClass('res2')
});

/*text-image*/
$('#p42_2v2').hover(function()
{
$('#p42_v2').addClass('res1')
}
,function()
{
$('#p42_v2').removeClass('res1')
});

/*image-text*/
$('#p42_v2').hover(function()
{
$('#p42_2v2').addClass('res2')
}
,function()
{
$('#p42_2v2').removeClass('res2')
});

/*text-image*/
$('#p42_2v3').hover(function()
{
$('#p42_v3').addClass('res1')
}
,function()
{
$('#p42_v3').removeClass('res1')
});

/*image-text*/
$('#p42_v3').hover(function()
{
$('#p42_2v3').addClass('res2')
}
,function()
{
$('#p42_2v3').removeClass('res2')
});

/*text-image*/
$('#p42_2v4').hover(function()
{
$('#p42_v4').addClass('res1')
}
,function()
{
$('#p42_v4').removeClass('res1')
});

/*image-text*/
$('#p42_v4').hover(function()
{
$('#p42_2v4').addClass('res2')
}
,function()
{
$('#p42_2v4').removeClass('res2')
});

/*text-image*/
$('#p42_2v5').hover(function()
{
$('#p42_v_5').addClass('res1')
}
,function()
{
$('#p42_v_5').removeClass('res1')
});

/*image-text*/
$('#p42_v_5').hover(function()
{
$('#p42_2v5').addClass('res2')
}
,function()
{
$('#p42_2v5').removeClass('res2')
});

/*text-image*/
$('#p42_2v6').hover(function()
{
$('#p42_v_6').addClass('res1')
}
,function()
{
$('#p42_v_6').removeClass('res1')
});

/*image-text*/
$('#p42_v_6').hover(function()
{
$('#p42_2v6').addClass('res2')
}
,function()
{
$('#p42_2v6').removeClass('res2')
});

/*text-image*/
$('#p42_2v7').hover(function()
{
$('#p42_v_7').addClass('res1')
}
,function()
{
$('#p42_v_7').removeClass('res1')
});

/*image-text*/
$('#p42_v4').hover(function()
{
$('#p42_2v7').addClass('res2')
}
,function()
{
$('#p42_2v7').removeClass('res2')
});

/*text-image*/
$('#p42_2v8').hover(function()
{
$('#p42_v_8').addClass('res1')
}
,function()
{
$('#p42_v_8').removeClass('res1')
});

/*image-text*/
$('#p42_v_8').hover(function()
{
$('#p42_2v8').addClass('res2')
}
,function()
{
$('#p42_2v8').removeClass('res2')
});


/*pagina43*/
/*text-image*/
$('#p43_1v9').hover(function()
{
$('#p43_v9').addClass('res1')
}
,function()
{
$('#p43_v9').removeClass('res1')
});

/*image-text*/
$('#p43_v9').hover(function()
{
$('#p43_1v9').addClass('res2')
}
,function()
{
$('#p43_1v9').removeClass('res2')
});

/*text-image*/
$('#p43_1v10').hover(function()
{
$('#p43_v10').addClass('res1')
}
,function()
{
$('#p43_v10').removeClass('res1')
});

/*image-text*/
$('#p43_v10').hover(function()
{
$('#p43_1v10').addClass('res2')
}
,function()
{
$('#p43_1v10').removeClass('res2')
});

/*text-image*/
$('#p43_1v11').hover(function()
{
$('#p43_v11').addClass('res1')
}
,function()
{
$('#p43_v11').removeClass('res1')
});

/*image-text*/
$('#p43_v11').hover(function()
{
$('#p43_1v11').addClass('res2')
}
,function()
{
$('#p43_1v11').removeClass('res2')
});

/*text-image*/
$('#p43_1v12').hover(function()
{
$('#p43_v12').addClass('res1')
}
,function()
{
$('#p43_v12').removeClass('res1')
});

/*image-text*/
$('#p43_v12').hover(function()
{
$('#p43_1v12').addClass('res2')
}
,function()
{
$('#p43_1v12').removeClass('res2')
});

/*text-image*/
$('#ma43').hover(function()
{
$('#p43_ma43').addClass('res1')
}
,function()
{
$('#p43_ma43').removeClass('res1')
});

/*image-text*/
$('#p43_ma43').hover(function()
{
$('#ma43').addClass('res2')
}
,function()
{
$('#ma43').removeClass('res2')
});

/*text-image*/
$('#p43_2v1').hover(function()
{
$('#p43_v1').addClass('res1')
}
,function()
{
$('#p43_v1').removeClass('res1')
});

/*image-text*/
$('#p43_v1').hover(function()
{
$('#p43_2v1').addClass('res2')
}
,function()
{
$('#p43_2v1').removeClass('res2')
});

/*text-image*/
$('#p43_2v2').hover(function()
{
$('#p43_v2').addClass('res1')
}
,function()
{
$('#p43_v2').removeClass('res1')
});

/*image-text*/
$('#p43_v2').hover(function()
{
$('#p43_2v2').addClass('res2')
}
,function()
{
$('#p43_2v2').removeClass('res2')
});

/*text-image*/
$('#p43_2v3').hover(function()
{
$('#p43_v3').addClass('res1')
}
,function()
{
$('#p43_v3').removeClass('res1')
});

/*image-text*/
$('#p43_v3').hover(function()
{
$('#p43_2v3').addClass('res2')
}
,function()
{
$('#p43_2v3').removeClass('res2')
});

/*text-image*/
$('#p43_2v4').hover(function()
{
$('#p43_v4').addClass('res1')
}
,function()
{
$('#p43_v4').removeClass('res1')
});

/*image-text*/
$('#p43_v4').hover(function()
{
$('#p43_2v4').addClass('res2')
}
,function()
{
$('#p43_2v4').removeClass('res2')
});

/*text-image*/
$('#p43_2v5').hover(function()
{
$('#p43_v5').addClass('res1')
}
,function()
{
$('#p43_v5').removeClass('res1')
});

/*image-text*/
$('#p43_v5').hover(function()
{
$('#p43_2v5').addClass('res2')
}
,function()
{
$('#p43_2v5').removeClass('res2')
});

/*text-image*/
$('#p43_2v6').hover(function()
{
$('#p43_v6').addClass('res1')
}
,function()
{
$('#p43_v6').removeClass('res1')
});

/*image-text*/
$('#p43_v6').hover(function()
{
$('#p43_2v6').addClass('res2')
}
,function()
{
$('#p43_2v6').removeClass('res2')
});

/*text-image*/
$('#p43_2v7').hover(function()
{
$('#p43_v7').addClass('res1')
}
,function()
{
$('#p43_v7').removeClass('res1')
});

/*image-text*/
$('#p43_v7').hover(function()
{
$('#p43_2v7').addClass('res2')
}
,function()
{
$('#p43_2v7').removeClass('res2')
});

/*text-image*/
$('#p43_2v8').hover(function()
{
$('#p43_v8').addClass('res1')
}
,function()
{
$('#p43_v8').removeClass('res1')
});

/*image-text*/
$('#p43_v8').hover(function()
{
$('#p43_2v8').addClass('res2')
}
,function()
{
$('#p43_2v8').removeClass('res2')
});

/*text-image*/
$('#p43_2v9').hover(function()
{
$('#p43_v_9').addClass('res1')
}
,function()
{
$('#p43_v_9').removeClass('res1')
});

/*image-text*/
$('#p43_v_9').hover(function()
{
$('#p43_2v9').addClass('res2')
}
,function()
{
$('#p43_2v9').removeClass('res2')
});

/*text-image*/
$('#p43_2v10').hover(function()
{
$('#p43_v_10').addClass('res1')
}
,function()
{
$('#p43_v_10').removeClass('res1')
});

/*image-text*/
$('#p43_v_10').hover(function()
{
$('#p43_2v10').addClass('res2')
}
,function()
{
$('#p43_2v10').removeClass('res2')
});

/*text-image*/
$('#p43_2v11').hover(function()
{
$('#p43_v_11').addClass('res1')
}
,function()
{
$('#p43_v_11').removeClass('res1')
});

/*image-text*/
$('#p43_v_11').hover(function()
{
$('#p43_2v11').addClass('res2')
}
,function()
{
$('#p43_2v11').removeClass('res2')
});

/*text-image*/
$('#p43_2v12').hover(function()
{
$('#p43_v_12').addClass('res1')
}
,function()
{
$('#p43_v_12').removeClass('res1')
});

/*image-text*/
$('#p43_v_12').hover(function()
{
$('#p43_2v12').addClass('res2')
}
,function()
{
$('#p43_2v12').removeClass('res2')
});

/*text-image*/
$('#op43').hover(function()
{
$('#p43_op').addClass('res1')
}
,function()
{
$('#p43_op').removeClass('res1')
});

/*image-text*/
$('#p43_op').hover(function()
{
$('#op43').addClass('ophov')
}
,function()
{
$('#op43').removeClass('ophov')
});

/*text-image*/
$('#he43').hover(function()
{
$('#p43_he').addClass('res1')
}
,function()
{
$('#p43_he').removeClass('res1')
});

/*image-text*/
$('#p43_he').hover(function()
{
$('#he43').addClass('res2')
}
,function()
{
$('#he43').removeClass('res2')
});


/*pagina44*/
/*text-image*/
$('#p44v1').hover(function()
{
$('#p44_v1').addClass('res1')
}
,function()
{
$('#p44_v1').removeClass('res1')
});

/*image-text*/
$('#p44_v1').hover(function()
{
$('#p44v1').addClass('res2')
}
,function()
{
$('#p44v1').removeClass('res2')
});

/*text-image*/
$('#p44v2').hover(function()
{
$('#p44_v2').addClass('res1')
}
,function()
{
$('#p44_v2').removeClass('res1')
});

/*image-text*/
$('#p44_v2').hover(function()
{
$('#p44v2').addClass('res2')
}
,function()
{
$('#p44v2').removeClass('res2')
});

/*text-image*/
$('#p44v3').hover(function()
{
$('#p44_v3').addClass('res1')
}
,function()
{
$('#p44_v3').removeClass('res1')
});

/*image-text*/
$('#p44_v3').hover(function()
{
$('#p44v3').addClass('res2')
}
,function()
{
$('#p44v3').removeClass('res2')
});

/*text-image*/
$('#p44v4').hover(function()
{
$('#p44_v4').addClass('res1')
}
,function()
{
$('#p44_v4').removeClass('res1')
});

/*image-text*/
$('#p44_v4').hover(function()
{
$('#p44v4').addClass('res2')
}
,function()
{
$('#p44v4').removeClass('res2')
});

/*text-image*/
$('#p44v5').hover(function()
{
$('#p44_v5').addClass('res1')
}
,function()
{
$('#p44_v5').removeClass('res1')
});

/*image-text*/
$('#p44_v5').hover(function()
{
$('#p44v5').addClass('res2')
}
,function()
{
$('#p44v5').removeClass('res2')
});

/*text-image*/
$('#p44v6').hover(function()
{
$('#p44_v6').addClass('res1')
}
,function()
{
$('#p44_v6').removeClass('res1')
});

/*image-text*/
$('#p44_v6').hover(function()
{
$('#p44v6').addClass('res2')
}
,function()
{
$('#p44v6').removeClass('res2')
});

/*text-image*/
$('#p44v7').hover(function()
{
$('#p44_v7').addClass('res1')
}
,function()
{
$('#p44_v7').removeClass('res1')
});

/*image-text*/
$('#p44_v7').hover(function()
{
$('#p44v7').addClass('res2')
}
,function()
{
$('#p44v7').removeClass('res2')
});

/*text-image*/
$('#p44v8').hover(function()
{
$('#p44_v8').addClass('res1')
}
,function()
{
$('#p44_v8').removeClass('res1')
});

/*image-text*/
$('#p44_v8').hover(function()
{
$('#p44v8').addClass('res2')
}
,function()
{
$('#p44v8').removeClass('res2')
});

/*text-image*/
$('#p44v9').hover(function()
{
$('#p44_v9').addClass('res1')
}
,function()
{
$('#p44_v9').removeClass('res1')
});

/*image-text*/
$('#p44_v9').hover(function()
{
$('#p44v9').addClass('res2')
}
,function()
{
$('#p44v9').removeClass('res2')
});

/*text-image*/
$('#p44v10').hover(function()
{
$('#p44_v10').addClass('res1')
}
,function()
{
$('#p44_v10').removeClass('res1')
});

/*image-text*/
$('#p44_v10').hover(function()
{
$('#p44v10').addClass('res2')
}
,function()
{
$('#p44v10').removeClass('res2')
});

/*text-image*/
$('#ma44').hover(function()
{
$('#p44_ma44').addClass('res1')
}
,function()
{
$('#p44_ma44').removeClass('res1')
});

/*image-text*/
$('#p44_ma44').hover(function()
{
$('#ma44').addClass('res2')
}
,function()
{
$('#ma44').removeClass('res2')
});

/*text-image*/
$('#p44v11').hover(function()
{
$('#p44_v11').addClass('res1')
}
,function()
{
$('#p44_v11').removeClass('res1')
});

/*image-text*/
$('#p44_v11').hover(function()
{
$('#p44v11').addClass('res2')
}
,function()
{
$('#p44v11').removeClass('res2')
});

/*text-image*/
$('#p44v12').hover(function()
{
$('#p44_v12').addClass('res1')
}
,function()
{
$('#p44_v12').removeClass('res1')
});

/*image-text*/
$('#p44_v12').hover(function()
{
$('#p44v12').addClass('res2')
}
,function()
{
$('#p44v12').removeClass('res2')
});

/*text-image*/
$('#p44v13').hover(function()
{
$('#p44_v13').addClass('res1')
}
,function()
{
$('#p44_v13').removeClass('res1')
});

/*image-text*/
$('#p44_v13').hover(function()
{
$('#p44v13').addClass('res2')
}
,function()
{
$('#p44v13').removeClass('res2')
});

/*text-image*/
$('#p44v14').hover(function()
{
$('#p44_v14').addClass('res1')
}
,function()
{
$('#p44_v14').removeClass('res1')
});

/*image-text*/
$('#p44_v14').hover(function()
{
$('#p44v14').addClass('res2')
}
,function()
{
$('#p44v14').removeClass('res2')
});

/*text-image*/
$('#p44v15').hover(function()
{
$('#p44_v15').addClass('res1')
}
,function()
{
$('#p44_v15').removeClass('res1')
});

/*image-text*/
$('#p44_v15').hover(function()
{
$('#p44v15').addClass('res2')
}
,function()
{
$('#p44v15').removeClass('res2')
});

/*text-image*/
$('#p44v16').hover(function()
{
$('#p44_v16').addClass('res1')
}
,function()
{
$('#p44_v16').removeClass('res1')
});

/*image-text*/
$('#p44_v16').hover(function()
{
$('#p44v16').addClass('res2')
}
,function()
{
$('#p44v16').removeClass('res2')
});

/*text-image*/
$('#p44v17').hover(function()
{
$('#p44_v17').addClass('res1')
}
,function()
{
$('#p44_v17').removeClass('res1')
});

/*image-text*/
$('#p44_v17').hover(function()
{
$('#p44v17').addClass('res2')
}
,function()
{
$('#p44v17').removeClass('res2')
});

/*text-image*/
$('#p44v18').hover(function()
{
$('#p44_v18').addClass('res1')
}
,function()
{
$('#p44_v18').removeClass('res1')
});

/*image-text*/
$('#p44_v18').hover(function()
{
$('#p44v18').addClass('res2')
}
,function()
{
$('#p44v18').removeClass('res2')
});

/*text-image*/
$('#p44v19').hover(function()
{
$('#p44_v19').addClass('res1')
}
,function()
{
$('#p44_v19').removeClass('res1')
});

/*image-text*/
$('#p44_v19').hover(function()
{
$('#p44v19').addClass('res2')
}
,function()
{
$('#p44v19').removeClass('res2')
});

/*text-image*/
$('#p44v20').hover(function()
{
$('#p44_v20').addClass('res1')
}
,function()
{
$('#p44_v20').removeClass('res1')
});

/*image-text*/
$('#p44_v20').hover(function()
{
$('#p44v20').addClass('res2')
}
,function()
{
$('#p44v20').removeClass('res2')
});

/*text-image*/
$('#p44v21').hover(function()
{
$('#p44_v21').addClass('res1')
}
,function()
{
$('#p44_v21').removeClass('res1')
});

/*image-text*/
$('#p44_v21').hover(function()
{
$('#p44v21').addClass('res2')
}
,function()
{
$('#p44v21').removeClass('res2')
});

/*text-image*/
$('#p44v22').hover(function()
{
$('#p44_v22').addClass('res1')
}
,function()
{
$('#p44_v22').removeClass('res1')
});

/*image-text*/
$('#p44_v22').hover(function()
{
$('#p44v22').addClass('res2')
}
,function()
{
$('#p44v22').removeClass('res2')
});

/*text-image*/
$('#note44').hover(function()
{
$('#p44_nota').addClass('res1')
}
,function()
{
$('#p44_nota').removeClass('res1')
});

/*image-text*/
$('#p44_nota').hover(function()
{
$('#note44').addClass('res2')
}
,function()
{
$('#note44').removeClass('res2')
});


});
