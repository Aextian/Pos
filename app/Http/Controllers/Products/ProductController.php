<?php

namespace App\Http\Controllers\Products;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\Models\Product;
use App\Models\ProductCategory;
use App\Models\Unit;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // user business id

        // sorting fields and direction
        $sortFields = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", 'desc');
        $search = request('search');

        $categories = Product::query()
            ->search($search)
            ->orderBy($sortFields, $sortDirection)
            ->paginate(10)
            ->onEachSide(1);


        return inertia('Products/Index', [
            'categories' => $categories,

            'successMessage' => session('success'),
            'queryParams' => request()->query(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $business_id =  auth()->user()->business_id;

        return inertia('Products/Create', [
            'brands' =>  Brand::where('business_id', $business_id)->get(),
            'units' => Unit::where('business_id', $business_id)->get(),
            'categories' => ProductCategory::where('business_id', $business_id)->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
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
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
