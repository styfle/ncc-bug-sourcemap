function hello(name: string) {
	if (name === 'throw') {
		throw new Error('Hello Error :)');
	}
	console.log('hello ' + name);
}

hello('start');
setTimeout(() => hello('end'), 3000);
setTimeout(() => hello('throw'), 5000);
