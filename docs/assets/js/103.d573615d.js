(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{271:function(e,t,a){"use strict";a.r(t);var r=a(0),n=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("div",{staticClass:"content"},[e._m(0),e._v(" "),t("h2",{attrs:{id:"templatecache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#templatecache"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://code.angularjs.org/1.4.8/docs/api/ng/service/$templateCache",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("$templateCache")]),t("OutboundLink")],1)]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),t("p",[e._v("Une bonne pratique consiste à populer $templateCache au build de l'application via un module gulp ("),t("a",{attrs:{href:"https://github.com/miickel/gulp-angular-templatecache",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("gulp-angular-templatecache")]),t("OutboundLink")],1),e._v(").\nAinsi il n'y aura aucun accès réseau pour récupérer les templates.")]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://thinkster.io/templatecache-tutorial",target:"_blank",rel:"noopener noreferrer"}},[e._v("templatecache-tutorial : thinkster.io"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://blog.logentries.com/2015/03/template-caching-in-angular-how-to-avoid-the-storm/",target:"_blank",rel:"noopener noreferrer"}},[e._v("template-caching-in-angular-how-to-avoid-the-storm"),t("OutboundLink")],1)])])])}),[function(){var e=this._self._c;return e("h1",{attrs:{id:"angularjs-templatecache"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#angularjs-templatecache"}},[this._v("#")]),this._v(" AngularJS - "),e("code",[this._v("$templateCache")])])},function(){var e=this._self._c;return e("p",[this._v("Quand angular voit un templateUrl dans une route ou une directive, il va requêter le serveur pour retrouver le fichier html.\nUne fois qu'il l'a récupéré, il place ce template sous forme de string dans le service "),e("code",[this._v("$templateCache")]),this._v(".\nChaque fois suivante ou angular aura besoin d'accéder à ce template, il va recharger le template depuis "),e("code",[this._v("$templateCache")]),this._v(".\nCe qui évite de multiples connexions réseau inutiles.")])},function(){var e=this._self._c;return e("h2",{attrs:{id:"bonne-pratique"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bonne-pratique"}},[this._v("#")]),this._v(" Bonne pratique")])},function(){var e=this._self._c;return e("h2",{attrs:{id:"implementation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[this._v("#")]),this._v(" Implémentation")])},function(){var e=this._self._c;return e("p",[this._v("Concrètement cette tâche gulp va générer un fichier js qui implémente un run du module principal de la webapp.\nCe run injectera "),e("code",[this._v("$templateCache")]),this._v(".\nPour chaque template trouvé dans le source de la webapp, un call à "),e("code",[this._v("$templateCache.put(<templateUrl>, <templateHtmlContent>)")]),this._v(" sera effectué.")])},function(){var e=this._self._c;return e("h2",{attrs:{id:"lectures-sur-le-sujet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lectures-sur-le-sujet"}},[this._v("#")]),this._v(" Lectures sur le sujet")])}],!1,null,null,null);t.default=n.exports}}]);