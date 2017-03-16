'use strict';

//*******************************//
// **** j.ajax load modal *******//
// ******************************//

$('[data-toggle="modal"]').on('click', function(e){

	var target = e.target;
	var numb = target.attributes['data-target'].value;

	$.ajax({
		url: '../dataLab/lab' + numb + '.html',
		success: function(div){
			$('footer').after(div);
			target.attributes['data-active'].value = 'true';
			$('body').css('overflow', 'hidden');

			$('.modal.fade').on('click', function(ev){
				$('body').css('overflow', 'auto');
				this.remove();
			})
		},
		error: function(){
			alert('error');
		}

	})
})

