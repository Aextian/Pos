<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tax extends Model
{
    use HasFactory;
    protected $table = 'tax_rates';

    protected $fillable = [
        'name', 'amount', 'is_tax_group', 'created_by'
    ];


    public function scopeSearch($query, $search)
    {
        if ($search) {
            $query->whereAny(
                [
                    'name', 'amount', 'is_tax_group'
                ],
                'LIKE',
                "%$search%"
            );
        }

        return $query;
    }
}
