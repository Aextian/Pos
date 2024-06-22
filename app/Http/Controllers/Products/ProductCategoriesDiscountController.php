<?php

namespace App\Http\Controllers\Products;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryDiscountRequest;
use App\Models\ProductCategory;
use Illuminate\Http\Request;

class ProductCategoriesDiscountController extends Controller
{

    public function index()
    {
        // sorting fields and direction
        $sortFields = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", 'desc');
        $search = request('search');

        $categories = ProductCategory::query()
            ->search($search)
            ->orderBy($sortFields, $sortDirection)
            ->whereNull('parent_id')
            ->paginate(10)
            ->onEachSide(1);

        return inertia('Products/CategoriesDiscount/Index', [
            'categories' => $categories,
            'successMessage' => session('success'),
            'queryParams' => request()->query(),
        ]);
    }
    //    update category dicount
    public function update(CategoryDiscountRequest $request, string $id)
    {

        $discount = ProductCategory::findorfail($id);
        $discount->cat_discount = $request->input('cat_discount');
        $discount->cat_status = $request->input('cat_status');
        $discount->save();

        return back();
    }
}
