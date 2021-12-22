import { notification } from "antd";

export const openNotification = () => {
    const args = {
      message: "Gist Created",
      description: "Your gist has been created.",
      duration: 0,
    };
    notification.success(args);
  };
