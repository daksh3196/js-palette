function myPromiseAllSettled(taskList = []){
	let promisesCompletedSuccess = 0;
  let promisesCompletedError = 0;
  let taskRes = Array(taskList.length).fill(null);
	return new Promise((res, rej) => {
  	taskList.forEach((task, index) => {
    	task
        .then((res) => {
        	promisesCompletedSuccess += 1;
          taskRes[index] = res;
          if(promisesCompletedSuccess + promisesCompletedError  == taskList.length){
          	res(taskRes)
          }
        })
        .catch(err => {
        	promisesCompletedError += 1;
          taskRes[index] = err;
          if(promisesCompletedSuccess + promisesCompletedError  == taskList.length){
          	res(taskRes)
          }
        })
    })
  })
}