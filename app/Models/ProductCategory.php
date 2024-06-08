<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductCategory extends Model
{
    protected $table = 'categories';

    use HasFactory;

    public function scopeSearch($query, $search)
    {
        if ($search) {
            $query->whereAny(
                [
                    'name', 'short_code'
                ],
                'LIKE',
                "%$search%"
            );
        }
        return $query;
    }


    protected $fillable = [
        'name',
        'business_id',
        'short_code',
        'parent_id',
        'cat_discount',
        'cat_status',
        'created_at',
    ];
}
