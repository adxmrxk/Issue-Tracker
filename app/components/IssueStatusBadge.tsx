import React from 'react'
import { Status, Issue } from '../generated/prisma'
import { Badge } from '@radix-ui/themes'

const statusMap: Record<Status, {label: string, color: 'red' | 'violet' | 'green'}> = {
    OPEN: {label: 'Open', color: 'red'},
    IN_PROGRESS: {label: 'In Progess', color: 'violet'},
    CLOSED: {label: 'Closed', color: 'green'}
};

const IssueStatusBadge = ( {status }: {status: Status}) => {
  return (
    <div> 
        <Badge color = {statusMap[status].color}>{statusMap[status].label}</Badge>

    </div>
  )
}

export default IssueStatusBadge