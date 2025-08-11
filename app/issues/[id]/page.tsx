import React from 'react'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import { Box, Button, Card, Flex, Grid, Heading, Link, Text } from '@radix-ui/themes'
import IssueStatusBadge from '@/app/components/IssueStatusBadge'
import ReactMarkdown from 'react-markdown';
import { Pencil2Icon } from '@radix-ui/react-icons'

interface Props {
  params: Promise<{ id: string }>
}

const IssueDetailPage = async ({ params }: Props) => {
  const { id } = await params;

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) }
  });

  if (!issue) {
    notFound();
  }

  return (
    <Grid columns = {{initial: "1", md: "2" }} gap = "5">
      <Box>

      <Heading>{issue.title}</Heading>
      <Flex className='space-x-3' my="2">
        <IssueStatusBadge status={issue.status}></IssueStatusBadge>
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className='w-fit mt-3 px-3 prose'>
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>

      </Box>
      <Box>
        <Button>
          <Pencil2Icon></Pencil2Icon>
          <Link href = {`/issues/${issue.id}`}>Edit Issue</Link>
        </Button>
      </Box>
    </Grid>
  );
};


export default IssueDetailPage