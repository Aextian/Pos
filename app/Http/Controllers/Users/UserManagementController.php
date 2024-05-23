<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Http\Requests\Users\StoreUserRequest;
use App\Http\Requests\Users\UserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class UserManagementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // sorting fields and direction
        $sortFields = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", 'desc');
        $search = request('search');

        $users = User::query()
            ->search($search)
            ->orderBy($sortFields, $sortDirection)
            ->paginate(10)
            ->onEachSide(1);

        $users->load('roles');

        return inertia('Users/Index', [
            'successMessage' => session('success'),
            'users' => $users,
            'queryParams' => request()->query(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Users/Create', [
            'roles' => Role::orderby('id', 'asc')->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */


    public function store(UserRequest $request)
    {
        $user =  User::create($request->validated());

        $user->assignRole($request->input('roles'));

        return redirect()->route('users.index')
            ->with('success', 'User created successfully');
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
    public function edit(User $user)
    {

        return inertia('Users/Edit', [
            'user' => $user->load('roles'),
            'roles' => Role::orderby('id', 'asc')->get(),
        ]);
    }


    /**
     * Update the specified resource in storage.
     */

    public function update(UserRequest $request, string $id)
    {
        $user = User::findorfail($id);

        $user->Update($request->validated());

        $user->assignRole($request->input('roles'));

        return redirect()->route('users.index')
            ->with('success', 'User updated successfully');
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->delete();

        return back()->with('success', 'User deleted successfully');
    }
}
