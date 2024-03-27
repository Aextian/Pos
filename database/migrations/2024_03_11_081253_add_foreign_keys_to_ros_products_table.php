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
        Schema::table('ros_products', function (Blueprint $table) {
            $table->foreign(['product_id'])->references(['id'])->on('products')->onUpdate('no action')->onDelete('cascade');
            $table->foreign(['purchase_line_id'])->references(['id'])->on('purchase_lines')->onUpdate('no action')->onDelete('cascade');
            $table->foreign(['ros_id'])->references(['id'])->on('ros')->onUpdate('no action')->onDelete('cascade');
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
        Schema::table('ros_products', function (Blueprint $table) {
            $table->dropForeign('ros_products_product_id_foreign');
            $table->dropForeign('ros_products_purchase_line_id_foreign');
            $table->dropForeign('ros_products_ros_id_foreign');
            $table->dropForeign('ros_products_variation_id_foreign');
        });
    }
};
