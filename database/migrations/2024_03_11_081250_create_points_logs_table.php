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
        Schema::create('points_logs', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('business_id')->index('points_logs_business_id_foreign');
            $table->unsignedInteger('customer_id')->index('points_logs_customer_id_foreign');
            $table->string('points_prev', 191)->default('0');
            $table->string('points_red', 191)->default('0');
            $table->string('points_add', 191)->default('0');
            $table->string('points_balance', 191)->default('0');
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
        Schema::dropIfExists('points_logs');
    }
};
