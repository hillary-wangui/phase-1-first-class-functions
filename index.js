function receivesAFunction(callback) {
    callback(); // Call the provided callback function
  }
  
  // Example usage:
  receivesAFunction(function() {
    console.log("Callback function called!");
  });

  function returnsANamedFunction() {
    function namedFunction() {
      console.log("Named function called!");
    }
    return namedFunction;
  }
  
  // Example usage:
  const myFunction = returnsANamedFunction();
  myFunction(); // Output: "Named function called!"

  function returnsAnAnonymousFunction() {
    return function() {
      console.log("Anonymous function called!");
    };
  }
  
  // Example usage:
  const anonymousFunction = returnsAnAnonymousFunction();
  anonymousFunction(); // Output: "Anonymous function called!"
  

