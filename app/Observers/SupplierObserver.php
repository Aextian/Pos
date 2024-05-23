<?php

namespace App\Observers;

use App\Models\Business;
use App\Models\Supplier;

class SupplierObserver
{

    public function creating(Supplier $supplier): void
    {
        $auth = auth()->user();
        if ($auth) {
            $supplier->created_by = $auth->id;
            $supplier->business_id = $auth->business_id;
        }
    }

    /**
     * Handle the Supplier "created" event.
     */

    public function created(Supplier $supplier): void
    {
    }

    /**
     * Handle the Supplier "updated" event.
     */
    public function updated(Supplier $supplier): void
    {
        //
    }

    /**
     * Handle the Supplier "deleted" event.
     */
    public function deleted(Supplier $supplier): void
    {
        //
    }

    /**
     * Handle the Supplier "restored" event.
     */
    public function restored(Supplier $supplier): void
    {
        //
    }

    /**
     * Handle the Supplier "force deleted" event.
     */
    public function forceDeleted(Supplier $supplier): void
    {
        //
    }
}
