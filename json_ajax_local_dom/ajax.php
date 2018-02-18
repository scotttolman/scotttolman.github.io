<?php

if(isset($_POST['jHide'])) {
    $jHide = $_POST['jHide'];
}

try
  {
    $dbuser = 'postgres';
    $dbpassword = 'CS313-PHP';
    $db = new PDO('pgsql:host=127.0.0.1;dbname=ajax', $dbuser, $dbpassword);
    $db->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
  }
  catch (PDOException $ex)
  {
    echo 'Error!: ' . $ex->getMessage();
    die();
  }

  $sql = "INSERT INTO jsontext (jtext) VALUES (:txt)";
  $stmt = $db->prepare($sql);
  $addUser->bindParam(':txt', $jHide);
  $addUser->execute();

//   $stmt = $db->prepare('SELECT password FROM trainers WHERE name = :username');
//   $stmt->bindValue(':username', $username);
//   $stmt->execute();
//   $rows = $stmt->fetch();
  
  ?>