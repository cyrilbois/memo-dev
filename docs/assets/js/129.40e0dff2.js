(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{331:function(e,t,r){"use strict";r.r(t);var a=r(33),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"security-basics"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#security-basics"}},[e._v("#")]),e._v(" Security Basics")]),e._v(" "),r("h2",{attrs:{id:"services"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#services"}},[e._v("#")]),e._v(" Services")]),e._v(" "),r("p",[e._v("Les services de base de la sécurité")]),e._v(" "),r("h3",{attrs:{id:"authentification"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#authentification"}},[e._v("#")]),e._v(" Authentification")]),e._v(" "),r("p",[e._v("Identification = qui suis-je")]),e._v(" "),r("p",[e._v("Authentification = preuve de l'identification")]),e._v(" "),r("h4",{attrs:{id:"facteur-memoriel"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#facteur-memoriel"}},[e._v("#")]),e._v(" Facteur mémoriel")]),e._v(" "),r("p",[e._v("un secret connu de l'utilisateur seul, typiquement mot de passe ou clef privée")]),e._v(" "),r("h4",{attrs:{id:"facteur-materiel"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#facteur-materiel"}},[e._v("#")]),e._v(" Facteur matériel")]),e._v(" "),r("p",[e._v("un secret stocké sur un objet unique (clef usb, carte à puce, ...)")]),e._v(" "),r("h4",{attrs:{id:"facteur-corporel"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#facteur-corporel"}},[e._v("#")]),e._v(" Facteur corporel")]),e._v(" "),r("p",[e._v("authentification biométrique")]),e._v(" "),r("p",[e._v("basée sur des informations biologiques uniques (empreintes digitales, empreintes rétinienne, voix, ...)")]),e._v(" "),r("h4",{attrs:{id:"facteur-reactionnel"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#facteur-reactionnel"}},[e._v("#")]),e._v(" Facteur réactionnel")]),e._v(" "),r("p",[e._v("un geste unique reproductible seulement par la bonne personne (signature manuscrite)")]),e._v(" "),r("h4",{attrs:{id:"authentification-simple-vs-forte"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#authentification-simple-vs-forte"}},[e._v("#")]),e._v(" Authentification simple vs forte")]),e._v(" "),r("p",[e._v("Authentification simple = usage d'un seul facteur d'authentification.\nTrès courant sur internet, par exemple login + mdp")]),e._v(" "),r("p",[e._v("Authentification forte = concaténation de plusieurs facteurs par facteur mémoriel via mot de passe + facteur matérial via sms sur portable.\nPermet une protection supplémentaire face au phishing.")]),e._v(" "),r("h3",{attrs:{id:"integrite"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#integrite"}},[e._v("#")]),e._v(" Intégrité")]),e._v(" "),r("p",[e._v("garantie de non modification par un tiers d'un contenu")]),e._v(" "),r("h3",{attrs:{id:"confidentialite"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#confidentialite"}},[e._v("#")]),e._v(" Confidentialité")]),e._v(" "),r("p",[e._v("protection contre la lecture non autorisée par un tiers")]),e._v(" "),r("ul",[r("li",[e._v("confidentialité de la transmission (TLS par ex)")]),e._v(" "),r("li",[e._v("confidentialité de l'archive (contenu) (SMIME par ex)")])]),e._v(" "),r("h3",{attrs:{id:"non-repudiation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#non-repudiation"}},[e._v("#")]),e._v(" Non-répudiation")]),e._v(" "),r("p",[e._v("Un expéditeur ne doit pas pouvoir, par la suite, nier à tort avoir envoyé un message.")]),e._v(" "),r("h2",{attrs:{id:"terminologie"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#terminologie"}},[e._v("#")]),e._v(" Terminologie")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Texte en clair")]),e._v(" : c'est le message à protéger.")]),e._v(" "),r("li",[r("strong",[e._v("Texte chiffré")]),e._v(" : c'est le résultat du "),r("strong",[e._v("chiffrement")]),e._v(" du "),r("strong",[e._v("texte en clair")]),e._v(".")]),e._v(" "),r("li",[r("strong",[e._v("Chiffrement")]),e._v(" : c'est la méthode ou l'algorithme utilisé pour transformer un "),r("strong",[e._v("texte en clair")]),e._v(" en "),r("strong",[e._v("texte chiffré")]),e._v(".")]),e._v(" "),r("li",[r("strong",[e._v("Déchiffrement")]),e._v(" c'est la méthode ou l'algorithme utilisé pour transformer un "),r("strong",[e._v("texte chiffré")]),e._v(" en "),r("strong",[e._v("texte en clair")]),e._v(".")]),e._v(" "),r("li",[r("strong",[e._v("Clé")]),e._v(" : c'est le secret partagé utilisé pour "),r("strong",[e._v("chiffrer")]),e._v(" le "),r("strong",[e._v("texte en clair")]),e._v(" en "),r("strong",[e._v("texte chiffré")]),e._v(" et pour "),r("strong",[e._v("déchiffrer")]),e._v(" le "),r("strong",[e._v("texte chiffré")]),e._v(" en "),r("strong",[e._v("texte en clair")]),e._v(". On peut parfaitement concevoir un algorithme qui n'utilise pas de "),r("strong",[e._v("clé")]),e._v(", dans ce cas c'est l'algorithme lui-même qui constitue la "),r("strong",[e._v("clé")]),e._v(", et son principe ne doit donc en aucun cas être dévoilé.")]),e._v(" "),r("li",[r("strong",[e._v("Cryptographie")]),e._v(" : cette branche regroupe l'ensemble des méthodes qui permettent de "),r("strong",[e._v("chiffrer")]),e._v(" et de "),r("strong",[e._v("déchiffrer")]),e._v(" un "),r("strong",[e._v("texte en clair")]),e._v(" afin de le rendre incompréhensible pour quiconque n'est pas en possession de la "),r("strong",[e._v("clé")]),e._v(" à utiliser pour le "),r("strong",[e._v("déchiffrer")]),e._v(".")]),e._v(" "),r("li",[r("strong",[e._v("Cryptanalyse")]),e._v(" : c'est l'art de révéler les "),r("strong",[e._v("textes en clair")]),e._v(" qui ont fait l'objet d'un "),r("strong",[e._v("chiffrement")]),e._v(" sans connaître la "),r("strong",[e._v("clé")]),e._v(" utilisée pour "),r("strong",[e._v("chiffrer")]),e._v(" le "),r("strong",[e._v("texte en clair")]),e._v(".")]),e._v(" "),r("li",[r("strong",[e._v("Cryptologie")]),e._v(" : il s'agit de la science qui étudie les communications secrètes. Elle est composée de deux domaines d'étude complémentaires : la "),r("strong",[e._v("cryptographie")]),e._v(" et la "),r("strong",[e._v("cryptanalyse")]),e._v(".")]),e._v(" "),r("li",[r("strong",[e._v("Décrypter")]),e._v(" : c'est l'action de retrouver le "),r("strong",[e._v("texte en clair")]),e._v(" correspondant à un "),r("strong",[e._v("texte chiffré")]),e._v(" sans posséder la clé qui a servit au chiffrement. Ce mot ne devrait donc être employé que dans le contexte de la cryptanalyse.")]),e._v(" "),r("li",[r("strong",[e._v("Crypter")]),e._v(" : en relisant la définition du mot "),r("strong",[e._v("décrypter")]),e._v(", on peut se rendre compte que le mot crypter n'a pas de sens et que son usage devrait être oublié. Le mot "),r("strong",[e._v("cryptage")]),e._v(" n'a pas plus de sens non plus.")]),e._v(" "),r("li",[r("strong",[e._v("Coder, décoder")]),e._v(" : c'est une méthode ou un algorithme permettant de modifier la mise en forme d'un message sans introduire d'élément secret. Le Morse est donc un code puisqu'il transforme des lettres en trait et points sans notion de secret. L'ASCII est lui aussi un code puisqu'il permet de transformer une lettre en valeur binaire.")])]),e._v(" "),r("p",[e._v("src : résumé pris depuis "),r("a",{attrs:{href:"http://ram-0000.developpez.com/tutoriels/cryptographie/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Introduction à la Cryptographie"),r("OutboundLink")],1),e._v(" partie 2.")]),e._v(" "),r("h2",{attrs:{id:"histoire"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#histoire"}},[e._v("#")]),e._v(" Histoire")]),e._v(" "),r("h3",{attrs:{id:"periodes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#periodes"}},[e._v("#")]),e._v(" Périodes")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.ssi.gouv.fr/particulier/bonnes-pratiques/crypto-le-webdoc/cryptologie-art-ou-science-du-secret/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cryptologie : art ou science du secret ? - Une histoire de codes: www.ssi.gouv.fr"),r("OutboundLink")],1)]),e._v(" "),r("h4",{attrs:{id:"cryptographie-mecanique"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cryptographie-mecanique"}},[e._v("#")]),e._v(" Cryptographie mécanique")]),e._v(" "),r("p",[e._v("Usage de moyens mécaniques pour chiffrer un message.")]),e._v(" "),r("p",[r("strong",[e._v("La sécurité repose sur le secret de fabrication")]),e._v(".")]),e._v(" "),r("ul",[r("li",[e._v("Nabuchodonosor (-600)")])]),e._v(" "),r("blockquote",[r("p",[e._v("Aux alentours de -600, Nabuchodonosor, roi de Babylone, employait une méthode originale : il écrivait sur le crâne rasé de ses esclaves, attendait que leurs cheveux aient repoussé, et il les envoyait à ses généraux. Il suffisait ensuite de raser à nouveau le messager pour lire le texte. Il s'agit toutefois de stéganographie à proprement parler et non pas de cryptographie : l'information est cachée et non pas codée.")]),e._v(" "),r("p",[e._v("En utilisant cette technique, l'interception du message par un tiers est tout de suite remarquée.")])]),e._v(" "),r("ul",[r("li",[e._v("Le code de César (-50)")])]),e._v(" "),r("p",[e._v("substitution monoalphabétique. A -> D, B -> E, etc ...")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("...")])]),e._v(" "),r("li",[r("p",[e._v("Enigma")])])]),e._v(" "),r("blockquote",[r("p",[e._v("Le chiffrement effectué par la machine Enigma est à la fois simple et astucieux. Chaque lettre est remplacée par une autre, l'astuce est que la substitution change d'une lettre à l'autre. La machine est alimentée par une pile électrique. Quand on appuie sur une touche du clavier, un circuit électrique est fermé, et une lettre d'un tableau d'affichage s'allume qui indique par quelle substitution le chiffrement a été effectué.")])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Enigma_(machine)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Enigma : fr.wikipedia.org"),r("OutboundLink")],1)]),e._v(" "),r("h4",{attrs:{id:"cryptographie-mathematique"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cryptographie-mathematique"}},[e._v("#")]),e._v(" Cryptographie mathématique")]),e._v(" "),r("p",[r("strong",[e._v("La sécurité repose sur les mathématiques, tout est public")]),e._v(".")]),e._v(" "),r("p",[e._v("Mise en oeuvre du "),r("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Principe_de_Kerckhoffs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Principe de Kerckhoffs"),r("OutboundLink")],1),e._v(" :")]),e._v(" "),r("blockquote",[r("p",[e._v("La sécurité d’un système de chiffrement ne doit pas dépendre de la préservation du secret de l’algorithme. La sécurité ne repose que sur le secret de la clé.")])]),e._v(" "),r("p",[e._v("Il s'agit de la cryptographie qui utilise les mathématiques pour chiffrer un message. Cette cryptographie a commencé aux environs de la fin de la deuxième guerre mondiale et c'est celle que l'on utilise de nos jours.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Claude_Shannon",target:"_blank",rel:"noopener noreferrer"}},[e._v("Claude Shannon"),r("OutboundLink")],1),e._v(" est considéré par plusieurs comme le père de la cryptographie mathématique. Il a travaillé pendant plusieurs années dans les Laboratoires Bell où il a produit un article intitulé A mathematical theory of cryptography (Une théorie mathématique de la cryptographie). (1945)")]),e._v(" "),r("p",[e._v("À la fin des travaux de Shannon, les progrès de la cryptographie ont ralenti jusqu'à ce que Hellman et Diffie présentent leur document sur la cryptographie à clé publique.")]),e._v(" "),r("p",[e._v("Dans les années 1970, l'utilisation des ordinateurs a permis trois avancées majeures publiques (c'est-à-dire non secrètes et non contrôlées par les services de renseignement) :")]),e._v(" "),r("h5",{attrs:{id:"le-developpement-d-un-standard-public-de-chiffrement"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#le-developpement-d-un-standard-public-de-chiffrement"}},[e._v("#")]),e._v(" Le développement d'un standard public de chiffrement")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Data_Encryption_Standard",target:"_blank",rel:"noopener noreferrer"}},[e._v("Data Encryption Standard"),r("OutboundLink")],1),e._v(" (DES, 17 mars 1975)")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Advanced_Encryption_Standard",target:"_blank",rel:"noopener noreferrer"}},[e._v("Advanced Encryption Standard"),r("OutboundLink")],1),e._v(" (AES, 2001)")]),e._v(" "),r("h5",{attrs:{id:"le-developpement-de-l-echange-de-cles-diffie-hellman"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#le-developpement-de-l-echange-de-cles-diffie-hellman"}},[e._v("#")]),e._v(" Le développement de l'échange de clés Diffie-Hellman")]),e._v(" "),r("p",[e._v("Publication de l'article "),r("a",{attrs:{href:"http://www-ee.stanford.edu/~hellman/publications/24.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("New Directions in Cryptography"),r("OutboundLink")],1),e._v(" (Nouvelles directions en cryptographie) par "),r("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Whitfield_Diffie",target:"_blank",rel:"noopener noreferrer"}},[e._v("Whitfield Diffie"),r("OutboundLink")],1),e._v(" et "),r("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Martin_Hellman",target:"_blank",rel:"noopener noreferrer"}},[e._v("Martin Hellman"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h5",{attrs:{id:"le-developpement-du-chiffrement-asymetrique"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#le-developpement-du-chiffrement-asymetrique"}},[e._v("#")]),e._v(" Le développement du chiffrement asymétrique")]),e._v(" "),r("p",[e._v("Le chiffrement asymétrique utilise une paire de clés mathématiquement liées, dont chacune décrypte le cryptage effectué par l'autre. Ces algorithmes ont la propriété supplémentaire que l'une des clés appariées ne peut être déduite de l'autre par tout procédé connu autre que de très nombreux essais et erreurs. Un algorithme de ce type est appelé algorithme de chiffrement à clé publique ou algorithme à clé asymétrique.")]),e._v(" "),r("p",[e._v("Le chiffrement RSA (nommé par les initiales de ses trois inventeurs) est un algorithme de cryptographie asymétrique, décrit en 1977 par "),r("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Ronald_Rivest",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ronald Rivest"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Adi_Shamir",target:"_blank",rel:"noopener noreferrer"}},[e._v("Adi Shamir"),r("OutboundLink")],1),e._v(" et "),r("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Leonard_Adleman",target:"_blank",rel:"noopener noreferrer"}},[e._v("Leonard Adleman"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h5",{attrs:{id:"fonction-de-hashage-message-digest-condensat"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fonction-de-hashage-message-digest-condensat"}},[e._v("#")]),e._v(" Fonction de hashage (message digest, condensat)")]),e._v(" "),r("p",[e._v("Le hachage est une fonction appliquée à une chaîne de caractères ou de bits pour produire une valeur de hachage (une suite de bits). La valeur de hachage est une empreinte numérique du message. La valeur de hachage est également appelée message digest ou somme de contrôle. La fonction de hachage fournit une sortie de longueur fixe : quelle que soit la longueur du message qu'on lui soumet, la fonction de hachage produit toujours une valeur de hachage contenant le même nombre de bits.")]),e._v(" "),r("p",[e._v("Une fonction de hachage cryptographique est une fonction à sens unique, c'est-à-dire une fonction dont l'inverse est impossible à calculer, même en utilisant une grande puissance de calcul durant une longue période de temps.")]),e._v(" "),r("p",[e._v("Permet :")]),e._v(" "),r("ul",[r("li",[e._v("vérification de l'intégrité d'un message")]),e._v(" "),r("li",[e._v("signature électronique quand combinée à algorithme de chiffrement asymétrique")]),e._v(" "),r("li",[e._v("stockage d'une représentation sécurisée d'un mot de passe ("),r("a",{attrs:{href:"https://fr.wikipedia.org/wiki/PBKDF2",target:"_blank",rel:"noopener noreferrer"}},[e._v("PBKDF2"),r("OutboundLink")],1),e._v(")")])]),e._v(" "),r("h4",{attrs:{id:"cryptographie-quantique"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cryptographie-quantique"}},[e._v("#")]),e._v(" Cryptographie quantique")]),e._v(" "),r("p",[e._v("Il s'agit de la cryptographie dont les bases reposent sur la physique quantique. Nous sommes en train de la voir émerger de nos jours et nul doute qu'elle ne remplace dans les années qui viennent la cryptographie basée sur les mathématiques.")]),e._v(" "),r("p",[e._v("N'est pas encore exploitable en production. Horizon de recherche.")]),e._v(" "),r("h2",{attrs:{id:"cryptographie-moderne"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cryptographie-moderne"}},[e._v("#")]),e._v(" Cryptographie moderne")]),e._v(" "),r("p",[e._v("Elle repose sur 3 facteurs :")]),e._v(" "),r("ul",[r("li",[e._v("La qualité des algorithmes")])]),e._v(" "),r("p",[e._v("La qualité d’un algorithme repose sur sa fiabilité mathématique et surtout pas sur le secret de sa réalisation")]),e._v(" "),r("ul",[r("li",[e._v("Les implémentations des algorithmes")])]),e._v(" "),r("p",[e._v("Il est souvent bien plus facile de contourner une mauvaise implémentation que d’attaquer un algorithme")]),e._v(" "),r("ul",[r("li",[e._v("La gestion des clefs")])]),e._v(" "),r("p",[e._v("Une faille dans la gestion des clefs peut remettre en cause la fiabilité de l’ensemble")]),e._v(" "),r("h3",{attrs:{id:"algorithmes-de-base"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#algorithmes-de-base"}},[e._v("#")]),e._v(" Algorithmes de base")]),e._v(" "),r("h4",{attrs:{id:"fonction-de-hashage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fonction-de-hashage"}},[e._v("#")]),e._v(" Fonction de hashage")]),e._v(" "),r("p",[e._v("CHECKSUM, CRC, MD5")]),e._v(" "),r("p",[e._v("Famille SHA1")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://shattered.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Attention SHA1 a été cassé"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("Famille SHA2")]),e._v(" "),r("p",[e._v("Famille SHA3")]),e._v(" "),r("h4",{attrs:{id:"chiffrement-symetrique"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#chiffrement-symetrique"}},[e._v("#")]),e._v(" Chiffrement symétrique")]),e._v(" "),r("ul",[r("li",[e._v("Chiffrement et déchiffrement rapide.")]),e._v(" "),r("li",[e._v("Nécessite un protocole d'échange de clef sûr.")])]),e._v(" "),r("h5",{attrs:{id:"des"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#des"}},[e._v("#")]),e._v(" DES")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Data_Encryption_Standard",target:"_blank",rel:"noopener noreferrer"}},[e._v("Data Encryption Standard"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("Clef de 56 bits.")]),e._v(" "),r("p",[e._v("Standard de 1977")]),e._v(" "),r("h5",{attrs:{id:"_3des"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3des"}},[e._v("#")]),e._v(" 3DES")]),e._v(" "),r("p",[e._v("3 passes dans DES en utilisant 2 ou 3 clefs distinctes (112 ou 168 bits)")]),e._v(" "),r("h5",{attrs:{id:"idea"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#idea"}},[e._v("#")]),e._v(" IDEA")]),e._v(" "),r("p",[e._v("International Data Encryption Algorithm")]),e._v(" "),r("h5",{attrs:{id:"aes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#aes"}},[e._v("#")]),e._v(" AES")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Advanced_Encryption_Standard",target:"_blank",rel:"noopener noreferrer"}},[e._v("Advanced Encryption Standard"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("Standard actuel. Publié en 2001.")]),e._v(" "),r("h4",{attrs:{id:"chiffrement-asymetrique"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#chiffrement-asymetrique"}},[e._v("#")]),e._v(" Chiffrement asymétrique")]),e._v(" "),r("ul",[r("li",[e._v("Introduit par Diffie et Hellman en 1976")]),e._v(" "),r("li",[e._v("Clef de chiffrement différente de clef de déchiffrement")]),e._v(" "),r("li",[e._v("Couple de clefs créées ensemble (une clef privée, une publique)")]),e._v(" "),r("li",[e._v("Impossible de découvrir une clef à partir de l'autre")]),e._v(" "),r("li",[e._v("Tout texte chiffré avec une clef est déchiffré avec l'autre et seulement avec l'autre")])]),e._v(" "),r("h5",{attrs:{id:"dh"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dh"}},[e._v("#")]),e._v(" DH")]),e._v(" "),r("h5",{attrs:{id:"rsa"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rsa"}},[e._v("#")]),e._v(" RSA")]),e._v(" "),r("ul",[r("li",[e._v("Rivest Shamir Adelman.")]),e._v(" "),r("li",[e._v("Créé en 1976, domaine public depuis septembre 2000.")]),e._v(" "),r("li",[e._v("Cf "),r("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Nombre_premier",target:"_blank",rel:"noopener noreferrer"}},[e._v("nombre premier : fr.wikipedia.org"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("100 à 1000 fois plus lent que le chiffrement symétrique")])]),e._v(" "),r("p",[e._v("Robustesse fondée sur :")]),e._v(" "),r("ul",[r("li",[e._v("non divulgation de la clef privée.")]),e._v(" "),r("li",[e._v("il est très difficile de décomposer en facteurs premiers un nombre (si le nombre est suffisamment grand).")]),e._v(" "),r("li",[e._v("absence de méthode mathématique pour déduire la clef privée à partir de la clef publique.")])]),e._v(" "),r("p",[e._v("Dangers :")]),e._v(" "),r("ul",[r("li",[e._v("augmentation puissance de calcul (résolu en augmentant la taille des clefs)")]),e._v(" "),r("li",[e._v("avancées théoriques éventuelles (recherche mathématique)")]),e._v(" "),r("li",[e._v("cryptographie quantique (inexploitable en l'état)")])]),e._v(" "),r("h3",{attrs:{id:"attaques"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#attaques"}},[e._v("#")]),e._v(" Attaques")]),e._v(" "),r("h4",{attrs:{id:"force-brute"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#force-brute"}},[e._v("#")]),e._v(" Force brute")]),e._v(" "),r("p",[e._v("Essayer toutes les clefs possibles.")]),e._v(" "),r("p",[e._v("Principal danger : l’augmentation de la puissance des machines.")]),e._v(" "),r("p",[e._v("Parades : augmenter la longueur des clefs, choisir des algorithmes coûteux")]),e._v(" "),r("p",[e._v("En 97, 3h pour casser une clef de 40 bits.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.nextinpact.com/news/87466-quand-chiffrement-donnees-est-mis-a-mal-par-mathematiciens.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("Quand le chiffrement des données est mis à mal par des mathématiciens : nextinpact.com"),r("OutboundLink")],1)]),e._v(" "),r("h4",{attrs:{id:"analyse-statistique"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#analyse-statistique"}},[e._v("#")]),e._v(" Analyse statistique")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("basée sur les propriétés des messages en clair (exemple : le «e» représente 14.5 % des caractères utilisés dans un texte en français).")])]),e._v(" "),r("li",[r("p",[e._v("La méthode utilisée par Morse pour optimiser son code est dépassée. Il existe des tables statistiques pour des motifs de plusieurs lettres.")])]),e._v(" "),r("li",[r("p",[e._v("Parade : utiliser un algorithme tel que le cryptogramme ait une entropie maximale.")])])]),e._v(" "),r("h4",{attrs:{id:"attaque-a-texte-en-clair-connu"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#attaque-a-texte-en-clair-connu"}},[e._v("#")]),e._v(" Attaque à texte en clair connu")]),e._v(" "),r("p",[e._v("L’attaquant connaît un message en clair et son équivalent chiffré. Il tente d’en déduire la clef.")]),e._v(" "),r("h4",{attrs:{id:"attaque-de-l-algorithme"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#attaque-de-l-algorithme"}},[e._v("#")]),e._v(" Attaque de l’algorithme")]),e._v(" "),r("p",[e._v("Par exemple, pour les algorithmes qui génèrent une clef secrète aléatoirement, il arrive que l’aléa ne soit pas parfait et donc reproductible par l’attaquant.")]),e._v(" "),r("h4",{attrs:{id:"attaque-sur-l-usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#attaque-sur-l-usage"}},[e._v("#")]),e._v(" Attaque sur l'usage")]),e._v(" "),r("p",[e._v("Le plus souvent les attaques exploitent le mode d’usage de l’algorithme de chiffrement, pas sur le chiffrement lui même. Exemples :")]),e._v(" "),r("ul",[r("li",[e._v("Analyse du nombre de caractères envoyés et de l’écho du serveur pour calculer la longueur du mot de passe (pas d’écho pendant la frappe du mot de passe)")]),e._v(" "),r("li",[e._v("Analyse statistique de la vitesse de frappe des caractères en fonction de leur position sur le clavier !")])]),e._v(" "),r("h3",{attrs:{id:"pki"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pki"}},[e._v("#")]),e._v(" PKI")]),e._v(" "),r("h4",{attrs:{id:"pourquoi"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pourquoi"}},[e._v("#")]),e._v(" Pourquoi ?")]),e._v(" "),r("p",[e._v("Postulat de départ : Chaque utilisateur a une paire de clef.")]),e._v(" "),r("p",[e._v("Questions :")]),e._v(" "),r("ul",[r("li",[e._v("La clé est-elle bien celle appartenant à la personne avec qui les échanges sont envisagés ?")]),e._v(" "),r("li",[e._v("Le possesseur de cette clé est-il digne de confiance ?")]),e._v(" "),r("li",[e._v("La clé est-elle toujours valide ?")])]),e._v(" "),r("p",[e._v("Un "),r("strong",[e._v("certificat")]),e._v(" permet de répondre à ces questions.")]),e._v(" "),r("p",[e._v("En combinant signatures électroniques et certificats, on obtient une autorité de confiance (Autorité de Certification, AC) qui certifie les paires de clefs.")]),e._v(" "),r("p",[e._v("Une AC est un tiers de confiance.")]),e._v(" "),r("p",[e._v("Une PKI est l'ensemble des matériels, logiciels, personnes, règles et procédures nécessaire à une Autorité de Certification pour créer, gérer et distribuer des certificats X509.")]),e._v(" "),r("h4",{attrs:{id:"fonctions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fonctions"}},[e._v("#")]),e._v(" Fonctions")]),e._v(" "),r("ul",[r("li",[e._v("Emettre et révoquer des certificats")]),e._v(" "),r("li",[e._v("Publier les certificats dans un annuaire")]),e._v(" "),r("li",[e._v("Eventuellement fournir un service de séquestre et de recouvrement de clés privées")]),e._v(" "),r("li",[e._v("...")])]),e._v(" "),r("p",[e._v("Exemple : "),r("a",{attrs:{href:"https://www.ssi.gouv.fr/entreprise/qualification/metapki-en-version-9-2-5/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MetaPKI en version 9.2.5 : www.ssi.gouv.fr"),r("OutboundLink")],1)]),e._v(" "),r("h4",{attrs:{id:"pgp-ring-of-trust"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pgp-ring-of-trust"}},[e._v("#")]),e._v(" PGP ring of trust")]),e._v(" "),r("h4",{attrs:{id:"certificats-x509"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#certificats-x509"}},[e._v("#")]),e._v(" Certificats X509")]),e._v(" "),r("h3",{attrs:{id:"applications"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#applications"}},[e._v("#")]),e._v(" Applications")]),e._v(" "),r("h4",{attrs:{id:"ssl-tls"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ssl-tls"}},[e._v("#")]),e._v(" SSL/TLS")]),e._v(" "),r("h5",{attrs:{id:"tls-1-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tls-1-3"}},[e._v("#")]),e._v(" TLS 1.3")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.developpez.net/forums/d1834127/webmasters-developpement-web/general-conception-web/securite/protocole-tls-1-3-approuve-l-ietf/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Le protocole TLS 1.3 approuvé par l'IETF"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://ldapwiki.com/wiki/RSA%20key-exchange",target:"_blank",rel:"noopener noreferrer"}},[e._v("RSA key exchange is deprecated in TLS 1.3"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[r("a",{attrs:{href:"http://ldapwiki.com/wiki/Diffie-Hellman%20or%20RSA",target:"_blank",rel:"noopener noreferrer"}},[e._v("Diffie-Hellman or RSA"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("We want "),r("a",{attrs:{href:"http://ldapwiki.com/wiki/Perfect%20Forward%20Secrecy",target:"_blank",rel:"noopener noreferrer"}},[e._v("Perfect Forward Secrecy"),r("OutboundLink")],1),e._v(" :")]),e._v(" "),r("p",[e._v("In 2018, the private key is used for authentifcation AND for encryption of the session key. If authentication only matters while the communication is established, encryption should last for years. If someone capture lot's of trafic from a target, it could used them to find the private key and then weak the encryption.")]),e._v(" "),r("p",[e._v("Perfect Forward Secrecy assumes each exchanged key, the Authentication and Encryption keys, are independent and therefore a compromised key cannot be used to compromise another one.")]),e._v(" "),r("p",[e._v("They generate ephemeral keys at each communication session.")]),e._v(" "),r("p",[e._v("Diffie Hellman is a lot faster and reliable then RSA to generate epheral keys so DH is preferred.")]),e._v(" "),r("h5",{attrs:{id:"corporate-proxy-man-in-the-middle"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#corporate-proxy-man-in-the-middle"}},[e._v("#")]),e._v(" Corporate Proxy Man In The Middle")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://security.stackexchange.com/a/101726",target:"_blank",rel:"noopener noreferrer"}},[e._v("Is it possible for corporation to intercept and decrypt SSL/TLS traffic?"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://security.stackexchange.com/questions/2914/can-my-company-see-what-https-sites-i-went-to",target:"_blank",rel:"noopener noreferrer"}},[e._v("Can my company see what HTTPS sites I went to?"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("The idea is simple, the company :")]),e._v(" "),r("ul",[r("li",[e._v("generate a self signed root certificate")]),e._v(" "),r("li",[e._v("install it on each browser employee")]),e._v(" "),r("li",[e._v("deploy a proxy between internet and LAN")]),e._v(" "),r("li",[e._v("the proxy intercept all https traffic, when a client request a certificate, it give the one signed by the company self signed and then open the regular connexion with the legacy website")])]),e._v(" "),r("h4",{attrs:{id:"signature-electroniques"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#signature-electroniques"}},[e._v("#")]),e._v(" Signature Electroniques")]),e._v(" "),r("p",[e._v("Une fonction de hashage est appliquée sur le document à signer. Elle permet d'obtenir son empreinte numérique (unique pour ce document).")]),e._v(" "),r("p",[e._v("Cette empreinte (ou condensat, ou message digest) est ensuite chiffrée avec la clef privée du signataire.")]),e._v(" "),r("p",[e._v("Le document est alors signé.")]),e._v(" "),r("p",[e._v("N'importe quelle personne peut vérifier la signature, il lui suffit de :")]),e._v(" "),r("ul",[r("li",[e._v("hasher le document avec le même algorithme de hashage")]),e._v(" "),r("li",[e._v("déchiffrer la signature avec la clef publique de la personne prétendant avoir signé le document")]),e._v(" "),r("li",[e._v("comparer les deux empreintes numériques, si elles sont identiques, alors le signataire est considéré comme authentique.")])]),e._v(" "),r("p",[e._v("Vérifie également l'intégrité par ricochet.")]),e._v(" "),r("h4",{attrs:{id:"smime"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#smime"}},[e._v("#")]),e._v(" SMIME")]),e._v(" "),r("h4",{attrs:{id:"oauth"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#oauth"}},[e._v("#")]),e._v(" OAuth")]),e._v(" "),r("h2",{attrs:{id:"sources"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sources"}},[e._v("#")]),e._v(" sources")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://ram-0000.developpez.com/tutoriels/cryptographie/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Introduction à la Cryptographie : ram-0000.developpez.com"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://ssi.ac-strasbourg.fr/bonnes-pratiques/recommandations/lidentification-et-lauthentification/",target:"_blank",rel:"noopener noreferrer"}},[e._v("L'identification et l'authentification : ssi.ac-strasbourg.fr"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"actualite-debats"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#actualite-debats"}},[e._v("#")]),e._v(" actualite / debats")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.developpez.net/forums/d1712341/systemes/securite/telegram-renseignement-us-tente-soudoyer-developpeurs-affaiblir-chiffrement/#post9376211",target:"_blank",rel:"noopener noreferrer"}},[e._v("Telegram : les services de renseignement US ont tenté de soudoyer ses développeurs pour affaiblir leur chiffrement"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://www.lefigaro.fr/secteur/high-tech/la-ville-de-baltimore-est-l-otage-d-une-cyberattaque-depuis-trois-semaines-20190527",target:"_blank",rel:"noopener noreferrer"}},[e._v("La ville de Baltimore est l’otage d’une cyberattaque depuis trois semaines - www.lefigaro.fr - 20190528"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=i.exports}}]);