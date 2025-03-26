import { useForm, SubmitHandler } from "react-hook-form";
import * as React from "react";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    completeLocation: string;
}

export const MyForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 border border-gray-300 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-center mb-5">Registration Form</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
                <div>
                    <label htmlFor="firstName" className="block font-medium">First Name</label>
                    <input
                        id="firstName"
                        type="text"
                        {...register("firstName", { required: "First Name is required" })}
                        className="w-full p-2 border rounded-md"
                    />
                    {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
                </div>

                <div>
                    <label htmlFor="lastName" className="block font-medium">Last Name</label>
                    <input
                        id="lastName"
                        type="text"
                        {...register("lastName", { required: "Last Name is required" })}
                        className="w-full p-2 border rounded-md"
                    />
                    {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
                </div>

                <div>
                    <label htmlFor="email" className="block font-medium">Email Address</label>
                    <input
                        id="email"
                        type="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email address",
                            },
                        })}
                        className="w-full p-2 border rounded-md"
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="city" className="block font-medium">City</label>
                        <input
                            id="city"
                            type="text"
                            {...register("city", { required: "City is required" })}
                            className="w-full p-2 border rounded-md"
                        />
                        {errors.city && <p className="text-red-500">{errors.city.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="state" className="block font-medium">State</label>
                        <input
                            id="state"
                            type="text"
                            {...register("state", { required: "State is required" })}
                            className="w-full p-2 border rounded-md"
                        />
                        {errors.state && <p className="text-red-500">{errors.state.message}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="zip" className="block font-medium">ZIP</label>
                        <input
                            id="zip"
                            type="text"
                            {...register("zip", { required: "ZIP is required" })}
                            className="w-full p-2 border rounded-md"
                        />
                        {errors.zip && <p className="text-red-500">{errors.zip.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="country" className="block font-medium">Country</label>
                        <input
                            id="country"
                            type="text"
                            {...register("country", { required: "Country is required" })}
                            className="w-full p-2 border rounded-md"
                        />
                        {errors.country && <p className="text-red-500">{errors.country.message}</p>}
                    </div>
                </div>

                <div>
                    <label htmlFor="completeLocation" className="block font-medium">Complete Location</label>
                    <textarea
                        id="completeLocation"
                        {...register("completeLocation", { required: "Complete Location is required" })}
                        className="w-full p-2 border rounded-md"
                    />
                    {errors.completeLocation && <p className="text-red-500">{errors.completeLocation.message}</p>}
                </div>

                <button
                    type="submit"
                    className="w-full p-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};
