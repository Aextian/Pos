<?php

namespace App\Http\Controllers\Roles;

use App\Http\Controllers\Controller;
use App\Http\Requests\Roles\StoreRoleRequest;
use App\Http\Requests\Roles\UpdateRoleRequest;
use App\Models\PermissionCategory;
use App\Services\Roles\PermissionService;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        return Inertia('Roles/Index', [
            'successMessage' => session('success'),
            'roles' => Role::get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(PermissionService $permissionService)
    {
        $categories = PermissionCategory::get();

        $permissions = $permissionService->getPermission($categories);

        return Inertia('Roles/Create', [
            'permissions' => $permissions,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRoleRequest $request)
    {

        $role = Role::create($request->all());
        $role->syncPermissions($request->input('permissions'));

        return redirect()->route('roles.index')->with('success', 'Role created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(int $id)
    {
        return inertia('Roles/Edit', [
            'role' => Role::findorfail($id),
            'permissions' => Permission::get(),
            'rolePermissions' => DB::table("role_has_permissions")->where("role_has_permissions.role_id", $id)
                ->pluck('role_has_permissions.permission_id')
                ->all()
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRoleRequest $request, Role $role)
    {
        $role->name = $request->input('name');
        $role->syncPermissions($request->input('permissions'));
        $role->save();

        return redirect()->route('roles.index')
            ->with('success', 'Role updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Role $role)
    {
        $role->delete();
        return back()->with('success', 'Role deleted successfully');
    }
}
