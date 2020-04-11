<?php
//header('Content-type:application/json;charset=utf-8');
include './simple_html_dom.php';

$response = array();

if (!isset($_GET['file'])) {
    http_response_code(400);
    $response["error"] = "The filename is required.";
} else {
    $file = htmlspecialchars($_GET['file']);
    $filename = "../files/generated/" . $file . '.html';

    if (!file_exists($filename)) {
        http_response_code(404);
        $response["error"] = "The file " . $file . " does not exist.";
    } else {
        $html = file_get_html($filename);
        var_dump($html);
    }
}

echo json_encode($response);
