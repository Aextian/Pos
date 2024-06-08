<?php

namespace App\Http\Requests\Supplier;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class SupplierStoreRequest extends FormRequest
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
        $contactID = $this->route('supplier');

        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', Rule::unique('contacts')->ignore($contactID)],
            'mobile' => ['required'],
            'pay_term_number' => ['numeric'],
            'status' => ['string', Rule::in(['true', 'false'])],
            'supplier_business_name' => ['required', 'string', 'max:255'],
            'type' => ['required']

        ];
    }

    public function attributes()
    {
        return [
            'mobile' => __('mobile number'),
        ];
    }
}
