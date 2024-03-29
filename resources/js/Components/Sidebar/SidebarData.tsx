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
} from 'react-icons/fa'
import { IoIosSettings } from 'react-icons/io'
import { FaArrowRotateLeft } from 'react-icons/fa6'
import { MdContactPhone } from 'react-icons/md'
import { CiMenuBurger } from 'react-icons/ci'
import { MdOutlineSell, MdOutlineDiscount } from 'react-icons/md'
import { IoAddCircleSharp } from 'react-icons/io5'
import { TbReportSearch } from 'react-icons/tb'
import { IoIosNotificationsOutline, IoIosWarning } from 'react-icons/io'
import { FiChevronDown } from 'react-icons/fi'
import { FaUsersLine } from 'react-icons/fa6'
import { CiBarcode, CiImport } from 'react-icons/ci'
import { BiCategory } from 'react-icons/bi'
import { AiOutlineDeploymentUnit } from 'react-icons/ai'
import { SiBrandfolder } from 'react-icons/si'
import { LuPanelTopOpen } from 'react-icons/lu'
import { url } from 'inspector'

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
                url: '',
            },
            {
                title: 'Request Stock',
                icon: <FaMoneyCheckAlt />,
                url: '',
            },
            {
                title: 'Requested Stock',
                icon: <FaMoneyCheckAlt />,
                url: '',
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
                url: '',
            },

            {
                title: 'Add Purchases',
                icon: <IoAddCircleSharp />,
                url: '',
            },
            {
                title: 'List Purchases Return',
                icon: <FaRegCircle />,
                url: '',
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
                url: '',
            },

            {
                title: 'Add Sale',
                icon: <IoAddCircleSharp />,
                url: '',
            },

            {
                title: 'List Pos',
                icon: <FaAlignJustify />,
                url: '',
            },

            {
                title: 'Pos',
                icon: <IoAddCircleSharp />,
                url: '',
            },

            {
                title: 'List Sell Return',
                icon: <FaArrowRotateLeft />,
                url: '',
            },

            {
                title: 'List Drafts',
                icon: <LuPanelTopOpen />,
                url: '',
            },
            {
                title: 'List Quatations',
                icon: <LuPanelTopOpen />,
                url: '',
            },

            {
                title: 'Per Unit Sales',
                icon: <FaAlignJustify />,
                url: '',
            },

            {
                title: 'Voided Transaction',
                icon: <FaAlignJustify />,
                url: '',
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
                url: '',
            },

            {
                title: 'Add Stock Transfer',
                icon: <IoAddCircleSharp />,
                url: '',
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
                url: '',
            },

            {
                title: 'Add Stock Adjustment',
                icon: <IoAddCircleSharp />,
                url: '',
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
                url: '',
            },

            {
                title: 'Add Stock Adjustment',
                icon: <IoAddCircleSharp />,
                url: '',
            },
            {
                title: 'Expense Categories',
                icon: <FaRegCircle />,
                url: '',
            },
        ],
    },

    {
        title: 'Reports',
        icon: <FaProductHunt />,
        subMenuIcon: <FiChevronDown />,
        children: [
            {
                title: 'List Prodcuts',
                icon: <FaAlignJustify />,
                url: '',
            },

            {
                title: 'Add Products',
                icon: <IoAddCircleSharp />,
                url: '',
            },

            {
                title: 'Print Label',
                icon: <CiBarcode />,
                url: '',
            },

            {
                title: 'Variations',
                icon: <FaRegCircle />,
                url: '',
            },

            {
                title: 'Import Products',
                icon: <CiImport />,
                url: '',
            },
            {
                title: 'Import Opening Stock',
                icon: <CiImport />,
                url: '',
            },
            {
                title: 'Selling Price group',
                icon: <MdOutlineSell />,
                url: '',
            },
            {
                title: 'Units',
                icon: <AiOutlineDeploymentUnit />,
                url: '',
            },
            {
                title: 'Categories',
                icon: <BiCategory />,
                url: '',
            },
            {
                title: 'Brands',
                icon: <SiBrandfolder />,
                url: '',
            },
            {
                title: 'Categories Discount',
                icon: <MdOutlineDiscount />,
                url: '',
            },
            {
                title: 'Request Stock',
                icon: <FaMoneyCheckAlt />,
                url: '',
            },
            {
                title: 'Requested Stock',
                icon: <FaMoneyCheckAlt />,
                url: '',
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
                icon: <FaAlignJustify />,
                url: '/business/setting',
            },

            {
                title: 'Business Location',
                icon: <IoAddCircleSharp />,
                url: '',
            },
            {
                title: 'Invoice Setting',
                icon: <FaRegCircle />,
                url: '',
            },
        ],
    },
]

export default sidebarData
