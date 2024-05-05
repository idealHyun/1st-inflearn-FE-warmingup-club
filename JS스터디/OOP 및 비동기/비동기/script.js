function fetchData() {
	return new Promise((resolve, reject) => {
		const sucess = false;
		if (sucess) {
			resolve("Data fetched");
		} else {
			reject("Data not fetched");
		}
	});
}

fetchData()
	.then((result) => {
		// resolve 함수 실행되면 이곳으로 이동
		console.log(result);
	})
	.catch((error) => {
		// reject 함수 실행되면 이곳으로 이동
		console.log(error);
	})
	.finally(() => {
		// resolve, reject 둘 다 실행
		console.log("Process complete");
	});


// Promise.all
const promise1 = Promise.resolve("Promise 1 resolved");
const promise2 = 11;
const promise3= new Promise((resolve, reject) => {
    const sucess = true;
    if (sucess) {
        resolve("Data fetched");
    } else {
        reject("Data not fetched");
    }
});

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});

// Promise.race
const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Promise 4 resolved");
});
const promise5 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "Promise 5 resolved");
});
Promise.race([promise4, promise5]).then((value) => {
    console.log(value); // Promise 4 resolved
});

// Async/Await
async function fetchData() {
    try{ // Promise의 resolve
        const response1 = await fetch();
        console.log(response1);
    } catch(error){ // Promise의 reject
        console.log(error);
    } finally {
        console.log("Process complete");
    }
}