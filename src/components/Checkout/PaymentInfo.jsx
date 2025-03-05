import { useState } from "react";
import mCard from "../../assets/checkout-image/mCard.png";
import paypal from "../../assets/checkout-image/paypal.png";
import visa from "../../assets/checkout-image/visa.png";

const PaymentInfo = () => {
      const [paymentData, setPaymentData] = useState({
        cardNumber: "",
        expirationDate: "",
        securityCode: "",
        cardholderName: "",
      });
      
  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
  };
  const handleSubmit = () => {
    // handle form submission logic (API call or local validation)
  };
  return (
    <div>
                  <div className=" h-[872px] bg-white p-6 rounded-lg shadow-md border-1 border-[#D9D9D9]">
            <h2 className="text-xl font-bold mb-4 text-center pt-2">
              Order Summary
            </h2>
            <hr className="mt-10 bg-[#C5C5C5]" />
            <div className="space-y-4 pt-8">
              <div className="flex justify-between">
                <span>Price</span>
                <span>$ 196.34</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charge</span>
                <span>$ 196.34</span>
              </div>
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$ 196.34</span>
              </div>
              <hr className=" bg-[#C5C5C5]" />
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>$ 196.34</span>
              </div>
            </div>

            <h3 className="text-lg font-semibold mt-16 text-center">Payment</h3>
            <hr className=" bg-[#C5C5C5] mt-6" />
            <div className="flex justify-between mt-8 mb-4">
              <span>Credit Card</span>
              <div className="flex space-x-2">
                <img src={visa} alt="Visa" className="w-8 h-8" />
                <img src={mCard} alt="MasterCard" className="w-8 h-8" />
                <img src={paypal} alt="PayPal" className="w-8 h-8" />
              </div>
            </div>

            <div className="space-y-4 mt-10">
              <input
                type="text"
                name="cardNumber"
                value={paymentData.cardNumber}
                onChange={handlePaymentChange}
                placeholder="Card number"
                className="border border-gray-300 p-3 rounded-md w-full"
              />
              <div className="flex space-x-4">
                <input
                  type="text"
                  name="expirationDate"
                  value={paymentData.expirationDate}
                  onChange={handlePaymentChange}
                  placeholder="Expiration date (MM/YY)"
                  className="border border-gray-300 p-3 rounded-md w-1/2"
                />
                <input
                  type="text"
                  name="securityCode"
                  value={paymentData.securityCode}
                  onChange={handlePaymentChange}
                  placeholder="Security code"
                  className="border border-gray-300 p-3 rounded-md w-1/2"
                />
              </div>
              <input
                type="text"
                name="cardholderName"
                value={paymentData.cardholderName}
                onChange={handlePaymentChange}
                placeholder="Cardholder name"
                className="border border-gray-300 p-3 rounded-md w-full"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="bg-black text-white py-2 px-4 rounded-full w-full mt-10"
            >
              Place Order Now
            </button>
          </div>
    </div>
  )
}

export default PaymentInfo