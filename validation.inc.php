<?php

class Validation
{
    private $value;
    private $formfield;

    public function __construct($value, $formfield)
    {
        $this->value = $value;
        $this->formfield = $formfield;
    }

    public function validate()
    {
        switch($this->formfield){
            case "username": {
                if (strlen($this->value) < 4) {
                    echo "Must be 3+ letters";
                } else {
                    echo "<span>Valid</span>";
                }
                break;
            }
            case "email": {
                if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $this->value)) {
                    echo "Invalid email";
                } else {
                    echo "<span>Valid</span>";
                }
                break;
            }
            case "telephone":{
                if (!preg_match("^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$^", $this->value)) {
                    echo "uncorrect number!";
                } else {
                    echo "<span>Valid</span>";
                }
                break;
            }
            default: exit;
        }
    }
}