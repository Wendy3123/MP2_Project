const formFields = [
  {
    id: "author",
    type: "text",
    label: "author",
  },
  {
    id: "img_URL",
    type: "text",
    label: "img_URL",
  },
  {
    id: "caption",
    type: "text",
    label: "caption",
  },
];

function PostForm({ form, setForm }) {
  return (
    <Stack>
      <Typography>Create a Post</Typography>
      <Paper component={"form"}>
        {formFields.map((field) => (
          <Box>
            <Typography>{field.label}</Typography>
            <TextField
              name={field.id}
              id={field.id}
              type={field.type}
              fullWidth
              value={form[field.id]}
              onChange={(e) =>
                setForm({
                  ...form,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </Box>
        ))}
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Button>Add New Post</Button>
          <Button>Cancel</Button>
        </Box>
      </Paper>
    </Stack>
  );
}

export default PostForm;
