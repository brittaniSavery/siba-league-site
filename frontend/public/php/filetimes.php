<?php

if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
}
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Max-Age: 86400'); // cache for 1 day
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    date_default_timezone_set('UTC');

    if (!$_GET["league"]) {
        http_response_code(400);
        echo "Missing 'league' parameter";
        return;
    }

    $response = (object) [];
    $dir = $_GET["league"];
    $file = $dir === "pro" ? "siba" : "sicba";

    $response->league = filemtime(dirname(__DIR__) . "/files/" . $dir . "/" . strtoupper($file) . ".zip");
    $response->graphics = filemtime(dirname(__DIR__) . "/files/" . $dir . "/" . $file . "graphics.zip");

/*     $response->league = date("Y-m-d H:i:s T", $league);
$response->graphics = date("Y-m-d H:i:s T", $graphics); */

    echo json_encode($response);

} else {
    http_response_code(405); //Method Not Allowed
}