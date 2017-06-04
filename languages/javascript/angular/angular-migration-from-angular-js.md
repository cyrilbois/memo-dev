# Angular - Migration from AngularJS

[Upgrade guide ng2 doc](https://angular.io/docs/ts/latest/guide/upgrade.html)

[AngularJS 2.0 Migration Guide : codeproject.com](https://www.codeproject.com/Articles/1121384/AngularJS-Migration-Guide)

> 2016/08/31
> 
> **Preparation**
> 
> - Follow the John Papa’s Styleguide for Angular 1 development
> - Update to the latest version of Angular 1
> - All new development using components
> - Switch controllers to components (component directives)
> - Remove incompatible features (specific to Angular 2) from directives
> - Implement manual bootstrapping (No more ng-app)
> 
> **Upgrade**
> 
> - Add TypeScript transpilation and build
> - Start using ES6 or Javascript 2015
> - Switch controllers and services to ES6 Classes
> - Add Angular 2.0 to your project
> - Migrate one piece at a time
> 

[Préparer la migration de AngularJS 1.x vers AngularJS 2.0 : maxlab.fr](http://maxlab.fr/javascript/migrer-de-angularjs-1-x-vers-angularjs-2-0-pratique/#foot_loc_1403_1)

> Eviter l’usage de `$scope` et utiliser la syntaxe `ControllerAs`.
> 
> Supprimer le `$scope`, c’est supprimer `$watch` `$apply` `$timeout` .. des notions qui compliquent l’apprentissage du 
> framework et sont souvent à l’origine de [hacks](http://www.bennadel.com/blog/2605-scope-evalasync-vs-timeout-in-angularjs.htm).
> 
> Au lieu de créer un controleur et d’utiliser `ng-controller`, préférez l’usage d’une directive.
> 
> Tirer profit des fonctionnalités d’ECMAscript 6/2015
>  - Les [modules](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/import)  : 
>  pour appliquer le paragraphe précédent sur le découplage
>  - Les [arrow functions](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es) : 
>  pour simplifier les retours issues de promises, l’utilisation des fonctions sur les tableaux et le binding du `this`
>  - La [notation objet simplifiée](http://ariya.ofilabs.com/2013/02/es6-and-object-literal-property-value-shorthand.html) 
>  et la [décomposition](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Affecter_par_d%C3%A9composition) : 
>  pour réduire le code et augmenter la lisibilité
>  - Les classes : pour coller à la syntaxe d’Angular 2 et éventuellement utiliser les [décorateurs d’ES7](https://github.com/wycats/javascript-decorators)
> 
> Services : Dans Angular 2, les services sont de simples classes, il est préférable de n’utiliser que `angular.service` 
> dans Angular 1
>

[Quelques grands principes pour aller vers Angular 2.x en venant d’Angular 1.4 ? : blogtech.soprasteria.com](http://blogtech.soprasteria.com/2017/05/24/quelques-grands-principes-pour-aller-vers-angular-2-x-en-venant-dangular-1-4/)

> Très détaillé avec contextualisation + plein de bons liens en fin d'article
 