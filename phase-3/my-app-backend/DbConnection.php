<?php
/*
 * DB Connection class
 * */
class DbConnection {
    private $server = 'localhost';
    private $username = 'admin';
    private $password = 'admin';
    private $db_name = 'react_phase3';

    public function connect() {
        try {
            $conn = new PDO("mysql:host=" . $this->server . ";dbname=" . $this->db_name, $this->username, $this->password);

            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            return $conn;
        } catch (\Exception $error) {
            echo "Database Error: " . $error->getMessage();
            return null;
        }
    }
}
?>
