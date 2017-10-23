$(function() {

	console.log("ready");

		//###Technical Requirements 

	// - Prevent a form submission with the ```event.preventDefault()``` function
	// - Use the ```$.ready()``` handler to delay your code from executing until all DOM assets have been loaded
	// - Select the appropriate DOM elements with CSS selectors upon a user's click using the ```$.click()``` handler
	// - If a user clicks "Read More" on the primary column:

	//   - have the text in the ```<p>``` tag slide down along with a "Read Less" link in the blog post using  ```$.slideDown()``` and ```$.show()```
	//   - hide the "Read More" link using ```$.hide()```

	// - If a user clicks "Read Less" on the primary column:

	//   - have the ```<p>``` slide up and hide the "Read Less" link using  ```$.slideUp()``` and ```$.hide()```
	//   - show the "Read More" link using ```$.show()```

	// - Using the same functions as above, if a user clicks the "Learn More" link in the sidebar, have the ```<span>``` inside that ```<p>``` slide down and hide the "Learn More" link using ```$.slideDown()``` and ```$.hide()```




	// if click "Read More" = slide down <p> + show "Read Less" / hide "Read More"
	$('.readmore a').on('click', function(event){
		event.preventDefault();
		$('#show-this-on-click').slideDown();
		$('.readmore a').hide();
		$('.readless').show();
	})


	// if click "Read Less" = slide up <p> + show "Read More" / hide "Read Less"

	$('.readless a').on('click', function(event){
		event.preventDefault();
		$('#show-this-on-click').slideUp();
		$('.readless').hide();
		$('.readmore a').show();
	})

	// if click "Learn More" = (this).find('span') slide down + hide "Learn More"

	$('.learnmore').on('click', function(event){
			event.preventDefault();
			$('p span').slideDown();
			$('.learnmore').hide();
		})

})