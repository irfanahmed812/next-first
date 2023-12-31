import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import { connectToDB } from '@/utils/database';
import User from "@/models/user";

// console.log({
//     clientId: process.env.GOOGLE_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
// })


const handle = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],

    callbacks: {
        async session({ session }) {
            const sessionUser = await User.findOne({
                email: session.user.email
            })

            session.user.id = sessionUser._id.toString();

            return session;

        },
        async signIn({ profile }) {
            try {
                await connectToDB();

                // check if auser already exists
                const userExists = await User.findONe({
                    email: profile.email
                })

                // if not, crate a new user
                if (!userExists) {
                    await User.create({
                        email: profile.email,
                        username: profile.name.replace(" ", " ").toLowerCase(),
                        image: profile.picture
                    })
                }

                return true;

            } catch (error) {
                console.log(error);
                return false;
            }
        }
    },
})

export { handle as GET, handle as POST }