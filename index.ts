function print(num: number, str: string) {
	check(num, str);
	console.log(str);
}

function check(num: number, str: string) {
	if (str === 'throw' || num > 100) {
		throw new Error('You said throw and I said how high?');
	}
	return str;
}

function main() {
    print(1, 'first');
    print(2, 'second');
}

main();
