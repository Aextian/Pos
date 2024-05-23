<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Supplier>
 */
class SupplierFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'business_id' => 1,
            'type' => 'supplier',
            'supplier_business_name' => fake()->company(),
            'name' => fake()->name(),
            'email' => fake()->safeEmail(),
            'contact_id' => fake()->numberBetween(1, 10),
            'tax_number' => fake()->numberBetween(1, 10),
            'city' => fake()->city(),
            'state' => fake()->state(),
            'country' => fake()->country(),
            'landmark' => fake()->address(),
            'mobile' => fake()->phoneNumber(),
            'landline' => fake()->phoneNumber(),
            'alternate_number' => fake()->phoneNumber(),
            'pay_term_number' => fake()->numberBetween(1, 10),
            'created_by' => 1,
            'points_status' => 1,
        ];
    }
}
