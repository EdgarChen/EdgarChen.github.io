function Start(aNumber, aIterations, aTestFun) {
  var average = document.createElement("div");
  var progress = document.createElement("div");
  var result = document.createElement("div");

  document.body.appendChild(average);
  document.body.appendChild(progress);
  document.body.appendChild(document.createElement("hr"));
  document.body.appendChild(result);

  var n = 0;
  var sum = 0.0;
  (function iteration() {
    n++;
    var s = performance.now();
    for (var i = 0; i < aNumber; ++i) {
      aTestFun();
    }
    var e = performance.now() - s;
    sum += e;
    average.textContent = "average time: " + (sum/n) + " ms";
    progress.textContent = "running... " + (n/aIterations)*100 + "%"
    result.appendChild(new Text(n + ". " + e + " ms"));
    result.appendChild(document.createElement("br"));

    if (n < aIterations) {
      setTimeout(iteration, 50);
    }
  })();
}