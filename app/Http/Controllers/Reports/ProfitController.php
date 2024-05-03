<?php

namespace App\Http\Controllers\Reports;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProfitController extends Controller
{
    public function profit_loss()
    {
        return inertia('Reports/ProfitLoss/Index');
    }
}
