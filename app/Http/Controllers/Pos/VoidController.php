<?php

namespace App\Http\Controllers\Pos;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class VoidController extends Controller
{
    public function voided_trasaction()
    {
        return inertia('Sell/VoidedTransaction');
    }
}
