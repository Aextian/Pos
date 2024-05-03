<?php

namespace App\Http\Controllers\Reports;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ReadingController extends Controller
{
    public function x_reading()
    {
        return inertia('Reports/Reading/XReading');
    }
    public function z_reading()
    {
        return inertia('Reports/Reading/ZReading');
    }
}
