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
        Schema::create('cash_registers', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('business_id')->index('cash_registers_business_id_foreign');
            $table->unsignedInteger('user_id')->nullable()->index('cash_registers_user_id_foreign');
            $table->enum('status', ['close', 'open'])->default('open');
            $table->dateTime('closed_at')->nullable();
            $table->integer('denom1000')->nullable();
            $table->integer('denom500')->nullable();
            $table->integer('denom200')->nullable();
            $table->integer('denom100')->nullable();
            $table->integer('denom50')->nullable();
            $table->integer('denom20')->nullable();
            $table->integer('denom10')->nullable();
            $table->integer('denom5')->nullable();
            $table->integer('denom1')->nullable();
            $table->integer('denom_25')->nullable();
            $table->decimal('closing_amount', 20)->default(0);
            $table->integer('total_card_slips')->default(0);
            $table->integer('total_cheques')->default(0);
            $table->text('closing_note')->nullable();
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
        Schema::dropIfExists('cash_registers');
    }
};
