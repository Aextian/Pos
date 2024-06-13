<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $table = 'products';

    protected $filliable = [
        'name', 'type', 'unit_id', 'brand_id', 'category_id', 'sub_category_id', 'tax', 'tax_type', 'enable_stock', 'alert_quantity', 'sku', 'barcode_type', 'expiry_period_type', 'expiry_period',  'enable_sr_no', 'weight', 'product_custom_field1', 'product_custom_field2', 'product_custom_field3', 'product_custom_field4', 'image', 'product_description', 'created_by', 'is_inactive'
    ];

    public function scopeSearch($query, $search)
    {
        if ($search) {

            return $query->when(function ($query) use ($search) {
                $query->where('name', 'like', '%' . $search . '%')
                    ->orWhere('type', 'like', '%' . $search . '%')
                    ->orWhere('tax_type', 'like', '%' . $search . '%')
                    ->orWhere('enable_stock', 'like', '%' . $search . '%')
                    ->orWhere('alert_quantity', 'like', '%' . $search . '%')
                    ->orWhere('barcode_type', 'like', '%' . $search . '%')
                    ->orWhere('expiry_period_type', 'like', '%' . $search . '%')
                    ->orWhere('expiry_period', 'like', '%' . $search . '%')
                    ->orWhere('weight', 'like', '%' . $search . '%')
                    ->orWhere('enable_sr_no', 'like', '%' . $search . '%');
            });
        }
        return $query;
    }
}
