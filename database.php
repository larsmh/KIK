<?php
function retrieveCustomers($department){
	$con=mysqli_connect("mysqladmin.stud.ntnu.no","franang_admin","tranduil123","franang_insider");
	if (mysqli_connect_errno()) {
  		echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}
	$result = mysqli_query($con,"SELECT * FROM customer WHERE department=" + $department);
	while($row = mysql_fetch_assoc($result)) {
  		$to_encode[] = $row;
	}
	echo json_encode($to_encode);
	
	mysqli_close($con);
}
?>