<?php 
    if (isset($_POST['data'])) {
        $data = $_POST['data'];
        $entete = $_POST['header'];
        $filename = 'inscription.csv';
        if (file_exists($filename)) {
            $fd = fopen($filename, "a");
            fputs($fd, "$data"."\n");
            fclose($fd);
        } else {
            $fd = fopen($filename, "w");
            if ($fd) {
                fputs($fd, "$entete"."\n");
                fputs($fd, "$data"."\n");
            }
        }
    }
?>