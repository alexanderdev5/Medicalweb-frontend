var $required = $('.required'),
	$height = $('#bmiHeight'),
	$weight = $('#bmiWeight'),
	$error = $('#bmiError'),
	$form = $('#bmiForm'),
	mode;
$('input:text', $form).on('input', function () {
	this.setCustomValidity('');
	$('#bmiResult').fadeOut();
})
$('input[name="units"]', $form).on('change', function () {
	$('input:text').val('').trigger('input');
	if ($(this).is(':checked')) {
		mode = $(this).val();
		switch ($(this).val()) {
			case 'metric':
				$height.next('span').html('cm');
				$height.attr('pattern', '[0-9]+(?:\.[0-9]*)?');
				$weight.next('span').html('kg');
				break;
			case 'us-imperial':
			case 'uk-imperial':
				$height.next('span').html('ft&nbsp;\'&nbsp;in&nbsp;\"&nbsp;(e.g.&nbsp;5\'8\")');
				$height.attr('pattern', '([0-9]+)\'(?:([0-9.]+)")?');
				if (mode === 'us-imperial') {
					$weight.next('span').html('lbs');
				} else {
					$weight.next('span').html('st');
				}
				break;
		}
	}
}).change();
$('#bmiCalculate').on('click', function (e) {
	e.preventDefault();
	$required.each(function () {
		if (!$(this).val()) {
			$(this).prop('required', true);
		}
	});
	var height = $height.val();
	var weight = parseFloat($weight.val());
	if (height <= 0) {
		$height[0].setCustomValidity('Number must be positive');
	}
	if (weight <= 0) {
		$weight[0].setCustomValidity('Number must be positive');
	}
	if ($height.is(':invalid') || $weight.is(':invalid')) {
		$error.html('Invalid input!');
		return;
	} else {
  $error.html('');
  }
	var multiplier;
	switch (mode) {
		case 'metric':
			height = parseFloat(height) / 100;
			multiplier = 1;
			break;
		case 'us-imperial':
			var match = new RegExp($height.attr('pattern')).exec(height);
			height = parseInt(match[1]) * 12;
			if (match[2] != null) {
				height += parseFloat(match[2]);
			}
			if (mode === 'us-imperial') {
				multiplier = 703;
			} else {
				multiplier = 703 * 14;
			}
			break;
	}
	var bmi = weight * multiplier / height ** 2;
	if (bmi <= 0 || bmi === Infinity || isNaN(bmi)) {
		$error.html('Something went wrong (BMI is ' + bmi + '). Check the input.');
		return;
	}
	if (bmi === Infinity)
		var category,
			bmi_class;
	if (bmi < 18.5) {
		category = 'Underweight';
		bmi_class = 1;
	} else if (bmi < 25.0) {
		category = 'Normal';
		bmi_class = 2;
	} else if (bmi < 30.0) {
		category = 'Overweight';
		bmi_class = 3;
	} else if (bmi < 35.0) {
		category = 'Obese Class I';
		bmi_class = 4;
	} else if (bmi < 40.0) {
		category = 'Obese Class II';
		bmi_class = 4;
	} else {
		category = 'Obese Class III';
		bmi_class = 4;
	}
	$('#bmi').text(Math.round(bmi * 100) / 100);
	$('#bmiCategory').text(category).removeClass().addClass('bmi-' + category.toLowerCase().replace(/ /g, '-'));
	$('#bmiResult').fadeIn();
	var $bmiClass = $('.bmi-class-'+ bmi_class);
	$bmiClass.fadeOut(300);
	$bmiClass.fadeIn(500);
});