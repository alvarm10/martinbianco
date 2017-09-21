
$("input").prop('disabled', true);
$("button").prop('disabled', true);
$("select").prop('disabled', true);
$(".close").prop('disabled', false);
$(".btn-secundario").prop('disabled', false);

	/* BLOQUE 1 - DATOS DE CONTACTO */

$("#clienteExterno").prop('disabled', false);
$("#clienteInterno").prop('disabled', false);

$("#clienteExterno").click(function() {
    $("input").prop('disabled', false);
    $("#bu").prop('disabled', true);
});

$("#clienteInterno").click(function() {
    $("input").prop('disabled', false);
});

	/* BLOQUE 2 - ESTRUCTURA DEL CURSO */

$("#organizacionModulos").click(function(){
	$("#btnOrganizarMod").show();
	$("#btnOrganizarUd").hide();
	$("#btnOrganizarMod").prop('disabled', false);
});

$("#organizacionUnidades").click(function(){
	$("#btnOrganizarMod").hide();
	$("#btnOrganizarUd").show();
	$("#btnOrganizarUd").prop('disabled', false);
});