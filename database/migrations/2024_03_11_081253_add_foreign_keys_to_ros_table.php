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
        Schema::table('ros', function (Blueprint $table) {
            $table->foreign(['approved_by'])->references(['id'])->on('users')->onUpdate('no action')->onDelete('cascade');
            $table->foreign(['business_id'])->references(['id'])->on('business')->onUpdate('no action')->onDelete('cascade');
            $table->foreign(['from_id'])->references(['id'])->on('business_locations')->onUpdate('no action')->onDelete('no action');
            $table->foreign(['rejected_by'])->references(['id'])->on('users')->onUpdate('no action')->onDelete('cascade');
            $table->foreign(['requested_by'])->references(['id'])->on('users')->onUpdate('no action')->onDelete('cascade');
            $table->foreign(['to_id'])->references(['id'])->on('business_locations')->onUpdate('no action')->onDelete('no action');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('ros', function (Blueprint $table) {
            $table->dropForeign('ros_approved_by_foreign');
            $table->dropForeign('ros_business_id_foreign');
            $table->dropForeign('ros_from_id_foreign');
            $table->dropForeign('ros_rejected_by_foreign');
            $table->dropForeign('ros_requested_by_foreign');
            $table->dropForeign('ros_to_id_foreign');
        });
    }
};
