<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum', 'verified', 'jwt.verify'])->group(function () { 
    // Route yang hanya bisa diakses oleh user yang terautentikasi dengan JWT
});