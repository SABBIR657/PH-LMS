import React, { useEffect } from 'react'
import CheckoutForm from '../components/Checkout/CheckoutForm'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setCourseId } from '../redux/new store/courseSlice';


const stripePromise = loadStripe("pk_test_51QrtufChQ6de35ikc8rqZzrkkIekAgVi1l8OxuAM8LCytDFcOUoXoTYcCLfPSEeegjwsuxBFu3HY9V30HY7ypo7900dCQdhRjP");

const Checkout = () => {
      const { courseId } = useParams();
      const dispatch = useDispatch(); 

      useEffect(() => {
          if (courseId) {
            dispatch(setCourseId(courseId)); // Set the courseId in Redux
          }
        }, [courseId, dispatch]);
    

    const newCourseId = useSelector((state) => state.course.courseId); // Access the courseId
    console.log(newCourseId, "newwwww coursseeeeee idddddd in checkout.......")

  return (
    <div>
       <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
    </div>
  )
}

export default Checkout