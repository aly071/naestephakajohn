export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method not allowed" });
    }
  
    try {
      const {
        firstName,
        lastName,
        email,
        attending,
        guests,
        dietary,
        message,
      } = req.body;
  
      const data = new URLSearchParams();
  
      // ⚠️ YOUR Google Form entry IDs
      data.append("entry.1498135098", firstName);
      data.append("entry.1155229246", lastName);
      data.append("entry.719487143", email);
      data.append("entry.877086558", attending);
      data.append("entry.953371016", guests);
      data.append("entry.437024174", dietary);
      data.append("entry.2606285", message);
  
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSehWq7YLOgjwrHEJdhZMRqs6l3YlLBAaumg7IEeOKkrcPzAog/formResponse",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: data.toString(),
        }
      );
  
      return res.status(200).json({ success: true });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false });
    }
  }
  