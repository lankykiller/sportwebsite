import { db } from "@/src/db"
import { users } from "@/src/db/schema"
import { currentUser } from "@clerk/nextjs/server"

export async function syncUser() {
console.log("taalla usertodb")
  try {
    const user = await currentUser()
    
    if (!user) {
      return null
    }

    await db.insert(users).values({
      id: user.id,
      name: user.fullName || 'No name provided',
      email: user.primaryEmailAddressId || 'No email provided'
    })
    console.log("added")
    return { success: true }
  } catch (error) {
    console.error('Error syncing user:', error)
    return { success: false, error }
  }
}

