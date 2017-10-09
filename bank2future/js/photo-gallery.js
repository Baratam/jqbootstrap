$(document).ready(function(){        
	$('.photomemoire li img').on('click',function(){
		var src = $(this).attr('src');
		var img = '<img src="' + src + '" class="img-responsive"/>';
		
		//start of new code new code
		var index = $(this).parent('li').index();   
		
		var html = '';
		html += '<div style="height:45px;clear:both;display:block;">';
		html += '<a class="controls next" href="'+ (index+2) + '">Next &raquo;</a>';
		html += '<a class="controls previous" href="' + (index) + '">&laquo; Prev</a>';
		html += '</div>';
		html += img;                
		
		
		$('#photomemoire').modal();
		$('#photomemoire').on('shown.bs.modal', function(){
			$('#photomemoire .modal-body').html(html);
			//new code
			$('a.controls').trigger('click');
		})
		$('#photomemoire').on('hidden.bs.modal', function(){
			$('#photomemoire .modal-body').html('');
		});
   });
   
   
   $('.photomemoire-aug li img').on('click',function(){
		var src = $(this).attr('src');
		var img = '<img src="' + src + '" class="img-responsive"/>';
		
		//start of new code new code
		var index = $(this).parent('li').index();   
		
		var html = '';
		html += '<div style="height:45px;clear:both;display:block;">';
		html += '<a class="controls next" href="'+ (index+2) + '">Next &raquo;</a>';
		html += '<a class="controls previous" href="' + (index) + '">&laquo; Prev</a>';
		html += '</div>';
		html += img;                
		
		
		$('#photomemoire-aug').modal();
		$('#photomemoire-aug').on('shown.bs.modal', function(){
			$('#photomemoire-aug .modal-body').html(html);
			//new code
			$('a.controls').trigger('click');
		})
		$('#photomemoire-aug').on('hidden.bs.modal', function(){
			$('#photomemoire-aug .modal-body').html('');
		});
   });
})
        
         
$(document).on('click', '#photomemoire a.controls', function(){
	var index = $(this).attr('href');
	var src = $('ul.photomemoire li:nth-child('+ index +') img').attr('src');             
	
	$('#photomemoire .modal-body img').attr('src', src);
	$('#photomemoire .modal-header a').attr('href', src);
	var newPrevIndex = parseInt(index) - 1; 
	var newNextIndex = parseInt(newPrevIndex) + 2; 
	
	if($(this).hasClass('previous')){               
		$(this).attr('href', newPrevIndex); 
		$('a.next').attr('href', newNextIndex);
	}else{
		$(this).attr('href', newNextIndex); 
		$('a.previous').attr('href', newPrevIndex);
	}
	
	var total = $('ul.photomemoire li').length + 1; 
	//hide next button
	if(total === newNextIndex){
		$('a.next').hide();
	}else{
		$('a.next').show()
	}            
	//hide previous button
	if(newPrevIndex === 0){
		$('a.previous').hide();
	}else{
		$('a.previous').show()
	}
	
	
	return false;
});




$(document).on('click', '#photomemoire-aug a.controls', function(){
	var index = $(this).attr('href');
	var src = $('ul.photomemoire-aug li:nth-child('+ index +') img').attr('src');             
	
	$('#photomemoire-aug .modal-body img').attr('src', src);
	$('#photomemoire-aug .modal-header a').attr('href', src);
	var newPrevIndex = parseInt(index) - 1; 
	var newNextIndex = parseInt(newPrevIndex) + 2; 
	
	if($(this).hasClass('previous')){               
		$(this).attr('href', newPrevIndex); 
		$('a.next').attr('href', newNextIndex);
	}else{
		$(this).attr('href', newNextIndex); 
		$('a.previous').attr('href', newPrevIndex);
	}
	
	var total = $('ul.photomemoire-aug li').length + 1; 
	//hide next button
	if(total === newNextIndex){
		$('a.next').hide();
	}else{
		$('a.next').show()
	}            
	//hide previous button
	if(newPrevIndex === 0){
		$('a.previous').hide();
	}else{
		$('a.previous').show()
	}
	
	
	return false;
});