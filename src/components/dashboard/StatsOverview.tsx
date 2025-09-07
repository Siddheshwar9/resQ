import { TrendingUp, Users, AlertTriangle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
  trend: "up" | "down" | "neutral";
  variant?: "default" | "emergency" | "safe";
}

function StatCard({ title, value, change, icon: Icon, trend, variant = "default" }: StatCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "emergency":
        return "bg-emergency/10 border-emergency/20";
      case "safe":
        return "bg-safe/10 border-safe/20";
      default:
        return "bg-card border-border";
    }
  };

  const getTrendColor = () => {
    switch (trend) {
      case "up":
        return variant === "emergency" ? "text-emergency" : "text-safe";
      case "down":
        return variant === "emergency" ? "text-safe" : "text-emergency";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <Card className={`${getVariantStyles()} shadow-card hover:shadow-lg transition-all duration-300`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <Icon className={`h-4 w-4 ${variant === "emergency" ? "text-emergency" : variant === "safe" ? "text-safe" : "text-primary"}`} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        <p className={`text-xs ${getTrendColor()} flex items-center gap-1 mt-1`}>
          {trend === "up" && <TrendingUp className="h-3 w-3" />}
          {trend === "down" && <TrendingUp className="h-3 w-3 rotate-180" />}
          {change}
        </p>
      </CardContent>
    </Card>
  );
}

export function StatsOverview() {
  const stats = [
    {
      title: "Active Reports",
      value: "47",
      change: "+12 from last hour",
      icon: AlertTriangle,
      trend: "up" as const,
      variant: "emergency" as const
    },
    {
      title: "Verified Incidents",
      value: "23",
      change: "+5 verified today",
      icon: CheckCircle,
      trend: "up" as const,
      variant: "safe" as const
    },
    {
      title: "Active Citizens",
      value: "1,247",
      change: "+89 new reporters",
      icon: Users,
      trend: "up" as const
    },
    {
      title: "Response Time",
      value: "4.2 min",
      change: "-1.3 min improvement",
      icon: TrendingUp,
      trend: "down" as const,
      variant: "safe" as const
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-slide-up">
      {stats.map((stat, index) => (
        <div
          key={stat.title}
          className="animate-slide-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <StatCard {...stat} />
        </div>
      ))}
    </div>
  );
}