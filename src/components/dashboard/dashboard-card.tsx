import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface DashboardCardProps {
  title: string;
  description: string;
  content: string;
}

export function DashboardCard({
  title,
  description,
  content,
}: DashboardCardProps) {
  return (
    <Card className="bg-card text-card-foreground">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
    </Card>
  );
}
