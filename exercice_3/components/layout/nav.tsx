import authOptions from "@/../lib/authOptions";
import { getServerSession } from "next-auth/next";
import Navbar from "./navbar";

export default async function Nav() {
  const session = await getServerSession(authOptions);
  return <Navbar session={session} />;
}
