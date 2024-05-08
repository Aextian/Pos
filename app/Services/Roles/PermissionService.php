<?php

namespace App\Services\Roles;

use Spatie\Permission\Models\Permission;

class PermissionService
{
    public function getPermission($categories): array
    {
        $categoriesWithPermissions = [];

        foreach ($categories as $category) {

            // Convert the string representation of array to an actual array
            $permissions = json_decode($category->permission_id, true);

            if (!empty($permissions)) {
                // Retrieve permissions from the database
                $categoryPermissions = Permission::whereIn('id', $permissions)->get();
                // Add category permissions to the array
                $categoriesWithPermissions[] = [
                    'category' => $category->category,
                    'permissions' => $categoryPermissions,
                ];
            }
        }


        return $categoriesWithPermissions;
    }
}
