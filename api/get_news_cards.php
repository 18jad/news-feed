<?php

// connecting to database
require "./connection.php";

// selecting everything from news card table
$cards_sql = "SELECT * FROM news_card";
$cards_query = $db->prepare($cards_sql);
$cards_query->execute();
$query_result = $cards_query->get_result();

$result = [];

// storing result inside array[cards]
while ($row = $query_result->fetch_assoc()) {
    $result["cards"][] = ["new_id" => $row["news_id"], "news_image" => $row["news_image"], "news_title" => $row["news_title"], "news_description" => $row["news_description"]];
}

// echo the result in json format
echo json_encode($result);
