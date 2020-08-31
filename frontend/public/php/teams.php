<?php
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
}
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Max-Age: 86400'); // cache for 1 day
header('Content-Type: application/json');

include "databaseFunctions.php";

$conn = setupDatabase();
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $teams;
    $response = [];

    if ($_GET["league"] == "pro") {
        $teams = getProTeamsByName($conn);
    } else {
        $order = isset($_GET["order"]) ? $_GET["order"] : "";
        $teams = $order == "ranking" ? getCollegeTeamsByRanking($conn) : getCollegeTeamsByName($conn);
    }

    if (mysqli_num_rows($teams) > 0) {
        while ($row = mysqli_fetch_assoc($teams)) {
            $rowObject = (object) $row;
            unset($rowObject->upload_date);
            $rowObject->uploadDate = $row["upload_date"];
            array_push($response, $rowObject);
        }
    }

    echo json_encode($response);

} else {
    http_response_code(405); //Method Not Allowed
}
