<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// This catch-all route ensures your SPA works with direct URL access
Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');
