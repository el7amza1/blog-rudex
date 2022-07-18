<Accordion>
<Accordion.Item eventKey={post.id} >
  <Accordion.Header>Comments</Accordion.Header>
  <Accordion.Body>
    {post.comments.map((itm) => (
      <Alert variant="info" key={itm.id}>
        {/* {console.log(itm )} */}

        <b title="Source Title">User Id is:{itm.userId}</b>
        <div>{itm.body}</div>
      </Alert>
    ))}
  </Accordion.Body>
</Accordion.Item>
</Accordion>