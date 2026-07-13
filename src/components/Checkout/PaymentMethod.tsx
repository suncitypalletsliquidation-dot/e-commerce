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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          className="w-8 h-8"
          fill="#00D632"
        >
          <path d="M536.3 160.9C526.9 134.4 506 113.5 479.5 103.9C455.4 96 433.2 96 387.9 96L252 96C207.2 96 184.8 96 160.7 103.5C134.2 113.1 113.3 134 103.7 160.5C96 184.8 96 207.2 96 252.2L96 387.8C96 433 96 455.2 103.5 479.3C113.1 505.8 134 526.7 160.5 536.3C184.8 544 207.2 544 252.1 544L387.8 544C432.8 544 455.2 544 479.4 536.3C505.9 526.7 526.8 505.8 536.4 479.3C544.1 455 544.1 432.6 544.1 387.8L544.1 252.3C544.1 207.3 544.1 184.9 536.4 160.8zM419.1 249.4L393.3 270.5C391 272.4 387.8 272 386 269.6C372.8 253.4 352.3 244.2 329.9 244.2C304.9 244.2 289.3 255.1 289.3 270.4C288.9 283.2 301 290 338.4 298.1C385.6 308.1 407.1 327.8 407.1 360.8C407.1 402.2 373.4 432.7 320.7 436.1L315.6 460.6C315.2 462.9 313 464.7 310.5 464.7L269.9 464.7C266.5 464.7 264.1 461.5 264.8 458.3L271.2 431C245.2 423.5 224 409 211.9 391.3C210.4 389 210.8 386 213 384.3L241.2 362.3C243.5 360.4 247 361 248.7 363.4C263.6 384.3 286.7 396.7 314.4 396.7C339.4 396.7 358.2 384.5 358.2 367C358.2 353.6 348.8 347.4 317 340.8C262.8 329.1 241.2 309 241.2 275.9C241.2 237.5 273.4 208.7 322.1 204.9L327.4 179.5C327.8 177.2 330 175.4 332.5 175.4L372.4 175.4C375.6 175.4 378.2 178.4 377.5 181.6L371.3 210C392.2 216.4 409.3 227.9 420 242.2C421.7 244.3 421.3 247.5 419.1 249.2z"/></svg>
      ),
    },
    zelle: {
      name: "Zelle",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          className="w-8 h-8"
        >
          <path fill="#a0f" d="M35,42H13c-3.866,0-7-3.134-7-7V13c0-3.866,3.134-7,7-7h22c3.866,0,7,3.134,7,7v22 C42,38.866,38.866,42,35,42z"></path>
          <path fill="#fff" d="M17.5,18.5h14c0.552,0,1-0.448,1-1V15c0-0.552-0.448-1-1-1h-14c-0.552,0-1,0.448-1,1v2.5	C16.5,18.052,16.948,18.5,17.5,18.5z"></path>
          <path fill="#fff" d="M17,34.5h14.5c0.552,0,1-0.448,1-1V31c0-0.552-0.448-1-1-1H17c-0.552,0-1,0.448-1,1v2.5	C16,34.052,16.448,34.5,17,34.5z"></path>
          <path fill="#fff" d="M22.25,11v6c0,0.276,0.224,0.5,0.5,0.5h3.5c0.276,0,0.5-0.224,0.5-0.5v-6c0-0.276-0.224-0.5-0.5-0.5	h-3.5C22.474,10.5,22.25,10.724,22.25,11z"></path>
          <path fill="#fff" d="M22.25,32v6c0,0.276,0.224,0.5,0.5,0.5h3.5c0.276,0,0.5-0.224,0.5-0.5v-6c0-0.276-0.224-0.5-0.5-0.5	h-3.5C22.474,31.5,22.25,31.724,22.25,32z"></path>
          <path fill="#fff" d="M16.578,30.938H22l10.294-12.839c0.178-0.222,0.019-0.552-0.266-0.552H26.5L16.275,30.298	C16.065,30.553,16.247,30.938,16.578,30.938z"></path>
        </svg>
      ),
    },
    bitcoin: {
      name: "Bitcoin/Altcoin",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          className="w-8 h-8"
          fill="#F7931A"
        >
          <path d="M72 320C72 183 183 72 320 72C457 72 568 183 568 320C568 457 457 568 320 568C183 568 72 457 72 320zM426.3 284.7C431.2 251.7 406.1 234 371.7 222.1L382.8 177.4L355.6 170.6L344.7 214.1C337.5 212.3 330.2 210.6 322.9 209L333.8 165.2L306.6 158.4L295.4 203.1C289.5 201.8 283.7 200.4 278 199L278 198.9L240.5 189.5L233.3 218.6C233.3 218.6 253.5 223.2 253.1 223.5C264.1 226.3 266.1 233.5 265.8 239.3L253.1 290.2C253.9 290.4 254.8 290.7 255.9 291.1C255 290.9 254 290.6 253 290.4L235.2 361.7C233.9 365 230.4 370.1 222.7 368.2C223 368.6 202.9 363.3 202.9 363.3L189.4 394.4L224.8 403.2C231.4 404.9 237.8 406.6 244.2 408.2L232.9 453.4L260.1 460.2L271.3 415.5C278.5 417.5 285.7 419.3 293 421.1L281.9 465.6L309.1 472.4L320.4 427.3C366.8 436.1 401.7 432.5 416.4 390.6C428.2 356.8 415.8 337.3 391.4 324.6C409.2 320.5 422.6 308.8 426.1 284.7zM364.1 371.9C355.7 405.7 298.8 387.4 280.3 382.8L295.2 322.9C313.6 327.5 372.8 336.6 364 371.9zM372.5 284.2C364.8 314.9 317.5 299.3 302.1 295.5L315.6 241.2C331 245 380.4 252.2 372.4 284.2z"/></svg>
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
