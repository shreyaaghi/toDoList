import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    const supabase = createRouteHandlerClient({ cookies });
    let data: {item:string} = await req.json();
    // const {data:user} = await supabase.auth.getSession();
    // if (user) {
        const {data:todoitem, error} = await supabase.from("ToDoItems").insert([{
            task:data.item
        }]).select();
        if (error) {
            return NextResponse.json({status:500, error});
        }
        return NextResponse.json({todoitem});
    // }
}