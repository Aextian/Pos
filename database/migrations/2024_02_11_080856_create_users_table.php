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
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->char('prefix', 10)->nullable();
            $table->string('first_name', 191);
            $table->string('last_name', 191)->nullable();
            $table->string('username', 191)->unique();
            $table->string('email', 191)->nullable();
            $table->string('password', 191);
            $table->char('language', 4)->default('en');
            $table->char('contact_no', 15)->nullable();
            $table->text('address')->nullable();
            $table->rememberToken();
            $table->unsignedInteger('business_id')->nullable()->index('users_business_id_foreign');
            $table->enum('status', ['active', 'inactive', 'terminated'])->default('active');
            $table->boolean('is_cmmsn_agnt')->default(false);
            $table->decimal('cmmsn_percent', 4)->default(0);
            $table->boolean('selected_contacts')->default(false);
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
        Schema::dropIfExists('users');
    }
};
