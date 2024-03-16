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
        Schema::create('ros_products', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('ros_id')->index('ros_products_ros_id_foreign');
            $table->unsignedInteger('product_id')->index('ros_products_product_id_foreign');
            $table->unsignedInteger('variation_id')->index('ros_products_variation_id_foreign');
            $table->unsignedInteger('purchase_line_id')->nullable()->index('ros_products_purchase_line_id_foreign');
            $table->integer('quantity');
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
        Schema::dropIfExists('ros_products');
    }
};
