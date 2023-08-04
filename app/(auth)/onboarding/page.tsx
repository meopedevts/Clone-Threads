import AccountProfile from '@/components/forms/AccountProfile'
import React from 'react'
import { currentUser } from '@clerk/nextjs'

export default async function Page() {
  const user = await currentUser()

  const userInfo = {}

  // const userData = {
  //   id: 'WILL COME FROM DATABASE...',
  //   objectId: userInfo?._id,
  //   username: userInfo?.username || user?.username,
  //   name: userInfo?.name || user?.firstName || '',
  //   bio: userInfo?.bio || '',
  //   image: userInfo?.image || user?.imageUrl,
  // }

  const userData = {
    id: 'WILL COME FROM DATABASE...',
    objectId: 'a',
    username: 'a',
    name: 'a',
    bio: 'a',
    image: 'a',
  }

  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <h1 className="head-text">Onboarding</h1>
      <p className="mt-3 text-base-regular text-light-2">
        Complete yout profile now to use Threads
      </p>
      <section className="mt-9 bg-dark-2 p-10">
        <AccountProfile user={userData} btnTitle="Continue" />
      </section>
    </main>
  )
}
