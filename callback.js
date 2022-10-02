/* eslint-disable no-console */
// eslint-disable-next-line import/prefer-default-export
export const callbackSync = () => {
	setTimeout(() => {
		console.log(1);
		setTimeout(() => {
			console.log(2);
			setTimeout(() => {
				console.log(3);
			}, Math.random() * 10 + 1)
		}, Math.random() * 10 + 1)
	}, Math.random() * 10 + 1)
}

export const callbackAsync = () => {
	setTimeout(() => {
		console.log('1');
	}, Math.random() * 10 + 1);

	setTimeout(() => {
		console.log('2');
	}, Math.random() * 10 + 1);

	setTimeout(() => {
		console.log('3');
	}, Math.random() * 10 + 1);
}
