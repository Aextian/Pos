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
        Schema::table('z_readings', function (Blueprint $table) {
            $table->foreign(['created_by'], 'zread_creadted_by_foriegn')->references(['id'])->on('users')->onUpdate('no action')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('z_readings', function (Blueprint $table) {
            $table->dropForeign('zread_creadted_by_foriegn');
        });
    }
};
