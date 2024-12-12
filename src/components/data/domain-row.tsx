/* eslint-disable @typescript-eslint/ban-ts-comment */
import { TableRow, TableCell } from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Controller,
  Control,
  FieldErrorsImpl,
  UseFormRegister,
} from "react-hook-form";
import {
  LABEL_OPTIONS,
  REASON_OPTIONS,
  STATUS_OPTIONS,
  TYPE_OPTIONS,
} from "@/constants";

interface DomainRowProps {
  field: TDomainType & { id: string };
  index: number;
  control: Control<{ domains: TDomainType[] }>;
  register: UseFormRegister<{ domains: TDomainType[] }>;
  errors: FieldErrorsImpl<{
    domains: TDomainType[];
  }>;
  remove: (index?: number | number[]) => void;
}

export function DomainRow({
  field,
  index,
  control,
  register,
  errors,
  remove,
}: DomainRowProps) {
  return (
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
                    <SelectItem key={option.value} value={option.value}>
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
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.domains?.[index]?.type && (
                <span className="text-red-500 text-sm">
                  {/* //@ts-ignore */}
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
                    <SelectItem key={option.value} value={option.value}>
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
          defaultValue={field.date}
          readOnly
          className="w-full px-2 py-1 border rounded bg-gray-100"
        />
      </TableCell>
      <TableCell>
        <Controller
          name={`domains.${index}.status`}
          control={control}
          rules={{ required: "Vui lòng chọn trạng thái hoạt động" }}
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
                    <SelectItem key={option.value} value={option.value}>
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
  );
}
