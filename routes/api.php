<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Requests\Auth\LoginRequest;

Route::middleware(['auth:sanctum', 'verified', 'jwt.verify'])->group(function () { 
    // Route yang hanya bisa diakses oleh user yang terautentikasi dengan JWT
    Route::post('/api/login', [AuthController::class, 'login']);
});
