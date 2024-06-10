<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ContactRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $routeName = $this->route()->getName();

        $rules = [
            'name' => ['required', 'string', 'max:255'],
            'mobile' => ['required'],
            'status' => ['string', Rule::in(['true', 'false'])],
            'supplier_business_name' => ['max:255'],
            'type' => ['required']
        ];

        if ($routeName !== 'customer.store') {
            $rules['supplier_business_name'][] = 'required';
        }

        return $rules;
    }

    public function attributes()
    {
        return [
            'mobile' => __('mobile number'),
        ];
    }
}
