import React from 'react'

import {
  FaWindowClose,
  FaChartPie,
  FaCartArrowDown,
  FaMoneyBill,
  FaShieldAlt,
  FaWarehouse,
  FaCalculator,
  FaChartArea,
  FaUser,
  FaUserLock,
  FaMoneyCheckAlt,
  FaAlignJustify,
  FaRegCircle,
  FaProductHunt,
  FaArrowAltCircleDown,
  FaIdCard,
  FaPrint,
  FaBarcode,
  FaPaperPlane,
  FaArrowUp,
  FaArrowDown,
  FaShoppingBag,
  FaCalendarTimes,
  FaDatabase,
} from 'react-icons/fa'
import { IoIosSettings } from 'react-icons/io'
import { FaArrowRotateLeft, FaArrowsLeftRightToLine, FaBoltLightning, FaBusinessTime, FaLocationPin } from 'react-icons/fa6'
import { MdContactPhone } from 'react-icons/md'
import { MdOutlineSell, MdOutlineDiscount } from 'react-icons/md'
import { IoAddCircleSharp } from 'react-icons/io5'
import { FiChevronDown } from 'react-icons/fi'
import { FaUsersLine } from 'react-icons/fa6'
import { CiBarcode, CiImport, CiSettings, CiZoomIn } from 'react-icons/ci'
import { BiCategory, BiTrendingUp } from 'react-icons/bi'
import { AiOutlineDeploymentUnit } from 'react-icons/ai'
import { SiBrandfolder } from 'react-icons/si'
import { LuPanelTopOpen } from 'react-icons/lu'

interface SidebarItemProps {
  title: string
  url?: any
  icon: React.ReactNode // Adjust this type as per your needs
  subMenuIcon?: React.ReactNode // Adjust this type as per your needs
  children?: Array<{
    title: string
    url: any
    icon: React.ReactNode // Adjust this type as per your needs
  }>
}

const sidebarData: SidebarItemProps[] = [
  {
    title: 'Dashboard',
    url: null,
    icon: <FaChartArea />,
    subMenuIcon: <FiChevronDown />,
  },

  {
    title: 'Stock Alert',
    url: '/stock-alert',
    icon: <FaChartArea />,
    subMenuIcon: <FiChevronDown />,
  },

  {
    title: 'User Management',
    icon: <FaUsersLine />,
    subMenuIcon: <FiChevronDown />,
    children: [
      {
        title: 'Users',
        icon: <FaUser />,
        url: '/users',
      },

      {
        title: 'Roles',
        icon: <FaUserLock />,
        url: '/roles',
      },

      {
        title: 'Sales Commission Agents',
        icon: <FaMoneyCheckAlt />,
        url: '/agents',
      },
    ],
  },

  {
    title: 'Contacts',
    icon: <MdContactPhone />,
    subMenuIcon: <FiChevronDown />,
    children: [
      {
        title: 'Suppliers',
        icon: <FaUser />,
        url: '/contacts/supplier',
      },

      {
        title: 'Customers',
        icon: <FaUserLock />,
        url: '/contacts/customer',
      },

      {
        title: 'Customer Groups',
        icon: <FaMoneyCheckAlt />,
        url: '/contacts/group',
      },

      {
        title: 'Import Contacts',
        icon: <FaMoneyCheckAlt />,
        url: '/import/contact',
      },
    ],
  },

  {
    title: 'Products',
    icon: <FaProductHunt />,
    subMenuIcon: <FiChevronDown />,
    children: [
      {
        title: 'List Prodcuts',
        icon: <FaAlignJustify />,
        url: '/products/product',
      },

      {
        title: 'Add Products',
        icon: <IoAddCircleSharp />,
        url: '/products/product/create',
      },

      {
        title: 'Print Label',
        icon: <CiBarcode />,
        url: '/products/label',
      },

      {
        title: 'Variations',
        icon: <FaRegCircle />,
        url: '/products/variation-template',
      },

      {
        title: 'Import Products',
        icon: <CiImport />,
        url: '/import/product',
      },
      {
        title: 'Import Opening Stock',
        icon: <CiImport />,
        url: '/import/opening-stock',
      },
      {
        title: 'Selling Price group',
        icon: <MdOutlineSell />,
        url: '/products/price-group',
      },
      {
        title: 'Units',
        icon: <AiOutlineDeploymentUnit />,
        url: '/products/unit',
      },
      {
        title: 'Categories',
        icon: <BiCategory />,
        url: '/products/categories',
      },
      {
        title: 'Brands',
        icon: <SiBrandfolder />,
        url: '/products/brand',
      },
      {
        title: 'Categories Discount',
        icon: <MdOutlineDiscount />,
        url: '/products/discount-categories',
      },
      {
        title: 'Request Stock',
        icon: <FaMoneyCheckAlt />,
        url: '/products/request-stock',
      },
      {
        title: 'Requested Stock',
        icon: <FaMoneyCheckAlt />,
        url: '/products/stock-requested',
      },
    ],
  },

  {
    title: 'Purchases',
    icon: <FaUsersLine />,
    subMenuIcon: <FiChevronDown />,
    children: [
      {
        title: 'List Purchases',
        icon: <FaAlignJustify />,
        url: '/purchase/purchases',
      },

      {
        title: 'Add Purchases',
        icon: <IoAddCircleSharp />,
        url: '/purchase/purchases/create',
      },
      {
        title: 'List Purchases Return',
        icon: <FaRegCircle />,
        url: '/purchase/purchase-return',
      },
    ],
  },

  {
    title: 'Sell',
    icon: <FaUsersLine />,
    subMenuIcon: <FiChevronDown />,
    children: [
      {
        title: 'All Sales',
        icon: <FaAlignJustify />,
        url: '/sell/sells',
      },

      {
        title: 'Add Sale',
        icon: <IoAddCircleSharp />,
        url: '/sell/sells/create',
      },

      {
        title: 'List Pos',
        icon: <FaAlignJustify />,
        url: '/sell/pos',
      },

      {
        title: 'Pos',
        icon: <IoAddCircleSharp />,
        url: '/sell/pos/create',
      },

      {
        title: 'List Sell Return',
        icon: <FaArrowRotateLeft />,
        url: '/sell/sell-return',
      },

      {
        title: 'List Drafts',
        icon: <LuPanelTopOpen />,
        url: '/sell/drafts',
      },
      {
        title: 'List Quatations',
        icon: <LuPanelTopOpen />,
        url: '/sell/quotations',
      },
      {
        title: 'Discounted Sales',
        icon: <FaAlignJustify />,
        url: '/sell/discounted',
      },

      {
        title: 'Per Unit Sales',
        icon: <FaAlignJustify />,
        url: '/unit-sells',
      },

      {
        title: 'Voided Transaction',
        icon: <FaAlignJustify />,
        url: '/void',
      },
    ],
  },

  {
    title: 'Stock Transfer',
    icon: <FaUsersLine />,
    subMenuIcon: <FiChevronDown />,
    children: [
      {
        title: 'List Stock Transfer',
        icon: <FaAlignJustify />,
        url: '/stock-transfer/stock-transfers',
      },

      {
        title: 'Add Stock Transfer',
        icon: <IoAddCircleSharp />,
        url: '/stock-transfer/stock-transfers/create',
      },
    ],
  },

  {
    title: 'Stock Adjustment',
    icon: <FaUsersLine />,
    subMenuIcon: <FiChevronDown />,
    children: [
      {
        title: 'List Stock Adjustment',
        icon: <FaAlignJustify />,
        url: '/stock-adjustments',
      },

      {
        title: 'Add Stock Adjustment',
        icon: <IoAddCircleSharp />,
        url: '/stock-adjustments/create',
      },
    ],
  },

  {
    title: 'Expenses',
    icon: <FaUsersLine />,
    subMenuIcon: <FiChevronDown />,
    children: [
      {
        title: 'List Stock Adjustment',
        icon: <FaAlignJustify />,
        url: '/expense/expenses',
      },

      {
        title: 'Add Stock Adjustment',
        icon: <IoAddCircleSharp />,
        url: '/expense/expenses/create',
      },
      {
        title: 'Expense Categories',
        icon: <FaRegCircle />,
        url: '/expense/category',
      },
    ],
  },

  {
    title: 'Reports',
    icon: <FaProductHunt />,
    subMenuIcon: <FiChevronDown />,
    children: [
      {
        title: 'X Reading',
        icon: <FaAlignJustify />,
        url: '/reports/x-reading',
      },

      {
        title: 'Z Reading',
        icon: <FaAlignJustify />,
        url: '/reports/z-reading',
      },

      {
        title: 'Profit/Loss Report',
        icon: <CiBarcode />,
        url: '/reports/profit-loss',
      },

      {
        title: 'Purchase & Sale',
        icon: <FaArrowsLeftRightToLine />,
        url: '/reports/purchase-sell',
      },

      {
        title: 'Stock Value Report',
        icon: <CiImport />,
        url: '/reports/purchase-report',
      },
      {
        title: 'Tax Report',
        icon: <CiImport />,
        url: '/reports/tax-report',
      },
      {
        title: 'Supplier & Customer Report',
        icon: <MdOutlineSell />,
        url: '/reports/customer-supplier',
      },
      {
        title: 'Customer Groups Report',
        icon: <AiOutlineDeploymentUnit />,
        url: '/reports/customer-group',
      },
      {
        title: 'Stock Report',
        icon: <FaBusinessTime />,
        url: '/reports/stock-report',
      },
      {
        title: 'Opening Stock Report',
        icon: <FaDatabase />,
        url: '/reports/opening-stocks-report',
      },
      {
        title: 'Stock Expiry Report',
        icon: <FaCalendarTimes />,
        url: '/reports/stock-expiry-report',
      },
      {
        title: 'Lot Report',
        icon: <FaBusinessTime />,
        url: '/reports/lot-report',
      },
      {
        title: 'Trending Products',
        icon: <BiTrendingUp />,
        url: '/reports/trending-products',
      },
      {
        title: 'Stock Adjustment Report',
        icon: <FaShoppingBag />,
        url: '/reports/stock-adjustment-report',
      },
      {
        title: 'Product Purchase Report',
        icon: <FaArrowDown />,
        url: '/reports/product-purchase-report',
      },
      {
        title: 'Product Sell Report',
        icon: <FaArrowUp />,
        url: '/reports/product-sell-report',
      },
      {
        title: 'Purchase Payment Report',
        icon: <FaMoneyCheckAlt />,
        url: '/reports/purchase-payment-report',
      },
      {
        title: 'Sell Payment Report',
        icon: <FaMoneyCheckAlt />,
        url: '/reports/sell-payment-report',
      },
      {
        title: 'Expense Report',
        icon: <CiZoomIn />,
        url: '/reports/expense-report',
      },
      {
        title: 'Register Report',
        icon: <FaPaperPlane />,
        url: '/reports/register-report',
      },
      {
        title: 'Sales Reprensentative Report',
        icon: <FaUser />,
        url: '/reports/sale-representative-report',
      },
    ],
  },

  {
    title: 'Settings',
    icon: <IoIosSettings />,
    subMenuIcon: <FiChevronDown />,
    children: [
      {
        title: 'Business Settings',
        icon: <CiSettings />,
        url: '/settings/business',
      },

      {
        title: 'Business Location',
        icon: <FaLocationPin />,
        url: '/settings/location',
      },
      {
        title: 'Invoice Setting',
        icon: <FaRegCircle />,
        url: '/settings/invoice-schemes',
      },
      {
        title: 'Barcode Setting',
        icon: <FaBarcode />,
        url: '/settings/barcode',
      },
      {
        title: 'Receipt Printer',
        icon: <FaPrint />,
        url: '/settings/printer',
      },
      {
        title: 'Tax Rates',
        icon: <FaBoltLightning />,
        url: '/settings/tax-rates',
      },
      {
        title: 'Add Points',
        icon: <FaIdCard />,
        url: '/settings/points',
      },
    ],
  },
]

export default sidebarData
