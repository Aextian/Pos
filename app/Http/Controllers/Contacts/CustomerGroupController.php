<?php

namespace App\Http\Controllers\Contacts;

use App\Http\Controllers\Controller;
use App\Http\Requests\CustomerGroupRequest;
use App\Models\CustomerGroup;
use Illuminate\Http\Request;

class CustomerGroupController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $sortFields = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", 'desc');
        $search = request('search');

        $groups = CustomerGroup::query()
            ->search($search)
            ->orderBy($sortFields, $sortDirection)
            ->paginate(10)
            ->onEachSide(1);


        return inertia('Contacts/CustomerGroup', [
            'groups' => $groups,
            'queryParams' => request()->query(),

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
    public function store(CustomerGroupRequest $request)
    {

        $auth = auth()->user();
        $group = new CustomerGroup($request->validated());
        $group->created_by = $auth->id;
        $group->business_id = $auth->business_id;
        $group->save();

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
    public function update(CustomerGroupRequest $request, string $id)
    {

        CustomerGroup::findorFail($id)->update($request->validated());

        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {

        $group = CustomerGroup::findorFail($id);
        $group->delete();
        return back();
    }
}
