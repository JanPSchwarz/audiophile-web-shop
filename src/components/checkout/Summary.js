import LinkButton from "../General/LinkButton";
import CartItem from "../Header/CartItem";

export default function Summary({ onSubmit, totalAmount, cart }) {
  const amounts = [
    { label: "total", value: totalAmount },
    { label: "shipping", value: 50 },
    { label: "vat(included)", value: Math.round(totalAmount * 0.2) },
    { label: "grand total", value: totalAmount + 50, highlighted: true },
  ];

  return (
    <>
      <div
        className={`flex w-full flex-col justify-between gap-4 rounded-md border-2 p-4`}
      >
        <h2 className={`fontPreset6 text-primaryColor`}>Summary</h2>
        <div className={`flex flex-col gap-4`}>
          {cart &&
            cart.map((cartItem, index) => {
              return (
                <CartItem key={index} className={``} checkout item={cartItem} />
              );
            })}
        </div>
        <div className={`flex flex-col gap-2`}>
          {amounts.map(({ label, value, highlighted }, index) => {
            return (
              <div key={index} className={`flex justify-between`}>
                <p className={`fontPreset7 text-primaryColor text-opacity-70`}>
                  {label.toUpperCase()}
                </p>
                <span
                  className={`fontPreset6 ${highlighted ? `text-accentColor` : `text-primaryColor`}`}
                >
                  $ {value}
                </span>
              </div>
            );
          })}
        </div>
        <LinkButton
          type="submit"
          clickFunction={onSubmit}
          button
          highlighted
          primary
          disable={cart?.length === 0 ? true : false}
          text={"CONTINUE & PAY"}
        />
      </div>
    </>
  );
}
