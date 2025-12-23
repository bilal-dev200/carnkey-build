"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { authApi } from "@/lib/api/auth";
import { dropDownApi } from "@/lib/api/dropdown";
import Saleform from "./Saleform";

// ✅ Validation Schema
const schema = yup.object().shape({
  slug: yup.string().required("Slug is required"),
  vin: yup.string().required("VIN is required"),
  plateNumber: yup.string().required("Plate Number is required"),
  // mileage: yup
  //   .number()
  //   .typeError("Mileage must be a number")
  //   .positive("Mileage must be positive")
  //   .required("Mileage is required"),
  //    price: yup
  //   .number()
  //   .typeError("Price must be a number")
  //   .positive("Price must be positive")
  //   .required("Price is required"),
  //    location: yup.string().required("Location is required"),
  // zipCode: yup
  //   .string()
  //   .matches(/^\d{5}$/, "Zip Code must be 5 digits")
  //   .required("Zip Code is required"),
  bodyTypeId: yup.string().required("Body Type is required"),
  condition: yup.string().required("Condition is required"),
  vehicleModelId: yup.string().required("Vehicle Model is required"),
  trimId: yup.string().required("Trim is required"),
  exteriorColorId: yup.string().required("Exterior Color is required"),
  interiorColorId: yup.string().required("Interior Color is required"),
  // description: yup
  //   .string()
  //   .min(10, "Description must be at least 10 characters")
  //   .required("Description is required"),
  vehicleImages: yup
    .mixed()
    .test("required", "At least one image is required", (value) => {
      return value && value.length > 0;
    }),
});

export default function VehicleForm() {
  // ✅ Dropdown Options (with IDs)
  // const [bodyTypes] = useState([
  //   { id: 1, name: "SUV" },
  //   { id: 2, name: "Sedan" },
  //   { id: 3, name: "Hatchback" },
  //   { id: 4, name: "Truck" },
  // ]);

  const [conditions] = useState([
    { id: "NEW", name: "NEW" },
    { id: "USED", name: "USED" },
    { id: "DEMO", name: "DEMO" },
    { id: "CERTIFIED_PRE_OWNED", name: "CERTIFIED_PRE_OWNED" },
  ]);

  // const [vehicleModels] = useState([
  //   { id: 1, name: "Toyota Corolla" },
  //   { id: 2, name: "Honda Civic" },
  //   { id: 3, name: "Ford F-150" },
  // ]);

  // const [trims] = useState([
  //   { id: 1, name: "Base" },
  //   { id: 2, name: "Sport" },
  //   { id: 3, name: "Luxury" },
  // ]);

  // const [exteriorColors] = useState([
  //   { id: 1, name: "Black" },
  //   { id: 2, name: "White" },
  //   { id: 3, name: "Blue" },
  //   { id: 4, name: "Red" },
  // ]);

  // const [interiorColors] = useState([
  //   { id: 1, name: "Black" },
  //   { id: 2, name: "Beige" },
  //   { id: 3, name: "Gray" },
  // ]);
  const [bodyTypes, setBodyTypes] = useState([]);
  const [vehicleModels, setVehicleModels] = useState([]);
  const [trims, setTrims] = useState([]);
  const [exteriorColors, setExteriorColors] = useState([]);
  const [interiorColors, setInteriorColors] = useState([]);

  useEffect(() => {
    const fetchDropdowns = async () => {
      try {
        const [body, models, trim, colors] = await Promise.all([
          dropDownApi.getBodyTypelist(),
          // dropDownApi.getBrandlist(),
          dropDownApi.getVehiclemodel(),

        dropDownApi.getTrimlist(),
          dropDownApi.getColorlist(),
        ]);
        console.log('body', body)
        setBodyTypes(body?.data || []);
        setVehicleModels(models?.data || []);
        setTrims(trim?.data || []);
        setExteriorColors(colors?.data || []); // 👈 same API
        setInteriorColors(colors?.data || []); // 👈 same API (adjust if API distinguishes them)
      } catch (err) {
        console.error("❌ Error fetching dropdowns:", err);
      }
    };

    fetchDropdowns();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      console.log('cars', formData)
      // simple fields
      // Object.keys(data).forEach((key) => {
      //   if (key !== "vehicleImages") {
      //     formData.append(key, data[key]);
      //   }
      // });

      // multiple images
      // if (data.vehicleImages && data.vehicleImages.length > 0) {
      //   for (let i = 0; i < data.vehicleImages.length; i++) {
      //     formData.append("vehicleImages", data.vehicleImages[i]);
      //   }
      // }

      // simple fields
      Object.keys(data).forEach((key) => {
        if (key !== "vehicleImages") {
          formData.append(key, data[key]);
        }
      });

      // multiple images (FileList → files array)
      if (data.vehicleImages && data.vehicleImages.length > 0) {
        Array.from(data.vehicleImages).forEach((file) => {
          formData.append("vehicleImages", file);
        });
      }


      // API call
      const response = await authApi.addVechicle(formData);

      console.log("✅ Vehicle Added:", response.data);
      alert("Vehicle added successfully!");
      reset();
    } catch (error) {
      console.error("❌ Error adding vehicle:", error);
      alert("Failed to add vehicle. Please try again.");
    }
  };

  return (
    <>
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-100 flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-6xl bg-white shadow-2xl rounded-2xl p-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">
           Add Vehicle
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Slug */}
          <InputField label="Slug" name="slug" register={register} errors={errors} />

          {/* VIN */}
          <InputField label="VIN" name="vin" register={register} errors={errors} />

          {/* Price */}
          {/* <InputField label="Price" name="price" register={register} errors={errors} /> */}

          {/* <InputField label="Location" name="location" register={register} errors={errors} /> */}



          {/* Plate Number */}
          <InputField
            label="Plate Number"
            name="plateNumber"
            register={register}
            errors={errors}
          />

          {/* Mileage */}
          {/* <InputField
            label="Mileage"
            name="mileage"
            type="number"
            register={register}
            errors={errors}
          /> */}

          {/* Zip Code */}
          {/* <InputField
            label="Zip Code"
            name="zipCode"
            register={register}
            errors={errors}
          /> */}

          {/* Body Type */}
          <DropdownField
            label="Body Type"
            name="bodyTypeId"
            options={bodyTypes}
            register={register}
            errors={errors}
          />

          {/* Condition */}
          <DropdownField
            label="Condition"
            name="condition"
            options={conditions}
            register={register}
            errors={errors}
          />

          {/* Vehicle Model */}
          <DropdownField
            label="Vehicle Model"
            name="vehicleModelId"
            options={vehicleModels}
            register={register}
            errors={errors}
          />

          {/* Trim */}
          <DropdownField
            label="Trim"
            name="trimId"
            options={trims}
            register={register}
            errors={errors}
          />

          {/* Exterior Color */}
          <DropdownField
            label="Exterior Color"
            name="exteriorColorId"
            options={exteriorColors}
            register={register}
            errors={errors}
          />

          {/* Interior Color */}
          <DropdownField
            label="Interior Color"
            name="interiorColorId"
            options={interiorColors}
            register={register}
            errors={errors}
          />

          {/* Description - span full row */}
          {/* <div className="flex flex-col md:col-span-2 lg:col-span-3">
            <label className="text-gray-700 font-semibold mb-1">Description</label>
            <textarea
              {...register("description")}
              rows="4"
              className="p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition"
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm">{errors.description.message}</p>
            )}
          </div> */}

          {/* Vehicle Images - span full row */}
          <div className="flex flex-col md:col-span-2 lg:col-span-3">
            <label className="text-gray-700 font-semibold mb-1">
              Vehicle Images
            </label>
            <input
              type="file"
              multiple
              {...register("vehicleImages")}
              onChange={(e) => {
                // manually set the files in react-hook-form
                const files = e.target.files;
                if (files.length > 0) {
                  // override the value inside form state
                  e.target.form.vehicleImages = files;
                }
              }}
              className="p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition"
            />
            {errors.vehicleImages && (
              <p className="text-red-500 text-sm">
                {errors.vehicleImages.message}
              </p>
            )}
          </div>


          {/* Submit Button */}
          <div className="md:col-span-2 lg:col-span-3">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition shadow-md"
            >
              Add Vehicle
            </button>
          </div>
        </form>
      </div>
      
    </div>
    <Saleform/>
    </>
  );
}

// ✅ Reusable Input Component
const InputField = ({ label, name, type = "text", register, errors }) => (
  <div className="flex flex-col">
    <label className="text-gray-700 font-semibold mb-1">{label}</label>
    <input
      type={type}
      {...register(name)}
      className="p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition"
    />
    {errors[name] && <p className="text-red-500 text-sm">{errors[name].message}</p>}
  </div>
);

// ✅ Reusable Dropdown Component
const DropdownField = ({ label, name, options, register, errors }) => (
  <div className="flex flex-col">
    <label className="text-gray-700 font-semibold mb-1">{label}</label>
    <select
      {...register(name)}
      className="p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition"
    >
      <option value="">Select {label}</option>
      {options.map((opt) => (
        <option key={opt.id} value={opt.id}>
          {opt.name}
        </option>
      ))}
    </select>
    {errors[name] && <p className="text-red-500 text-sm">{errors[name].message}</p>}
  </div>
);



