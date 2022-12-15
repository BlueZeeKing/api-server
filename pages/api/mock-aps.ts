export default async function handler(req, res) {
  res.status(200).send(
    JSON.stringify([
      {
        id: 120,
        date_gmt: "Thu, 15 Dec 2022 22:21:55 GMT",
        modified_gmt: "Thu, 15 Dec 2022 22:21:55 GMT",
        slug: "test-date",
        status: "warning",
        link: "",
        title: {
          rendered: "Test message",
        },
      },
    ])
  );
}
