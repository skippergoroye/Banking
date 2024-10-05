'use server';

import { ID, Query } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { encryptId, extractCustomerIdFromUrl, parseStringify } from "../utils";
// import { CountryCode, ProcessorTokenCreateRequest, ProcessorTokenCreateRequestProcessorEnum, Products } from "plaid";

import { plaidClient } from '@/lib/plaid';
import { revalidatePath } from "next/cache";
import { addFundingSource, createDwollaCustomer } from "./dwolla.actions";

const {
  APPWRITE_DATABASE_ID: DATABASE_ID,
  APPWRITE_USER_COLLECTION_ID: USER_COLLECTION_ID,
  APPWRITE_BANK_COLLECTION_ID: BANK_COLLECTION_ID,
} = process.env;



export const signIn = async ({ email, password }: signInProps) => {
  try {
    const { account } = await createAdminClient();
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    // const user = await getUserInfo({ userId: session.userId }) 

    // return parseStringify(user);
  } catch (error) {
    console.error('Error', error);
  }
}

export const signUp = async ({ password, ...userData }: SignUpParams) => {
  const { email, firstName, lastName } = userData;
  
  // let newUserAccount;

  try {
    const { account } = await createAdminClient();

   const newUserAccount = await account.create(
      ID.unique(), 
      email, 
      password, 
      `${firstName} ${lastName}`
    );

    // if(!newUserAccount) throw new Error('Error creating user')

    // const dwollaCustomerUrl = await createDwollaCustomer({
    //   ...userData,
    //   type: 'personal'
    // })

    // if(!dwollaCustomerUrl) throw new Error('Error creating Dwolla customer')

    // const dwollaCustomerId = extractCustomerIdFromUrl(dwollaCustomerUrl);

    // const newUser = await database.createDocument(
    //   DATABASE_ID!,
    //   USER_COLLECTION_ID!,
    //   ID.unique(),
    //   {
    //     ...userData,
    //     userId: newUserAccount.$id,
    //     dwollaCustomerId,
    //     dwollaCustomerUrl
    //   }
    // )

    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify(newUserAccount );
  } catch (error) {
    console.error('Error', error);
  }
}



export const logoutAccount = async () => {
  try {
    const { account } = await createSessionClient();

    cookies().delete('appwrite-session');

    await account.deleteSession('current');
  } catch (error) {
    return null;
  }
}
