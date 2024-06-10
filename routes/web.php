<?php

use App\Http\Controllers\Business\LocationController;
use App\Http\Controllers\Contacts\ContactController;
use App\Http\Controllers\Contacts\SupplierController;
use App\Http\Controllers\Contacts\CustomerController;
use App\Http\Controllers\Contacts\CustomerGroupController;
use App\Http\Controllers\Expenses\ExpenseCategoryController;
use App\Http\Controllers\Expenses\ExpenseController;
use App\Http\Controllers\Pos\PosController;
use App\Http\Controllers\Pos\SellController;
use App\Http\Controllers\Pos\VoidController;
use App\Http\Controllers\Post\DashboardController;
use App\Http\Controllers\Post\StockController;
use App\Http\Controllers\Products\BrandController;
use App\Http\Controllers\Products\CategoriesController;
use App\Http\Controllers\Products\ImportProductController;
use App\Http\Controllers\Products\PrintController;
use App\Http\Controllers\Products\ProductCategoriesDiscountController;
use App\Http\Controllers\Products\ProductController;
use App\Http\Controllers\Products\ProductPriceGroupController;
use App\Http\Controllers\Products\ProductRequestStockController;
use App\Http\Controllers\Products\UnitController;
use App\Http\Controllers\Products\VariationTemplateController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Purchases\PurchaseController;
use App\Http\Controllers\Reports\ProfitController;
use App\Http\Controllers\Reports\ReadingController;
use App\Http\Controllers\Reports\ReportController;
use App\Http\Controllers\Roles\RolesController;
use App\Http\Controllers\SaleCommission\SaleCommissionController;
use App\Http\Controllers\Settings\BarcodeController;
use App\Http\Controllers\Settings\BusinessSettingController;
use App\Http\Controllers\Settings\InvoiceController;
use App\Http\Controllers\Settings\PrinterController;
use App\Http\Controllers\Settings\TaxRateController;
use App\Http\Controllers\Stock\AdjustmentController;
use App\Http\Controllers\Stock\TransferController;
use App\Http\Controllers\Unit\UnitSellController;
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


Route::get('stock-alert', [StockController::class, 'stock_alert'])->name('stock.alert');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::resource('/', DashboardController::class);
    Route::resource('/roles', RolesController::class);
    Route::resource('users', UserManagementController::class);

    Route::prefix('products')->group(function () {
        Route::get('label', [PrintController::class, 'label']);
        Route::resource('price-group', ProductPriceGroupController::class);
        Route::resource('product', ProductController::class);
        Route::resource('categories', CategoriesController::class);
        Route::resource('variation-template', VariationTemplateController::class);
        Route::resource('unit', UnitController::class);
        Route::resource('brand', BrandController::class);
        Route::resource('discount-categories', ProductCategoriesDiscountController::class);
        Route::resource('request-stock', ProductRequestStockController::class);
        Route::get('stock-requested', [ProductRequestStockController::class, 'stock_requested']);
    });

    Route::resource('sales-commission-agents', SaleCommissionController::class);
});

// purchases
Route::prefix('purchase')->group(function () {
    Route::resource('purchases', PurchaseController::class);
    Route::get('purchase-return', [PurchaseController::class, 'purchase_return'])->name('purchase.return');
});

Route::prefix('stock-transfer')->group(function () {
    Route::Resource('stock-transfers', TransferController::class);
});

Route::Resource('stock-adjustments', AdjustmentController::class);


Route::prefix('sell')->group(function () {
    Route::Resource('sells', SellController::class);
    Route::get('sell-return', [SellController::class, 'sell_return']);
    Route::get('/drafts', [SellController::class, 'drafts']);
    Route::get('/quotations', [SellController::class, 'quotations']);
    Route::get('/discounted', [SellController::class, 'discounted']);
    Route::Resource('pos', PosController::class);
});

Route::prefix('unit-sells')->group(function () {
    Route::get('/', [UnitSellController::class, 'unit_sells']);
});

Route::prefix('void')->group(function () {
    Route::get('/', [VoidController::class, 'voided_trasaction']);
});

Route::prefix('expense')->group(function () {
    Route::resource('expenses', ExpenseController::class);
    Route::resource('category', ExpenseCategoryController::class);
});

Route::prefix('contact')->group(function () {
    Route::resource('contacts', ContactController::class);
    Route::get('supplier', [ContactController::class, 'supplier'])->name('contacts.supplier');
    Route::get('customer', [ContactController::class, 'customer'])->name('contacts.customer');

    Route::resource('customer-group', CustomerGroupController::class);
});

Route::prefix('import')->group(function () {
    Route::get('/product', [ImportProductController::class, 'import_product']);
    Route::get('/opening-stock', [ImportProductController::class, 'import_opening_stock']);
    Route::get('/contact', [ContactController::class, 'import_contact']);
});



Route::prefix('reports')->group(function () {
    Route::get('x-reading', [ReadingController::class, 'x_reading']);
    Route::get('z-reading', [ReadingController::class, 'z_reading']);
    Route::get('profit-loss', [ProfitController::class, 'profit_loss']);
    Route::get('purchase-sell', [ReportController::class, 'purchase_sell']);
    Route::get('purchase-report', [ReportController::class, 'purchase_report']);
    Route::get('customer-group-report', [ReportController::class, 'group_report']);
    Route::get('tax-report', [ReportController::class, 'tax_report']);
    Route::get('stock-report', [ReportController::class, 'stock_report']);

    Route::get('opening-stocks-report', [ReportController::class, 'opening_stock_report']);
    Route::get('stock-expiry-report', [ReportController::class, 'stock_expiry_report']);
    Route::get('lot-report', [ReportController::class, 'lot_report']);
    Route::get('trending-products', [ReportController::class, 'trending_product']);
    Route::get('stock-adjustment-report', [ReportController::class, 'stock_adjustment_report']);
    Route::get('product-purchase-report', [ReportController::class, 'product_purchase_report']);
    Route::get('product-sell-report', [ReportController::class, 'product_sell_report']);
    Route::get('purchase-payment-report', [ReportController::class, 'purchase_payment_report']);
    Route::get('sell-payment-report', [ReportController::class, 'sell_payment_report']);
    Route::get('expense-report', [ReportController::class, 'expense_report']);
    Route::get('register-report', [ReportController::class, 'register_report']);
    Route::get('sale-representative-report', [ReportController::class, 'sale_rep_report']);




    Route::get('customer-supplier', [ReportController::class, 'customer_supplier']);
});

Route::prefix('settings')->group(function () {
    Route::get('business', [BusinessSettingController::class, 'index']);
    Route::get('points', [BusinessSettingController::class, 'points']);
    Route::resource('location', LocationController::class);
    Route::resource('invoice-schemes', InvoiceController::class);
    Route::resource('barcode', BarcodeController::class);
    Route::resource('printer', PrinterController::class);
    Route::resource('tax-rates', TaxRateController::class);
});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


require __DIR__ . '/auth.php';
