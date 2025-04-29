import { authConfig } from "@/configs/auth";
import { getServerSession } from "next-auth/next";
export default async function Profile() {
  const session = await getServerSession(authConfig);
  return (
    <div>
      <h1>Profile of {session?.user?.name}</h1>
      {session?.user?.image && (
        <img
          src={session.user.image}
          alt="Profile Picture"
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        />
      )}
      <p>Email: {session?.user?.email}</p>
    </div>
  );
}
