<?php

use App\Http\Controllers\Agents\AgentController;
use App\Http\Controllers\Business\BusinessController;
use App\Http\Controllers\Contacts\ContactController;
use App\Http\Controllers\Contacts\SupplierController;
use App\Http\Controllers\Contacts\CustomerController;
use App\Http\Controllers\Contacts\CustomerGroupController;
use App\Http\Controllers\Post\DashboardController;
use App\Http\Controllers\Post\StockController;
use App\Http\Controllers\Products\BrandController;
use App\Http\Controllers\Products\CategoriesController;
use App\Http\Controllers\Products\ImportProductController;
use App\Http\Controllers\Products\PrintController;
use App\Http\Controllers\Products\ProductController;
use App\Http\Controllers\Products\ProductPriceGroupController;
use App\Http\Controllers\Products\UnitController;
use App\Http\Controllers\Products\VariationTemplateController;
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


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::resource('/', DashboardController::class);
    Route::resource('/roles', RolesController::class);
    Route::resource('users', UserManagementController::class);
});


Route::resource('agents', AgentController::class);
Route::get('stock-alert', [StockController::class, 'stock_alert'])->name('stock.alert');


Route::prefix('contacts')->group(function () {
    Route::resource('contact', ContactController::class);
    Route::resource('supplier', SupplierController::class);
    Route::resource('customer', CustomerController::class);
    Route::resource('group', CustomerGroupController::class);
});

Route::prefix('import')->group(function () {
    Route::get('/product', [ImportProductController::class, 'import_product']);
    Route::get('/opening-stock', [ImportProductController::class, 'import_opening_stock']);
    Route::get('/contact', [ContactController::class, 'import_contact']);
});

Route::prefix('products')->group(function () {
    Route::get('label', [PrintController::class, 'label']);
    Route::resource('price-group', ProductPriceGroupController::class);

    Route::resource('product', ProductController::class);
    Route::resource('categories', CategoriesController::class);
    Route::resource('variation-template', VariationTemplateController::class);
    Route::resource('unit', UnitController::class);
    Route::resource('brand', BrandController::class);
});


// Route::prefix('products')->group(function () {
// });

// Route::prefix('purchases')->group(function () {
// });

// Route::prefix('sells')->group(function () {
// });

// Route::prefix('stock-transfers')->group(function () {
// });


// Route::prefix('stock-adjustment')->group(function () {
// });


// Route::prefix('expenses')->group(function () {
// });


Route::prefix('reports')->group(function () {
});


// Route::prefix('business')->group(function () {
//     Route::resource('/setting', BusinessController::class);
// });

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


require __DIR__ . '/auth.php';
