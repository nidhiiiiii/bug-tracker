import { NextRequest, NextResponse } from "next/server"
import { z } from "zod";
import prisma from '../../../prisma/client';


const createIssueSchema= z.object({
    title:z.string().min(1).max(255),
    description:z.string().min(1).max(255)
})
export async function POST(request:NextRequest){
    try {
        const body=await request.json();
    /*to access properties on a Promise object, not the resolved value of the Promise.
    The request.json() method is asynchronous and returns a Promise.
    ,need to await the Promise to get the actual JSON body*/

    const Validation= createIssueSchema.safeParse(body);
    if(!Validation.success)
        return NextResponse.json(Validation.error.errors,{status:400})
    
    const newIssue = await prisma.issue.create({
        data:{
            title:body.title,
            description:body.description
        }
    })
    return NextResponse.json(newIssue,{status:201})

    } catch (error) {
        console.error(error);
        return NextResponse
        .json({ error: 'An error occurred on the server' }, {status: 500});
    }

}
