import DomainTable from "@/components/data/domain-table";
import DomainTableFile from "@/components/data/domain-table-file";
import RuleCard from "@/components/data/rule-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const page = () => {
  return (
    <div>
      <RuleCard />
      <Tabs defaultValue="Đánh giá thủ công">
        <TabsList>
          <TabsTrigger value="Đánh giá thủ công">Đánh giá thủ công</TabsTrigger>
          <TabsTrigger value="Upload file đánh giá">
            Upload file đánh giá
          </TabsTrigger>
        </TabsList>

        <TabsContent value="Đánh giá thủ công">
          <DomainTable />
        </TabsContent>

        <TabsContent value="Upload file đánh giá">
          <DomainTableFile />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
