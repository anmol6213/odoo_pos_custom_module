{
    'name': 'POS Milk Price Quantity',
    'version': '18.0.1.0.0',
    'summary': 'Calculate milk quantity based on price in Point of Sale',
    'description': """
    Adds a custom button in POS to calculate milk quantity 
    based on entered price.
    """,
    'author': 'Your Company',
    'website': 'https://www.yourcompany.com',
    'category': 'Point of Sale',
    'license': 'LGPL-3',
    'depends': ['point_of_sale'],
    'data': [
        'views/pos_config_views.xml',
    ],
    'assets': {
        'point_of_sale.assets': [
            'pos_milk_price_quantity/static/src/js/milk_price_quantity.js',
            'pos_milk_price_quantity/static/src/xml/milk_price_quantity.xml',
            'pos_milk_price_quantity/static/src/css/milk_price_quantity.css',
        ],
    },
    'installable': True,
    'application': False,
    'auto_install': False,
}
