import Avatar from "@mui/material/Avatar";
import { getInitials } from "../utils";

export const ProfilePhoto = ({
  src = "",
  user_name = "",
}: {
  src: string;
  user_name: string;
}) => {
  return (
    <Avatar
      src={src}
      alt={user_name}
      sx={{ width: 24, height: 24, fontSize: "16px" }}
    >
      {getInitials(user_name)}
    </Avatar>
  );
};
