async function processTask(taskId) {
    const taskStatus = new Promise((resolve,reject) => {
        setTimeout(() => {
            if (taskId > 0) {
                resolve(`Task ${taskId} completed successfully.`)
            } else {
                reject(`Invalid Task Id : ${taskId}`);
            }
        },1000);
    })
    try {
        const res = await taskStatus;
        console.log(res)
    } catch (err) {
        console.error(err);
    }
}

processTask(5);
processTask(-1);