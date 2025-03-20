"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const getAllSkills = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/skills`, {
      next: {
        tags: ["SKILL"],
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getSkillById = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/skills/${id}`,
      {
        next: {
          tags: ["SKILL"],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const addSkill = async (blogData: any) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/skills`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      body: JSON.stringify(blogData),
    });
    revalidateTag("SKILL");

    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const updateSkillById = async (id: string, updatedSkillData: any) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/skills/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("accessToken")!.value,
        },
        body: JSON.stringify(updatedSkillData),
      }
    );
    revalidateTag("SKILL");
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const deleteSkillById = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/skills/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );
    revalidateTag("SKILL");
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
