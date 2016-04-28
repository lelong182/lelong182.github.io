<?php

$rows = file('test.csv');
$data = [];

foreach ($rows as $row) {
	list($id, $name) = explode(',', $row);
	$data[] = trim(preg_replace('/\s\s+/', ' ', $name));
}

file_put_contents('json/company-keywords.json', json_encode($data, JSON_UNESCAPED_UNICODE));