<?php

namespace App\Http\Controllers\Contacts;

use App\Http\Controllers\Controller;
use App\Http\Requests\ContactRequest;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Routing\Route;

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
            ->where('type', '!=', 'customer')
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

    public function customer()
    {
        // sorting fields and direction
        $sortFields = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", 'desc');
        $search = request('search');

        $customers = Contact::query()
            ->where('type', '!=', 'supplier')
            ->search($search)
            ->orderBy($sortFields, $sortDirection)
            ->paginate(10)
            ->onEachSide(1);

        return inertia('Contacts/Customer', [
            'customers'  => $customers,
            'successMessage' => session('success'),
            'queryParams' => request()->query(),
        ]);
    }


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
        $supplier->created_by = auth()->user()->id;
        $supplier->save();

        if ($request->type == "supplier") {
            return redirect()->route('contacts.supplier')->with('success', 'Supplier created successfully');
        } else if ($request->type == "customer") {
            return redirect()->route('contacts.customer')->with('success', 'Customer created successfully');
        }

        return redirect()->route('contacts.supplier')->with('success', 'Both created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {

        return inertia('Contacts/Suppliers/Show', [
            'contact' => Contact::findorfail($id),
            'type' => request('type')
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return inertia('Contacts/Edit', [
            'contact' => Contact::findorfail($id),
            'type' => request('type')
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ContactRequest $request, string $id)
    {

        $contact =  Contact::findorfail($id)->update($request->all());

        if ($request->t == "supplier") {
            return redirect()->route('contacts.supplier')->with('success', 'Supplier created successfully');
        } else if ($request->t == "customer") {
            return redirect()->route('contacts.customer')->with('success', 'Customer created successfully');
        }
        return redirect()->route('contacts.supplier')->with('success', 'Both created successfully');
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
