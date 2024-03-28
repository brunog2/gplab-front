"use server";

import { api } from "@/src/services/api";
import { UserFormSchema } from "@/src/ui/forms/UserForm";

interface actionReturnType {
  errors?: { [k in keyof UserFormSchema]?: string };
}

export async function createUserAction(
  prev: any,
  formData: FormData
): Promise<actionReturnType> {
  const data = Object.fromEntries(formData);
  const response = await api.post("user/profile", data);
  console.log(data, response);
  return response.data;
}

export async function updateUserAction(
  prev: any,
  formData: FormData
): Promise<actionReturnType> {
  const data = Object.fromEntries(formData);

  console.log(data);

  return {};
}

export async function deleteUserAction(
  formData: FormData
): Promise<actionReturnType> {
  const data = Object.fromEntries(formData);

  console.log(data.id);

  return {};
}
