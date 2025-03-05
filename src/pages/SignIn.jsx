import { Button, Divider, Input } from "@heroui/react";
import { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { EyeSlashFilledIcon } from "@/assets/icons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "@/assets/icons/EyeFilledIcon";
import { Player } from "@lottiefiles/react-lottie-player";
import { Icons } from "@/assets/icons/Icons";

import { AuthContext } from "@/hooks/AuthContextProvider";
import usePostMutate from "@/hooks/shared/usePostMutate";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import Info from "@/assets/icons/InfoIcon";
import useAxiosSecure from "@/hooks/useAxios";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../redux/new store/userSlice";

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const { user, setUser, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const { path } = location.state || {};


  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);


  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSuccess = (res) => {
    toast.success("Successfully Logged In", { position: "top-right" });
    Cookies.set("user", res?.approvalToken, { expires: 30 });
    Cookies.set("userId", res?.user?.findUserAndUpdate?._id, { expires: 30 });
    Cookies.set("refreshToken", res?.refreshToken, { expires: 30 });
    Cookies.set("userName", res?.user?.findUserAndUpdate?.name, {
      expires: 30,
    });
    Cookies.set("userRole", res?.user?.findUserAndUpdate?.role, {
      expires: 30,
    });

    console.log(res);
    dispatch(setUserInfo(res?.user))
    setUser(res?.user);

    setIsLoading(false);
    navigate(path || "/");
  };

  const onError = (err) => {
    toast.error(err?.response?.data?.message || "Something went wrong");
    setIsLoading(false);
  };

  const { mutate } = usePostMutate("/auth/login", onSuccess, onError);

  const onSubmit = async (userData) => {
    setIsLoading(true);
    mutate(userData);
  };

  const toggleVisibility = () => setIsVisible(!isVisible);
  const Axios = useAxiosSecure();

  const providerSignIn = async (payload) => {
    const token = await payload.user.getIdToken();
    const response = await Axios.post(
      "/auth/provider",
      {},
      {
        headers: {
          Authorization: token,
        },
      }
    );
    toast.success("Successfully logged in");
    setUser(response?.data?.data?.user);
    navigate(path || "/admin");
    Cookies.set("user", response?.data?.data?.accessToken, { expires: 30 });
    return response;
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="relative min-h-screen bg-[#210d44] flex items-center justify-center"
    >
      {/* <Link to={"/"}>
        <Icons.logoICon className="absolute hidden md:flex text-blue-600 top-10 left-10 h-12 w-12" />
      </Link> */}

      <div className="w-full flex items-center justify-center">
        <Card className="bg-white/90 backdrop-blur-sm border-none w-[40%] p-8 shadow-lg rounded-xl">
          <CardHeader className="flex flex-col gap-4">
            <p className="text-3xl font-bold text-gray-800">Welcome Back</p>
            <p className="text-sm text-gray-600">
              New user?{" "}
              <Link to={"/signup"} className="text-blue-600 hover:underline">
                Create an account
              </Link>
            </p>
          </CardHeader>

          <CardContent>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="text-center flex flex-col gap-5"
            >
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{ required: "Email is required" }}
                render={({ field }) => (
                  <div>
                    <Input
                      {...field}
                      type="email"
                      isInvalid={errors.email ? true : false}
                      classNames={{
                        errorMessage: "text-left",
                      }}
                      errorMessage={errors.email && errors.email.message}
                      label="Email"
                      variant={"bordered"}
                      className="w-full text-black"
                    />
                  </div>
                )}
              />

              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{
                  required: "Password is required",
                  // minLength: {
                  //   value: 6,
                  //   message: "Password must be at least 6 characters",
                  // },
                }}
                render={({ field }) => (
                  <div>
                    <Input
                      {...field}
                      type={isVisible ? "text" : "password"}
                      variant={"bordered"}
                      isInvalid={errors.password ? true : false}
                      errorMessage={errors.password && errors.password.message}
                      classNames={{
                        errorMessage: "text-left",
                      }}
                      label="Password"
                      className="w-full text-black"
                      endContent={
                        <button
                          className="focus:outline-none"
                          type="button"
                          onClick={toggleVisibility}
                        >
                          {isVisible ? (
                            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                          ) : (
                            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                          )}
                        </button>
                      }
                    />
                  </div>
                )}
              />

              <div className="text-blue-600 cursor-pointer underline text-sm text-right">
                Forgot password?
              </div>
              <Button
                disabled={isLoading}
                isLoading={isLoading}
                color="primary"
                className="w-full rounded-lg font-bold py-3"
                type="submit"
              >
                Login
              </Button>
              <div className="relative flex items-center">
                <Divider className="flex-1" />
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="px-2 text-gray-400">Or</span>
                </div>
                <Divider className="flex-1" />
              </div>
              <Button
                color="secondary"
                className="w-full rounded-lg font-bold py-3"
                onClick={() => {
                  googleSignIn()
                    .then((result) => {
                      if (result?.user) {
                        providerSignIn(result);
                      }
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                }}
              >
                <Icons.google className="mr-2 h-5 w-5" />
                Continue with Google
              </Button>
            </form>
          </CardContent>
          <CardFooter className="text-center text-sm text-gray-500">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </CardFooter>
        </Card>
      </div>
    </motion.div>
  );
};

export default SignIn;

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "-100vh",
  },
  exit: {
    x: "100vh",
    transition: {
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      type: "spring",
    },
  },
};
