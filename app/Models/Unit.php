<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Unit extends Model
{
    use HasFactory;


    protected $table = 'units';

    protected $fillable = [
        'actual_name',
        'short_name',
        'allow_decimal',
        'base_unit_id',
        'base_unit_multiplier',
    ];

    public function scopeSearch($query, $search)
    {
        if ($search) {
            $query->whereAny(
                [
                    'actual_name', 'short_name', 'allow_decimal'
                ],
                'LIKE',
                "%$search%"
            );
        }

        return $query;
    }
}
