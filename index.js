// Add your code here
// Add your code here
// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };
  
//   const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject);

//write a function, "submitData", takes 2 strings as arguments, 
//one represents user's name, the other represents user's email.
 //Note: The tests in this lab need access to the fetch() request inside submitData. In order to give them access, write your solution so that submitData returns the fetch(). This will not change the behavior of your fetch().
 function submitData(userName, userEmail){
    const userDetails = {
        name: userName,
        email: userEmail
    };

    const configureObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
    body: JSON.stringify(userDetails)
    }
    
    return(
        fetch("http://localhost:3000/users", configureObject)
        .then(response => response.json())
        .then(object => document.body.innerHTML = object.id)
        .catch(error => document.body.innerHTML = error.message)
    )
 }