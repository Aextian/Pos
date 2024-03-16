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
        Schema::table('product_purchase_price_logs', function (Blueprint $table) {
            $table->foreign(['business_id'])->references(['id'])->on('business')->onUpdate('no action')->onDelete('cascade');
            $table->foreign(['created_by'])->references(['id'])->on('users')->onUpdate('no action')->onDelete('cascade');
            $table->foreign(['product_id'])->references(['id'])->on('products')->onUpdate('no action')->onDelete('cascade');
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
        Schema::table('product_purchase_price_logs', function (Blueprint $table) {
            $table->dropForeign('product_purchase_price_logs_business_id_foreign');
            $table->dropForeign('product_purchase_price_logs_created_by_foreign');
            $table->dropForeign('product_purchase_price_logs_product_id_foreign');
            $table->dropForeign('product_purchase_price_logs_variation_id_foreign');
        });
    }
};
