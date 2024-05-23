<?php

namespace App\Http\Requests\Users;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserRequest extends FormRequest
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
        $userId = $this->route('user');


        $rules = [
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255',  Rule::unique('users')->ignore($userId)],
            'username' => ['required', 'string', 'max:255', Rule::unique('users')->ignore($userId)],
            'roles' => ['required'],
        ];

        // Add password validation only for create requests
        if ($this->isMethod('POST')) {
            $rules['password'] = 'required|string|min:8|confirmed';
        }

        // Add confirm_password validation only when password is present
        if ($this->filled('password')) {
            $rules['password_confirmation'] = 'required|string|min:8';
        }



        return $rules;
    }
}
