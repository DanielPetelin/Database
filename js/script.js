let yourLogin;
let yourName;
let yourPassword;

document.querySelector('.sign').onclick = function() {
      let loginQuestion = prompt("What's your login?");
      yourLogin = loginQuestion;
      let nameQuestion = prompt("What's your name?");
      yourName = nameQuestion;
      let passwordQuestion = prompt("What's your password?");
      yourPassword = passwordQuestion;

      document.querySelector('.I').style.display = "block";
};
document.querySelector('.deletMe').onclick = function() {
      yourLogin = "";
      yourName = "";
      yourPassword = "";
      document.querySelector('.outName').style.display = "none";
};
document.querySelector('.I').onclick = function() {
      let wYourLogin = prompt("What's your login?");
      let wYourPassword = prompt("What's your password?");

      if (wYourLogin == yourLogin && wYourPassword == yourPassword) {
            document.querySelector('.outName').style.display = "block";
            document.querySelector('.outName').innerHTML = "Your name: " + yourName;
      };
};