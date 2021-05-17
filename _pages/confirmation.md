---
layout: page
title: Inscription prise en compte
published: true
permalink: test/confirmation.php
---

Votre inscription a été prise en compte.

Un email de confirmation devrait vous être envoyer dans les 24h.

This will be {%- raw %}<?php echo("parsed"); ?>{% endraw -%} correctly.

<!--
{% raw %}
    <?php 
        if (isset($_POST['send'])) {
            $periode = htmlspecialchars($_POST['periode']); 
            if ($periode == "autre") {
                $periode = htmlspecialchars($_POST['which-date']); 
            }

            $jour = "";
            if (isset($_POST['lundi'])) {
                $jour = $jour."lundi";
            } if (isset($_POST['mardi'])) {
                if ($jour == "") $jour = $jour."mardi";
                else $jour = $jour.", mardi";
            } if (isset($_POST['mercredi'])) {
                if ($jour == "") $jour = $jour."mercredi";
                else $jour = $jour.", mercredi";
            } if (isset($_POST['jeudi'])) {
                if ($jour == "") $jour = $jour."jeudi";
                else $jour = $jour.", jeudi";
            } if (isset($_POST['vendredi'])) {
                if ($jour == "") $jour = $jour."vendredi";
                else $jour = $jour.", vendredi";
            }

            $duree = htmlspecialchars($_POST['duree']); 
            if ($duree == "autre") {
                $duree = htmlspecialchars($_POST['which-duree']); 
            }

            $type = "";
            if (isset($_POST['techno'])) {
                $type = $type."technologique";
            } if (isset($_POST['science'])) {
                if ($type == "") $type = $type."scientifique";
                else $type = $type.", scientifique";
            } if (isset($_POST['autret'])) {
                if ($type == "") $type = $type.htmlspecialchars($_POST['which-type']);
                else $type = $type.", ".htmlspecialchars($_POST['which-type']);
            }

            $theme = htmlspecialchars($_POST['themes']); 

            $pres = "";
            if (htmlspecialchars($_POST['presentation']) == "yep") {
                $pres = "oui:".htmlspecialchars($_POST['which-pres']);
            } 

            $suggest = htmlspecialchars($_POST['suggest']); 
            
            $fd = fopen ("ans.csv", "a");
            if ($fd) {
                fwrite($fd, $periode.";".$jour.";".$duree.";".$type.";".$theme.";".$pres.";".$suggest."\r\n");
                fclose($fd);
            }
        } else if (isset($_POST['envoyer'])) {
            $conviv = htmlspecialchars($_POST['conviv']); 
            if ($conviv == "autre") {
                $conviv = htmlspecialchars($_POST['which-conviv']); 
            }

            $cafet = htmlspecialchars($_POST['cafet']); 
            if ($cafet == "autre") {
                $cafet = htmlspecialchars($_POST['which-cafet']); 
            }

            $table = htmlspecialchars($_POST['table']); 
            if ($table == "autre") {
                $table = htmlspecialchars($_POST['which-table']); 
            }

            $meuble = htmlspecialchars($_POST['which-meuble']); 

            $suggest = htmlspecialchars($_POST['suggest']); 


            $sport = htmlspecialchars($_POST['sport']); 
            if ($sport == "oui") {
                $sport = $sport.":".htmlspecialchars($_POST['which-sport']); 
            }

            $acts = htmlspecialchars($_POST['acts']); 
            if ($acts == "oui") {
                $acts = $acts.":".htmlspecialchars($_POST['which-acts']); 
            }

            $sortie = htmlspecialchars($_POST['sortie']); 
            if ($sortie == "oui") {
                $sortie = $sortie.":".htmlspecialchars($_POST['which-sortie']); 
            }


            $art = htmlspecialchars($_POST['art']); 
            if ($art == "oui") {
                $art = $art.":".htmlspecialchars($_POST['which-art']); 
            }

            $acta = htmlspecialchars($_POST['acta']); 
            if ($acta == "oui") {
                $acta = $acta.":".htmlspecialchars($_POST['which-acta']); 
            }

            $expo = htmlspecialchars($_POST['expo']); 
            if ($expo == "oui") {
                $expo = $expo.":".htmlspecialchars($_POST['which-expo']); 
            }


            $autre = "";
            if (isset($_POST['escape'])) {
                $autre = $autre."escape";
            } if (isset($_POST['jeux'])) {
                if ($autre == "") $autre = $autre."jeux de société";
                else $autre = $autre.", jeux";
            } if (isset($_POST['jeuxr'])) {
                if ($autre == "") $autre = $autre."jeux de rôle";
                else $autre = $autre.", jeux de rôle";
            } if (isset($_POST['jeuxv'])) {
                if ($autre == "") $autre = $autre."jeux vidéo";
                else $autre = $autre.", jeux vidéo";
            } if (isset($_POST['cirque'])) {
                if ($autre == "") $autre = $autre."cirque";
                else $autre = $autre.", cirque";
            } if (isset($_POST['karaoké'])) {
                if ($autre == "") $autre = $autre."karaoké";
                else $autre = $autre.", karaoké";
            } if (isset($_POST['autre'])) {
                if ($autre == "") $autre = $autre.htmlspecialchars($_POST['which-act']);
                else $autre = $autre.", ".htmlspecialchars($_POST['which-act']);
            }

            $fd = fopen ("ans2.csv", "a");
            if ($fd) {
                fwrite($fd, $conviv.";".$cafet.";".$table.";".$meuble.";".$suggest.";".$sport.";".$acts.";".$sortie.";".$art.";".$acta.";".$expo.";".$autre."\r\n");
                fclose($fd);
            }
        }
    ?>
{% endraw %}
-->