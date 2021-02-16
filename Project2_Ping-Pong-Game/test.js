var fun = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("sffd");
      resolve("resolved");
    }, 2000);
  });
};

var newfun = () => {
  console.log("new fun");
};

var callEm = async () => {
  let funValue = await fun();
  console.log(funValue);
  console.log("after fun");
};

callEm();
