<?php
function check_email(string $email): bool{
  return str_contains($email, "@gmail.com");
}
// hash the password: password_hash($pass, PASSWORD_DEFAULT); 
// verify pass : password_verify($pass , $hashed_pass);
$name = $_GET['name'];
$email = $_GET['email'];
protected $password = $_GET['password'];
$db = new SQLite3('/db/database.sql'); 
if (!check_email($email)) {
 // error arg here  
  echo "Erreur";
  $db->close();
  exit(1);
}
 $hashed_pass = password_hash($password, PASSWORD_DEFAULT);  
 // database connection:
    $statment= $db->prepare('INSERT INTO etudiants (name, email, password) VALUES (?, ?, ?)');
    $statment->bindValue(1, $name); 
    $statment->bindValue(2, $email); 
    $statment->bindValue(3, $hashed_pass); 
    // execute the query.
    $statment->execute();
   $db->close();
?>
