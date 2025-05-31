const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 1000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 2 rejected");
  }, 3000);
});

const promiseAll = (promiseArray) => {
  return new Promise((resolve, reject) => {
    let oneRejected = false;

    const promiseTracker = [];

    const callback = () => {
      const allResolved = promiseTracker.every((promise) => promise);

      if (allResolved) {
        resolve("Promise All Resolved");
      }

      if (oneRejected) {
        reject("Promise All Rejected");
      }
    };

    promiseArray.forEach((promise, index) => {
      promiseTracker.push(false);

      promise.then(() => {
        promiseTracker[index] = true;
        callback();
      });

      promise.catch(() => {
        oneRejected = true;
        callback();
      });
    });
  });
};

promiseAll([promise1, promise2, promise3])
  .then(() => {
    console.log("After All promises resolved");
  })
  .catch(() => {
    console.log("After All promises rejected");
  });

promiseAll([promise1, promise2])
  .then(() => {
    console.log("After All promises resolved");
  })
  .catch(() => {
    console.log("After All promises rejected");
  });

// promise1.then(() => {
//   console.log("After Promise 1 resolved ");
// });

// promise2.then(() => {
//   console.log("After Promise 2 resolved ");
// });

// promise3.catch(() => {
//   console.log("After Promise 3 rejected ");
// });
