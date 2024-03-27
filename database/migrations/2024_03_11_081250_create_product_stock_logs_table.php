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
        Schema::create('product_stock_logs', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('business_id')->index('product_stock_logs_business_id_foreign');
            $table->unsignedInteger('product_id')->index('product_stock_logs_product_id_foreign');
            $table->integer('previous_stock')->nullable();
            $table->integer('current_stock')->nullable();
            $table->unsignedInteger('created_by')->index('product_stock_logs_created_by_foreign');
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
        Schema::dropIfExists('product_stock_logs');
    }
};
