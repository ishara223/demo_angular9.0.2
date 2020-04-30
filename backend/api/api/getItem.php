<?php
    include 'cors.php';
    include "connection.php";
    $connection  = connect();

    // Get the posted data.
    $postdata = file_get_contents("php://input");

    if(isset($postdata) && !empty($postdata))
    {
    // Extract the data.
    $id = json_decode($postdata);
    }


    // Create.
    function getData($connection, $query){
        $result = $connection->query($query) or die($connection->error);
        $rows = array();
        while($tuple = $result->fetch_assoc()){
            $rows[] = $tuple;
        }
        $rowCount = mysqli_affected_rows($connection);
        return json_encode($rows);
    }

    $sql = "SELECT * FROM `items` Where id=$id";
    $results =  getData($connection, $sql);
    header('Content-type: application/json');
    echo $results;

?>