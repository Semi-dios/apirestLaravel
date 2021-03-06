<p align="center"><img src="https://res.cloudinary.com/dtfbvvkyp/image/upload/v1566331377/laravel-logolockup-cmyk-red.svg" width="400"></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/license.svg" alt="License"></a>
</p>

## ApiLaravelVue

Api rest basica que permite la realizacion de Crud por medio de laravel , que se consume en componentes de Vue.js:



## Clonar repo
Requrimientos 

* Composer 
* Node js 
* Laragon , Wamp, Xampp
* Laravel  7^*
* Php 7.14^*
* Mysql
* Apache


1. En la carpeta raiz de su entorno de desarrollo digite git clone https://github.com/Semi-dios/apirestLaravel.git
2. Instale dependencias digitando npm i y luego composer i 
3. Renombre el archivo .env.example a .env
4. Aisgne la base de datos homestead y sus credenciales

<!-- EN UNA TERMINAL DENTRO DE LA RAIZ DEL PROJECTO CLONADO ANTERIORMENTE -->
5. En la terminal digite php artisan key:generate
6. A continuacion digite php artisan  migrate:rollback --seed
7.  Al digitar php artisan route:list podra visulizar las rutas actuales en este casi ubicadas en config/api.php

8. Inicie servicios digitando php artisan serve 
  -- En una terminal diferente  digite npm run watch para que se inicie la compilacion del webpack (css,js,bootstrap,componentes)

9. Acceda a la url http://127.0.0.1:3000/dashboard 
<!-- En la carpeta public podra encontrar imagenes detalladas de como debe visualizarse el proyecto -->




## Estructura

El projecto se realizo mediante la aplicacion de un scafolding de front end Laravel 7 , por lo tanto las vistas las encontra en la carpeta Resources/views , estas a su vez se renderizan por medio del archivo routes.js que se ejecuta dentro del archivo resources/app.js .





## Migrations , Seeders and Model

Actualmente existen dos modelos , User y Article este ultimo es el que use en la realizacion de la api rest , cada uno tiene una migration CreateArticlesTable y CreateUsersTable,tambien un seeder ArticlesTableSeeder y UsersTableSeeder  estos a su vez son llamados en DatabaseSeeder.

En el modelo aplique la proteccion fillable




## Controladores

Api/AuthController y Article Controller son usados para la ejecucion del Crud por medio de los metodos get , post , put , y delete de acuerdo a lo solicitado en el documento .

## Rutas api

<!-- 
Route::post('login', 'Api\AuthController@login');
Route::post('register', 'Api\AuthController@register');
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('articles', 'ArticleController@index');
Route::get('articles/{id}', 'ArticleController@show');
Route::post('articles', 'ArticleController@store');
Route::put('articles/{article}', 'ArticleController@update' );
Route::delete('articles/{id}', 'ArticleController@delete');



Route::group(['middleware' => 'auth:api'], function(){
    Route::get('user-detail', 'Api\AuthController@userDetail');
    Route::get('logout', 'Api\AuthController@logout');

}); -->

## License


