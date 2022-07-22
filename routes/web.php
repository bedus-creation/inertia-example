<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersController;

Route::redirect('/', '/users', 301);
Route::get('/users', [UsersController::class, 'index'])->name('users.index');
Route::post('/users', [UsersController::class, 'store'])->name('users.store');
Route::get('/users/create', [UsersController::class, 'create'])->name('users.create');
