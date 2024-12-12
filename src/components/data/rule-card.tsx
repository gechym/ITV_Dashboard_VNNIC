import React from "react";

const RuleCard = () => {
  return (
    <div className="bg-yellow-100 text- p-4 mb-6 rounded-lg">
      <h2 className="font-bold mb-2">
        Nguyên tắc: Gán nhãn tin nhiệm cho tên miền
      </h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Chiều dài tên miền ngắn (khoảng dưới 10) và phần trăm của chữ số xuất
          hiện quá 50%. Vd: &quot;tn1976.com&rdquo;
        </li>
        <li>
          Những tên miền ngẫu nhiên, lộn xộn không mang ý nghĩa nào rõ ràng hay
          viết tắt (entropy cao). Vd: &quot;ds90djg.com&quot;
        </li>
        <li>
          Những tên miền có các Top-level-domain (TLD) lạ, không thông dụng. Vd:
          &quot;shopee.xyz&quot;
        </li>
        <li>
          Những tên miền chứa các từ khóa nhạy cảm, có dấu hiệu bất thường. Vd:
          &quot;danhbaivip88.bet&quot;, &quot;phimsex.com&quot; chứa các từ khóa
          bất thường như &quot;danhbai&quot;, &quot;sex&quot;.
        </li>
      </ul>
    </div>
  );
};

export default RuleCard;
