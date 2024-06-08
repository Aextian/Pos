<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CustomerGroup extends Model
{
    protected $table = 'customer_groups';

    protected $fillable = ['name', 'amount'];

    use HasFactory;

    public function scopeSearch($query, $search)
    {
        if ($search) {
            $query->whereAny(
                [
                    'name', 'amount'
                ],
                'LIKE',
                "%$search%"
            );
        }

        return $query;
    }
}
