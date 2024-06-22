<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PriceGroup extends Model
{
    use HasFactory;

    protected $table = 'selling_price_groups';

    protected $fillable = ['name', 'description'];


    public function scopeSearch($query, $search)
    {
        if ($search) {
            return $query->when(function ($query) use ($search) {
                $query->where('name', 'like', '%' . $search . '%')
                    ->orWhere('description', 'like', '%' . $search . '%');
            });
        }
        return $query;
    }
}
