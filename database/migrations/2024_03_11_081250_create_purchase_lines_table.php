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
        Schema::create('purchase_lines', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('transaction_id')->index('purchase_lines_transaction_id_foreign');
            $table->unsignedInteger('product_id')->index('purchase_lines_product_id_foreign');
            $table->unsignedInteger('variation_id')->index('purchase_lines_variation_id_foreign');
            $table->decimal('quantity', 20, 4);
            $table->decimal('pp_without_discount', 20)->default(0)->comment('Purchase price before inline discounts');
            $table->decimal('discount_percent', 5)->default(0)->comment('Inline discount percentage');
            $table->decimal('purchase_price', 20)->nullable();
            $table->decimal('purchase_price_inc_tax', 20)->default(0);
            $table->decimal('item_tax', 20)->nullable();
            $table->unsignedInteger('tax_id')->nullable()->index('purchase_lines_tax_id_foreign');
            $table->decimal('quantity_sold', 20, 4)->nullable()->default(0);
            $table->decimal('quantity_adjusted', 20, 4)->nullable()->default(0);
            $table->decimal('quantity_returned', 20, 4)->default(0);
            $table->date('mfg_date')->nullable();
            $table->date('exp_date')->nullable();
            $table->string('lot_number', 256)->nullable();
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
        Schema::dropIfExists('purchase_lines');
    }
};
