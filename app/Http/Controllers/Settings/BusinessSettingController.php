<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Models\Business;
use App\Models\Currency;
use Illuminate\Http\Request;

class BusinessSettingController extends Controller
{
    public function index()
    {




        return inertia('Settings/BusinessSetting/Index', [
            'business' => Business::with('currency')->first(),
            'currencies' => Currency::get(),
        ]);
    }

    public function points()
    {
        return inertia('Settings/AddPoints/Index');
    }
}
