import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, useAppSelector } from "@/redux/store";
import {
    addItemToCart,
    removeItemFromCart,
    incrementItem,
    decrementItem,
    clearCart,
    toggleCartModal,
    selectCartCount,
    selectCartDetails,
    selectTotalPrice,
    selectShouldDisplayCart,
    CartItem,
} from "@/redux/features/cart-slice";
import { clearCartStorage } from "@/lib/cartStorage";

export const useCart = () => {
    const dispatch = useDispatch<AppDispatch>();

    // Selectors
    const cartCount = useAppSelector(selectCartCount);
    const cartDetails = useAppSelector(selectCartDetails);
    const totalPrice = useAppSelector(selectTotalPrice);
    const shouldDisplayCart = useAppSelector(selectShouldDisplayCart);
    const cartItems = useAppSelector((state: RootState) => state.cartReducer.items);

    // Actions
    const addItem = (item: CartItem, quantity: number = 1) => {
        dispatch(addItemToCart({ ...item, quantity }));
    };

    const removeItem = (id: string | number) => {
        dispatch(removeItemFromCart(id));
    };

    const incrementItemQuantity = (id: string | number) => {
        dispatch(incrementItem(id));
    };

    const decrementItemQuantity = (id: string | number) => {
        dispatch(decrementItem(id));
    };

    const clearAllItems = () => {
        dispatch(clearCart());
        clearCartStorage();
    };

    const handleCartClick = () => {
        dispatch(toggleCartModal());
    };

    return {
        // State
        cartCount,
        cartDetails,
        cartItems,
        totalPrice,
        shouldDisplayCart,

        // Actions
        addItem,
        removeItem,
        incrementItem: incrementItemQuantity,
        decrementItem: decrementItemQuantity,
        clearCart: clearAllItems,
        handleCartClick,
    };
};
