<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Contact extends Model
{
    use HasFactory;

    protected $table = 'contacts';

    protected $fillable = [
        'business_id',
        'type',
        'supplier_business_name',
        'name',
        'email',
        'contact_id',
        'tax_number',
        'city',
        'state',
        'country',
        'landmark', 'mobile',
        'landline',
        'alternative_number',
        'points_status',
        'pay_term_number',
        'alternate_number',
        'pay_term_type',
        'custom_field1',
        'custom_field2',
        'custom_field3',
        'custom_field4',
        'customer_group_id',
        'is_default',
        'created_by ',
        'credit_limit'
    ];

    public function scopeSearch($query, $search)
    {
        if ($search) {

            return $query->when(function ($query) use ($search) {
                $query->where('name', 'like', '%' . $search . '%')
                    ->orWhere('email', 'like', '%' . $search . '%')
                    ->orWhere('supplier_business_name', 'like', '%' . $search . '%')
                    ->orWhere('type', 'like', '%' . $search . '%')
                    ->orWhere('contact_id', 'like', '%' . $search . '%')
                    ->orWhere('tax_number', 'like', '%' . $search . '%')
                    ->orWhere('city', 'like', '%' . $search . '%')
                    ->orWhere('state', 'like', '%' . $search . '%')
                    ->orWhere('country', 'like', '%' . $search . '%')
                    ->orWhere('landmark', 'like', '%' . $search . '%');
            });
        }
        return $query;
    }


    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'user_contact_access', 'contact_id', 'user_id');
    }
}
