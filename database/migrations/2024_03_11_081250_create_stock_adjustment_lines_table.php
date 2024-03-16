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
        Schema::create('stock_adjustment_lines', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('transaction_id')->index();
            $table->unsignedInteger('product_id')->index('stock_adjustment_lines_product_id_foreign');
            $table->unsignedInteger('variation_id')->index('stock_adjustment_lines_variation_id_foreign');
            $table->decimal('quantity', 20, 4);
            $table->decimal('unit_price', 20)->nullable()->comment('Last purchase unit price');
            $table->integer('removed_purchase_line')->nullable();
            $table->integer('lot_no_line_id')->nullable();
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
        Schema::dropIfExists('stock_adjustment_lines');
    }
};
