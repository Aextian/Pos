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
        Schema::table('purchase_lines', function (Blueprint $table) {
            $table->foreign(['product_id'])->references(['id'])->on('products')->onUpdate('no action')->onDelete('cascade');
            $table->foreign(['tax_id'])->references(['id'])->on('tax_rates')->onUpdate('no action')->onDelete('cascade');
            $table->foreign(['transaction_id'])->references(['id'])->on('transactions')->onUpdate('no action')->onDelete('cascade');
            $table->foreign(['variation_id'])->references(['id'])->on('variations')->onUpdate('no action')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('purchase_lines', function (Blueprint $table) {
            $table->dropForeign('purchase_lines_product_id_foreign');
            $table->dropForeign('purchase_lines_tax_id_foreign');
            $table->dropForeign('purchase_lines_transaction_id_foreign');
            $table->dropForeign('purchase_lines_variation_id_foreign');
        });
    }
};
