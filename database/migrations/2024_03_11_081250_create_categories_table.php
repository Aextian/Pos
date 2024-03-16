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
        Schema::create('categories', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 191);
            $table->unsignedInteger('business_id')->index('categories_business_id_foreign');
            $table->string('short_code', 191)->nullable();
            $table->integer('parent_id');
            $table->integer('cat_discount')->default(0);
            $table->integer('cat_status')->default(0);
            $table->unsignedInteger('created_by')->index('categories_created_by_foreign');
            $table->softDeletes();
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
        Schema::dropIfExists('categories');
    }
};
