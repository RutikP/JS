

// let btn = document.getElementById('btn');
// btn.addEventListener('click',fun2);

// function fun2(e){
//     // console.log("Thanks",e);
//     location.href="magicnotes.html";
//     //e.preventDefault();//which does not allow to redirect to link page
  
   
// }




let uinput = document.getElementById("einput");
uinput.addEventListener("input", function () {
  let inputVal = uinput.value;
  if (inputVal == "rutikpanchal121@gmail.com") {
      console.log("user input is working");
    let upassword = document.getElementById("epassword");
    upassword.addEventListener("input", function () {
      let userVal = upassword.value;
      if (userVal == "rutik@8050") {
        console.log("user password is working");
        let btn = document.getElementById("btn")
        btn.addEventListener("click", function(e){
        //   console.log("Thanks", e);
          location.href = "magicnotes.html";
        // console.log("its working");
        //   e.preventDefault(); //which does not allow to redirect to link page
        });
      }
    });
  }
});




//   for (let i = 0; i < users.length; i++) {
//     if (users[i].Email == UEmail && users[i].Password == UPassword) {
//       console.log("Its working");
//     } else {
//       console.log("Its not working");
//     }
//   }