<?php

namespace App\Http\Controllers\Contacts;

use App\Http\Controllers\Controller;
use App\Http\Requests\ContactRequest;
use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function supplier()
    {
        // sorting fields and direction
        $sortFields = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", 'desc');
        $search = request('search');

        $suppliers = Contact::query()
            ->search($search)
            ->orderBy($sortFields, $sortDirection)
            ->paginate(10)
            ->onEachSide(1);

        return inertia('Contacts/Supplier', [
            'suppliers'  => $suppliers,
            'successMessage' => session('success'),
            'queryParams' => request()->query(),
        ]);
    }

    // public function customer()
    // {
    //      // sorting fields and direction
    //      $sortFields = request("sort_field", 'created_at');
    //      $sortDirection = request("sort_direction", 'desc');
    //      $search = request('search');

    //      $suppliers = Contact::query()
    //          ->search($search)
    //          ->orderBy($sortFields, $sortDirection)
    //          ->paginate(10)
    //          ->onEachSide(1);

    //      return inertia('Contacts/Suppliers/Index', [
    //          'suppliers'  => $suppliers,
    //          'successMessage' => session('success'),
    //          'queryParams' => request()->query(),
    //      ]);
    // }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        return inertia('Contacts/Create', [
            'type' =>  $type = request('type')
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ContactRequest $request)
    {

        $supplier = new Contact($request->all());
        $supplier->business_id = auth()->user()->business_id;
        $supplier->save();

        return redirect()->route('supplier.index')->with('success', 'Supplier created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return inertia('Contacts/Suppliers/Show', [
            'supplier' => Contact::findorfail($id),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        Contact::findorfail($id)->update($request->all());

        return redirect()->route('supplier.index')->with('success', 'Supplier updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Contact::findorfail($id)->delete();

        return back();
    }

    public function import_contact()
    {
        return inertia('Contacts/ImportContact');
    }
}
