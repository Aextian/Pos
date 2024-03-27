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
        Schema::create('void_transactions', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('business_id')->index();
            $table->unsignedInteger('location_id')->index('void_transactions_location_id_foreign');
            $table->enum('type', ['purchase', 'sell'])->index();
            $table->enum('status', ['received', 'pending', 'ordered', 'draft', 'final']);
            $table->enum('payment_status', ['paid', 'due', 'void']);
            $table->unsignedInteger('contact_id')->index();
            $table->string('invoice_no', 191)->nullable();
            $table->string('ref_no', 191)->nullable();
            $table->dateTime('transaction_date')->index();
            $table->decimal('total_before_tax')->default(0)->comment('Total before the purchase/invoice tax, this includeds the indivisual product tax');
            $table->unsignedInteger('tax_id')->nullable()->index('void_transactions_tax_id_foreign');
            $table->decimal('tax_amount')->default(0);
            $table->enum('discount_type', ['fixed', 'percentage'])->nullable();
            $table->string('discount_amount', 10)->nullable();
            $table->string('shipping_details', 191)->nullable();
            $table->decimal('shipping_charges')->default(0);
            $table->text('additional_notes')->nullable();
            $table->text('staff_note')->nullable();
            $table->string('s_id', 191)->nullable();
            $table->string('s_name', 191)->nullable();
            $table->string('s_addr', 191)->nullable();
            $table->decimal('final_total')->default(0);
            $table->string('ip_address', 191);
            $table->string('mac_address', 191);
            $table->decimal('exchange_rate', 8, 3)->default(1);
            $table->string('document', 191)->nullable();
            $table->boolean('is_direct_sale')->default(false);
            $table->enum('adjustment_type', ['normal', 'abnormal'])->nullable();
            $table->decimal('total_amount_recovered', 20)->nullable()->comment('Used for stock adjustment.');
            $table->integer('commission_agent')->nullable();
            $table->unsignedInteger('res_table_id')->nullable();
            $table->unsignedInteger('res_waiter_id')->nullable();
            $table->enum('res_order_status', ['received', 'cooked', 'served'])->nullable();
            $table->integer('selling_price_group_id')->nullable();
            $table->integer('pay_term_number')->nullable();
            $table->enum('pay_term_type', ['days', 'months'])->nullable();
            $table->boolean('is_suspend')->default(false);
            $table->boolean('is_recurring')->default(false);
            $table->double('recur_interval', 8, 2)->nullable();
            $table->enum('recur_interval_type', ['days', 'months', 'years'])->nullable();
            $table->integer('recur_repetitions')->nullable();
            $table->dateTime('recur_stopped_on')->nullable();
            $table->integer('recur_parent_id')->nullable();
            $table->string('subscription_no', 191)->nullable();
            $table->text('order_addresses')->nullable();
            $table->string('sub_type', 20)->nullable()->index();
            $table->boolean('is_quotation');
            $table->integer('customer_group_id')->nullable()->comment('used to add customer group while selling');
            $table->unsignedInteger('expense_category_id')->nullable()->index();
            $table->unsignedInteger('expense_for')->nullable()->index('void_transactions_expense_for_foreign');
            $table->integer('transfer_parent_id')->nullable();
            $table->integer('return_parent_id')->nullable();
            $table->integer('opening_stock_product_id')->nullable();
            $table->string('invoice_token', 191)->nullable();
            $table->unsignedInteger('created_by')->index();
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
        Schema::dropIfExists('void_transactions');
    }
};
