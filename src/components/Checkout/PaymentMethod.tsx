import { Controller } from "react-hook-form";
import { RadioInput } from "../ui/input/radio";
import { useCheckoutForm } from "./form";

const PaymentMethod = ({ amount }: { amount: number }) => {
  const { errors, control, watch } = useCheckoutForm();
  const paymentMethod = watch("paymentMethod");

  return (
    <div className="bg-white shadow-1 rounded-[10px] mt-7.5">
      <div className="border-b border-gray-3 py-5 px-4 sm:px-8.5">
        <h3 className="font-medium text-xl text-dark">Payment Method</h3>
      </div>

      <div className="p-4 sm:p-8.5">
        <div className="flex flex-col gap-3">
          <Controller
            name="paymentMethod"
            control={control}
            rules={{ required: "Please select a payment method" }}
            render={({ field }) => (
              <RadioInput
                name={field.name}
                value="cashapp"
                onChange={field.onChange}
                checked={field.value === "cashapp"}
                label={<PaymentMethodCard method="cashapp" />}
              />
            )}
          />

          <Controller
            name="paymentMethod"
            control={control}
            rules={{ required: "Please select a payment method" }}
            render={({ field }) => (
              <RadioInput
                name={field.name}
                value="zelle"
                onChange={field.onChange}
                checked={field.value === "zelle"}
                label={<PaymentMethodCard method="zelle" />}
              />
            )}
          />

          <Controller
            name="paymentMethod"
            control={control}
            rules={{ required: "Please select a payment method" }}
            render={({ field }) => (
              <RadioInput
                name={field.name}
                value="bitcoin"
                onChange={field.onChange}
                checked={field.value === "bitcoin"}
                label={<PaymentMethodCard method="bitcoin" />}
              />
            )}
          />
        </div>

        {errors.paymentMethod && (
          <p className="mt-2 text-sm text-red">
            {errors.paymentMethod.message || "Please select a payment method"}
          </p>
        )}

        <div className="mt-6 border-t border-gray-2 pt-4">
          {paymentMethod === "cashapp" && (
            <p className="text-dark-4 text-sm leading-relaxed">
              Cash Tag will be sent to you by our agent once your order has been received.
            </p>
          )}
          {paymentMethod === "zelle" && (
            <p className="text-dark-4 text-sm leading-relaxed">
              Zelle Detail will be sent to you by our agent once your order has been received.
            </p>
          )}
          {paymentMethod === "bitcoin" && (
            <div className="flex flex-col gap-2">
              <p className="text-dark-4 text-sm leading-relaxed">
                Bitcoin/Altcoin payment details will be sent to you by our agent once your order has been received.
              </p>
              <div className="flex items-center gap-2 mt-1">
                <span className="inline-flex items-center justify-center bg-orange-100 text-orange-600 rounded-full px-2 py-0.5 text-xs font-semibold">BTC</span>
                <span className="inline-flex items-center justify-center bg-green-100 text-green-600 rounded-full px-2 py-0.5 text-xs font-semibold">BCH</span>
                <span className="inline-flex items-center justify-center bg-gray-100 text-gray-600 rounded-full px-2 py-0.5 text-xs font-semibold">LTC</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;

type CardProps = {
  method: "cashapp" | "zelle" | "bitcoin";
};

function PaymentMethodCard({ method }: CardProps) {
  const data = {
    cashapp: {
      name: "CashApp",
      icon: (
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-white font-bold text-lg select-none">
          $
        </span>
      ),
    },
    zelle: {
      name: "Zelle",
      icon: (
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white font-bold text-sm select-none">
          Z
        </span>
      ),
    },
    bitcoin: {
      name: "Bitcoin/Altcoin",
      icon: (
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500 text-white font-bold text-lg select-none">
          ₿
        </span>
      ),
    },
  };

  return (
    <div className="rounded-md border-[0.5px] flex items-center shadow-1 border-gray-4 py-3 px-4 ease-out duration-200 hover:bg-gray-2 hover:border-transparent hover:shadow-none peer-checked:shadow-none peer-checked:border-transparent peer-checked:bg-gray-2 min-w-[240px]">
      <div className="pr-3 flex items-center shrink-0">
        {data[method].icon}
      </div>

      <p className="border-l border-gray-4 pl-3 text-dark font-medium">{data[method].name}</p>
    </div>
  );
}
