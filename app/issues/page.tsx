import React from 'react'
import '@radix-ui/themes/styles.css';
import { Button ,TextField} from '@radix-ui/themes'
import Link from 'next/link';
const IssuesPage = () => {
  return (
    <div>
        <Button px-5 ml-5><Link href='/issues/new'>new issue</Link></Button>
        {/* <TextField.Root h-10 w-5>
        <TextField.Slot >
        </TextField.Slot>
        </TextField.Root> */}
    </div>
  )
}

export default IssuesPage