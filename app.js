$('input').css('background',function(){
	return $(this).data('color');
});

$('input').on('click',function(){
	var tkt = $(this).data('color')
	if (checked()){	
		$('.main').css("color", tkt);

	}

	else{$('body').css('background-color',tkt)
}

});
function checked(){
	return $('#modify-texte').is(':checked');

}


checked();
