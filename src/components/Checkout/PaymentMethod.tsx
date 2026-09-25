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

          <Controller
            name="paymentMethod"
            control={control}
            rules={{ required: "Please select a payment method" }}
            render={({ field }) => (
              <RadioInput
                name={field.name}
                value="giftcard"
                onChange={field.onChange}
                checked={field.value === "giftcard"}
                label={<PaymentMethodCard method="giftcard" />}
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
                value="chime"
                onChange={field.onChange}
                checked={field.value === "chime"}
                label={<PaymentMethodCard method="chime" />}
              />
            )}
          />

          {/* <Controller
            name="paymentMethod"
            control={control}
            rules={{ required: "Please select a payment method" }}
            render={({ field }) => (
              <RadioInput
                name={field.name}
                value="debit"
                onChange={field.onChange}
                checked={field.value === "debit"}
                label={<PaymentMethodCard method="debit" />}
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
                value="visa"
                onChange={field.onChange}
                checked={field.value === "visa"}
                label={<PaymentMethodCard method="visa" />}
              />
            )}
          /> */}
        </div>

        {errors.paymentMethod && (
          <p className="mt-2 text-sm text-red">
            {errors.paymentMethod.message || "Please select a payment method"}
          </p>
        )}

        <div className="mt-6 border-t border-gray-2 pt-4">
          {paymentMethod === "cashapp" && (
            <p className="text-dark-4 text-sm leading-relaxed">
              Cash Tag will be sent to you by our agent once your order has been
              received.
            </p>
          )}
          {paymentMethod === "zelle" && (
            <p className="text-dark-4 text-sm leading-relaxed">
              Zelle Detail will be sent to you by our agent once your order has
              been received.
            </p>
          )}
          {paymentMethod === "bitcoin" && (
            <div className="flex flex-col gap-2">
              <p className="text-dark-4 text-sm leading-relaxed">
                Bitcoin/Altcoin payment details will be sent to you by our agent
                once your order has been received.
              </p>
              <div className="flex items-center gap-2 mt-1">
                <span className="inline-flex items-center justify-center bg-orange-100 text-orange-600 rounded-full px-2 py-0.5 text-xs font-semibold">
                  BTC
                </span>
                <span className="inline-flex items-center justify-center bg-green-100 text-green-600 rounded-full px-2 py-0.5 text-xs font-semibold">
                  BCH
                </span>
                <span className="inline-flex items-center justify-center bg-gray-100 text-gray-600 rounded-full px-2 py-0.5 text-xs font-semibold">
                  LTC
                </span>
              </div>
            </div>
          )}
          {paymentMethod === "giftcard" && (
            <p className="text-dark-4 text-sm leading-relaxed">
              Gift Card payment instructions will be sent to you by our agent once your order has been received.
            </p>
          )}
          {paymentMethod === "chime" && (
            <p className="text-dark-4 text-sm leading-relaxed">
              Chime payment instructions will be sent to you by our agent once your order has been received.
            </p>
          )}
          {paymentMethod === "debit" && (
            <p className="text-dark-4 text-sm leading-relaxed">
              Debit Card payment instructions will be sent to you by our agent once your order has been received.
            </p>
          )}
          {paymentMethod === "visa" && (
            <p className="text-dark-4 text-sm leading-relaxed">
              Visa Card payment instructions will be sent to you by our agent once your order has been received.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;

type CardProps = {
  method: "cashapp" | "zelle" | "bitcoin" | "giftcard" | "chime";
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
          <path d="M536.3 160.9C526.9 134.4 506 113.5 479.5 103.9C455.4 96 433.2 96 387.9 96L252 96C207.2 96 184.8 96 160.7 103.5C134.2 113.1 113.3 134 103.7 160.5C96 184.8 96 207.2 96 252.2L96 387.8C96 433 96 455.2 103.5 479.3C113.1 505.8 134 526.7 160.5 536.3C184.8 544 207.2 544 252.1 544L387.8 544C432.8 544 455.2 544 479.4 536.3C505.9 526.7 526.8 505.8 536.4 479.3C544.1 455 544.1 432.6 544.1 387.8L544.1 252.3C544.1 207.3 544.1 184.9 536.4 160.8zM419.1 249.4L393.3 270.5C391 272.4 387.8 272 386 269.6C372.8 253.4 352.3 244.2 329.9 244.2C304.9 244.2 289.3 255.1 289.3 270.4C288.9 283.2 301 290 338.4 298.1C385.6 308.1 407.1 327.8 407.1 360.8C407.1 402.2 373.4 432.7 320.7 436.1L315.6 460.6C315.2 462.9 313 464.7 310.5 464.7L269.9 464.7C266.5 464.7 264.1 461.5 264.8 458.3L271.2 431C245.2 423.5 224 409 211.9 391.3C210.4 389 210.8 386 213 384.3L241.2 362.3C243.5 360.4 247 361 248.7 363.4C263.6 384.3 286.7 396.7 314.4 396.7C339.4 396.7 358.2 384.5 358.2 367C358.2 353.6 348.8 347.4 317 340.8C262.8 329.1 241.2 309 241.2 275.9C241.2 237.5 273.4 208.7 322.1 204.9L327.4 179.5C327.8 177.2 330 175.4 332.5 175.4L372.4 175.4C375.6 175.4 378.2 178.4 377.5 181.6L371.3 210C392.2 216.4 409.3 227.9 420 242.2C421.7 244.3 421.3 247.5 419.1 249.2z" />
        </svg>
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
          <path
            fill="#a0f"
            d="M35,42H13c-3.866,0-7-3.134-7-7V13c0-3.866,3.134-7,7-7h22c3.866,0,7,3.134,7,7v22 C42,38.866,38.866,42,35,42z"
          ></path>
          <path
            fill="#fff"
            d="M17.5,18.5h14c0.552,0,1-0.448,1-1V15c0-0.552-0.448-1-1-1h-14c-0.552,0-1,0.448-1,1v2.5	C16.5,18.052,16.948,18.5,17.5,18.5z"
          ></path>
          <path
            fill="#fff"
            d="M17,34.5h14.5c0.552,0,1-0.448,1-1V31c0-0.552-0.448-1-1-1H17c-0.552,0-1,0.448-1,1v2.5	C16,34.052,16.448,34.5,17,34.5z"
          ></path>
          <path
            fill="#fff"
            d="M22.25,11v6c0,0.276,0.224,0.5,0.5,0.5h3.5c0.276,0,0.5-0.224,0.5-0.5v-6c0-0.276-0.224-0.5-0.5-0.5	h-3.5C22.474,10.5,22.25,10.724,22.25,11z"
          ></path>
          <path
            fill="#fff"
            d="M22.25,32v6c0,0.276,0.224,0.5,0.5,0.5h3.5c0.276,0,0.5-0.224,0.5-0.5v-6c0-0.276-0.224-0.5-0.5-0.5	h-3.5C22.474,31.5,22.25,31.724,22.25,32z"
          ></path>
          <path
            fill="#fff"
            d="M16.578,30.938H22l10.294-12.839c0.178-0.222,0.019-0.552-0.266-0.552H26.5L16.275,30.298	C16.065,30.553,16.247,30.938,16.578,30.938z"
          ></path>
        </svg>
      ),
    },
    bitcoin: {
      name: "CryptoCurrency",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          className="w-8 h-8"
          fill="#F7931A"
        >
          <path d="M72 320C72 183 183 72 320 72C457 72 568 183 568 320C568 457 457 568 320 568C183 568 72 457 72 320zM426.3 284.7C431.2 251.7 406.1 234 371.7 222.1L382.8 177.4L355.6 170.6L344.7 214.1C337.5 212.3 330.2 210.6 322.9 209L333.8 165.2L306.6 158.4L295.4 203.1C289.5 201.8 283.7 200.4 278 199L278 198.9L240.5 189.5L233.3 218.6C233.3 218.6 253.5 223.2 253.1 223.5C264.1 226.3 266.1 233.5 265.8 239.3L253.1 290.2C253.9 290.4 254.8 290.7 255.9 291.1C255 290.9 254 290.6 253 290.4L235.2 361.7C233.9 365 230.4 370.1 222.7 368.2C223 368.6 202.9 363.3 202.9 363.3L189.4 394.4L224.8 403.2C231.4 404.9 237.8 406.6 244.2 408.2L232.9 453.4L260.1 460.2L271.3 415.5C278.5 417.5 285.7 419.3 293 421.1L281.9 465.6L309.1 472.4L320.4 427.3C366.8 436.1 401.7 432.5 416.4 390.6C428.2 356.8 415.8 337.3 391.4 324.6C409.2 320.5 422.6 308.8 426.1 284.7zM364.1 371.9C355.7 405.7 298.8 387.4 280.3 382.8L295.2 322.9C313.6 327.5 372.8 336.6 364 371.9zM372.5 284.2C364.8 314.9 317.5 299.3 302.1 295.5L315.6 241.2C331 245 380.4 252.2 372.4 284.2z" />
        </svg>
      ),
    },
    giftcard: {
      name: "Gift Card",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          className="w-8 h-8"
        >
          <rect x="0" y="0" width="48" height="48" rx="10" fill="#EC4899" />
          <line x1="16" y1="0" x2="16" y2="48" stroke="#ffffff" strokeWidth="3" opacity="0.9" />
          <line x1="0" y1="24" x2="48" y2="24" stroke="#ffffff" strokeWidth="3" opacity="0.9" />
          <rect x="6" y="8" width="8" height="6" rx="1" fill="#FBBF24" />
          <path d="M16 24c-2.5-2.5-5-2-5 1s2.5 5 5 5m0-6c2.5-2.5 5-2 5 1s-2.5 5-5 5" fill="#ffffff" stroke="#ffffff" strokeWidth="1" />
        </svg>
      ),
    },
    chime: {
      name: "Chime",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          className="w-8 h-8"
        >
          <rect x="0" y="0" width="48" height="48" rx="10" fill="#1ec677" />
          <g transform="translate(6, 18.375) scale(0.05625)" fill="#ffffff">
            <path d="m 70.6,192.9 c 23,0 39.3,-8.7 49,-16 V 145.2 C 105.3,156.5 88.5,163 73.6,163 49.8,163 33.1,146.6 33.1,123 33.1,100.6 48.3,85.0001 70,85.0001 c 7.1,0 13.2,1.8 19.7,3.6 6.7,1.9 13.7,4 22,4 2.6,0 5.2,-0.2 7.8,-0.6 v -30.2 c -2.2,0.2 -4.3,0.4 -6.5,0.4 -7.5,0 -14.3,-1.4 -21.4,-2.9 -7.5,-1.6 -15.2,-3.2 -24.3,-3.2 -18.1,0 -34.9,6.4 -47.2,18.2 C 7,86.8001 0,104.2 0,124.5 c 0,40.3 29,68.4 70.6,68.4 z" />
            <path d="M 170.1,67.2 V 0 h -32.4 v 190.8 h 32.4 V 95.3 c 53.7,-26.1 51.7,15.2 51.7,15.2 v 80.3 h 32.5 v -80.3 c -0.1,-77.6 -67.9,-52 -84.2,-43.3 z" />
            <path d="m 306.3,58.3 h -32.7 v 132.5 h 32.7 z" />
            <path d="m 290,0.899902 c -10.9,0 -19.9,8.799998 -19.9,19.599998 0,10.9 8.9,19.9 19.9,19.9 10.8,0 19.6,-8.9 19.6,-19.9 0,-10.6 -8.9,-19.599998 -19.6,-19.599998 z" />
            <path d="m 448.6,56.1001 c -11.8,0 -25.9,4.2 -39.4,18.8 -13.5,-14.6 -27.7,-18.8 -39.4,-18.8 0,0 -45.1,-3.4 -45.1,49.2999 v 85.3 h 32.7 v -80.5 c 0,-23.5999 15.8,-24.0999 18.9,-23.3999 0,0 5.7,0.3 10.9,5.7 0,0 -10.4,13.5999 -11.2,30.6999 0,0 -2.3,44.3 33.2,44.3 35.5,0 33.2,-44.3 33.2,-44.3 -0.8,-17.1 -11.2,-30.6999 -11.2,-30.6999 5.2,-5.4 10.9,-5.7 10.9,-5.7 3,-0.7 18.9,-0.2 18.9,23.3999 v 80.5 h 32.7 V 105.4 C 493.6,52.7001 448.6,56.1001 448.6,56.1001 Z M 409.1,143.5 c -7,0 -9.3,-8.8 -9.4,-17.2 -0.2,-14.6 9.3,-25.1 9.4,-25.3 0.2,0.2 9.6,10.7 9.4,25.3 0,8.4 -2.4,17.2 -9.4,17.2 z" />
            <path d="m 538.6,131 c 17.4,6.1 39.5,5.6 39.5,5.6 52.4,-0.3 50.9,-38.4001 50.9,-38.4001 -1.3,-42.9 -51.7,-42.1 -51.7,-42.1 -41.7,0 -70.9,28.6 -70.9,69.5001 0,40.9 28.6,67.3 72.8,67.3 18.8,0 36.7,-5.2 49.2,-14.3 v -31.5 c -13.1,11.3 -28.8,17.3 -45.4,17.3 0.1,0 -45.3,2.3 -44.4,-33.4 z m 4,-27.9 c 5.5,-13.9001 16.9,-21.2001 33.1,-21.2001 13.3,0 21,5.6 21,14.5 C 596.7,108.9 582.6,110 569.4,110 c -13,0 -21,-1.4 -24.6,-2.3 l -3.5,-0.8 z" />
          </g>
        </svg>
      ),
    },
    // debit: {
    //   name: "Debit Card",
    //   icon: (
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 48 48"
    //       className="w-8 h-8"
    //     >
    //       <rect x="0" y="0" width="48" height="48" rx="10" fill="#1E293B" />
    //       <rect x="6" y="12" width="36" height="24" rx="3" fill="#334155" />
    //       <rect x="10" y="16" width="7" height="5" rx="1" fill="#FBBF24" />
    //       <rect x="10" y="27" width="18" height="2" rx="1" fill="#94A3B8" />
    //       <rect x="10" y="31" width="10" height="2" rx="1" fill="#94A3B8" />
    //       <circle cx="34" cy="29" r="3" fill="#E2E8F0" opacity="0.9" />
    //       <circle cx="38" cy="29" r="3" fill="#64748B" opacity="0.9" />
    //     </svg>
    //   ),
    // },
    // visa: {
    //   name: "Visa Card",
    //   icon: (
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 48 48"
    //       className="w-8 h-8"
    //     >
    //       <rect x="0" y="0" width="48" height="48" rx="10" fill="#1434CB" />
    //       <g transform="translate(6, 15) scale(1.5)" fill="#ffffff">
    //         <path d="M9.112 8.262L5.97 15.758H3.92L2.374 9.775c-.094-.368-.175-.503-.461-.658C1.447 8.864.677 8.627 0 8.479l.046-.217h3.3a.904.904 0 01.894.764l.817 4.338 2.018-5.102zm8.033 5.049c.008-1.979-2.736-2.088-2.717-2.972.006-.269.262-.555.822-.628a3.66 3.66 0 011.913.336l.34-1.59a5.207 5.207 0 00-1.814-.333c-1.917 0-3.266 1.02-3.278 2.479-.012 1.079.963 1.68 1.698 2.04.756.367 1.01.603 1.006.931-.005.504-.602.725-1.16.734-.975.015-1.54-.263-1.992-.473l-.351 1.642c.453.208 1.289.39 2.156.398 2.037 0 3.37-1.006 3.377-2.564m5.061 2.447H24l-1.565-7.496h-1.656a.883.883 0 00-.826.55l-2.909 6.946h2.036l.405-1.12h2.488zm-2.163-2.656l1.02-2.815.588 2.815zm-8.16-4.84l-1.603 7.496H8.34l1.605-7.496z" />
    //       </g>
    //     </svg>
    //   ),
    // },
  };

  return (
    <div className="rounded-md border-[0.5px] flex items-center shadow-1 border-gray-4 py-3 px-4 ease-out duration-200 hover:bg-gray-2 hover:border-transparent hover:shadow-none peer-checked:shadow-none peer-checked:border-transparent peer-checked:bg-gray-2 min-w-[240px]">
      <div className="pr-3 flex items-center shrink-0">{data[method].icon}</div>

      <p className="border-l border-gray-4 pl-3 text-dark font-medium">
        {data[method].name}
      </p>
    </div>
  );
}
