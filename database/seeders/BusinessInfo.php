<?php

namespace Database\Seeders;

use App\Models\Business;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BusinessInfo extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Business::create([
            'name' => 'POS',
            'currency_id' => 95,
            'default_profit_percent' => 25,
            'owner_id' => 1,
            'stop_selling_before' => 3,
        ]);
    }
}
