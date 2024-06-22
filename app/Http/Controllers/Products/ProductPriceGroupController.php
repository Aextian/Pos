<?php

namespace App\Http\Controllers\Products;

use App\Http\Controllers\Controller;
use App\Http\Requests\PriceGroupRequest;
use App\Models\PriceGroup;
use Illuminate\Http\Request;

class ProductPriceGroupController extends Controller
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

        $price_groups = PriceGroup::query()
            ->search($search)
            ->orderBy($sortFields, $sortDirection)
            ->paginate(10)
            ->onEachSide(1);

        return inertia('Products/PriceGroup/Index', [
            'price_groups' => $price_groups,
            'successMessage' => session('success'),
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
    public function store(PriceGroupRequest $request)
    {
        $price_group = new PriceGroup($request->validated());
        $price_group->business_id = auth()->user()->business_id;
        $price_group->save();

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
    public function update(PriceGroupRequest $request, string $id)
    {
        PriceGroup::findorfail($id)->update($request->validated());

        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        PriceGroup::findorfail($id)->delete();
        return back();
    }
}
