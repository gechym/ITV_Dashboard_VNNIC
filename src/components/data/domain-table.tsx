"use client";
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableHead as Th,
} from "@/components/ui/table";
import { DomainRow } from "./domain-row";
import { useDomainForm } from "@/hooks/use-form-domains";
import React from "react";

export default function DomainTable() {
  const {
    fields,
    control,
    register,
    handleSubmit,
    errors,
    handleAddRow,
    remove,
    onSubmit,
  } = useDomainForm();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Table>
          <TableHeader>
            <TableRow>
              <Th>Tên miền</Th>
              <Th>Nhãn</Th>
              <Th>Thể loại web</Th>
              <Th>Lý do đánh giá</Th>
              <Th>Ngày đánh giá</Th>
              <Th>Trạng thái hoạt động</Th>
              <Th></Th>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fields.map((field, index) => (
              <DomainRow
                key={field.id}
                field={field}
                index={index}
                control={control}
                register={register}
                errors={errors}
                remove={remove}
              />
            ))}
          </TableBody>
        </Table>
        <div className="flex gap-2 mt-4">
          <button
            type="submit"
            className="px-4 py-2 text-white bg-green-500 rounded"
          >
            Lưu
          </button>
          <button
            onClick={handleAddRow}
            type="button"
            className="px-4 py-2 text-white bg-blue-500 rounded"
          >
            Thêm hàng mới
          </button>
        </div>
      </form>
    </div>
  );
}
