<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Models\Tax;
use Illuminate\Http\Request;

class TaxController extends Controller
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
        $type = request('type');

        $tax_rates = Tax::query()
            ->where('business_id', auth()->user()->business_id)
            ->where('is_tax_group', false)
            ->when($type === 'tax-rates', function ($query) use ($search) {
                return $query->search($search);
            })
            ->orderBy($sortFields, $sortDirection)
            ->paginate(10)
            ->onEachSide(1);

        $tax_groups = Tax::query()
            ->where('business_id', auth()->user()->business_id)
            ->where('is_tax_group', true)
            ->when($type === 'tax-groups', function ($query) use ($search) {
                return $query->search($search);
            })
            ->orderBy($sortFields, $sortDirection)
            ->paginate(10)
            ->onEachSide(1);

        return inertia('Settings/TaxRates/Index', [
            'tax_rates' => $tax_rates,
            'tax_groups' => $tax_groups,
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
    public function store(Request $request)
    {

        $auth = auth()->user();

        $tax = new Tax($request->all());
        $tax->business_id = $auth->business_id;
        $tax->created_by = $auth->id;
        $tax->save();
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
        Tax::findorfail($id)->delete();

        return back();
    }
}
