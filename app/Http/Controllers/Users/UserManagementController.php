<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Http\Requests\Users\UserRequest;
use App\Models\Supplier;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
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
            ->where('is_cmmsn_agnt', 0)
            ->where('business_id', auth()->user()->business_id)
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
            'contacts' =>  Supplier::get(),

        ]);
    }

    /**
     * Store a newly created resource in storage.
     */


    public function store(UserRequest $request)
    {


        $auth = auth()->user();

        $contacts = collect($request->contacts)->pluck('id')->toArray() ?? [];
        $is_selected = json_encode($contacts) !== '[]' ? true : false;

        $user = User::create(
            [
                'first_name' => $request->input('first_name'),
                'last_name' => $request->input('last_name'),
                'username' => $request->input('username'),
                'email' => $request->input('email'),
                'password' => Hash::make($request->input('password')),
                'status' => $request->input('status') ?? 'inactive',
                'selected_contacts' => $is_selected,
                'business_id' => $auth->business_id,
            ]
        );

        $user->assignRole($request->input('roles'));
        $user->contacts()->attach($contacts);

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
            'user' => $user->load('roles', 'contacts'),
            'contacts' => Supplier::get(),
            'roles' => Role::orderby('id', 'asc')->get(),
        ]);
    }


    /**
     * Update the specified resource in storage.
     */

    public function update(UserRequest $request, string $id)
    {
        $auth = auth()->user();
        $user = User::findorfail($id);
        $contacts = collect($request->input('contacts'))->pluck('id')->toArray() ?? [];
        $is_selected = json_encode($contacts) !== '[]' ? true : false;

        $user->Update(
            [
                'first_name' => $request->input('first_name'),
                'last_name' => $request->input('last_name'),
                'username' => $request->input('username'),
                'email' => $request->input('email'),
                'password' => Hash::make($request->input('password')),
                'status' => $request->input('status'),
                'selected_contacts' => $is_selected,
                'business_id' => $auth->business_id,
            ]
        );

        $user->syncRoles($request->input('roles'));
        $user->contacts()->sync($contacts);

        return redirect()->route('users.index')
            ->with('success', 'User updated successfully');
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->delete();
        $user->contacts()->detach();

        return back();
    }
}
