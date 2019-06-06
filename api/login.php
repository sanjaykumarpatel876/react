<?php
  header('Content-type: application/json');
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Credentials: true");
  
  include_once ("databse.php");
  $_POST = array_merge($_POST, (array) json_decode(file_get_contents('php://input')));
   $checkmethod = $_SERVER['REQUEST_METHOD'];
  if($checkmethod == 'POST' ){
      $username = $_POST['username'];
      $password = md5($_POST['password']);
      
		   $sql = "SELECT * FROM register WHERE email='$username' && password='$password'";	      
	       $result = $mysqli->query($sql) or die('error'.$mysqli->error());
             if ($result->num_rows > 0) {
                 $response = $result->fetch_assoc();
                 $output = array('status' => '200', 'response' => 'success', 'userData' =>$response,'description'=>'executed Successfully');
	             echo json_encode($output);
	              exit;
             }else{
                 $output = array('status' => '422', 'response' => 'error', 'message' =>'Invalid Username or Password!.','description'=>'Invalid Username or Password!.');
    	         echo json_encode($output);
    	         exit;
             }     
  }else{
     $output = array('status' => '400', 'response' => 'error', 'message' =>'Sorry for the inconvenience, Pls selected post method','description'=>'Sorry for the inconvenience, Pls selected post method');
     echo json_encode($output);
     exit;
  }
?>