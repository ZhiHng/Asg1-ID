const links = document.querySelectorAll('.tab-link');
const contents = document.querySelectorAll('.tab-content');

//ensures the open tab is the Home tab when website loads
contents.forEach((c, i) => {
  	if (i === 0) c.classList.add('active');
});
links[0].classList.add('active'); 

links.forEach(link => {
  	link.addEventListener('click', event => {
    	event.preventDefault(); //Stops the scrolling of <a>
    	contents.forEach(content => content.classList.remove('active')); //deactivate all elements
    	links.forEach(l => l.classList.remove('active')); //deactivate all tab links

    	const targetId = link.getAttribute('href').substring(1); //find which tab was clicked
    	
		document.getElementById(targetId).classList.add('active'); //activate clicked tab elements
    	link.classList.add('active'); //works with CSS .tab-link.active{} to color the words of the current tab

		window.scrollTo({top: 0}); //scrolls to top of the tab when switching
  	});
});

const Clocation = document.getElementById("concertLocation");
const dateInput = document.getElementById("concertDate");
const timeInput = document.getElementById("concertTime");

Clocation.addEventListener("change", function() { 
	if (this.value === "kuala lumpur") {
		dateInput.min = "2024-11-21";
		dateInput.max = "2024-11-21";
		dateInput.value = "2024-11-21"; //auto sets the date when location selected
	} else if (this.value === "bangkok") {
		dateInput.min = "2024-11-23";
		dateInput.max = "2024-11-23";
		dateInput.value = "2024-11-23";
	} else if (this.value === "singapore") {
		dateInput.min = "2024-11-25";
		dateInput.max = "2024-11-25";
		dateInput.value = "2024-11-25";
	} else if (this.value === "taipei") {
		dateInput.min = "2024-11-28";
		dateInput.max = "2024-11-28";
		dateInput.value = "2024-11-28";
	} else if (this.value === "hong kong") {
		dateInput.min = "2024-11-30";
		dateInput.max = "2024-12-01";
		dateInput.value = "2024-11-30";
	} else if (this.value === "tokyo") {
		dateInput.min = "2024-12-03";
		dateInput.max = "2024-12-03";
		dateInput.value = "2024-12-03";
	} else {
		dateInput.removeAttribute("min");
		dateInput.removeAttribute("max");
	}
	if (this.value === 'tokyo') {
		timeInput.value = '7.00pm local time';
	} else {
		timeInput.value = '8.00pm local time';
	}
	if (this.value) { //if location has something selected, enable date and time
		dateInput.disabled = false;
		timeInput.disabled = false;
	} else { //nothing selected, disable and reset date and time
		dateInput.disabled = true;
		timeInput.disabled = true;
		dateInput.value = '';
		timeInput.value = '';
	}
});

//different from the top one as this is for after user clears the date after selecting location and wants to set the date manually
dateInput.addEventListener("change", function() {
	if (this.value === '') { //if date not selected (cleared), time will have nothing
		timeInput.value = '';
	} else {
		if (Clocation.value === "kuala lumpur") { //auto fills in date based on location selected
			dateInput.min = "2024-11-21";
			dateInput.max = "2024-11-21";
			dateInput.value = "2024-11-21";
		} else if (Clocation.value === "bangkok") {
			dateInput.min = "2024-11-23";
			dateInput.max = "2024-11-23";
			dateInput.value = "2024-11-23";
		} else if (Clocation.value === "singapore") {
			dateInput.min = "2024-11-25";
			dateInput.max = "2024-11-25";
			dateInput.value = "2024-11-25";
		} else if (Clocation.value === "taipei") {
			dateInput.min = "2024-11-28";
			dateInput.max = "2024-11-28";
			dateInput.value = "2024-11-28";
		} else if (Clocation.value === "hong kong") {
			dateInput.min = "2024-11-30";
			dateInput.max = "2024-12-01";
			dateInput.value = "2024-11-30";
		} else if (Clocation.value === "tokyo") {
			dateInput.min = "2024-12-03";
			dateInput.max = "2024-12-03";
			dateInput.value = "2024-12-03";
		} else {
			dateInput.removeAttribute("min");
			dateInput.removeAttribute("max");
		}
		if (this.value === 'tokyo') {
			timeInput.value = '7.00pm local time';
		} else {
			timeInput.value = '8.00pm local time';
		}
	}
});

const cartText = document.getElementById('cart')
const addToCart = document.querySelectorAll('.buttonMerch')
var cart = [] //clears cart when website loads
cartText.value = '' //clears cart preview when website loads
var grandTotal = 0 //reset the pricing when website loads

addToCart.forEach(button => {
  	button.addEventListener('click', function() {
    	const parent = this.parentElement; //gets the parent div element
		const img = parent.querySelector('img'); //finds the image in the div
		const item = img.getAttribute('alt'); //gets the name of the merch item
		const p = parent.querySelector('p'); //gets the description of the item
		const price = parseInt(p.innerHTML.split('<br>')[1].trim().replace('$','')); //extract out the price which is behind the <br>
		grandTotal += price
		cart.push(item) //add item name to cart
		cartText.value = ''
		cart.forEach(product => {
			cartText.value += `${product}\n` //build the cart display string with the item names
		});
		cartText.value += `Grand Total: $${grandTotal}` //add the total price at the end of the string
  	});
});

const clearCart = document.getElementById('clearCart')
clearCart.addEventListener('click', function() {
	cart = []; //clear cart and remove all text of the cart display and reset the grandtotal price
	grandTotal = 0;
	cartText.value = '';
});

const merchTabs = document.querySelectorAll('#merchDropdown div a')
const category = document.querySelector('#category')
const merchType = document.querySelectorAll('#merchShop div')

merchTabs.forEach(dropdown => {
	dropdown.addEventListener('click', function() {
		let filter = this.getAttribute('id').slice(3); //since my submenus tab has id of "navHome" for example, I need to remove the nav which is the 3 letters in front
		const target = category.querySelector(`#${filter}`); //set the target to the category header I want to show
		
		const others = category.querySelectorAll('h1'); //get all h1 which is all the category items
		others.forEach(title => {
			title.style.display = 'none'; //hide all the headers/categories. title.style.display is used instead of .classList.add('active') as headers do not have that property
		});
		if (target === null) {
			target = category.querySelector(`#AllMerch`); //just incase nothing is selected, the category will always be All Merch
		}
		target.style.display = 'block'; //show the header/category that is clicked

		merchType.forEach(item => {
			item.style.display = 'none';
			if (item.getAttribute('class') === filter.toLowerCase()) {
				item.style.display = 'block'; //show all the div merch with the class same as the category
			} else if (filter.toLowerCase() === 'allmerch') {
				item.style.display = 'block'; //another safety feature just incase nothing is clicked or targeted, it would show all merch
			}
		});
	});
});

const purchaseMerch = document.getElementById('purchaseMerch')
const errorMsg = document.getElementById('errorMsg')

purchaseMerch.addEventListener('click', function() {
	const email = document.getElementById('email').value.trim(); //remove whitespace in textbox
	const name = document.getElementById('name').value.trim();
	const address = document.getElementById('address').value.trim();
	const creditcard = document.getElementById('creditcard').value.trim();
	const ccv = document.getElementById('ccv').value.trim();

	if (email === '') {
		errorMsg.textContent = 'Please input your email';
		return; //only returns the first error it picks up and does not check the others until it is corrected
	} else if (!email.includes('@')) {
		errorMsg.textContent = 'Please enter a valid email';
		return;
	}

	if (name === '') {
		errorMsg.textContent = 'Please input your full name';
		return;
	}

	if (address === '') {
		errorMsg.textContent = 'Please input your address';
		return;
	}

	if (creditcard === '') {
		errorMsg.textContent = 'Please input your credit card information';
		return;
	} else if (creditcard.length !== 16 || isNaN(creditcard)) { //isNaN() checks if the whole string is a number
		errorMsg.textContent = 'Please enter a valid credit card number';
		return;
	}

	if (ccv === '') {
		errorMsg.textContent = 'Please input your CCV';
		return;
	} else if (ccv.length !== 3 || isNaN(ccv)) {
		errorMsg.textContent = 'Please enter a valid CCV number';
		return;
	}

	if (cart.length === 0) {
		errorMsg.textContent = '';
		return;
	}

	errorMsg.textContent = '';
	alert('Purchase submitted successfully');
	cart = []; //clear cart when purchased items already
	grandTotal = 0;
	cartText.value = '';
});

const purchaseTicket = document.getElementsByClassName('buttonConcert')[0];
const errorMsgConcert = document.getElementById('errorMsgConcert');

purchaseTicket.addEventListener('click', function() {
	const emailC = document.getElementById('emailConcert').value.trim();
	const nameC = document.getElementById('nameConcert').value.trim();
	const addressC = document.getElementById('addressConcert').value.trim();
	const creditcardC = document.getElementById('creditcardConcert').value.trim();
	const ccvC = document.getElementById('ccvConcert').value.trim();

	if (Clocation.value === '') {
		errorMsgConcert.textContent = 'Please enter a concert location';
		return;
	}

	if (dateInput.value === '') {
		errorMsgConcert.textContent = 'Please enter a concert date';
		return;
	}

	if (emailC === '') {
		errorMsgConcert.textContent = 'Please input your email';
		return;
	} else if (!emailC.includes('@')) {
		errorMsgConcert.textContent = 'Please enter a valid email';
		return;
	}

	if (nameC === '') {
		errorMsgConcert.textContent = 'Please input your full name';
		return;
	}

	if (addressC === '') {
		errorMsgConcert.textContent = 'Please input your address';
		return;
	}

	if (creditcardC === '') {
		errorMsgConcert.textContent = 'Please input your credit card information';
		return;
	} else if (creditcardC.length !== 16 || isNaN(creditcardC)) {
		errorMsgConcert.textContent = 'Please enter a valid credit card number';
		return;
	}

	if (ccvC === '') {
		errorMsgConcert.textContent = 'Please input your CCV';
		return;
	} else if (ccvC.length !== 3 || isNaN(ccvC)) {
		errorMsgConcert.textContent = 'Please enter a valid CCV number';
		return;
	}

	errorMsgConcert.textContent = '';
	alert('Purchase submitted successfully');
	dateInput.value = ''; //reset concert details after buying ticket
	timeInput.value = '';
	Clocation.value = '';
});
  
const vids = document.querySelectorAll("video");

vids.forEach(vid => {
	vid.addEventListener("ended", () => {
		vid.currentTime = 0; //goes back to thumbnail after video finishes
		vid.pause();
		vid.load(); //refreshes the video so change the frame to the thumbnail
	});
	
	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (!entry.isIntersecting) { //video not on screen (switch tabs)
				vid.currentTime = 0; //reset video back to default
				vid.pause();
				vid.load();
			}
		});
	});

	observer.observe(vid); //check if the video is on the screen
});

