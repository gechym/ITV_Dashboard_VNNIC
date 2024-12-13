import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DomainTable from "@/components/domain/domain-table";
import DomainStats from "@/components/domain/domain-stats";
const page = () => {
  return <div>
    <Tabs defaultValue="Bảng tên miền">
    <TabsList>
      <TabsTrigger value="Bảng tên miền">Bảng tên miền</TabsTrigger>
      <TabsTrigger value="Thống kê tên miền">
        Thống kê
      </TabsTrigger>
    </TabsList>

    <TabsContent value="Bảng tên miền">
      <DomainTable />
    </TabsContent>
    <TabsContent value="Thống kê tên miền">
      <DomainStats/>
    </TabsContent>
    </Tabs>
  </div>;

};

export default page; 
