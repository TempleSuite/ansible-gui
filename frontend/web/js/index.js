'use strict';

$('#js-shell-exec').off('click');
$('#js-shell-exec').on('click', function (e) {
	var url = $(this).attr('href');
	e.preventDefault();
	$.ajax({
		type: 'POST',
		cache: false,
		url: url,
		data: {
			"cmd": "ping -c 10 google.ca"
		},
		success: function success(data) {
			$('#js-content').html(data);
		},
		error: function error(err) {}
	});
});