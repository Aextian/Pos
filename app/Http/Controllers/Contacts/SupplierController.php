<?php

namespace App\Http\Controllers\Contacts;

use App\Http\Controllers\Controller;
use App\Http\Requests\Supplier\SupplierStoreRequest;
use App\Models\Supplier;
use Illuminate\Http\Request;

class SupplierController extends Controller
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

        $suppliers = Supplier::query()
            ->search($search)
            ->orderBy($sortFields, $sortDirection)
            ->paginate(10)
            ->onEachSide(1);

        return inertia('Contacts/Suppliers/Index', [
            'suppliers'  => $suppliers,
            'successMessage' => session('success'),
            'queryParams' => request()->query(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Contacts/Suppliers/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SupplierStoreRequest $request)
    {
        Supplier::create($request->all());

        return redirect()->route('supplier.index')->with('success', 'Supplier created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return inertia('Contacts/Suppliers/Show', [
            'supplier' => Supplier::findorfail($id),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return inertia('Contacts/Suppliers/Edit', [
            'supplier' => Supplier::findorfail($id),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(SupplierStoreRequest $request, string $id)
    {
        Supplier::findorfail($id)->update($request->validated());

        return redirect()->route('supplier.index')->with('success', 'Supplier updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Supplier::findorfail($id)->delete();

        return redirect()->route('supplier.index')->with('success', 'Supplier deleted successfully');
    }
}
