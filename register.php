<?php

session_start();

require_once 'config.php';

$id = $_POST['userId'];

$fname = $_POST['fname'];
$lname = $_POST['lname'];
$username = $_POST['username'];
$email = $_POST['email'];

echo $fname . '<br>';
echo $lname . '<br>';
echo $username . '<br>';
echo $email . '<br>';

$register = $_POST['register'];
$update = $_POST['update'];

/* The registration section */

if (isset($register)) {
   if ($_SERVER['REQUEST_METHOD'] == 'POST') {

      $sqlFetch = "SELECT username,email FROM users WHERE username='$username' AND email='$email' LIMIT 1";
      $result = mysqli_query($connection, $sqlFetch) or die(mysqli_error($connection));

      if (mysqli_num_rows($result) > 0) {
         $_SESSION['message'] = 'Registration failure; User (' . $email . ', ' . $username . ') already exists.';
         $_SESSION['toggle'] = 'error';
         header('location:index.php');
      } else {
         $sqlInsert = "INSERT INTO users(firstname,lastname,username,email) values('$fname','$lname','$username','$email')";
         $inserted = mysqli_query($connection, $sqlInsert) or die(mysqli_error($connection));

         if ($inserted) {
            $_SESSION['message'] = 'User registered successfully.';
            $_SESSION['toggle'] = 'success';
            header('location:index.php');
         }
      }
   }
}elseif (isset($update)) {

   /* The update section */

   if ($_SERVER['REQUEST_METHOD'] == 'POST') {
      $sqlEdit = "UPDATE users SET firstname='$fname', lastname='$lname', username='$username', email='$email' WHERE id='$id'";
      $edited = mysqli_query($connection, $sqlEdit) or die(mysqli_error($connection));

      if ($edited) {
         $_SESSION['message'] = 'Record updated successfully';
         $_SESSION['toggle'] = 'warning';

         $update = false;

         header('location:index.php');
      }
   }
}
