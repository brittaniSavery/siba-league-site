<?php

if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
}
header('Content-Type: application/json');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Max-Age: 86400'); // cache for 1 day

include "databaseFunctions.php";
$response = array();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $destination_path = dirname(__DIR__) . "/uploads/{$_POST['leagueType']}/";
    $target_file = $destination_path . basename($_FILES["teamFile"]["name"]);
    $file_ext = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
    $allowedExtensions = array("tem", "rep", "coa", "tra", "hco", "aco", "tfr", "brq");

    if (in_array($file_ext, $allowedExtensions) === false) {
        http_response_code(400);
        $response["message"] = "This file does not have an allowed extension.";
    } else {
        $fileMove = move_uploaded_file($_FILES["teamFile"]["tmp_name"], $target_file);

        if ($fileMove) {
            $uploadSet = setUploadDate($_POST["teamId"], $_POST["leagueType"], $_POST["uploadDate"]);

            if ($uploadSet) {
                http_response_code(200);
                $response["message"] = "Upload successful.";
            } else {
                http_response_code(500);
                $response["message"] = "An error occurred during the database update.";
            }
        } else {
            http_response_code(500);
            $response["message"] = "An error occurred during the upload.";
        }
    }
} else {
    http_response_code(405);
    $response["message"] = "Only POST requests are allowed.";
}

echo json_encode($response);

/**
 * Sets the upload data for the selected team
 */
function setUploadDate($teamId, $league, $date)
{
    $conn = setupDatabase();
    return updateUploadDate($conn, $league, $teamId, $date);
}
