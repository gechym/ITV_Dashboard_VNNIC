"use client";

import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Papa from "papaparse";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import {
  LABEL_OPTIONS,
  REASON_OPTIONS,
  STATUS_OPTIONS,
  TYPE_OPTIONS,
} from "@/constants";
import { Button } from "../ui/button";

type TDomainType = {
  id: string;
  domain: string;
  label: string;
  type: string;
  reason: string;
  date: string;
  status: string;
};

export default function DomainTableFile() {
  const [fileLoaded, setFileLoaded] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState("");

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{ domains: TDomainType[] }>({
    defaultValues: {
      domains: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "domains",
  });

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        Papa.parse(file, {
          header: true,
          complete: (results) => {
            const data = results.data;
            const processedDomains = data
              .filter((row: any) => row.url || row.domain)
              .map((row: any) => ({
                id: crypto.randomUUID(),
                domain: row.url || row.domain || "",
                label: "",
                type: "",
                reason: "",
                date: new Date().toISOString().slice(0, 10),
                status: "",
              }));

            // Append dữ liệu mới vào form
            processedDomains.forEach((item) => append(item));
            setFileLoaded(true);
            setUploadedFileName(file.name);
          },
          error: (error) => {
            console.error("Error parsing CSV:", error);
          },
        });
      }
    },
    [append]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "text/csv": [".csv"] },
  });

  const handleRemoveFile = () => {
    reset({ domains: [] });
    setFileLoaded(false);
    setUploadedFileName("");
  };

  // const handleAddRow = () => {
  //   append({
  //     id: crypto.randomUUID(),
  //     domain: "",
  //     label: "",
  //     type: "",
  //     reason: "",
  //     date: new Date().toISOString().slice(0, 10),
  //     status: "",
  //   });
  // };

  const onSubmit = (data: { domains: TDomainType[] }) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="py-8">
        <h1 className="text-2xl font-semibold mb-6">Domain Table</h1>
        <div className="mb-4">
          <div
            {...getRootProps()}
            className={`rounded-lg border-2 border-dashed p-4 rounded cursor-pointer h-[100px] flex justify-center items-center ${
              isDragActive ? "border-blue-500" : "border-gray-300"
            }`}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <span className="text-center">Thả file CSV vào đây...</span>
            ) : (
              <span className="text-center">
                Kéo thả file CSV vào đây hoặc nhấp để chọn
              </span>
            )}
          </div>
          {fileLoaded && (
            <div className="mt-2 flex items-center gap-4">
              <span>
                Tên file: <strong>{uploadedFileName}</strong>
              </span>
              <Button onClick={handleRemoveFile} variant="destructive">
                Xóa file
              </Button>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tên miền</TableHead>
                  <TableHead>Nhãn</TableHead>
                  <TableHead>Thể loại web</TableHead>
                  <TableHead>Lý do đánh giá</TableHead>
                  <TableHead>Ngày đánh giá</TableHead>
                  <TableHead>Trạng thái hoạt động</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {fields.map((field, index) => (
                  <TableRow key={field.id}>
                    <TableCell>
                      <input
                        type="text"
                        {...register(`domains.${index}.domain`, {
                          required: "Vui lòng nhập tên miền",
                        })}
                        className="w-full px-2 py-1 border rounded"
                        defaultValue={field.domain}
                      />
                      {errors.domains?.[index]?.domain && (
                        <span className="text-red-500 text-sm">
                          {errors.domains[index].domain?.message}
                        </span>
                      )}
                    </TableCell>
                    <TableCell>
                      <Controller
                        name={`domains.${index}.label`}
                        control={control}
                        rules={{ required: "Vui lòng chọn nhãn" }}
                        render={({ field: selectField }) => (
                          <>
                            <Select
                              value={selectField.value}
                              onValueChange={selectField.onChange}
                            >
                              <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Chọn nhãn" />
                              </SelectTrigger>
                              <SelectContent>
                                {LABEL_OPTIONS.map((option) => (
                                  <SelectItem
                                    key={option.value}
                                    value={option.value}
                                  >
                                    {option.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            {errors.domains?.[index]?.label && (
                              <span className="text-red-500 text-sm">
                                {errors.domains[index].label?.message}
                              </span>
                            )}
                          </>
                        )}
                      />
                    </TableCell>
                    <TableCell>
                      <Controller
                        name={`domains.${index}.type`}
                        control={control}
                        rules={{ required: "Vui lòng chọn thể loại web" }}
                        render={({ field: selectField }) => (
                          <>
                            <Select
                              value={selectField.value}
                              onValueChange={selectField.onChange}
                            >
                              <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Chọn thể loại" />
                              </SelectTrigger>
                              <SelectContent>
                                {TYPE_OPTIONS.map((option) => (
                                  <SelectItem
                                    key={option.value}
                                    value={option.value}
                                  >
                                    {option.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            {errors.domains?.[index]?.type && (
                              <span className="text-red-500 text-sm">
                                {errors.domains[index].type?.message}
                              </span>
                            )}
                          </>
                        )}
                      />
                    </TableCell>
                    <TableCell>
                      <Controller
                        name={`domains.${index}.reason`}
                        control={control}
                        rules={{ required: "Vui lòng chọn lý do đánh giá" }}
                        render={({ field: selectField }) => (
                          <>
                            <Select
                              value={selectField.value}
                              onValueChange={selectField.onChange}
                            >
                              <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Chọn lý do" />
                              </SelectTrigger>
                              <SelectContent>
                                {REASON_OPTIONS.map((option) => (
                                  <SelectItem
                                    key={option.value}
                                    value={option.value}
                                  >
                                    {option.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            {errors.domains?.[index]?.reason && (
                              <span className="text-red-500 text-sm">
                                {errors.domains[index].reason?.message}
                              </span>
                            )}
                          </>
                        )}
                      />
                    </TableCell>
                    <TableCell>
                      <input
                        type="text"
                        {...register(`domains.${index}.date`)}
                        defaultValue={field.date}
                        readOnly
                        className="w-full px-2 py-1 border rounded bg-gray-100"
                      />
                    </TableCell>
                    <TableCell>
                      <Controller
                        name={`domains.${index}.status`}
                        control={control}
                        rules={{
                          required: "Vui lòng chọn trạng thái hoạt động",
                        }}
                        render={({ field: selectField }) => (
                          <>
                            <Select
                              value={selectField.value}
                              onValueChange={selectField.onChange}
                            >
                              <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Chọn trạng thái" />
                              </SelectTrigger>
                              <SelectContent>
                                {STATUS_OPTIONS.map((option) => (
                                  <SelectItem
                                    key={option.value}
                                    value={option.value}
                                  >
                                    {option.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            {errors.domains?.[index]?.status && (
                              <span className="text-red-500 text-sm">
                                {errors.domains[index].status?.message}
                              </span>
                            )}
                          </>
                        )}
                      />
                    </TableCell>
                    <TableCell>
                      <button
                        onClick={() => remove(index)}
                        type="button"
                        className="px-3 py-1 text-white bg-red-500 rounded"
                      >
                        Xóa
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="flex justify-center">
            <Button type="submit" className="mt-4 w-full sm:w-[300px]">
              Lưu
            </Button>
            {/* <Button onClick={handleAddRow} type="button">
              Thêm hàng mới
            </Button> */}
          </div>
        </form>
      </div>
    </div>
  );
}
