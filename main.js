/* eslint-disable import/extensions */
import { callbackSync, callbackAsync } from './callback.js'
import { delay } from './promise.js'

callbackSync();
// callbackAsync();

// delay()
// 	.then(() => { console.log(1); return delay(1000) })
// 	.then(() => { console.log(2); return delay(1000) })
// 	.then(() => { console.log(3); return delay(1000) })

const asyncAwait = async () => {
	await delay(1000);
	console.log(1);
	await delay(1000);
	console.log(2);
	await delay(1000);
	console.log(3);
}

// asyncAwait();
