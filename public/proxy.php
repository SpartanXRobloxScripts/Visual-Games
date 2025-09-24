<?php
if (!isset($_GET['url'])) {
    echo "Missing url parameter";
    exit;
}

$url = $_GET['url'];

// Optional: validate URL
if (!filter_var($url, FILTER_VALIDATE_URL)) {
    echo "Invalid URL";
    exit;
}

// Fetch the remote page
$options = [
    "http" => [
        "header" => "User-Agent: Mozilla/5.0\r\n"
    ]
];
$context = stream_context_create($options);
$html = @file_get_contents($url, false, $context);

if ($html === false) {
    echo "Failed to fetch the URL";
    exit;
}

// Return the content
header("Content-Type: text/html");
echo $html;
?>
