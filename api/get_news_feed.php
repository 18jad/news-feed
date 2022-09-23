<?php

// connecting to database
require "./connection.php";

// get news feed by user inputed id
$id = $_GET['news_id'];

// selecting everything from news feed table by id condition
$cards_sql = "SELECT * FROM news_feed WHERE news_id='$id'";
$cards_query = $db->prepare($cards_sql);
$cards_query->execute();
$query_result = $cards_query->get_result();

$result = [];

// storing result inside array[cards]
while ($row = $query_result->fetch_assoc()) {
    $result["cards"][] = ["new_id" => $row["news_id"], "news_title" => $row["news_title"], "news_body" => $row["news_body"], "author" => $row["author"], "date_posted" => $row["date_posted"]];
}

// check if news id is available
if (empty($result)) {
    echo json_encode(["error" => "News not found"]);
} else {
    // echo the result in json format
    echo json_encode($result);
}
