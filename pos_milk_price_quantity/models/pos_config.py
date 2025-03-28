# -*- coding: utf-8 -*-

from odoo import models, fields

class PosConfig(models.Model):
    _inherit = 'pos.config'

    milk_price_quantity_enabled = fields.Boolean(
        string="Enable Milk Price Quantity",
        help="Enable the Milk Price Quantity feature in Point of Sale",
        default=True
    )
