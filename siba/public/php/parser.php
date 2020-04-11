<?php
//header('Content-type:application/json;charset=utf-8');

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
        //Switching this on to avoid warnings associated with invalid HTML
        libxml_use_internal_errors(true);

        $html = file_get_contents($filename);
        $doc = new DOMDocument();
        $doc->loadHTML($html);
        $xpath = new DOMXPath($doc);
        $infoTable = $xpath->query("//table[@style]")->item(0);
        var_dump($infoTable);
    }
}

//echo json_encode($response);
