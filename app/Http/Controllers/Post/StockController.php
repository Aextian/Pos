<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StockController extends Controller
{
    public function stock_alert()
    {
        return inertia('Stock/StockAlert');
    }
}
