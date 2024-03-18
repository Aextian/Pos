<?php

namespace Database\Seeders;

use App\Models\PermissionCategory;
use App\Models\RoleCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PermissionCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $categories = [
            [
                'Name' => 'User',
                'permissions' => '[1, 2, 3, 4,]'
            ],
            [
                'Name' => 'Roles',
                'permissions' => '[5, 6, 7, 8, 9]'
            ],
            [
                'Name' => 'Customer',
                'permissions' => '[9, 10, 11, 12,]'
            ],
            [
                'Name' => 'Product',
                'permissions' => '[13, 14, 15, 16]'
            ],
            [
                'Name' => 'Purchase & Stock Adjustment
                ',
                'permissions' => '[17, 18, 19, 20]'
            ],
            [
                'Name' => 'Sell',
                'permissions' => '[21, 22, 23, 24]'
            ],
            // [
            //     'Name' => 'Brand',
            //     'permissions' => '[36, 37, 38, 39]'
            // ],
            // [
            //     'Name' => 'Tax rate',
            //     'permissions' => '[40, 41, 42, 43]'
            // ],
            // [
            //     'Name' => 'Category',
            //     'permissions' => '[48, 49, 50, 51]'
            // ],
            // [
            //     'Name' => 'Report',
            //     'permissions' => '[25, 26, 27, 28, 29,30,32]'
            // ],
            // [
            //     'Name' => 'Settings',
            //     'permissions' => '[33, 34, 35, ]'
            // ],
            // [
            //     'Name' => 'Access locations',
            //     'permissions' => '[53,]'
            // ],
        ];


        foreach ($categories as $category) {
            PermissionCategory::create([
                'category' => $category['Name'],
                'permission_id' => $category['permissions']
            ]);
        }
    }
}
