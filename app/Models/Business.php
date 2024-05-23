<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Business extends Model
{
    use HasFactory;

    protected $table = 'business';

    protected $guarded = ['id'];

    public function currency(): BelongsTo
    {
        return $this->belongsTo(Currency::class);
    }
}
