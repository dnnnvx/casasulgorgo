import type { Messages } from '../it/index.ts'

export const contact: Messages['contact'] = {
	title: 'Contact us',
	lead: 'Want to help, suggest an idea or just learn more? Write to us: we read everything and reply as soon as we can.',
	role: 'Who you are',
	roles: {
		public: 'Public body',
		association: 'Association or school',
		business: 'Business',
		volunteer: 'Volunteer',
		other: 'Other'
	},
	name: 'Name',
	email: 'Email',
	message: 'Message',
	messageHint: 'Tell us who you are and how you would like to contribute.',
	send: 'Send message',
	sending: 'Sending…',
	privacy:
		'We only use your name and email to reply: we never share them and never sign you up for anything.',
	errors: {
		name: 'Please enter your name.',
		email: 'We need a valid email address to reply.',
		message: 'The message is too short (at least 10 characters).',
		throttled: 'You have sent several messages recently: please try again later.',
		failed: 'Something went wrong and the message was not sent. Please try again later.'
	},
	sent: {
		title: 'Thank you, message received!',
		text: 'We will reply to the address you gave us. In the meantime, why not have a look at the species of the gorgo?',
		again: 'Write another message'
	}
}
