<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Requests\Auth\LoginRequest;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('verified')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/api/login', [AuthController::class, 'login'])->middleware('guest');
Route::post('/api/logout', [AuthController::class, 'logout'])->middleware('jwt.verify');

Route::middleware(['jwt.verify'])->group(function () {
    //  Tambahkan route API yang dilindungi JWT di sini
});