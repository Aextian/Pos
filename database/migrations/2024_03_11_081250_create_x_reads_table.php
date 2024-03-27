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
        Schema::create('x_reads', function (Blueprint $table) {
            $table->increments('id');
            $table->string('business_id', 191);
            $table->unsignedInteger('created_by')->nullable()->index('xread_created_by_foriegn');
            $table->string('mac_address', 191);
            $table->string('date', 191);
            $table->string('starting_invoice', 191);
            $table->string('ending_invoice', 191);
            $table->string('total_invoices', 191);
            $table->string('success_transactions', 191);
            $table->string('void_transactions', 191);
            $table->string('sales_amout', 191);
            $table->string('vatable_amount', 191);
            $table->string('vat_exempt', 191);
            $table->string('zero_rated', 191);
            $table->string('total_vat', 191);
            $table->string('previous_reading', 191);
            $table->string('current_sales', 191);
            $table->string('running_total', 191);
            $table->string('status', 191);
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
        Schema::dropIfExists('x_reads');
    }
};
