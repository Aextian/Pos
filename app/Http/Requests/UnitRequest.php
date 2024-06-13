<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UnitRequest extends FormRequest
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

        $rules = [
            'actual_name' => ['required', 'string', 'max:255'],
            'short_name' => ['required', 'string', 'max:255'],
            'allow_decimal' => ['required',  Rule::in([1, 0])],
            'base_unit_id' => [],
            'base_unit_multiplier' => []
        ];


        if (request('enable_multiple_unit')) {
            $rules['base_unit_multiplier'] = ['required', 'numeric'];
            $rules['base_unit_id'] = ['required', 'numeric'];
        }

        return $rules;
    }

    public function attributes()
    {
        return [
            'base_unit_id' => __('base unit'),
        ];
    }
}
