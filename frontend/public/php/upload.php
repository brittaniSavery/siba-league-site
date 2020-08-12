<?php
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400'); // cache for 1 day
}

$response = array();

if($_SERVER["REQUEST_METHOD"] == "POST") {
    $target_dir = "uploads/";
    $target_file = $target_dir . basename($_FILES["teamFile"]["name"]);
    $file_ext = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
    $allowedExtensions = array("ddspb", "pdf");

    if ($_POST["teamPass"] != "11111") {
        $response["completed"] = false;
        $response["message"] = "The password is incorrect. Please double-check for typos.";
    } else if (in_array($file_ext, $allowedExtensions) === false) {
        $response["completed"] = false;
        $response["message"] = "Only files with " . implode(" or ", $allowedExtensions) . " extensions are allowed to be uploaded.";
    } else {
        if (move_uploaded_file($_FILES["teamFile"]["tmp_name"], $target_file)) {
            $response["completed"] = true;
            $response["message"] = "The file has been uploaded sucessfully!";
        } else {
            $response["completed"] = false;
            $response["message"] = "There was an error uploading the file. Please try again.";
        }
    }
} else {
    $response["completed"] = false;
    $response["message"] = "Only POST requests are allowed.";
}

echo json_encode($response);
