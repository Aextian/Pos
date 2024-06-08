<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::create([
            'prefix' => 'Admin',
            'first_name' => 'Admin',
            'last_name' => 'adminlast',
            'username' => 'admin',
            'email' => 'test@example.com',
            // 'business_id' => 1,
            'password' => '123456',
            'contact_no' => '123456',
            'address' => 'test',
            'status' => 'active',
            'is_cmmsn_agnt' => 0,
            'cmmsn_percent' => 0.00,
            'selected_contacts' => 0,
            'language' => 'en',
        ]);

        $role = Role::create(['name' => 'Admin']);

        $permissions = Permission::pluck('id', 'id')->all();

        $role->syncPermissions($permissions);

        $user->assignRole([$role->id]);
    }
}
