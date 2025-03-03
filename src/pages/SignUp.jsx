import {
  Avatar,
  AvatarIcon,
  Button,
  Input,
  Select,
  SelectItem,
} from "@heroui/react";
import { ReloadIcon } from "@radix-ui/react-icons";
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
import { Icons } from "@/assets/icons/Icons";
import { AuthContext } from "@/hooks/AuthContextProvider";
import usePostMutate from "@/hooks/shared/usePostMutate";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { imageUpload } from "../helpers/cloudinary";
import ImageSelector from "../others/ImageSelector";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState();
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);
  const location = useLocation();
  const { path } = location.state || {};

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const {
    control,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
    watch,
  } = useForm();

  const onSuccess = (res) => {
    Cookies.set("user", res?.data?.data?.accessToken, { expires: 30 });
    setUser(res?.data?.data?.user);
    toast.success("Successfully Created User");
    navigate(path || "/dashboard");
    setIsLoading(false);
  };

  const onError = (err) => {
    toast.error(err?.response?.data?.message || "Something went wrong");
    setIsLoading(false);
  };

  const { mutate } = usePostMutate("/users/", onSuccess, onError);

  const onSubmit = async (userData) => {
    setIsLoading(true);
    if (!userData.avatar) {
      setIsLoading(false);
      return setError("avatar", {
        type: "manual",
        message: "Image is required.",
      });
    }

    console.log(userData);
    // mutate(userData);
  };

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleFileChange = async (e) => {
    let loadId = toast.loading("Uploading Image Please Wait...");
    const selectedFile = e.target.files?.[0];
    console.log(selectedFile);
    if (selectedFile) {
      try {
        const imageUrl = await imageUpload(selectedFile);
        console.log(imageUrl);
        // const { secure_url } = imageUrl;
        // setValue("avatar", secure_url);
        // clearErrors("avatar");
        // setAvatarUrl(secure_url);
        // toast.dismiss(loadId);
        // toast.success("Uploaded Successfully");
      } catch (e) {
        console.log(e);
        toast.error("Something went wrong");
      } finally {
        toast.dismiss(loadId);
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="relative min-h-screen bg-[#210d44] flex items-center justify-center"
    >
      <div className="w-full flex items-center justify-center">
        <Card className="bg-white/90 backdrop-blur-sm border-none w-[40%] p-8 shadow-lg rounded-xl">
          <CardHeader className="flex flex-col gap-4">
            <p className="text-3xl font-bold text-gray-800">
              Get Started Absolutely Free
            </p>
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to={"/login"} className="text-blue-600 hover:underline">
                Sign In
              </Link>
            </p>
          </CardHeader>

          <CardContent>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="text-center flex flex-col gap-5"
            >
              <div className="flex justify-center items-center gap-4">
                {avatarUrl ? (
                  <ImageSelector handleFileChange={handleFileChange}>
                    <Avatar
                      isBordered
                      size="md"
                      classNames={{
                        base: "h-[50px]",
                      }}
                      radius="sm"
                      src={avatarUrl}
                    />
                  </ImageSelector>
                ) : (
                  <ImageSelector handleFileChange={handleFileChange}>
                    <Avatar
                      isBordered
                      size="md"
                      classNames={{
                        base: "h-[50px]",
                      }}
                      radius="sm"
                      icon={<AvatarIcon />}
                    />
                  </ImageSelector>
                )}

                <div className="w-full">
                  <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Name is required" }}
                    render={({ field }) => (
                      <div>
                        <Input
                          {...field}
                          type="text"
                          isInvalid={errors.name ? true : false}
                          classNames={{
                            errorMessage: "text-left",
                          }}
                          errorMessage={errors.name && errors.name.message}
                          label="Name"
                          variant={"bordered"}
                          className="text-black"
                        />
                      </div>
                    )}
                  />
                </div>
              </div>

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
                      className="text-black"
                    />
                  </div>
                )}
              />

              <Controller
                name="mobileNo"
                control={control}
                defaultValue=""
                rules={{ required: "Mobile no. is required" }}
                render={({ field }) => (
                  <div>
                    <Input
                      {...field}
                      type="text"
                      isInvalid={errors.mobile ? true : false}
                      classNames={{
                        errorMessage: "text-left",
                      }}
                      errorMessage={errors.mobile && errors.mobile.message}
                      label="Mobile No."
                      variant={"bordered"}
                      className="text-black"
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
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                }}
                render={({ field }) => (
                  <div>
                    <Input
                      {...field}
                      type={isVisible ? "text" : "password"}
                      variant={"bordered"}
                      className="text-black"
                      isInvalid={errors.password ? true : false}
                      errorMessage={errors.password && errors.password.message}
                      classNames={{
                        errorMessage: "text-left",
                      }}
                      label="Password"
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

              {/* <Controller
                name="confirmPassword"
                control={control}
                defaultValue=""
                rules={{
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                }}
                render={({ field }) => (
                  <div>
                    <Input
                      {...field}
                      type={isVisible ? "text" : "password"}
                      isInvalid={errors.confirmPassword ? true : false}
                      errorMessage={
                        errors.confirmPassword && errors.confirmPassword.message
                      }
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
                      variant={"bordered"}
                      className="text-black"
                      classNames={{
                        errorMessage: "text-left",
                      }}
                      label="Confirm Password"
                    />
                  </div>
                )}
              /> */}

              {errors.avatar && (
                <p className="text-left text-danger text-sm mt-2">
                  {errors.avatar.message}
                </p>
              )}

              <Button
                disabled={isLoading}
                color="primary"
                className="w-full rounded-lg font-bold py-3"
                type="submit"
              >
                {isLoading ? (
                  <>
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                    Creating
                  </>
                ) : (
                  <>Create Account</>
                )}
              </Button>
            </form>

            <div className="text-muted-foreground text-sm text-center mt-5">
              By signing up, I agree to{" "}
              <span className="text-primary underline cursor-pointer">
                Terms of Service
              </span>
              .
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default SignUp;

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
