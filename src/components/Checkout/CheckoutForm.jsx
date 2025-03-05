import { useEffect, useState } from "react";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";
import mCard from "../../assets/checkout-image/mCard.png";
import paypal from "../../assets/checkout-image/paypal.png";
import visa from "../../assets/checkout-image/visa.png";
import Cookies from "js-cookie";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setCourseId } from "../../redux/new store/courseSlice";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
    saveDetails: false,
  });

  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [paymentData, setPaymentData] = useState({
    cardholderName: "",
  });

  const userInfo = useSelector((state) => state.userInfo);
  const userId = userInfo?.userInfo?.findUserAndUpdate?._id;

  const { courseId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (courseId) {
      dispatch(setCourseId(courseId)); // Set the courseId in Redux
    }
  }, [courseId, dispatch]);

  const newCourseId = useSelector((state) => state.course.courseId); // Access the courseId

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setProcessing(true);
    setError(null);

    const cardNumberElement = elements.getElement(CardNumberElement);

    // Create payment method via Stripe
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardNumberElement,
      billing_details: {
        name: formData.firstName + " " + formData.lastName,
        email: formData.email,
        phone: formData.phoneNumber,
        address: { line1: formData.address },
      },
    });

    if (error) {
      setError(error.message);
      setProcessing(false);
      return;
    }

    const paymentMethodId = paymentMethod.id;

    const response = await fetch(
      "https://ph-clone-alchemy.onrender.com/api/v1/user/enroll",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${Cookies.get("user")}`,
        },
        body: JSON.stringify({
          paymentMethodId: paymentMethodId,
          ...formData,
          courseId: newCourseId,
          userId,
        }),
      }
    );

    const data = await response.json();
    setProcessing(false);

    if (data.success) {
      toast.success("Payment Successful!");
      navigate("/success"); // Redirect to a success page
    } else {
      navigate(`/class/${newCourseId}`);
      toast.error(data.message || "Payment Failed");
    }
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const cardElementStyles = {
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        "::placeholder": {
          color: "#aab7c4",
        },
        fontFamily: "Arial, sans-serif",
        padding: "10px",
      },
      invalid: {
        color: "#9e2146",
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#060022] text-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#5344E1] to-[#CA0AEB] py-20 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-center">Checkout</h1>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - User Information Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-[#221639] border border-gray-700 focus:outline-none focus:border-[#5344E1]"
                  placeholder="Sazzad"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-[#221639] border border-gray-700 focus:outline-none focus:border-[#5344E1]"
                  placeholder="Mahim"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-[#221639] border border-gray-700 focus:outline-none focus:border-[#5344E1]"
                  placeholder="sazzad@mahim.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number *</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-[#221639] border border-gray-700 focus:outline-none focus:border-[#5344E1]"
                  placeholder="+8801456789123"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Address *</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-[#221639] border border-gray-700 focus:outline-none focus:border-[#5344E1]"
                placeholder="221B Baker Street"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Town/City *</label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-[#221639] border border-gray-700 focus:outline-none focus:border-[#5344E1]"
                  required
                >
                  <option value="">Select City</option>
                  <option value="Dhaka">Dhaka</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Country *</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-[#221639] border border-gray-700 focus:outline-none focus:border-[#5344E1]"
                  required
                >
                  <option value="">Select Country</option>
                  <option value="Bangladesh">Bangladesh</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Postal Code *</label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-[#221639] border border-gray-700 focus:outline-none focus:border-[#5344E1]"
                placeholder="1234"
                required
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="saveDetails"
                checked={formData.saveDetails}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    saveDetails: e.target.checked,
                  }))
                }
                className="mr-2"
              />
              <span className="text-sm">Save your details for future orders</span>
            </div>
          </form>

          {/* Right Side - Payment Section */}
          <div className="bg-[#150F2D] p-6 rounded-lg shadow-lg border border-[#D9D9D9]">
            <h2 className="text-2xl font-semibold mb-6">Payment Details</h2>
            <hr className="border-[#C5C5C5] mb-6" />

            <div className="flex justify-between items-center mb-6">
              <span className="text-sm font-medium">Credit Card</span>
              <div className="flex space-x-2">
                <img src={visa} alt="Visa" className="w-8 h-8" />
                <img src={mCard} alt="MasterCard" className="w-8 h-8" />
                <img src={paypal} alt="PayPal" className="w-8 h-8" />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Card Number *</label>
                <CardNumberElement
                  options={cardElementStyles}
                  className="w-full p-3 rounded-lg bg-[#221639] border border-gray-700 focus:outline-none focus:border-[#5344E1]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Expiration Date *</label>
                  <CardExpiryElement
                    options={cardElementStyles}
                    className="w-full p-3 rounded-lg bg-[#221639] border border-gray-700 focus:outline-none focus:border-[#5344E1]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">CVC *</label>
                  <CardCvcElement
                    options={cardElementStyles}
                    className="w-full p-3 rounded-lg bg-[#221639] border border-gray-700 focus:outline-none focus:border-[#5344E1]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Cardholder Name *</label>
                <input
                  type="text"
                  name="cardholderName"
                  value={paymentData.cardholderName}
                  onChange={handlePaymentChange}
                  className="w-full p-3 rounded-lg bg-[#221639] border border-gray-700 focus:outline-none focus:border-[#5344E1]"
                  placeholder="John Doe"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={processing || !stripe}
                className="w-full bg-gradient-to-r from-[#5344E1] to-[#CA0AEB] hover:from-[#CA0AEB] hover:to-[#5344E1] text-white font-bold py-3 rounded-lg transition duration-300"
              >
                {processing ? "Processing..." : "Make Payment"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;