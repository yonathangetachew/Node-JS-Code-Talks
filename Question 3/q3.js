const getTodos = () => { // The function 'getTodos' is defined using an arrow function syntax
  const request = new XMLHttpRequest(); // This object, created inside the function, enables making HTTP requests.

  request.addEventListener("readystatechange", () => { // An event listener is added to the request object to listen for changes in the request's state
    // Inside the event listener, the code checks the 'readyState' and status of the request object
    if (request.readyState === 4 && request.status === 200) {
    // If the readyState is 4 (which means the operation is complete) and the status is 200 (which means the request was successful), the esponse text is logged 
      console.log(request.responseText);
    } else if (request.readyState === 4) {
    // If the readyState is 4 but the status is not 200, the code logs the message 'could not fetch the data' 
      console.log("could not fetch the data"); //  This indicates that the request was completed, but an error occurred.
    }
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  // The code sets up the AJAX request by calling the open method on the request object. 
  request.send(); // The request is sent to the server
};

getTodos();
getTodos();
// Ensures that the AJAX request will be made two times, fetching the todos from the API twice.
