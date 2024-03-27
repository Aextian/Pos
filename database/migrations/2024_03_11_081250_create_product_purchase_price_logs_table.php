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
        Schema::create('product_purchase_price_logs', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('business_id')->index('product_purchase_price_logs_business_id_foreign');
            $table->unsignedInteger('product_id')->index('product_purchase_price_logs_product_id_foreign');
            $table->unsignedInteger('variation_id')->index('product_purchase_price_logs_variation_id_foreign');
            $table->decimal('current_price', 20)->nullable();
            $table->decimal('selling_price', 20)->nullable();
            $table->unsignedInteger('created_by')->index('product_purchase_price_logs_created_by_foreign');
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
        Schema::dropIfExists('product_purchase_price_logs');
    }
};
