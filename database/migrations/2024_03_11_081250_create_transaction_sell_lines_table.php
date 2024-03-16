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
        Schema::create('transaction_sell_lines', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('transaction_id')->index('transaction_sell_lines_transaction_id_foreign');
            $table->unsignedInteger('product_id')->index('transaction_sell_lines_product_id_foreign');
            $table->unsignedInteger('variation_id')->index('transaction_sell_lines_variation_id_foreign');
            $table->decimal('quantity', 20, 4);
            $table->decimal('quantity_returned', 20, 4)->default(0);
            $table->decimal('unit_price_before_discount', 20)->default(0);
            $table->decimal('unit_price', 20)->nullable();
            $table->string('ship_fee', 191)->nullable();
            $table->string('note', 191)->nullable();
            $table->enum('line_discount_type', ['fixed', 'percentage'])->nullable();
            $table->decimal('line_discount_amount', 20)->default(0);
            $table->decimal('unit_price_inc_tax', 20)->nullable();
            $table->decimal('item_tax', 20)->nullable();
            $table->unsignedInteger('tax_id')->nullable()->index('transaction_sell_lines_tax_id_foreign');
            $table->integer('discount_id')->nullable();
            $table->integer('category_discount')->default(0);
            $table->decimal('discount_value', 20)->default(0);
            $table->integer('lot_no_line_id')->nullable();
            $table->text('sell_line_note')->nullable();
            $table->integer('res_service_staff_id')->nullable();
            $table->string('res_line_order_status', 191)->nullable();
            $table->integer('parent_sell_line_id')->nullable();
            $table->integer('sub_unit_id')->nullable();
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
        Schema::dropIfExists('transaction_sell_lines');
    }
};
