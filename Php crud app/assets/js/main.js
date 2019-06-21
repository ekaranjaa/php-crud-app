function validateForm() {
   var profPic = document.getElementById('profilePic');
   var name = document.getElementById('name');
   var username = document.getElementById('username');
   var email = document.getElementById('email');
   var password = document.getElementById('password');
   var confPass = document.getElementById('confPass');

   clear();

   var valid = true;

   if (profPic.value.length == 0) {
      profPic.nextElementSibling.classList.add('toggle');
      profPic.nextElementSibling.innerHTML = 'Choose a profile picture to continue';
      valid = false;
   }
   if (name.value.length == 0) {
      name.classList.add('invalid');
      name.nextElementSibling.classList.add('toggle');
      name.nextElementSibling.innerHTML = 'This field is required.';
      valid = false;
      name.focus();
   }
   if (username.value.length == 0) {
      username.classList.add('invalid');
      username.nextElementSibling.classList.add('toggle');
      username.nextElementSibling.innerHTML = 'This field is required.';
      valid = false;
      username.focus();
   }
   if (email.value.length == 0) {
      email.classList.add('invalid');
      email.nextElementSibling.classList.add('toggle');
      email.nextElementSibling.innerHTML = 'This field is required.';
      valid = false;
      email.focus();
   } else if (!checkEmail(email.value)) {
      email.classList.add('invalid');
      email.nextElementSibling.classList.add('toggle');
      email.nextElementSibling.innerHTML = 'Input a valid email.';
      valid = false;
      email.focus();
   }
   if (password.value.length == 0) {
      password.classList.add('invalid');
      password.nextElementSibling.classList.add('toggle');
      password.nextElementSibling.innerHTML = 'This field is required.';
      valid = false;
      password.focus();
   } else if (password.value.length < 8) {
      password.classList.add('invalid');
      password.nextElementSibling.classList.add('toggle');
      password.nextElementSibling.innerHTML = 'Password is too short.';
      valid = false;
      password.focus();
   }
   if (confPass.value.length == 0) {
      confPass.classList.add('invalid');
      confPass.nextElementSibling.classList.add('toggle');
      confPass.nextElementSibling.innerHTML = 'This field is required.';
      valid = false;
      confPass.focus();
   } else if (confPass.value != password.value) {
      confPass.classList.add('invalid');
      confPass.nextElementSibling.classList.add('toggle');
      confPass.nextElementSibling.innerHTML = 'Passwords did not match.';
      valid = false;
      confPass.focus();
   }
   return valid;
}

function clear() {

   var inputs = document.querySelectorAll('.in-field');

   [].forEach.call(inputs, function (field) {
      field.classList.remove('invalid');
      field.nextElementSibling.classList.remove('toggle');
      field.nextElementSibling.innerHTML = '';
   });
}

function closeError() {
   var msg;
   msg = document.getElementById('message');
   msg.classList.remove('warning');
   msg.classList.remove('error');
   msg.classList.remove('success');
}

function searchFunction() {
   var input, filter, ul, li, a, i;
   input = document.getElementById("searchField");
   filter = input.value.toUpperCase();
   ul = document.getElementById("recordList");
   li = ul.getElementsByClassName("user");
   for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByClassName("item")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
         li[i].style.display = "";
      } else {
         li[i].style.display = "none";
      }
   }
}