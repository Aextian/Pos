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
        Schema::table('void_transactions', function (Blueprint $table) {
            $table->foreign(['business_id'])->references(['id'])->on('business')->onUpdate('no action')->onDelete('cascade');
            $table->foreign(['contact_id'])->references(['id'])->on('contacts')->onUpdate('no action')->onDelete('cascade');
            $table->foreign(['created_by'])->references(['id'])->on('users')->onUpdate('no action')->onDelete('cascade');
            $table->foreign(['expense_category_id'])->references(['id'])->on('expense_categories')->onUpdate('no action')->onDelete('cascade');
            $table->foreign(['expense_for'])->references(['id'])->on('users')->onUpdate('no action')->onDelete('cascade');
            $table->foreign(['location_id'])->references(['id'])->on('business_locations')->onUpdate('no action')->onDelete('no action');
            $table->foreign(['tax_id'])->references(['id'])->on('tax_rates')->onUpdate('no action')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('void_transactions', function (Blueprint $table) {
            $table->dropForeign('void_transactions_business_id_foreign');
            $table->dropForeign('void_transactions_contact_id_foreign');
            $table->dropForeign('void_transactions_created_by_foreign');
            $table->dropForeign('void_transactions_expense_category_id_foreign');
            $table->dropForeign('void_transactions_expense_for_foreign');
            $table->dropForeign('void_transactions_location_id_foreign');
            $table->dropForeign('void_transactions_tax_id_foreign');
        });
    }
};
