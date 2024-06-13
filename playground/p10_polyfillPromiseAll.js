function myPromiseAll(taskList = []){
	let promisesCompleted = 0;
  let taskRes = [];
	return new Promise((res, rej) => {
  	taskList.forEach((task, index) => {
    	task
        .then((res) => {
        	promisesCompleted += 1;
          taskRes[index] = res;
          if(promisesCompleted == taskList.length){
          	res(taskRes)
          }
        })
        .catch(err => {
        	rej(err)
        })
    })
  })
}