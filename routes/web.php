<?php

use App\Http\Controllers\Agents\AgentController;
use App\Http\Controllers\Contacts\ContactController;
use App\Http\Controllers\Contacts\SupplierController;
use App\Http\Controllers\Post\DashboardController;
use App\Http\Controllers\Post\StockController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Roles\RolesController;
use App\Http\Controllers\Users\UserManagementController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


// Route::get('/', function () {
//     return Inertia::render('Post');
// });

Route::resource('/', DashboardController::class);

Route::resource('users', UserManagementController::class);
Route::resource('agents', AgentController::class);
Route::resource('roles', RolesController::class);
Route::get('stock-alert', [StockController::class, 'stock_alert'])->name('stock.alert');


Route::prefix('contacts')->group(function () {
    Route::resource('supplier', SupplierController::class);
    Route::resource('/', ContactController::class);
});

Route::prefix('products')->group(function () {
});


Route::prefix('products')->group(function () {
});

Route::prefix('purchases')->group(function () {
});

Route::prefix('sells')->group(function () {
});

Route::prefix('stock-transfers')->group(function () {
});


Route::prefix('stock-adjustment')->group(function () {
});


Route::prefix('expenses')->group(function () {
});


Route::prefix('reports')->group(function () {
});


Route::prefix('settings')->group(function () {
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
