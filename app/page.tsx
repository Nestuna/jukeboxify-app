'use client'

import { LoginButton } from "@/components/auth/LoginButton";
import { LogoutButton } from "@/components/auth/LogoutButton";
import QueueList from "@/components/data-display/QueueList";

import { getAuthSession,  } from "@/lib/auth";
import { getQueue } from "@/lib/spotify";
import { useEffect, useState } from "react";

export default async function Home() {
  const session = await getAuthSession();

  // const [queue, setQueue] = useState([])
  // useEffect(() => {
  //   const queue = getQueue()
  // }, [session])

  if (session) {
     return (
      <main className="flex min-h-screen flex-col items-center p-10 gap-5 bg-base-300">
        <div className="card w-96 bg-base-100 shadow-xl p-5" >
          <div className="card-body">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={session.user?.image ?? ""} />
              </div>
            </div>
            <h2 className="card-title">{session.user?.name}</h2>
            <p>{session.user?.email}</p>
          </div>
          <div className="card-actions justify-end">
            <LogoutButton />
          </div>
        </div>

        <div>
          <QueueList songs={[]} />
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
