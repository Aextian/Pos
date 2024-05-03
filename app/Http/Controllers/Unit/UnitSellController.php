<?php

namespace App\Http\Controllers\Unit;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UnitSellController extends Controller
{
    public function unit_sells()
    {
        return inertia('Sell/UnitSell');
    }
}
