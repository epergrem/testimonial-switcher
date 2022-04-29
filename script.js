const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector(.'testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySlector('.role')// JavaScript Document

const testimonials = [
	{
		name: 'Miyah Myles',
		position: 'Marketing',
		photo:
		'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
		text: 
		"Quisque dignissim, urna id lacinia pharetra, nisi urna porttitor odio, sit amet facilisis purus sapien sed nulla. Cras nec vulputate risus, at egestas orci. Proin sodales justo vel sem pulvinar, quis scelerisque nisl convallis. Aenean ac leo eros. Proin molestie malesuada laoreet. Vivamus in gravida odio, in accumsan diam. Donec elementum mattis velit, vel lacinia augue pretium non. Praesent lacinia metus sit amet risus pulvinar convallis. Donec id sagittis nunc. Ut vel erat nisl. Aenean porta tempor sodales.",
	},
	{
		name: 'Sarah Jones',
		position: 'Marketing',
		photo:
		'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
		text: 
		"Quisque dignissim, urna id lacinia pharetra, nisi urna porttitor odio, sit amet facilisis purus sapien sed nulla. Cras nec vulputate risus, at egestas orci. Proin sodales justo vel sem pulvinar, quis scelerisque nisl convallis. Aenean ac leo eros. Proin molestie malesuada laoreet. Vivamus in gravida odio, in accumsan diam. Donec elementum mattis velit, vel lacinia augue pretium non. Praesent lacinia metus sit amet risus pulvinar convallis. Donec id sagittis nunc. Ut vel erat nisl. Aenean porta tempor sodales.",
	},
	{
		name: 'Steve',
		position: 'Marketing',
		photo:
		'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
		text: 
		"Quisque dignissim, urna id lacinia pharetra, nisi urna porttitor odio, sit amet facilisis purus sapien sed nulla. Cras nec vulputate risus, at egestas orci. Proin sodales justo vel sem pulvinar, quis scelerisque nisl convallis. Aenean ac leo eros. Proin molestie malesuada laoreet. Vivamus in gravida odio, in accumsan diam. Donec elementum mattis velit, vel lacinia augue pretium non. Praesent lacinia metus sit amet risus pulvinar convallis. Donec id sagittis nunc. Ut vel erat nisl. Aenean porta tempor sodales.",
	},
]


let idx = 1

function updateTestimonial() {
	const {name, position, photo, text } = testimonials[idx]
	
	testimonial.innerHTML = text
	userImage.src = photo
	username.innerHTML = name
	role.innerHTML = position
	
	idx++
	
	if (idx > testimonials.length -1) {
		idx = 0
	}
}

setInterval(updateTestimonial, 10000)