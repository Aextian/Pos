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
        Schema::create('customer_product_discounts', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('product_id')->index('customer_product_discounts_product_id_foreign');
            $table->unsignedInteger('customer_id')->index('customer_product_discounts_customer_id_foreign');
            $table->decimal('discount', 20)->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customer_product_discounts');
    }
};
