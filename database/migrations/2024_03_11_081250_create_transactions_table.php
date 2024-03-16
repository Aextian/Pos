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
        Schema::create('transactions', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('business_id')->index();
            $table->unsignedInteger('location_id')->index();
            $table->string('ip_address', 191);
            $table->string('mac_address', 191);
            $table->unsignedInteger('res_table_id')->nullable()->comment('fields to restaurant module');
            $table->unsignedInteger('res_waiter_id')->nullable()->comment('fields to restaurant module');
            $table->enum('res_order_status', ['received', 'cooked', 'served'])->nullable();
            $table->enum('type', ['purchase', 'sell', 'expense', 'stock_adjustment', 'sell_transfer', 'purchase_transfer', 'opening_stock', 'sell_return', 'opening_balance', 'purchase_return'])->nullable()->index();
            $table->string('sub_type', 20)->nullable()->index();
            $table->enum('status', ['received', 'pending', 'ordered', 'draft', 'final']);
            $table->boolean('is_quotation')->default(false);
            $table->enum('payment_status', ['paid', 'due', 'partial'])->nullable();
            $table->enum('adjustment_type', ['normal', 'abnormal'])->nullable();
            $table->unsignedInteger('contact_id')->nullable()->index();
            $table->integer('customer_group_id')->nullable()->comment('used to add customer group while selling');
            $table->string('invoice_no', 191)->nullable();
            $table->string('ref_no', 191)->nullable();
            $table->string('subscription_no', 191)->nullable();
            $table->dateTime('transaction_date')->index();
            $table->decimal('total_before_tax', 20)->default(0);
            $table->unsignedInteger('tax_id')->nullable()->index('transactions_tax_id_foreign');
            $table->decimal('tax_amount', 20)->default(0);
            $table->enum('discount_type', ['fixed', 'percentage'])->nullable();
            $table->string('discount_amount', 10)->nullable();
            $table->string('shipping_details', 191)->nullable();
            $table->decimal('shipping_charges', 20)->default(0);
            $table->text('additional_notes')->nullable();
            $table->text('staff_note')->nullable();
            $table->string('s_id', 191)->nullable();
            $table->string('s_name', 191)->nullable();
            $table->string('s_addr', 191)->nullable();
            $table->decimal('final_total', 20)->default(0);
            $table->unsignedInteger('expense_category_id')->nullable()->index();
            $table->unsignedInteger('expense_for')->nullable()->index('transactions_expense_for_foreign');
            $table->integer('commission_agent')->nullable();
            $table->string('document', 191)->nullable();
            $table->boolean('is_direct_sale')->default(false);
            $table->boolean('is_suspend')->default(false);
            $table->decimal('exchange_rate', 20, 3)->default(1);
            $table->decimal('total_amount_recovered', 20)->nullable()->comment('Used for stock adjustment.');
            $table->integer('transfer_parent_id')->nullable();
            $table->integer('return_parent_id')->nullable();
            $table->integer('opening_stock_product_id')->nullable();
            $table->unsignedInteger('created_by')->index();
            $table->text('order_addresses')->nullable();
            $table->boolean('is_recurring')->default(false);
            $table->double('recur_interval', 8, 2)->nullable();
            $table->enum('recur_interval_type', ['days', 'months', 'years'])->nullable();
            $table->integer('recur_repetitions')->nullable();
            $table->dateTime('recur_stopped_on')->nullable();
            $table->integer('recur_parent_id')->nullable();
            $table->string('invoice_token', 191)->nullable();
            $table->integer('pay_term_number')->nullable();
            $table->enum('pay_term_type', ['days', 'months'])->nullable();
            $table->integer('selling_price_group_id')->nullable();
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
        Schema::dropIfExists('transactions');
    }
};
