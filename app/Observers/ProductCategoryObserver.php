<?php

namespace App\Observers;

use App\Models\ProductCategory;

class ProductCategoryObserver
{
    /**
     * Handle the ProductCategory "created" event.
     */

    public function creating(ProductCategory $productCategory): void
    {
        $auth = auth()->user();
        if ($auth) {
            $productCategory->created_by = $auth->id;
            $productCategory->business_id = $auth->business_id;
        }
    }


    public function created(ProductCategory $productCategory): void
    {
        //
    }

    /**
     * Handle the ProductCategory "updated" event.
     */
    public function updated(ProductCategory $productCategory): void
    {
        //
    }

    /**
     * Handle the ProductCategory "deleted" event.
     */
    public function deleted(ProductCategory $productCategory): void
    {
        //
    }

    /**
     * Handle the ProductCategory "restored" event.
     */
    public function restored(ProductCategory $productCategory): void
    {
        //
    }

    /**
     * Handle the ProductCategory "force deleted" event.
     */
    public function forceDeleted(ProductCategory $productCategory): void
    {
        //
    }
}
