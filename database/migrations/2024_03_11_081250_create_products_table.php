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
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 191)->index();
            $table->unsignedInteger('business_id')->index();
            $table->enum('type', ['single', 'variable', 'modifier'])->nullable();
            $table->unsignedInteger('unit_id')->nullable()->index();
            $table->unsignedInteger('brand_id')->nullable()->index('products_brand_id_foreign');
            $table->unsignedInteger('category_id')->nullable()->index('products_category_id_foreign');
            $table->unsignedInteger('sub_category_id')->nullable()->index('products_sub_category_id_foreign');
            $table->unsignedInteger('tax')->nullable()->index('products_tax_foreign');
            $table->enum('tax_type', ['inclusive', 'exclusive']);
            $table->boolean('enable_stock')->default(false);
            $table->integer('alert_quantity');
            $table->string('sku', 191);
            $table->enum('barcode_type', ['C39', 'C128', 'EAN13', 'EAN8', 'UPCA', 'UPCE'])->nullable()->default('C128');
            $table->decimal('expiry_period', 4)->nullable();
            $table->enum('expiry_period_type', ['days', 'months'])->nullable();
            $table->boolean('enable_sr_no')->default(false);
            $table->string('weight', 191)->nullable();
            $table->string('product_custom_field1', 191)->nullable();
            $table->string('product_custom_field2', 191)->nullable();
            $table->string('product_custom_field3', 191)->nullable();
            $table->string('product_custom_field4', 191)->nullable();
            $table->string('image', 191)->nullable();
            $table->text('product_description')->nullable();
            $table->unsignedInteger('created_by')->index();
            $table->boolean('is_inactive')->default(false);
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
        Schema::dropIfExists('products');
    }
};
