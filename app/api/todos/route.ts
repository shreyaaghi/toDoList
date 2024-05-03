import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
    const supabase = createRouteHandlerClient({ cookies });
    // const {data:user} = await supabase.auth.getSession();
    // if (user) {
        const {data:todos, error} = await supabase.from("ToDoItems").select();
        if (error) {
            return NextResponse.json({status:500, error});
        }
        return NextResponse.json({todos});
    // }
}