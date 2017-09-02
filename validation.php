<?php
include 'validation.inc.php';

$value = $_GET['query'];
$formfield = $_GET['field'];

$validator = new Validation($value,$formfield);
$validator->validate();

