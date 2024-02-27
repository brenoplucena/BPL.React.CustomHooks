function start() {
  var name = "Manu"; // name is a local variable created by start()
  function displayName() {
    // displayName() is the inner function, a `closure`
    alert(name); // use variable declared in the parent function
  }
  displayName();
}
start(); // "Manu" alert box is displayed
