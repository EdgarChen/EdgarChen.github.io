onmessage = function(e) {
  console.log("worker test");
  postMessage("message");
};
