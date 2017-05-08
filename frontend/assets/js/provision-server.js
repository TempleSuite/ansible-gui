$('#js-shell-exec').off('click');
$('#js-shell-exec').on('click', function(e) {
	const url = $(this).attr('href');
	e.preventDefault();
	$.ajax({
		type: 'POST',
		cache: false,
		url: url,
		data: { 
			"cmd" : "ping -c 10 google.ca" 
		},
		success: data => {
			$('#js-content').html(data);

		},
		error: err => {
		}
	});
});