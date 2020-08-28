<?php
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400'); // cache for 1 day
}

$response = array();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $target_file = "uploads/" . $_POST["leagueType"] . "/" . $_POST["teamName"] . "_" . basename($_FILES["teamFile"]["name"]);
    $file_ext = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
    $allowedExtensions = array("tem", "pdf");

    if (in_array($file_ext, $allowedExtensions) === false) {
        http_response_code(400);
        $response["message"] = "Only files with " . implode(" or ", $allowedExtensions) . " extensions are allowed to be uploaded.";
    } else {
        if (move_uploaded_file($_FILES["teamFile"]["tmp_name"], $target_file)) {
            http_response_code(200);
            $response["message"] = "The file has been uploaded sucessfully!";
        } else {
            http_response_code(500);
            $response["message"] = "There was an error uploading the file. Please try again.";
        }
    }
} else {
    http_response_code(405);
    $response["message"] = "Only POST requests are allowed.";
}

echo json_encode($response);
