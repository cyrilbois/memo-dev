(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{473:function(e,n,t){"use strict";t.r(n);var a=t(33),r=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"angularjs-app-init"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#angularjs-app-init"}},[e._v("#")]),e._v(" AngularJS - app init")]),e._v(" "),t("h2",{attrs:{id:"bootstrap-d-une-app-web"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bootstrap-d-une-app-web"}},[e._v("#")]),e._v(" Bootstrap d'une app web")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Le browser lève l'event "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Reference/Events/DOMContentLoaded",target:"_blank",rel:"noopener noreferrer"}},[e._v("DOMContentLoaded"),t("OutboundLink")],1),e._v(" durant ce step.\nLe moment exact est aléatoire, il n'attend pas le chargement des ressources liées à la page (css et images), le html et les js associés sont chargés cependant, on passe direct au point 3, le point 2 se joue en parallèle.")])]),e._v(" "),t("li",[t("p",[e._v("Le browser lève l'event "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Reference/Events/load",target:"_blank",rel:"noopener noreferrer"}},[e._v("load"),t("OutboundLink")],1),e._v(" en fin de step.\nToutes les dépendances (de la page d'index) ont été téléchargées (non bloquant pour le démarrage angular).")])]),e._v(" "),t("li",[t("p",[e._v("Démarrage Angular")])])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("la méthode "),t("code",[e._v("angularInit(element, bootstrap)")]),e._v(" est exécutée.\nElle cherche la directive "),t("code",[e._v("ng-app")]),e._v(" et son paramètre (le module racine de l'application).")])]),e._v(" "),t("li",[t("p",[e._v("la méthode "),t("code",[e._v("bootstrap(element, bootstrap)")]),e._v(" est exécutée.\nElle détermine si le bootstrap de l'app doit se faire maintenant ou si il est délayé.\nSi il n'est pas délayé elle crée l'injecteur via "),t("code",[e._v("createInjector(modulesToLoad, strictDi)")])])]),e._v(" "),t("li",[t("p",[e._v("création de l'injecteur via "),t("code",[e._v("createInjector(modulesToLoad, strictDi)")]),e._v("\nTous les modules angular et leurs sous modules (modules optionnels comme ngLocale) sont chargés.\nUn cache des composants est créé (les services sont des singletons, s'ils ne sont pas instanciés ils le sont et sont ajoutés au cache, à chaque nouvel appel le cache est vérifié et si angular trouve quelque chose il sert l'élément présent dans le cache et ne fait pas de nouvelle instanciation).\nViennent ensuite toutes les dépendances déclarées sur le module principal.\nDurant cette phase tout l'arbre des dépendance est parsé.\nUne liste des "),t("code",[e._v("config()")]),e._v(" à exécuter est constituée ainsi qu'une liste de "),t("code",[e._v("run()")]),e._v("\nLes "),t("code",[e._v("config()")]),e._v(" de tous les modules sont ensuite exécutés dans l'ordre inverse de l'arbre.\nSeuls les services de type "),t("code",[e._v("provider")]),e._v(" et "),t("code",[e._v("constant")]),e._v(" peuvent être injectés.\npuis\n"),t("code",[e._v("run()")]),e._v(" de tous les modules dans le même ordre que pour "),t("code",[e._v("config()")]),e._v("\nLes "),t("code",[e._v("provider")]),e._v(" sont interdits à ce stade (pas de config de "),t("code",[e._v("provider")]),e._v(" au runtime.")])]),e._v(" "),t("li",[t("p",[e._v("L'injecteur a été créé. Tous les modules ont joué leur "),t("code",[e._v("config()")]),e._v(" puis leur "),t("code",[e._v("run()")]),e._v(" en terminant par celui du module principal de l'app.\nL'injecteur crée le "),t("code",[e._v("$rootScope")]),e._v(" puis compile l'app sur la base de "),t("code",[e._v("ng-app")]),e._v(" qui sert de racine.\nSi une directive "),t("code",[e._v("ng-controller")]),e._v(" est rencontrée, l'injecteur est appelé pour instancier le controller associé.")])]),e._v(" "),t("li",[t("p",[e._v("La webapp est rendue, elle attend une interaction de l'utilisateur.")])])]),e._v(" "),t("h3",{attrs:{id:"exemple-ordre-d-execution-des-modules-au-bootstrap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exemple-ordre-d-execution-des-modules-au-bootstrap"}},[e._v("#")]),e._v(" Exemple ordre d'exécution des modules au bootstrap")]),e._v(" "),t("p",[e._v("Ex, on a la hiérarchie suivante :")]),e._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("app\napp.moduleA\napp.moduleA.subModuleA1\napp.moduleB\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("l'ordre d'exécution sera :")]),e._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("app.moduleB\napp.moduleA.subModuleA1\napp.moduleA\napp\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("ou")]),e._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("app.moduleA.subModuleA1\napp.moduleA\napp.moduleB\napp\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("mais jamais")]),e._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("app.moduleA\napp.moduleA.subModuleA1\napp.moduleB\napp\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("h3",{attrs:{id:"documentation-a-check"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#documentation-a-check"}},[e._v("#")]),e._v(" Documentation à check")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://docs.angularjs.org/guide/module",target:"_blank",rel:"noopener noreferrer"}},[e._v("ng dev guide - module"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://docs.angularjs.org/guide/bootstrap",target:"_blank",rel:"noopener noreferrer"}},[e._v("ng dev guide - bootstrap"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://docs.angularjs.org/guide/di",target:"_blank",rel:"noopener noreferrer"}},[e._v("ng dev guide - dependency injection"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://docs.angularjs.org/api/ng/function/angular.module",target:"_blank",rel:"noopener noreferrer"}},[e._v("angular.module"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://docs.angularjs.org/api/ng/function/angular.injector",target:"_blank",rel:"noopener noreferrer"}},[e._v("angular.injector"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://docs.angularjs.org/api/ng/directive/ngApp",target:"_blank",rel:"noopener noreferrer"}},[e._v("ngApp"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://docs.angularjs.org/api/ngRoute/directive/ngView",target:"_blank",rel:"noopener noreferrer"}},[e._v("ngView"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://docs.angularjs.org/api/auto/service/$injector",target:"_blank",rel:"noopener noreferrer"}},[e._v("$injector"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://docs.angularjs.org/api/auto/service/$provide",target:"_blank",rel:"noopener noreferrer"}},[e._v("$provide"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://docs.angularjs.org/api/ng/service/$location",target:"_blank",rel:"noopener noreferrer"}},[e._v("$location"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"knowing-when-the-a-view-has-finished-loading"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#knowing-when-the-a-view-has-finished-loading"}},[e._v("#")]),e._v(" knowing when the a view has finished loading")]),e._v(" "),t("p",[t("a",{attrs:{href:"http://stackoverflow.com/questions/14368097/execute-function-after-page-has-finished-downloading-and-bootstrapping",target:"_blank",rel:"noopener noreferrer"}},[e._v("not possible because of MVVM pattern"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"others-topics"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#others-topics"}},[e._v("#")]),e._v(" others topics")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/angular/angular.js/issues/1306#issuecomment-8200414",target:"_blank",rel:"noopener noreferrer"}},[e._v("Misko Hevery comment on an angular GitHub issue"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://stackoverflow.com/questions/11125078/is-there-a-post-render-callback-for-angular-js-directive",target:"_blank",rel:"noopener noreferrer"}},[e._v("is there a post render callback for angular directive"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://stackoverflow.com/questions/15932771/how-to-invoke-a-function-in-an-angular-directive-after-the-child-nodes-have-been/15946913#15946913",target:"_blank",rel:"noopener noreferrer"}},[e._v("how to invoke a function in an angular directive after the child nodes have been processed"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://stackoverflow.com/questions/21058213/what-is-meant-by-bootstrapping-in-angular-js",target:"_blank",rel:"noopener noreferrer"}},[e._v("What is meant by Bootstrapping in angular JS?"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://stackoverflow.com/questions/14968690/sending-event-when-angular-js-finished-loading",target:"_blank",rel:"noopener noreferrer"}},[e._v("sending event when angular finished loading"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://blog.xebia.fr/2013/10/14/les-fondations-dangularjs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("les fondations de AngularJS"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);n.default=r.exports}}]);