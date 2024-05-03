<?php

namespace App\Http\Controllers\Reports;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ReportController extends Controller
{
    public function purchase_sell()
    {
        return inertia('Reports/PurchaseReport');
    }

    public function purchase_report()
    {
        return inertia('Reports/StockValueReport');
    }
    public function tax_report()
    {
        return inertia('Reports/TaxReport');
    }
    public function customer_supplier()
    {
        return inertia('Reports/SupplierCustomerReport');
    }

    public function group_report()
    {
        return inertia('Reports/GroupReport');
    }
    public function stock_report()
    {
        return inertia('Reports/StockReport');
    }
    public function opening_stock_report()
    {
        return inertia('Reports/OpeningStockReport');
    }
    public function stock_expiry_report()
    {
        return inertia('Reports/StockExpiryReport');
    }
    public function lot_report()
    {
        return inertia('Reports/LotReport');
    }
    public function trending_product()
    {
        return inertia('Reports/TrendingProduct');
    }
    public function stock_adjustment_report()
    {
        return inertia('Reports/StockAdjustmentReport');
    }

    public function product_purchase_report()
    {
        return inertia('Reports/ProductPurchaseReport');
    }
    public function product_sell_report()
    {
        return inertia('Reports/ProductSellReport');
    }
    public function purchase_payment_report()
    {
        return inertia('Reports/PurchasePaymentReport');
    }
    public function sell_payment_report()
    {
        return inertia('Reports/SellPaymentReport');
    }
    public function expense_report()
    {
        return inertia('Reports/ExpenseReport');
    }
    public function Register_report()
    {
        return inertia('Reports/RegisterReport');
    }

    public function sale_rep_report()
    {
        return inertia('Reports/SaleRepReport');
    }
}
