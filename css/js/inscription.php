
<?php 
    if (isset($_POST['data'])) {
        $data = htmlspecialchars($_POST['data']);
        $fd = fopen ("inscription.csv", "a");
        if ($fd) {
            fwrite($fd, $data."\r\n");
            fclose($fd);
        }
    }
?>