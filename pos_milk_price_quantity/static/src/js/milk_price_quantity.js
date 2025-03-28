/** @odoo-module **/

import { PosComponent } from "@point_of_sale/components/pos_component";
import { ProductScreen } from "@point_of_sale/components/product_screen/product_screen";
import { usePos } from "@point_of_sale/components/pos_hook";
import { Registries } from "@point_of_sale/components/registries";

export class MilkPriceQuantityButton extends PosComponent {
    setup() {
        super.setup();
        this.pos = usePos();
    }

    async onClick() {
        const order = this.pos.get_order();
        const selectedOrderline = order.get_selected_orderline();
        
        if (!selectedOrderline) {
            await this.pos.popup.add('ErrorPopup', {
                title: this.env._t('Error'),
                body: this.env._t('Please select an order line first.'),
            });
            return;
        }
        
        const product = selectedOrderline.product;
        
        if (product.display_name.toLowerCase().includes('milk')) {
            const { confirmed, payload: price } = await this.pos.popup.add('NumberPopup', {
                title: this.env._t('Enter Price (INR)'),
                startingValue: 70,
            });
            
            if (confirmed) {
                const quantity = price / 70; 
                selectedOrderline.set_quantity(quantity);
            }
        } else {
            await this.pos.popup.add('ErrorPopup', {
                title: this.env._t('Error'),
                body: this.env._t('This button is only for Milk products.'),
            });
        }
    }
}

MilkPriceQuantityButton.template = 'pos_milk_price_quantity.MilkPriceQuantityButton';

ProductScreen.addControlButton({
    component: MilkPriceQuantityButton,
    condition: function () {
        return true;
    },
    position: ['after', 'OrderlineCustomerNoteButton']
});

Registries.Component.add(MilkPriceQuantityButton);
