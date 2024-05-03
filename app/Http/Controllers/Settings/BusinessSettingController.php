<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BusinessSettingController extends Controller
{
    public function index()
    {
        return inertia('Settings/BusinessSetting/Index');
    }

    public function points()
    {
        return inertia('Settings/AddPoints/Index');
    }
}
