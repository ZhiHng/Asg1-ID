const links = document.querySelectorAll('.tab-link');
const contents = document.querySelectorAll('.tab-content');

contents.forEach((c, i) => {
  	if (i === 0) c.classList.add('active');
});
links[0].classList.add('active');

links.forEach(link => {
  	link.addEventListener('click', event => {
    	event.preventDefault(); //Stops the scrolling of <a>

    	contents.forEach(content => content.classList.remove('active'));

    	links.forEach(l => l.classList.remove('active'));

    	const targetId = link.getAttribute('href').substring(1);
    	document.getElementById(targetId).classList.add('active');

    	link.classList.add('active');
    	console.log('Clicked link:', link.getAttribute('href'));
    	console.log('Target section:', document.getElementById(targetId));

		window.scrollTo({top: 0});

  	});
});

const Clocation = document.getElementById("concertLocation");
const dateInput = document.getElementById("concertDate");
const timeInput = document.getElementById("concertTime");
dateInput.addEventListener("change", function() {
	if (this.value === '') {
		timeInput.value = '';
	} else {
		if (Clocation.value === "kuala lumpur") {
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

Clocation.addEventListener("change", function() {
	if (this.value === "kuala lumpur") {
		dateInput.min = "2024-11-21";
		dateInput.max = "2024-11-21";
		dateInput.value = "2024-11-21";
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
	if (this.value) {
		dateInput.disabled = false;
		timeInput.disabled = false;
	} else {
		dateInput.disabled = true;
		timeInput.disabled = true;
		dateInput.value = '';
		timeInput.value = '';
	}
});

const categories = document.querySelectorAll('.category')


const cartText = document.getElementById('cart')
const addToCart = document.querySelectorAll('.buttonMerch')
var cart = []
cartText.value = ''
var grandTotal = 0

addToCart.forEach(button => {
  	button.addEventListener('click', function() {
    	const parent = this.parentElement;
		const img = parent.querySelector('img');
		const item = img.getAttribute('alt');
		const p = parent.querySelector('p');
		const price = parseInt(p.innerHTML.split('<br>')[1].trim().replace('$',''));
		grandTotal += price
		cart.push(item)
		cartText.value = ''
		cart.forEach(product => {
			cartText.value += `${product}\n`
		});
		cartText.value += `Grand Total: $${grandTotal}`
  	});
});

const clearCart = document.getElementById('clearCart')
clearCart.addEventListener('click', function() {
	cart = [];
	grandTotal = 0;
	cartText.value = '';
});

const merchTabs = document.querySelectorAll('#merchDropdown div a')
const category = document.querySelector('#category')
const merchType = document.querySelectorAll('#merchShop div')

merchTabs.forEach(dropdown => {
	dropdown.addEventListener('click', function() {
		let filter = this.getAttribute('id').slice(3);
		const target = category.querySelector(`#${filter}`);
		
		const others = category.querySelectorAll('h1');
		others.forEach(title => {
			title.style.display = 'none';
		});
		if (target === null) {
			target = category.querySelector(`#AllMerch`);
		}
		target.style.display = 'block';

		merchType.forEach(item => {
			item.style.display = 'none';
			if (item.getAttribute('class') === filter.toLowerCase()) {
				item.style.display = 'block';
			} else if (filter.toLowerCase() === 'allmerch') {
				item.style.display = 'block';
			}
		});
	});
});

const purchaseMerch = document.getElementById('purchaseMerch')
const errorMsg = document.getElementById('errorMsg')

purchaseMerch.addEventListener('click', function() {
	const email = document.getElementById('email').value.trim();
	const name = document.getElementById('name').value.trim();
	const address = document.getElementById('address').value.trim();
	const creditcard = document.getElementById('creditcard').value.trim();
	const ccv = document.getElementById('ccv').value.trim();

	if (email === '') {
		errorMsg.textContent = 'Please input your email';
		return;
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
	} else if (creditcard.length !== 16 || isNaN(creditcard)) {
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
	cart = [];
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
	dateInput.value = '';
	timeInput.value = '';
	Clocation.value = '';
});