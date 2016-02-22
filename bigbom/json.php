<?php

$type = $_GET['type'];
$isHtml = isset($_GET['html']);
$json = [];
if($isHtml) {
	echo file_get_contents('json/' . $type . '-html.json');
} else {
	echo file_get_contents('json/' . $type . '.json');
}