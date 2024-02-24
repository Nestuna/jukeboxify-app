import { LoginButton } from "../src/auth/LoginButton";
import { getAuthSession, getRequiredAuthSession } from "@/src/lib/auth";

export default async function Home() {
  const session = await getAuthSession();

  if (session) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-base-300">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={session.user?.image ?? ""} />
              </div>
            </div>
            <h2 className="card-title">{session.user?.name}</h2>
            <p>{session.user?.email}</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-base-300">
      <div>
        <LoginButton />
      </div>
    </main>
  );
}
