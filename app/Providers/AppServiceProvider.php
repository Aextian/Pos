<?php

namespace App\Providers;

use App\Models\ProductCategory;
use App\Models\Supplier;
use App\Observers\ProductCategoryObserver;
use App\Observers\SupplierObserver;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        ProductCategory::observe(ProductCategoryObserver::class);
    }
}
