<?php

namespace App\Http\Controllers\Products;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ImportProductController extends Controller
{

    public function import_product()
    {
        return inertia('Products/ImportProducts');
    }
    public function import_opening_stock()
    {
        return inertia('Products/ImportOpeningStock');
    }
}
