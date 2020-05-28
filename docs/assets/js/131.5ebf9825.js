(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{447:function(e,s,t){"use strict";t.r(s);var a=t(33),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"security-webapp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#security-webapp"}},[e._v("#")]),e._v(" security webapp")]),e._v(" "),t("h2",{attrs:{id:"top-10-owasp-10-risques-de-securite-les-plus-critiques"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#top-10-owasp-10-risques-de-securite-les-plus-critiques"}},[e._v("#")]),e._v(" Top 10 OWASP (10 risques de sécurité les plus critiques)")]),e._v(" "),t("h3",{attrs:{id:"_1-injection"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-injection"}},[e._v("#")]),e._v(" 1 - Injection")]),e._v(" "),t("p",[e._v("SQL, LDAP, XPath, Parseur XML, ...")]),e._v(" "),t("h4",{attrs:{id:"exemple-avec-sql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exemple-avec-sql"}},[e._v("#")]),e._v(" Exemple avec SQL")]),e._v(" "),t("p",[e._v("Saisir dans un champ de saisie de mot de passe :")]),e._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("e' or '1' = '1\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h4",{attrs:{id:"exemple-avec-xml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exemple-avec-xml"}},[e._v("#")]),e._v(" Exemple avec XML")]),e._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token prolog"}},[e._v('<?xml version="1.0" encoding="ISO-8859-1"?>')]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token doctype"}},[e._v('<!DOCTYPE foo [\n        <!ELEMENT foo ANY >\n        <!ELEMENT xxe SYSTEM "file:///etc/passwd" >]>')]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("<"),t("span",{pre:!0,attrs:{class:"token entity",title:"&xxe;"}},[e._v("&xxe;")]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("h3",{attrs:{id:"_2-violation-de-gestion-d-authentification-et-de-session"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-violation-de-gestion-d-authentification-et-de-session"}},[e._v("#")]),e._v(" 2 - Violation de gestion d'authentification et de session")]),e._v(" "),t("p",[e._v("L'authentification devrait être déléguée à un service tiers (Kerberos, OAuth, JWT, ...)")]),e._v(" "),t("p",[e._v("La session devrait être gérée via un cookie :")]),e._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('set-cookie:MonCookie="XXXX";Version=1;Secure;HttpOnly\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h3",{attrs:{id:"_3-exposition-de-donnees-sensibles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-exposition-de-donnees-sensibles"}},[e._v("#")]),e._v(" 3 - Exposition de données sensibles")]),e._v(" "),t("p",[e._v("Protection par cryptographie.")]),e._v(" "),t("p",[e._v("Analyse des données (stockées ou pas)")]),e._v(" "),t("p",[e._v("Mot de passe : "),t("code",[e._v("bcrypt")]),e._v(", "),t("code",[e._v("PBKDF2")]),e._v(", "),t("code",[e._v("scrypt")]),e._v(" (hash solo trop faible)")]),e._v(" "),t("h3",{attrs:{id:"_4-cross-site-scripting-xss"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-cross-site-scripting-xss"}},[e._v("#")]),e._v(" 4 - Cross-Site Scripting (XSS)")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cross-site Scripting (XSS) : owasp.org"),t("OutboundLink")],1)]),e._v(" "),t("blockquote",[t("p",[e._v("Cross-site scripting attacks may occur anywhere that possibly malicious users are allowed to post unregulated material to a trusted web site for the consumption of other valid users.")]),e._v(" "),t("p",[e._v("The most common example can be found in bulletin-board web sites which provide web based mailing list-style functionality.")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.owasp.org/index.php/XSS_%28Cross_Site_Scripting%29_Prevention_Cheat_Sheet",target:"_blank",rel:"noopener noreferrer"}},[e._v("XSS (Cross Site Scripting) Prevention Cheat Sheet : owasp.org"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("AngularJS gère en natif ce problème (sanitize).")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://html5sec.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vectors making use of HTML5 features"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"_5-references-directes-non-securisees"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-references-directes-non-securisees"}},[e._v("#")]),e._v(" 5 - références directes non sécurisées")]),e._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("http://example.com/app/accountInfo?acct=notmyacct\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Pour taper sur un autre compte par exemple.")]),e._v(" "),t("p",[e._v("Autre exemple, usage d'autoincrements SQL comme ID REST.")]),e._v(" "),t("p",[e._v("Applicativement il faut s'assurer qu'un user ne reçoivent que les données auxquelles il a accès.")]),e._v(" "),t("p",[e._v("Remplacer également les id SQL par des uuid.")]),e._v(" "),t("h3",{attrs:{id:"_6-mauvaise-config-secu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-mauvaise-config-secu"}},[e._v("#")]),e._v(" 6 - mauvaise config secu")]),e._v(" "),t("p",[e._v("Taf des devops. Config OS, middleware, réseau, remplacement des mdp par défaut, etc ...")]),e._v(" "),t("p",[e._v("Question dev attention aux logs.")]),e._v(" "),t("h3",{attrs:{id:"_7-manque-de-controle-d-acces-au-niveau-fonctionnel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-manque-de-controle-d-acces-au-niveau-fonctionnel"}},[e._v("#")]),e._v(" 7 - Manque de contrôle d'accès au niveau fonctionnel")]),e._v(" "),t("p",[e._v("RBAC à impl. Un user lambda ne doit pas accéder à l'administration de l'app.")]),e._v(" "),t("h3",{attrs:{id:"_8-falsification-de-requete-interdite-csrf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-falsification-de-requete-interdite-csrf"}},[e._v("#")]),e._v(" 8 - Falsification de requête interdite (CSRF)")]),e._v(" "),t("ul",[t("li",[e._v('vérifier que la requête est "Same Origin" (headers standards)')]),e._v(" "),t("li",[e._v("config & impl CORS")]),e._v(" "),t("li",[e._v("utiliser un token spécifique (Double cookie defense via XSRF-TOKEN)")])]),e._v(" "),t("p",[e._v("Exemple d'attaque :")]),e._v(" "),t("ul",[t("li",[t("em",[e._v("user")]),e._v(" se connecte sur le site de sa banque utilisant un cookie pour gérer la session")]),e._v(" "),t("li",[t("em",[e._v("user")]),e._v(" effectue quelques actions (check des comptes etc ...)")]),e._v(" "),t("li",[t("em",[e._v("user")]),e._v(" "),t("strong",[e._v("ne se delog pas")])]),e._v(" "),t("li",[t("em",[e._v("user")]),e._v(" clique sur un lien lolcat reçu en mail. La page web chargée effectue un call sur le site\nde la banque de "),t("em",[e._v("user")]),e._v(" pour effectuer une transaction. Si CORS n'est pas configuré par la banque\nalors le navigateur transmettra le cookie de session toujours valide avec le call du site frauduleux\net sa transaction sera acceptée.")])]),e._v(" "),t("p",[e._v("CORS configuration is "),t("strong",[e._v("server-side")]),e._v(".")]),e._v(" "),t("p",[e._v("A server using "),t("code",[e._v('"Access-Control-Allow-Origin: *"')]),e._v(" allows all domains, it is "),t("strong",[e._v("very bad")]),e._v(".")]),e._v(" "),t("p",[t("a",{attrs:{href:"http://stackoverflow.com/questions/12001269/what-are-the-security-risks-of-setting-access-control-allow-origin",target:"_blank",rel:"noopener noreferrer"}},[e._v("What are the security risks of setting Access-Control-Allow-Origin? : stackoverflow.com"),t("OutboundLink")],1)]),e._v(" "),t("blockquote",[t("p",[e._v("By responding with "),t("code",[e._v("Access-Control-Allow-Origin: *")]),e._v(", the requested resource allows sharing with every origin. This basically means that any site can send an XHR request to your site and access the server’s response which would not be the case if you hadn’t implemented this CORS response.")]),e._v(" "),t("p",[e._v("So any site can make a request to your site on behalf of their visitors and process its response. If you have something implemented like an authentication or authorization scheme that is based on something that is automatically provided by the browser (cookies, cookie-based sessions, etc.), the requests triggered by the third party sites will use them too.")])]),e._v(" "),t("h3",{attrs:{id:"_9-utilisation-de-composants-avec-des-vulnerabilites-connues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-utilisation-de-composants-avec-des-vulnerabilites-connues"}},[e._v("#")]),e._v(" 9 - Utilisation de composants avec des vulnérabilités connues")]),e._v(" "),t("p",[e._v("OWASP publie un composant MAVEN nommé "),t("a",{attrs:{href:"https://www.owasp.org/index.php/OWASP_Dependency_Check",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("dependency-check-maven")]),t("OutboundLink")],1),e._v(" pour check les vulnérabilités de son projet par ex.")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://techbeacon.com/13-tools-checking-security-risk-open-source-dependencies-0",target:"_blank",rel:"noopener noreferrer"}},[e._v("13 tools for checking the security risk of open-source dependencies"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"_10-redirections-et-renvois-non-valides"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-redirections-et-renvois-non-valides"}},[e._v("#")]),e._v(" 10 - redirections et renvois non validés")]),e._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("http://www.example.com/redirect.jsp?url=evil.com\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Par exemple si on permet aux users la saisie de liens (forum par ex), difficile de valider le lien de redirection.")]),e._v(" "),t("h2",{attrs:{id:"autres-attaques"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#autres-attaques"}},[e._v("#")]),e._v(" autres attaques")]),e._v(" "),t("h3",{attrs:{id:"redos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redos"}},[e._v("#")]),e._v(" ReDoS")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS",target:"_blank",rel:"noopener noreferrer"}},[e._v("Regular expression Denial of Service - ReDoS"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("En fonction du pattern de la regex et de l'input donnée par l'utilisateur, il est possible de générer un cout CPU disproportionné. S'il y a plusieurs serveurs qui se passent la data et qu'ils checkent tous la data avec une regex, l'attaque peut toucher plusieurs machines. Contrairement à une DDoS classique dont le but est de noyer le serveur sous les requêtes, il s'agit ici de noyer le(s) serveur(s) sous le cout de calcul CPU.")]),e._v(" "),t("p",[e._v("Exemple de ReDoS "),t("a",{attrs:{href:"https://github.com/moment/moment/issues/4163",target:"_blank",rel:"noopener noreferrer"}},[e._v("sur moment.js"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"ressources"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ressources"}},[e._v("#")]),e._v(" ressources")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.owasp.org/index.php/Main_Page",target:"_blank",rel:"noopener noreferrer"}},[e._v("OWASP : the free and open software security community"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.youtube.com/watch?v=qjR-BW5EG0c",target:"_blank",rel:"noopener noreferrer"}},[e._v("Protéger son application web des risques de sécurité les plus critiques (Pascal Abaziou) Devoxx2017"),t("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);