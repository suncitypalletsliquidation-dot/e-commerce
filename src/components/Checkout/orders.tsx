import { useCart } from "@/hooks/useCart";
import { useCheckoutForm } from "./form";
import { formatPrice } from "@/utils/formatePrice";

const Orders = () => {
  const { watch } = useCheckoutForm();
  const { cartCount, cartItems, totalPrice } = useCart();

  const shippingFee = watch("shippingMethod");
  const couponDiscount = ((watch("couponDiscount") || 0) * totalPrice) / 100;

  return (
    <div className="bg-white shadow-1 rounded-[10px] p-4 sm:p-8.5">
      <h3 className="font-medium text-xl text-dark mb-6">Your Order</h3>

      <div className="border border-gray-3 rounded-lg overflow-hidden mb-6">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-2 border-b border-gray-3">
              <th className="py-4 px-6 text-left font-medium text-dark">
                Product
              </th>
              <th className="py-4 px-6 text-right font-medium text-dark">
                Total
              </th>
            </tr>
          </thead>

          <tbody>
            {cartCount > 0 ? (
              cartItems.map((product, key) => (
                <tr key={key} className="border-b border-gray-3">
                  <td className="py-4 px-6 text-dark truncate max-w-[200px]">
                    {product.name} x{product.quantity}
                  </td>
                  <td className="py-4 px-6 text-right font-medium text-dark">
                    {formatPrice((product.price * product.quantity) / 100)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={2} className="py-4 px-6 text-center text-dark">
                  Your cart is empty
                </td>
              </tr>
            )}
          </tbody>

          <tfoot>
            <tr className="border-b border-gray-3">
              <td className="py-4 px-6 text-dark">Subtotal</td>
              <td className="py-4 px-6 text-right font-medium text-dark">
                {formatPrice(totalPrice / 100)}
              </td>
            </tr>

            <tr className="border-b border-gray-3">
              <td className="py-4 px-6 text-dark flex items-center justify-between">
                <span>Shipping ({shippingFee?.name})</span>
              </td>
              <td className="py-4 px-6 text-right font-medium text-dark">
                {formatPrice(shippingFee?.price || 0)}
              </td>
            </tr>

            {couponDiscount > 0 && (
              <tr className="border-b border-gray-3">
                <td className="py-4 px-6 font-medium text-blue">
                  Coupon Discount
                </td>
                <td className="py-4 px-6 text-right font-medium text-blue">
                  -{formatPrice(couponDiscount / 100)}
                </td>
              </tr>
            )}

            <tr className="bg-gray-2">
              <td className="py-4 px-6 font-semibold text-lg text-dark">
                Total
              </td>
              <td className="py-4 px-6 text-right font-bold text-lg text-dark">
                {formatPrice(
                  (totalPrice + (shippingFee?.price || 0) * 100 - couponDiscount) / 100
                )}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Orders;
