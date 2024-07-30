import { Button, Card, CardBody, CardFooter, CardHeader, Switch } from "@nextui-org/react";
import { useId } from "react";

interface NotificationSwitchProps {
  label: string;
  description: string;
  active: boolean;
}

function NotificationSwitch({ label, description, active }: NotificationSwitchProps) {
  const notificationIdEl = useId();

  return (
    <div className="flex items-center justify-between">
      <label htmlFor={notificationIdEl} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col space-y-1">
        <span>{label}</span>
        <span className="text-xs font-normal leading-snug">{description}</span>
      </label>
      <Switch id={notificationIdEl} defaultSelected={active} />
    </div>
  );
}

const NOTIFICATION_SETTING_DATA_DUMMIES = [
  {
    label: "Email Notifications",
    description: "Receive email notifications for important updates",
    active: true,
  },
  {
    label: "Push Notifications",
    description: "Receive push notifications for important updates",
    active: true,
  },
  {
    label: "SMS Notifications",
    description: "Receive SMS notifications for important updates",
    active: false,
  },
];

export function NotificationSettings() {
  return (
    <Card className="border-none w-full max-w-2xl bg-background">
      <CardHeader className="items-start flex-col space-y-1.5 p-6">
        <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Notification Settings</h3>
        <p className="text-sm">Customize how you receive notifications</p>
      </CardHeader>
      <CardBody className="p-6">
        <div className="grid grid-cols-1 gap-4">
          {NOTIFICATION_SETTING_DATA_DUMMIES.map((notificationSetting, index) => (
            <NotificationSwitch key={index} label={notificationSetting.label} description={notificationSetting.description} active={notificationSetting.active} />
          ))}
        </div>
      </CardBody>
      <CardFooter className="flex items-center justify-center p-4 gap-2">
        <Button variant="ghost" color="primary" className="w-full" type="button">
          Save Changes
        </Button>
      </CardFooter>
    </Card>
  );
}
