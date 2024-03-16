<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contacts', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('business_id')->index('contacts_business_id_foreign');
            $table->enum('type', ['supplier', 'customer', 'both']);
            $table->string('supplier_business_name', 191)->nullable();
            $table->string('name', 191);
            $table->string('email', 191)->nullable();
            $table->string('contact_id', 191)->nullable();
            $table->string('tax_number', 191)->nullable();
            $table->string('city', 191)->nullable();
            $table->string('state', 191)->nullable();
            $table->string('country', 191)->nullable();
            $table->string('landmark', 191)->nullable();
            $table->string('mobile', 191);
            $table->string('landline', 191)->nullable();
            $table->string('alternate_number', 191)->nullable();
            $table->integer('pay_term_number')->nullable();
            $table->enum('pay_term_type', ['days', 'months'])->nullable();
            $table->decimal('credit_limit', 20)->nullable();
            $table->unsignedInteger('created_by')->index('contacts_created_by_foreign');
            $table->boolean('is_default')->default(false);
            $table->integer('customer_group_id')->nullable();
            $table->string('custom_field1', 191)->nullable();
            $table->string('custom_field2', 191)->nullable();
            $table->string('custom_field3', 191)->nullable();
            $table->string('custom_field4', 191)->nullable();
            $table->softDeletes();
            $table->timestamps();
            $table->string('points_value', 191)->default('0');
            $table->integer('points_status');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('contacts');
    }
};
