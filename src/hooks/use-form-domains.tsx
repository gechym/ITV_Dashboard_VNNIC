// import { useForm, useFieldArray } from "react-hook-form";

// type FormValues = {
//   domains: TDomainType[];
// };

// export function useDomainForm() {
//   const {
//     control,
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormValues>({
//     defaultValues: {
//       domains: [],
//     },
//   });

//   const { fields, append, remove } = useFieldArray({
//     control,
//     name: "domains",
//   });

//   const handleAddRow = () => {
//     append({
//       id: crypto.randomUUID(),
//       domain: "",
//       label: "",
//       type: "",
//       reason: "",
//       date: new Date().toISOString().slice(0, 10),
//       status: "",
//     });
//   };

//   const onSubmit = (data: FormValues) => {
//     console.log("Form Data:", data);
//     // Xử lý dữ liệu sau khi submit
//   };

//   return {
//     fields,
//     control,
//     register,
//     handleSubmit,
//     errors,
//     handleAddRow,
//     remove,
//     onSubmit,
//   };
// }

import { useForm, useFieldArray } from "react-hook-form";

type FormValues = {
  domains: TDomainType[];
};

export function useDomainForm() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      domains: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "domains",
  });

  const handleAddRow = () => {
    append({
      id: crypto.randomUUID(),
      domain: "",
      label: "",
      type: "",
      reason: "",
      date: new Date().toISOString().slice(0, 10),
      status: "",
    });
  };

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
    // Xử lý dữ liệu sau khi submit
  };

  return {
    fields,
    control,
    register,
    handleSubmit,
    errors,
    handleAddRow,
    remove,
    onSubmit,
  };
}
