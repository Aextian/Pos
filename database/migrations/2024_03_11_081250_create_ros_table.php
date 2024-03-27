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
        Schema::create('ros', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('business_id')->index('ros_business_id_foreign');
            $table->unsignedInteger('from_id')->index('ros_from_id_foreign');
            $table->unsignedInteger('to_id')->index('ros_to_id_foreign');
            $table->dateTime('request_date');
            $table->enum('status', ['pending', 'approved', 'rejected']);
            $table->unsignedInteger('requested_by')->nullable()->index('ros_requested_by_foreign');
            $table->unsignedInteger('rejected_by')->nullable()->index('ros_rejected_by_foreign');
            $table->unsignedInteger('approved_by')->nullable()->index('ros_approved_by_foreign');
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
        Schema::dropIfExists('ros');
    }
};
