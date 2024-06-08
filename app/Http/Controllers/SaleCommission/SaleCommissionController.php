<?php

namespace App\Http\Controllers\SaleCommission;

use App\Http\Controllers\Controller;
use App\Http\Requests\Users\UserAgentRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class SaleCommissionController extends Controller
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
            ->where('is_cmmsn_agnt', 1)
            ->search($search)
            ->orderBy($sortFields, $sortDirection)
            ->paginate(10)
            ->onEachSide(1);

        return inertia('SalesCommissionAgent/Index', [
            'users' =>  $users,
            'queryParams' => request()->query(),
            'successMessage' => session('success'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UserAgentRequest $request)
    {
        $user = new User;
        $user->prefix = $request->input('prefix');
        $user->first_name = $request->input('first_name');
        $user->last_name = $request->input('last_name');
        $user->email = $request->input('email');
        $user->contact_no = $request->input('contact_no');
        $user->address = $request->input('address');
        $user->cmmsn_percent = $request->input('cmmsn_percent');

        $user->password = 'DUMMY';
        $user->is_cmmsn_agnt = 1;
        $user->username = Str::random(13);
        $user->save();

        return back();
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
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UserAgentRequest $request, string $id)
    {
        User::findorFail($id)->update($request->all());

        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        User::findorFail($id)->delete();

        return back();
    }
}
