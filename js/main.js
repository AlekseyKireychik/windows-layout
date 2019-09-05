$( document ).ready(function() {

	$(document).on("keypress", ".validate-numeric", function(event) {
		return isNumber(event);
	});

	$('#form-btn').on("click", function() {
		if ($('#tel').val() != "") {
			alert("Сообщение отправлено!");
		}	
	});
	
	$(document).ready(function(){
		$(".nav-tabs a").click(function(){
			$(this).tab('show');
		});
	});
});

function isNumber(e){
    var unicode=e.charCode? e.charCode : e.keyCode;
    if (unicode!=8&&unicode!=9){
        if (unicode<48||unicode>57) 
            return false 
    }
}
