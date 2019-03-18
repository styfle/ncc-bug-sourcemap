function print(str: string) {
	if (str === 'throw') {
		throw new Error('You said throw and I said how high?');
	}
	console.log(str);
}

function main() {
    print('running...will throw soon');
    print('throw');
}

main();