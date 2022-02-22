<?php
class Employee{
    private $id;
    private $firstName;
    public $lastName;
    private $datedenaissence;
    
    public function getId(){
        return $this->id;
    }
    public function setId($value){
        $this->id =$value;
    }
    public function obtenirFirstName(){
        return $this ->firstName;
    }
    public function definirFirstName($firstName){
        $this->firstName = $firstName;
    }
    // // public function getLastname(){
    // //     return $this->lastname;
    // // }
    // // public function setLastName($value){
    // //     $this->lastname = ($value);
    // }
    public function getDatedenaissence(){
        return $this->datedenaissence;
    }
    public function setDatedenaissence($value){
        $this->datedenaissence = $value;
    }
}

